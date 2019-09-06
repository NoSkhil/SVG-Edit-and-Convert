var express = require('express');
var fs = require('fs');
var router = express.Router();
var svgexport = require('svgexport');
var store;
var request = require('request').defaults({ encoding: null });
var s3url = 'https://be1-useless-test.s3.amazonaws.com/Group1338.svg';


router.get('/test', function(req, res) {

var stream = request(s3url,function(err,data){
  if(err) console.log(err);
  string = data.body.toString();

  async function readWriteSync() {
    svg = string.replace('<tspan x="0" y="0">1471', '<tspan x="0" y="0">0420'); //change number here
    fs.writeFileSync('./tmp/store.svg',svg, 'utf-8');
      console.log('edit complete');
    }
  readWriteSync();
  svgexport.render({
            input: './tmp/store.svg',
            output:'./tmp/DOGE.png'},function(err,done){
              res.sendfile('./tmp/DOGE.png');
            });
})
});
module.exports = router;
