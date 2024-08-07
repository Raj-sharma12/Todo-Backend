const mongoose = require("mongoose");
// env ke andar jo bhi define hoga wo saaara process object mein feed ho jaega
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('DB ka connection successfull')

    })
    .catch((error) => {
        console.log('Issue in DB connection');
        console.error(error.message);
        process.exit(1);
    });
}
module.exports = {dbConnect};