function addCopyButtons() {
    // Select all elements with the class for comments
    const commentElements = document.querySelectorAll(".HTMLDescription_container__v2ARn");

    commentElements.forEach((element) => {
        // Check if a copy button already exists
        if (element.querySelector(".copy-button")) return;

        // Create the "Copy" button
        const copyButton = document.createElement("button");
        copyButton.textContent = "Copy";
        copyButton.className = "copy-button";

        // Add event listener for copying text
        copyButton.addEventListener("click", () => {
            // Get the text content of the element excluding the button text
            const textToCopy = element.innerText.replace("Copy", "").trim();

            // Copy the text to the clipboard
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Create a custom popup
                const popup = document.createElement("div");
                popup.textContent = "Copied to clipboard!";
                popup.style.position = "fixed";
                popup.style.bottom = "20px";
                popup.style.right = "20px";
                popup.style.backgroundColor = "black";
                popup.style.color = "white";
                popup.style.padding = "10px";
                popup.style.borderRadius = "5px";
                popup.style.zIndex = "1000";
                document.body.appendChild(popup);

                // Auto-dismiss the popup after 2 seconds
                setTimeout(() => {
                    document.body.removeChild(popup);
                }, 2000);
            });
        });

        // Append the button to the element
        element.appendChild(copyButton);
    });
}

// Run the function when the page loads and when DOM changes
addCopyButtons();
const observer = new MutationObserver(addCopyButtons);
observer.observe(document.body, { childList: true, subtree: true });