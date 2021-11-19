import { useRef } from "react"

function Canvas(props){

    const canvasRef = useRef(null)
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    return (
        <canvas ref={canvasRef} {...props} />
    )

}