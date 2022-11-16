const app = require('./app');

const dotenv = require('dotenv');
const connectDatabase = require('./config/dataBase');

//config
dotenv.config({ path: 'backend/config/config.env' });

//Connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
