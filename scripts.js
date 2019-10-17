/* add-remove skill section */

// select element
const list = document.getElementById("list")
const input = document.getElementById("input");
const addBtn = document.getElementById("btn-add");
const delBtn = document.getElementsByClassName("delete-btn");

let id = 0;

// add skill item function
function addItem(skill) {
    const text = `<li class="item">
                    <p class="text"> ${skill} </p>
                    <i class="far fa-times-circle delete-btn" func="delete"></i>
                  </li>
                `;
    const position = "beforeend";

    list.insertAdjacentHTML(position, text);
}

// add item event

addBtn.addEventListener("click", function() {
    const inputValue = input.value;
    //if value not empty
    if(inputValue) {
        addItem(inputValue);
    }
    input.value = "";
});

//user press Enter key for insert item
document.addEventListener("keyup", function(keypress) {
    if(keypress.keyCode === 13) {
        const inputValue = input.value;
        //if value not empty
        if(inputValue) {
            addItem(inputValue, id, false);
        }
        input.value = "";
    }
});

//remove item

function removeItem(element) {
    list.removeChild(element.parentNode);
}

list.addEventListener("click", function(event) {
    const element = event.target;
    const elementFunc = element.attributes.func.value;

    if(elementFunc == "delete") {
        removeItem(element);
    }
});

/* Rename section */

const name = document.getElementById("name");

name.onclick = function() {
    this.contentEditable = true;
}

name.onblur = function() {
    this.contentEditable = false
}

/* change background section*/

let bg = document.getElementById("random-bg");
function rgb(num) {
  return Math.floor(Math.random() * num);
}//color 0-255


setInterval(function(){
    let color = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
    bg.style.backgroundColor = color;
}, 4000);
