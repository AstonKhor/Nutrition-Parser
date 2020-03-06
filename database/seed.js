const data = require('./food_data.json');
const { db } = require('./index');
let queries = [];

let parseData = (data) => {
  let foods = data.report.foods;
  
  for (let i = 0; i < foods.length; i++) {
    let food = {};
    food.id = i;
    food.ndbno = foods[i].ndbno;
    food.name = foods[i].name;
    food.weight = foods[i].weight;
    food.measure = foods[i].measure;

    queries.push(new Promise((resolve, reject) => {
      db.query(`INSERT INTO Foods (id, ndbno, food_name, food_weight, measure) VALUES (${i}, ${food.ndbno}, "${food.name}", ${food.weight}, "${food.measure}");`, (err, result) => {
        if (err) throw err;
  
        let queryStr = `INSERT INTO Nutrients (id, nutrient_name, unit, nutrient_value, gm, food_id) VALUES `
        for (let j = 0; j < foods[i].nutrients.length; j++) {
          let nutrient = foods[i].nutrients[j];
          nutrient.value = nutrient.value === '--' ? null : nutrient.value;
          nutrient.gm = nutrient.gm === '--' ? null : nutrient.gm;
          queryStr = queryStr.concat(`(${nutrient.nutrient_id}, "${nutrient.nutrient}", "${nutrient.unit}", ${nutrient.value}, ${nutrient.gm}, ${i}),`)
        }

        queries.push(new Promise((resolve, reject) => {
          db.query(queryStr.slice(0,queryStr.length - 1), (err, result) => {
            if (err) throw err;
            resolve();
          });
        }))
        resolve();
      });
    }))
  }
}

parseData(data);
Promise.all(queries)
  .then(() => {
    console.log('ending all');
    db.end();
  })