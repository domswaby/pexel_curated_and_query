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
5. Run the project - in the root directory entering the following command will start the frontend and backend at the same time using the concurrently package
   ```js
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Contribute

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
