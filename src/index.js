




const homeListItem = document.getElementById("homeListItem");
const dailyListItem = document.getElementById("dailyListItem");
const notesListItem = document.getElementById("notesListItem");
let selectedItem = homeListItem;
const containerDaily= document.getElementById("containerDaily");
const containerHome= document.getElementById("containerHome");
const containerNotes= document.getElementById("containerNotes");
containerDaily.classList.add("container-hidden");
containerNotes.classList.add("container-hidden");

const containers = document.getElementsByClassName("container");

const clearContent = () => {
  for(i=0;i<containers.length;i++){
    containers[i].classList.add("container-hidden");
  }
}

homeListItem.addEventListener("click", () => {
  clearContent();
  containerHome.classList.remove("container-hidden");
  });


dailyListItem.addEventListener("click", () => {
  clearContent();
  containerDaily.classList.remove("container-hidden");
  });
  