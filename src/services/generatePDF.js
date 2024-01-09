const fs = require("fs");
const PDFDocument = require("pdfkit");
const missionController = require("../controllers/missionController");

const generatePDF = async ({ filename = "output.pdf" }) => {
  const doc = new PDFDocument();
  const stream = fs.createWriteStream(filename);
  doc.pipe(stream);

  try {
    const missions = await missionController.getMissions();
    console.log(missions);
    missions.forEach((mission, id) => {
      if (id !== 1) {
        doc.addPage();
      }

      doc
        .fontSize(24)
        .text(mission.titre, { align: "center", underline: true });

      const imageWidth = 450;
      const imageHeight = 550;
      const imageX = (doc.page.width - imageWidth) * 0.5;
      const imageY = 120;

      doc.image(mission.link, imageX, imageY, {
        fit: [imageWidth, imageHeight],
        align: "center",
      });

      doc
        .text(mission.title, 100, 400)
        .font("Times-Roman", 13)
        .moveDown()
        .text(mission.article, {
          width: 412,
          align: "justify",
          indent: 30,
          columns: 2,
          height: 300,
          ellipsis: true,
        });
    });

    doc.end();
    console.log("PDF généré avec succès !");
  } catch (error) {
    console.error("Erreur lors de la récupération des missions :", error);
    throw error;
  }
};

module.exports = generatePDF;
