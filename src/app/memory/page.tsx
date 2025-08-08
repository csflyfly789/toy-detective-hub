import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Calendar, Star } from "lucide-react";

export default function MemoryPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm text-gray-600">
              <span>Home</span> &gt; <span className="text-gray-900">In Memory</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">In Memory</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Honoring the collectors, family members, and friends who shared our passion for toys
                and helped shape our journey in the collecting community.
              </p>
            </div>

            {/* Memorial Section */}
            <Card className="mb-8">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                  <Heart className="w-6 h-6 text-red-500" />
                  Remembering Our Mentors
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed text-center">
                  This page is dedicated to those special people who introduced us to the wonderful world
                  of toy collecting and those we've lost along our journey. Their passion, knowledge, and
                  friendship continue to inspire us every day.
                </p>
              </CardContent>
            </Card>

            {/* Memorial Cards */}
            <div className="space-y-8">

              {/* Memorial 1 */}
              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Star className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Frank Mitchell</h3>
                      <p className="text-gray-600">Mike's Father | 1945 - 2017</p>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>Collecting mentor and first inspiration</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Frank was the one who first put a Dinky Toy in Mike's hands when he was just five years old.
                    A passionate collector of British diecast models, Frank had an incredible eye for quality and
                    taught Mike everything about condition, rarity, and the importance of preserving toy history.
                    His collection of over 3,000 models was legendary in the local collecting community.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Frank's favorite saying was "Every toy tells a story - our job is to listen." His wisdom
                    and patience shaped not just Mike's collecting philosophy, but his approach to life.
                    The restoration techniques and appraisal skills Mike shares today were all learned at
                    Frank's workbench.
                  </p>
                </CardContent>
              </Card>

              {/* Memorial 2 */}
              <Card className="border-l-4 border-green-500">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Star className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Dorothy Stevens</h3>
                      <p className="text-gray-600">John's Grandmother | 1932 - 2019</p>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>Source of countless childhood memories</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Grandma Dorothy was the keeper of the "treasure box" - an old wooden chest filled with
                    toys from the 1950s and 60s that she saved from John's father's childhood. Every visit
                    to her house meant a trip to the attic and another story about each toy's origin.
                    She taught John that toys weren't just objects, but vessels of memory and joy.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Dorothy had an amazing memory for details and could tell you exactly when and where
                    each toy was purchased, who played with it, and what adventures it had been on.
                    Her stories sparked John's interest in the research side of collecting and his
                    dedication to documenting toy histories.
                  </p>
                </CardContent>
              </Card>

              {/* Memorial 3 */}
              <Card className="border-l-4 border-purple-500">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <Star className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">George "Geordie" Harrison</h3>
                      <p className="text-gray-600">Mentor and Friend | 1938 - 2020</p>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>The gentleman collector who taught us about community</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Geordie was a fixture at every toy fair within a hundred miles and knew more about
                    European diecast manufacturers than anyone we've ever met. But more than his knowledge,
                    it was his kindness and willingness to help new collectors that made him special.
                    He mentored dozens of collectors over the years, always with a smile and endless patience.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Both Mike and John had countless conversations with Geordie about everything from
                    Mercury Models to the proper way to clean vintage diecast. He taught us that collecting
                    is about building relationships and sharing knowledge, not just accumulating objects.
                    His spirit of generosity continues to guide how we interact with the collecting community.
                  </p>
                </CardContent>
              </Card>

            </div>

            {/* Dedication */}
            <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Their Legacy Lives On</h2>
                <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto">
                  Every article we write, every piece of advice we share, and every collector we help
                  carries forward the wisdom and passion these remarkable people shared with us.
                  They taught us that collecting is about more than just toys - it's about preserving
                  history, building community, and finding joy in the simple pleasure of discovery.
                </p>

                <div className="border-t pt-6">
                  <p className="text-lg font-semibold text-blue-600 mb-2">
                    "In memory of those who taught us that every toy tells a story"
                  </p>
                  <p className="text-gray-600">
                    This website is our tribute to their memory and our commitment to keeping their
                    spirit of sharing and community alive in the collecting world.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Community Section */}
            <Card className="mt-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Honoring Our Collecting Community
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  If you'd like to share a memory of a collector who inspired you, or if you have
                  stories about any of the people mentioned here, we'd love to hear from you.
                  The collecting community is built on shared memories and mutual support.
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
