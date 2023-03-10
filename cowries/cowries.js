//function cowries() {
  
    //return Math.floor(Math.random()*17);
 // }


// Listen for DOMContentLoaded to ensure that all HTML and resources
//  have been loaded before attempting to run code
document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners and handlers for both buttons
    document.getElementById('roll').addEventListener('click', function () {
        // Determine dice roll using Math.random()
        let rolledValue = Math.floor(Math.random() * 17)

        // Display the result of the roll
        document.getElementById('message').textContent = `Open: ${rolledValue}`

        // Show different images for each dice roll
        document.getElementById('cowries').src = `cowries/${rolledValue}.png`

    })

    document.getElementById('clear').addEventListener('click', function () {
        // Reset the rolls values to zeroes
        allRolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        // Update the scoreboard
        updateScoreboard()
    })
})