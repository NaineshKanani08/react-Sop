const initState=0
const IncDecCount=(state=initState,action)=>{
    switch(action.type){
        case 'DECREMENT_COUNT':return state-1;
        case 'INCREMENT_COUNT':return state+1;
        default:return state
    }
}

export default IncDecCount;