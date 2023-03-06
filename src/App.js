import Canvas from "./Canvas/Canvas";

function App() {
  const draw = (context,count) => {


    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.fillStyle = 'grey'
    const d = count % 800
    context.fillRect(10 +d , 10  , 100 , 100)

  }


  return <Canvas draw={draw} width="800" height="800" style={{border:'1px solid black'}}/>
}

export default App;
