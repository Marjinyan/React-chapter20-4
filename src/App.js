import React from 'react'
import Slider from './components/Slider'
import PictureContextProvider from './context/SliderContext'
import SliderOrderProvider from './context/SliderOrder'
import './App.css'

class App extends React.Component{
  render() {
    return <PictureContextProvider>
      <SliderOrderProvider>
          <Slider/>
      </SliderOrderProvider>
    </PictureContextProvider>
  }
}
export default App