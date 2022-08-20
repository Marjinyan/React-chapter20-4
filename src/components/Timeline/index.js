import React from 'react'
import { PictureContext } from '../../context/SliderContext'
import { SliderOrder } from '../../context/SliderOrder'


class Timeline extends React.Component{
    static contextType = PictureContext
    render(){
        
        
        return <PictureContext.Consumer>
            {
                context => {
                    const {photos, currentIndex, setActivePicture} = context

                    return <SliderOrder.Consumer>
                        {
                            data => {
                                let cssClass = data.list ? 'photo-list' : 'photo-circle'
                                return <div className={cssClass}>
                                    {
                                        photos.map((elm, index) => {
                                            let activeImg=index === currentIndex ? "active" : null
                                            return <img
                                                className={activeImg}
                                                key={index}
                                                alt="timeline item"
                                                src={require("../../"+elm)}
                                                onClick={() => setActivePicture(index)}
                                            />
                                        })
                                    }
                                </div>
                            }
                        }
                    </SliderOrder.Consumer>
                }
            }
            </PictureContext.Consumer>
        
    }
}
export default Timeline
