const Admin = require('../models/admin');
const Assignment = require('../models/assignment');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const admin = await Admin.create({ name, email, password });
    res.status(201).json({ message: 'Admin registered successfully.', admin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const viewAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ admin: req.user.id }).populate('userId');
    res.status(200).json(assignments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAdmins = async (req ,res) => {


  try {


    const admins = await Admin.find(); // Or another method to fetch admins
    res.json(admins)
} catch (err) {
    res.status(500).json({ message: 'Error fetching admins' });
}
}
const updateAssignmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const assignment = await Assignment.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json({ message: `Assignment ${status} successfully.`, assignment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerAdmin, loginAdmin, viewAssignments, updateAssignmentStatus ,getAdmins};
