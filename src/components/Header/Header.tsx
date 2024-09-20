import './Header.css'


function Header() {
    return ( <>
    <div className='header'>
            <div className='header-left'>
                <div className='logo'>
                    <div className='logo-left'>IT</div>
                    <div className='logo-right'>
                        <div className='logo-right_up'>SUPPORT</div>
                        <div className='logo-right_down'>GROUP</div>
                    </div>
                </div>
            </div>
            <div className='header-right'>
                <nav className='header-navigation'>
                    <button className='header-navigation_button'>about</button>
                    <button className='header-navigation_button'>our services</button>
                    <button className='header-navigation_button'>job opening</button>
                </nav>
                <div className='header-contact'>
                    <button className='header-contact_button'>CONTACT US</button>
                </div>
            </div>
        </div>
    
    </> );
}

export default Header;