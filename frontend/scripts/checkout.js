// Dropdown

var dropDownContent = document.getElementById("womenDD");
dropDownContent.style.display = "none";
function mouseOverToggle() {
    dropDownContent.style.display = "";
}
function mouseOutToggle() {
    dropDownContent.style.display = "none";
}
// complete transaction
let completeBtn = document.getElementById("completeTransaction");
completeBtn.addEventListener("click", function () {
    alert("Transaction Completed");
    // var popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");
});
