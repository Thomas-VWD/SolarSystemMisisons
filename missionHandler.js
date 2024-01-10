const database = require("./database");

const getMissions = (req, res) => {
  database
    .query("SELECT * FROM missions")
    .then(([missions]) => {
      res.json(missions);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getMissionsById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("SELECT * FROM missions where id = ?", [id])
    .then(([missions]) => {
      if (missions[0] != null) {
        res.json(missions[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};
const postMission = (req, res) => {
  const { titre, link, title, article } = req.body;

  database
    .query(
      "INSERT INTO missions(titre, link, title, article) VALUES (?, ?, ?, ?)",
      [titre, link, title, article]
    )
    .then(([result]) => {
      res.location(`/api/missions/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the user");
    });
};

const updateMission = (req, res) => {
  const id = parseInt(req.params.id);
  const { titre, link, title, article } = req.body;

  database
    .query(
      "UPDATE missions SET titre = ?, link = ?, title = ?, article = ? WHERE id = ?",
      [titre, link, title, article, id]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the user");
    });
};

const deleteMission = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("DELETE FROM missions WHERE id = ?", [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting the users");
    });
};

module.exports = {
  getMissions,
  getMissionsById,
  postMission,
  updateMission,
  deleteMission,
};
