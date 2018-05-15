"use strict"
let arr=["input","textbox","checkbox"];
let searcharr=[];
let searchbox=document.getElementById('searchbox');
let searchoption=document.getElementById('searchoptions');
searchbox.addEventListener('input', function(e) {
  let inval = event.target.value;
  searcharr=[];
  searchoption.innerHTML="";
   arr.map((item)=>{ return item.toLowerCase()}).filter((item) => {
    if(inval.length>2){
     return item.includes(inval);
      }
      else{
        return false;
      }
   }).forEach((item)=>{
      if(!searcharr.includes(item)){
        searchoption.insertAdjacentHTML("beforeend",`<p>${item}</p>`);
        searcharr.push(item);
      }
   });
});

searchbox.addEventListener("focusin",function(e){
  searchoption.style.display="block";
});

searchbox.addEventListener("focusout",function(e){
   searcharr=[];
   searchoption.innerHTML="";
  searchoption.style.display="none";
});
