import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <>
      <h2>Not Found</h2>
      <Link to={'/'}>Home</Link> <br />
      <Link to={'/about'}>About</Link><br />
      <Link to={'/contact'}>Contact</Link>
    </>
  )
}

export default ErrorPage
