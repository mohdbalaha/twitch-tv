window.onload = function () {
  const url=" https://wind-bow.glitch.me/twitch-api/streams/";
  const twitch="https://www.twitch.tv/";
  
  getJSON('esl_sc2');
  getJSON('freecodecamp');
  getJSON('OgamingSC2');
  getJSON('cretetion');
  getJSON('storbeck');
  getJSON('habathcx');
  getJSON('RobotCaleb');
  getJSON('noobs2ninjas');
  
  let on_line=document.getElementById("online");
  on_line.onclick=function(){
  console.log('online');
    let arr1=document.getElementsByClassName("offline");
    for(let i=0;i<arr1.length;i++){
    arr1[i].style.display="none";
    }
        let arr2=document.getElementsByClassName("online");
    for(let x=0;x<arr2.length;x++){
    arr2[x].style.display="flex";
    }
  }
  
  let off_line=document.getElementById("offline");
  off_line.onclick=function(){
  console.log('offline');
      let arr2=document.getElementsByClassName("online");
    for(let x=0;x<arr2.length;x++){
    arr2[x].style.display="none";
    }
      let arr1=document.getElementsByClassName("offline");
    for(let i=0;i<arr1.length;i++){
    arr1[i].style.display="flex";
    }
  }
  
  let all=document.getElementById("all");
  all.onclick=function(){
  console.log('all');
        let arr=document.getElementsByClassName("user");
    for(let j=0;j<arr.length;j++){
    arr[j].style.display="flex";
    }
  }
  
  function getJSON(user){
    const xhr=new XMLHttpRequest();
    xhr.responseType='json';
    
    xhr.onload=function(){
      if(xhr.status==200){
        let obj=xhr.response;
        
        if(obj.stream){
        output='<div class="user online"><img src="'+obj.stream.channel.logo+'" width="60px" height="60px"><ul><li><a href="'
          +obj.stream.channel.url +'" target="_blank">'+user+
          '</a></li><li><p>'+
          obj.stream.channel.status+'</p></li></div>';
        let users =document.getElementById("users");
        users.innerHTML+=output;
        }else{
          output='<div class="user offline"><img src="https://cdn.auth0.com/blog/pwa/offline-first-Logo.png" width="60px" height="60px"><ul><li><a href="'
          +twitch+user +'" target="_blank">'+user+
          '</a></li></ul><p></p></div>';
        let users =document.getElementById("users");
        users.innerHTML+=output;
        }
        
      }
      
    }
    
    xhr.open('GET',url+user,true);
    xhr.send();
  }

}