const oracledb = require('oracledb');

// Optional: only needed if Instant Client is not in PATH
// oracledb.initOracleClient({ libDir: 'C:\\oracle\\instantclient_21_9' });

async function createPool() {
  try {
    const pool = await oracledb.createPool({
      user: 'analyst',
      password: 'analyst',
      connectString: 'localhost:1521/xe',
      poolMin: 1,
      poolMax: 10,
      poolIncrement: 1
    });
    console.log("Oracle DB pool created");
    return pool;
  } catch (err) {
    console.error("Failed to create Oracle DB pool:", err);
  }
}

module.exports = createPool;
