

const submitButton = document.getElementById('submit-button');
const errorMessage = document.getElementsByClassName('error-box')[0];
const inputOne = document.getElementById('input-area1');
const inputTwo = document.getElementById('input-area2');
const form = document.getElementsByClassName('this-form')[0];
const image = document.getElementsByClassName('image')[0];
const answerBlock = document.getElementById('answer-block');
const font = document.getElementsByClassName('font')[0];
const myTable = document.getElementsByTagName('table')[0];

const answersArray = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes - definitely', 'You may rely on it',
    'As I see it, yes', 'Most likely', 'Outlook good', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later',
    'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no',
    'My sources say no', 'Outlook not so good', 'Very doubtful'];


    const answers = JSON.parse(localStorage.getItem('answers')) || [];


function submitScript() {

    if (inputOne.value == '' || inputTwo.value == '') {
        errorMessage.classList.add('show');
    } else {
        answerBlock.classList.add('answer-block-onclick');
        font.classList.add('font-on-click');

        font.innerHTML = askMeResult(answersArray);

        function addRow(element) {

            const newRow = element.insertRow(element.length);
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);

            const answer = {
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



submitButton.addEventListener('click', () => {
    submitScript();
    inputOne.value = "";
    inputTwo.value = "";
});

function askMeResult(array) {
    const index = randomNumbers(array);
    return array[index];

}


function randomNumbers(array) {
    const arrLength = array.length - 1;
    return (Math.random() * arrLength).toFixed();
}



errorMessage.addEventListener('click', closeBox);

function closeBox() {
    errorMessage.classList.remove('show');
}
