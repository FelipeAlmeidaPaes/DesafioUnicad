import React from 'react'
    import { Link } from 'react-router-dom'

    const Header = () => (
      <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>Home</Link>
          <br />
          <Link className="teste" to="/create">Create</Link>
        </div>
      </nav>
    )

    export default Header
