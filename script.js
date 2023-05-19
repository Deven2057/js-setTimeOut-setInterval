document.write("i am..")

const sum =(a,b,c) =>{
  console.log("yes i am running.. "+ (a+b+c))
}
setTimeout(sum, 2000,1,1,1)

let a=setTimeout(function(){
  alert("deven")
},3000)
console.log(a)
let b=prompt("do you want")
if(b=="n"){
  clearTimeout(a)
}

