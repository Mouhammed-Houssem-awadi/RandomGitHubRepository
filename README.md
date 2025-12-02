# GitHub Random Repository Finder

A web app that allows users to select a programming language and discover a **random repository** from GitHub. It shows repository details like stars, forks, and open issues, and handles loading, empty, and error states for a smooth user experience.

---

## Features

- Select a programming language from a dropdown
- Fetch up to **100 repositories** from GitHub using the GitHub Search API
- Display a **random repository** in a card with:
  - Repository name (clickable link)
  - Description
  - Stars ⭐
  - Forks 🍴
  - Open issues ❗
- Refresh to see another random repository from the fetched list
- Handles **loading**, **empty**, and **error** states
- Responsive design for mobile and desktop

---

## Usage

1. Open the project in a web browser.
2. Select a programming language from the dropdown menu.
3. Click **"Find Repository"** to fetch and display a random repository.
4. Use **"Refresh"** to display another random repository from the same batch.
5. Use **"Clear"** to reset the results.

---

## Project URL

Check out the live project here:  
[GitHub Random Repository Finder](https://mouhammed-houssem-awadi.github.io/RandomGitHubRepository/)

---

## Installation (Optional)

No special installation is required — this is a **pure HTML/JS/CSS project**.  
If you want to avoid browser CORS issues when fetching JSON locally, run a simple local server:

- Using **VSCode Live Server** (recommended)
- Using Python:

```bash
# Python 3.x
python -m http.server 8000
