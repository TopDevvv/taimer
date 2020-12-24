var wow = new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animate__animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();
  let d=document.getElementById("d");
  let h=document.getElementById("h");
  let m=document.getElementById("m");
  let s=document.getElementById("s");

  setInterval(tic, 1000);

  function tic() {
    let date = new Date();
  let nextDate = new Date("January 1, 2021")
  let msPerDay = 24*60*60*1000;
  let daysLeft = Math.round((nextDate.getTime() - date.getTime())/msPerDay);
  let dayname=""
  let ds=""+daysLeft
  let dd=parseInt(ds.substr(ds.length-1))
  if(daysLeft>4&&daysLeft<21){
    dayname=" дней"
  }else if(dd==1){
    dayname=" день"
  }else if(dd==2||dd==3||dd==4){
    dayname=" дня"
  }else
    dayname=" дней"

  let hours = 23-date.getHours();
  if (hours<10){
    hours="0"+hours;
  }
  let min = 59-date.getMinutes();
  if (min<10){
    min="0"+min;
  }
  let sec = 59-date.getSeconds();
  if (sec<10){
    sec="0"+sec;
  }

  d.innerHTML=daysLeft+dayname;
  h.innerHTML=hours+":";
  m.innerHTML=min+":";
  s.innerHTML=sec;

  }