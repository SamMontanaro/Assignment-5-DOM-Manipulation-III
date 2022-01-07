window.onload = () => {
    const table = document.querySelector("tbody");
    let currentColSize = 3;

    document.getElementById("rowAdd").addEventListener("click", () => {
        let row = document.querySelector("tr");
        if (row)
            table.append(row.cloneNode(true));
        else {
            table.append(document.createElement("tr"));
            row = document.querySelector("tr");
            for (let i = 0; i < currentColSize; i++) {
                row.append(document.createElement("td"));
            }
        }
    })
    document.getElementById("colAdd").addEventListener("click", () => {
        const rows = Array.from(document.querySelectorAll("tr"));
        const cell = document.createElement("td");
        if (rows) {
            rows.forEach(row => {
                row.append(cell.cloneNode());
            });
            currentColSize++;
        }
    })
    document.getElementById("rowDel").addEventListener("click", () => {
        const row = document.querySelector("tr");
        row.remove();
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