
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/" className='menu_color'>Home</Link>
        <Link to="/posts" className='menu_color'>Blog</Link>
        <Link to="/about" className='menu_color'>About</Link>
      </header>

      <main className='container'>
      <Outlet />
      </main>
      
      <footer>2022</footer>
    </>
  )
}

export {Layout};