// let mySet = Object.create(null)
// mySet.id=1;
// if(mySet.id){
// 	console.log("id exists")
// } 
// let mySet = new Set();
// let obj1={}
// let obj2={}
// mySet.add("Hello");
// mySet.add(1);
// mySet.add(obj1)
// mySet.add(obj2)
// console.log(mySet.size);

// let newSet = new Set([1,2,3,4,4,4])

// console.log(newSet.delete(1))
// console.log(newSet.size)
// let chainset=new Set().add("hello").add("world")

// let mySet = new Set();
// let key = {}
// mySet.add(key);
// console.log(mySet.size)
// key = null;
// console.log(mySet.size)
// key = [...mySet][0]

// let myarray = [1,2,3,4]
// let myset= new WeakSet(myarray)
// console.log(myset)
// console.log(myset)
// // myset.forEach(function(val){
// // 	console.log(val)
// // })
// // for (var it = myset.values(), val= null; val=it.next().value; ) {
// //     console.log(val);
// // }
// for (let item of myset.values()) console.log(item);

// let mymap = new Map([['a1','Hello'],['b2','Goodbye']])
// mymap.set('c3','Foo')

// for(let map of mymap.values()){
// 	console.log(map)
// }

// let sets = new Set()

// sets.add(1)
// let obj ={firstname:"Mohammed",
//  		  lastname:"Avez",
//  		  position:"Software developer"}
// sets.add(obj)
// let s = sets.values()
// console.log(s.next().value)
// console.log(s.next().value.lastname)

// let maps = new Map()
// maps.set(["Mohammed","Avez"],["aka","azhar"])
// maps.set({firstname:"Mohammed"},{hello:"hey"})
// console.dir(maps)
// let val = maps.entries()
// console.dir(val)
// console.dir(val.next().value[0][0])
// console.dir(val.next().value[0].firstname)

// console.log(val.next())

// let s = Symbol("firstname")
// console.log(typeof s)
// console.log(s.toString())

// let x = function(){
// 	console.log("Inside the function")
// }

// let y = function(callback){
// 	console.log("function running")
// 	 callback();
// }

// y(function(){
// 	console.log("Hello World")
// })


let promise1 = new Promise(function(resolve,reject){
	let isClean = true;
	if(isClean){
		resolve('clean')
	}else{
		reject('not Cleaned')
	}
 })
//.then(function(hello,hey){
// 	let removeGarbage=true
// 	if(removeGarbage){
// 		hello("Removed")
// 	}else{
// 		hey("Not Removed")
// 	}
// }).then(function(removedornot){
// 	console.log(removedornot)
// }).catch(function(notremoved){
// 	console.log(notremoved)
// })
console.log(Promise.reject("not resolved").catch(function(val){console.log(val)}))












