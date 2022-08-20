import React from 'react'
export const PictureContext = React.createContext()

class PictureContextProvider extends React.Component{

    goNext = () => {
        this.setState(state => {
            const prevState = {...state}
            if(prevState.currentIndex < prevState.photos.length - 1){
            prevState.currentIndex++
            } else{
            prevState.currentIndex = 0
            }
            return prevState
        })
    }

    goPrev = () => {
        this.setState(state => {
            const prevState = {...state}
            if(prevState.currentIndex <= 0){
            prevState.currentIndex = prevState.photos.length - 1
            } else {
            prevState.currentIndex--
            }
            return prevState
        })
    }

    setActivePicture = index => {
        this.setState({currentIndex:index})
    }


    state = {
        photos:[
            "images/1.jpeg",
            "images/2.jpeg",
            "images/3.jpeg",
            "images/4.jpeg",
            "images/5.jpeg",
            "images/6.jpeg",
            "images/7.jpeg",
            "images/8.jpeg",
            "images/9.jpeg",
            "images/10.jpeg",
        ],
        currentIndex:0
    }

    render() {
        return <PictureContext.Provider value={{
            ...this.state,
            setActivePicture:this.setActivePicture,
            goNext:this.goNext,
            goPrev:this.goPrev
        }}>
            {this.props.children}
        </PictureContext.Provider>
    }
}
export default PictureContextProvider