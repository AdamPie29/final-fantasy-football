const knex = require('knex')(require('../knexfile'));
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {uuid} = require('uuidv4');

// Creates a new user
exports.register = async(req, res) => {
    const {
        user_name,
        user_email,
        user_password
    } = req.body;

    if (!user_name || !user_email || !user_password) {
        return res.status(400).send("Please complete all required fields.")
    }

    const hashPassword = bcrypt.hashSync(user_password);

    // Create the new user 
    const newUser = {
        id: uuid(),
        user_name,
        user_email,
        user_password: hashPassword,
    }

    // Insert it into our database
    try {
        await knex('users').insert(newUser);
        res.status(201).send("Congratulations on signing up, Coach!")
    } catch (error) {
        res.status(400).send("Failure to sign up.")
    }
};

// Log in a user that exists
exports.login = async (req, res) => {

    const { user_email, user_password } = req.body;

    if (!user_email || !user_password) {
        return res.status(400).send("Please complete the required fields");
    };

    // Find the user
    const user = await knex('users').where({ user_email: user_email }).first()
    if (!user) {
        return res.status(400).send("Invalid email.");
    }

    // Validate the password
    const isPasswordCorrect = bcrypt.compareSync(user_password, user.user_password);
    if (!isPasswordCorrect) {
        return res.status(400).send("Invalid password.");
    }

    // Generate a token
    const token = jwt.sign(
        { id: user.id, email: user_email },
        process.env.JWT_KEY,
        { expiresIn: "24h" }
    );

    res.json({ token })
};

exports.approve = async (req, res) => {
    const user = await knex('users').where({ id: req.user.id }).first();
    delete user.user_password;
    res.json(user);
};
