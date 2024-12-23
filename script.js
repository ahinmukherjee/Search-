document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (username === "admin" && password === "password") {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to another page (optional)
    } else {
        document.getElementById("message").textContent = "Invalid username or password!";
    }
});
