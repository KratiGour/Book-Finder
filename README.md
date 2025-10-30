Book Finder
------------
A simple React web application to search and display book details using the Open Library API.

Features
--------
Search books by title.

View book cover, title, author(s), publisher, and first publish year.

Displays multiple results in organized cards.

Demo
----
Open the app and enter a book title; results will show instantly with details and cover images if available.

How it Works
------------
The main UI is in App.js.

User enters a title in the input box and clicks "Search".

The app fetches book data from Open Library Search API.

Results are displayed as styled cards using a responsive flexbox in CSS (styles.css).

Code Structure
---------------
App.js

Main component with React state for search input, loading, errors, and book data.

Async function searchBooks() fetches search results from the API.

Maps the response into book cards and updates the page.

styles.css

Contains basic styling for layout, results cards, and placeholders for missing covers.

How to Run
Open the project in CodeSandbox or StackBlitz.

No installation required; just fork or run the sandbox.

Technologies Used
ReactJS (functional components, hooks)

CSS (flexbox layout)

Open Library API

Credits
Open Library Books Search API for public book data.

License
This project is open for academic/non-commercial use.
