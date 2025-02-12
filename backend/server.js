import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import passport from 'passport';
import session from 'express-session';

import "./passport/github.auth.js";
import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import authRoutes from "./routes/auth.route.js";

import connectMongoDB from './db/connectMongoDB.js';

dotenv.config();

const app = express();

// Configure CORS to allow frontend from localhost:3000
app.use(cors({
  origin: "http://localhost:3000",  // Update this with your frontend URL
  credentials: true,               // Allows sending cookies with requests
}));

// Session and Passport.js setup
app.use(session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,  // Set to true in production with HTTPS
    httpOnly: true,
    sameSite: 'lax',  // Adjust as needed
  },
}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(5000, () => {
    console.log("Server started on http://localhost:5000");
    connectMongoDB();
});
