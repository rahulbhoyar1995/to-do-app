function calculateTotalHours() {
    const table = document.getElementById('taskTable2');
    const rows = table.getElementsByTagName('tr');
    let total = 0;
   
    for (let i = 1; i < rows.length - 1; i++) { // Start from index 1 to skip the header and bottom row
        const row = rows[i];
        const timeCell = row.getElementsByTagName('td')[2];
        const hours = parseFloat(timeCell.textContent);
        total = total + hours;
    }

    return total;
}

// Update the total hours element with the calculated sum
const totalHoursElement = document.getElementById('totalCompletedHours');
totalHoursElement.textContent = calculateTotalHours();



