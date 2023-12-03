const Cell = ({ id, cell, setCells, go, setGo, cells, winningMessage }) => {
    const handleClick = (e) => {
      const taken =
        e.target.firstChild.classList.contains("circle") ||
        e.target.firstChild.classList.contains("cross");
  
      if (!taken) {
        if (go === "circle") {
          e.target.firstChild.classList.add("circle");
          handleCellChange("circle")
          setGo("cross");

        }
        console.log (123)
        if (go === "cross") {
          e.target.firstChild.classList.add("cross");
          handleCellChange("cross")
          setGo("circle");
        }
      }
    }

    const handleCellChange = (className) => {
      console.log ("ABoba")
       const nextCells = cells.map((cell, index) => {
            if (index === id) {
                return className
            } 
            else {
                return cell
            }
        })
        setCells(nextCells)
    }
  
    return (
      <div className="square" id={id} onClick={!winningMessage ? handleClick : null }>
        <div className={cell}></div>
      </div>
    );
  };
  
  export default Cell;
  