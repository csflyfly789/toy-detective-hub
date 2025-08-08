import Header from "@/components/header";
import BlogCard from "@/components/blog-card";
import Footer from "@/components/footer";
import { blogPosts } from "@/data/blog-posts";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* 主标题区域 */}
        <div className="bg-white py-12 border-b">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Toy Detective Hub
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are two big kids (who just happen to be cousins) who never grew up! We collect old toys and love to blog about our hobby!
              We collect mainly diecast model cars – Dinky, Corgi and Matchbox, but are interested in all old toys such as Scalextric; Action Man;
              Star Wars / Action Figures; Toy Soldiers; Lego – basically anything which takes us back to our childhood.
            </p>
          </div>
        </div>



        {/* 博客文章网格 */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                href={post.href}
                category={post.category}
              />
            ))}
          </div>
        </div>

        {/* 加载更多按钮 */}
        <div className="container mx-auto px-4 pb-12 text-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Load More Articles
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
