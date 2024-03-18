var express = require('express');
var dotenv = require('dotenv');
var mongoose = require('mongoose');
var cors = require('cors');
var cookieParser = require('cookie-parser');

const authRoute = require('./routes/auth');
const courseRoute = require('./routes/course');
const chapterRoute = require('./routes/chapter');
const lessonRoute = require('./routes/lesson');
const categoryRoute = require('./routes/category');



dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: true,
    credentials: true
}

// DB connect
mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB connect successful.');
    } catch (err) {
        console.log('MongoDB connect fail');
    }
};

// for testing
app.get("/", (req, res) => {
    res.send("api is working")
})

/// middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/course', courseRoute)
app.use('/api/v1/chapter', chapterRoute)
app.use('/api/v1/lesson', lessonRoute)




app.listen(port, () => {
    connect()
    console.log('server listening on port ', port)
})