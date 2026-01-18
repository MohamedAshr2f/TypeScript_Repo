let name = "mohamed";
let age = 30;
let isStudent = true;
let all : any="mhamedashraf";
all=30;

function add(num1: number, num2: number)
{
    return num1 + num2;
}
console.log(add(5,10));
////////////////////
let list1: number[]=[1,2,3,4,5];
let list2=["mohamed","ashraf","ali",10];

function display(...args: number[])
{
    for(let i=0;i<args.length;i++)
    {
        console.log(args[i]);
    }
    args.forEach(element => console.log(element));
}

enum level{
    kids=8, 
    beginner=5,
    advanced=2,
    expert=1
}
let mylevel: string="beginner";
if(mylevel=="beginner")
    {
        console.log(level.beginner);
   }
