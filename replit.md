# Savor the Globe

A static web app that uses the SheCodes AI API to generate top 5 food recommendations by country or city.

## Project Structure

- `index.html` — Main entry point
- `src/index.js` — App logic (form handling, API calls, typewriter display)
- `src/style.css` — Styles
- `src/img/` — Images (logo, background)

## Tech Stack

- Pure HTML5 / CSS3 / Vanilla JavaScript (no build step)
- Axios (CDN) for HTTP requests
- Typewriter-effect (CDN) for animated text display
- SheCodes AI API for food recommendations

## Running

The app is served as a static site using `http-server` on port 5000.

Workflow: `Start application` — `npx --yes http-server . -p 5000 --cors -c-1`

## Deployment

Configured as a static deployment with `publicDir: "."`.
