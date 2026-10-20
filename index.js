const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route.js");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
    res.send("Hello From Node API Server");
});



const PORT = 3000;
const MONGO_URI =
    "mongodb+srv://laminaung2842004_db_user:McYUwGDcRlvPMpkD@backenddb.im4flt6.mongodb.net/study2?retryWrites=true&w=majority";

// Connect to MongoDB first, then start the server
mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    });


    




