function updateImage() {
    var dropdown = document.getElementById("image-dropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    var imageDiv = document.getElementById("selected-image");
    if (selectedOption) {
      imageDiv.innerHTML = `<img src="${selectedOption}" alt="Selected Image">`;
    } else {
      imageDiv.innerHTML = ""; 
    }
  }