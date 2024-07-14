var a=12;
var b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
a+=3;
console.log(a);
a-=3;
console.log(a);
 let ans1=a>b;
console.log(ans1);
 let ans2=a<b;
console.log(ans2);
c=7
d="7"
console.log(c==d);
console.log(c===d);
if(a>b && a>d){
    console.log("a is greater");
}
if(b>a || b<d){
    console.log("b is greater");
}
if(d!=c){
    console.log("b is not equal to c");
}
//ternary operator
let result=(a>b)? "a is greater": "b is greater";
console.log(result);
