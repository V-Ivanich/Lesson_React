
import './Layout.css';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  let image = 'favicon.ico';
  return (
    <>
      <header>
        <div className='logotip'>
        <img src={image} alt='logo' height={'50px'}/>
        </div>
        <div className='heder__menu'>
        <Link to="/" className='menu_color'>Home</Link>
        <Link to="/posts" className='menu_color'>Blog</Link>
        <Link to="/about" className='menu_color'>About</Link>
        </div>
      </header>

      <main className='container'>
      <Outlet />
      </main>
      
      <footer>2022</footer>
    </>
  )
}

export {Layout};