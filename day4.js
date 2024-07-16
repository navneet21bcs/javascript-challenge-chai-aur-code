for(let i=1;i<=10;i++)
{
    console.log(i);
}
for(let i=1;i<=10;i++)
{
    console.log(i*5);
}
let i=1,sum=0;
while(i<=10)
{
    sum=sum+i;
    console.log(sum);
    i++;
}
let j=10;
while(j>=1)
{
    console.log(j);
    j--;
}
let k=1;
do{
    console.log(k);
    k++;
}
while(k<=10);
let a=8;
let factorial=1;
do {
    
     factorial=factorial*a;
    a--;
}while(a>=1)
console.log(factorial);
for (let i = 0; i < 5; i++) {
    let line = "";
    for (let j = 0; j < 5; j++) { 
        if (j <= i) {
            line += "*";
        } else {
            line += " ";
        }
    }
    console.log(line);
}
