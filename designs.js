/** defining color variable*/
const color = document.querySelector('#colorPicker');

/** defining form, hight, and width variables
 * adding event listners for changing the grid size input
 * defining new width and height
 */
const form= document.querySelector('#sizePicker')
const h= document.querySelector('#inputHeight')
const w= document.querySelector('#inputWidth')
let height= 1;
let width=1;
h.addEventListener('change', function(e) {
    height= h.value
});
w.addEventListener('change', function(e) {
    width= w.value
});

//defining table constant
const table = document.querySelector("#pixelCanvas")

/**fuction to creat a grid using height and width input values 
*/
function makeGrid(e) {
    e.preventDefault();
    table.innerHTML = "";
    for (var row = 1; row <= height; row++) {
        const x= document.createElement("tr");
        for (var column= 1; column<= width; column++) {
            const y= document.createElement("td");
            x.appendChild(y);
            
        }
        table.appendChild(x);
    }
}
//adding event listner for creating the grid after form is submitted */
form.addEventListener("submit", makeGrid);

//adding event listner for changing the color of the picked cell in the grid
table.addEventListener("click", function(e) {
    e.target.style.backgroundColor= color.value;
})