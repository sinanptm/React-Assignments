import React from 'react'
import { Fragment } from 'react'
import { Link,useNavigate } from 'react-router-dom'

function ErrorPage() {
  const navigate = useNavigate()
  return (
    <>
      <h2>Not Found</h2>
      <Link onClick={()=>navigate(-1)}>Go Back</Link> <br />
      <Link to={'/'}>Home</Link> <br />
      <Link to={'/about'}>About</Link><br />
      <Link to={'/contact'}>Contact</Link>
    </>
  )
}

export default ErrorPage
