var terminaciones = ["**~ xD", "*+..", "***", "-- <3", ",.-~ :D"];
function terminacion () {
  return terminaciones[Math.floor(Math.random() * terminaciones.length)];
}
$(document).ready(function(){
  var clip = new ZeroClipboard($("#copiar"), {
      moviePath: "zero.swf"
  });
  clip.on('complete', function (client, args) {
    $("#copiar").hide();
    $("#copiado").fadeIn("fast");
    $("#copiado").delay(1000).fadeOut("fast", function() {
      $("#copiar").fadeIn("fast");
    });
  });
});
document.getElementById("input").onkeyup=function(){
    mensaje = this.value;
    metro = mensaje.toLowerCase().replace(/\w/g, function(c) {
        return {
          "a" : "A",
          "b" : "B",
          "c" : "c",
          "d" : "d",
          "e" : "eE",
          "f" : "f",
          "g" : "G",
          "h" : "H",
          "i" : "ii",
          "j" : "j",
          "k" : "Q",
          "l" : "l",
          "m" : "m",
          "n" : "ñ",
          "ñ" : "Ñ",
          "o" : "0o",
          "p" : "p",
          "q" : "k",
          "r" : "r",
          "s" : "zh",
          "t" : "T",
          "u" : "u",
          "v" : "v",
          "w" : "w",
          "x" : "x",
          "y" : "y",
          "z" : "zh"
        }[c] || c;
    });
    flog = "** "+metro+" "+terminacion();
    document.getElementById("result").innerHTML = flog;
    $("#copiar").attr("data-clipboard-text", flog);
    if (!metro) { document.getElementById("result").innerHTML = ''; }
};
$(document).on("click", 'a#share', function(e) {
  var loc, text;
  e.preventDefault();
  loc = "http://bit.ly/13Qp5lK";
  text = $("#result").text();
  return window.open("http://twitter.com/share?url=" + loc + "&text=" + text, "twitterwindow", "height=450, width=550, top=" + ($(window).height() / 2 - 225) + ", left=" + $(window).width() / 2 + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
});

// Social buttons shit
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1&appId=249794381729144";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
