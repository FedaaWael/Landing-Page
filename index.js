
document.addEventListener("DOMContentLoaded", function () {
    const colorPicker = document.getElementById("colorPicker");

    // Function to set the background color
    function setBackgroundColor(color) {
        document.body.style.color = color;
    }

    // Check if there is a saved color in local storage
    const savedColor = localStorage.getItem("bgColor");
    if (savedColor) {
        setBackgroundColor(savedColor);
        colorPicker.value = savedColor;
    }

    // Event listener for color picker
    colorPicker.addEventListener("input", function () {
        const selectedColor = colorPicker.value;
        setBackgroundColor(selectedColor);
        localStorage.setItem("bgColor", selectedColor);
    });
});