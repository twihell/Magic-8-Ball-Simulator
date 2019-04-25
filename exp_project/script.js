

const submitButton = document.getElementById('submit-button');
const errorMessage = document.getElementsByClassName('error-box')[0];
const inputOne = document.getElementById('input-area1');
const inputTwo = document.getElementById('input-area2');
const form = document.getElementsByClassName('this-form')[0];
const image = document.getElementsByClassName('image')[0];
const resetButton = document.getElementById('reset-button');
const answerBlock = document.getElementById('answer-block');
const font = document.getElementsByClassName('font')[0];
const myTable = document.getElementsByTagName('table')[0];

const answersArray = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes - definitely', 'You may rely on it',
    'As I see it, yes', 'Most likely', 'Outlook good', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later',
    'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no',
    'My sources say no', 'Outlook not so good', 'Very doubtful'];


function submitScript() {

    if (inputOne.value == '' || inputTwo.value == '') {
        errorMessage.innerHTML = 'Fill in all fields!';
        errorMessage.classList.add('show');
    } else {
        form.classList.add('form-on-click');
        image.classList.add('image-on-click');
        answerBlock.classList.add('answer-block-onclick');
        font.classList.add('font-on-click');

        font.innerHTML = askMeResult(answersArray);
    }
    return font.innerHTML;

}


submitButton.addEventListener('click', submitScript);

function askMeResult(array) {
    const index = randomNumbers(array);
    return array[index];
}


function randomNumbers(array) {
    const arrLength = array.length - 1;
    return (Math.random() * arrLength).toFixed();
}

