import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("🌸 Thank you! We'll get back to you within 24 hours.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChatBot />

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <div className="divider-ethnic"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-elegant">
              <h2 className="text-3xl font-serif font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <Input id="phone" type="tel" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full btn-hero"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-soft">
              <h2 className="text-3xl font-serif font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                    <p className="text-muted-foreground">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@sareevastra.com</p>
                    <p className="text-muted-foreground">support@sareevastra.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      SareeVastra Flagship Store<br />
                      Ring Road, Surat<br />
                      Gujarat 395002, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: 11:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-soft">
              <h3 className="text-2xl font-serif font-bold mb-4">Quick Help</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  → Track Your Order
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  → Return & Exchange Policy
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  → Shipping Information
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  → Size Guide
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  → FAQ
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Visit Our <span className="text-primary">Store</span>
            </h2>
            <div className="divider-ethnic"></div>
          </div>
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

        {/* FAQs Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="divider-ethnic"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "What are your shipping charges?",
                a: "We offer FREE shipping on orders above ₹2,999. For orders below this amount, a nominal shipping fee of ₹99 applies across India."
              },
              {
                q: "Do you ship internationally?",
                a: "Yes! We ship to 25+ countries worldwide. International shipping charges vary by location and are calculated at checkout."
              },
              {
                q: "What is your return policy?",
                a: "We accept returns within 7 days of delivery if the product is unused and in original packaging. Custom-made sarees are non-returnable."
              },
              {
                q: "How can I track my order?",
                a: "Once your order ships, you'll receive a tracking number via email and SMS. You can also track orders from your account dashboard."
              },
              {
                q: "Do you provide saree care instructions?",
                a: "Yes! Each saree comes with detailed care instructions. We also have a care guide section on our website with fabric-specific tips."
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="glass-effect p-6 rounded-xl hover-lift animate-scale-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Service Section */}
        <div className="mt-20 bg-gradient-to-br from-primary/10 to-royal/10 p-12 rounded-2xl border border-border">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Need Immediate <span className="text-primary">Assistance?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our customer service team is always ready to help you with any queries or concerns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Live Chat", desc: "Available Mon-Sat, 10 AM - 8 PM", action: "Start Chat" },
              { title: "WhatsApp Support", desc: "+91 98765 43210", action: "Message Us" },
              { title: "Video Call Consultation", desc: "Book a virtual appointment", action: "Schedule Now" }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-card p-6 rounded-xl text-center hover-lift animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                <Button variant="outline" size="sm" className="w-full">
                  {service.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
