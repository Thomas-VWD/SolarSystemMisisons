const express = require("express");
const app = express();
const port = process.env.APP_PORT || 3000;
const missionController = require("./src/controllers/missionController");
const pdfView = require("./src/views/pdfView");
const pdfRoute = require("./src/controllers/pdfRoute");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("The next exploration missions of the solar system.");
});

app.get("/api/missions", missionController.getMissions);
app.get("/api/mission/:id", missionController.getMissionsById);
app.post("/api/mission", missionController.postMission);
app.put("/api/mission/:id", missionController.updateMission);
app.delete("/api/mission/:id", missionController.deleteMission);

app.get("/api/generatePDF", pdfRoute);
// ... (le reste du code)

app.listen(port, (err) => {
  if (err) {
    console.error("Server start failed:", err);
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
