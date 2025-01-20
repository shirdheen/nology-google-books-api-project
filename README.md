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
git clone https://github.com/shirdheen/nology-google-books-api-project
```

2. Install dependencies

```bash
npm install
```

3. Run the development server.

```bash
npm run build
```

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

- Aesthetic header with the page title and subtitle.
- Search bar for users to search with a query string.
- Tiles laid out in a responsive grid format.
  - On hover, the title, description, and author will be revealed.
  - On clicking the tile, a modal will open showing more detailed information.
- Handle edge cases and errors (e.g., no results or invalid queries).
- User-friendly design with feedback for different states.
- Fully responsive layout.

## Known Issues

- Smoother animations for the modals.

## Bugs to be Fixed

- The transitions for the modal are not rendering as the way they should.

## Future Goals

- Add pagination.
- Add the option of moving to the next book within the modal.
- Allow users to save books that they like or want to read.
