import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import storeInterior from "@/assets/store-interior.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our <span className="text-primary">Story</span>
          </h1>
          <div className="divider-ethnic"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Draping Tradition with Modern Grace
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20 animate-slide-up">
          <div className="bg-card p-8 rounded-2xl border border-border shadow-elegant">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Founded in the heart of Surat, Gujarat — India's textile capital — SareeVastra was born from a deep passion for preserving the timeless art of Indian draping. For over two decades, we've been dedicated to bringing authentic, handcrafted sarees to women who appreciate the elegance of tradition.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Every saree in our collection tells a story. From the skilled hands of master weavers in Banaras to the vibrant looms of Kanchipuram, we work directly with artisan communities to ensure each piece is a masterpiece of craftsmanship and cultural heritage.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Our mission extends beyond commerce — we're committed to supporting local artisans, empowering handloom weavers, and preserving India's rich textile traditions for future generations. When you choose SareeVastra, you're not just buying a saree; you're becoming part of a movement to keep India's cultural heritage alive.
            </p>
          </div>
        </div>

        {/* Store Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Visit Our <span className="text-primary">Flagship Store</span>
            </h2>
            <div className="divider-ethnic"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={storeInterior}
                alt="SareeVastra Store Interior"
                className="w-full h-[500px] object-cover rounded-2xl shadow-elegant hover-lift"
              />
            </div>

            <div className="space-y-6 animate-slide-up">
              <h3 className="text-3xl font-serif font-bold">SareeVastra Surat</h3>
              <p className="text-foreground/80 leading-relaxed">
                Experience the magic of saree shopping in person at our flagship boutique in Surat. Our elegant showroom features an extensive collection spanning traditional to contemporary designs, all displayed in a luxurious ambiance designed for your comfort.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">
                      Ring Road, Surat, Gujarat 395002, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Store Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: 11:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">store@sareevastra.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-20 animate-fade-in">
          <div className="h-[450px] rounded-2xl overflow-hidden shadow-elegant border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6332!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjciTiA3MsKwNDknNTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Artisan Support",
              description: "We work directly with skilled artisans, ensuring fair wages and preserving traditional crafts.",
            },
            {
              title: "Quality Promise",
              description: "Every saree undergoes rigorous quality checks to ensure you receive only the finest products.",
            },
            {
              title: "Cultural Heritage",
              description: "We're committed to keeping India's rich textile traditions alive for future generations.",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-xl border border-border shadow-soft hover-lift text-center animate-scale-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-serif font-bold mb-3 text-primary">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
