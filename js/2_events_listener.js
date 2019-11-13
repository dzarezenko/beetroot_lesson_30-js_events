let anchor = document.getElementById("anchor");

//anchor.addEventListener('click', showGreating);
document.body.addEventListener('click', (event) => {
  console.log(event);
  switch (event.target.id) {
    case ("anchor"):
      alert("Link!");
      event.preventDefault();
      break;
    /*default:
      alert("Not a link!");*/
  }
});
/*anchor.addEventListener('mouseout', () => {
  //alert("Mouse Over!!!");
  f1();
  f2();
  f3();
});*/
