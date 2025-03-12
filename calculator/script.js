
function appendValue(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        alert("Invalid input");
    }
}
function buttonEffect(button) {
    button.classList.add("clicked");
    setTimeout(() => {
        button.classList.remove("clicked");
    }, 200);
}
