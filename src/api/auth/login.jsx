const connectMongo = require("../../database/database");
const User = require("../../database/schema/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // Add this for JWT token

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

      // Create a JWT token (Add secret key to your .env)
      const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

      return res.status(200).json({
        message: "Login successful.",
        token, // Send token in the response
        user: { id: user._id, name: user.name, email: user.email },
      });
    } catch (err) {
      return res.status(500).json({ error: "Internal server error." });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed." });
  }
}
