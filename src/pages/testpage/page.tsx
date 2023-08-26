import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const newData = ()=>{
  return axios.get('http://localhost:4000/superheroes')
}
export default function TestAssignment() {
   const onSuccess = ()=>{
    console.log("Congrats, you just pulled the data successfully")
   }

   const onError = ()=>{
    console.log("You failed")
   }
  const {isLoading, data, isError, error, isFetching, refetch}:any = useQuery(['super-hero'], newData, 
  {
    refetchInterval: 3000,
  }
  )
  
  if(isLoading){
    return <h2>Loading...</h2>
   }

  return (
    <div>
        <h2>Testing the super heroes data</h2>
        {data?.data.map((hero:any)=>{
         return <div key={hero.name}>{hero.name}</div>
        })}
    </div>
  )
}
