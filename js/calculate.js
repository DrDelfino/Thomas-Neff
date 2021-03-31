function Calculate() {
  var picklecount = document.getElementById("picklecount").value;
  var mass = picklecount * 100 + 500;

  document.getElementById("display").innerHTML = mass + "g";
}
