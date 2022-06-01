import {useState, useEffect} from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';

const container = css`
    width: 100%;
    min-height: 100vh;
    background: #1c273a;
    position: absolute;
    text-align: center;
    color: white;
    button{
        padding: 5px 20px;
        margin: 10px;
        cursor: pointer;
    }
`

const photo_section = css`
    width: 100%;
    max-width: 600px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto;
    overflow: hidden;
    border: 2px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    animation: scale 0.5s linear;
    img{
        width: 100%;
        display: block;
        max-width: 150px;
        height: 100%;
        object-fit: cover;
    }
`

const Spa04 = () => {
    const [photos, setPhotos] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [loading, setLoading] = useState(false)


    const fetchPhotos = async(pageNumber) =>{
        const Access_Key = "VaS3ud1C-0gdW1nw41FbBryaV_Q5obZ04o-3Vi2QC1E"
        const res = await fetch(`https://api.unsplash.com/photos/?client_id=${Access_Key}&page=${pageNumber}&per_page=10`)
        const data = await res.json()
        console.log(data)
        setPhotos(p => [...p, ...data])
        /* setPhotos([...data]) */
        setLoading(true)
    }
    useEffect(()=>{
        fetchPhotos(pageNumber);
    },[pageNumber])

    const loadMore = () =>{
        setPageNumber(prevPageNumber => prevPageNumber + 1)
    }

    return ( 
        <div css={container}>
        spa4
        {photos.map((photo,index) =>(
            <div css={photo_section} key={index}>

            <img src={photo.urls.small} alt=""/>
            <p>{photo.user.first_name + ' ' + photo.user.last_name}</p>
            <span>Like: {photo.user.total_likes}</span>
            </div>
        ))}
        <h3>{photos.length}</h3>
        <button onClick={loadMore} >
            Load More
        </button><br/><br/>
        </div>
    );
}
 
export default Spa04;