# SolarSystemMisisons

# Mini Projet - Génération de PDF avec Node.js

L'objectif est de créer un document PDF basé sur des données structurées, en combinant mes deux passions : l'astronomie et l'apprentissage de nouvelles technologies dans le développement web.

## Structure du Projet

- **index.js**: Contient les données structurées et appelle la fonction de génération de PDF.
- **generatePDF.js**: Module qui génère le PDF à partir des données fournies.

## Instructions d'Utilisation

1. Assurez-vous d'avoir Node.js installé sur votre machine.
2. Clonez ce dépôt.
3. Exécutez `npm install` pour installer les dépendances.
4. Exécutez le projet avec `node index.js` pour générer le PDF.

## Données

Les données sont définies dans le fichier `index.js`. Chaque entrée représente une section du PDF avec un titre, une image, un sous-titre et un article associé.

## Personnalisation

- Modifiez les données dans `index.js` pour ajuster le contenu du PDF.
- Personnalisez les styles, la mise en page, etc., dans le fichier `generatePDF.js` selon vos besoins.

## Exécution

Après avoir effectué les étapes d'installation, exécutez le projet avec `node index.js` et vérifiez la console pour le message "PDF généré avec succès !". Le fichier PDF résultant sera disponible sous le nom `output.pdf`.

N'hésitez pas à explorer, à personnaliser et à étendre ce projet selon vos besoins et vos projets futurs!
