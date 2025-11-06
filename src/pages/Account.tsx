import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Package, Heart, LogOut, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/");
      toast.error("Please log in to access your account");
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cartCount");
    localStorage.removeItem("wishlistCount");
    toast.success("Logged out successfully");
    navigate("/");
  };

  const getOrders = () => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      return JSON.parse(storedOrders);
    }
    // Sample orders with proper image imports
    return [
      {
        id: "ORD-2024-001",
        orderDate: "January 15, 2024",
        deliveryDate: "January 22, 2024",
        total: 21998,
        status: "Delivered",
        shippingAddress: "123 Main Street, Mumbai, Maharashtra 400001",
        paymentMethod: "Credit Card (****4532)",
        trackingNumber: "TRK-IND-892734",
        items: [
          { name: "Royal Maroon Silk Saree", price: 8999, quantity: 1, image: "/src/assets/model-silk-maroon.jpg" },
          { name: "Designer Blue Gold Saree", price: 12999, quantity: 1, image: "/src/assets/model-designer-blue.jpg" }
        ]
      },
      {
        id: "ORD-2024-002",
        orderDate: "February 3, 2024",
        deliveryDate: "February 12, 2024",
        total: 15999,
        status: "In Transit",
        shippingAddress: "456 Park Avenue, Delhi 110001",
        paymentMethod: "UPI",
        trackingNumber: "TRK-IND-923847",
        items: [
          { name: "Banarasi Green Silk Saree", price: 15999, quantity: 1, image: "/src/assets/model-banarasi-green.jpg" }
        ]
      }
    ];
  };

  const getWishlist = () => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  };

  const [orders, setOrders] = useState(getOrders());
  const [wishlist, setWishlist] = useState(getWishlist());

  useEffect(() => {
    const handleStorageChange = () => {
      setOrders(getOrders());
      setWishlist(getWishlist());
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-5xl font-serif font-bold mb-2">
                Welcome, <span className="text-primary">{user.name}</span>
              </h1>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="hover:bg-destructive hover:text-destructive-foreground"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
          <div className="divider-ethnic"></div>
        </div>

        {/* Account Tabs */}
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="profile">
              <User className="mr-2 h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="orders">
              <Package className="mr-2 h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="wishlist">
              <Heart className="mr-2 h-4 w-4" />
              Wishlist
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="animate-fade-in">
            <div className="max-w-2xl mx-auto">
              <div className="bg-card p-8 rounded-2xl border border-border shadow-elegant">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-serif font-bold">Personal Information</h2>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>First Name</Label>
                      <Input defaultValue={user.name.split(" ")[0]} readOnly />
                    </div>
                    <div>
                      <Label>Last Name</Label>
                      <Input defaultValue={user.name.split(" ")[1] || ""} readOnly />
                    </div>
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input defaultValue={user.email} readOnly />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input defaultValue="+91 98765 43210" readOnly />
                  </div>
                  <div>
                    <Label>Address</Label>
                    <Input defaultValue="123 Main Street, Mumbai" readOnly />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="animate-fade-in">
            {orders.length === 0 ? (
              <div className="text-center py-20">
                <Package className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
                <h2 className="text-3xl font-serif font-bold mb-4">No Orders Yet</h2>
                <p className="text-muted-foreground mb-8">
                  Start shopping to see your orders here
                </p>
                <Button className="btn-hero" onClick={() => navigate("/shop")}>
                  Browse Collection
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-card p-6 rounded-xl border border-border shadow-soft hover-lift"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Order #{order.id}</h3>
                        <p className="text-sm text-muted-foreground">
                          Placed on {order.orderDate}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary mb-2">
                          ₹{order.total.toLocaleString()}
                        </p>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                            order.status === "Delivered"
                              ? "bg-secondary/20 text-secondary"
                              : order.status === "In Transit"
                              ? "bg-primary/20 text-primary"
                              : "bg-accent/20 text-accent"
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="space-y-3 mb-4 pb-4 border-b border-border">
                      {order.items.map((item: any, idx: number) => (
                        <div key={idx} className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-muted-foreground">
                              Quantity: {item.quantity}
                            </p>
                          </div>
                          <p className="font-semibold text-primary">
                            ₹{item.price.toLocaleString()}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Delivery Info */}
                    <div className="bg-background/50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold mb-2">Delivery Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-muted-foreground">Expected Delivery</p>
                          <p className="font-semibold text-primary">{order.deliveryDate}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Shipping Address</p>
                          <p className="font-semibold">{order.shippingAddress}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Payment Method</p>
                          <p className="font-semibold">{order.paymentMethod}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Tracking Number</p>
                          <p className="font-semibold">{order.trackingNumber}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        Track Order
                      </Button>
                      {order.status === "Delivered" && (
                        <Button variant="outline" size="sm">
                          Write Review
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        Download Invoice
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist" className="animate-fade-in">
            {wishlist.length === 0 ? (
              <div className="text-center py-20">
                <Heart className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
                <h2 className="text-3xl font-serif font-bold mb-4">Your Wishlist is Empty</h2>
                <p className="text-muted-foreground mb-8">
                  Save your favorite sarees here for later
                </p>
                <Button className="btn-hero" onClick={() => navigate("/shop")}>
                  Browse Collection
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((item: any) => (
                  <div key={item.id} className="bg-card rounded-xl overflow-hidden border border-border shadow-soft hover-lift">
                    <div className="relative h-64">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                      <p className="text-2xl font-bold text-primary mb-3">
                        ₹{item.price.toLocaleString()}
                      </p>
                      <Link to={`/product/${item.id}`}>
                        <Button className="w-full btn-hero">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Account;
