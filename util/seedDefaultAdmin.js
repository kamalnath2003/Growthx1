const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('../models/admin'); // Adjust the path to your Admin model

async function seedDefaultAdmin() {
    try {
        // Check for an admin with the specific email
        const existingAdmin = await Admin.findOne({ email: 'admin@gmail.com' });
        
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash('admin', 10); // Hash the default password
            const admin = new Admin({
                name: 'admin',
                email: 'admin@gmail.com',
                role: 'admin',
                password: hashedPassword,
            });
            await admin.save();
            console.log('Default admin created: username = admin, password = admin');
        } else {
            console.log('Default admin already exists.');
        }
    } catch (err) {
        console.error('Error seeding default admin:', err);
    }
}

module.exports = seedDefaultAdmin;
