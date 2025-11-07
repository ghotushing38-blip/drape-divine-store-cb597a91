import { Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import storeInterior from "@/assets/store-interior.jpg";
import shopDisplay from "@/assets/shop-display-1.jpg";
import shopConsultation from "@/assets/shop-consultation.jpg";
import shopArtisan from "@/assets/shop-artisan.jpg";
import shopFittingRoom from "@/assets/shop-fitting-room.jpg";

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

        {/* How We Work Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">
              How We <span className="text-primary">Work</span>
            </h2>
            <div className="divider-ethnic"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-3xl font-serif font-bold">The SareeVastra Experience</h3>
              <p className="text-foreground/80 leading-relaxed">
                At SareeVastra, we believe that buying a saree is more than just a purchase — it's an experience, a celebration of heritage, and a connection to centuries of tradition. Our process is designed to ensure that every customer finds the perfect saree that resonates with their style and occasion.
              </p>
              
              <div className="space-y-4">
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
              </div>

              <div className="bg-card p-6 rounded-xl border border-border shadow-soft">
                <h4 className="text-xl font-serif font-bold mb-3 text-primary">Personal Consultation</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Our expert stylists take the time to understand your needs, preferences, and the occasion. Whether you're looking for a bridal saree, party wear, or everyday elegance, we guide you through our curated collection with personalized recommendations.
                </p>
              </div>
            </div>

            <div className="animate-fade-in">
              <img
                src={shopConsultation}
                alt="Personal styling consultation"
                className="w-full h-[500px] object-cover rounded-2xl shadow-elegant hover-lift"
              />
            </div>
          </div>

          {/* Shop Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="animate-fade-in">
              <img
                src={storeInterior}
                alt="SareeVastra Store Interior"
                className="w-full h-[400px] object-cover rounded-2xl shadow-elegant hover-lift"
              />
              <p className="text-center mt-3 text-muted-foreground">Elegant showroom ambiance</p>
            </div>
            <div className="animate-fade-in">
              <img
                src={shopDisplay}
                alt="Luxury saree display"
                className="w-full h-[400px] object-cover rounded-2xl shadow-elegant hover-lift"
              />
              <p className="text-center mt-3 text-muted-foreground">Curated collection display</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="animate-fade-in order-2 md:order-1">
              <img
                src={shopArtisan}
                alt="Artisan weaving saree"
                className="w-full h-[500px] object-cover rounded-2xl shadow-elegant hover-lift"
              />
            </div>

            <div className="space-y-6 animate-slide-up order-1 md:order-2">
              <h3 className="text-3xl font-serif font-bold">Direct from Artisans</h3>
              <p className="text-foreground/80 leading-relaxed">
                We work directly with master weavers across India, from the silk looms of Banaras to the cotton weavers of Chanderi. This direct partnership ensures authenticity, fair compensation for artisans, and the finest quality sarees for our customers.
              </p>
              <div className="bg-card p-6 rounded-xl border border-border shadow-soft">
                <h4 className="text-xl font-serif font-bold mb-3 text-primary">Quality Assurance</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Every saree undergoes meticulous quality checks at multiple stages. From verifying the purity of silk threads to examining the intricacy of handwoven patterns, we ensure only flawless pieces reach our collection.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-3xl font-serif font-bold">Try Before You Buy</h3>
              <p className="text-foreground/80 leading-relaxed">
                Our luxurious fitting rooms are designed to help you visualize how each saree drapes and flows. With full-length mirrors and perfect lighting, you can see yourself in your chosen saree and make the right decision with confidence.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-secondary mr-2">✦</span>
                  <span className="text-foreground/80">Expert draping assistance available</span>
                </div>
                <div className="flex items-start">
                  <span className="text-secondary mr-2">✦</span>
                  <span className="text-foreground/80">Compare multiple sarees side by side</span>
                </div>
                <div className="flex items-start">
                  <span className="text-secondary mr-2">✦</span>
                  <span className="text-foreground/80">Blouse piece matching and customization</span>
                </div>
                <div className="flex items-start">
                  <span className="text-secondary mr-2">✦</span>
                  <span className="text-foreground/80">Complimentary refreshments while you shop</span>
                </div>
              </div>
            </div>

            <div className="animate-fade-in">
              <img
                src={shopFittingRoom}
                alt="Luxury fitting room"
                className="w-full h-[500px] object-cover rounded-2xl shadow-elegant hover-lift"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

        {/* Our Journey Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Our <span className="text-primary">Journey</span>
            </h2>
            <div className="divider-ethnic"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: "2000", title: "Foundation", desc: "Started with a small boutique in Surat" },
              { year: "2008", title: "Expansion", desc: "Partnered with 50+ artisan communities" },
              { year: "2015", title: "Digital Presence", desc: "Launched online platform nationwide" },
              { year: "2024", title: "Global Reach", desc: "Shipping to 25+ countries worldwide" },
            ].map((milestone, idx) => (
              <div
                key={idx}
                className="glass-effect p-6 rounded-xl text-center hover-lift animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-5xl font-bold text-primary mb-3">{milestone.year}</div>
                <h4 className="text-xl font-serif font-semibold mb-2">{milestone.title}</h4>
                <p className="text-muted-foreground text-sm">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Craftsmanship Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">
              The Art of <span className="text-primary">Craftsmanship</span>
            </h2>
            <div className="divider-ethnic"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Handwoven Excellence",
                description: "Each saree is meticulously handwoven by master craftsmen who have inherited their skills through generations. The intricate patterns and designs take weeks to complete, ensuring unparalleled quality and authenticity."
              },
              {
                title: "Natural Dyes & Materials",
                description: "We use only the finest natural silk threads and traditional dyeing techniques. Our artisans employ age-old methods to create vibrant, long-lasting colors that are eco-friendly and skin-safe."
              },
              {
                title: "Quality Assurance",
                description: "Every saree undergoes multiple quality checks at different stages. From thread selection to final finishing, we ensure that only flawless pieces reach our customers, maintaining our reputation for excellence."
              },
              {
                title: "Sustainable Practices",
                description: "We're committed to environmental sustainability. Our production process minimizes waste, uses renewable resources, and supports eco-friendly practices while empowering local artisan communities."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card p-6 rounded-xl border border-border shadow-soft hover-lift animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-2xl font-serif font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="text-center bg-card p-12 rounded-2xl border border-border shadow-elegant">
          <h2 className="text-4xl font-serif font-bold mb-8">
            Awards & <span className="text-primary">Recognition</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { count: "20+", label: "Years of Excellence" },
              { count: "50,000+", label: "Happy Customers" },
              { count: "100+", label: "Artisan Partners" },
              { count: "15+", label: "Industry Awards" }
            ].map((stat, idx) => (
              <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-5xl font-bold text-primary mb-2">{stat.count}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
