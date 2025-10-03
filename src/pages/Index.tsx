import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import GiftCard from "@/components/GiftCard";
import { gifts } from "@/data/gifts";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGifts = useMemo(() => {
    if (!searchQuery.trim()) return gifts;
    
    const query = searchQuery.toLowerCase();
    return gifts.filter(
      (gift) =>
        gift.name.toLowerCase().includes(query) ||
        gift.category.toLowerCase().includes(query) ||
        gift.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroBanner}
              alt="Durga Puja Gifts"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Celebrate Durga Puja with Love
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Discover our curated collection of premium festive gifts for your loved ones
            </p>
            
            <div className="w-full max-w-2xl">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>
        </section>

        {/* Gifts Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {searchQuery ? "Search Results" : "Featured Gifts"}
            </h2>
            <p className="text-muted-foreground">
              {filteredGifts.length} {filteredGifts.length === 1 ? "gift" : "gifts"} found
            </p>
          </div>

          {filteredGifts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGifts.map((gift) => (
                <GiftCard key={gift.id} gift={gift} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No gifts found matching your search.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
