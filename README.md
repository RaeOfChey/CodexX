# CodexX
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
CodexX is a comprehensive video game discovery and wishlist platform built with React, TypeScript, Node.js, Express, Sequelize, and PostgreSQL. It leverages the RAWG Video Games Database API for detailed game information. This platform allows users to search for games, view details, add favorite games to their personal library, rate them, and maintain a personalized wishlist.

## Table of Contents

- [Features](#Features)<br/>
- [Installation](#installation)<br/>
- [Usage](#Usage)<br/>
- [API Endpoints](#APIEndpoints)<br/>
- [Technologies Used](#TechnologiesUsed)<br/>
- [Future Enhancements](#FutureEnhancements)<br/>
- [License](#License)<br/>
- [Contact Us](#ContactUs)<br/>

## Features
- User Authentication: Secure login and signup with JSON Web Tokens (JWT).
- Game Search and Details: Integrated with RAWG API for comprehensive game data, including genres, platforms, release dates, and more.
- Personalized Library and Wishlist: Users can add games to their wishlist, rate them, and view their personalized library.
- Responsive Design: Built with a responsive UI for seamless use across devices. 

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/CodexX.git
    ```
2. **Install dependencies**:
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
3. **Configure environment variables**:
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
4. **Run the database setup**:
   - Start PostgreSQL and run the schema setup located in `server/db/schema.sql`.
   - (Optional) Seed the database with sample users and games using the seed scripts in `server/src/seeds`.
5. **Start the development servers**:
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
1. Signup/Login: Register a new account or log in with existing credentials.
2. Search Games: Use the search bar to look up specific games or explore popular games on the home page.
3. Add to Wishlist: Add games to your wishlist to save for future exploration.
4. Rate Games: Rate games in your library.
5. View Wishlist: Visit the Wishlist page to see your personalized collection.

## API Endpoints
The backend exposes the following API routes:

Authentication
- POST /api/auth/login - User login
- POST /api/auth/new - New user signup
- 
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

## Technologies Used
- Frontend: React, TypeScript, Vite
- Backend: Node.js, Express
- Database: PostgreSQL, Sequelize ORM
- API: RAWG Video Games Database API
- Authentication: JSON Web Tokens (JWT)

## Future Enhancements
- Friend System: Allow users to view and share libraries with friends.
- Game Recommendations: Add personalized game recommendations based on library contents.
- Enhanced Search: Advanced filtering by genre, platform, rating, etc.
- Profile Customization: Allow users to customize profile and wishlist views.

## License:
This application is covered under the following license: [MIT License](https://www.gnu.org/licenses/gpl-3.0)

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
