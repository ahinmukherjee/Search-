.signup-modal {
    position: fixed; /* Fix position to stay on top */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Center it properly */
    background: #fff;
    width: 400px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    text-align: center;
    z-index: 20; /* Make sure it appears above the overlay */
}


.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 15; /* Make sure it's behind the modal but above everything else */
}



