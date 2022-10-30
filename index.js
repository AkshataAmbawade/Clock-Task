
   let a=new Date();
   let date=a.toLocaleDateString();
    let hours =a.getHours()
    let minutes=a.getMinutes();
    let seconds=a.getSeconds();
    let amPm= hours>12?"PM":"AM";
    document.getElementById("myLable").innerHTML=hours+":"+minutes+":"+seconds+" "+ amPm +"  on  "+ date;
