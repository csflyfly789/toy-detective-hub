import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ShoppingCart, Star, Clock, Tag } from "lucide-react";

export default function SalePage() {
  const featuredItems = [
    {
      id: 1,
      title: "Dinky Toys 181 Volkswagen Beetle",
      condition: "Excellent",
      price: "£45.00",
      description: "Beautiful original condition with minimal play wear. All wheels intact, no chips or major scratches.",
      image: "https://ext.same-assets.com/4259236917/1945652656.webp",
      category: "Dinky Toys",
      featured: true
    },
    {
      id: 2,
      title: "Corgi Toys 261 James Bond Aston Martin",
      condition: "Very Good",
      price: "£125.00",
      description: "Working ejector seat and bulletproof screen. Minor paint wear consistent with age.",
      image: "https://ext.same-assets.com/4259236917/2195916311.webp",
      category: "Corgi",
      featured: true
    },
    {
      id: 3,
      title: "Mercury Ferrari 250 GTO",
      condition: "Mint",
      price: "£85.00",
      description: "Exceptional Italian craftsmanship. Perfect paint and chrome, unplayed condition.",
      image: "https://ext.same-assets.com/4259236917/3813409469.jpeg",
      category: "Mercury",
      featured: false
    },
    {
      id: 4,
      title: "Matchbox Yesteryear Y-12 Model T Ford",
      condition: "Good",
      price: "£20.00",
      description: "Solid example with character. Some paint loss but mechanically sound.",
      image: "https://ext.same-assets.com/4259236917/2181631403.jpeg",
      category: "Matchbox",
      featured: false
    },
    {
      id: 5,
      title: "Hot Wheels Redline Python",
      condition: "Near Mint",
      price: "£35.00",
      description: "Original redline wheels, spectraflame paint in excellent condition.",
      image: "https://ext.same-assets.com/4259236917/1718458416.jpeg",
      category: "Hot Wheels",
      featured: false
    },
    {
      id: 6,
      title: "Tekno Denmark Mercedes Truck",
      condition: "Very Good",
      price: "£65.00",
      description: "Rare Danish manufacturer piece. Excellent build quality and attention to detail.",
      image: "https://ext.same-assets.com/4259236917/3593280001.jpeg",
      category: "Tekno",
      featured: false
    }
  ];

  const getConditionBadge = (condition: string) => {
    const colors = {
      "Mint": "bg-green-100 text-green-800",
      "Near Mint": "bg-green-100 text-green-800",
      "Excellent": "bg-blue-100 text-blue-800",
      "Very Good": "bg-yellow-100 text-yellow-800",
      "Good": "bg-orange-100 text-orange-800"
    };
    return colors[condition as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm text-gray-600">
              <span>Home</span> &gt; <span className="text-gray-900">Items For Sale</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white py-12 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Items For Sale</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Carefully curated collectibles from our personal collection and recent discoveries.
              Each item has been researched, authenticated, and fairly priced.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">

            {/* Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Authentication</h3>
                  <p className="text-gray-600 text-sm">
                    Every item is personally inspected and verified by our team of collecting experts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Purchasing</h3>
                  <p className="text-gray-600 text-sm">
                    All transactions processed through trusted platforms with buyer protection.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
                  <p className="text-gray-600 text-sm">
                    Carefully packaged and shipped within 24 hours of purchase confirmation.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Featured Items */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                Featured Items
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredItems.filter(item => item.featured).map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                        <Badge className={`text-xs ${getConditionBadge(item.condition)}`}>
                          {item.condition}
                        </Badge>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-600">{item.price}</span>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Listing
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Items */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Tag className="w-6 h-6 text-blue-500" />
                Current Listings
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredItems.filter(item => !item.featured).map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                        <Badge className={`text-xs ${getConditionBadge(item.condition)}`}>
                          {item.condition}
                        </Badge>
                      </div>

                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">{item.title}</h3>
                      <p className="text-gray-600 text-xs mb-3 leading-relaxed line-clamp-2">{item.description}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-blue-600">{item.price}</span>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Selling Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Selling Your Collection?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We're always interested in acquiring quality pieces for our collection and to offer
                    to other collectors. If you're looking to sell items, we offer:
                  </p>

                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>• Free appraisals and consultations</li>
                    <li>• Fair market pricing</li>
                    <li>• Quick, hassle-free transactions</li>
                    <li>• Collection services for larger lots</li>
                  </ul>

                  <Button variant="outline" className="w-full">
                    Contact Us About Selling
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Our Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Find our current listings on these trusted platforms:
                  </p>

                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        eBay Store: ToyDetectiveHub
                      </a>
                    </Button>

                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Etsy Shop: Vintage Toy Detectives
                      </a>
                    </Button>

                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Facebook Marketplace
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
