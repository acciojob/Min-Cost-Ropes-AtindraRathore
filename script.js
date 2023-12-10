function mincost(arr)
{ 
//write your code here
// return the min cost
	let cost = 0;
	arr.sort();
  while(arr.length>1){
	  let a = arr.shift();
	  let b = arr.shift();
       let sum = a+b;
       console.log(arr);
	  cost = cost+ sum;
	  arr.push(sum);
	  console.log(arr);
  }
	return cost;
};
module.exports=mincost;
