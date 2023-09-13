const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(express.json());  // Middleware to parse JSON requests

app.use('/api/todos', todoRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
