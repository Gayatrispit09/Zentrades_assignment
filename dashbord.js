
    
   var location1Data = {
    labels: ['Edmonds', 'Mukilteo', 'Bothell', 'Seattle'],
    datasets: [{
        label: 'Location 1',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [2000, 4000, 6000, 8000]
    }]
};

var location2Data = {
    labels: ['Material Sale', 'Maintenance', 'HWT Replacement', 'Bid Work Plumbing'],
    datasets: [{
        label: 'Location 2',
        backgroundColor: 'rgba(220, 20, 60, 0.2)', 
        borderColor: 'rgba(220, 20, 60, 1)', 
        borderWidth: 1,
        data: [3000, 5000, 7000, 9000]
    }]
};


    
    var location1Chart = new Chart(document.getElementById('location1Chart').getContext('2d'), {
        type: 'bar',
        data: location1Data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var location2Chart = new Chart(document.getElementById('location2Chart').getContext('2d'), {
        type: 'bar',
        data: location2Data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

