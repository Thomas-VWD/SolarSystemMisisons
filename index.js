const generatePDF = require("./generatePDF");

const infos = [
  {
    titre: "Mars",
    link: "./assets/Mars.png",
    title: "Martian Moons Exploration",
    article:
      "Martian Moons Exploration (abrégé MMX) est une mission spatiale japonaise en cours de développement dont l'objectif principal est de ramener sur Terre un échantillon de sol de Phobos, un des deux satellites naturels de Mars. Au cours de la mission, la sonde spatiale doit effectuer une étude détaillée de Phobos et Déimos à la fois à distance et in situ (pour Phobos uniquement). La mission doit être lancée en 2024 et rapporter l'échantillon sur Terre vers 2029. MMX n'est pas la première mission à tenter d'effectuer une étude détaillée des lunes martiennes et de ramener un échantillon de celles-ci sur Terre, mais les engins qui l'ont précédée (les sondes spatiales russes Phobos et Phobos-Grunt) ont tous échoué. Le principal objectif scientifique de la mission est de déterminer si les lunes martiennes sont des astéroïdes capturés par Mars ou s'ils se sont formés par agrégation de matériaux éjectés par la planète à la suite d'un impact géant dans le cadre d'un processus analogue à celui ayant abouti à la formation de notre Lune. La réponse à cette question permettra d'affiner le scénario de formation des planètes du système solaire. Pour accomplir sa mission, MMX comprend un module d'atterrissage emportant un système de prélèvement d'échantillon du sol et un petit astromobile fourni par les agences spatiales française et allemande. La sonde spatiale, dont la masse au lancement approche les quatre tonnes, doit disposer d'une dizaine d'instruments dont plusieurs caméras, un lidar, un spectromètre gamma et un imageur hyperspectral fonctionnant en proche infrarouge. ",
  },
  {
    titre: "Jupiter",
    link: "./assets/Jupiter.png",
    title: "Europa Clipper",
    article:
      "Europa Clipper est une mission spatiale de la NASA en cours de développement, dont l'objectif est l'étude d'Europe, une des lunes de Jupiter. Europe constitue un objectif scientifique de premier plan depuis que les données fournies par la sonde Galileo à la fin des années 1990 ont permis de déterminer qu'il existait un océan d'eau liquide sous sa surface glacée, qui pourrait abriter des formes de vie. Mais la mission d'exploration, qui doit se dérouler dans une région de l'espace fortement irradiée par sa proximité avec Jupiter, est complexe et les projets d'exploration élaborés à la suite de cette découverte se heurtent longtemps à l'absence de moyens financiers suffisants. Le projet Europa Clipper est le quatrième proposé mais, contrairement à ses prédécesseurs, il reçoit l'appui du Congrès américain au milieu de la décennie 2010. Il prévoit le lancement d'une sonde spatiale de six tonnes emportant 350 kg d'instruments scientifiques, dont un radar permettant de sonder l'océan sous la glace. La sonde spatiale devra effectuer un transit d'environ 5,5 ans comprenant un recours à l'assistance gravitationnelle de Mars et de la Terre (technique MEGA, pour Mars-Earth Gravity Assist) avant de se placer en orbite autour de Jupiter. La partie scientifique de la mission comporte 45 survols d'Europe sur une période de 3,5 ans. Le coût du projet est évalué en 2018 à 3,1 milliards de dollars en ne prenant pas en compte le coût de lancement. Les études préliminaires sont lancées en 2015 et la NASA prend la décision de lancer le développement en février 2017. La date de lancement s'articule autour d'octobre 2024, pour une arrivée prévue le 11 avril 2030. Le lanceur choisi est le Falcon Heavy de SpaceX. ",
  },
  {
    titre: "Saturne",
    link: "./assets/Saturn.png",
    title: "Mission Dragonfly (lancement 2026)",
    article:
      "La mission Dragonfly est sélectionnée en juin 2019 pour devenir la quatrième mission du programme New Frontiers. Son objectif est l'étude de Titan, le plus gros satellite naturel de Saturne. La mission exploite la présence d'une atmosphère dense et d'une gravité relativement peu élevée : elle met en œuvre un aérobot de type aérogire, qui effectuera de multiples vols de courte durée pour étudier la basse atmosphère et la surface de Titan. Ce drone hélicoptère de 450 kilogrammes est capable d'effectuer de courts vols en pilotage automatique de quelques dizaines de kilomètres avant de se poser pour recharger ses batteries, à l'aide d'un générateur thermoélectrique à radioisotope embarqué. Durant la phase de vol, le drone analyse la composition de l'atmosphère et établit le profil vertical de celle-ci. Lorsqu'il est au sol, il étudie la composition des matériaux organiques et des glaces de la surface, en utilisant un spectromètre de masse et un spectromètre gamma à neutrons actifs. Le drone dispose également d'instruments pour étudier la météorologie et effectuer des études sismiques. Sur le plan technique, il s'agit d'une mission particulièrement audacieuse car c'est le premier engin de ce type utilisé pour explorer un autre corps du système solaire. Il est prévu que Dragonfly décolle en 2026 et se pose sur Titan en 2034.",
  },
];

generatePDF({
  data: infos,
});
