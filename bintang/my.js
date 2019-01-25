// var a = '';
// for(var b = 0; b < 5; b++){
// 	for(var c = 0; c < 5; c++){
// 		a += '*';
// 	}
// 	a += '\n';
// }
// console.log(a);




// var d = '';
// for(var e = 0; e < 5; e++){
// 	for(var f = 0; f <= e; f++){
// 		d += '*';
// 	}
// 	d += '\n';
// }
// console.log(d);





// var g = '';
// var i = 0
// for(var h = 5; h > 0; h--){
// 	for( i = 0; i < h; i++){
// 		g += '*';
// 	}
// 	g += '\n';
// }
// console.log(g);




// var j = '';
// for(var k = 10; k > 0; k--){
// 	for(var l = 10; l > k; l--){
// 		j += ' ';
// 	}
// 	for(var m = 0; m < l; m++){
// 		j += '*';
// 	}
// 	j += '\n';
// }
// console.log(j);



// // SEGITIGA SAMA KAKI
// var n = '';
// for(var o = 0; o < 5; o++){
// 	for(var p = 5; p > o; p--){
// 		n += ' ';
// 	}
// 	for(var q = 0; q <= o; q++){
// 		n += '*';
// 	}
// 	for(var r = 0; r < o ; r++){
// 		n+= '*';
// 	}
// 	n += '\n';
// }
// console.log(n);





// // CATUR
// var s = '';
// for(var t = 0; t <= 10; t++){
// 	if(t % 2 == 0){
// 		for(var u = 0; u < 5; u++){
// 			s += '# ';
// 		}
// 	}
// 	if(t % 2 == 1){
// 		for(var v = 0; v < 5; v++){
// 			s += ' #'
// 		}
// 	}
// 	s += '\n';
// }
// console.log(s);



// // SEGITIGA PASCAL
// var w = '';
// var x = 1;
// var y = 1;
// var z = 0;
// for(var a1 = 0; a1 <= 5; a1++){
// 	for(var b1 = 5; b1 > a1; b1--){
// 		w += ' ';
// 	}
// 	for(var c1 = 0; c1 < z; c1++){
// 		if(c1 == 1 || c1 == (z-1)){
// 			w += x;
// 		}
// 		else if((c1 > 1 && c1 % 2 == 1) && (c1 < (z-1) && c1 % 2 == 1)){
// 			y += 1;
// 			w += y;
// 		}
// 		else {
// 			w += ' ';
// 		}
// 	}
// 	z += 2;
// 	w += '\n';
// }
// console.log(w);




// DIAMOND
// var s = '';
// var e = 1;
// var i = 9;
// for(var a = 1; a <= 2; a++){
//  if (a == 1) {
//   for(b = 1; b <= 5; b++){
//    for(var c = 4; c >= b; c--){
//     s += ' ';
//    }
//    for(var d = 1; d < e; d++){
//     s += '*';
//    }
//    e += 2;
//    s += '*\n'; 
//   }
//  }
//  else if (a == 2) {
//   for(var f = 1; f <= 5; f++){
//    for(g = 1; g < f; g++){
//     s += ' ';
//    }
//    for(h = 1; h < i; h++){
//     s += '*';
//    }
//    i -= 2;
//    s +='*\n';
//   }
//  } 
// }
// console.log(s);
 

// SEGITIGA SAMA KAKI
// var s = '';
// var d = 1;
// for(var a = 1; a <= 5; a++){
//  for(var b = 4; b >= a; b--){
//   s += ' ';
//  }
//  for(var c = 1; c < d; c++){
//   s += '*';
//  }
//  d += 2;
//  s += '*\n';
// }
// console.log(s);


// SEGITIGA PASCAL
// var a = '';
// for(var c = 1; c <= 5; c++){
//  if(c == 3 || c == 4 || c == 5){
//   for(var d = 5; d >= c; d--){
//    a += ' ';
//   }
//   if(c == 3){
//    a += '1 2 1';
//   }
//   else if (c == 4){
//    a += '1 3 3 1';
//   }
//   else {
//    a += '1 4 6 4 1';
//   }
//  }
//  else {
//   var d = 5;
//   while(d >= c){
//    a += ' ';
//    d--;
//   }
//   var e = 1;
//   while(e <= c){
//    a += 1;
//    a += ' ';
//    e++;
//   }
//  }
//  a += '\n';
// }
// console.log(a);

function tambah(){
	return arguments;
}
var coba = tambah(5,2,1,"hi", false);
console.log(coba);
