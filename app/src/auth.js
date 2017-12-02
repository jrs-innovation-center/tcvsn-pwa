// @format
import auth0 from 'auth0-js'
import history from './history'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'vet-support.auth0.com',
    clientID: 'u5XLNl1BCq8j7Z1wqxHkdMAi2vn0b3wC',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https',
    responseType: 'token id_token',
    scope: 'openid'
  })

  login() {
    this.auth0.authorize()
  }

  constructor() {
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        history.replace('/')
      } else if (err) {
        history.replace('/')
        console.log(err)
      }
    })
  }
  setSession(authResult) {
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    history.replace('/')
  }

  logout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    history.replace('/')
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}
