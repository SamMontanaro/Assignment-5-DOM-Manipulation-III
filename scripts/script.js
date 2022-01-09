var color;
var isDown;

window.onload = () => {
    const table = document.querySelector("tbody");
    let currentColSize = 3;
    color = document.getElementById("color").value;

    document.addEventListener("mousedown", () => {
        isDown = true;
        console.log("currently down");
    })
    document.addEventListener("mouseup", () => {
        isDown = false;
        console.log("currently up");
    })

    Array.from(document.querySelectorAll("td")).forEach(cell => {
        cell.addEventListener("click", () => {
            cell.className = color;
        })
        cell.addEventListener("mouseover", () => {
            console.log("currently hovering");
            if (isDown) {
                cell.className = color;
            }
        })
    });

    document.getElementById("rowAdd").addEventListener("click", () => {
        const newRow = document.createElement("tr");
        table.append(newRow);
        for (let i = 0; i < currentColSize; i++) {
            let cell = document.createElement("td");
            cell.classList.add("white");
            cell.addEventListener("click", () => {
                cell.className = color;
            })
            cell.addEventListener("mouseover", () => {
                if (isDown) {
                    cell.className = color;
                }
            })
            newRow.append(cell);
        }
    })
    document.getElementById("colAdd").addEventListener("click", () => {
        const rows = Array.from(document.querySelectorAll("tr"));
        if (rows) {
            rows.forEach(row => {
                let cell = document.createElement("td");
                cell.classList.add("white");
                cell.addEventListener("click", () => {
                    cell.className = color;
                })
                cell.addEventListener("mouseover", () => {
                    if (isDown) {
                        cell.className = color;
                    }
                })
                row.append(cell);
            });
            currentColSize++;
        }
    })
    document.getElementById("rowDel").addEventListener("click", () => {
        const rows = document.querySelectorAll("tr");
        if (rows.length > 0) {
            rows[rows.length - 1].remove();
        }
    })
    document.getElementById("colDel").addEventListener("click", () => {
        let rows = Array.from(document.querySelectorAll("tr"));
        if (rows) {
            rows.forEach(row => {
                row.children[row.childElementCount - 1].remove();
            })
            currentColSize--;
        }
    })
}

let changeColor = () => {
    color = document.getElementById("color").value;
}

let fillUnfilled = () => {
    let whiteCells = Array.from(document.getElementsByClassName("white"));
    whiteCells.forEach(cell => {
        cell.className = color;
    })
}

let fillAll = () => {
    let cells = Array.from(document.querySelectorAll("td"));
    cells.forEach(cell => {
        cell.className = color;
    })
}

let clearAll = () => {
    let cells = Array.from(document.querySelectorAll("td"));
    cells.forEach(cell => {
        cell.className = "white";
    })
}