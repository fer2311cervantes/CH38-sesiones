const fibonacci = (limit) => {
	let current = 0;
	let next = 1;
	for(let index=0 ;index < limit; index++){
      console.log(current);
      [current , next] = [next , next + current];
    } 
};
fibonacci(25);


const fibonacciArr = (limit) => {
	let arr = [ 0 , 1];
	for(let index=2 ;index < limit; index++){
      arr.push( arr[index-1] + arr[index-2] )
    } 
    return arr;
};
console.log(fibonacciArr(25).join("\n"));




const fibonacciAux = (limit) => {
	let current = 0;
	let next = 1;
    let aux;
	for(let index=0 ;index < limit; index++){
      console.log(current);
      aux = next;
      next += current;
      current = aux;
    } 
};
//fibonacciAux(25);