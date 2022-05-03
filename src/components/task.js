//  const calc={
//     add: function add(val){
//         console.log("add",val)
//     },
//     subtract: function subtract(val){
//         let sunNum=20
//         console.log('sub',sunNum-val)
//     },
//     multiple: function multiple(val){
//         let mulNum=2
//         console.log('sub',mulNum*val)
//     },
//     divide: function divide(val){
//         let divNum=2
//         console.log('sub',val/divNum)
//     }
// }




// const calc={
//     add: function add(val){
//         console.log("add",val)={
//         subtract: function subtract(val){
//         let subResult=addVal-subVal
//         console.log('sub',subResult)
//         }
//     }
// }
// }

// const calc={
//     add: function add(addVal){ 
//         // console.log('add',addVal) 
//         return{
//             subtract: function subtract(subVal){
//                 let subResult=addVal-subVal
//                     // console.log('sub',subResult)
//                     return{
//                         multiple: function multiple(mulVal){
//                             let mulResult=subResult*mulVal
//                                 // console.log('mul',mulResult)
//                                 return{
//                                     div: function div(divVal){
//                                         let divResult= mulResult/divVal
//                                         console.log('div',divResult)
//                                     }
//                                 }  
//                             }
//                 }
//             }
//         }

//     }
// }
// calc.add(29).subtract(20).multiple(30).div(3)


// let count=0;
//   let calc={
//     add:function add(add){
//       count=count+add;
//       return calc
//       },
//    subtract:function subtract(sub){
//         count=count-sub;
//         return calc;	
//     },
//     multiple: function multiply(mul){
//       count=count*mul;
//       return calc;
//     },
//     div: function div(div){
//       count=count/div;
//       return count;
//     }  
// }
// calc.add(29).subtract(20).multiple(30).div(3)


// const calc={
//     subtract: function subtract(subVal){
//         let subResult=subVal
//             // console.log('sub',subResult)
//             return{
//                 multiple: function multiple(mulVal){
//                     let mulResult=subResult*mulVal
//                         // console.log('mul',mulResult)
//                         return{
//                             div: function div(divVal){
//                                 let divResult= mulResult/divVal
//                                 console.log('div',divResult)
//                             }
//                         }  
//                     }
//         }
//     }
// }
// calc.subtract(20).multiple(30).div(40)


// const calc={
//     add:function add(addVal){
//         return this.subtract
        
// }
// subtract:function subtract(subVal){
//     return  this.addVal-subVal
// }
// }
// console.log(calc.add(10).subtract(5))



const calc={
    initValue:0,
    add: function add(addVal){
        this.initValue=addVal;
        return this
    },
    subtract: function subtract(subVal){
        this.initValue!=0?this.initValue=this.initValue-subVal:this.initValue=subVal
        return this
    },
    multiple: function multiple(mulVal){
        this.initValue!=0?this.initValue=this.initValue*mulVal:this.initValue=mulVal
        return this
    },
    divide: function divide(divVal){
        this.initValue!=0?this.initValue=this.initValue/divVal:this.initValue=divVal
        return this.initValue
    }
}
console.log(calc.subtract(20).multiple(30).divide(3))



// 2nd Task

// const sum=(a)=>{
//     return (b)=>{
//         return (c)=>{
//             return (d)=>{
//                 return ()=>{
//                     return (a+b+c+d)
//                 }

//             }
//         }
//         }
//     }
// console.log(sum(2)(3)(4)(5)())



const sum=(a)=>{
    return (b)=>{
        if(b){
            console.log(`a:${a},b:${b}`)
            return sum(a+b)
        }
        return a
    }
}

const total=sum(2)(3)(4)(5)()
console.log(total)



// const sum=(a)=>{
//     return (b)=>{
//             console.log(`a:${a},b:${b}`)
//             return sum(a+b)
//         }
//         return a
//     }

// const total=sum(2)(3)(4)(5)
// console.log(total)

// const calc={

// add:function add(add){
//     return add
// }
// substract: function substract(sub){
    
// }
// }

// calc.add(29).subtract(20).multiple(30).div(3)


const temp1=[]





  const arr=[
    [2,3],
    [4,5],
    [6,7],
    [8,9]
]


const newArr=arr3.reduce((acc,cur)=>{
    return acc.concat(cur);
},[])
console.log(newArr)

const arr2 = [
    [2, 3],
    [4, 5],
    [6, 7,[2,3]],
    [8, 9],
  ];
  console.log(arr2.flat(2))
  const arr3 = [
    [2, 3],
    [4, 5],
    [6, 7,[2,4,[7,9,[10,11]],4,2],[5,6]],
    [8, 9],
  ];

  const arr = [
    [2, 3],
    [4, 5],
    [6, 7,[2,4,[7,9,[10,11,[3,4]]],4,2],[5,6]],
    [8, 9],
  ];

const temp=[]
let ans =arr.toString().split(',')
for(let i=0; i<ans.length; i++)
{   
   temp.push(+ans[i]) 
}
console.log(temp)