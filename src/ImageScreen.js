import React from 'react'
import {Text,View,Button} from 'react-native'
import ImageDetails from "../components/ImageDetails"

const ImageScreen=()=>{


    return (

        <>
        <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')}/>
        <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')}/>
        <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')}/>
        </>
    )
}

export default ImageScreen