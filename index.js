const express = require("express");
const app = express();
app.use(express.json());

// Simple "printer check" endpoint
app.get("/printer-status", (req, res) => {
  // Simulate printer is working
  res.json({ success: true, printer: "OK", message: "Printer is reachable (simulated)" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Render backend running on port ${PORT}`));
