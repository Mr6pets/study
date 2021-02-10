
const person={
	firstName:"alvis",
	lastName:"liu",
	age:28,
	email:"11810@qq.com",
	hobbies:["music","sport"],
	address:{
		city:"suzhou",
		state:"gusu"
	},
	getBrthDay:function(){
		return 1221
	}
}
let val;
val=person
//获取单个属性
val=person.firstName;
val=person['firstName'];
val=person.address.city;
val=person.address['state']
val=person.getBrthDay();


// console.log(val);
//数组对象嵌套
const people=[
{name:"alvis",age:20},
{name:"lala",age:22},
{name:"json",age:27},
]

for (let i = 0; i < people.length; i++) {
	console.log(people[i].name)
}

