import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import authRoutes from './routes/auth.js'
import analysisRoutes from './routes/analysis.js'

dotenv.config();
const app = express();
// const __dirname = path.resolve();


app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));
// app.use(express.static(path.join(__dirname + "/public")));
app.use(cors());


const PORT = process.env.PORT || 5000
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

//define endpoint for all the routes in authRoutes.js and analysisRoutes.js
app.use('/user', authRoutes)
app.use('/analysis', analysisRoutes)

