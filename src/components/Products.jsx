import React, { useState } from 'react';
import Product from './Product';
import { motion } from 'framer-motion';

function Products() {
    var products = [
        {title:"arqite",
        description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", 
        live:true , 
        case:false},
        {title:"TTR", 
        description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.n", 
        live:true , 
        case:false},
        {title:"YIR 2022",
        description:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.", 
        live:true , 
        case:false},
        {title:"Yahoo!", 
        description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", 
        live:true , 
        case:true},
        {title:"Rainfall", 
        description:"We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease", 
        live:true , 
        case:true},
    ];

    const [pos, setPos] = useState(0);
    const mover = (val)=>{
        setPos(val*23);
    }

    return(
        <div className='mt-32 relative'>
            {products.map((val, index)=> 
            <Product key={index} val={val} mover={mover} count={index} />)}
            <div className='absolute top-0 w-full h-full pointer-events-none '>
                <motion.div 
                initial={{y: pos, x:"-50%"}}
                animate={{y:pos+ `rem`}}
                transition={{ease: [0.76, 0, 0.24, 1], duration: .5}}
                className='window absolute w-[32rem] h-[23rem] left-[44%] overflow-hidden  rounded-2xl'>
                    <motion.div 
                    animate={{y: -pos+ `rem`}}
                    transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} 
                    className='w-full h-full rounded'>
                        <video autoPlay loop muted src="src/assets/videos/arqitel.mp4"></video>
                    </motion.div>
                    <motion.div 
                    animate={{y: -pos+ `rem`}}
                    transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} 
                    className='w-full h-full '>
                        <video autoPlay loop muted src="src/assets/videos/ttr.mp4"></video>
                    </motion.div>
                    <motion.div 
                    animate={{y: -pos+ `rem`}}
                    transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} 
                    className='w-full h-full '>
                        <video autoPlay loop muted src="src/assets/videos/yir.mp4"></video>
                    </motion.div>
                    <motion.div 
                    animate={{y: -pos+ `rem`}}
                    transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} 
                    className='w-full h-full'>
                        <video autoPlay loop muted src="src/assets/videos/yahoo.mp4"></video>
                    </motion.div>
                    <motion.div 
                    animate={{y: -pos+ `rem`}}
                    transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} 
                    className='w-full h-full'>
                        <video autoPlay loop muted src="src/assets/videos/rainfall.mp4"></video>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Products