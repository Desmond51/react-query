import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SuperHeroes = () => {
  const [isLoading, setIsLoading]  = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then(response => {
      setData(response.data)
      setIsLoading(false);
    });

  }, [])
  if (isLoading){
    return <div>Loading....</div>
  }
  return (
    <div>
      <h2> Super heroes Page</h2>
      {data.map((hero)=> {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </div>
  )
}

export default SuperHeroes