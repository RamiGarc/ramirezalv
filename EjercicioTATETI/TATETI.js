function highlightCell(cell) {
    cell.classList.add('highlight');
}
function unhighlightCell(cell) {
    cell.classList.remove('highlight');
}
let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.innerHTML === '') {
            cell.innerHTML = currentPlayer === 'X' ? '&#10033;' : '&#9711;';
            cell.style.color = currentPlayer === 'X' ? 'red' : 'blue';
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});
