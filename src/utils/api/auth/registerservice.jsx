const connectMongo = require("../../database/database");
const User = require("../../database/schema/user");
const bcrypt = require("bcrypt");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, password } = req.body;

      // Validate input
      if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required." });
      }

      await connectMongo();

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ error: "Email already registered." });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Save the user to MongoDB
      const user = await User.create({ name, email, password: hashedPassword });

      return res.status(201).json({
        message: "User registered successfully.",
        user: { id: user._id, name: user.name, email: user.email },
      });
    } catch (err) {
      return res.status(500).json({ error: "Internal server error." });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed." });
  }
}
