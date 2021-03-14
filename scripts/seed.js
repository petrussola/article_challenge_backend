import sequelize from "../src/connectors/sequelize";
import models from "../src/models";

const { Region, Author } = models;

(async () => {
  await sequelize.sync({ force: true });

  Region.create({ code: "AU", name: "Australia" });
  Region.create({ code: "UK", name: "United Kingdom" });
  Region.create({ code: "US", name: "United States of America" });
  Author.create({ firstName: "Agatha", lastName: "Christie" });
  Author.create({ firstName: "John", lastName: "le Carré" });
  Author.create({ firstName: "J.K.", lastName: "Rowling" });
  Author.create({ firstName: "Amin", lastName: "Maalouf" });
})();
