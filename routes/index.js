var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    color: "#FFFFFF",
    textColor: "#000000"
  });
});

/*Post user choices and re-render the page */
router.post('/', function(req, res){
  res.render('index', {
    color: req.body.colorPicker,
    textColor: req.body.textColorPicker
  })
});

/*Post random values and render original pages*/
router.post('/random', function(req, res){
  res.render('index', {
    color: generateRandomHexCode(),
    textColor: generateRandomHexCode()
  })
});

function generateRandomHexCode() {
  let hexCode = "#";
  while ( hexCode.length < 7 ) {
    hexCode += (Math.round(Math.random() * 15)).toString(16)
  }
  return hexCode
}

router.post('/random', function(req, res){
  res.render('index', {
    color: generateRandomHexCode(),
    textColor: generateRandomHexCode()
  })
});


module.exports = router;
