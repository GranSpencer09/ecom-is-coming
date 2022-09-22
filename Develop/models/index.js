// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Painting.belongsTo(Category, {
  foreignKey: "id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "id",
});

// Products belongToMany Tags (through ProductTag)
Category.belongToMany(Tag, {
  through: { model: ProductTag },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  through: { model: ProductTag },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
