var chico = ["Downtown", "Bulldog Taqueria", "Lower Bidwell", "Upper Bidwell","O'Connell"];
var current;
function shuffleGallery()
{
  var randI;
  do {
    randI = Math.floor(Math.random() * chico.length);
  } while (randI == current);
  current = randI;
  console.log(chico[current]);
}
