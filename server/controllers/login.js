import db from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// One-time insertion of services with hashed passwords
const services = [
  { nom_service: "Chirurgie_cardiaque", password: "password1" },
  { nom_service: "Consultation_cardiaque", password: "password2" },
  { nom_service: "Radiologie", password: "password3" },
  { nom_service: "Laboratoire", password: "password4" }
];

const insertServices = async () => {
  for (const service of services) {
    const hashedPassword = await bcrypt.hash(service.password, 10);
    db.query(
      "INSERT INTO services (nom_service, password_hash) VALUES (?, ?)",
      [service.nom_service, hashedPassword],
      (err) => {
        if (err && err.code !== "ER_DUP_ENTRY") {
          // Ignore duplicates if services already exist
          console.error(err);
        } else {
          console.log(`${service.nom_service} inserted/exists`);
        }
      }
    );
  }
};



// ✅ LOGIN FUNCTION
export const login = (req, res) => {
  const q = "SELECT * FROM services WHERE nom_service = ?";

  db.query(q, [req.body.nom_service], async (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("Service not found");

    // Compare entered password with stored hash
    const isPwdCorrect = await bcrypt.compare(
      req.body.password,   // plain password from login form
      data[0].password_hash // hashed password from DB
    );

    if (!isPwdCorrect)
      return res.status(400).json("Wrong service name or password");

    // JWT token
    const token = jwt.sign(
      { id: data[0].id_service }, // Only include id
      "secret_key",
      { expiresIn: "1h" }
    );

    res.json({
      token,
      nom_service: data[0].nom_service,  // ✅ return service name
      id_service: data[0].id_service
    });
  });
};

export const logout = (req, res) => {
  // Since JWT is stateless, logout can be handled client-side
  res.json("Logged out");
};
