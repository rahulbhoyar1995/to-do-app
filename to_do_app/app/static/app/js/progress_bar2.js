var progressBar = document.getElementById('progressBar2');
var totalCompletedHours = document.getElementById('totalCompletedHours').innerText;



// Update the progress value based on completion hours
function updateProgress(hoursCompleted) {
    var maxHours = 24;  // Total hours for completion
    var progressValue = (hoursCompleted / maxHours) * 100;
    progressBar.value = progressValue;
}

// Example: Update the progress bar value after 12 hours
var completedHours = parseInt(totalCompletedHours);
updateProgress(completedHours);