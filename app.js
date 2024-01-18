require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("node:path");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://solar-system-misisons-app.vercel.app",
  })
);

const port = process.env.APP_PORT || 3000;

app.get("/", (req, res) => {
  res.send("The next exploration missions of the solar system.");
});

const missionHandler = require("./missionHandler");

app.get("/api/missions", missionHandler.getMissions);
app.get("/api/mission/:id", missionHandler.getMissionsById);
app.post("/api/mission", missionHandler.postMission);
app.put("/api/mission/:id", missionHandler.updateMission);
app.delete("/api/mission/:id", missionHandler.deleteMission);

const generatePDF = require("./generatePDF");

app.get("/api/generatePDF", (req, res) => {
  try {
    generatePDF({ filename: "output.pdf" });

    const filePath = path.join(__dirname, "output.pdf");
    res.json({
      success: true,
      message: "PDF generated successfully",
      filePath,
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).json({ success: false, message: "Error generating PDF" });
  }
});

app.get("/api/viewPDF", (req, res) => {
  const filePath = path.join(__dirname, "output.pdf");
  res.sendFile(filePath);
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened", err);
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
