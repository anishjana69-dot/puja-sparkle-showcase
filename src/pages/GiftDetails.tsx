import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { gifts } from "@/data/gifts";

const GiftDetails = () => {
  const { id } = useParams();
  const gift = gifts.find((g) => g.id === id);

  if (!gift) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Gift not found</h1>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gifts
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
            <img
              src={gift.image}
              alt={gift.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {gift.category}
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              {gift.name}
            </h1>
            
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-bold text-primary">
                ₹{gift.price}
              </span>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {gift.fullDescription}
            </p>

            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-4">Key Features</h3>
              <ul className="space-y-3">
                {gift.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg" className="w-full">
              Add to Cart
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GiftDetails;
