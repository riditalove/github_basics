let variable = document.getElementById("count").innerText;
console.log(variable);

const titleElement = document.getElementById("cout");

console.log(titleElement);

titleElement.innerHTML = "Counter App";

function decreaseCount() {
  alert("Button Clicked");
}

document.getElementById("increement").addEventListener("click", function () {
  variable++;
  document.getElementById("count").innerText = variable;
  console.log(variable);
  if(variable >=0)
  {
        document.getElementById("count").style.color = "black";
  }
});

const decreementButton = document.getElementById("decreement");

document
  .getElementById("decreement")
  .addEventListener("click", function () {
    variable--;
    document.getElementById("count").innerText = variable;
    console.log(variable);
    if(variable < 0)
    {
        document.getElementById("count").style.color = "red";
        variable = 0;
        document.getElementById("count").innerText = variable;
    }
  });
