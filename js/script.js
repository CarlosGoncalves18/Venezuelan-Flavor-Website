//magnificPopup
  $('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{
    enabled: true
  }
});
function SetCookies() {
    document.cookie =
    "name=" + document.getElementById("name").value +
    "|phone=" + document.getElementById("phone").value +
    "|email=" + document.getElementById("email").value +
    "|date=" + document.getElementById("date").value +
    "|time=" + document.getElementById("time").value +
    "|attendees=" + document.getElementById("attendees").value +
    "|comments=" + document.getElementById("comments").value;
}
function GetCookies() {
    var arr = document.cookie.split('|');
    var string;
    for (var i = 0; i < arr.length; i++) {
        var sarr = arr[i].split('=');
        document.getElementById(sarr[0]).innerText = sarr[1];
    }
}
