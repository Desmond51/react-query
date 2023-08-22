import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeroes = ()=>{
  return axios.get('http://localhost:4000/superheroes1');
}
export default function RQSuperHeroes() {
  const {isLoading, data, isError, error} = useQuery('super-heroes',fetchSuperHeroes)
 
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
