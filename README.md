Chrome Extension: Open Google on New Tab and Add "Do a Barrel Roll" Feature

Overview
This extension does a few things, it first of all replicates the look of the 2011 search engine but functions like the search engine of today (2024 as we speak) and it also replicates the fun easter egg 'do a berrel roll' 
i added this because its one of the things i remember being so amazed by as a young guy in school learning this easter egg from a youtube video under some clickbait title to generate viess, clearly worked lol

1. File Structure
Your extension should include the following files:

scss
Code kopiëren
/your-extension-folder/
    ├── manifest.json
    ├── content.js
    ├── styles.css
    ├── icon.png (optional)
Each file has its own role:

manifest.json: The configuration file that defines the extension's behavior and permissions.
content.js: Handles injecting the custom styling and adds the "Do a Barrel Roll" feature.
styles.css: Contains the custom CSS to apply the 2011 Google look.
icon.png: An optional icon for your extension.

 manifest.json
The manifest file describes the extension and its capabilities. Here’s it's code:

{
  "manifest_version": 3,
  "name": "Old Google Look",
  "version": "1.0",
  "description": "Restores the old look of Google.",
  "permissions": [
    "activeTab"
  ],
  "content_scripts": [
    {
      "matches": ["*://www.google.com/*"],
      "js": ["content.js"],
      "css": ["styles.css"]
    }
  ]
}

Explanation:
manifest_version: 3: Specifies that this extension uses Chrome’s Manifest v3 standard.
chrome_url_overrides: This part overrides Chrome’s default new tab behavior and points it to newtab.html, which will load Google.com.
content_scripts: This is where we tell Chrome to inject content.js (our JavaScript) and styles.css (our custom styles) into any Google page (https://www.google.com/*).

styles.css
This file provides the styling that mimics Google’s 2011 look.
Here's its code:

/* Reset some default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Ensures padding and borders are included in total width/height */
}

/* General body styles */
body {
    background-color: #f5f5f5 !important; /* Light gray background for light mode */
    color: #000 !important; /* Default text color */
    font-family: Arial, sans-serif !important; /* Consistent font */
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    body {
        background-color: #222222 !important; /* Dark background for dark mode */
        color: #ffffff !important; /* Light text color for dark mode */
    }

    /* Dark mode styles for specific elements */
    a {
        color: #1a0dab !important; /* Google link color */
    }

    h3 {
        color: #ffffff !important; /* Headings color */
    }

    p {
        color: #cccccc !important; /* Lighter text color for paragraphs */
    }
}

/* Header styles */
#header {
    background-color: white !important; /* White header background */
    border-bottom: 1px solid #dcdcdc !important; /* Bottom border */
    height: 80px; /* Set height */
    display: flex; /* Use flexbox for layout */
    align-items: center; /* Center vertically */
    padding: 0 20px; /* Padding */
}

/* Search input box */
input.gLFyf {
    width: 600px !important; /* Adjust width */
    padding: 10px !important; /* Padding */
    border: 1px solid #ccc !important; /* Border */
    border-radius: 5px !important; /* Rounded corners */
}

/* Search button styles */
input[name='btnK'] {
    background-color: #4285f4 !important; /* Button background color */
    color: white !important; /* Button text color */
    padding: 10px 20px !important; /* Padding */
    border: none !important; /* No border */
    border-radius: 5px !important; /* Rounded corners */
    cursor: pointer !important; /* Cursor style */
    margin-left: 10px; /* Space between input and button */
}

/* Optional: Style the logo */
#logo {
    display: block; /* Ensure it is displayed */
    margin: 10px auto; /* Centering */
    max-height: 70px; /* Adjust height */
}

/* Additional link styles to mimic old Google look */
a {
    color: #1a0dab !important; /* Google link color */
    text-decoration: none !important; /* Remove underline */
}

a:hover {
    text-decoration: underline !important; /* Underline on hover */
}

/* Additional styles for search results */
h3 {
    color: #1a0dab !important; /* Headings color */
}

p {
    color: #4b4b4d !important; /* Text color */
}

Explanation:
Main body styling: Sets the background to a light gray and text to black, similar to Google's old design.
Search bar and button: Adjusts the width, padding, and look of the search bar and search button to make it resemble the older version of Google.
Footer hidden: Hides the modern Google footer.

content.js
This JavaScript file injects the custom styling and enables the "Do a Barrel Roll" feature.
The code:

// Function to apply styles
function applyStyles() {
    const style = document.createElement('style');
    style.textContent = `
        body {
            background-color: #f5f5f5 !important;
            color: #000 !important;
        }

        #header {
            background-color: white !important;
            border-bottom: 1px solid #dcdcdc !important;
            height: 80px;
            display: flex;
            align-items: center;
            padding: 0 20px;
        }

        input.gLFyf {
            width: 600px !important;
            padding: 10px !important;
            border: 1px solid #ccc !important;
            border-radius: 5px !important;
        }

        input[name='btnK'] {
            background-color: #4285f4 !important;
            color: white !important;
            padding: 10px 20px !important;
            border: none !important;
            border-radius: 5px !important;
            cursor: pointer !important;
            margin-left: 10px;
        }

        a {
            color: #1a0dab !important;
            text-decoration: none !important;
        }

        h3 {
            color: #1a0dab !important;
        }

        p {
            color: #4b4b4d !important;
        }
    `;

    document.head.appendChild(style);
}

// Function to perform a barrel roll
function doABarrelRoll() {
    const body = document.body;
    body.style.transition = 'transform 0.6s ease-in-out';
    body.style.transform = 'rotate(360deg)';

    setTimeout(() => {
        body.style.transition = '';
        body.style.transform = '';
    }, 600); // Reset the transformation after 600ms
}

// Keyboard event to activate barrel roll
let isZPressed = false;
document.addEventListener('keydown', (event) => {
    if (event.key === 'z') {
        if (isZPressed) {
            doABarrelRoll();
            isZPressed = false; // Reset the status after the barrel roll
        } else {
            isZPressed = true;
            setTimeout(() => isZPressed = false, 300); // Reset after 300ms
        }
    }
});

// Apply styles when the content script runs
applyStyles();

Explanation:
doABarrelRoll(): This function applies a 360-degree rotation to the page. It uses CSS transform to rotate the body and resets after one second.
Double "z" keypress detection: The script listens for keypress events. If the "z" key is pressed twice within 500 milliseconds, it triggers the barrel roll. If not, it resets the detection.

