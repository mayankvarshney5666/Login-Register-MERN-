const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const apiRouter = require('./routes/api');

// const corsOptions = {
//     origin: 'http://localhost:3000'
// }

// app.use(cors(corsOptions));
app.use(cors());


mongoose.connect('mongodb://127.0.0.1:27017/crms', {
    // useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Unable to Connect due to ', err));

app.use(express.json());
app.use('/api', apiRouter);
app.get('/', (req, res) => {
    res.send("Hello, I'm a Server")
})

app.listen(5000, () => {
    console.log(`Server listening on port http://localhost:5000`);
});