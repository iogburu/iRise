getDashboxImgLoc = function (name) {
  var base = "dashbox-";

  var path = "img/" + base + name + ".png";

  if (!urlExists(path)) {
    path = "img/" + base + "default" + ".png";
  }
  return path;
};

function urlExists(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  return http.status != 404;
}