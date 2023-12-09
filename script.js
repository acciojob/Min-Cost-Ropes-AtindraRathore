function mincost(arr)
{ 
//write your code here
// return the min cost
	let cost = 0;
  while(arr.length>1){
	  let a = arr.pop();
	  let b = arr.pop();
       let sum = a+b;
	  cost += sum;
	  arr.push(sum);
  }
	return cost;
}

module.exports=mincost;
