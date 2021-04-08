// IMPORTING INSTALLED DEPENDENCIES
import express from 'express'

// IMPORTING THE MONGOOSE CONNECTION 
import './db/mongoose.js';
// MPORTING THE ROUTES FROM VARIOUS LOCATIONS * //
import userRouter from './routers/user.js';
import resourceRouter from './routers/resource.js';
// INITIALIZING THE EXPRESS FUNCTION AND SAVING IT IN (app)
const app = express();
// CALLING THE JSON ON EXPRESS TO WITH A MIDDLEWARE
app.use(express.json());
// APPENDING THE ROUTERS TO THE APP METHOD
app.use(userRouter);
app.use(resourceRouter);
// EXPORTING THE (app) TO MAKE IT AVAILABLE TO THE FILES.
export default app;
