import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import heroImage1 from "@/assets/hero-saree-1.jpg";
import heroImage2 from "@/assets/hero-saree-2.jpg";
import sareesilk from "@/assets/saree-silk-1.jpg";
import sareecotton from "@/assets/saree-cotton-1.jpg";
import sareedesigner from "@/assets/saree-designer-1.jpg";
import sareebanarasi from "@/assets/saree-banarasi-1.jpg";

const Index = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroImages = [heroImage1, heroImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { title: "Silk Sarees", image: sareesilk, description: "Luxurious silk drapes" },
    { title: "Cotton Sarees", image: sareecotton, description: "Comfortable elegance" },
    { title: "Designer Sarees", image: sareedesigner, description: "Modern artistry" },
    { title: "Banarasi Sarees", image: sareebanarasi, description: "Traditional craft" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "The quality is exceptional! I received so many compliments at my friend's wedding.",
      location: "Mumbai",
    },
    {
      name: "Anita Verma",
      rating: 5,
      text: "Beautiful collection and amazing customer service. Will definitely shop again!",
      location: "Delhi",
    },
    {
      name: "Lakshmi Iyer",
      rating: 5,
      text: "The Banarasi saree I bought is absolutely stunning. Worth every penny!",
      location: "Bangalore",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden mt-20">
        <div className="absolute inset-0">
          {heroImages.map((image, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentHeroIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt="Hero Saree"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
            </div>
          ))}
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-primary-foreground animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-secondary animate-pulse" />
              <span className="text-secondary font-semibold">New Collection 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Grace in Every
              <span className="block bg-gradient-to-r from-secondary to-secondary-glow bg-clip-text text-transparent">
                Drape
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Discover timeless Indian sarees that blend tradition with modern elegance
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button
                  size="lg"
                  className="btn-gold text-lg px-8 py-6 h-auto group"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 h-auto bg-card/20 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-card/40"
                >
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentHeroIndex ? "w-8 bg-secondary" : "w-2 bg-primary-foreground/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 animate-fade-in hover-lift">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-2">Premium Quality</h3>
            <p className="text-muted-foreground">Handpicked fabrics and craftsmanship</p>
          </div>
          <div className="text-center p-6 animate-fade-in hover-lift" style={{ animationDelay: "100ms" }}>
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-2">Authentic Designs</h3>
            <p className="text-muted-foreground">Traditional patterns with modern touch</p>
          </div>
          <div className="text-center p-6 animate-fade-in hover-lift" style={{ animationDelay: "200ms" }}>
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground">Quick shipping across India</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Explore Our <span className="text-primary">Collections</span>
          </h2>
          <div className="divider-ethnic"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From traditional silk to contemporary designs, find the perfect saree for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <Link key={idx} to="/shop" className="group">
              <div className="product-card animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="product-image-overlay flex flex-col items-center justify-center text-primary-foreground">
                    <h3 className="text-2xl font-serif font-bold mb-2">{category.title}</h3>
                    <p className="mb-4">{category.description}</p>
                    <Button variant="secondary" size="sm">
                      Explore Now
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 pattern-mandala">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              What Our <span className="text-primary">Customers Say</span>
            </h2>
            <div className="divider-ethnic"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-card p-6 rounded-xl shadow-soft hover-lift animate-scale-in border-ethnic"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Why Choose <span className="text-primary">SareeVastra</span>
          </h2>
          <div className="divider-ethnic"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-xl border-ethnic shadow-soft hover-lift animate-slide-up">
            <h3 className="text-2xl font-serif font-bold mb-3 text-primary">Handloom Support</h3>
            <p className="text-muted-foreground">We work directly with artisans and weavers across India, ensuring fair trade and supporting traditional craftsmanship.</p>
          </div>
          <div className="bg-card p-8 rounded-xl border-ethnic shadow-soft hover-lift animate-slide-up" style={{ animationDelay: "100ms" }}>
            <h3 className="text-2xl font-serif font-bold mb-3 text-primary">Quality Assurance</h3>
            <p className="text-muted-foreground">Each saree is carefully inspected for quality, authenticity, and craftsmanship before it reaches you.</p>
          </div>
          <div className="bg-card p-8 rounded-xl border-ethnic shadow-soft hover-lift animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-serif font-bold mb-3 text-primary">Easy Returns</h3>
            <p className="text-muted-foreground">Not satisfied? We offer hassle-free returns within 7 days of delivery, no questions asked.</p>
          </div>
          <div className="bg-card p-8 rounded-xl border-ethnic shadow-soft hover-lift animate-slide-up" style={{ animationDelay: "300ms" }}>
            <h3 className="text-2xl font-serif font-bold mb-3 text-primary">Secure Payments</h3>
            <p className="text-muted-foreground">Shop with confidence using our secure payment gateway supporting UPI, cards, and COD options.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary via-royal to-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in">
            Ready to Find Your Perfect Saree?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Browse our exclusive collection and experience the elegance of Indian tradition
          </p>
          <Link to="/shop">
            <Button size="lg" className="btn-gold text-lg px-10 py-6 h-auto">
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
