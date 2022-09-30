/*
	자바스크립트에서 함수 만드는 방법
	
	방법 1 ]
			function 함수이름([매개변수리스트]){
				실행내용...				
			}
	
	방법 2 ] 
			var 함수이름 = function([매개변수리스트]){
				실행내용...
			};		
 */

function tell(){
	var name = 'jennie';
	/*alert(name);*/	
}


var str = '';
for(i = 0; i < 7; i++){
	for(k = 6; k > i; k--){
		str +='&nbsp;&nbsp;&nbsp;';
	}
	for(j = 0; j < i; j++){
		str += '☆';
	}
	if(i < 6){
		str += '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	}
	document.getElementById('board0').innerHTML = str;
}

var str = '';
for(i = 0; i < 7; i++){
	for(j = 0; j-1 < i; j++){
		str += '☆';
	}
	str += '<br>';
	document.getElementById('board1').innerHTML = str;
}

var str = '';
for(i = 0; i < 6; i++){
	for(k = 0; k < i; k++){
		str += '&nbsp;';
	}
	for(j = 25; j > i; j--){
		str += '☆';
	}
	str += '<br>'
	document.getElementById('board2').innerHTML = str;
}

var str = '';
for(i = 0; i < 9; i++){
	str += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	for(j = 9; j > i; j--){
		str += '☆';
	}
	if(i < 8){
		str += '<br>';
	}
	document.getElementById('board3').innerHTML = str;
}

var str = '';
for(i = 0; i < 9; i++){
	for(k = 0; k < i; k++){
		str +='&nbsp;&nbsp;&nbsp;';
	}
	for(j = 9; j > i; j-- ){
		str += '☆';
	}
	str += '<br>';
	document.getElementById('board4').innerHTML = str;
}






