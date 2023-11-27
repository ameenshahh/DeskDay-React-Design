
# Assignment

Desk Day Assignment Task


## Tools Used

    1. NodeJS
    2. ExpressJS
    3. JWT (authentication)
    4. MondoDB(database)
    5. Mongoose (ODM)
    6. Bcrypt(hashing password)
    7. ReactJS
    8. Material UI
## Installation of react-task

Install my-project with npm

```bash
  
  git clone https://github.com/ameenshahh/DeskDay-React-Design.git
  cd react-task
  npm install 
  npm start
```
Server starts on PORT 3000

Index route is localhost:3000

## Installation of node-task
```bash
  
  git clone https://github.com/ameenshahh/DeskDay-React-Design.git
  cd nodejs-task
  npm install 
  npm run dev
```

Server starts on PORT 4000

Index route is localhost:4000


    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` - Port number

`DATABASE_URL` - Mongodb connection url string

`SECRET_KEY` - secret for jwt token 
## API Reference

#### Sign up

```http
  POST /signup

  Test Input :
  {
    "email":"test@gmail.com",
    "password":"test"
  }
```

#### Sign in

```http
  POST /signIn

  Test Input :
  {
    "email":"test@gmail.com",
    "password":"test"
  }
```

#### Adding vendor
```http
  POST /vendor/add
   test input : 
   {
     "vendorName":"Reliance",
     "vendorEmail":"info@reliance.com"
   }
```

#### Add invoice
```http
  POST /invoice/add
  test input : 
  {
    "invoiceName":"Invoice 1",
    "invoiceAmount":1000,
    "vendor":"655b81674de1e111a9b519c8"
  }
```

#### Invoice payment
```http
  POST /invoice/payment
  test input : 
  {
    "invoiceId":"655c257170eead6aa25c50eb",
    "amount":500
  }

  try submitting different amounts to see different edge cases

```


## Authors

- [@ameenshahh](https://github.com/ameenshahh/)

- Email : ameenshahshahjahan@gmail.com

- Mob : +918138006388

