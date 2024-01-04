const fs = require("fs");
const PDFDocument = require("pdfkit");

const generatePDF = ({ filename = "output.pdf", data = [] }) => {
  const doc = new PDFDocument();

  const stream = fs.createWriteStream(filename);
  doc.pipe(stream);

  data.forEach((datum, index) => {
    //console.log("datum", datum);
    if (index !== 0) {
      doc.addPage();
    }

    doc.fontSize(24).text(datum.titre, { align: "center", underline: true });

    // Calculer la position pour centrer l'image
    const imageWidth = 450;
    const imageHeight = 550;
    const imageX = (doc.page.width - imageWidth) * 0.5;
    const imageY = 120;

    doc.image(datum.link, imageX, imageY, {
      fit: [imageWidth, imageHeight],
      align: "center",
    });

    doc
      .text(datum.title, 100, 400)
      .font("Times-Roman", 13)
      .moveDown()
      .text(datum.article, {
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
};

module.exports = generatePDF;
