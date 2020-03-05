const data = require('./food_data.json');
const db = require('./index');

let seedDatabase = () => {
};

let parseData = (data) => {
  let foods = data.report.foods;
  
  console.log(foods);
  for (let i = 0; i < foods.length; i++) {
    let food = {};
    food.id = i;
    food.ndbno = foods[i].ndbno;
    food.name = foods[i].name;
    food.weight = foods[i].weight;
    food.measure = foods[i].measure;

    db.query(`INSERT INTO table_name (column1, column2, column3, ...)
    VALUES (value1, value2, value3, ...);`)
  }
}

parseData(data);
seedDatabase();