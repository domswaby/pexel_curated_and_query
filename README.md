<a name="readme-top"></a>

<br />
<div align="center">
  
  <h1 align="center">Pexels Curated and Search</h1>

</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#contribute">Contribute</a></li>

  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project allows users to search for and paginate through photos consumed through the Pexels API.  In addition to searching the user can also paginate through live curated photos from Pexels.

### Built With

* React
* Express
* Material-UI

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

You will need node.js and npm installed on your system.

### Clone and Install Dependencies 

Follow these steps to get up and running: 

1. Get a free API Key at [https://pexels.com](https://pexels.com)
2. Clone the repo
   ```sh
   git clone https://github.com/domswaby/pexel_curated_and_query.git
   ```
3. Install NPM packages - This command will run `npm install` in the root folder, change directories into the frontend folder, and run `npm install` again
   ```sh
   npm run install-all
   ```
4. Create a .env file in the root folder and add your API key as the value for "PEXELS_KEY"
   ```js
   PEXELS_KEY=ENTER_YOUR_API_KEY_WITHOUT_QUOTES
   ```
5. Run the project - in the root directory entering the following command will start the frontend and backend at the same time using the concurrently package. By default the server will run on port 5000 so be sure to kill any processes you may have running on this port before starting up the app.  
   ```js
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Frontend Routes -->
# Application State
 ## State Variables
   - `search` - set by typing in the search input.  
   - `curatedPage`- the current page of curated photos. Defaults to page 1 and controlled by pagination menu 
   - `searchedPage`- the current page of photos searched for. Defaults to page 1 and controlled by pagination menu
   - `totalCuratedResults` - stores total_results from the response object and used to calculate pagination
   - `totalSearchResults`- stores total_results from the response object and used to calculate pagination
   - `loading` - set to true while waiting for API calls in order to display skeleton
   - `images` - holds an JSON array of image objects returned from the API which get displayed in an ImageList component

 ## Use of localStorage 
   - The localStorage api is used to recover application state after a page refresh 
   - Search, curatedPage, and searchedPage are updated in localStorage when they change 
   - On page refresh localStorage is used to conditionally initialize the component state and request the appropriate data

![pexels_state_and_localStorage](https://user-images.githubusercontent.com/10789682/232109830-748c902d-dc77-4cc2-a4d0-8a571053db38.png)

 ## Main.js and useEffect
   - Main.js, practically speaking acts as the root component.
   - Aside from the Header.js component, all other components are imported into Main.js or nested under it somewhere. 
   - The useEffect in Main.js is the center of logic within the app and a good place to start when tracing out the flow of the app.  
   - If anything is in the search input when when state changes, the useEffect will update localStorage and request the relevant page of searchResults
   - Else it will get the relevant page of curatedResults

![pexels_mainjs_useeffect](https://user-images.githubusercontent.com/10789682/232108716-87d1b1ad-7f84-49e9-bb31-8d1ac319aea7.png)

<!-- Frontend Routes -->
# Frontend Routes

- `/`
  - `Content page with curated photos and search`
  - `No additional frontend routing required`

<!-- Backend Routes -->
# Backend Routes

## Endpoints

### `pexels`
  - `POST /api/pexels/curated` - get a page of curated photos.  Query params: page, per_page
  - `GET /api/pexels/search` - search for photos.  Query params: page, per_page, query

<p align="right">(<a href="#readme-top">back to top</a>)</p>
