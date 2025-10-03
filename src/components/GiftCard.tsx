import { Link } from "react-router-dom";
import { Gift } from "@/data/gifts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface GiftCardProps {
  gift: Gift;
}

const GiftCard = ({ gift }: GiftCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={gift.image}
          alt={gift.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
          ₹{gift.price}
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {gift.category}
          </span>
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">
          {gift.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {gift.description}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Link to={`/gift/${gift.id}`} className="w-full">
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default GiftCard;
