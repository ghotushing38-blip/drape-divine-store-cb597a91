import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pattern-mandala">
      <div className="text-center animate-fade-in max-w-2xl px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-serif font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            404
          </h1>
          <div className="divider-ethnic"></div>
        </div>
        <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">
          Page Not Found
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for seems to have wandered off like a flowing saree in the wind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="btn-hero">
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </Button>
          </Link>
          <Link to="/shop">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Search className="mr-2 h-5 w-5" />
              Browse Collection
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
