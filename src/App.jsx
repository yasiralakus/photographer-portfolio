import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function App() {

    const [openNav, setOpenNav] = useState(false);


    return (
        <div className="full-page">

            <header className="header">

                <div className="container">

                    <ul className="nav">
                        <li><NavLink to={'/'}>Anasayfa</NavLink></li>
                        <li><NavLink to={'/about'} >Hakkımda</NavLink></li>
                        <li><NavLink to={'/services'} >Hizmetler</NavLink></li>
                        <li><NavLink to={'/blog'} >Blog</NavLink></li>
                        <li><NavLink to={'/contact'} >İletişim</NavLink></li>
                    </ul>

                    <button onClick={() => (openNav === false ? setOpenNav(true) : setOpenNav(false))} id="hamburger"><i class="fa-solid fa-bars"></i></button>

                    {openNav === true && 
                        <ul className="mobile-nav">
                        <li><NavLink onClick={() => (setOpenNav(false))} to={'/'}>Anasayfa</NavLink></li>
                        <li><NavLink onClick={() => (setOpenNav(false))} to={'/about'} >Hakkımda</NavLink></li>
                        <li><NavLink onClick={() => (setOpenNav(false))} to={'/services'} >Hizmetler</NavLink></li>
                        <li><NavLink onClick={() => (setOpenNav(false))} to={'/blog'} >Blog</NavLink></li>
                        <li><NavLink onClick={() => (setOpenNav(false))} to={'/contact'} >İletişim</NavLink></li>
                        </ul>   
                    }

                    <div>
                        <ul>
                            <li><Link><i class="fa-brands fa-facebook-f"></i></Link></li>
                            <li><Link><i class="fa-brands fa-youtube"></i></Link></li>
                            <li><Link><i class="fa-brands fa-twitter"></i></Link></li>
                            <li><Link><i class="fa-brands fa-instagram"></i></Link></li>
                            <li><Link><i class="fa-brands fa-pinterest"></i></Link></li>
                        </ul>
                    </div>

                </div>

            </header>

            <main className="main">

                <div className="signature">
                    <div className="container">
                        <img src="./img/signature-white.png" alt="" />
                        <p><i class="fa-solid fa-minus"></i> Est. 1908 <i class="fa-solid fa-minus"></i></p>
                    </div>
                </div>

                <div className="page-content">
                    <div className="container">
                        <Outlet />
                    </div>
                </div>

            </main>

            <footer className="footer">

                <div className="container">

                    <p>© 2016, Killeen Theme.</p>
                    <p>design by <a href="https://www.weibergmedia.com/">weibergmedia </a>, coded by <a href="https://www.yasiralakus.com.tr">yasiralakus</a></p>

                </div>

            </footer>

        </div>
    )
}