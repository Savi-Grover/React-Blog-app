const NavBar = () => {
    return (  
     <nav className="navbar">
        <h1>My Blog</h1>
        <div className="links">
            < a href="/">Home</a>
            < a href ="/create"> New Blog</a>
            < a href ="/contact"> Contact Us</a>
        </div>
     </nav> 
    );
}
 
export default NavBar;