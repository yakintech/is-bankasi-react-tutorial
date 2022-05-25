import React from 'react'
import { useSelector } from 'react-redux'

function HomePage() {

  let todos = useSelector(state => state);

  return (<>{todos.length}</>
  )
}

export default HomePage



