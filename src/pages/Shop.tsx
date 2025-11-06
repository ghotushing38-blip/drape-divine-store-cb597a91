import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
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
import modelKanchipuramBlue from "@/assets/model-kanchipuram-blue.jpg";
import modelModernMint from "@/assets/model-modern-mint.jpg";
import modelChiffonBlack from "@/assets/model-chiffon-black.jpg";
import modelPaithaniOrange from "@/assets/model-paithani-orange.jpg";
import modelOrganzaPink from "@/assets/model-organza-pink.jpg";
import modelVelvetPurple from "@/assets/model-velvet-purple.jpg";
import modelTussarIvory from "@/assets/model-tussar-ivory.jpg";
import modelSatinTeal from "@/assets/model-satin-teal.jpg";
import modelBandhaniBurgundy from "@/assets/model-bandhani-burgundy.jpg";
import modelNetWhite from "@/assets/model-net-white.jpg";
import modelMaheshwariMustard from "@/assets/model-maheshwari-mustard.jpg";
import modelRuffleGrey from "@/assets/model-ruffle-grey.jpg";
import modelKanjeevaramGreen from "@/assets/model-kanjeevaram-green.jpg";
import modelLehengaBlush from "@/assets/model-lehenga-blush.jpg";
import modelBaluchariTurquoise from "@/assets/model-baluchari-turquoise.jpg";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);

  // Load wishlist on mount
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      const wishlist = JSON.parse(storedWishlist);
      setWishlistItems(wishlist.map((item: any) => item.id));
    }
  }, []);

  const products = [
    { id: 1, name: "Royal Maroon Silk Saree", price: 8999, fabric: "silk", color: "red", occasion: "wedding", style: "traditional", image: modelSilkMaroon },
    { id: 2, name: "Elegant Cotton Saree in Pink", price: 2499, fabric: "cotton", color: "pink", occasion: "casual", style: "traditional", image: modelCottonPink },
    { id: 3, name: "Designer Blue Gold Saree", price: 12999, fabric: "designer", color: "blue", occasion: "party", style: "modern", image: modelDesignerBlue },
    { id: 4, name: "Banarasi Green Silk Saree", price: 15999, fabric: "banarasi", color: "green", occasion: "wedding", style: "traditional", image: modelBanarasiGreen },
    { id: 5, name: "Premium Kanjivaram Wine Silk", price: 18999, fabric: "silk", color: "red", occasion: "wedding", style: "traditional", image: modelKanjivaramRed },
    { id: 6, name: "Handloom Cotton Cream Saree", price: 1999, fabric: "cotton", color: "white", occasion: "casual", style: "traditional", image: modelCottonCream },
    { id: 7, name: "Chanderi Peach Cotton Saree", price: 3499, fabric: "cotton", color: "orange", occasion: "office", style: "traditional", image: modelChanderiPeach },
    { id: 8, name: "Georgette Coral Designer Saree", price: 6999, fabric: "designer", color: "orange", occasion: "party", style: "modern", image: modelGeorgetteCoral },
    { id: 9, name: "Bridal Red Banarasi Saree", price: 22999, fabric: "banarasi", color: "red", occasion: "bridal", style: "traditional", image: modelBridalRed },
    { id: 10, name: "Tussar Silk Yellow Saree", price: 7499, fabric: "silk", color: "yellow", occasion: "festive", style: "traditional", image: modelTussarYellow },
    { id: 11, name: "Linen Green Cotton Saree", price: 2999, fabric: "cotton", color: "green", occasion: "casual", style: "traditional", image: modelLinenGreen },
    { id: 12, name: "Embroidered Purple Designer Saree", price: 14999, fabric: "designer", color: "purple", occasion: "wedding", style: "modern", image: modelEmbroideredPurple },
    { id: 13, name: "Brocade Navy Banarasi Saree", price: 19999, fabric: "banarasi", color: "blue", occasion: "bridal", style: "traditional", image: modelBrocadeNavy },
    { id: 14, name: "Patola Blue Silk Saree", price: 11999, fabric: "silk", color: "blue", occasion: "festive", style: "traditional", image: modelPatolaBlue },
    { id: 15, name: "Organza Lavender Designer Saree", price: 9999, fabric: "designer", color: "purple", occasion: "party", style: "modern", image: modelOrganzaLavender },
    { id: 16, name: "Kanchipuram Royal Blue Silk", price: 17999, fabric: "silk", color: "blue", occasion: "wedding", style: "traditional", image: modelKanchipuramBlue },
    { id: 17, name: "Modern Mint Georgette Saree", price: 8499, fabric: "georgette", color: "green", occasion: "party", style: "modern", image: modelModernMint },
    { id: 18, name: "Classic Black Chiffon Saree", price: 9999, fabric: "chiffon", color: "black", occasion: "party", style: "modern", image: modelChiffonBlack },
    { id: 19, name: "Paithani Orange Silk Saree", price: 20999, fabric: "silk", color: "orange", occasion: "wedding", style: "traditional", image: modelPaithaniOrange },
    { id: 20, name: "Floral Organza Pink Saree", price: 11499, fabric: "organza", color: "pink", occasion: "party", style: "modern", image: modelOrganzaPink },
    { id: 21, name: "Velvet Purple Embellished Saree", price: 24999, fabric: "velvet", color: "purple", occasion: "bridal", style: "modern", image: modelVelvetPurple },
    { id: 22, name: "Madhubani Tussar Ivory Saree", price: 13999, fabric: "tussar", color: "white", occasion: "festive", style: "traditional", image: modelTussarIvory },
    { id: 23, name: "Satin Teal Geometric Print", price: 7999, fabric: "satin", color: "blue", occasion: "office", style: "modern", image: modelSatinTeal },
    { id: 24, name: "Bandhani Burgundy Silk Saree", price: 16999, fabric: "silk", color: "red", occasion: "wedding", style: "traditional", image: modelBandhaniBurgundy },
    { id: 25, name: "Net White Sequin Saree", price: 12999, fabric: "net", color: "white", occasion: "party", style: "modern", image: modelNetWhite },
    { id: 26, name: "Maheshwari Mustard Silk Saree", price: 9499, fabric: "silk", color: "yellow", occasion: "festive", style: "traditional", image: modelMaheshwariMustard },
    { id: 27, name: "Contemporary Grey Ruffle Saree", price: 15999, fabric: "designer", color: "grey", occasion: "party", style: "modern", image: modelRuffleGrey },
    { id: 28, name: "Kanjeevaram Bottle Green Silk", price: 21999, fabric: "silk", color: "green", occasion: "wedding", style: "traditional", image: modelKanjeevaramGreen },
    { id: 29, name: "Lehenga Style Blush Pink Saree", price: 18499, fabric: "designer", color: "pink", occasion: "wedding", style: "modern", image: modelLehengaBlush },
    { id: 30, name: "Baluchari Turquoise Silk Saree", price: 19999, fabric: "silk", color: "blue", occasion: "festive", style: "traditional", image: modelBaluchariTurquoise },
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
    setWishlistItems([...wishlistItems, product.id]);
    toast.success(`${product.name} added to wishlist!`);
    window.dispatchEvent(new Event("storage"));
  };

  const toggleFilter = (category: string, value: string) => {
    const setters: { [key: string]: React.Dispatch<React.SetStateAction<string[]>> } = {
      fabric: setSelectedFabrics,
      color: setSelectedColors,
      price: setSelectedPrices,
      occasion: setSelectedOccasions,
      style: setSelectedStyles,
    };
    
    const getters: { [key: string]: string[] } = {
      fabric: selectedFabrics,
      color: selectedColors,
      price: selectedPrices,
      occasion: selectedOccasions,
      style: selectedStyles,
    };

    const currentValues = getters[category];
    const setter = setters[category];
    
    if (currentValues.includes(value)) {
      setter(currentValues.filter(v => v !== value));
    } else {
      setter([...currentValues, value]);
    }
  };

  const clearAllFilters = () => {
    setSelectedFabrics([]);
    setSelectedColors([]);
    setSelectedPrices([]);
    setSelectedOccasions([]);
    setSelectedStyles([]);
    setSearchQuery("");
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFabric = selectedFabrics.length === 0 || selectedFabrics.includes(product.fabric);
    const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color);
    const matchesOccasion = selectedOccasions.length === 0 || selectedOccasions.includes(product.occasion);
    const matchesStyle = selectedStyles.length === 0 || selectedStyles.includes(product.style);
    const matchesPrice = selectedPrices.length === 0 || selectedPrices.some(range => {
      if (range === "under5k") return product.price < 5000;
      if (range === "5k-10k") return product.price >= 5000 && product.price <= 10000;
      if (range === "10k-15k") return product.price >= 10000 && product.price <= 15000;
      if (range === "15k-20k") return product.price >= 15000 && product.price <= 20000;
      if (range === "above20k") return product.price > 20000;
      return false;
    });
    
    return matchesSearch && matchesFabric && matchesColor && matchesPrice && matchesOccasion && matchesStyle;
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

        {/* Filters Sidebar and Products Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="glass-effect p-6 rounded-2xl sticky top-32 animate-slide-up max-h-[calc(100vh-10rem)] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-serif font-bold">Filters</h2>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Clear All
                </Button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Search</label>
                  <Input
                    type="text"
                    placeholder="Search sarees..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="divider-ethnic"></div>

                {/* Fabric Filter */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">Fabric Type</label>
                  <div className="space-y-2">
                    {['silk', 'cotton', 'designer', 'banarasi', 'georgette', 'chiffon', 'organza', 'velvet', 'tussar', 'satin', 'net'].map((fabric) => (
                      <div key={fabric} className="flex items-center space-x-2">
                        <Checkbox
                          id={`fabric-${fabric}`}
                          checked={selectedFabrics.includes(fabric)}
                          onCheckedChange={() => toggleFilter('fabric', fabric)}
                        />
                        <Label htmlFor={`fabric-${fabric}`} className="text-sm capitalize cursor-pointer">
                          {fabric}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="divider-ethnic"></div>

                {/* Color Filter */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">Colors</label>
                  <div className="space-y-2">
                    {['red', 'pink', 'blue', 'green', 'yellow', 'orange', 'purple', 'black', 'white', 'grey'].map((color) => (
                      <div key={color} className="flex items-center space-x-2">
                        <Checkbox
                          id={`color-${color}`}
                          checked={selectedColors.includes(color)}
                          onCheckedChange={() => toggleFilter('color', color)}
                        />
                        <Label htmlFor={`color-${color}`} className="text-sm capitalize cursor-pointer flex items-center gap-2">
                          <span className={`w-4 h-4 rounded-full border-2 border-border`} 
                                style={{backgroundColor: color === 'grey' ? '#808080' : color}}></span>
                          {color}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="divider-ethnic"></div>

                {/* Occasion Filter */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">Occasion</label>
                  <div className="space-y-2">
                    {['bridal', 'wedding', 'party', 'festive', 'office', 'casual'].map((occasion) => (
                      <div key={occasion} className="flex items-center space-x-2">
                        <Checkbox
                          id={`occasion-${occasion}`}
                          checked={selectedOccasions.includes(occasion)}
                          onCheckedChange={() => toggleFilter('occasion', occasion)}
                        />
                        <Label htmlFor={`occasion-${occasion}`} className="text-sm capitalize cursor-pointer">
                          {occasion}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="divider-ethnic"></div>

                {/* Style Filter */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">Style</label>
                  <div className="space-y-2">
                    {['traditional', 'modern'].map((style) => (
                      <div key={style} className="flex items-center space-x-2">
                        <Checkbox
                          id={`style-${style}`}
                          checked={selectedStyles.includes(style)}
                          onCheckedChange={() => toggleFilter('style', style)}
                        />
                        <Label htmlFor={`style-${style}`} className="text-sm capitalize cursor-pointer">
                          {style}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="divider-ethnic"></div>

                {/* Price Filter */}
                <div>
                  <label className="text-sm font-semibold text-foreground mb-3 block">Price Range</label>
                  <div className="space-y-2">
                    {[
                      { value: 'under5k', label: 'Under ₹5,000' },
                      { value: '5k-10k', label: '₹5,000 - ₹10,000' },
                      { value: '10k-15k', label: '₹10,000 - ₹15,000' },
                      { value: '15k-20k', label: '₹15,000 - ₹20,000' },
                      { value: 'above20k', label: 'Above ₹20,000' }
                    ].map((price) => (
                      <div key={price.value} className="flex items-center space-x-2">
                        <Checkbox
                          id={`price-${price.value}`}
                          checked={selectedPrices.includes(price.value)}
                          onCheckedChange={() => toggleFilter('price', price.value)}
                        />
                        <Label htmlFor={`price-${price.value}`} className="text-sm cursor-pointer">
                          {price.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Showing <span className="font-semibold text-primary">{filteredProducts.length}</span> of <span className="font-semibold">{products.length}</span> sarees
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                        <Heart className={`h-5 w-5 ${wishlistItems.includes(product.id) ? 'fill-primary text-primary' : ''}`} />
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

              {filteredProducts.length === 0 && (
                <div className="text-center py-20 col-span-full">
                  <p className="text-2xl text-muted-foreground mb-4">
                    No sarees found matching your criteria
                  </p>
                  <p className="text-muted-foreground">
                    Try adjusting the filters or search query to discover more options
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
