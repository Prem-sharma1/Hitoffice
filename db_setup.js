const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");

function loadEnv() {
  const envPath = path.resolve(__dirname, "./.env.local");
  if (!fs.existsSync(envPath)) {
    console.error("No .env.local file found. Please create one.");
    process.exit(1);
  }
  const content = fs.readFileSync(envPath, "utf-8");
  content.split("\n").forEach((line) => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || "";
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.substring(1, value.length - 1);
      }
      process.env[key] = value;
    }
  });
}

async function run() {
  loadEnv();

  console.log("Connecting to database using credentials in .env.local...");
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST || "localhost",
    port: parseInt(process.env.MYSQL_PORT || "3306", 10),
    database: process.env.MYSQL_DATABASE || "hitoffice_db",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
  });

  console.log("Connected successfully!");

  // Step 1: Fix id column to have auto_increment
  try {
    console.log("Altering 'id' column to include AUTO_INCREMENT...");
    await connection.query("ALTER TABLE demo_requests MODIFY id INT AUTO_INCREMENT;");
    console.log("✓ Success: 'id' column is now AUTO_INCREMENT.");
  } catch (err) {
    console.error("Error altering 'id' column:", err.message);
  }

  // Step 2: Fix preferred_date column to be VARCHAR(255)
  try {
    console.log("Altering 'preferred_date' column to VARCHAR(255)...");
    await connection.query("ALTER TABLE demo_requests MODIFY preferred_date VARCHAR(255) NOT NULL;");
    console.log("✓ Success: 'preferred_date' column is now VARCHAR(255).");
  } catch (err) {
    console.error("Error altering 'preferred_date' column:", err.message);
  }

  await connection.end();
  console.log("Migration completed.");
}

run().catch((err) => {
  console.error("Migration failed:", err);
});
