// 22. Write a program which tells the number of days in a month.
const months=["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
const m=1
const year=2010;
const data=new Date(year,m+1,0);
console.log(data.getDate());