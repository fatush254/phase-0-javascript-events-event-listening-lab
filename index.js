function addingEventListener() {

    const input = document.getElementaryById('button');

    function clickAlert(){
        alert('I was clicked!');
    }

    input.addEventlistener('click', clickAlert);
}
console.log(addingEventListener);
