window.addEventListener('load', () => { // when the page finish loading the function will be executed 
    const sounds = document.querySelectorAll(".sound"); // this will return all the sounds tag that in my document 
    // based on the class sound 

    const pads = document.querySelectorAll(".pads div"); // all the divs that inside the .pads 
    const visual = document.querySelector(".visual"); // visual div 
    const colors = [
           "#60d394", 
           "#d36060",
           "#c060d3",
           "#d3d160",
           "#6860d3",
           "#d2ff08"
    ]

    pads.forEach( (pad, index) => { // iterate through my pads and apply method on each one of them 
        pad.addEventListener('click', function() {
            // here i want to play the sounds
            // we can have access to the spunds using sounds variable collection 
            // with the index that we passed:

            sounds[index].currentTime = 0; // we need to do this process to stop the sound if we click the play button while 
            // its still playing 
            // then we play it:
            sounds[index].play();

            // call create bubble function:
            createBubbles(index);
        });
    });

    // create a function to create a bubbles:
    const createBubbles = (index) => {
        let bubble = document.createElement("div"); // create a div to represent the bubble 
        visual.appendChild(bubble); // append the pubble to the visual div 
        bubble.style.backgroundColor = colors[index]; // we change the color according to the pad 
        // we get the index from the click listener and pass it as a parameter 
        bubble.style.animation = "jump 1s ease"; // create animation to represent the jumb of the bubble 
        // but now we need to create the animation im our style.css 
        bubble.addEventListener('animationend', function() { // when the animation ends i need to remove the bubble div
            visual.removeChild(this);
        })

    }
});