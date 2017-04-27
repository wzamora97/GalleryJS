var chico = [
  {description:"Downtown", picture:"http://nmrdesign.com/wp-content/uploads/2013/09/04-6271-Chico-Park-Plaza-at-Christmas-960x540.jpg",from:"http://nmrdesign.com/projects/downtown-chico-park-plaza/"},
  {description:"Bulldog Taqueria", picture:"https://s3-media2.fl.yelpcdn.com/bphoto/1eRDuKb64tDvZrsDMMwXaw/ls.jpg", from:"https://www.yelp.ca/biz/bulldog-taqueria-chico?start=20"},
  {description:"Lower Bidwell", picture:"http://bidwellpark.org/wp-content/uploads/2014/04/BidwellPool.jpg", from:"http://bidwellpark.org/landing-page/bidwell-park-home/lower-park/"},
  {description:"Upper Bidwell", picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/BigChicoCreek_BidwellPark.jpg/300px-BigChicoCreek_BidwellPark.jpg", from:"https://en.wikipedia.org/wiki/Bidwell_Park"},
  {description:"O'Connell", picture:"http://www.csuchico.edu/maps/images/buildings-photos/buildings-oconnell.jpg", from:"http://www.csuchico.edu/maps/campus/o-connell.shtml"}
];
var current;
function shuffleGallery()
{
  var randI;
  do {
    randI = Math.floor(Math.random() * chico.length);
    document.getElementById("picture").src = chico[randI].picture;
    document.getElementById("caption").innerHTML = chico[randI].description;
    document.getElementById("source").innerHTML = "Image courtesy of:" + chico[randI].from;
  } while (randI == current);
  current = randI;
  console.log(chico[current]);
}
