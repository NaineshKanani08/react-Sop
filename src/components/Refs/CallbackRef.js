// import React, { Component } from 'react';

// export default class CallbackRef extends Component {
//     constructor(props) {
//         super(props);
//         this.inputs = [];
//     }

//     render() {
//         return [0, 1, 2, 3].map((key, index) => (
//             <input 
//                 key={key} 
//                 ref={input => this.inputs[index] = input}
//             />)
//         );
//     }
// }


import React, { Component } from 'react';

export default class CallbackRef extends Component {
constructor() {
    super();
    this.textInput=null
    this.inputRef=el=>{
        this.textInput=el
        console.log("call..")
    }  
}
componentDidMount(){
    console.log("Callback..",this.textInput)
    
    this.textInput.value="Callback Ref" 
}
render() {
    return <>
        <h1>Using Callback Ref</h1> 
        <input type="text" ref={this.inputRef}/>
        {/* <button onClick={()=>}></button> */}
    </>
  }
}
