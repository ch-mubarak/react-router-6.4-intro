import React from 'react'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const ErrorPage = () => {
   const error= useRouteError()
  return (
    <>
    <MainNavigation />
    <main id='error-content'>
        <h1>An error occurred</h1>
        <p>{error.message}</p>
    </main>
    </>
  )
}

export default ErrorPage