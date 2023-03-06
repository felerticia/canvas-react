
import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const ref = useRef()
  
  const draw = (context, count) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.fillStyle = 'grey'
    const d = count % 800
    context.fillRect(10 +d , 10  , 100 , 100)
  }
  
  useEffect(() => {
    
    const canvas = ref.current
    const context = canvas.getContext('2d')
    let count = 0
    let animationID
    
    const renderer = () => {
      count++
      draw(context, count)
      animationID = window.requestAnimationFrame(renderer)
    }
    renderer()
    
    return () => {
      window.cancelAnimationFrame(animationID)
    }
  }, [draw])
  
  return <canvas ref={ref} {...props}/>
}

export default Canvas
