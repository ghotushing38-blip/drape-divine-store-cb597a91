import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingCart, Share2, Star, Truck, RefreshCcw, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import sareesilk from "@/assets/saree-silk-1.jpg";
import sareecotton from "@/assets/saree-cotton-1.jpg";
import sareedesigner from "@/assets/saree-designer-1.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    name: "Royal Maroon Silk Saree",
    price: 8999,
    originalPrice: 12999,
    fabric: "Pure Silk",
    color: "Maroon with Gold",
    description:
      "Exquisite handwoven silk saree with intricate gold embroidery. Perfect for weddings and special occasions. This timeless piece combines traditional craftsmanship with contemporary elegance.",
    images: [sareesilk, sareedesigner, sareecotton],
    features: [
      "6.5 meters of premium silk",
      "Traditional gold zari work",
      "Comes with matching blouse piece",
      "Dry clean only",
      "Handcrafted by master artisans",
    ],
  };

  const reviews = [
    {
      name: "Meera Kapoor",
      rating: 5,
      date: "2 weeks ago",
      text: "Absolutely stunning! The quality exceeded my expectations. I wore this for my sister's wedding and received countless compliments.",
    },
    {
      name: "Anjali Reddy",
      rating: 5,
      date: "1 month ago",
      text: "Beautiful saree with excellent fabric quality. The gold work is intricate and elegant. Highly recommended!",
    },
  ];

  const handleAddToCart = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      toast.error("Please log in to add items to cart");
      return;
    }
    const count = parseInt(localStorage.getItem("cartCount") || "0");
    localStorage.setItem("cartCount", (count + 1).toString());
    toast.success("Added to cart!");
    window.dispatchEvent(new Event("storage"));
  };

  const handleAddToWishlist = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      toast.error("Please log in to add items to wishlist");
      return;
    }
    toast.success("Added to wishlist!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4 animate-fade-in">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`h-32 rounded-lg overflow-hidden border-2 transition-all hover-lift ${
                    selectedImage === idx ? "border-primary shadow-gold" : "border-border"
                  }`}
                >
                  <img src={image} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <h1 className="text-4xl font-serif font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-muted-foreground">(120 reviews)</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-primary">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-2xl text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                  31% OFF
                </span>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-foreground/80 leading-relaxed">{product.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-muted-foreground text-sm">Fabric</span>
                <p className="font-semibold">{product.fabric}</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Color</span>
                <p className="font-semibold">{product.color}</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="flex-1 btn-hero"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" onClick={handleAddToWishlist}>
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <Link to="/checkout">
              <Button size="lg" className="w-full btn-gold">
                Buy Now
              </Button>
            </Link>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-muted-foreground">Above ₹2999</p>
              </div>
              <div className="text-center">
                <RefreshCcw className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Easy Returns</p>
                <p className="text-xs text-muted-foreground">7 Days</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Secure Payment</p>
                <p className="text-xs text-muted-foreground">100% Safe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-20">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">Product Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-secondary mr-2">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-4">
                {reviews.map((review, idx) => (
                  <div
                    key={idx}
                    className="bg-card p-6 rounded-lg border border-border"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground/80">{review.text}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="care" className="mt-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">Care Instructions</h3>
                <ul className="space-y-3">
                  <li>• Dry clean only for best results</li>
                  <li>• Store in a cool, dry place away from direct sunlight</li>
                  <li>• Avoid contact with perfumes and deodorants</li>
                  <li>• Iron on low heat with a cloth between the saree and iron</li>
                  <li>• Fold along the length to avoid creases</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
