function imageArteaga() {
    var image = document.getElementById("myImage");
      if (image.src.match("assets/hint_cover.jpeg")) {
        image.src = "assets/hint_arteaga.jpeg";
    }
      else
    {
        image.src = "assets/hint_cover.jpeg";
    }
};
function imageLinares() {
    var image = document.getElementById("myImage");
      if (image.src.match("assets/hint_cover.jpeg")) {
        image.src = "assets/hint_linares.jpeg";
    }
      else
    {
        image.src = "assets/hint_cover.jpeg";
    }
};
function imageNuevoLeon() {
    var image = document.getElementById("myImage");
      if (image.src.match("assets/hint_cover.jpeg")) {
        image.src = "assets/hint_nuevo_leon.jpeg";
    }
      else
    {
        image.src = "assets/hint_cover.jpeg";
    }
};
function imageVilla() {
    var image = document.getElementById("myImage");
      if (image.src.match("assets/hint_cover.jpeg")) {
        image.src = "assets/hint_villa.jpeg";
    }
      else
    {
        image.src = "assets/hint_cover.jpeg";
    }
};
function submit(){
  var score= 0;
  var right1=document.getElementById('correct1');
  var right2=document.getElementById('correct2');
  var right3=document.getElementById('correct3');
  var right4=document.getElementById('correct4');
  var comment;
    if (right1.checked) {
      score=score+1;
    }
    if (right2.checked) {
      score=score+1;
    }
    if (right3.checked) {
      score=score+1;
    }
    if (right4.checked) {
      score=score+1;
    }
    if (score==0) {
      comment="It's okay, read the information above and take the quiz again."
    }
    if (score==1) {
      comment="It can only get better from this."
    }
    if (score==2) {
      comment="You start to get the handle of things."
    }
    if (score==3) {
      comment="You almost got it."
    }
    if (score==4) {
      comment="Congratulations, you were surely paying attention."
    }
  alert("Your score is: "+score+"/4 "+comment)
};
