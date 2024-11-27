document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".luke");
    let currentIndex = 0;
    let touchStartX = null;
    let touchStartY = null;

    // Array av detaljer for hver luke
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

    let overlay = null;
    let popup = null;

    buttons.forEach((button, index) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent click bubbling
            currentIndex = index;
            showPopup(currentIndex);
        });
    });

    function showPopup(index) {
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
        numberDisplay.innerText = buttons[index].innerText;

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

        // Add touch event listeners for swipe
        popup.addEventListener('touchstart', function(e) {
            e.preventDefault(); // Prevent default touch behavior
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: false });

        popup.addEventListener('touchmove', function(e) {
            e.preventDefault(); // Prevent scrolling while swiping
        }, { passive: false });

        popup.addEventListener('touchend', function(e) {
            if (!touchStartX) {
                return;
            }

            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;
            
            const deltaX = touchEndX - touchStartX;
            const deltaY = Math.abs(touchEndY - touchStartY);
            
            // Håndter kun horisontale sveip (ignorer hvis vertikal bevegelse er større)
            if (Math.abs(deltaX) > 50 && deltaY < 100) {
                if (deltaX > 0 && currentIndex > 0) {
                    // Sveip til høyre - gå til forrige
                    currentIndex--;
                    showPopup(currentIndex);
                } else if (deltaX < 0 && currentIndex < buttons.length - 1) {
                    // Sveip til venstre - gå til neste
                    currentIndex++;
                    showPopup(currentIndex);
                }
            }
            
            // Tilbakestill berøringskoordinater
            touchStartX = null;
            touchStartY = null;
        });

        // Lukk popup når du klikker på overlegg
        overlay.addEventListener("click", closePopup);
    }

    // Funksjon for å lukke popup
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

    // Lytt etter klikk utenfor popup for å lukke den
    document.addEventListener("click", (event) => {
        if (popup && !popup.contains(event.target)) {
            closePopup();
        }
    });
});

