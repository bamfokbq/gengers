// * THE SERVER IS THE ONLY EXPOSED FILE TO THE COMMAND TERMINAL *//
import app from './app.js';
// * CALLING THE PORT FROM THE ENVIRONMENT *//
const PORT = process.env.PORT;
// * LISTENING TO A PORT TO START THE SERVER *//
app.listen(PORT, () => {
  console.log("Server running on Port: " + PORT);
});

