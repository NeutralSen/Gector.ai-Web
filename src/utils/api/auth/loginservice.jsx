// pages/api/login.js
const connectMongo = require("../../utils/db");
const User = require("../../models/User");
const bcrypt = require("bcrypt");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;

      // Validate input
      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
      }

      await connectMongo();

      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: "Invalid email or password." });
      }

      // Check password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid email or password." });
      }

      // Optionally: Create a session or token (e.g., JWT or cookies)
      return res.status(200).json({
        message: "Login successful.",
        user: { id: user._id, name: user.name, email: user.email },
      });
    } catch (err) {
      return res.status(500).json({ error: "Internal server error." });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed." });
  }
}
