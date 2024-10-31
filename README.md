# Criminal Record Management System

## Description

CRMS is a record management system where a verified user can search for records of people. It provides a list of people who may/maynot be involved in any kind of criminal activities.

## Tech Stack

-   Front-end

    -   React.js
    -   Tailwind CSS

-   Back-end

    -   Express.js
    -   Node.js

-   Database
    -   MySQL

## To run the application locally

-   Fork and clone this repository to your machine: <br/>
    `git clone https://github.com/gcsandesh/Criminal-Record-Management-System.git`

-   Install <a href="https://www.apachefriends.org/download.html">XAMPP</a> and start MySQL server.

-   Create databases and tables as specified in the <a href="#Database">'Database'</a> section.

-   Install required npm packages in 'server' directory and start server:<br/>
    `cd server` **locate into server directory**  
    `npm install` or `yarn` **install packages**  
    `npm run devStart` or `yarn devStart` **start server** <br/>
    `npm run authStart` or `yarn authStart` **start authentication server**

-   Install required npm packages in 'client' directory:<br/>
    `cd client` **locate into client directory**  
    `npm install` or `yarn` **install packages**  
    `npm run dev` or `yarn dev` **deploy the frontend locally**

## Database

###### db name: crms

-   Table: "records"

    -   record_id **INT SERIAL PRIMARY_KEY**
    -   first_name **VARCHAR(50)**
    -   middle_name **VARCHAR(50)**
    -   last_name **VARCHAR(50)**
    -   age **INT**
    -   gender **INT** /_1 for male, 2 for female_/
    -   crime_id **INT FOREIGN KEY REFERENCES crimes(crime_id)**
    -   height_inch **FLOAT(5,2)**
    -   photo **LONGTEXT**

    ![image](https://user-images.githubusercontent.com/59115123/218262228-4486cdf9-3522-450c-80fe-fed2e787137a.png)

-   Table: "users"

    -   user_id **SERIAL PRIMARY KEY**
    -   username **VARCHAR(30)**
    -   password **TEXT**
    -   role **NVARCHAR(10) DEFAULT 'user' NOT NULL**

    ![image](https://user-images.githubusercontent.com/59115123/218262410-b1912437-a8b9-463a-b0ac-d72199066bc0.png)

-   Table: "crimes"

    -   crime_id **SERIAL PRIMARY KEY**
    -   cname **NVARCHAR(50)**
    -   severity **NVARCHAR(10)**
    -   description **TEXT**

    ![image](https://user-images.githubusercontent.com/59115123/218259605-5fbeb5c6-fe84-4192-81be-d71aca0bc824.png)

## Future development

Things that I will work on this project later:

-   The UI needs to be improved
-   Check for invalid images
-   Improve security (protect routes)
-   create page for managing users
-   use proper routes for managing users
-   add ability to migrate database

## Author

[Sandesh GC](https://www.gcsandesh.com.np)

## Acknowledgements

The favicon was generated using the following graphics from Twitter Twemoji:

-   Graphics Title: 1f46e-200d-2642-fe0f.svg
-   Graphics Author: Copyright 2020 Twitter, Inc and other contributors (https://github.com/twitter/twemoji)
-   Graphics Source: https://github.com/twitter/twemoji/blob/master/assets/svg/1f46e-200d-2642-fe0f.svg
-   Graphics License: CC-BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
