import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URL,{
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => {
      console.log('DB CONNECTED!!!🧨');
    }
  )
