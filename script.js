/*async function f(){
	let f = await fetch('https://jsonplaceholder.typicode.com/users');
	let user = await f.json();
	for(var i=0;i<user.length;i++){
			console.log(user[i]);
	}
}
f();*/



/*async function f(){
	var promise = new Promise(function(resolve,reject){
		setTimeout(function(){
			return resolve("done");
		},2000)
	})

	let result = await promise;
	console.log(result);
}
f();*/


var p = +prompt("Enter a number");
async function f(){
	try{
    	let response = await fetch('https://api.punkapi.com/v2/beers?per%20page='+p);
    	let user = await response.json();

  	}catch(err){
    	throw new Error("Data not fetched!");
    	alert(err);
	}
}
f();