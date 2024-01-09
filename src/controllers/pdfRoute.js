// Renommez le fichier pdfController.js en pdfRoute.js
const generatePDF = require("../services/generatePDF");

const pdfRoute = async (req, res) => {
  try {
    // Appel du service de génération de PDF
    await generatePDF({ filename: "output.pdf" });

    // Envoyer la réponse au client
    res.status(200).send("PDF généré avec succès !");
  } catch (error) {
    console.error("Erreur lors de la génération du PDF :", error);
    res.status(500).send("Erreur lors de la génération du PDF");
  }
};

module.exports = pdfRoute;
