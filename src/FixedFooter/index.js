import React from 'react'
import sembakoo from '../resources/sembakoo.svg'

const Footer = () => { 

    return (
        <div style={{
            width: '100%',
            zIndex: '999999',
            bottom: '0.5rem',
            textAlign: 'center',
            position: 'fixed',
            height: '3rem',
        }}>
            <img src={sembakoo} className="h-100"/>
        </div>
    )
}

export default Footer