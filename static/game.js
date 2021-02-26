var socket = io();
socket.on('message', function(data) {
  let h1 = document.createElement("H1");
  h1.innerHTML = data;
  document.body.appendChild(h1);
});