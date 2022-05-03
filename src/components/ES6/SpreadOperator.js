import React from 'react'

const SpreadOperator = () => {
    const myVehicle = {
        brand: 'Ford',
        model: 'Mustang',
        color: 'red'
      }
      
      const updateMyVehicle = {
        type: 'car',
        year: 2021, 
        color: 'yellow'
      }
      
      const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
      console.log(myUpdatedVehicle)
    return (
        <div>
            <h1>SpreadOperator</h1>
            Brand: {myUpdatedVehicle.brand}<br/>
            Model: {myUpdatedVehicle.model}<br/>
            Color: {myUpdatedVehicle.color}<br/>
            type: {myUpdatedVehicle.type}<br/>
            year: {myUpdatedVehicle.year}
        </div>
    )
}

export default SpreadOperator
