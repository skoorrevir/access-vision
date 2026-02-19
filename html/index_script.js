document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('clinic-container');

            fetch('schedule.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // Clear the "Loading..." message
                    container.innerHTML = '';

                    data.forEach(clinic => {
                        // Create Card Container
                        const card = document.createElement('div');
                        card.className = 'clinic-card';

                        // Create Info Section
                        const infoDiv = document.createElement('div');
                        infoDiv.className = 'clinic-info';
                        infoDiv.innerHTML = `
                            <h3>${clinic.location}</h3>
                            <p><strong>Date:</strong> ${clinic.date}</p>
                            <p><strong>Time:</strong> ${clinic.time}</p>
                        `;

                        // Create Status Badge
                        const statusDiv = document.createElement('div');
                        // Use 'open' or 'full' classes based on JSON status
                        const statusClass = clinic.status === 'open' ? 'open' : 'full';
                        statusDiv.className = `status ${statusClass}`;
                        statusDiv.textContent = clinic.statusLabel;

                        // Append to Card
                        card.appendChild(infoDiv);
                        card.appendChild(statusDiv);

                        // Append to Main Container
                        container.appendChild(card);
                    });
                })
                .catch(error => {
                    console.error('Error loading schedule:', error);
                    container.innerHTML = '<p style="text-align:center; color:red;">Unable to load schedule. Please try again later.</p>';
                });
        });
