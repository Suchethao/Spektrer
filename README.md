Spektrer Next App
This is a full stack application built using Next.js, MongoDB, and Express. It combines a music festival dashboard with product information and shopping capabilities.

Front End
The front end of the application is built with Next.js and includes the following dependencies:

@chakra-ui/icons: ^2.0.19
@chakra-ui/react: ^2.6.1
@clerk/clerk-react: ^4.15.4
@clerk/clerk-sdk-node: ^4.8.7
@clerk/nextjs: ^4.17.1
@emotion/react: ^11.11.0
@emotion/styled: ^11.11.0
@fontsource/inter: ^4.5.15
animate.css: ^4.1.1
classnames: ^2.3.2
framer-motion: ^10.12.12
next: ^13.4.3
react: ^18.2.0
react-bootstrap: ^2.7.4
react-dom: ^18.2.0
react-helmet: ^6.1.0
react-icons: ^4.8.0
react-query: ^3.39.3
The front end code can be found in the root directory of the repository.

Back End
The back end of the application is built with Express and MongoDB. It includes the following dependencies:

body-parser: ^1.20.2
cors: ^2.8.5
dotenv: ^16.0.3
express: ^4.18.2
mongodb: ^5.5.0
mongoose: ^7.1.1
The back end code can be found in the "app.js" file in the root directory of the repository.

Deployment
The website is hosted on Netlify. You can access it at: https://spektrer.netlify.app

The back end is hosted on Heroku. You can access it at: https://dashboard.heroku.com/apps/music-festival-api

Usage
To run the application locally, follow these steps:

Clone the repository: git clone <repository-url>
Install dependencies: npm install
Start the front end development server: npm run dev
Start the back end server: npm start
Make sure to set up the required environment variables for the back end by creating a .env file and providing the necessary values.
