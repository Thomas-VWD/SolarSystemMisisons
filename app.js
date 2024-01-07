require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

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

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened", err);
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
