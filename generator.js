"use strict"
let arr=["input","textbox"];
let searchbox=document.getElementById('searchbox');
searchbox.addEventListener('input', function(e) {
  let inval = event.target.value;
   arr.filter((item) => {
    if(inval.length>2){
     return item.includes(inval);
      }
      else{
        return false;
      }
   }).forEach((item)=>{
          alert(item);
   });
});
