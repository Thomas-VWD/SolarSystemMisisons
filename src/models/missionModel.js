const database = require("../../database");

const getMissions = () => {
  return database.query("SELECT * FROM missions");
};

const getMissionsById = (id) => {
  return database.query("SELECT * FROM missions WHERE id = ?", [id]);
};

const postMission = ({ titre, link, title, article }) => {
  return database.query(
    "INSERT INTO missions(titre, link, title, article) VALUES (?, ?, ?, ?)",
    [titre, link, title, article]
  );
};

const updateMission = ({ id, titre, link, title, article }) => {
  return database.query(
    "UPDATE missions SET titre = ?, link = ?, title = ?, article = ? WHERE id = ?",
    [titre, link, title, article, id]
  );
};

const deleteMission = (id) => {
  return database.query("DELETE FROM missions WHERE id = ?", [id]);
};

module.exports = {
  getMissions,
  getMissionsById,
  postMission,
  updateMission,
  deleteMission,
};
