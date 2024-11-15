const User = require('../models/user');
const Assignment = require('../models/assignment');
const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: 'User registered successfully.', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const uploadAssignment = async (req, res) => {
  try {
    const { task, adminId } = req.body;
    const assignment = await Assignment.create({
      userId: req.user.id,
      task,
      admin: adminId,
    });
    res.status(201).json({ message: 'Assignment uploaded successfully.', assignment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser, uploadAssignment };
