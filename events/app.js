// unmaned function
document.querySelector('.clear-tasks').addEventListener('click', 
function(e){
  console.log('hello world');
  e.preventDefault();
});

// named function
document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e){
  console.log('Clicked')

  let val;
  val = e;
  // event target element
  val = e.target;
  val = e.target.className;
  val = e.target.classList;

  // event type
  val = e.type;

  // timestamp
  val = e.timeStamp;

  // coors even relative to the window
  val = e.clientY;
  val = e.clientX;

  // coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
