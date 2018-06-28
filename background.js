function checkLive() {
  var x = 20 // 20 secondes
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.twitch.tv/helix/streams?user_id=50597026");
  xhr.setRequestHeader("Client-ID", "3mwhz55a3t8w31yp4cafh3mhninouw");
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      var data = JSON.parse(xhr.responseText)

      if(data["data"].length <= 0) {
        browser.browserAction.setIcon({path:"img/poncefesse-offline.png"})
      } else {
        browser.browserAction.setIcon({path:"img/poncefesse-online.png"})
      }
      setTimeout(checkLive, x * 1000)
    }
  }
  xhr.send();
}

// au démarrage du browser, on lance la méthode
checkLive()
