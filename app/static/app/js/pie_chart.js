var pieCtx = document.getElementById('pieChart').getContext('2d');
        var barCtx = document.getElementById('barChart').getContext('2d');

        // Define the data for the pie chart
        var pieData = {
            labels: ['Red', 'Blue', 'Yellow'],
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: ['red', 'blue', 'yellow']
            }]
        };

        // Create the pie chart
        var pieChart = new Chart(pieCtx, {
            type: 'pie',
            data: pieData
        });

        // Define the data for the bar chart
        var barData = {
            labels: ['A', 'B', 'C', 'D', 'E'],
            datasets: [{
                label: 'Bar Chart',
                data: [50, 30, 20, 40, 10],
                backgroundColor: 'green'
            }]
        };

        // Create the bar chart
        var barChart = new Chart(barCtx, {
            type: 'bar',
            data: barData
        });