const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

const connectionString =
  "mongodb+srv://Cluster63457:amNdcFFocEVN@cluster63457.lpf9y.mongodb.net/comp3133?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

const restaurantSchema = new mongoose.Schema({
  address: {
    building: String,
    street: String,
    zipcode: String,
  },
  city: String,
  cuisine: String,
  name: String,
  restaurant_id: String,
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

// return all restaurant details
app.get("/restaurants", async (req, res, next) => {
  if (req.query.sortBy) return next();
  try {
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// return id, cuisines, name, city, restaurant_id sorting by the restaurant_id based on parameter
app.get("/restaurants", async (req, res) => {
  try {
    let sortBy = req.query.sortBy.toUpperCase() === "ASC" ? 1 : -1;

    const restaurants = await Restaurant.find({}, { address: 0 }).sort({
      restaurant_id: sortBy,
    });

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// return all restaurant details by cuisine
app.get("/restaurants/cuisine/:cuisine", async (req, res) => {
  try {
    const cuisine = req.params.cuisine.toUpperCase();
    const restaurants = await Restaurant.find({
      cuisine: { $regex: cuisine, $options: "i" },
    });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// return cuisines, name, city of restaurants which are equal to Delicatessen and not in Brooklyn
app.get("/restaurants/Delicatessen", async (req, res) => {
  try {
    const restaurants = await Restaurant.find(
      { cuisine: "Delicatessen", city: { $ne: "Brooklyn" } },
      { _id: 0, cuisine: 1, name: 1, city: 1 }
    ).sort({ name: 1 }); // Sorting by name in ascending order

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});