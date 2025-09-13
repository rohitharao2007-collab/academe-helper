import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-campus-blue-light/10 to-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="bg-gradient-to-br from-campus-blue to-campus-blue-dark text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-lg">
          <MessageCircle className="h-12 w-12" />
        </div>
        
        <h1 className="mb-4 text-6xl font-bold text-campus-blue">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-foreground">Page Not Found</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Looks like you're lost on campus! The page you're looking for doesn't exist.
        </p>
        
        <div className="space-y-4">
          <Button 
            asChild 
            variant="campus" 
            size="lg"
            className="w-full"
          >
            <a href="/">
              <Home className="mr-2 h-5 w-5" />
              Return to CampusPal
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Need help finding something? Our AI assistant is here 24/7!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
