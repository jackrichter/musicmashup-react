# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## The Music Mushup Application
This is the frontend for the app build with React JS.
As it is intended for demonstration purposes, it has been limited to displaying
two albums only. This saves loading time.

## Usage
The app has been deployed to Netlify for demonstration convenience.
The URL is: https://musicmushup.netlify.app/
Some MBId's for testing:
 - The Beatles: b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d
 - The Rolling Stones: b071f9fa-14b0-4217-8e97-eb41da73f598
 - Nirvana: 5b11f4ce-a62d-471e-81fc-a69a8278c7da
 - ABBA: d87e52c5-bb8d-4da8-b941-9f4928627dc8

## Running the Application
The backend server app should run first:
 1. Clone the musicmashup-cigny repository or download it as a ZIP.
    Path to repo: https://github.com/jackrichter/musicmashup-cygni/tree/master
 2. Run the JAR file: musicmashup-0.0.1-SNAPSHOT found in the target folder:
    java -jar .\musicmashup-0.0.1-SNAPSHOT.jar
 3. Go to the URL mentioned above.
 4. Enter a valid MBID in the search input field and click the 'search' button.
    The value is cleared after clicking 'search'.
    
