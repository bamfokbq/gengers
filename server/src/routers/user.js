import express from 'express';
const router = express.Router();
import User from '../models/user.js';

// ! ADD A NEW MENTEE TO DB. //
router.post('/user', async (req, res) => {
  const user = new User(req.body);
  const userID = user._id;
  // CHECK: If the user exit and assign [USER] to a variable in the DB.
  const doesUserExit = await User.exists({ _id: userID });

  try {
  // COMMENT: Only save the User if it doesn't exit.
    !doesUserExit && await user.save(); 
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(`Error: ${error} this is the creation error`);
  }
});
// ! LOGGING IN MENTEE ! //
router.post(`/user/login`, async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.userName,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(`Error: ${error}`);
  }
});
// ! LOGGING OUT MENTEE ! //
router.get('/user/logout', async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send('User logged out!!!');
  } catch (error) {
    res.sendStatus(500);
  }
});
// * EXPOSE THE MENTEE ROUTER *//
export default router;
