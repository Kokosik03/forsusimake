function shuffleWords2() {
    var divs = document.querySelectorAll('#div1, #div2, #div3');
    var words = ['matcha time', 'read a book', 'tidy your room', 'workout', '10 eng words', 'practise math', 'stretching'];

    for (var i = 0; i <divs.length; i++) {
        var randomIndex = Math.floor(Math.random() * words.length);
        divs[i].textContent = words[randomIndex];
        words.splice(randomIndex, 1);
    } 
}
function shuffleWords1() {
    var divs = document.querySelectorAll('#div4, #div5, #div6');
    var words = ['matcha time', 'read a book', 'tidy your room', 'workout', '10 eng words', 'practise math', 'stretching'];

    for (var i = 0; i <divs.length; i++) {
        var randomIndex = Math.floor(Math.random() * words.length);
        divs[i].textContent = words[randomIndex];
        words.splice(randomIndex, 1);
    } 
}
function shuffleWords3() {
    var divs = document.querySelectorAll('#div7, #div8, #div9');
    var words = ['matcha time', 'read a book', 'tidy your room', 'workout', '10 eng words', 'practise math', 'stretching'];

    for (var i = 0; i <divs.length; i++) {
        var randomIndex = Math.floor(Math.random() * words.length);
        divs[i].textContent = words[randomIndex];
        words.splice(randomIndex, 1);
    } 
}