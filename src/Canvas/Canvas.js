
import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
    const { draw, ...rest } = props
    const ref = useRef()
    
    useEffect(() => {
      
      const canvas = ref.current
      const context = canvas.getContext('2d')
      let count = 0
      let animationId
      
      const renderer = () => {
        count++
        draw(context, count)
        animationId = window.requestAnimationFrame(renderer)
      }
      renderer()
      
      return () => {
        window.cancelAnimationFrame(animationId)
      }
    }, [draw])
  
  return <canvas ref={ref} {...rest} />
}

export default Canvas
