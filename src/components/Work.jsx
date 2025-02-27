import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
function Work() {
    
    const [image, setImage] = useState([
        {Url: "src/assets/images/img1.png", top: "50%", left: "50%", 
        isActive: false},
        {Url: "src/assets/images/img2.png", top: "56%", left: "44%", 
        isActive: false},
        {Url: "src/assets/images/img3.png ", top: "45%", left:  "56%", 
        isActive: false},
        {Url: "src/assets/images/img4.png ", top: "60%", left: "53%", 
        isActive: false},
        {Url: "src/assets/images/img5.png", top: "43%", left: "40%", 
        isActive: false},
        {Url: "src/assets/images/img6.png", top: "65%", left: "55%", isActive: false},
    ]);
    const { scrollYProgress } = useScroll();

    scrollYProgress.on("change", (data) => {
      function imageShow(arr) {
        setImage(prev =>(
          prev.map((item, index) => 
            arr.indexOf(index) === -1 
            ? {...item, isActive: false}
            : {...item, isActive: true}
          )
        ));
      }
      switch(Math.floor(data * 100)){
        case 0:
          imageShow([]);
          break;
        case 1:
          imageShow([0]);
          break;
        case 2:
          imageShow([0,1]);
          break;
        case 3:
          imageShow([0,1,2]);
          break;
        case 4:
          imageShow([0,1,2,3]);
          break;
        case 6:
          imageShow([0,1,2,3,4]);
          break;
        case 8:
          imageShow([0,1,2,3,4,5]);
          break;
          
      }})

  return (
    <div className='w-full mt-10  '>
        <div className='max-w-screen-xl mx-auto text-center relative'>
             <h1 className='text-[30vw] leading-none font-medium select-none tracking-tight '>Work</h1>
             <div className='absolute w-full top-0 h-full'>
                {image.map(
                    (elem, index) =>
                    (elem.isActive && (
                    <img key={index} className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]' 
                    src={elem.Url} 
                    style={{top: elem.top, left: elem.left}} 
                    alt="" />)))}
             </div>
        </div>
        
    </div>
  )
}

export default Work