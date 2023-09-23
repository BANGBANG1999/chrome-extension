const button = document.querySelector(".button");
const displayTitle = document.querySelector("#dispalyTitle");
const clearButton = document.querySelector(".clearButton")

const getTabTitle = (tabs) => {
    if (tabs.length > 0) {
        const activeTab = tabs[0];
        const title = activeTab.title;
        button.style.display = "none";
        displayTitle.style.display = "block"
        displayTitle.textContent = title
        clearButton.style.display = "block"
        clearButton.style.opacity = "1"
        
    } else {
        console.log("No active tab found.");
    }
}

const handleClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, getTabTitle);
}

const clearWindow = () => {
    displayTitle.style.display = "none";
    clearButton.style.display = "none";
    button.style.display = "inline"
}

button.addEventListener("click", handleClick);
clearButton.addEventListener("click", clearWindow);
