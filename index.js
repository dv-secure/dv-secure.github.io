const express = require('express');
const path = require('path');
// const exphbs = require('express-handlebars');


const app = express();


// Set static folder
app.use(express.static(path.join(__dirname)));

// Members API Routes
// app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));