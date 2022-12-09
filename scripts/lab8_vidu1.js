// JavaScript Document
var a=[1,2,3,4,5,6,7,8,9,10];
var s=0;
var b=[2,4,6,8,10];
var tong=0;
document.write("Các phần tử traong mảng gồm có: ");
for(i=0;i<a.length;i++)
{
	s=s+a[i];
	document.write(a[i]+ " ");
}
document.write("<br/>");
document.write("Tổng các phẩn tử trong mảng là " + s);

document.write("<br/>");
document.writeln("Các phân trong mang 2 la: ");
for(i=0;i<b.length;i++){
	document.write(b[i] + " ")
}