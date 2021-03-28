import React from 'react';

function Header() {
    return (
        <header className="position-sticky">
            <div className="container">
                <nav class="navbar">
                    <div class="container-fluid">
                        <a class="navbar-brand"><h1>Keeper</h1></a>                       
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;