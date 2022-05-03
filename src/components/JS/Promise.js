import React from 'react';

const Promises = () => {
    const [datas,setDatas]= React.useState([{name:"om",age:21},{name:"jay",age:25}])
    const mapData=datas.map((data,index)=>{return(
        <li key={index}>Name:{data.name} | age:{data.age}</li>
    )})
    
    const promise=new Promise(function(resolve,reject){
        console.log("pending...")
        setTimeout(()=>{
            if(mapData.length >0){
                resolve("success..")
            }
            else{
                reject("No data..")
            }  
        },1000)
        })

        //all() vs any() vs race()
    // const promise1=new Promise(function(resolve,reject){
    //     console.log("pending...")
    //     setTimeout(()=>{
    //         if(mapData.length >0){
    //             resolve("success..1")
    //         }
    //         else{
    //             reject("No data..1")
    //         }  
    //     },2000)
    //     })
        
    //     const promise2=new Promise(function(resolve,reject){
    //         console.log("pending...")
    //         setTimeout(()=>{
    //             if(mapData.length <0){
    //                 resolve("success..2")
    //             }
    //             else{
    //                 reject("No data..2")
    //             }  
    //         },2000)
    //         })

    //         const promise3=new Promise(function(resolve,reject){
    //             console.log("pending...")
    //             setTimeout(()=>{
    //                 if(mapData.length <0){
    //                     resolve("success..2")
    //                 }
    //                 else{
    //                     reject("No data..3")
    //                 }  
    //             },2000)
    //             })

    const onSuccess= (results)=>{
        console.log(results)
    }
    const onReject= (err)=>{
        console.log(err)
    }
    
    // const promise=[promise1,promise2,promise3]
    // Promise.all (promise).then(onSuccess).catch(onReject)
    promise.then(onSuccess).catch(onReject)
  return <div>
      <h1>Promise</h1>
      <p>{mapData}</p>
  </div>;
}
export default Promises;

