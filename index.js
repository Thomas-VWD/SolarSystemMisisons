const fs = require("fs");
const PDFDocument = require("pdfkit");

const doc = new PDFDocument();

const titre = "Saturne";
const image_path = "./assets/Saturn.png";
const article =
  "La mission Dragonfly est sélectionnée en juin 2019 pour devenir la quatrième mission du programme New Frontiers. Son objectif est l'étude de Titan, le plus gros satellite naturel de Saturne. La mission exploite la présence d'une atmosphère dense et d'une gravité relativement peu élevée : elle met en œuvre un aérobot de type aérogire, qui effectuera de multiples vols de courte durée pour étudier la basse atmosphère et la surface de Titan. Ce drone hélicoptère de 450 kilogrammes est capable d'effectuer de courts vols en pilotage automatique de quelques dizaines de kilomètres avant de se poser pour recharger ses batteries, à l'aide d'un générateur thermoélectrique à radioisotope embarqué. Durant la phase de vol, le drone analyse la composition de l'atmosphère et établit le profil vertical de celle-ci. Lorsqu'il est au sol, il étudie la composition des matériaux organiques et des glaces de la surface, en utilisant un spectromètre de masse et un spectromètre gamma à neutrons actifs. Le drone dispose également d'instruments pour étudier la météorologie et effectuer des études sismiques. Sur le plan technique, il s'agit d'une mission particulièrement audacieuse car c'est le premier engin de ce type utilisé pour explorer un autre corps du système solaire. Il est prévu que Dragonfly décolle en 2026 et se pose sur Titan en 2034.";

const stream = fs.createWriteStream("output.pdf");
doc.pipe(stream);

doc.fontSize(24).text(titre, { align: "center", underline: true });

// Calculer la position pour centrer l'image
const imageWidth = 450;
const imageHeight = 550;
const imageX = (doc.page.width - imageWidth) * 0.5;
const imageY = 120;

doc.image(image_path, imageX, imageY, {
  fit: [imageWidth, imageHeight],
  align: "center",
});

doc
  .text("Mission Dragonfly (lancement 2026)", 100, 400)
  .font("Times-Roman", 13)
  .moveDown()
  .text(article, {
    width: 412,
    align: "justify",
    indent: 30,
    columns: 2,
    height: 300,
    ellipsis: true,
  });

doc.end();

console.log("PDF généré avec succès !");
