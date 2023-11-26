function changeText() {
    var today = new Date();
    console.log("you need to click the button at midnight")
    console.log(today.getMinutes())
    console.log(today.getMinutes() % 2)
    console.log(today.getHours())
    var theRealBool = today.getHours() == 0 && today.getMinutes() < 10
    var testBool = today.getMinutes() % 2 == 0
    if (testBool) {
        document.getElementById("greeting").innerHTML = "Super secret message";
    }
    else {
        document.getElementById("greeting").innerHTML = "Hello, World!"
    }
  }