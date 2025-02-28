* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    width: 90%;
}

.leftpart {
    flex: 1;
    text-align: left;
    margin-right: 20px;
}

h1 {
    color: #1877f2;
    font-size: 50px;
}

h3 {
    color: black;
    font-size: 20px;
}

.rightpart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

/* Login Box */
.login-box {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 350px;
    text-align: center;
}

/* Input Fields */
.login-input {
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    transition: 0.3s;
}

.login-input:focus {
    border-color: #1877f2;
    box-shadow: 0 0 5px rgba(24, 119, 242, 0.5);
}

/* Login Button */
.login-btn {
    width: 100%;
    background-color: #1877f2;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.3s;
}

.login-btn:hover {
    background-color: #166fe5;
}

/* Forgot Password */
.forgot-password {
    margin: 12px 0;
    font-size: 14px;
    color: #1877f2;
    cursor: pointer;
}

.forgot-password:hover {
    text-decoration: underline;
}

/* Divider */
hr {
    border: none;
    height: 1px;
    background-color: #ddd;
    margin: 15px 0;
}

/* Create Account Button */
.create-account-btn {
    width: 100%;
    background-color: #42b72a;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.create-account-btn:hover {
    background-color: #36a420;
}

/* Background overlay when signup modal opens */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 15; /* Ensures it appears above the login box */
}

/* Signup Modal (Centered) */
.signup-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Perfectly centers the modal */
    background: #fff;
    width: 400px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    text-align: center;
    z-index: 20; /* Ensures it appears above the overlay */
}

/* Signup Header */
.signup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
}

.signup-header h2 {
    font-size: 24px;
    color: #333;
}

.signup-header p {
    font-size: 14px;
    color: #666;
}

.close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #888;
    transition: color 0.3s;
}

.close-btn:hover {
    color: #333;
}

/* Form Styling */
.signup-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 10px;
}

/* Name Fields */
.name-fields {
    display: flex;
    gap: 10px;
}

.input-box {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    transition: 0.3s;
}

.input-box:focus {
    border-color: #1877f2;
    box-shadow: 0 0 5px rgba(24, 119, 242, 0.5);
}

/* Full-Width Input */
.full-width {
    width: 100%;
}

/* Birthday Section */
.birthday-section p,
.gender-section p {
    text-align: left;
    font-weight: bold;
    margin: 10px 0 5px;
}

.birthday-fields {
    display: flex;
    justify-content: space-between;
}

.birthday-fields select {
    width: 32%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
}

/* Gender Section */
.gender-options {
    display: flex;
    justify-content: space-between;
}

.gender-options label {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 30%;
    cursor: pointer;
    font-size: 14px;
}

.gender-options input {
    cursor: pointer;
}

/* Terms */
.terms {
    font-size: 12px;
    color: #666;
    margin-top: 10px;
}

.terms .blue {
    color: #1877f2;
    cursor: pointer;
}

.terms .blue:hover {
    text-decoration: underline;
}

/* Signup Button */
.signup-btn {
    width: 100%;
    background-color: #42b72a;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.3s;
}

.signup-btn:hover {
    background-color: #36a420;
}
