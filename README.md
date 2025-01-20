## Demo and Snippets

- **Hosted Link:**
- **Screenshots:**

## Requirements/Purpose

### MVP

- Create a single-page application that allows users to search for books.
- Displays results in a responsive grid, showing the book's image. On hover, the title, author, and descriptions is visible.
- On clicking the book image, a modal with more detailed information is displayed.

### Purpose

- The purpose of the project is to create a user-friendly search engine that uses the Google Books API, that provides users with a seamless way to explore and access book data, and get to know more about their favourite book titles.

### Stacks Used

- **Frontend:** React, SCSS
  - **Why?:** It offers modularity and efficiency in building user-interfaces, which SCSS enhances the styling process with variables and mixins.
- **API:** Google Books API
  - **Why?:** It provides a comprehensive database for book-related metadata, which suits this project.

## Build Steps

1. Clone the repository

```bash
git clone https://github.com/shirdheen/nology-fakeos-project
```

2. Open `index.html` in your browser.

## Design Goals/Approach

- **Design Goals**:
  - A clean, responsive, and intuitive UI.
  - Provides detailed information about a chosen book in a modal.
  - Offer feedback to the user when no results are found.
- **Implementation Choices**:
  - **Modular JavaScript Functions:** Modular JS files for functions like weather handling, and updating time.
  - **Dynamic z-Index:** Makes sure that the last clicked modal appears on top.
  - **SCSS:** Used for better styling and organisation.

## Features

- Wallpaper that scales dynamically to fit the viewport.
- A menu modal with options including: Settings, About, and Help.
- Weather modal that fetches live weather data using the OpenWeather API.
- Current date and time displayed dynamically.
- Clickable icons to open apps, with a tooltip displayed you hover on the icon.

## Known Issues

- The project is not fully responsive for mobile. It has been currently design for desktop purposes only.
- There are no animations for when the modals are opened.

## Bugs to be Fixed

## Future Goals

- Add animations for modals.
- Introduce more app options like Notes, Dictionary, etc.
- Create a responsive design to support mobile views.
- Add a dark mode toggle for the **Settings** option in the menu.
- Add modals for **Help** and **About** options in the menu with some information on the OS.
