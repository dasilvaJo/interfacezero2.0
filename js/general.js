function transitionIn() {
  document.getElementById("backgroundLeft").style["animation"] =
    "2s ease leftToRight both";
  document.getElementById("backgroundRight").style["animation"] =
    "2s ease rightToLeft both";
  document.getElementById("backgroundLeft2").style["animation"] =
    "2s ease leftToRight both";
  document.getElementById("backgroundRight2").style["animation"] =
    "2s ease rightToLeft both";
  document.getElementById("logo").style["animation"] =
    "2s ease leftToRight both";
  document.getElementById("fleche").style["animation"] =
    "2s ease rightToLeft both";
  document.getElementById("logo").style["animation-delay"] = "1s";
  document.getElementById("fleche").style["animation-delay"] = "1s";
}

function transitionOut(value) {
  document.getElementById("logo").style["animation"] =
    "2s ease leftToRight2 both";
  document.getElementById("fleche").style["animation"] =
    "2s ease rightToLeft2 both";
  if (value == 1) {
    document.getElementById("backgroundLeft").style["animation"] =
      "2s ease leftToRight2 both";
    document.getElementById("backgroundRight").style["animation"] =
      "2s ease rightToLeft2 both";
    document.getElementById("backgroundLeft2").style["animation"] =
      "2s ease leftToRight2 both";
    document.getElementById("backgroundRight2").style["animation"] =
      "2s ease rightToLeft2 both";
    document.getElementById("backgroundLeft").style["animation-delay"] = "1s";
    document.getElementById("backgroundRight").style["animation-delay"] = "1s";
    document.getElementById("backgroundLeft2").style["animation-delay"] = "1s";
    document.getElementById("backgroundRight2").style["animation-delay"] = "1s";
    document.getElementById("carte").style["animation"] =
      "1s ease scaleIn both";
    document.getElementById("carte").style["animation-delay"] = "2s";
  } else if (value == 2) {
    document.getElementById("menu1").style["animation"] =
      "2s ease rightToLeft2 both";
    document.getElementById("menu2").style["animation"] =
      "2s ease rightToLeft2 both";
    document.getElementById("backgroundLeft").style["animation"] =
      "1s ease changeHeight both";
    document.getElementById("backgroundRight").style["animation"] =
      "1s ease changeHeight both";
    document.getElementById("backgroundLeft").style["animation-delay"] = "2s";
    document.getElementById("backgroundRight").style["animation-delay"] = "2s";
    document.getElementById("write").style["animation"] =
      "1s ease scaleIn both";
    document.getElementById("write").style["animation-delay"] = "2.5s";
    document.getElementById("title1").style["animation"] =
      "1s ease scaleIn both";
    document.getElementById("title1").style["animation-delay"] = "2.5s";
    document.getElementById("writeSave").style["animation"] =
      "1s ease scaleIn both";
    document.getElementById("writeSave").style["animation-delay"] = "2.5s";
    document.getElementById("title2").style["animation"] =
      "1s ease scaleIn both";
    document.getElementById("title2").style["animation-delay"] = "2.5s";
    document.getElementById("previsual").style["animation"] =
      "1s ease scaleIn both";
    document.getElementById("previsual").style["animation-delay"] = "2.5s";
    document.getElementById("title3").style["animation"] =
      "1s ease scaleIn both";
    document.getElementById("title3").style["animation-delay"] = "2.5s";
    document.getElementById("settings").style["animation"] =
      "1s ease scaleIn both";
    document.getElementById("settings").style["animation-delay"] = "2.5s";
  }
}

function playSound() {
  var audio = document.getElementById("sound");
  audio.play();
}

function stopSound() {
  var audio = document.getElementById("sound");
  audio.pause();
  audio.currentTime = 0;
}

var text = "";
var res = "";
var i = 0;
function display() {
  text = document.getElementById("write").value;
  res = "";
  i = 0;
  display2();
}

function display2() {
  setTimeout(function () {
    res = res + text.charAt(i);
    document.getElementById("previsual").value = res;
    i = i + 1;
    if (i < text.length) {
      display2();
    }
  }, 100);
}

function display3() {
  text = document.getElementById("write").value;
  res = "";
  i = 0;
  display4();
}

function display4() {
  setTimeout(function () {
    res = res + text.charAt(i);
    document.getElementById("displayText").innerHTML = res;
    i = i + 1;
    if (i < text.length) {
      display4();
    }
  }, 300);
}

function textAnim() {
  document.getElementById("write").style["animation"] = "1s ease scaleOut both";
  document.getElementById("title1").style["animation"] =
    "1s ease scaleOut both";
  document.getElementById("title2").style["animation"] =
    "1s ease scaleOut both";
  document.getElementById("title3").style["animation"] =
    "1s ease scaleOut both";
  document.getElementById("previsual").style["animation"] =
    "1s ease scaleOut both";
  document.getElementById("writeSave").style["animation"] =
    "1s ease scaleOut both";
  document.getElementById("backgroundLeft").style["height"] = "90%";
  document.getElementById("backgroundRight").style["height"] = "90%";
  document.getElementById("backgroundLeft").style["animation"] =
    "2s ease leftToRight2 both";
  document.getElementById("backgroundRight").style["animation"] =
    "2s ease rightToLeft2 both";
  document.getElementById("backgroundLeft2").style["animation"] =
    "2s ease leftToRight2 both";
  document.getElementById("backgroundRight2").style["animation"] =
    "2s ease rightToLeft2 both";
  document.getElementById("backgroundLeft").style["animation-delay"] = "1s";
  document.getElementById("backgroundRight").style["animation-delay"] = "1s";
  document.getElementById("backgroundLeft2").style["animation-delay"] = "1s";
  document.getElementById("backgroundRight2").style["animation-delay"] = "1s";
  document.getElementById("displayText").style["animation"] =
    "2s ease scaleIn both";
  document.getElementById("displayText").style["animation-delay"] = "1s";
  display3();
}

function openSettings() {
  document.getElementById("settingsPage").style["animation"] =
    "1s ease scaleIn both";
}

function changeSize(value) {
  if (value == 1) {
    var el = document.getElementById("textSize");
    var style = window.getComputedStyle(el, null).getPropertyValue("font-size");
    var fontSize = parseFloat(style);
    el.style.fontSize = fontSize + 2 + "px";
  } else if (value == 2) {
    var el = document.getElementById("textSize");
    var style = window.getComputedStyle(el, null).getPropertyValue("font-size");
    var fontSize = parseFloat(style);
    el.style.fontSize = fontSize - 2 + "px";
  }
}
