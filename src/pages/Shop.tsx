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
import modelSilkMaroon from "@/assets/model-silk-maroon.jpg";
import modelCottonPink from "@/assets/model-cotton-pink.jpg";
import modelDesignerBlue from "@/assets/model-designer-blue.jpg";
import modelBanarasiGreen from "@/assets/model-banarasi-green.jpg";
import modelKanjivaramRed from "@/assets/model-kanjivaram-red.jpg";
import modelCottonCream from "@/assets/model-cotton-cream.jpg";
import modelChanderiPeach from "@/assets/model-chanderi-peach.jpg";
import modelGeorgetteCoral from "@/assets/model-georgette-coral.jpg";
import modelBridalRed from "@/assets/model-bridal-red.jpg";
import modelTussarYellow from "@/assets/model-tussar-yellow.jpg";
import modelLinenGreen from "@/assets/model-linen-green.jpg";
import modelEmbroideredPurple from "@/assets/model-embroidered-purple.jpg";
import modelBrocadeNavy from "@/assets/model-brocade-navy.jpg";
import modelPatolaBlue from "@/assets/model-patola-blue.jpg";
import modelOrganzaLavender from "@/assets/model-organza-lavender.jpg";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFabric, setSelectedFabric] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedOccasion, setSelectedOccasion] = useState("all");

  const products = [
    { id: 1, name: "Royal Maroon Silk Saree", price: 8999, fabric: "silk", occasion: "wedding", image: modelSilkMaroon },
    { id: 2, name: "Elegant Cotton Saree in Pink", price: 2499, fabric: "cotton", occasion: "casual", image: modelCottonPink },
    { id: 3, name: "Designer Blue Gold Saree", price: 12999, fabric: "designer", occasion: "party", image: modelDesignerBlue },
    { id: 4, name: "Banarasi Green Silk Saree", price: 15999, fabric: "banarasi", occasion: "wedding", image: modelBanarasiGreen },
    { id: 5, name: "Premium Kanjivaram Wine Silk", price: 18999, fabric: "silk", occasion: "wedding", image: modelKanjivaramRed },
    { id: 6, name: "Handloom Cotton Cream Saree", price: 1999, fabric: "cotton", occasion: "casual", image: modelCottonCream },
    { id: 7, name: "Chanderi Peach Cotton Saree", price: 3499, fabric: "cotton", occasion: "office", image: modelChanderiPeach },
    { id: 8, name: "Georgette Coral Designer Saree", price: 6999, fabric: "designer", occasion: "party", image: modelGeorgetteCoral },
    { id: 9, name: "Bridal Red Banarasi Saree", price: 22999, fabric: "banarasi", occasion: "bridal", image: modelBridalRed },
    { id: 10, name: "Tussar Silk Yellow Saree", price: 7499, fabric: "silk", occasion: "festive", image: modelTussarYellow },
    { id: 11, name: "Linen Green Cotton Saree", price: 2999, fabric: "cotton", occasion: "casual", image: modelLinenGreen },
    { id: 12, name: "Embroidered Purple Designer Saree", price: 14999, fabric: "designer", occasion: "wedding", image: modelEmbroideredPurple },
    { id: 13, name: "Brocade Navy Banarasi Saree", price: 19999, fabric: "banarasi", occasion: "bridal", image: modelBrocadeNavy },
    { id: 14, name: "Patola Blue Silk Saree", price: 11999, fabric: "silk", occasion: "festive", image: modelPatolaBlue },
    { id: 15, name: "Organza Lavender Designer Saree", price: 9999, fabric: "designer", occasion: "party", image: modelOrganzaLavender },
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

  const handleAddToWishlist = (product: any) => {
    const user = localStorage.getItem("user");
    if (!user) {
      toast.error("Please log in to add items to wishlist");
      return;
    }
    
    const storedWishlist = localStorage.getItem("wishlist");
    const wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];
    
    // Check if already in wishlist
    const exists = wishlist.find((item: any) => item.id === product.id);
    if (exists) {
      toast.info("Already in wishlist");
      return;
    }
    
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    localStorage.setItem("wishlistCount", wishlist.length.toString());
    toast.success(`${product.name} added to wishlist!`);
    window.dispatchEvent(new Event("storage"));
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFabric = selectedFabric === "all" || product.fabric === selectedFabric;
    const matchesOccasion = selectedOccasion === "all" || product.occasion === selectedOccasion;
    const matchesPrice =
      selectedPrice === "all" ||
      (selectedPrice === "under5k" && product.price < 5000) ||
      (selectedPrice === "5k-10k" && product.price >= 5000 && product.price <= 10000) ||
      (selectedPrice === "10k-15k" && product.price >= 10000 && product.price <= 15000) ||
      (selectedPrice === "above15k" && product.price > 15000);
    return matchesSearch && matchesFabric && matchesPrice && matchesOccasion;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Page Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Our Exclusive <span className="shimmer-text">Collection</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Discover elegance in every thread - Handpicked sarees featuring authentic models showcasing traditional and contemporary designs
          </p>
        </div>

        {/* Filters */}
        <div className="glass-effect p-6 rounded-2xl mb-12 animate-slide-up">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search your perfect saree..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 text-lg"
              />
            </div>
            <Select value={selectedFabric} onValueChange={setSelectedFabric}>
              <SelectTrigger className="w-full md:w-[220px] h-12">
                <SelectValue placeholder="Fabric Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Fabrics</SelectItem>
                <SelectItem value="silk">Pure Silk (Kanjivaram, Tussar, Patola)</SelectItem>
                <SelectItem value="cotton">Cotton (Handloom, Chanderi, Linen)</SelectItem>
                <SelectItem value="designer">Designer (Georgette, Embroidered, Organza)</SelectItem>
                <SelectItem value="banarasi">Banarasi (Pure Silk, Brocade)</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
              <SelectTrigger className="w-full md:w-[220px] h-12">
                <SelectValue placeholder="Occasion" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Occasions</SelectItem>
                <SelectItem value="bridal">Bridal & Wedding Ceremony</SelectItem>
                <SelectItem value="wedding">Wedding Guest & Reception</SelectItem>
                <SelectItem value="party">Party & Evening Events</SelectItem>
                <SelectItem value="festive">Festive & Celebration</SelectItem>
                <SelectItem value="office">Office & Formal Wear</SelectItem>
                <SelectItem value="casual">Casual & Daily Wear</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedPrice} onValueChange={setSelectedPrice}>
              <SelectTrigger className="w-full md:w-[200px] h-12">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under5k">Under ₹5,000</SelectItem>
                <SelectItem value="5k-10k">₹5,000 - ₹10,000</SelectItem>
                <SelectItem value="10k-15k">₹10,000 - ₹15,000</SelectItem>
                <SelectItem value="above15k">Above ₹15,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className="product-card animate-scale-in group"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="relative h-[500px] overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full shadow-rosegold hover-lift hover:scale-110 transition-transform"
                    onClick={() => handleAddToWishlist(product)}
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full shadow-rosegold hover-lift hover:scale-110 transition-transform"
                    onClick={() => handleAddToCart(product.name)}
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-card to-muted/20">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-xl font-serif font-semibold mb-3 hover:text-primary transition-colors leading-tight">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-3xl font-bold text-primary font-serif">
                    ₹{product.price.toLocaleString()}
                  </p>
                  <span className="text-sm text-muted-foreground capitalize bg-muted px-3 py-1 rounded-full">
                    {product.occasion}
                  </span>
                </div>
                <Link to={`/product/${product.id}`}>
                  <Button className="w-full bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground hover:shadow-rosegold transition-all">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-muted-foreground mb-4">
              No sarees found matching your criteria
            </p>
            <p className="text-muted-foreground">
              Try adjusting the filters or search query to discover more options
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
