let { db } = require('../database/index');

module.exports.queryFoods = (req, res) => {
  if (Object.keys(req.query).length === 0) { 
    res.end(JSON.stringify([])); 
  }
  let queryStr = 'SELECT * FROM Foods INNER JOIN Nutrients ON Foods.id = Nutrients.food_id;';
  //Smaller Query
  //let queryStr = 'SELECT id,food_name,food_weight,measure FROM Foods INNER JOIN Nutrients ON Foods.id = Nutrients.food_id;';
  
  // for (let query in req.query) {
    
    // }
  db.query(queryStr, (err, result) => {
    if (err) throw err;
    res.end(JSON.stringify(result))
  })
}

module.exports.getNutrients = (req, res) => {
  console.log('getting Nuts');
  let queryStr = 'SELECT DISTINCT nutrient_name FROM Nutrients;'
  db.query(queryStr, (err, result) => {
    if (err) throw err;
    res.end(JSON.stringify(result))
  })
}