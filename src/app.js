import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';

import router from './routes/index'
import db from './models/index';

const app  = express()
const port = process.env.PORT || 3200;

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//  for heping in the navigation
app.use(cors())

// testing  db connection
const { sequelize } = db // from models/index
sequelize
  .authenticate()
  .then(() => console.log("Databse connected....."))
  .catch((err) => console.log("Errors: " + err));

// confuring router
app.use('/api/v1', router);

// catch all 404 errors
app.all('*', (req, res, next) => {
  const err = res.status(404).json({status:404, error:'Url Requested not found'});
  next(err);
});

app.listen(port, () => {
  console.log(`server is starting and running! on port ${port} ...`);
}).on('error', (err) => {
  if (err.errno === 'EADDRINUSE') {
    console.log(`----- Port ${port} is busy, trying with port ${port + 1} -----`);
    app.listen(port + 1);
  } else {
    console.log(err);
  }
});
