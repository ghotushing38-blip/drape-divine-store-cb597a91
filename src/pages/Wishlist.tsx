import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import sareesilk from "@/assets/saree-silk-1.jpg";
import sareecotton from "@/assets/saree-cotton-1.jpg";

const Wishlist = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/");
      toast.error("Please log in to view your wishlist");
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [navigate]);

  const wishlistItems = [
    {
      id: 1,
      name: "Royal Maroon Silk Saree",
      price: 8999,
      image: sareesilk,
    },
    {
      id: 2,
      name: "Elegant Cotton Saree",
      price: 2499,
      image: sareecotton,
    },
  ];

  const handleAddToCart = (productName: string) => {
    const count = parseInt(localStorage.getItem("cartCount") || "0");
    localStorage.setItem("cartCount", (count + 1).toString());
    toast.success(`${productName} added to cart!`);
    window.dispatchEvent(new Event("storage"));
  };

  const handleRemove = (productName: string) => {
    const count = parseInt(localStorage.getItem("wishlistCount") || "0");
    if (count > 0) {
      localStorage.setItem("wishlistCount", (count - 1).toString());
      toast.success(`${productName} removed from wishlist`);
      window.dispatchEvent(new Event("storage"));
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-serif font-bold mb-4">
            Your <span className="text-primary">Wishlist</span>
          </h1>
          <div className="divider-ethnic"></div>
          <p className="text-muted-foreground text-lg">
            {wishlistItems.length} item{wishlistItems.length !== 1 ? "s" : ""} saved for later
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map((item, idx) => (
              <div
                key={item.id}
                className="product-card animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-96 overflow-hidden group">
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>
                  <Button
                    size="icon"
                    variant="destructive"
                    className="absolute top-4 right-4 rounded-full shadow-lg hover-lift"
                    onClick={() => handleRemove(item.name)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-4">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-2xl font-bold text-primary mb-3">
                    ₹{item.price.toLocaleString()}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground"
                      onClick={() => handleAddToCart(item.name)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Link to={`/product/${item.id}`}>
                      <Button variant="outline">View</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <Heart className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
            <h2 className="text-3xl font-serif font-bold mb-4">Your Wishlist is Empty</h2>
            <p className="text-muted-foreground mb-8">
              Start adding sarees you love to your wishlist
            </p>
            <Link to="/shop">
              <Button className="btn-hero">
                Explore Collection
              </Button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
