// Function to handle the coin flip
function flipCoin() {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails'; // Randomly choose Heads or Tails
    document.getElementById('result').textContent = `Result: ${result}`; // Display the result
}

// Attach the flipCoin function to the button click
document.getElementById('flipButton').addEventListener('click', flipCoin);
