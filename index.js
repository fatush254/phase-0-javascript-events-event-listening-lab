function addingEventListener() {
    const input = document.getElementById("button")

    function clickAlert() {
        alert("Iwas clicked!");
    }
    input.addEventListener('click', clickAlert);
}
console.log('addingEventListener');