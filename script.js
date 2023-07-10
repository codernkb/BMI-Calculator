function nkb() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    
    var bmi = weight / (height /100 * height/100);
  
    document.getElementById("result").innerHTML = "Your BMI : " + Math.round(bmi);
  
    if (bmi < 18.5) {
      document.body.style.background = " rgb(70, 67, 61) ";
      document.getElementById("message").innerHTML = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      document.body.style.background = " green ";
      document.getElementById("message").innerHTML = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      document.body.style.background = " rgb(233, 205, 47) ";
      document.getElementById("message").innerHTML = "Overweight";
    } else {
      document.body.style.background = " red ";
      document.getElementById("message").innerHTML = "Obese";
    }
  }