# E-commerce-app

# Project Description

## Introduction
This project is a RESTful API developed using Node.js, Express.js, and MySQL, serving as the backend for an e-commerce application. The API provides functionalities for user registration, email verification, and login to facilitate a seamless shopping experience.

## Features
- User Registration: Users can create an account by providing necessary information.
- Email Verification: Email confirmation is required to activate user accounts.
- User Login: Registered users can securely log in to access personalized features.
- Database Integration: MySQL is used as the database to store user information securely.

## Technologies Used
- Node.js: A JavaScript runtime environment for server-side development.
- Express.js: A web application framework for Node.js, providing robust routing and middleware features.
- MySQL: A relational database management system for data storage and retrieval.
- Docker: A containerization platform used for packaging the application and its dependencies.
- GitHub Actions: An automation tool for executing tests and deploying the application to Docker.

## Development
The API is developed using Node.js and Express.js, with MySQL as the database backend. Continuous testing and integration have been implemented using GitHub Actions. Regular updates and improvements will be made throughout the development process.

## Installation and Usage
1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Set up a MySQL database and update the connection details in the configuration file.
4. Run the application using `npm dev`.
5. Access the API endpoints using an API client, such as Postman.

## Testing
Automated unit tests have been implemented using a testing framework  Jest. To run the tests, use the command `npm test`. The tests will be executed automatically through GitHub Actions when pushing changes, ensuring the application's integrity.

## Deployment
The application is deployed to Docker using GitHub Actions. When the automated unit tests are completed successfully, the application will be built into a Docker image and deployed to a containerized environment.

## Contributing
Contributions to this project are welcome. If you would like to contribute, please fork the repository and create a pull request following the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License
This project is licensed under the [MIT License](LICENSE), granting you the freedom to use, modify, and distribute the code as per the license terms.

## Contact
For any questions or inquiries, please contact the project team at [juanj.vergaram@gmail.com](mailto:juanj.vergaram@gmail.com).
