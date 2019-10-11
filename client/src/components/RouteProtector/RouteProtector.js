import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { getUser } from '../../redux/actions/user'

const RouteProtector = ({ children, setUserName }) => {

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)
  const setUserLoggedIn = (name) => {
    setUserName(name)
    setLoggedIn(true)
  }

  useEffect(() => {

    getUser((name, err) => {
      setLoading(false)
      if (err) return setError(true)
      else setUserLoggedIn(name)
    })
  }, [])

  if (loggedIn) {
    return children
  }


  if (loading) return <div>loading</div>
  if (error) {
    return <Redirect to="/" />
  }
  return <div>loading</div>


}


const mapStateToProps = (state) => {
  return {
    // isLoggedIn: state.user.isLoggedIn,
    requested: state.user.requested
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserName: (name) => dispatch({ type: 'SET_USER_NAME', name })
})

export default connect(null, mapDispatchToProps)(RouteProtector)