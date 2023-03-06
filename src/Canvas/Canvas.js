import { useRef, useEffect } from 'react'

const Canvas = props => {

    const ref = useRef()

    useEffect(() => {
        const canvas = ref.current
        const context = canvas.getContext('2d')
        context.fillStyle = 'grey'
        context.fillRect(10, 10, context.canvas.width - 20, context.canvas.height - 20)
    }, [])
  
  return <canvas ref={ref} {...props}/>
}

export default Canvas