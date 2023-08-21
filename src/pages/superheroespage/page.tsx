import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SuperHeroes = () => {
  const [isLoading, setIsLoading]  = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then((res) => {
      setData(res.data)
      setIsLoading(false)
    }, [])

    if (isLoading){
      return <div>Loading....</div>
    }
  })
  return (
    <>
      <h2> Super heroes Page</h2>
      {data.map((hero)=> {
        return <div>{hero.name}</div>
      })}
    </>
  )
}

export default SuperHeroes