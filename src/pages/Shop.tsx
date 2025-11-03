import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import sareesilk from "@/assets/saree-silk-1.jpg";
import sareecotton from "@/assets/saree-cotton-1.jpg";
import sareedesigner from "@/assets/saree-designer-1.jpg";
import sareebanarasi from "@/assets/saree-banarasi-1.jpg";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFabric, setSelectedFabric] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");

  const products = [
    { id: 1, name: "Royal Maroon Silk Saree", price: 8999, fabric: "silk", image: sareesilk },
    { id: 2, name: "Elegant Cotton Saree", price: 2499, fabric: "cotton", image: sareecotton },
    { id: 3, name: "Designer Blue Gold Saree", price: 12999, fabric: "designer", image: sareedesigner },
    { id: 4, name: "Banarasi Green Saree", price: 15999, fabric: "banarasi", image: sareebanarasi },
    { id: 5, name: "Premium Silk Saree", price: 9999, fabric: "silk", image: sareesilk },
    { id: 6, name: "Handloom Cotton Saree", price: 1999, fabric: "cotton", image: sareecotton },
  ];

  const handleAddToCart = (productName: string) => {
    const user = localStorage.getItem("user");
    if (!user) {
      toast.error("Please log in to add items to cart");
      return;
    }
    const count = parseInt(localStorage.getItem("cartCount") || "0");
    localStorage.setItem("cartCount", (count + 1).toString());
    toast.success(`${productName} added to cart!`);
    window.dispatchEvent(new Event("storage"));
  };

  const handleAddToWishlist = (productName: string) => {
    const user = localStorage.getItem("user");
    if (!user) {
      toast.error("Please log in to add items to wishlist");
      return;
    }
    const count = parseInt(localStorage.getItem("wishlistCount") || "0");
    localStorage.setItem("wishlistCount", (count + 1).toString());
    toast.success(`${productName} added to wishlist!`);
    window.dispatchEvent(new Event("storage"));
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFabric = selectedFabric === "all" || product.fabric === selectedFabric;
    const matchesPrice =
      selectedPrice === "all" ||
      (selectedPrice === "under5k" && product.price < 5000) ||
      (selectedPrice === "5k-10k" && product.price >= 5000 && product.price <= 10000) ||
      (selectedPrice === "above10k" && product.price > 10000);
    return matchesSearch && matchesFabric && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-serif font-bold mb-4">
            Our <span className="text-primary">Collection</span>
          </h1>
          <div className="divider-ethnic"></div>
          <p className="text-muted-foreground text-lg">
            Discover elegance in every thread
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-slide-up">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search sarees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <Select value={selectedFabric} onValueChange={setSelectedFabric}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Fabric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Fabrics</SelectItem>
              <SelectItem value="silk">Silk</SelectItem>
              <SelectItem value="cotton">Cotton</SelectItem>
              <SelectItem value="designer">Designer</SelectItem>
              <SelectItem value="banarasi">Banarasi</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedPrice} onValueChange={setSelectedPrice}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="under5k">Under ₹5,000</SelectItem>
              <SelectItem value="5k-10k">₹5,000 - ₹10,000</SelectItem>
              <SelectItem value="above10k">Above ₹10,000</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className="product-card animate-scale-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-96 overflow-hidden group">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full shadow-lg hover-lift"
                    onClick={() => handleAddToWishlist(product.name)}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full shadow-lg hover-lift"
                    onClick={() => handleAddToCart(product.name)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-2xl font-bold text-primary mb-3">
                  ₹{product.price.toLocaleString()}
                </p>
                <Link to={`/product/${product.id}`}>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No sarees found matching your criteria. Try adjusting the filters.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
