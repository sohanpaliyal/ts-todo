"use strict";
// types in ts 
// string , number , boolean , any , union types 
let myName = 'hello there';
let id = 10;
let isActive = false;
let anyVar = {};
anyVar = [];
anyVar = 353156;
// union type
let postId = 136136;
const sum = (a, b) => {
    return a + b;
};
let arr1 = ['a', 'b'];
arr1.push('3536');
// arr1.push(55613561)
let arr2 = ['a', 343];
// arr1 = arr2
// Tuples
const myTuple = ['ghsdh', 5431, false];
let mixed = ['gadga', 513613, false];
// you can pass myTuple into mixed because its an union type of (string | number | boolean)[]
// but you can't pass mixed into myTuple because ts don't knows that this mixed may or may not have these types on same indexs or mixed as equal length or not 
// here mixed has all the required indexes and same types even though ts will going to throws us error if you uncomment this line 
// tuples will going to strict array to reduce or increase its length you have to strictly must have these indexes with the same index types
// myTuple = mixed
myTuple.pop();
console.log(myTuple);
// myTuple.push()
mixed = myTuple;
// objects 
let obj1;
obj1 = {
    prop1: 'fasgag',
    prop2: true
};
obj1 = ['gaedga', 56, true];
let hp5054 = {
    tires: true,
    isAc: [false, 53, 5136, 13, 613, 61, 36, 136, 136],
    totalDrivers: 2,
    ownerName: 'birdaniya'
};
let hp5057 = {
    tires: true,
    isAc: [false],
    totalDrivers: 2,
};
hp5054 = hp5057;
hp5054.tires = 1;
// hp5054.sideMirrors 
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["B"] = 10] = "B";
    Grade[Grade["C"] = 11] = "C";
    Grade[Grade["D"] = 12] = "D";
})(Grade || (Grade = {}));
console.log(Grade.U, Grade.D);
// type litrals 
let myName2;
myName2 = 'bhagirath';
//function interface defination 
// interface matFunction {
//     (a:number, b : number): number; 
// } 
const sum2 = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
// type assertation or type casting 
// const eleById = document.getElementById('img') 
const addOrConcat = (a, b, c) => {
    // if(c === 'add') 
    return a + b;
    // else return ''+a+b;
};
// it means we tell ts that we knows better in this statement please go ahead  and take this value as string in the statement
const getMyVal = addOrConcat(10, 5, 'concat');
// be careful ! Ts sees no problem - but string is returned
const getMyVal2 = addOrConcat(10, 5, 'concat');
console.log(getMyVal2);
// (10 as unknown) as string
const eleById = document.querySelector('img');
// eleById.src
// const year : HTMLElement = <HTMLElement>document.getElementById('year')
// const thisyear : string = new Date().getFullYear().toString();
// year?.setAttribute('datetime',thisyear ); 
// year.textContent = thisyear;
const user1 = {
    name: 'bhagirath',
    lastName: 'paliyal',
    age: 18,
    height: '5.10',
    weight: 60
};
const user2 = {
    name: 'sohan',
    lastName: 'paliyal',
    age: 28,
    height: '6',
    weight: 65
};
//-------------------------------------------------------
//  CLASSES
// class User {
//     // name!: string;
//     // lastName! : string;
//     // age! : number;
//     // height! : string;
//     // weight !: number;
//     constructor(public readonly name:string , 
//                 private lastName: string,
//                 protected age:number , 
//                 public height:string, 
//                 public weight:number){
//                 this.name = name ;
//                 this.lastName = lastName;
//                 this.age = age;
//                 this.height = height;
//                 this.weight = weight;
//     }
//     helloName(name:string){
//         console.log(`hello there!${name}`)
//     }
// }
// const user3  = new User('bhagirath', 'paliyal', 18, '5.10',60)
// const user4 = new User('sohan', 'paliyal', 18, '5.10',60)
// // user3.weight = 40;
// console.log(user3.helloName(user3.name), user3.name)
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = ++User.count;
    }
    static getId() {
        return User.count;
    }
    static incrementCount() {
        User.count++;
    }
}
User.count = 0;
// const jagsa = new User('jagdish', 'seervi', 24);
// const sohan = new User('sohan', 'paliyal', 24);
// const bhagi = new User('bhagi', 'paliyal', 24);
// console.log("jagsa, sohan , bhagi ===>",jagsa, sohan , bhagi)
User.incrementCount();
User.incrementCount();
User.incrementCount();
console.log(User.getId());
class MatTable {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(data) {
        this.dataState = data;
    }
}
const datasource = new MatTable();
datasource.data = ['fs', 'gadghd', 'gdahgd'];
console.log("datasource.data ===>", datasource.data);
// interface TransactionObj {
//     readonly [index : string] : number     
// }
const todaysTrans = {
    Pizza: -53,
    Books: 55,
    Job: 1
};
const prop = 'Pizza';
todaysTrans[prop];
const todayNet = (todaysTrans) => {
    let sum = 0;
    for (let i in todaysTrans) {
        sum += todaysTrans[i];
    }
    return sum;
};
todaysTrans;
console.log(todayNet(todaysTrans));
const student = {
    name: "sohan",
    GPA: 54135,
    classes: ['4', '4', '434']
};
for (const key in student) {
    if (Object.prototype.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(key + ':' + element);
    }
}
Object.keys(student).map(el => {
    console.log(student[el]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key} : ${student[key]}`);
};
logStudentKey(student, 'GPA');
const incomes = {
    salary: 4224,
    bonus: 53,
    sidehustle: 5235,
};
for (let i in incomes) {
    console.log(incomes[i]);
}
// ///////////////////////////////////////////////////////////
// genric types 
const strEcho = (str) => str;
// genericWay
const strEcho2 = (str) => str;
const isObj = (obj) => {
    return typeof obj === 'object'
        && !Array.isArray(obj)
        && typeof obj != null;
};
const isTrue = (arg) => {
    if ((Array.isArray(arg) && !arg.length)
        ||
            (isObj(arg) && !Object.keys(arg).length)) {
        return { arg, isBool: false };
    }
    return { arg, isBool: !!arg };
};
console.log(isTrue(true));
console.log(isTrue(false));
// console.log(isTrue(null))
// console.log(isTrue(undefined))
console.log(isTrue({}));
console.log(isTrue({ name: 'sohan' }));
console.log(isTrue([]));
console.log(isTrue([1, 4, 25, 25]));
const checkBoolWithInterface = (arg) => {
    if ((Array.isArray(arg) && !arg.length)
        ||
            (isObj(arg) && !Object.keys(arg).length)) {
        return { value: arg, isBool: false };
    }
    return { value: arg, isBool: !!arg };
};
const processOrder = (user) => {
    // process the user with logic here
    return user;
};
console.log(processOrder({ id: 88, name: 'sohan' }));
// console.log(processOrder({name : 'umesh'}))
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const users = [
    {
        id: 24,
        name: 'sohan',
        email: 'sohan@gmail.com'
    },
    {
        id: 25,
        name: 'jagsa',
        email: 'jagsa@gmail.com'
    }
];
console.log(getUsersProperty(users, 'email'));
// generics in the class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject('jhon');
console.log(store.state);
store.state = 'Dave';
// store.state = 425;
const myState = new StateObject([4]);
const assign = {
    studentId: 'dbadb',
    title: 'fgadg',
    grade: 4125,
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assignGraded = updateAssignment(assign, { grade: 424 });
// requiered and readonly 
// with this utility type use created interface and type optional parameter 
// will also going to required
const recordAssignment = (assign) => {
    // send data to database and etc .
    return assign;
};
// all the used keys will going to readonly of this object
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// Record
const hexColorMap = {
    red: "#FFF",
    green: "#00535"
};
const finalGrades = {
    sara: 'A',
    kelly: 'B'
};
const gradeData = {
    sara: { grade1: 1, grade2: 3 },
    kelly: { grade1: 1, grade2: 3 }
};
const score = {
    studentId: 'K123',
    grade: 3131
};
const preview = {
    studentId: '2',
    title: 'final project'
};
// ReturnType 
// if you want to create a dynamic type from any function return type then you can use this utility type 
const createNewAssign = (title, points) => {
    return { title, points };
};
const newAssign = createNewAssign('hello', 52);
const assignArgs = ['wqt', 35];
