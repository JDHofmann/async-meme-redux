import { render } from '@testing-library/react'
import React from 'react'

export const MemeList = (props) => {

    const styling = {
        maxWidth: "300px",
        margin: "25px"
    }

    const renderMemes = () => {
        return props.memes.map( m => 
            <img style={styling}  src={m.url}></img> )
    }

    return(
        <>
        <h2>Meme List</h2>
        {renderMemes()}
        </>
    )
}