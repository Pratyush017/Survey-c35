var form,database;
var ref;

function setup(){
  database = firebase.database();
  //console.log(database);
  var canvas = createCanvas(displayWidth - 20, displayHeight-30);
  ref = database.ref('Details');
  form = new Form();  
  

}
function draw(){
  background("Red");

  form.display();
 
}