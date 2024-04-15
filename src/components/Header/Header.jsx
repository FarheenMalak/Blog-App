import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Container>
        <header className='shadow bg-white w-full'>
          <nav className='flex items-center justify-between px-6'> {/* Changed to justify-between */}
            <div>
              <Link to='/'>
                <Logo width='70px' />
              </Link>
            </div>
            <div className='md:hidden'>
              <button className='float-right' onClick={toggleMenu}>
                {menuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
              </button>
            </div>
            {menuOpen ? (
              <div className="block md:hidden">
                <ul className={`flex flex-col sm:text-sm text-xl text-darkGreen`}>
                  {navItems.map((item) => (
                    item.active && (
                      <li key={item.name}>
                        <button
                          onClick={() => navigate(item.slug)}
                          className='block px-6 py-2 duration-200 md:hover:bg-customGreen rounded-full'
                        >
                          {item.name}
                        </button>
                      </li>
                    )
                  ))}
                  {authStatus && (
                    <li>
                      <LogoutBtn />
                    </li>
                  )}
                </ul>
              </div>
            ) : (
              <ul className={`flex ml-auto text-xl text-darkGreen md:flex hidden`}>
                {navItems.map((item) => (
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className='inline-block px-6 py-2 duration-200 md:hover:bg-customGreen rounded-full'
                      >
                        {item.name}
                      </button>
                    </li>
                  )
                ))}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            )}
          </nav>
        </header>
      </Container>
    </div>
  );
};

export default Header;


