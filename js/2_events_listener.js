let anchor = document.getElementById("anchor");

anchor.addEventListener('click', showGreating);
anchor.addEventListener('click', () => {
  alert("Test");
});
anchor.addEventListener('mouseout', () => {
  //alert("Mouse Over!!!");
  f1();
  f2();
  f3();
});
