# CodexX

### Status: In Progress

![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)

## Table of Contents
1. [Description](#description)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Tools and Technologies](#tools-and-technologies)
7. [Dependencies and Installs](#dependencies-and-installs)
8. [Future Enhancements](#future-enhancements)
9. [License](#license)
10. [Contributing](#contributing)
11. [Contact Us](#contact-us)
12. [Tests](#tests)
13. [Questions](#questions)

## Description
CodexX is a comprehensive video game discovery and wishlist platform built with React, TypeScript, Node.js, Express, Sequelize, and PostgreSQL. It leverages the RAWG Video Games Database API for detailed game information. This platform allows users to search for games, view details, add favorite games to their personal library, rate them, and maintain a personalized wishlist.

To view the application, simply navigate to the live website at https://codexx-4hxs.onrender.com.

<img width="640" alt="CodexX Thumbnail Image" src="https://github.com/user-attachments/assets/622687fa-4ffe-4297-bf5a-ea16e09c1822">

Example of ProfilePage for a user

## Features
- User Authentication: Secure login and signup with JSON Web Tokens (JWT).
- Game Search and Details: Integrated with RAWG API for comprehensive game data, including genres, platforms, release dates, and more.
- Personalized Library and Wishlist: Users can add games to their wishlist, rate them, and view their personalized library.
- Responsive Design: Built with a responsive UI for seamless use across devices. 

<img width="640" alt="Capture 2" src="https://github.com/user-attachments/assets/0a0f6259-a93c-4340-a69e-a3b6a0b9f107">

Example of LoginPage

## Installation
To use the application, follow these steps:

- Step 1: **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/CodexX.git
    ```
- Step 2: **Install dependencies**:
   - For the server:
     ```bash
     cd CodexX/server
     npm install
     ```
   - For the client:
     ```bash
     cd ../client
     npm install
     ```
- Step 3: **Configure environment variables**:
   - Create `.env` files in both `/server` and `/client` directories.
   - In `/server/.env`, set up your database and JWT secret keys:
     ```plaintext
     PORT=3001
     JWT_SECRET_KEY=your_jwt_secret
     DB_USER=your_db_user
     DB_PASSWORD=your_db_password
     DB_NAME=videogame_db
     REQUEST_URL=https://api.rawg.io/api/
     API_KEY=your_rawg_api_key
     ```
- Step 4: **Run the database setup**:
   - Start PostgreSQL and run the schema setup located in `server/db/schema.sql`.
   - (Optional) Seed the database with sample users and games using the seed scripts in `server/src/seeds`.
- Step 5: **Start the development servers**:
   - For the server:
     ```bash
     npm run start:dev
     ```
   - For the client:
     ```bash
     cd ../client
     npm run dev
     ```
## Usage
To start the application, run the following command: `npm start`.

When you execute this command, the application will launch in your web browser. You can then:
- Signup/Login: Register a new account or log in with existing credentials.
- Search Games: Use the search bar to look up specific games or explore popular games on the home page.
- Add to Wishlist: Add games to your wishlist to save for future exploration.
- Rate Games: Rate games in your library.
- View Wishlist: Visit the Wishlist page to see your personalized collection.

## API Endpoints
The backend exposes the following API routes:

Authentication
- POST /api/auth/login - User login
- POST /api/auth/new - New user signup
  
Library (Wishlist)
- POST /api/library/library-entries - Add a game to the user’s library
- GET /api/library/library-entries - Retrieve all library entries for the logged-in user
- GET /api/library/library-entries/:id - Retrieve a specific library entry by ID
- PUT /api/library/library-entries/:id - Update a library entry (e.g., rating)
- DELETE /api/library/library-entries/:id - Delete a library entry
- 
Game Data (RAWG API)
- GET /api/rawg/games - Retrieve popular games
- GET /api/rawg/game/:id - Retrieve game details by game ID
- GET /api/rawg/game/:search - Search games by title

Note: Some routes require authentication. Make sure to pass the JWT token in the request headers after logging in.

## Tools and Technologies
**Programming Language**:
- TypeScript

**Libraries & Frameworks**:
- React
- Express
- JWT
- Vite

**Development Environment**:
  - Node.js

## Dependencies and Installs

**NPM Packages**:
- `express` - Handles server-side routing and API requests.
- `jsonwebtoken` - Manages JSON Web Token creation and verification for authentication.
- `dotenv` - Loads environment variables from a .env file.
- `pg` - PostgreSQL client for Node.js, facilitating database interactions.
- `cors` - Enables Cross-Origin Resource Sharing, allowing communication between the client and server.
- `bcryptjs` - Hashes passwords securely for storage.
- `axios` - Makes HTTP requests to external APIs, like RAWG.
- `concurrently` - Runs client and server scripts simultaneously for development.
- `nodemon` - Restarts the server automatically when files change in development.

## Future Enhancements
- Friend System: Allow users to view and share libraries with friends.
- Game Recommendations: Add personalized game recommendations based on library contents.
- Enhanced Search: Advanced filtering by genre, platform, rating, etc.
- Profile Customization: Allow users to customize profile and wishlist views.

## License
This project is licensed under the MIT License, which allows you to freely use, modify, and distribute this software, provided proper attribution is given.

## Contributing
This project is part of a coding bootcamp assignment and is not open for contributions. To comply with the course requirements, I must complete this project individually without outside assistance. Therefore, pull requests, issues, or other contributions will not be accepted. Thank you for understanding!

## Contact Us
**Brad**:
- https://github.com/modifiedyoke
- b.shurts@outlook.com

**Cheyenna**:
- https://github.com/RaeOfChey
- https://cheyenna-raelynn-portfolio.netlify.app/
- cheyennaraelynn@gmail.com

**Kyle**:
- https://github.com/kyand38/
- kyand2024@gmail.com

**Yahye**:
- https://github.com/yahye-mohamed101
- yahyemohamed2002@gmail.com

## Tests
Currently, this project does not have any automated tests.

## Questions
If you have any questions about the repository, feel free to reach out by opening an issue or contacting me directly at cheyennaraelynn@gmail.com You can also find more of my work on GitHub at https://github.com/RaeOfChey.
