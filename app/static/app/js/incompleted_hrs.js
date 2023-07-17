function calculateIncompleteTotalHours() {
    const table = document.getElementById('taskTable1');
    const rows = table.getElementsByTagName('tr');
    let total = 0;
   
    for (let i = 1; i < rows.length - 1; i++) { // Start from index 1 to skip the header and bottom row
        const row = rows[i];
        const statusCell = row.getElementsByTagName('td')[2];
        const timeCell = row.getElementsByTagName('td')[1];
        const status = statusCell.textContent.trim();
        
        if (status === 'In Progress') {
            const hours = parseFloat(timeCell.textContent);
            total += hours;
        }
    }

    return total;
}

// Update the total hours element with the calculated sum
const totalHoursElement2 = document.getElementById('totalInCompletedHours');
totalHoursElement2.textContent = calculateIncompleteTotalHours();


