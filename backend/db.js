const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://gofood:gofood@cluster0.rhsn0kq.mongodb.net/gofoodmern?retryWrites=true&w=majority'


// const mongoDB = () => {
//     mongoose.connect(mongoURI)
//         .then(() => {
//             console.log("connected successfully");
//             const fetched_data = mongoose.connection.db.collection("food_items");
//             fetched_data.find().toArray(function (err, data) {
//                 if (err) console.log(err);
//                 else console.log(data);
//             })
//         })
//         .catch((err) => {
//             console.error();
//         });
// };

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected!');
        let fetched_data = mongoose.connection.db.collection("food_items");
        let data = await fetched_data.find({}).toArray();

        let foodCategory = mongoose.connection.db.collection("foodCategory");
        let catData = await foodCategory.find({}).toArray();



        // console.log(catData);

        global.food_items = data;
        global.foodCategory = catData;
        //console.log(global.foodCategory);

    } catch (error) {
        console.log('err: ', error);
    }
};

module.exports = mongoDB;