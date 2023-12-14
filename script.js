function mincost(arr)
{ 
  
//write your code here
// return the min cost
	
	let cost = 0;
	
  while(arr.length>1){
	  arr.sort((a,b)=>{ return a-b});
	  let a = pq.remove();
	  let b = pq.remove()
       let sum = a+b;
       console.log(arr);
	  cost = cost+ sum;
	  pq.add(sum);
	 
  }
	return cost;
};
module.exports=mincost;
