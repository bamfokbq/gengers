import User from '../models/user.js';

const AuthMentor = async (req, res, next) => {
  try {
    const user = await User.findOne({
      role: 'Mentor',
    });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(404).send(`Error: ${error} Couldn't create a resource`);
  }
};

export default AuthMentor;
