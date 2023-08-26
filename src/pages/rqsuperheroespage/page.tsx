import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'


const fetchSuperHeroes = ()=>{
  return axios.get('http://localhost:4000/superheroes');
}
export default function RQSuperHeroes() {

  const onSuccess= (data:[])=>{
    console.log("Perform side effect after fetching data")
  }
  const onError = ()=>{
    console.log("Perform side effect after  encountering error")
  }

  const {isLoading, data, isError, error, isFetching, refetch
  }:any = useQuery(['super-heroes'], fetchSuperHeroes,
  
  {
    onSuccess,
    onError

  })
  console.log({error, isFetching})
  if(isLoading){
    return <div> Loading....</div>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
  return (
    <>
    <h1>RQ Super Heroes Page</h1>
    <button className='bg-blue-600 p-3 rounded-lg' onClick={refetch}>Fetch Data</button>
    {data?.data.map((hero:any) =>{
        return <div key={hero.name}>{hero.name}</div>
      })
    }
    </>
  )
}
