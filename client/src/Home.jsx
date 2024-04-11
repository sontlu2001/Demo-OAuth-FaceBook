import { useEffect, useState } from 'react';
import viteLogo from '/vite.svg'
import Cookies from 'js-cookie';


function Home() {
 const [profile, setProfile] = useState(null);

  useEffect(() => {
    const profileCookie = Cookies.get('profile');
    if (profileCookie) {
      console.log(JSON.parse(profileCookie));
      setProfile(JSON.parse(profileCookie));
    }
  }, []);

   const handleLoginWithFacebook = () => {
    window.location.href = 'http://localhost:4000/auth/facebook';
  }
   const handleLogout = ()=> {
    Cookies.remove('profile');
    window.location.href = '/';
   }

  return (
    <>
      <div>
      <h2>OAuth with Facebook</h2>
        <div>
          <img src={viteLogo} className='logo' alt='Vite logo' />
          
        </div>
      </div>
      <div>
        {profile ? (
          <div>
            <p>Xin chào, {profile.displayName}</p>
            <button onClick={handleLogout}>Logout</button>
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
