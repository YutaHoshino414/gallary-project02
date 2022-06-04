import {useState, useEffect, useRef} from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react';

const container = css`
    width: 100%;
    min-height: 100vh;
    padding-top: 200px;
    background: #1c273a;
    position: absolute;
    text-align: center;
    color: white;
    h1{
        text-transform: uppercase;
        letter-spacing: 4px;
        color: wheat;
        margin: 30px 0;
    }
    button{
        padding: 10px 20px;
        margin: 20px;
        background-color: wheat;
        border-style: none;
        cursor: pointer;
    }
    padding-bottom: 100px;
`
const header = css`
    width: 100%;
    height: 150px;
    background: #1c273a;
    position: fixed;
    top: 0;
`

const photo_section = css`
    width: 100%;
    max-width: 600px;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto;
    overflow: hidden;
    border: 2px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    animation: scale 0.5s linear;
    @keyframes scale{
        from{transform: scale(0.5);}
    }
    img{
        width: 100%;
        display: block;
        max-width: 200px;
        height: 100%;
        object-fit: cover;
    }
    span{
        color: chocolate;
        margin: 0 10px;
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
        setTimeout(() => {
            //some action
            setPageNumber(prevPageNumber => prevPageNumber + 1)
        }, 1000);
    }
    const pageEnd = useRef();
    let num = 1;

    useEffect(()=>{
        if(loading){
            const observer = new IntersectionObserver(entries =>{
            if(entries[0].isIntersecting){
                num++;
                loadMore();
                if(num >= 6){
                    observer.unobserve(pageEnd.current)
                }
            }},{threshold: 1});
            observer.observe(pageEnd.current)
        }},[loading,num])


    return ( 
        <div css={container}>
            <div css={header}>
                <h1>Infinite scrolling react hooks</h1>
                <p>page <b>{pageNumber}</b></p>
            </div>
        {photos.map((photo,index) =>(
            <div css={photo_section} key={index}>
                <img src={photo.urls.small} alt=""/>
                <p>{photo.user.first_name + ' ' + photo.user.last_name}</p>
                <span>Like: {photo.user.total_likes}</span>
            </div>
        ))}
        <h3>{photos.length}</h3>
        <button onClick={loadMore} ref={pageEnd}>
            Load More
        </button><br/><br/>
        </div>
    );
}
 
export default Spa04;