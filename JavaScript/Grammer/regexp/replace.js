function replace_normal(){
  var text= "cat, bat, sat, fat";
  result = text.replace(/(.at)/g, "word ($1)");
  console.log(result);
}

function regexp_match() {
  var text = "cat, bat, sat, fat"; 
  var pattern = /.at/;

  var matches = text.match(pattern);        
  alert(matches.index);        //0
  alert(matches[0]);           //"cat"
  alert(pattern.lastIndex);    //0  
}

function regexp_search() {
  var pos = text.search(/at/);
  alert(pos);   //1
}

function regexp_replace() {
  var result = text.replace("at", "ond");
  alert(result);    //"cond, bat, sat, fat"

  result = text.replace(/at/g, "ond");
  alert(result);    //"cond, bond, sond, fond"

  result = text.replace(/(.at)/g, "word ($1)");
  alert(result);    //word (cat), word (bat), word (sat), word (fat)
}

function replace_function() {
   function htmlEscape(text){
       return text.replace(/[<>"&]/g, function(match, pos, originalText){
           switch(match){
               case "<":
                   return "&lt;";
               case ">":
                   return "&gt;";
               case "&":
                   return "&amp;";
               case "\"":
                   return "&quot;";
           }             
       });
   }
   alert(htmlEscape("<p class=\"greeting\">Hello world!</p>"));
}
replace_function();

function reg_split() {
  var colorText = "red,blue,green,yellow";
  var colors1 = colorText.split(",");      //["red", "blue", "green", "yellow"]
  var colors2 = colorText.split(",", 2);   //["red", "blue"]
  var colors3 = colorText.split(/[^\,]+/); //["", ",", ",", ",", ""]
}
