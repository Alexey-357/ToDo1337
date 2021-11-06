import { container } from "webpack";
import  dailyDiv  from "./daily.js";
import "./styles.css";





const homeListItem = document.getElementById("homeListItem");
const dailyListItem = document.getElementById("dailyListItem");
const selectedItem = homeListItem;
const containerDaily= document.getElementById("containerDaily");
const containerHome= document.getElementById("containerHome");
const containerNotes= document.getElementById("containerNotes");
containerDaily.classList.add("container-hidden")
containerNotes.classList.add("container-hidden")
const containers = document.getElementsByClassName("container");

const clearContent = () => {
  for(i=0;i<containers.length;i++){
    containers[i].classList.add("container-hidden");
  }
}
dailyListItem.addEventListener("click", () => {
  clearContent();
   containerDaily.classList.remove("container-hidden");
   

  });