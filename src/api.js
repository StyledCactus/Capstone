// api.js

// Simulated data for available reservation times
const availableTimes = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM',
    '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
];

// Function to fetch data from the API
export async function fetchAPI(date) {
    // Simulate fetching data from the API based on the provided date
    // In a real-world scenario, you would make an actual API request here
    // Replace this with your actual API call
    return new Promise((resolve, reject) => {
        // Simulating API call delay with setTimeout
        setTimeout(() => {
            // Resolve with available times for the provided date
            resolve(availableTimes);
        }, 1000); // Simulated delay of 1 second
    });
}

// Function to submit data to the API
export async function submitAPI(formData) {
    // Simulate submitting form data to the API
    // In a real-world scenario, you would make an actual API request here
    // Replace this with your actual API call
    return new Promise((resolve, reject) => {
        // Simulating API call delay with setTimeout
        setTimeout(() => {
            // Simulate successful form submission
            // In a real-world scenario, you would handle success/failure based on API response
            const success = Math.random() < 0.8; // 80% success rate
            if (success) {
                resolve(true); // Resolve with true for success
            } else {
                reject(new Error('Failed to submit form')); // Reject with an error for failure
            }
        }, 1000); // Simulated delay of 1 second
    });
}
