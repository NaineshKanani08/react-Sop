const initState={
    list:[]
}
const productReducer=(state=initState,action)=>{
    switch(action.type){
        case 'ADD_DATA':
        const {id,data}=action.payload;
        return {
            ...state,
            list:[
                ...state.list,
                {id:id,data:data
            }]
        }

        default:return state;
    }

}
export default productReducer