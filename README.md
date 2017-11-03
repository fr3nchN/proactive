# ProActive from Activeeon Front-end

## To edit

1. Clone repository ```git clone https://github.com/fr3nchN/proactive``` or ``git pull`` to updated
2. Install javascript dependencies ```npm install```
3. Run ```npm run dev```, this will monitor any changes and update the final javascript file
4. On another terminal run ```python -m SimpleHTTPServer 8000```, this will create a webserver which will handle the navigation

## Content

Most of the content which could be updated on a regular basis can be found in src/content. To add or edit, please keep the structure currently in use, the template will take care of the standard rendering.

For more advanced editions such as titles, contact, etc. the concerned files are in src/Main/components. The root for each page being:
- App.js for the home page
- GetStarted.js for the get started page
- Community.js for the community page
- ReleaseNotes.js for the release note page
- About.js for the about page
- Programming.js for ProActive programming page
