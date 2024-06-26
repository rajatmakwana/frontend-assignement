# Solar Farm Management System

## Overview
The Solar Farm Management System is a web application designed to monitor and manage solar panels in a farm. It provides real-time data on panel performance, total energy production, and panel health status.

## Features
- **Real-time Data**: Fetches data from the solar farm API every 5 seconds to ensure up-to-date information.
- **Summary Display**: Displays a summary of total energy produced, total panels, and panel health status.
- **Panel Grid View**: Visualizes panel data in a grid layout for easy monitoring.

## Installation
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/rajatmakwana/frontend-assignement.git
    ```

2. Navigate to the project directory:
    ```bash
    cd frontend-assignement
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Start the backend server:
    ```bash
    node server.js
    ```

6. Open your browser and visit `http://localhost:3000` to view the application.

## Technologies Used
- **React**: Frontend framework for building user interfaces.
- **Axios**: HTTP client for making API requests.
- **Reactstrap**: Bootstrap components for React.
- **Jest** and **React Testing Library**: Testing frameworks for unit and integration testing.

## License
This project is licensed under the [MIT License](LICENSE).