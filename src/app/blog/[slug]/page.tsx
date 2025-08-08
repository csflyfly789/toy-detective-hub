import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPostById, getRelatedPosts } from "@/data/blog-posts";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BlogCard from "@/components/blog-card";
import CommentSection from "@/components/comment-section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

export function generateStaticParams() {
  return [
    { slug: "molotow-chrome-pen" },
    { slug: "green-or-red" },
    { slug: "ford-corsair-mystery" },
    { slug: "kemlow" },
    { slug: "mercury-ferrari" },
    { slug: "mystery-toy-car" }
  ];
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;

  // Extract the ID from the slug (e.g., "molotow-chrome-pen" -> "1")
  const slugToIdMap: { [key: string]: string } = {
    "molotow-chrome-pen": "1",
    "green-or-red": "2",
    "ford-corsair-mystery": "3",
    "kemlow": "4",
    "mercury-ferrari": "5",
    "mystery-toy-car": "6"
  };

  const postId = slugToIdMap[resolvedParams.slug];
  if (!postId) {
    notFound();
  }

  const post = getBlogPostById(postId);
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(postId, post.category);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/#blog" className="hover:text-blue-600">Blog</Link></li>
                <li>/</li>
                <li className="text-gray-900">{post.title}</li>
              </ol>
            </nav>

            {/* Article Header */}
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full font-medium mb-4">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.authorAvatar}
                      alt={post.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-gray-600 font-medium">Share:</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-gray-600 font-medium">Tags:</span>
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <Card className="mt-8 p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.author}</h3>
                    <p className="text-gray-600">
                      {post.author === "Detective Mike"
                        ? "One half of the Toy Detective Hub duo, Mike has been collecting diecast models for over 30 years. His expertise lies in restoration techniques and rare British manufacturers."
                        : "The other half of our detective team, John specializes in vintage toy history and has an encyclopedic knowledge of manufacturing variations and market trends."
                      }
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <CommentSection postId={postId} />
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-white py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard
                      key={relatedPost.id}
                      title={relatedPost.title}
                      excerpt={relatedPost.excerpt}
                      image={relatedPost.image}
                      href={relatedPost.href}
                      category={relatedPost.category}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
