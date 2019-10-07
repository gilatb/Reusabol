import React from "react";
import ReactModalLogin from "react-modal-login";
import './Login.css'
 
import { facebookConfig, googleConfig } from "./social-config";
 
class Login extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      showModal: false,
      loading: false,
      error: null,
      isAuthenticated: false,

    };
  }

  componentDidMount() {
    const accessToken = localStorage.getItem('accessToken')
    // console.log('accessToken: ', accessToken);
    if(accessToken) {
      this.setState({
        isAuthenticated: true,
      }) 
    }
  }
 
  openModal() {
    this.setState({
      showModal: true
    });
  }
 
  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }
 
  onLoginSuccess(method, response) {
    let accessToken;
    if(method === 'facebook') {
      accessToken = response.authResponse.accessToken
    } 
    if(method === 'google') {
      accessToken = response.access_token
    }
    console.log("logged successfully with " + method);
    console.log('response: ', response);
    localStorage.setItem('accessToken', accessToken)
    this.setState({
      loading: false,
      isAuthenticated: true,
      showModal: false,
    })
  }
 
  onLoginFail(method, response) {
    console.log("logging failed with " + method);
    console.log('response: ', response);
    this.setState({
      error: response,
      loading: false, 
    });
  }
 
  startLoading() {
    this.setState({
      loading: true
    });
  }
 
  finishLoading() {
    this.setState({
      loading: false
    });
  }
 
  afterTabsChange() {
    this.setState({
      error: null
    });
  }
 
  render() {
    console.log('this.state.isAuthenticated: ', this.state.isAuthenticated);
    return (
      <div>
        <button onClick={() => this.openModal()}>Continue as User</button>

        <button onClick={() => this.openModal()}>Continue as Restaurant</button>
 
        <ReactModalLogin
          visible={this.state.showModal}
          onCloseModal={this.closeModal.bind(this)}
          loading={this.state.loading}
          error={this.state.error}
          tabs={{
            afterChange: this.afterTabsChange.bind(this)
          }}
          loginError={{
            label: "Couldn't sign in, please try again."
          }}
          registerError={{
            label: "Couldn't sign up, please try again."
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
          providers={{
            facebook: {
              config: facebookConfig,
              onLoginSuccess: this.onLoginSuccess.bind(this),
              onLoginFail: this.onLoginFail.bind(this),
              label: "Continue with Facebook"
            },
            google: {
              config: googleConfig,
              onLoginSuccess: this.onLoginSuccess.bind(this),
              onLoginFail: this.onLoginFail.bind(this),
              label: "Continue with Google"
            }
          }}
        />
      </div>
    );
  }
}

export default Login;