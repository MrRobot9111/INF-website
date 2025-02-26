// Function to check screen size
function checkScreenSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  console.log('Screen width: ' + width + 'px');
  console.log('Screen height: ' + height + 'px');
}

// Call the function to display screen size
checkScreenSize();

// Optionally, you can also track screen size changes using the resize event
window.addEventListener('resize', checkScreenSize);
