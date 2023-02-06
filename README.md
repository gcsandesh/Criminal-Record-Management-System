# Criminal Record Management System

## Description

CRMS is a record management system where a verified user can search for records of people. It provides a list of people who may/maynot be involved in any kind of criminal activities.

## Tech Stack

- Front-end

  - React.js
  - Tailwind CSS

- Back-end

  - Express.js
  - Node.js

- Database
  - MySQL

## To run the application locally

- Fork and clone this repository to your machine: <br/>
  `git clone https://github.com/SandeshGC/Criminal-Record-Management-System.git`

- Install <a href="https://www.apachefriends.org/download.html">XAMPP</a> and start MySQL server.

- Create databases and tables as specified in the <a href="#Database">'Database'</a> section.

- Install required npm packages in 'server' directory and start server:<br/>
  `cd server` **locate into server directory**  
  `npm install` **install packages**  
  `node index` **start server**

- Install required npm packages in 'client' directory:<br/>
  `cd client` **locate into client directory**  
  `npm install` **install packages**  
  `npm run dev` **deploy the frontend locally**

## Database

###### db name: crms

- Table: "records"

  - record_id **INT SERIAL PRIMARY_KEY**
  - first_name **VARCHAR(50)**
  - middle_name **VARCHAR(50)**
  - last_name **VARCHAR(50)**
  - age **INT**
  - gender **INT**
  - crime **VARCHAR(100)**
  - height_inch **FLOAT(5,2)**
  - photo **LONGTEXT**

- Table: "users"
  - user_id **SERIAL PRIMARY_KEY**
  - username **VARCHAR(30)**
  - password **TEXT**

## Future development

Things that I will work on this project later:

- The UI needs to be improved
- Check for invalid images
- Improve security
- create page for managing users
- use proper routes for managing users
- add ability to migrate database

## Author

[Sandesh GC](https://www.gcsandesh.com.np)
