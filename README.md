# Kabaddi Event Management App

This project is a **Kabaddi Event Management Application** where users can book events and view their bookings, and admins can manage referees, teams, and venues. The frontend is built using **React**, and the backend is developed with **Spring Boot**.

## Table of Contents

1. [Frontend (React)](#frontend-react)
   - [Admin Features](#admin-features)
   - [User Features](#user-features)
   - [Axios API Calls](#axios-api-calls)
2. [Backend (Spring Boot)](#backend-spring-boot)
   - [Spring Security](#spring-security)
   - [REST APIs](#rest-apis)
3. [Running the Application](#running-the-application)
4. [Technologies Used](#technologies-used)

---

## Frontend (React)

The frontend of the Kabaddi Event Management App is built using React. The following features are available:

### Admin Features

- **Add Referee**: Form to add a new referee for the event.
- **Edit Referee**: Update details of an existing referee.
- **Add Venue**: Form to add a new venue for the event.
- **Edit Venue**: Update details of an existing venue.
- **Add Team**: Form to add a new team to the event.
- **Edit Team**: Update details of an existing team.

### User Features

- **Booking Events**: Users can book tickets for an event.
- **View Bookings**: Users can view their booking history.
- **Edit Bookings**: Users can modify their event bookings if needed.

### Axios API Calls

The app uses **Axios** for making HTTP requests to the backend.

- Add Referee: `POST /api/referees`
- Edit Referee: `PUT /api/referees/{id}`
- Add Venue: `POST /api/venues`
- Edit Venue: `PUT /api/venues/{id}`
- Booking Event: `POST /api/bookings`
- View Booking: `GET /api/bookings/{userId}`
- Edit Booking: `PUT /api/bookings/{bookingId}`

---

## Backend (Spring Boot)

The backend is developed using **Spring Boot**, providing REST APIs for event management.

### Spring Security

Spring Security is used for user authentication and authorization. The app has two roles:

- **Admin**: Full access to manage referees, teams, and venues.
- **User**: Can book events and view their bookings.

The authentication is based on **JWT (JSON Web Tokens)**.

### REST APIs

- **POST /api/referees**: Add a new referee.
- **PUT /api/referees/{id}**: Edit referee details.
- **POST /api/venues**: Add a new venue.
- **PUT /api/venues/{id}**: Edit venue details.
- **POST /api/bookings**: Book an event.
- **GET /api/bookings/{userId}**: View user bookings.
- **PUT /api/bookings/{bookingId}**: Edit an existing booking.

---

## Running the Application

### Frontend (React)

1. Clone the repository:  
   `git clone https://github.com/Karthik-MP/kabaddi_event_management`
   
2. Install dependencies:  
   `npm install`

3. Start the React app:  
   `npm start`

4. The frontend will be available at:  
   `http://localhost:3000`

### Backend (Spring Boot)

1. Clone the repository:  
   `git clone https://github.com/Karthik-MP/kabaddi_event_management`
   
2. Navigate to the backend directory:  
   `cd maven`
   
3. Install dependencies:  
   `mvn install`

4. Start the Spring Boot application:  
   `mvn spring-boot:run`

5. The backend will be available at:  
   `http://localhost:8080`

---

## Technologies Used

- **Frontend**:  
  - React
  - Axios
  - React Router
  - State Management (React Context API / Redux)

- **Backend**:  
  - Spring Boot
  - Spring Security (JWT Authentication)
  - Spring Data JPA (Database Integration)
  - H2 / MySQL Database

- **Other Tools**:  
  - Maven for dependency management
  - Postman for API testing

---

## Contributing

Feel free to fork the repository and submit pull requests. To contribute, follow these steps:

1. Fork the repository
2. Clone your forked repository to your local machine
3. Create a new branch: `git checkout -b feature-name`
4. Make your changes and commit: `git commit -m 'Add feature'`
5. Push to your fork: `git push origin feature-name`
6. Create a pull request on GitHub

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For further inquiries, please contact the project maintainer at:
- Website: [karthikmp.com](https://karthikmp.com)
