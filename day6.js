var arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
//Q2.
console.log(arr[0]);
console.log(arr[arr.length-1]);
//Q3.
arr.push(6);
console.log(arr);
//Q4.
arr.pop();
console.log(arr);
//Q5
arr.shift();
console.log(arr);
//Q6.
arr.unshift(1);
console.log(arr);
//Q7.
const doubledarr=arr.map((item)=>item*2);
console.log(doubledarr);
//Q8.
const evenarr=arr.filter((item)=>item%2==0);
console.log(evenarr);
//Q9.
const sum=arr.reduce((acc,item)=>acc+item,0);
console.log(sum);
//Q10.
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
//Q11.
for (let i of arr)
{
    console.log(i);
}
//Q12
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);
//Q13.
for(let row of matrix)
{
    console.log(row);
}
//Q14.
for(let row of matrix)
{
    for(let element of row)
    {
        console.log(element);
    }
}
