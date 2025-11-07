import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Heart, User, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Update counts on mount and storage changes
    const updateCounts = () => {
      setCartCount(parseInt(localStorage.getItem("cartCount") || "0"));
      setWishlistCount(parseInt(localStorage.getItem("wishlistCount") || "0"));
    };
    
    updateCounts();
    window.addEventListener("storage", updateCounts);
    return () => window.removeEventListener("storage", updateCounts);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };
    
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-card shadow-elegant" : "bg-card/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="text-3xl font-serif font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SareeVastra
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-foreground/80 hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all ${
                    location.pathname === link.path ? "text-primary after:w-full" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Search className="h-5 w-5" />
              </Button>

              <Link to="/wishlist">
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="h-5 w-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                      {wishlistCount}
                    </span>
                  )}
                </Button>
              </Link>

              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>

              {user ? (
                <Link to="/account" className="hidden md:block">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="hidden md:flex bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:shadow-gold"
                >
                  Login
                </Button>
              )}

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-lg shadow-elegant border-t border-border animate-slide-in-right">
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-3 mb-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-6 py-3 text-lg font-semibold rounded-xl transition-all ${
                        location.pathname === link.path 
                          ? "bg-gradient-to-r from-primary/20 to-primary-glow/20 text-primary border-l-4 border-primary" 
                          : "text-foreground/80 hover:bg-muted hover:text-primary hover:translate-x-2"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                
                <div className="border-t border-border/50 pt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/wishlist" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full h-14 text-base border-2 hover:border-primary hover:bg-primary/5">
                        <Heart className="h-5 w-5 mr-2" />
                        Wishlist
                        <span className="ml-auto bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                          {wishlistCount}
                        </span>
                      </Button>
                    </Link>
                    <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full h-14 text-base border-2 hover:border-primary hover:bg-primary/5">
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Cart
                        <span className="ml-auto bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                          {cartCount}
                        </span>
                      </Button>
                    </Link>
                  </div>
                  
                  {user ? (
                    <Link to="/account" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full h-14 text-lg bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground shadow-elegant hover:shadow-rosegold">
                        <User className="h-5 w-5 mr-2" />
                        My Account
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      onClick={() => {
                        setIsLoginModalOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full h-14 text-lg bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground shadow-elegant hover:shadow-rosegold"
                    >
                      Login / Sign Up
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={(userData) => setUser(userData)}
      />
    </>
  );
};

export default Navbar;
