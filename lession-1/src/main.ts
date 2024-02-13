// types in ts 

// string , number , boolean , any , union types 


let myName: string = 'hello there';
let id:number = 10;
let isActive  : boolean = false;

let anyVar:any = {}
anyVar = []
anyVar = 353156;

// union type
let postId  : string | number = 136136;


const sum = (a:number, b:string):string =>{
    return a+b
} 



let arr1 = ['a','b']
arr1.push('3536')
// arr1.push(55613561)
let arr2 = ['a',343]

// arr1 = arr2


// Tuples


const myTuple : [string ,number ,boolean] = ['ghsdh',5431,false];
let mixed = ['gadga',513613,false]
// you can pass myTuple into mixed because its an union type of (string | number | boolean)[]

// but you can't pass mixed into myTuple because ts don't knows that this mixed may or may not have these types on same indexs or mixed as equal length or not 

// here mixed has all the required indexes and same types even though ts will going to throws us error if you uncomment this line 

// tuples will going to strict array to reduce or increase its length you have to strictly must have these indexes with the same index types


// myTuple = mixed
myTuple.pop();
console.log(myTuple)
// myTuple.push()
mixed = myTuple



// objects 


let obj1 : object;

obj1 = {
    prop1 : 'fasgag',
    prop2 : true
}
obj1 = ['gaedga',56,true];

// obj1 = '526'
// obj1 = 1353151;
// obj1 = true;

type BoolOrNum = boolean | number; 

type BoolOrNumArr = BoolOrNum[];

type TailTunker  = {
    tires : (number | string | boolean),
    isAc : BoolOrNumArr,
    totalDrivers : number,
    ownerName? : string
}

let hp5054:TailTunker = {
    tires : true,
    isAc : [false,53,5136,13,613,61,36,136,136],
    totalDrivers : 2,
    ownerName : 'birdaniya'
}

let hp5057:TailTunker = {
    tires : true,
    isAc : [false],
    totalDrivers : 2,
}

hp5054 = hp5057
hp5054.tires = 1;

// hp5054.sideMirrors 



enum Grade {
    U ,
    A,
    B = 10,
    C,
    D
}

console.log(Grade.U, Grade.D)

// type litrals 
let myName2:'sohan' | 'bhagirath';

myName2 = 'bhagirath'
// console.log(myName2)


//function type defination 
type matFunction = (a:number, b : number)=> number; 

//function interface defination 
// interface matFunction {
//     (a:number, b : number): number; 
// } 


const sum2 : matFunction = (a:number,b:number) => a+b
const substract : matFunction = (a,b) => a-b;
const multiply : matFunction =   (a,b) => a*b;


// type assertation or type casting 

// const eleById = document.getElementById('img') 





const addOrConcat = (a:number,b:number ,c : 'add' | 'concat'):string | number =>
{
    // if(c === 'add') 
    return a+b;
    // else return ''+a+b;
}

// it means we tell ts that we knows better in this statement please go ahead  and take this value as string in the statement
const getMyVal:string = addOrConcat(10,5,'concat') as string;

// be careful ! Ts sees no problem - but string is returned
const getMyVal2:number = addOrConcat(10,5,'concat') as number;
console.log(getMyVal2);


// (10 as unknown) as string

const eleById = <HTMLImageElement>document.querySelector('img') 

// eleById.src


// const year : HTMLElement = <HTMLElement>document.getElementById('year')
// const thisyear : string = new Date().getFullYear().toString();
// year?.setAttribute('datetime',thisyear ); 
// year.textContent = thisyear;




const user1 ={
    name:'bhagirath',
    lastName : 'paliyal',
    age : 18,
    height : '5.10',
    weight : 60
}



const user2 = {
    name:'sohan',
    lastName : 'paliyal',
    age : 28,
    height : '6',
    weight : 65
}

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
    static count : number = 0;
    id !: number 

    constructor(public firstName:string, 
        private lastName:string ,
        readonly age:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
        this.id  = ++User.count
    }
    static getId(){
        return User.count;
    }
    static incrementCount(){
         User.count++;
    }
}


// const jagsa = new User('jagdish', 'seervi', 24);
// const sohan = new User('sohan', 'paliyal', 24);
// const bhagi = new User('bhagi', 'paliyal', 24);

// console.log("jagsa, sohan , bhagi ===>",jagsa, sohan , bhagi)
User.incrementCount()
User.incrementCount()
User.incrementCount()
console.log(User.getId())


class MatTable {
    private dataState : string[]
    constructor(){
        this.dataState = []
    }

    get data(){
        return this.dataState
    }

    set data(data){
        this.dataState = data; 
    }
}



const datasource = new MatTable()


datasource.data = ['fs','gadghd','gdahgd'] 
console.log("datasource.data ===>",datasource.data)


// ----------------------------------------------------------------

// Index Signatures


interface TransactionObj {
    Pizza : number,
    Books : number,
    Job : number
    readonly [index : string] : number     
}

// interface TransactionObj {
//     readonly [index : string] : number     
// }

const todaysTrans: TransactionObj = {
    Pizza : -53,
    Books : 55,
    Job : 1
}

const prop : string = 'Pizza'
todaysTrans[prop]


const todayNet = (todaysTrans:TransactionObj):number =>{
    let sum = 0;
    for(let i in todaysTrans){
        sum+=todaysTrans[i];
    }
    return sum
}

todaysTrans
console.log(todayNet(todaysTrans))



// /////////////////////////////////////////////////////////


interface Student {
    // [index  :string ] : string | number | string[] | undefined
    name : string ,
    GPA : number,
    classes? : string[]
}


const student :Student = {
    name :"sohan",
    GPA : 54135,
    classes : ['4','4','434']
}

for (const key in student) {
    if (Object.prototype.hasOwnProperty.call(student, key)) {
        const element = student[key as keyof Student];
        console.log(key+ ':' +element)
    }
}


Object.keys(student).map(el=>{
    console.log(student[el as keyof typeof student])
})


const logStudentKey = (student : Student, key: keyof Student):void =>{
    console.log(`Student ${key} : ${student[key]}`)
}



logStudentKey(student, 'GPA')


///////////////////////////////////////////////////



// interface Incomes {
//     [key : string]:number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';
type Incomes = Record<Streams, number>


const incomes:Incomes= {
    salary : 4224,
    bonus : 53,
    sidehustle : 5235,
} 


for(let i in incomes){
    console.log(incomes[i as keyof Incomes])
}




// ///////////////////////////////////////////////////////////


// genric types 


const strEcho = (str: string) :string=> str;

// genericWay
const strEcho2 = <T>(str: T) :T=> str;

const isObj = <T>(obj: T):boolean => {
    return typeof obj === 'object' 
            && !Array.isArray(obj) 
            && typeof obj !=null
}

const isTrue = <T>(arg: T):{arg:T, isBool : boolean} =>{
    if(
    (Array.isArray(arg) && !arg.length) 
    || 
    (isObj(arg) && !Object.keys(arg as keyof T).length)){
        return { arg , isBool : false}
    }
    return { arg , isBool : !!arg}
}


console.log(isTrue(true))
console.log(isTrue(false))
// console.log(isTrue(null))
// console.log(isTrue(undefined))
console.log(isTrue({}))
console.log(isTrue({name : 'sohan'}))

console.log(isTrue([]))

console.log(isTrue([1,4,25,25]))

interface BoolCheck<T> {
    value : T,
    isBool : boolean
}



const checkBoolWithInterface = <T>(arg: T):BoolCheck<T> =>{
    if(
    (Array.isArray(arg) && !arg.length) 
    || 
    (isObj(arg) && !Object.keys(arg as keyof T).length)){
        return {value: arg , isBool : false}
    }
    return { value : arg , isBool : !!arg}
}


interface HasId {
    id : number
}


const processOrder = <T extends HasId>(user :T) :T=>{
    // process the user with logic here
    return user
}


console.log(processOrder({id : 88,name : 'sohan'}))
// console.log(processOrder({name : 'umesh'}))



const getUsersProperty = <T extends HasId ,K extends keyof T>(users : T[], key :K):T[K][] =>{
    return users.map((user)=>user[key])
}


const users = [
    {
        id: 24,
        name : 'sohan',
        email : 'sohan@gmail.com'
    },
    {
        id: 25,
        name : 'jagsa',
        email : 'jagsa@gmail.com'
    }
]

console.log(getUsersProperty(users,'email'))



// generics in the class

class StateObject<T>{
    private data : T;
    constructor(value : T) {
        this.data = value
    }

    get state():T {
        return this.data;
    }

    set state(value : T){
        this.data = value;
    }
}

const store = new StateObject('jhon')
console.log(store.state);
store.state = 'Dave';
// store.state = 425;


const myState = new StateObject<(string | number | boolean)[]>([4])