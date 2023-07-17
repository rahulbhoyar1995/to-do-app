var progressBar = document.getElementById('progressBar1');

// Update the progress value based on completion hours
function updateProgress(hoursCompleted) {
    var maxHours = 24;  // Total hours for completion
    var progressValue = (hoursCompleted / maxHours) * 100;
    progressBar.value = progressValue;
}

// Example: Update the progress bar value after 12 hours
var completedHours = 12;
updateProgress(completedHours);