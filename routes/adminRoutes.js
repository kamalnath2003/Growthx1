const express = require('express');
const { registerAdmin, loginAdmin, viewAssignments, updateAssignmentStatus, getAdmins } = require('../controllers/adminController');
const authenticate = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/getadmins', getAdmins )
router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/assignments', authenticate, viewAssignments);
router.post('/assignments/:id/:status', authenticate, updateAssignmentStatus);


// GET /api/admins to fetch all admins

module.exports = router;