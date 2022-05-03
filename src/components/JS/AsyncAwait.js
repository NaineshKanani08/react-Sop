import React from 'react';

const AsyncAwait = () => {
    const asyncAwait=async()=>{
        try{
            const result= await fetch('https://jsonplaceholder.typicode.com/comments')
        const data= await result.json()
        // console.log(data)
        return data.slice(0,10)

        }
        catch(err){console.log('error:',err)}
    }
    let asyncAwaitData=asyncAwait()


//     function printData(res){
//         const mapData=res.map(value=>value.body)                  //print the title on console
//         console.log(mapData)
//     }
//    asyncAwaitData.then(res=>printData(res))  
   
    asyncAwaitData.then(res=>console.log(res))       
  return <div>
      <h1>AsyncAwait</h1>

  </div>;
};

export default AsyncAwait;
