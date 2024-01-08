// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const patientRoutes = require('./routes/patientRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const observationRoutes = require('./routes/observationRoutes')
const app = express();
const port = 3000;

app.use(cors());

mongoose.connect('mongodb+srv://myusername:mypassword@cluster0.h2lxr0p.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

app.use('/api', patientRoutes);
app.use('/api', scheduleRoutes);
app.use('/api', observationRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
