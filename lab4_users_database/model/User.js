const mongoose = require("mongoose");

// Define regex patterns
const zipCodePattern = /^\d{5}-\d{4}$/; // 12345-1234
const phonePattern = /^1-\d{3}-\d{3}-\d{4}$/; // 1-123-123-1234
const urlPattern = /^(http|https):\/\/[^\s$.?#].[^\s]*$/; // Valid URL
const cityPattern = /^[A-Za-z\s]+$/; // Only alphabets and spaces

// Geo Schema
const geoSchema = new mongoose.Schema({
  lat: {
    type: String,
    required: true,
  },
  lng: {
    type: String,
    required: true,
  },
});

// Address Schema
const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  suite: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    match: [cityPattern, "City must contain only alphabets and spaces"],
  },
  zipcode: {
    type: String,
    required: true,
    match: [zipCodePattern, "Invalid Zip Code format (12345-1234)"],
  },
  geo: {
    type: geoSchema,
    required: true,
  },
});

// Company Schema
const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  catchPhrase: {
    type: String,
    required: true,
  },
  bs: {
    type: String,
    required: true,
  },
});

// User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, "Invalid email format"],
  },
  address: {
    type: addressSchema,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    match: [phonePattern, "Invalid Phone format (1-123-123-1234)"],
  },
  website: {
    type: String,
    required: true,
    match: [urlPattern, "Invalid website URL"],
  },
  company: {
    type: companySchema,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;