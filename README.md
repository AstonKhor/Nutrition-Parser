# Nutrition-Parser

Before running be sure that you have the following installed 

- nvm
- node lts/carbon
- mysql@5.7


## How to start application:

Navigate to the Nutrition Parser Directory "/Nutrition-Parser"

In Terminal shell, run the following sequentially
```
npm install #Install relevant packages 
npm run db:populate #Create databases and tables
npm run seed #Seed database with json file data
``` 
***You may have to adjust the password in /database/seed.js to match your local environment

In a different Terminal shell , run 
```
npm run build #compile bundle with webpack and babel
```

In a different Terminal shell, run 
```
npm start #Run express server and open port 3000
```

Open browser to localhost:3000