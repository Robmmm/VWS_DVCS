var looper;
var degrees = 0;
function rotateAnimationStep(el,speed){
	var elem = document.getElementById(el);
	elem.style.transform = "rotate("+degrees+"deg)";
	degrees ++;
	if(degrees > 359){
		degrees = 1;
	}
}

function rotateAnimationNegStep(el,speed){
	var elem = document.getElementById(el);
	elem.style.transform = "rotate("+degrees+"deg)";
	degrees --;
	if(degrees > 359){
		degrees = 1;
	}
}

function rotateAnimation(el,speed){
	var elem = document.getElementById(el);
	elem.style.transform = "rotate("+degrees+"deg)";
	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	looper = ('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees ++;
	if(degrees > 359){
		degrees = 1;
	}
}

function rotateAnimationStop(el,speed){
	var elem = document.getElementById(el);
	location.reload();
}

window.onkeydown = function(evt) {
	// console.log(evt);

	var key = evt.which ? evt.which : evt.keyCode;
	var c = String.fromCharCode(key);
	switch (c) {
		case ('R'):
			rotateAnimationStep("img1",0);
			break;
		case ('L'):
			rotateAnimationNegStep("img1",0);
			break;
		case ('D'):
			rotateAnimation("img1",0);
			break;
		case ('S'):
			rotateAnimationStop("img1",0);
			break;
	}
};



