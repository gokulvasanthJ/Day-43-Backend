require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require("./routes/auth");
const passwordResetRoutes = require("./routes/passwordReset");

// database connection

connection();


// middleware

app.use(express.json());
app.use(cors());

// routes

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);

// adding port

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Listening on port ${port}`));
