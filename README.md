# Server-Side-Ecommerce

## Install / How to Use:
* If you do not already have it installed, install node.js (Here is the link to the download: https://nodejs.org/en/download/)
* Clone this repository to your machine (& switch to the directory you just created)
* Run npm i in your console to install necessary packages to run databse
* Create a .env file; add these three variables DB_NAME='ecommerce_db' DB_USER='your mysql username' DB_PW='your mysql password', 
    and save to create the connection. (Dont forget to add the .env file to the .gitignore file so you do not post your credentials anywhere)
* From here you can use the pre created seeds or alter them to include your products
* Once satisfied with the seeds run node server.js to create and start the database
* Then use ctrl C (on windows) to exit the server; back in console run node seeds to upload your categries, products, and tags to the database
* Run node server.js once more in the console and your database will be up and running filled with all your data

## Link To Video Demo:


## Purpose:
This project is a back end database set up for an ecommerce website. A user can add, delete, or update categories, products, and tags in the database
as they need to for thier business. Follow the set up steps below to access the database.

## Built With:
* Node.js
    - dotenv
    - express
    - mysql2
    - sequelize
* JavaScript 
* SQL 

## Made By:
### Thomas Menture
- Contact at: thomasoxemail@gmail.com  