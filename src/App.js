import Canvas from "./Canvas/Canvas";

function App() {
  const draw = (context,count) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.fillStyle = 'grey'
    const d = count % 800
    context.fillRect(10 +d , 10  , 100 , 100)
  }

  const draw2 = (context,count) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.fillStyle = 'grey'
    const d = count % 100
    context.fillRect(10 +d , 10  , 10 , 10)
  }

  return <div>
    <Canvas draw={draw} width="800" height="800" style={{border:'1px solid black'}}/>
    <Canvas draw={draw2} width="100" height="100" style={{border:'1px solid black'}}/>
  </div>
}

export default App;
