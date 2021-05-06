import mongoose from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
      uppercase: true,
    },
    middleName: {
      type: String,
      trim: true,
      uppercase: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    language: {
      type: String,
    },
    userName: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate(userName) {
        if (userName.length < 8) {
          throw new Error(`Username cannot be less than 10 characters!`);
        }
      },
    },
    email: {
      type: String,
      unique: true,
      Validate(email) {
        if (!validator.isEmail(email)) {
          throw new Error('Email is invalid!!!');
        }
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      validate(password) {
        if (password.includes('password')) {
          throw new Error(
            `Please don't include the word 'password' in your password`
          );
        }
      },
    },
    telephone: {
      type: String,
      required: true,
      trim: true,
      minlength: 10
    },
    age: {
      type: Number,
      required: true,
      validate(age) {
        if (age < 10) {
          throw new Error(`Age must not be less than 10`);
        }
      },
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
    region: {
      type: String,
      required: true,
    },
    fieldOfInterest: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: Buffer,
    },
    role: {
      type: String,
      default: 'Mentee'
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);
// * SETTING UP TOKEN FUNCTION ON THE {INSTANCE} OF MODEL *//
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);

  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token
};

// SETTING A CUSTOM MIDDLEWARE FOR FINDING CREDENTIALS ON THE {MODEL}* //
userSchema.statics.findByCredentials = async (userName, password) => {
  // ? Retrieve the user from the DB. //
  const user = await User.findOne({ userName });
  if (!user) return console.log(`Unable to Login!`);
  // ? Compare the entered password to the saved password of the user. //
  const isMatched = await bcrypt.compare(password, user.password);
  //? Check if the password doesn't matched, show error message or return the user. //
  if (!isMatched)
    return console.log(`Unable to Login, Password doesn't match!!!`);
  return user;
};
// HASHING MENTEE'S PASSWORD * //
userSchema.pre(`save`, async function (next) {
  const user = this;
  if (user.isModified(`password`)) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});
// * INITIALIZE THE MODEL*//
const User = mongoose.model(`User`, userSchema);
export default User;
