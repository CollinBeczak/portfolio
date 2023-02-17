const hamburgerListClick = () => {
  let listStatus =  document.getElementById("list")

  if(listStatus.classList == 'openList') {
    listStatus.classList.remove('openList');
  } else {
    listStatus.classList.add('openList');
  }
}