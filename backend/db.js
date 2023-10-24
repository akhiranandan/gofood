const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://akhiranandan28:akhira28db@cluster0.zcehn50.mongodb.net/gofoodmern?retryWrites=true&w=majority' 
const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected!');
      let fetched_data = mongoose.connection.db.collection("food_items");
      let data=await fetched_data.find({}).toArray() 
      console.log();
    } catch (error) {
      console.log('err: ', error);
    }
  };

module.exports = mongoDB

