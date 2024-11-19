document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".luke");

    // Array of detailed text for each "luke"
    const details = [
        "Detail for luke 1",
        "Detail for luke 2",
        "Detail for luke 3",
        "Detail for luke 4",
        "Detail for luke 5",
        "Detail for luke 6",
        "Detail for luke 7",
        "Detail for luke 8",
    ];

    let overlay = null; // Ensure variables are properly initialized
    let popup = null;

    buttons.forEach((button, index) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent click bubbling

            // If a popup is already open, close it before opening a new one
            closePopup();

            // Create and display the overlay
            overlay = document.createElement("div");
            overlay.className = "overlay";
            document.body.appendChild(overlay);

            // Create and display the popup
            popup = document.createElement("div");
            popup.className = "popup";

            // Add number and details
            const numberDisplay = document.createElement("div");
            numberDisplay.className = "number";
            numberDisplay.innerText = button.innerText;

            const detailText = document.createElement("div");
            detailText.className = "details";
            detailText.innerText = details[index] || "No details available";

            // Add input fields
            const inputContainer = document.createElement("div");
            inputContainer.className = "input-container";

            const nameInput = document.createElement("input");
            nameInput.type = "text";
            nameInput.placeholder = "Enter your name";
            nameInput.className = "popup-input";

            const emailInput = document.createElement("input");
            emailInput.type = "email";
            emailInput.placeholder = "Enter your email";
            emailInput.className = "popup-input";

            const submitButton = document.createElement("button");
            submitButton.type = "button";
            submitButton.innerText = "Submit";
            submitButton.className = "popup-submit";

            // Append inputs and button to container
            inputContainer.appendChild(nameInput);
            inputContainer.appendChild(emailInput);
            inputContainer.appendChild(submitButton);

            // Append elements to popup
            popup.appendChild(numberDisplay);
            popup.appendChild(detailText);
            popup.appendChild(inputContainer);
            document.body.appendChild(popup);

            // Close popup when clicking on the overlay
            overlay.addEventListener("click", closePopup);
        });
    });

    // Function to close the popup
    function closePopup() {
        if (popup) {
            popup.remove();
            popup = null;
        }
        if (overlay) {
            overlay.remove();
            overlay = null;
        }
    }

    // Listen for clicks outside the popup to close it
    document.addEventListener("click", (event) => {
        if (popup && !popup.contains(event.target)) {
            closePopup();
        }
    });
});
