import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'


const fetchSuperHeroes = ()=>{
  return axios.get('http://localhost:4000/superheroes');
}
export default function RQSuperHeroes() {
  const {isLoading, data, isError, error, isFetching,
  }:any = useQuery(['super-heroes'], fetchSuperHeroes,
  
  {
    staleTime: 30000
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
    {data?.data.map((hero:any) =>{
        return <div key={hero.name}>{hero.name}</div>
      })
    }
    </>
  )
}
