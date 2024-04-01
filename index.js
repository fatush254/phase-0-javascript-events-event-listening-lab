function addingEventListener() {

    const input = document.getElementaryById('button');

    function clickAlert(){
        alert('iwascicked!');
    }

    input.addEventlistener('click', clickAlert);
}
console.log(addingEventListener);
