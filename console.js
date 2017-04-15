//the js command directly used on chrome console
 
//How much loop Time needed
var loopTimes=5000;
//Sleep between each loop
var sleepMicroSecond=7050;



var x = document.getElementsByClassName("goog-button-base-content");
var element=x[(x.length-1)];
console.log(x);
  var dispatchMouseEvent = function(target, var_args) {
      var e = document.createEvent("MouseEvents");
      // If you need clientX, clientY, etc., you can call
      // initMouseEvent instead of initEvent
      e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
      target.dispatchEvent(e);
    };
 
  
 /**
 main function
 **/
function c(){

   // Do something after the sleep!
	 dispatchMouseEvent(element, 'mouseover', true, true);
    dispatchMouseEvent(element, 'mousedown', true, true);
    dispatchMouseEvent(element, 'click', true, true);
    dispatchMouseEvent(element, 'mouseup', true, true);
 

}

 



var i = 1;                     //  set your counter to 1

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
           //  your code here
      i++;                     //  increment the counter
      if (i < loopTimes) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another  
		 c();		//  Main function
      }                        //  ..  setTimeout()
   }, sleepMicroSecond)
}

myLoop();  
