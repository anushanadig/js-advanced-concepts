//event delegation uses the concept of event bubbling

document.querySelector("#vehicles").addEventListener("click", e => {
  window.location.href = "/" + e.target.id;
});
