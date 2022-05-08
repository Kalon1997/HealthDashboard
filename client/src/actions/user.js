import axios from "axios";

export const registerAction = (username, email, password) => async (dispatch) => {
    try {
        //request
        dispatch({
            type: "RegisterRequest"
        })
        //success
        // {withCredentials: true}
        axios.defaults.withCredentials = true
        const { data } = await axios.post(
            "/api/v1/register",
            { username, email, password },
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          dispatch({
            type:"RegisterSuccess",
            payload: data.user
          })
    } catch (error) {
      dispatch({
        type: "RegisterFailure",
        payload: error.response.data.message
      })
    }
}



export const loginAction = (email, password) => async (dispatch) => {
  try {
      //request
      dispatch({
          type: "LoginRequest"
      })
      //success
      // {withCredentials: true}
      axios.defaults.withCredentials = true
      const { data } = await axios.post(
          "/api/v1/login",
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"LoginSuccess",
          payload: data.user,
          payloadUsername: data.user.username,
        })
        window.location.assign('/')
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message
    })
  }
}

export const loadUserAction = () => async (dispatch) => {
    try {
        //request
        dispatch({
            type: "LoadUserRequest"
        })
        //success
        // {withCredentials: true}
        axios.defaults.withCredentials = true
        const { data } = await axios.get(
            "/api/v1/myProfile",
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          dispatch({
            type:"LoadUserSuccess",
            payload: data.user
          })
    } catch (error) {
      dispatch({
        type: "LoadUserFailure",
        payload: error.response.data.message
      })
    }
  }
  
  export const logoutAction = () => async (dispatch) => {
    try {
        //request
        dispatch({
            type: "LogoutRequest"
        })
        //success
        // {withCredentials: true}
        axios.defaults.withCredentials = true
        await axios.get(
            "/api/v1/logout",
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          dispatch({
            type:"LogoutSuccess",
          })
    } catch (error) {
      dispatch({
        type: "LogoutFailure",
        payload: error.response.data.message
      })
    }
  }


  export const openPortalAction = () => (dispatch) => {
    try {
        dispatch({
            type: "PortalOpen"
        })

    } catch (error) {
      dispatch({
        type: "PortalClose"
      })
    }
}

export const closePortalAction = () => (dispatch) => {
    try {
        //request
        dispatch({
            type: "PortalClose"
        })

    } catch (error) {
      dispatch({
        type: "PortalOpen"
      })
    }
}

export const loginModeOnAction = () => (dispatch) => {
    try {
        //request
        dispatch({
            type: "LoginModeOn"
        })

    } catch (error) {
      dispatch({
        type: "RegisterModeOn"
      })
    }
}



export const registerModeOnAction = () => (dispatch) => {
  try {
      //request
      dispatch({
          type: "RegisterModeOn"
      })

  } catch (error) {
    dispatch({
      type: "LoginModeOn"
    })
  }
}


export const showDashboardAction = () => (dispatch) => {
  try {
      //request
      dispatch({
          type: "DashboardOn"
      })

  } catch (error) {
    dispatch({
      type: "DashboardOff"
    })
  }
}

export const showFormAction = () => (dispatch) => {
  try {
      //request
      dispatch({
          type: "DashboardOff"
      })

  } catch (error) {
    dispatch({
      type: "DashboardOn"
    })
  }
}
