import axios from 'axios'
import { error } from 'console'
import React, { useEffect, useState } from 'react'

const SuperHeroes = () => {
  const [isLoading, setIsLoading]  = useState(true)
  const [data, setData] = useState([]) as any
  const [error, setError]= useState('')

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes')
    .then((res) => {
      setData(res.data)
      setIsLoading(false);
      console.log(data)
    })
    .catch((error)=>{
      setError(error.message)
      setIsLoading(false)
    })

  }, [])

  if (isLoading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>{error}</div>
  }
  return (
    <div>
      <h2> Super heroes Page</h2>
      {data.map((hero:any)=> {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </div>
  )
}

export default SuperHeroes