import { useState, useEffect } from "react"
import Cell from "./components/cell"

const App = () =>  {
  const [cells, setCells]= useState(["","","","","","","","",""])
  const [go, setGo]= useState("circle")
  const [winningMessage, setWinningMessage] = useState(null)

  const message = "it is now " + go + " 's turn."
  let isDrawCircle = false;
  let isDrawCross = false;

  const checkScore = () => {
    const winningCombos = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ]
    console.log(cells)
    let isFull = checkCells(cells);
     winningCombos.forEach(array => {
      let circleWins = array.every(cell => cells[cell] === "circle")

      if (circleWins) {
        setWinningMessage("Circle Wins!")
        return
      }
      else {
        isDrawCircle = true;
      }

     })

     winningCombos.forEach(array => {
      let crossWins = array.every(cell => cells[cell] === "cross")

      if (crossWins) {
        setWinningMessage("Cross Wins!")
        return
      }
      else {
        isDrawCross = true;
      }

     })
     if (isDrawCross && isDrawCross && isFull) {
      setWinningMessage("Draw")
      return
     }
  }

    let checkCells = (cells) => {
      let draw = cells.every(cell => cell != '');
      // console.log(cells)
      // console.log("test"+draw)
      return draw;
    }

  useEffect(() => {
    checkScore ()
  }, [cells])

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => 
          <Cell 
            key={index } 
            id={index} 
            cell={cell} 
            setCells={setCells}
            go={go}
            setGo={setGo}
            cells ={cells}
            winningMessage= {winningMessage}
        />)}
      </div>
      <p>{winningMessage || message}</p>
  </div>
  )
}

export default App
// Throws an error when clickong after finishing game 
