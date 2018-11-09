/** defining color variable
 * adding and event listner for changing the color
 * defining the new color picked
*/
const color = document.querySelector('#colorPicker');
var newColor= color.value;
color.addEventListener('change', function (e) {
    return newColor = color.value;
})

/** defining form, hight, and width variables
 * adding event listners for changing the grid size input
 * defining new width and height
 */
const form= document.querySelector('#sizePicker')
const h= document.querySelector('#inputHeight')
const w= document.querySelector('#inputWidth')
var height= 1;
var width=1;
h.addEventListener('change', function(e) {
    height= h.value
});
w.addEventListener('change', function(e) {
    width= w.value
});

//defining table constant
const table = document.querySelector("#pixelCanvas")

/**fuction to creat a grid using height and width input values 
 * prints an informative massage after creating the grid
*/
function makeGrid(e) {
    event.preventDefault();
    for (var row = 1; row <= height; row++) {
        const x= document.createElement("tr");
        for (var column= 1; column<= width; column++) {
            const y= document.createElement("td");
            x.appendChild(y);
            
        }
        table.appendChild(x);
    }
    const print= document.createElement("p")
    print.textContent = "refresh page to reset the grid!"
    document.body.appendChild(print)
}
//adding event listner for creating the grid after form is submitted */
form.addEventListener("submit", makeGrid);

//adding event listner for changing the color of the picked cell in the grid
table.addEventListener("click", function(e) {
    e.target.style.backgroundColor= newColor;
})