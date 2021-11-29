let animale ={
    specie: "mucca",
    razza: "chianina",
    zampe: "4",
    fullName : function() {
        return this.specie + " " + this.razza+ " "+ this.zampe;
      }
}
let animale2 ={
    specie: "cane",
    razza: "bassotto",
    zampe: "4",
    fullName : function() {
        return this.specie + " " + this.razza+ " "+ this.zampe;
      }
}
let animale3 ={
    specie: "gallina",
    razza: "andalusa",
    zampe: "2",
    fullName : function() {
        return this.specie + " " + this.razza+ " "+ this.zampe;
      }
}

function tasto1(){
    document.getElementById("testo").innerHTML = animale.fullName()
}
function tasto2(){
    document.getElementById("testo").innerHTML = animale2.fullName()
}
function tasto3(){
    document.getElementById("testo").innerHTML = animale3["fullName()"]
}