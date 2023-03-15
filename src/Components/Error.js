import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const Obj = useRouteError()
  console.log(Obj);
  return (
    <div>
      Error Page
      <p>{Obj.error.message}</p>
    </div>
  )
}

export default ErrorPage
