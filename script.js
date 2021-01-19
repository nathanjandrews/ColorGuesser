let answer = '';

document.getElementById('new-colors-button').addEventListener('click', event => {
    document.getElementById('feedback').innerHTML = '';
    const squares = document.getElementById('squares-container').children;
    for(let i = 0; i<squares.length; i++){
        const currentSquare = squares[i];
        currentSquare.style.transition = '';
        currentSquare.style.opacity = '1';
        currentSquare.style.backgroundColor = generateColorString();
    }
    answer = squares[Math.floor(Math.random()*(squares.length-1))].style.backgroundColor;
    document.getElementById('answer-color').innerHTML = answer.toUpperCase();
});

document.getElementById('squares-container').addEventListener('click', event => {
    if(event.target.id === 'squares-container') { return; }
    const selectedSquare = event.target;
    const feedback = document.getElementById('feedback');
    feedback.style.visibility = 'visible';
    if(selectedSquare.style.backgroundColor === answer){
        feedback.innerHTML = 'Correct';
        const squares = document.getElementById('squares-container').children;
        for(let i = 0; i<squares.length; i++){
            const currentSquare = squares[i];
            currentSquare.style.backgroundColor = answer;
            currentSquare.style.transitionProperty = 'opacity, background-color';
            currentSquare.style.transitionDuration = '500ms';
            currentSquare.style.opacity = '1';  
        }
    }
    else{
        feedback.innerHTML = 'Try Again';
        selectedSquare.style.opacity = '0';
    }
});

function generateColorString(){
    const max = 255;
    const min = 0;
    return `rgb(${randomRGBValue()},${randomRGBValue()},${randomRGBValue()})`
    
    function randomRGBValue(){
        return Math.floor(Math.random()*(max-min)+min);
    }
}