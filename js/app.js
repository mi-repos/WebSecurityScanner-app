document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('scan-form');
    const urlInput = document.getElementById('url-input');
    const resultsDiv = document.getElementById('results');
    const resultsList = document.getElementById('results-list');
    const newScanButton = document.getElementById('new-scan-button');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const url = urlInput.value.trim();
        if (!url) {
            alert('Please enter a valid URL.');
            return;
        }

        // Clear previous results
        resultsList.innerHTML = '';
        resultsDiv.classList.add('hidden');

        // Simulate a scan delay
        form.querySelector('button').disabled = true;
        form.querySelector('button').textContent = 'Scanning...';

        // Dummy scan: after 2 seconds, show fake vulnerabilities
        setTimeout(() => {
            const dummyResults = [
                { type: 'XSS', severity: 'High', description: 'Reflected XSS possible on parameter `?<script>`.' },
                { type: 'Insecure Headers', severity: 'Medium', description: 'Missing CSP header.' },
                { type: 'SSL/TLS', severity: 'Low', description: 'Using weak cipher suite.' }
            ];

            dummyResults.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.type} (${item.severity}) — ${item.description}`;
                resultsList.appendChild(li);
            });

            // Show results
            resultsDiv.classList.remove('hidden');
            form.querySelector('button').disabled = false;
            form.querySelector('button').textContent = 'Scan';
        }, 2000);
    });

    newScanButton.addEventListener('click', function() {
        resultsDiv.classList.add('hidden');
        urlInput.value = '';
        urlInput.focus();
    });
});
