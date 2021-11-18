//Varriables
let totalHeads = 0;
let totalTails = 0;

document.addEventListener('DOMContentLoaded', function () {
    // The click button that starts everything 
    document.getElementById('flip').addEventListener('click', () => {
        let heads = Math.random() < 0.5
        //if the outcome of math.random is < 0.5 the coin is heads and displays heads image...
        if (heads == true) {
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = "The Coin Is Heads!"
            totalHeads += 1
        }
        // but if it is > 0.5 the coin will be tails and will display tails image/message instead
        else if (heads == false) {
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = "The Coin Is Tails!"
            totalTails += 1
        }
        //Now we get the varriables for total flips weve done...
        let totalFlips = totalTails + totalHeads;
        let percentHeads = 0;
        let percentTails = 0;
        //and calculate the %
        if (totalFlips > 0) {
            percentHeads = Math.round((totalHeads / totalFlips) * 100)
            percentTails = Math.round((totalTails / totalFlips) * 100)  
        }
        //Update the scoreboard with all the values
        document.getElementById('heads').textContent = totalHeads
        document.getElementById('tails').textContent = totalTails
        document.getElementById('heads-percent').textContent = percentHeads
        document.getElementById('tails-percent').textContent = percentTails
        console.log(heads,totalTails,totalHeads,totalFlips,percentHeads,percentTails)
    })
    // wipes the scoreboard
    document.getElementById('clear').addEventListener('click', function () {
        totalHeads = 0
        totalTails = 0
        totalFlips = 0
        percentHeads = 0
        percentTails = 0
        document.getElementById('heads').textContent = totalHeads
        document.getElementById('tails').textContent = totalTails
        document.getElementById('heads-percent').textContent = percentHeads
        document.getElementById('tails-percent').textContent = percentTails
        document.getElementById('message').textContent = "Flip The Coin!"
        document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
        console.log('Cleared')
    })    
})