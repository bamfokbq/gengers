import express from 'express';
const router = express.Router();
import Resource from '../models/resource.js';
import AuthMentor from '../middleware/AuthenticateMentor.js';


// * CREATING NEW RESOURCES *//
router.post(`/resource`, AuthMentor, async (req, res) => {
 
  const resource = new Resource({
    ...req.body,
    creator: req.user
  });

  try {
    await resource.save();
    res.status(201).send(resource);
  } catch (error) {
    // res.status(401).send(`Error: ${error}`);
    console.log(error);
  }
});

// ! RETRIEVE ALL RESOURCES FROM THE DATABASE !//

export default router;