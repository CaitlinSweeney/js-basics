

for(var i = 0; i < 500; i+=100){
   console.log(i);
}
// returns 0 100 200 300 400 500

for (i = 1; i <= 64; i *= 2){
console.log (i);
}
// returns 1 2 4 8 16 32 64

for (var i = 1; i <= 3; i++){
 console.log(i, i, i);
}
// returns 1 1 1 2 2 2 3 3 3

for (i = 0; i <= 10; i += 2){
console.log (i);
}
// returns 0 2 4 6 8 10

for (i = 0; i <= 15; i += 3){
console.log (i);
}
// returns 3 6 9 12 15

for (var i = 9; i > 0; i--){
  console.log(i);
}
// returns 9 8 7 6 5 4 3 2 1 0

for (i = 0; i < 3; i++){
  for (x = 0; x <= 3; i++){}
  console.log(i);
}
// returns 0 1 2 3 0 1 2 3 0 1 2 3
