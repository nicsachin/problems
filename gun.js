let  a = [1,2,3,4,5,6,7,8,9,10]

let flag = false
let kill = false
let i = 0
while(i<a.length)
{ 
    if(new Set(a).size == 2)
     {
         break
     }

 if(a[i]!=0 && kill == true)
 {
    a[i] =0 
     kill = false
 }
 else
 {
     if(a[i]!=0)
      {
           
           kill = true
           
      }
 }

 if(i+1 == a.length) 
   {    i=0}
   else{
       i++
   }

}

console.log('>>' , a)