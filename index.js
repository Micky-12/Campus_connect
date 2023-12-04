function search() {
    var company = document.getElementById('company').value;
    var designation = document.getElementById('designation').value;

    // Send a request to the Node.js server
    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ company, designation }),
    })
    .then(response => response.json())
    .then(data => {
        var resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = '<h2>Job Details</h2>';
        resultsContainer.innerHTML += '<p>Company: ' + data.company + '</p>';
        resultsContainer.innerHTML += '<p>Vacancies: ' + data.vacancies + '</p>';
        resultsContainer.innerHTML += '<p>Prerequisites: ' + data.prerequisites + '</p>';
    })
    .catch(error => {
        console.error('Error:', error);
    });
}