var color;
var isDown;

window.onload = () => {
    const table = document.querySelector("tbody");
    let currentColSize = 3;
    color = document.getElementById("color").value;

    // Check for mousedown/mouseup, to be used for click + hold functionality
    document.addEventListener("mousedown", () => {
        isDown = true;
    })
    document.addEventListener("mouseup", () => {
        isDown = false;
    })

    // Give starting cells click and click + hold functionality
    Array.from(document.querySelectorAll("td")).forEach(cell => {
        cell.addEventListener("click", () => {
            cell.className = color;
        })
        cell.addEventListener("mouseover", () => {
            if (isDown) {
                cell.className = color;
            }
        })
    });

    // Add a row
    document.getElementById("rowAdd").addEventListener("click", () => {
        const newRow = document.createElement("tr");
        table.append(newRow);
        // Use the current column size to know how many columns are in the new row
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

    // Add a column
    document.getElementById("colAdd").addEventListener("click", () => {
        const rows = Array.from(document.querySelectorAll("tr"));
        if (rows) {
            rows.forEach(row => {
                // Append a new table data tag to each row, after making them the default color with proper click and click + hold functionality
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

    // Remove a row
    document.getElementById("rowDel").addEventListener("click", () => {
        const rows = document.querySelectorAll("tr");
        if (rows.length > 0) {
            // Remove the last row, rather than the first
            rows[rows.length - 1].remove();
        }
    })

    // Remove a column
    document.getElementById("colDel").addEventListener("click", () => {
        let rows = Array.from(document.querySelectorAll("tr"));
        // Removes one table data from the end of each table row, to remove a column
        if (rows) {
            rows.forEach(row => {
                row.children[row.childElementCount - 1].remove();
            })
            currentColSize--;
        }
    })
}

// Changes currently picked color on selection update
let changeColor = () => {
    color = document.getElementById("color").value;
}

// Fill all unfilled cells with the currently selected color
let fillUnfilled = () => {
    let whiteCells = Array.from(document.getElementsByClassName("white"));
    whiteCells.forEach(cell => {
        cell.className = color;
    })
}

// Fill all cells with the currently selected color
let fillAll = () => {
    let cells = Array.from(document.querySelectorAll("td"));
    cells.forEach(cell => {
        cell.className = color;
    })
}

// Clear all cells back to being white (default)
let clearAll = () => {
    let cells = Array.from(document.querySelectorAll("td"));
    cells.forEach(cell => {
        cell.className = "white";
    })
}