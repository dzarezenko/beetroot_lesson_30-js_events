let textArea = document.querySelector("textarea");
textArea.addEventListener('keyup', (e) => {
  console.log(e);
  alert(e.key);

  //console.log(this);
});
