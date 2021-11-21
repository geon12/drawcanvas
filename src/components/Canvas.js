import { useEffect, useRef } from "react"

export default function Canvas(props){

    const canvasRef = useRef(null);

    function draw(ctx) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0, 0, 150, 75);
    };

    useEffect(() => {
    
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        
        //Our draw come here
        draw(context)
    }, []);
  

    return (
        <canvas ref={canvasRef} {...props} />
    );

}