const employeeCheck = "http://localhost:8080/employeeCheck";
const postEmployee = "http://localhost:8080/employee";
const getEmployeeById = "http://localhost:8080/employee/";

const employeeData = {
    id: null,
    is_operator: null
}

document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('login-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const signupLink = document.getElementById('signup-link');

    loginBtn.addEventListener('click', function () {
        const username = usernameInput.value;
        const password = passwordInput.value;
        if (username && password) {
            // Make an API call to authenticate user
            fetch(employeeCheck, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    employee_id: username,
                    employee_password: password
                })
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                if (data.is_operator) {
                    // Redirect to operator dashboard or desired page
                    window.sessionStorage.setItem('employee', JSON.stringify(data));
                    window.location.href = '/operatorDashboard.html'; // Change the URL to your operator dashboard page
                } else {
                    // Redirect to regular employee dashboard or desired page
                    window.sessionStorage.setItem('employee', JSON.stringify(data));
                    window.location.href = '/employeeDashboard.html'; // Change the URL to your regular employee dashboard page
                }
            })
            .catch(error => {
                console.error('Error:', error); // Log the specific error message
                alert('Login failed. Please try again.'); // Show a user-friendly message
            });
        } else {
            alert('Please enter both username and password.');
        }
    });

    // Add functionality for signup link if needed
    signupLink.addEventListener('click', function () {
        // Implement signup logic here or redirect to signup page
        alert('Redirecting to signup page.');
    });
});

