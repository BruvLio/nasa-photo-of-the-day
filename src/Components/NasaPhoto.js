import React from 'react';
import styled from 'styled-components'

const NasaPhotoWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`



const NasaPhoto = (props) => {

    const { photo:{title, date, hdurl, explanation}} = props

    return (
        <NasaPhotoWrapper>
            <h3>{title}</h3>
            <p>{date}</p>
            <img src={hdurl} alt=""/>
            <p className='explanation'>{explanation}</p>
        </NasaPhotoWrapper>
    )
}

export default NasaPhoto;