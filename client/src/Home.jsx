import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'

const getOauthGoogleUrl = () => {
  const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_AUTHORIZED_REDIRECT_URI } =
    import.meta.env
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
  const options = {
    redirect_uri: VITE_GOOGLE_AUTHORIZED_REDIRECT_URI,
    client_id: VITE_GOOGLE_CLIENT_ID,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ].join(' ')
  }
  const qs = new URLSearchParams(options)
  return `${rootUrl}?${qs.toString()}`
}

function Home() {
  const isAuthenticated = Boolean(localStorage.getItem('access_token'))
  const logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    window.location.reload()
  }
   const handleLoginWithFacebook = () => {
    window.location.href = 'http://localhost:4000/auth/facebook';
  }
   

  return (
    <>
      <div>
        <div>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </div>
      
      </div>
      <h1>OAuth Facebook</h1>
      <div>
        {isAuthenticated ? (
          <div>
            <p>Xin chào, bạn đã login thành công</p>
            <button onClick={logout}>Click để logout</button>
          </div>
        ) : (
          <button onClick={handleLoginWithFacebook}>Login with Facebook</button>
          // <div class="fb-login-button" data-width="200" data-size="" data-button-type="" data-layout="" data-auto-logout-link="false" data-use-continue-as="false"></div>
        )}
      </div>
    </>
  )
}

export default Home
