var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.twitch.tv/helix/streams?user_id=50597026");
xhr.setRequestHeader("Client-ID", "3mwhz55a3t8w31yp4cafh3mhninouw");
xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    var data = JSON.parse(xhr.responseText)
    var info = document.getElementById('live-info')

    if(data["data"].length <= 0) {
      info.style.color = "red"
      info.innerHTML = "Poncefesse n'est pas en live !"
    } else{
      info.style.color = "green"
      info.innerHTML = "Poncefesse est en live, ram&egrave;ne ton culcul !"
    }
  }
}

xhr.send();
