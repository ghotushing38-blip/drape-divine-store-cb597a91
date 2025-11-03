import { useState } from "react";
import { CreditCard, Smartphone, Banknote, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setOrderPlaced(true);
      localStorage.setItem("cartCount", "0");
      window.dispatchEvent(new Event("storage"));
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-2xl mx-auto text-center animate-scale-in">
            <div className="bg-secondary/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Check className="h-12 w-12 text-secondary" />
            </div>
            <h1 className="text-5xl font-serif font-bold mb-4">
              Order Placed Successfully!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for shopping with SareeVastra. Your order #SAR{Math.floor(Math.random() * 10000)} is confirmed.
            </p>
            <p className="text-muted-foreground mb-8">
              We'll send you an email confirmation shortly with tracking details.
            </p>
            <Button size="lg" className="btn-hero" onClick={() => (window.location.href = "/")}>
              Continue Shopping
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-serif font-bold mb-4">
            <span className="text-primary">Checkout</span>
          </h1>
          <div className="divider-ethnic"></div>
        </div>

        <form onSubmit={handlePlaceOrder} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Shipping Information */}
            <div className="space-y-6 animate-slide-up">
              <div className="bg-card p-6 rounded-xl border border-border shadow-soft">
                <h2 className="text-2xl font-serif font-bold mb-6">Shipping Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" required />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input id="pincode" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" required />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="bg-card p-6 rounded-xl border border-border shadow-soft">
                <h2 className="text-2xl font-serif font-bold mb-6">Payment Method</h2>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="card" id="card" />
                      <CreditCard className="h-5 w-5 text-primary" />
                      <span className="flex-1">Credit/Debit Card</span>
                    </label>
                    <label className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="upi" id="upi" />
                      <Smartphone className="h-5 w-5 text-primary" />
                      <span className="flex-1">UPI (PhonePe, GPay, Paytm)</span>
                    </label>
                    <label className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="cod" id="cod" />
                      <Banknote className="h-5 w-5 text-primary" />
                      <span className="flex-1">Cash on Delivery</span>
                    </label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="mt-6 space-y-4 animate-fade-in">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" type="password" required />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "upi" && (
                  <div className="mt-6 animate-fade-in">
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input id="upiId" placeholder="yourname@upi" required />
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="bg-card p-6 rounded-xl border border-border shadow-elegant">
                <h2 className="text-2xl font-serif font-bold mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">₹21,998</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold text-secondary">FREE</span>
                  </div>
                  <div className="divider-ethnic"></div>
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary">₹21,998</span>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full btn-hero"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Place Order"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
