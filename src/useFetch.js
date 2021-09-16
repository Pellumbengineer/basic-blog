import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // npx json-server --watch data/db.json --port 8000
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data from this resource!')
        }
        return res.json()
      })
      .then((data) => {
        setData(data)
        setIsLoading(false)
        setError(null)
      })
      .catch((err) => {
        setIsLoading(false)
        setError(err.message)
      })
  })

  return { data, isLoading, error }
}

export default useFetch
