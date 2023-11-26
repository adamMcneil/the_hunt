  


  (function() {
    window.addEventListener('load', function () {
      var today = new Date();
      if (today.getHours() == 0 && (today.getMinutes() >= 0 && today.getMinutes() <= 20)){
        document.getElementById("glitch").innerHTML = "hint goes here";
      }
      else{
        document.getElementById("glitch").innerHTML = "the hunt";
      }
    })
    // Init

    container = document.getElementById("container"),
    inner = document.getElementById("inner");
  
    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);
  
    //-----------------------------------------
  
    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % updateRate === 0;
    };
  
    //-----------------------------------------
  
    var onMouseEnterHandler = function(event) {
      update(event);
    };
  
    var onMouseLeaveHandler = function() {
      inner.style = "";
    };
  
    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
    //-----------------------------------------
  
    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };
  
    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTransform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };
  
    //-----------------------------------------
  
    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
  })();

let y = 0;
let x = 0;
let c = [];
let count = 200;

for(let i = 1; i <= count; i++)
{
	var s = document.createElement('div');
	s.className = 'cursor';
	s.speed = i === count ? 1 : i * 0.003;
	s.style.opacity = i === count ? 1 : i * 0.1;
	
	s.positionX = 0;
	s.positionY = 0;

	c.push(s)
	document.body.appendChild(s);
}

document.body.onmousemove = function(e) 
{
	y = e.clientY;
	x = e.clientX;
};

function step(timestamp) 
{
	c.map( (cursor) => {
		let targetY = y;
		let dy = targetY - cursor.positionY;
		cursor.positionY += dy * cursor.speed;

		let targetX = x;
		let dx = targetX - cursor.positionX;
		cursor.positionX += dx * cursor.speed;

		cursor.style.left  = cursor.positionX + 'px';
		cursor.style.top = cursor.positionY + 'px';
	} )

	requestAnimationFrame(step);
}

requestAnimationFrame(step);