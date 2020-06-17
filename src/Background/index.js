import React from 'react'
import background from '../resources/background.png'

const Background = () => { 

    return (
        <img src={background} className="h-100vh w-100vw position-fixed" style={{backgroundSize: 'cover', opacity: '0.09', pointerEvents: 'none'}}/>
    )
}

export default Background