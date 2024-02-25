// Gets the 1st video element
const video = document.getElementById('project1-video');

// Gets the 1st project element
const project = document.getElementById('slide1');

// Gets the 2nd video element
const video2 = document.getElementById('project2-video');

// Gets the 2nd project element
const project2 = document.getElementById('slide2');

// Gets the 3rd video element
const video3 = document.getElementById('project3-video');

//Gets the 3rd project element
const project3 = document.getElementById('slide3');

// Add event listeners for clicking the 1st project element
project.addEventListener('click', () => 
{
  // Plays the video when mouse clicks the 1st project element
  video.play();
  // Pauses other videos when mouse clicks the 1st project element
  video2.pause();
  video3.pause();
});

// Add event listeners for clicking the 2nd project element
project2.addEventListener('click', () => 
{
  // Plays the video when mouse clicks the 2nd project element
  video2.play();
  // Pauses other videos when mouse clicks the 2nd project element
  video.pause();
  video3.pause();
});
project3.addEventListener('click', () => 
{
    // Plays the video when mouse clicks the 3rd project element
    video3.play();
    // Pauses other videos when mouse clicks the 3rd project element
    video.pause();
    video2.pause();
});