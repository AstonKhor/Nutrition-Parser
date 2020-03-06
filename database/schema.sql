DROP DATABASE IF EXISTS FoodNutrients;

CREATE DATABASE FoodNutrients;

USE FoodNutrients;

CREATE TABLE Foods (
  id INTEGER PRIMARY KEY NOT NULL,
  ndbno INT NOT NULL,
  food_name VARCHAR(150) NOT NULL,
  food_weight DECIMAL NOT NULL,
  measure VARCHAR(64) NOT NULL
);

CREATE TABLE Nutrients (
  id INT NOT NULL,
  nutrient_name VARCHAR(64) NOT NULL,
  unit VARCHAR(10) NOT NULL,
  nutrient_value DECIMAL,
  gm DECIMAL,
  food_id INTEGER,
  FOREIGN KEY(food_id) REFERENCES Foods(id)
);
