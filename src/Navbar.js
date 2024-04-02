const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The amirblog </h1>
            <div className="links">
                <a href="/" style={{
                    fontSize : "15px"
                }}>Home </a>
                <a href="/create" style={{
                    fontSize : "15px"
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;