console.log('Hello World!');


const getComputerChoice = () => {
    const selection = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random()*selection.length);
    return selection[randomIndex];
}

const randomIndex = getComputerChoice();
console.log(randomIndex);