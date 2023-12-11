function mincost(arr)
{ 
	let pq = new PriorityQueue();
//write your code here
// return the min cost
	for(let i=0;i<arr.length;i++){
		pq.add(arr[i]);
	}
	let cost = 0;
	arr.sort();
  while(arr.length>1){
	  let a = pq.pop();
	  let b = pq.pop();
       let sum = a+b;
       console.log(arr);
	  cost = cost+ sum;
	  pq.add(sum);
	 
  }
	return cost;
};
module.exports=mincost;
