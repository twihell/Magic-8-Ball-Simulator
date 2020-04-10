

var submitButton = document.getElementById('submit-button');
var errorMessage = document.getElementsByClassName('error-box')[0];
var inputOne = document.getElementById('input-area1');
var inputTwo = document.getElementById('input-area2');
var form = document.getElementsByClassName('this-form')[0];
var image = document.getElementsByClassName('image')[0];
var answerBlock = document.getElementById('answer-block');
var font = document.getElementsByClassName('font')[0];
var myTable = document.getElementsByTagName('table')[0];

var answersArray = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes - definitely', 'You may rely on it',
    'As I see it, yes', 'Most likely', 'Outlook good', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later',
    'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no',
    'My sources say no', 'Outlook not so good', 'Very doubtful'];


    var answers = JSON.parse(localStorage.getItem('answers')) || [];


function submitScript() {

    if (inputOne.value == '' || inputTwo.value == '') {
        errorMessage.classList.add('show');
    } else {
        answerBlock.classList.add('answer-block-onclick');
        font.classList.add('font-on-click');

        font.innerHTML = askMeResult(answersArray);

        function addRow(element) {

            var newRow = element.insertRow(element.length);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);

            var answer = {
                name: inputOne.value,
                question: inputTwo.value,
                answering: font.innerHTML
            };

            answers.push(answer);

            localStorage.setItem('answers', JSON.stringify(answers));

            cell1.innerHTML = inputOne.value;
            cell2.innerHTML = inputTwo.value;
            cell3.innerHTML = font.innerHTML;
            return newRow;
        }
       
        addRow(myTable);
        return font.innerHTML;
    }

}



submitButton.addEventListener('click', function () {
    submitScript();
    inputOne.value = "";
    inputTwo.value = "";
});

function askMeResult(array) {
    var index = randomNumbers(array);
    return array[index];

}


function randomNumbers(array) {
    var arrLength = array.length - 1;
    return (Math.random() * arrLength).toFixed();
}



errorMessage.addEventListener('click', closeBox);

function closeBox() {
    errorMessage.classList.remove('show');
}
