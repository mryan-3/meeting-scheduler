Meeting Scheduler Project
=========================

Overview
--------

The Meeting Scheduler project is a full-stack application designed to help users schedule and manage meetings. It consists of a client-side application built with Next.js, TypeScript, and pnpm, and a server-side application built with Node.js, Express, MySQL, and pnpm.

Project Structure
-----------------

-   **Client Directory**: Contains the Next.js application with TypeScript.
-   **Server Directory**: Contains the Express application with Node.js and MySQL.

Prerequisites
-------------

-   [Node.js](https://nodejs.org/) (v14 or higher)
-   [pnpm](https://pnpm.io/) (v6 or higher)
-   [MySQL](https://www.mysql.com/) (v8 or higher)

Setup Instructions
------------------

### Client-Side Setup

1.  **Navigate to the Client Directory**

    bash

    Copy code

    `cd client`

2.  **Install Dependencies**

    Ensure you have `pnpm` installed. Then, install the necessary dependencies:

    bash

    Copy code

    `pnpm install`

3.  **Configure Environment Variables**

    Create a `.env.local` file in the `client` directory and add your environment variables:

    plaintext

    Copy code

    `NEXT_PUBLIC_SERVER_URL=http://localhost:5000`

4.  **Run the Development Server**

    Start the Next.js development server:

    bash

    Copy code

    `pnpm run dev`

    The application should now be running at `http://localhost:3000`.

### Server-Side Setup

1.  **Navigate to the Server Directory**

    bash

    Copy code

    `cd server`

2.  **Install Dependencies**

    Ensure you have `pnpm` installed. Then, install the necessary dependencies:

    bash

    Copy code

    `pnpm install`

3.  **Configure Environment Variables**

    Create a `.env` file in the `server` directory and add your environment variables:

    plaintext

    Copy code

    `MYSQL_HOST=localhost
   MSQL_USER=root
    MYSQL_PASSWORD=yourpassword
    MYSQL_DATABASE=meetings
    ORIGIN=http://localhost:3000
    SERVER_PORT=5000`

5.  **Create the Database**

    Ensure you have MySQL installed and running. Create the database and tables:

    sql

    Copy code

    `CREATE DATABASE meetings;

    USE meetings;

    CREATE TABLE meetings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      meeting_date DATE NOT NULL,
      meeting_time TIME NOT NULL
      UNIQUE KEY unique_meeting_time_per_date (meeting_date, meeting_time)
    );`

7.  **Run the Development Server**

    Start the Express server:

    bash

    Copy code

    `pnpm run dev`

    The server should now be running at `http://localhost:5000`.

Usage
-----

### Accessing the Application

-   **Client-Side**: Open your browser and navigate to `http://localhost:3000` to access the application.

### API Endpoints

The server-side application exposes the following API endpoints:

-   `POST /api/v1/meetings/create` - Create a new meeting.
-   `GET /api/v1/meetings` - Get all meetings.
-   `GET /api/v1/meetings/?id=` - Get a meeting by ID.
-   `GET /api/v1/meetings/date?meeting_date=` - Get meetings by date.
-   `PUT /api/v1/meetings/update/?id=` - Update a meeting.
-   `DELETE /api/v1/meetings/delete?id=` - Delete a meeting.

Contributing
------------

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Commit your changes (`git commit -am 'Add new feature'`).
4.  Push to the branch (`git push origin feature/your-feature`).
5.  Create a new Pull Request.

License
-------

This project is licensed under the MIT License - see the LICENSE file for details.
