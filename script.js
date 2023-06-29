const display = document.getElementById("display");
const button = document.getElementById("buttons");
button.addEventListener("click", (e) => {
    let target = e.target;
    // console.log(target);
    if (target.innerHTML === "AC") {
        display.value = "";
    } else if (target.classList.contains("number")) {
        display.value += target.innerHTML;
    } else if (target.classList.contains("operator")) {
        display.value += target.innerHTML;
    } else if (target.innerHTML === "=") {
        display.value = eval(display.value);
    } else if (target.innerHTML === "DEL") {
        display.value = display.value.slice(0, -1);

    }
});