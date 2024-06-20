const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Olympics-runner", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successful");
}).catch((e) => {
    console.log("Connection Unsuccessful");
    console.error(e);
});
