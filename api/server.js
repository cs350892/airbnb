const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json());
app.use(cors());

const users = [];

app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.post('/register', async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all fields'
    });
  }

  if (users.find(user => user.email === email)) {
    return res.status(400).json({
      success: false,
      message: 'Email already registered'
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: Math.random().toString(36).substr(2, 9),
    fullName,
    email,
    password: hashedPassword,
    createdAt: new Date().toISOString()
  };

  users.push(user);

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    user: { id: user.id, fullName, email, createdAt: user.createdAt }
  });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email or password'
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email or password'
    });
  }

  res.json({
    success: true,
    message: 'Login successful',
    user: { id: user.id, fullName: user.fullName, email }
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
