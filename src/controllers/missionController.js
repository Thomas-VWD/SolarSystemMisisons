const missionModel = require("../models/missionModel");

const getMissions = async (req, res) => {
  try {
    const missions = await missionModel.getMissions();
    res.status(200).json(missions);
  } catch (error) {
    console.error("Erreur lors de la récupération des missions :", error);
    res.status(500).send("Erreur lors de la récupération des missions");
  }
};

const getMissionsById = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const mission = await missionModel.getMissionsById(id);
    if (mission) {
      res.status(200).json(mission);
    } else {
      res.status(404).send("Mission non trouvée");
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de la mission :", error);
    res.status(500).send("Erreur lors de la récupération de la mission");
  }
};

const postMission = async (req, res) => {
  const { titre, link, title, article } = req.body;

  try {
    const result = await missionModel.postMission({
      titre,
      link,
      title,
      article,
    });
    res
      .location(`/api/missions/${result.insertId}`)
      .status(201)
      .send("Mission ajoutée avec succès");
  } catch (error) {
    console.error("Erreur lors de l'ajout de la mission :", error);
    res.status(500).send("Erreur lors de l'ajout de la mission");
  }
};

const updateMission = async (req, res) => {
  const id = parseInt(req.params.id);
  const { titre, link, title, article } = req.body;

  try {
    const result = await missionModel.updateMission({
      id,
      titre,
      link,
      title,
      article,
    });
    if (result.affectedRows === 0) {
      res.status(404).send("Mission non trouvée");
    } else {
      res.status(204).send("Mission mise à jour avec succès");
    }
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la mission :", error);
    res.status(500).send("Erreur lors de la mise à jour de la mission");
  }
};

const deleteMission = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const result = await missionModel.deleteMission(id);
    if (result.affectedRows === 0) {
      res.status(404).send("Mission non trouvée");
    } else {
      res.status(204).send("Mission supprimée avec succès");
    }
  } catch (error) {
    console.error("Erreur lors de la suppression de la mission :", error);
    res.status(500).send("Erreur lors de la suppression de la mission");
  }
};

module.exports = {
  getMissions,
  getMissionsById,
  postMission,
  updateMission,
  deleteMission,
};
