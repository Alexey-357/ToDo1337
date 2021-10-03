/*let form = document.getElementById('listForm');
form.addEventListener('submit', (event) => {
   form.submit(); // handle the form data
});*/


function paintLabels(){
  

   let lf=document.getElementById('listForm');
let items=lf.getElementsByTagName("input");
for(let item of items){
   if(item.checked == true){
      item.parentElement.style.background = "green";
   }
}
}
