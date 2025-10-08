import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

    gsap.registerPlugin(ScrollTrigger);
    const TOTAL_FRAMES = 309;

export default function MovingFrame (){
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const frameImages =[];
        for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = `frames/frame_${String(i).padStart(4, "0")}.jpg`;
        frameImages.push(img); }

        setImages(frameImages);}
, []);


  

     useEffect(() => {
        if (images.length === 0) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        
        const scale = window.devicePixelRatio || 1;
        canvas.width = 1920 * scale;
        canvas.height = 1080 * scale;
        context.scale(scale, scale);

        const frameState = { frame: 0};

        const render = () => {
            const img = images [frameState.frame]
            if (img?.complete){
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(
                    img,
                    0,
                    0,
                    canvas.width / scale,
                    canvas.height / scale,
                );
            }
        };

        gsap.to(frameState, {
            frame: TOTAL_FRAMES - 1,
            snap: "frame",
            ease:"none",
            scrollTrigger: {
                trigger: document.body,   // use the whole page as trigger
        start: "5730 top",        // start when scroll hits 4000px
    end: "6000 top", 
                scrub:true,
                onEnter: () => gsap.set(canvas, { autoAlpha: 1 }),   // show at start
    onLeaveBack: () => gsap.set(canvas, { autoAlpha: 0 }), // hide if scrolling back
                    onLeave: () => gsap.set(canvas, { autoAlpha: 0 }),     // hide after done

            },
            onUpdate: render,
        });

        // images[0].onload =render;
        // if (images[0].complete) render();
        
    
    
    
    
    }, [images]);





return(<>
<div className="frame-0">


</div>
<div style={{ position: "relative"}}>



<canvas
 ref={canvasRef}
 style={{
        position:"fixed",
        top: 0,
        left:0,
        width:"100vw",
        height: "100vh",
        zIndex: 1,
        }}/>
    




</div>








</>
)}