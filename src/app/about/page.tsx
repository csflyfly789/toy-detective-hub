import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm text-gray-600">
              <span>Home</span> &gt; <span className="text-gray-900">About Us</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">WE ARE...</h2>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Two passionate collectors - Mike and John - who happen to be cousins and lifelong friends
                  united by our shared love for vintage toys and diecast models.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Both of our fathers were collectors, so we were introduced to the hobby at a very early age.
                  Mike started collecting when he was just 5 years old, while John began his journey at age 8.
                  What started as childhood fascination has grown into a lifelong passion that defines who we are.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  We have always shared our knowledge and experiences with each other, but in 2015, we decided
                  to combine our expertise and start buying and selling together. What began as weekend fun
                  slowly evolved into something much more meaningful.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  After some significant life changes and the realization that our corporate jobs weren't
                  fulfilling our true passions, we took the leap in 2018 to become full-time collectors
                  and dealers. It was the best decision we ever made.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  We chose the name "Toy Detective Hub" because we're constantly tracking down rare finds,
                  investigating the history behind mysterious models, and hunting for those elusive collectibles
                  at auctions, toy fairs, and online marketplaces. Like detectives, we piece together clues
                  to uncover the stories behind every toy.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Both of us enjoy writing and sharing our discoveries. We started documenting our experiences
                  in 2016, and this website represents our effort to share that knowledge with fellow collectors
                  around the world. We believe that the collecting community is strongest when we all share our
                  insights and help each other learn.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Toy Detective Hub is more than just a website - it's our contribution to the collecting
                  community. We hope you'll join us on this journey, share your own experiences, and help
                  us build a resource that benefits collectors everywhere.
                </p>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  Our hobby is our passion. Collecting, researching, buying, selling, and meeting new friends
                  along the way brings us immense joy. We hope our enthusiasm is contagious and that our
                  stories inspire you in your own collecting journey.
                </p>

                <div className="border-t pt-6">
                  <p className="text-xl font-semibold text-blue-600">
                    Happy Collecting!
                  </p>
                  <p className="text-lg text-gray-700 mt-2">
                    <strong>Mike and John</strong><br />
                    The Toy Detective Hub Team
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mission Statement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To create the most comprehensive and helpful resource for toy collectors,
                    sharing knowledge, discoveries, and the joy of collecting with enthusiasts worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Authentic expertise and honest reviews</li>
                    <li>• Community-first approach to collecting</li>
                    <li>• Preservation of toy collecting history</li>
                    <li>• Supporting collectors at all levels</li>
                  </ul>
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
