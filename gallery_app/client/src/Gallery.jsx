import React, { use, useEffect, useState } from 'react'
import axios from 'axios'

function Gallery() {

  const[galleryState,setGalleryState] = useState(0);
  const [images, setImages] = useState([]);

//   const images = [
//   "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1465101178521-c1a4cf602bce?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1473181488821-2d23949a045a?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1425321395722-b1dd54a97cf3?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54d8?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80",
//   "https://images.unsplash.com/photo-1517821099604-1ead7e61b465?auto=format&fit=crop&w=400&q=80"
// ];



async function fetchImages() {
    try{
      const res = await axios.get('http://localhost:8000');
     
      const urls = res.data.map(
        (el)=>{return el.url}
      )
      setImages(urls);

      console.log(urls)
    }
    catch(e){
      console.log(`Exception due to ${e}`);
    }
};

useEffect(
  ()=>{
    fetchImages()
  },[]
);

const gallerySource =() => {
     return images[galleryState]
}

useEffect(
  ()=>{
      console.log(`Gallery state is ${galleryState}`)
      if(galleryState > images.length){
        setGalleryState(0);
      }
      else if(galleryState<0) {
        setGalleryState(images.length-1)
      }

  },[galleryState]
)

  return (
    <div>
        <h2 id='title'>Gallery</h2>
        <div className='gallerySection'>
          <a  onClick={()=>{setGalleryState(galleryState -1)}}> <i class="fa-solid fa-angle-left" id='angleLeft'></i></a>
          <img src={gallerySource()} alt='Gallery Images'></img>
          <a onClick={()=>{setGalleryState(galleryState +1)}}> <i class="fa-solid fa-angle-right" id='angleRight' ></i></a>
        </div>
    </div>
  )
}

export default Gallery