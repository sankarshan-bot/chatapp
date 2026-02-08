// generateSecret.js
const crypto = require("crypto");

// Generate 32-byte random string (base64)
const secret = crypto.randomBytes(32).toString("base64");

console.log("Your new JWT secret is:");
console.log(secret);
