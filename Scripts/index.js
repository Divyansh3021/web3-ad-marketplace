
const elem = document.getElementById('my-elem');
elem.onclick = function () {
    console.log(elem);
}
elem.addEventListener('click', function () {
    console.log(elem);
    alert('Hello world');
});