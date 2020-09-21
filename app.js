/* PROGRAM EXPLANATION 
1. User give a number in second unit. 
2. JS Function pull that number and convert it into hour / minute / second. 
3. display the result in HTML. 

The function : 
    Has to convert seconds into hour/minute/second: 
    1 minute = 60 seconds
    1 hours = 60 minutes = 3600 seconds
*/

// HTML SELECTOR
let convertion = document.querySelector(".convertion");
let convert = document.getElementById("convert");
let inputTime = document.getElementById("input-second");
let result = document.querySelector(".result");

//FUNCTION
function convertFunction() {
  //result.innerHTML = "";
  // Calculs Variable
  let secondToConvert = inputTime.value;
  let h = Math.floor(secondToConvert / 3600);
  let m = Math.floor((secondToConvert % 3600) / 60);
  let s = Math.floor((secondToConvert % 3600) % 60);

  /*console.log(h);
  console.log(h.length);
  console.log(
    ("0" + h).slice(-2) +
      " : " +
      ("0" + m).slice(-2) +
      " : " +
      ("0" + s).slice(-2)
  );*/

  if (h > 100) {
    result.innerHTML =
      h + " : " + ("0" + m).slice(-2) + " : " + ("0" + s).slice(-2);
  } else {
    result.innerHTML =
      ("0" + h).slice(-2) +
      " : " +
      ("0" + m).slice(-2) +
      " : " +
      ("0" + s).slice(-2);
  }
}

// Click Event
convert.addEventListener("click", convertFunction);

//Keydown Event
inputTime.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    e.preventDefault();
    convertFunction();
  }
});
