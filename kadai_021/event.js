document.getElementById("btn").onclick = function() {
  setTimeout(function(){
    document.getElementById("text").innerText = "ボタンをクリックしました。";

  },2000);
};