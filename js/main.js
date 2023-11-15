const main = document.querySelector('main');
const screen = document.querySelector('.screen');
const em = screen.querySelector('em');
const numbers = screen.querySelectorAll('span');

setInterval(() => {
	changeTheme();
	em.innerText = new Date().getHours() < 12 ? 'am' : 'pm';
	getTime().forEach((num, idx) => setTime(num, idx));
}, 1000);

//시간값을 구해서 반환하는 함수
function getTime() {
	const now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();

	//현재시간값이 13이상이되면 12를 뺀값을 hr로 리턴
	hr = hr > 12 ? hr - 12 : hr;
	return [hr, min, sec];
}

//반환된 시간값을 인수로 받아서 DOM에 세팅하는 함수
function setTime(num, index) {
	numbers[index].innerText = num < 10 ? '0' + num : num;
}

//시간에 테마 변경함수
function changeTheme() {
	const hr = new Date().getHours();
	main.className = '';

	if (hr >= 5 && hr < 10) {
		main.classList.add('morning');
	}
	if (hr >= 10 && hr < 16) {
		main.classList.add('afternoon');
	}
	if (hr >= 16 && hr < 20) {
		main.classList.add('evening');
	}
	if (hr >= 20 || hr < 5) {
		main.classList.add('night');
	}
}

const maen={
  morning: {num: 5, num2: 10},
  afternoon:{num: 10, num2: 16}, 
  evening:{num: 16, num2:20},
  night:{num:20, num2:5}
}

const [morning, afternoon, evening, night]=mean;

function chang2(variable){
if(hr>=num && hr<num2){
  main.classList.add(variable);
}
}



