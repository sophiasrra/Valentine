var no_button = document.getElementById('no-btn');
var yes_button = document.getElementById('yes-btn');
var heart = document.getElementById('heart');
var gif = document.getElementById('gif');
var text = document.getElementById('text');
var btnContainer = document.querySelector('.btn-container');
var mainContainer = document.querySelector('.main-container');

// Get the initial font size for the "Yes" button text
var yesCurrentFontSize = window.getComputedStyle(text, null).getPropertyValue('font-size');

// Get the window's width and height
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

// Rejection messages
var rejects = [
  "No", "Are you sure?", "Really Sure?", "Are you positive?", "Are you absolutely sure?",
  "Pookie please", "Just think about it", "If you say no, I'll be really sad", 
  "I'll be very very sad", "I'll be very very very sad", "I'll be very very very very sad", 
  "Ok fine, I'll stop asking...", "Just kidding, PLEASE SAY YES", "I'll be very very very very very sad", 
  "You're breaking my heart ;(", "Give me a chance", "I REALLY want you", "Pleaseeee...", 
  "I will cry if you say no TT", "We will have lots of fun", "Pretty please?", "I know you are lying", 
  "I'll be REALLY sad ;(", "Don't be shy", "You're making me sad :('", "Think about it again", 
  "Plsssss", "Think harder..", "Think hardest...", "Pretty pleaseee TT", "Just say you hate me...", 
  "Pretty prettie pwetti pwease...", "LAST chance!!!", "I'll really stop asking..", 
  "Don't test me >:(", "HMPH Fine!!", "JUST KIDDING TT", "I BEG U 🙏", "Just say YES"
];

var rejectCounts = 1;

// Event listener for the "No" button
no_button.addEventListener('click', function() {

  // Update the "No" button text
  no_button.textContent = rejects[rejectCounts];
  
  // Increment rejection count
  rejectCounts += 1;
  
  // Reset reject count if it exceeds array length
  if (rejectCounts >= rejects.length) {
    rejectCounts = 0;
  }

  // Update font size for the "Yes" button
  var newFontSize = (parseFloat(yesCurrentFontSize) + 40) + 'px';
  yesCurrentFontSize = newFontSize;
  yes_button.style.fontSize = newFontSize;

  // No movement or rotation needed, so we don't change its position or rotation
});

// Event listener for the "Yes" button
yes_button.addEventListener('click', function() {
  
  // Play the celebration music
  var music = document.getElementById('celebrationMusic');
  music.play();

  // Update the GIF source
  gif.src = 'love-dog.gif';

  // Change the main text content
  text.textContent = 'yippeee yay!!! mwah <3';

  // Hide the buttons
  no_button.style.display = 'none';
  yes_button.style.display = 'none';

  // Display the heart
  heart.style.display = "block";

  // Start the heart rain effect
  startHeartRain();

  // Create and style the smaller text element
  var smallText = document.createElement('p');
  smallText.textContent = 'HAPPY VALENTINES ML! I LOVE YOU SO MUCHH - topy <3';
  smallText.style.fontSize = '20px';
  smallText.style.color = '#ff69b4'; // Pink color
  smallText.style.textAlign = 'center';
  smallText.style.marginTop = '1px'; // Small margin to separate from the main text

  // Insert the smaller text element below the main text
  text.parentNode.insertBefore(smallText, text.nextSibling);
});

// Function to update the direction of the button container
function updateDir() {
  if (btnContainer.offsetWidth > windowWidth) {
    btnContainer.style.flexDirection = "column";
  }
}

// Function to update the wrapping of the main container based on window width
function updateWrap() {
  if (mainContainer.offsetWidth > windowWidth) {
    text.innerHTML = 'Will you be my<br>Valentine?';
  }
}

// Call the updateWrap function initially
updateWrap();
