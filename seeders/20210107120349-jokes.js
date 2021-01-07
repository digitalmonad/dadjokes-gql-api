"use strict";
const fs = require("fs");
const path = require("path");

var jsonPath = path.join(__dirname, "..", "jokes.json");
const rawData = fs.readFileSync(jsonPath);
const jokes = JSON.parse(rawData);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Jokes",
      jokes.map((joke) => ({
        text: joke.text,
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
