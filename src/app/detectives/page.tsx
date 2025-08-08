import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function DetectivesPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm text-gray-600">
              <span>Home</span> &gt; <span className="text-gray-900">Meet The Detectives</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Meet The Detectives</h1>

            {/* Detective Mike */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="w-48 h-48 mx-auto lg:mx-0 bg-blue-100 rounded-lg flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                        alt="Detective Mike"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Detective Mike</h2>

                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong>Occupation:</strong> Senior Toy Appraiser; Collector; Restoration Specialist; Blogger
                      </div>

                      <div>
                        <strong>How long have you been collecting?</strong> 35 years - since I was 5 years old!
                      </div>

                      <div>
                        <strong>Main areas of interest:</strong> Dinky Toys; Corgi; Matchbox; Hot Wheels; Vintage action figures; Model trains
                      </div>

                      <div>
                        <strong>Most memorable collecting moment:</strong> Finding a mint condition Dinky Toys Thunderbirds FAB 1 at a garage sale for £2. The seller had no idea what they had!
                      </div>

                      <div>
                        <strong>Biggest collecting regret:</strong> Passing on a complete set of original Star Wars figures in 1985 because I thought they were "too expensive" at £50 for the lot!
                      </div>

                      <div>
                        <strong>Favorite toy/model:</strong> Corgi Toys 261 James Bond Aston Martin DB5 - the one that started it all for me
                      </div>

                      <div>
                        <strong>Collecting philosophy:</strong> "Buy what you love, not what you think will make money. The passion should come first."
                      </div>

                      <div>
                        <strong>Specialty areas:</strong> Restoration techniques; British diecast manufacturers; Market valuations
                      </div>

                      <div>
                        <strong>What I love about collecting:</strong> The thrill of discovery and the stories behind each piece. Every toy has a history.
                      </div>

                      <div>
                        <strong>Best advice for new collectors:</strong> "Start with what you're passionate about, learn about condition and rarity, and don't be afraid to ask questions in the collecting community."
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detective John */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="w-48 h-48 mx-auto lg:mx-0 bg-green-100 rounded-lg flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                        alt="Detective John"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Detective John</h2>

                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong>Occupation:</strong> Vintage Toy Researcher; Collector; Market Analyst; Content Creator
                      </div>

                      <div>
                        <strong>How long have you been collecting?</strong> 32 years - started when I was 8!
                      </div>

                      <div>
                        <strong>Main areas of interest:</strong> Matchbox; Mercury models; Tekno; Solido; Vintage plastic toys; Rare variations
                      </div>

                      <div>
                        <strong>Most memorable collecting moment:</strong> Discovering a previously unknown color variation of a Mercury Ferrari at a small French toy fair - it's now documented in the official registry.
                      </div>

                      <div>
                        <strong>Biggest collecting regret:</strong> Not buying every Kemlow model I saw in the 1990s when they were still affordable!
                      </div>

                      <div>
                        <strong>Favorite toy/model:</strong> My Mercury Alfa Romeo Giulia TZ - perfect proportions and incredible detail for such a small scale.
                      </div>

                      <div>
                        <strong>Research passion:</strong> Uncovering the histories of lesser-known manufacturers and documenting variations that collectors might miss.
                      </div>

                      <div>
                        <strong>Specialty areas:</strong> European diecast manufacturers; Color variations; Production histories; Market trends
                      </div>

                      <div>
                        <strong>What drives my collecting:</strong> The detective work - researching unknown pieces, connecting with other collectors worldwide, and preserving toy history.
                      </div>

                      <div>
                        <strong>Philosophy on condition:</strong> "I prefer toys with character - a few play marks tell a story and often make the piece more interesting than a perfect example."
                      </div>

                      <div>
                        <strong>Advice for fellow collectors:</strong> "Don't overlook the obscure brands - some of the best finds are hiding in plain sight under unknown manufacturer names."
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Collaboration */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Collaboration</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">How We Work Together</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Mike focuses on restoration and appraisal while John specializes in research and documentation.
                      Together, we combine practical expertise with academic rigor to provide the most comprehensive
                      insights into the world of toy collecting.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Shared Goals</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We're committed to helping collectors at every level, from beginners looking for guidance
                      to advanced collectors seeking detailed technical information. Our complementary skills
                      allow us to cover every aspect of the hobby comprehensively.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
