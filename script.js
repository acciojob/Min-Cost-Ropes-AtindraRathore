function mincost(arr)
{ 
	let pq = new PriorityQueue();
//write your code here
// return the min cost
	for(let i=0;i<arr.length;i++){
		pq.enqueue(arr[i]);
	}
	let cost = 0;
	
  while(arr.length>1){
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
