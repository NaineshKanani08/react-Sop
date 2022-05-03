export const decrementCount = () =>{
    return{
        type:'DECREMENT_COUNT',
    }
}

export const incrementCount = () =>{
    return{
        type:'INCREMENT_COUNT',
    }
}

export const addData = (data) =>{
    return{
        type:'ADD_DATA',
        payload:{
            id:Math.floor(Math.random() * 100),
            data:data
        }
    }
}
export const deleteData = () =>{
    return{
        type:'DELETE_DATA',
    }
}
export const removeData = () =>{
    return{
        type:'REMOVE_DATA',
    }
}