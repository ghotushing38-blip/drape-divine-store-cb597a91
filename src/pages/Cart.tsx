import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import sareesilk from "@/assets/saree-silk-1.jpg";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Royal Maroon Silk Saree", price: 8999, quantity: 1, image: sareesilk },
    { id: 2, name: "Designer Blue Gold Saree", price: 12999, quantity: 1, image: sareesilk },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 2999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-serif font-bold mb-4">
            Shopping <span className="text-primary">Cart</span>
          </h1>
          <div className="divider-ethnic"></div>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-card rounded-xl p-4 border border-border shadow-soft hover-lift animate-scale-in"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-2xl font-bold text-primary mb-4">
                        ₹{item.price.toLocaleString()}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button size="icon" variant="outline">
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="text-lg font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button size="icon" variant="outline">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button size="icon" variant="destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-6 border border-border shadow-elegant sticky top-32 animate-slide-up">
                <h2 className="text-2xl font-serif font-bold mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? (
                        <span className="text-secondary">FREE</span>
                      ) : (
                        `₹${shipping}`
                      )}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-sm text-muted-foreground">
                      Add ₹{(3000 - subtotal).toLocaleString()} more for FREE shipping
                    </p>
                  )}
                  <div className="divider-ethnic"></div>
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary">₹{total.toLocaleString()}</span>
                  </div>
                </div>
                <Link to="/checkout">
                  <Button className="w-full btn-hero mb-3">
                    Proceed to Checkout
                  </Button>
                </Link>
                <Link to="/shop">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
            <h2 className="text-3xl font-serif font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Discover our beautiful collection of sarees
            </p>
            <Link to="/shop">
              <Button className="btn-hero">
                Start Shopping
              </Button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
