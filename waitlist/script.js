var open=document.getElementById('openmodal');
var modal=document.getElementById('modal');
var close=document.getElementById('close');
var mainModal=document.getElementById('main-content');
function openModal(){
    document.getElementById('modal').style.display="flex";

}
function closeModal(){
    document.getElementById('modal').style.display="none";
    document.getElementById('main-content').style.display="none";
      
}
function closeModalFirst(){
  document.getElementById('main-content').style.display="none";
}
function openMainModal(){
    document.getElementById('main-content').style.display="flex";
    document.getElementById('main-content').style.opacity=1;
  
}



