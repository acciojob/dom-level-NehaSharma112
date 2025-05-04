//your JS code here. If required.


const targetElement = document.getElementById("level");
function getDomLevel(ele){
	let level=0;
	while(ele){
		level++;
		ele = ele.parentElement;
	}
	return level;
}
const domLevel = getDomLevel(targetElement);
alert(`The level of the element is :${domLevel}`);
