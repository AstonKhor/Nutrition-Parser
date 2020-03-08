let { db } = require('../database/index');

module.exports.queryFoods = (req, res) => {
  let queryKeys = Object.keys(req.query)
  if (queryKeys.length === 0) { 
    res.end(JSON.stringify([])); 
  } else {
    let queryStr = 'SELECT * FROM Foods F,';
    let nutTablesStr = '';
    let conditionalsStr = '';
    for (let i = 0; i < queryKeys.length; i++) {
      let query = req.query[queryKeys[i]].split(';');
      let operation;
      if (query[1] === 'less than') { operation = '<'}
      if (query[1] === 'greater than') { operation = '>'}
      if (query[1] === 'equal to') { operation = '='}
      nutTablesStr = nutTablesStr.concat(` Nutrients N${i+1},`)
      conditionalsStr = conditionalsStr.concat(` F.id = N${i+1}.food_id AND N${i+1}.nutrient_value ${operation} ${query[2]} AND N${i+1}.nutrient_name = "${query[0]}" AND `);
    }
    nutTablesStr = nutTablesStr.slice(0, nutTablesStr.length - 1);
    conditionalsStr = conditionalsStr.slice(0, conditionalsStr.length - 5);

    // SELECT * FROM Foods F, Nutrients N1, Nutrients N2 WHERE N1.food_id = F.id AND F.id = N2.food_id AND N1.nutrient_value > 100 AND N1.nutrient_name = "Energy" AND N2.nutrient_value < 4 AND N2.nutrient_name = "Fiber, total dietary";
    
    console.log('fullStr', `${queryStr}${nutTablesStr} WHERE${conditionalsStr};`);
    db.query(`${queryStr}${nutTablesStr} WHERE${conditionalsStr};`, (err, result) => {
      if (err) throw err;
      res.end(JSON.stringify(result))
    })
  }
}

module.exports.getNutrients = (req, res) => {
  let queryStr = 'SELECT DISTINCT nutrient_name FROM Nutrients;'
  db.query(queryStr, (err, result) => {
    if (err) throw err;
    res.end(JSON.stringify(result))
  })
}