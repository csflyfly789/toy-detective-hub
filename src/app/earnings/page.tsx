import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, DollarSign, Shield, Heart } from "lucide-react";

export default function EarningsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm text-gray-600">
              <span>Home</span> &gt; <span className="text-gray-900">How We Earn Money</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">How We Earn Money</h1>

            {/* Introduction */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Toy Detective Hub is a personal blog and resource site owned and operated by Mike and John,
                  two passionate toy collectors who happen to be cousins. This website is an extension of our
                  main hobby - collecting vintage toys, diecast models, and related collectibles.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  To help support our website operations and continue providing valuable content to the collecting
                  community, we participate in several legitimate monetization programs. We believe in complete
                  transparency about how we earn money from this site.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-900">Important Note</h3>
                  </div>
                  <p className="text-blue-800">
                    <strong>Using any affiliate links on our site DOES NOT cost you anything extra!</strong> The price
                    you pay remains exactly the same whether you use our links or go directly to the merchant.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Affiliate Marketing Explanation */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  Affiliate Marketing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We participate in affiliate marketing programs, which means we may earn a small commission
                  when you make a purchase through certain links on our website. Here's how it works:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">How Affiliate Links Work</h4>
                    <p className="text-gray-700">
                      When you click on an affiliate link and make a purchase (or sometimes perform other actions),
                      we receive a small commission from the merchant. This doesn't affect your price - it's a
                      thank-you payment from the company for referring you.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Commission Rates</h4>
                    <p className="text-gray-700">
                      Commission rates vary by merchant but are typically between 1-8% of your purchase price.
                      This small amount helps us cover website hosting, research materials, and coffee for those
                      late-night writing sessions!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Affiliates */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Our Current Affiliate Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">Amazon Associates</Badge>
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                    </div>
                    <p className="text-sm text-gray-600">
                      When we recommend books, tools, or products available on Amazon,
                      we may include affiliate links to help fund our operations.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">eBay Partner Network</Badge>
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                    </div>
                    <p className="text-sm text-gray-600">
                      Many collectibles we discuss are available on eBay. Our affiliate
                      links help support the site while directing you to relevant listings.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">Specialty Toy Retailers</Badge>
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                    </div>
                    <p className="text-sm text-gray-600">
                      We partner with reputable toy and collectible dealers who offer
                      quality products relevant to our readers' interests.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">Google AdSense</Badge>
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                    </div>
                    <p className="text-sm text-gray-600">
                      Advertisements you see on our site are managed through Google AdSense.
                      Contact Google directly for any ad-related inquiries.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Promise */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  Our Promise to You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Honest Reviews Only</h4>
                    <p className="text-green-800">
                      We only recommend products and services we genuinely believe in. Our reviews are based
                      on personal experience and research, never influenced by potential commissions.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Collectors First</h4>
                    <p className="text-blue-800">
                      Remember, we're collectors ourselves! We understand the hobby from the inside and would
                      never compromise our integrity for short-term financial gain.
                    </p>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Clear Disclosure</h4>
                    <p className="text-purple-800">
                      Whenever we review products sent to us by manufacturers or publishers, we clearly
                      disclose this relationship in our articles. Transparency is paramount.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Future Plans */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Looking Forward</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  As our site grows, we may expand our monetization efforts to include:
                </p>

                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>• Product reviews for manufacturers (always clearly disclosed)</li>
                  <li>• Premium content for serious collectors</li>
                  <li>• Collecting guides and educational materials</li>
                  <li>• Partnerships with museums and educational institutions</li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  Any future revenue streams will be implemented with the same commitment to transparency
                  and serving the collecting community that guides everything we do.
                </p>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Questions or Concerns?</h3>
                <p className="text-gray-700 mb-6">
                  If you have any questions about our monetization practices or want to suggest
                  improvements to our transparency efforts, we'd love to hear from you.
                </p>

                <p className="text-lg text-blue-600 font-semibold">
                  Thanks for supporting Toy Detective Hub!
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Mike and John</strong><br />
                  The Toy Detective Hub Team
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
