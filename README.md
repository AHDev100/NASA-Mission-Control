# NASA Mission Control

Welcome to NASA Mission Control, a MERN Stack App designed to facilitate the scheduling of interstellar missions to Kepler Exoplanets. This project uses modern technologies such as **React.js, Node.js, Express.js, MongoDB, Docker, and AWS,** to provide a seamless experience in managing interstellar missions.

![image](https://github.com/AHDev100/NASA-Mission-Control/assets/107712922/17dd4a5c-9136-4000-b2a4-ad4b1e6d5e8f)

## Mission Criteria

The mission scheduler ensures that only confirmed planets meeting specific criteria are available for the earliest scheduled missions. The criteria include:
- Planetary radius less than 1.6 times Earth's radius
- Effective stellar flux greater than 0.36 times Earth's value and less than 1.11 times Earth's value

## Backend Architecture

The backend of the project follows **REST** principles and utilizes Express.js to create a RESTful API/Server, implementing the Model-View-Controller **(MVC)** architectural Pattern. The Node.js File Module is employed to handle CSV files containing exoplanet data, with readable and writable streams piped together for efficient processing.

### MongoDB Integration

MongoDB is used as the database to store and manage exoplanet data. Users can perform **CRUD (Create, Read, Update, Delete)** operations on the MongoDB database to interact with exoplanet data. This includes adding new exoplanets, retrieving existing data, updating information, and deleting records. The flexibility and scalability of the MongoDB cluster used in this project allows for efficient querying and storage of mission-critical information.

## Containerization and Deployment

The project is containerized using Docker, providing a consistent and isolated environment for seamless deployment. The app was deployed to a live environment on an AWS EC2 instance. You can check out the live deployment at [https://52.14.248.137](https://52.14.248.137).

## Project Architecture

Here is a simplified overview of the Application's Core Architecture: 

![image](https://github.com/AHDev100/NASA-Mission-Control/assets/107712922/f3f089c8-80f6-45cd-8ba3-8c4c11bd1582)

## Postman Testing

The API endpoints were tested using Postman, a collaborative platform for API development. Postman allowed us to ensure the reliability and functionality of the NASA Mission Control API during development.

## Getting Started (For Local Use)

Follow these steps to get started with the project:

1. Ensure you have Node.js Installed (Preferably version `16`, the version used for this project)
2. Clone the repository: `git clone https://github.com/AHDev100/NASA-Mission-Control`
3. Navigate to the project directory: `cd NASA-Mission-Control`
4. Install the required project dependencies: `npm install`

## Running the Project

1. In the terminal, run the following command to deploy the project: `npm run deploy`
2. Open your browser and navigate to [localhost:8000](http://localhost:8000) - where `localhost` refers to your local IP address and `8000` is the server port
