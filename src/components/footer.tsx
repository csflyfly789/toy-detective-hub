import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const recentPosts = [
  "Enhance your diecasts with the Molotow Liquid Chrome Pen",
  "Green or Green, Red or Red, Why Oh Why?",
  "Another Dinky Toys 130 Ford Corsair Mystery",
];

const categories = [
  "Diecast Collecting",
  "Dinky Toys",
  "Corgi",
  "Matchbox",
  "Hot Wheels",
  "Vintage Toys",
];

const socialLinks = [
  { name: "Twitter", icon: "𝕏", href: "#" },
  { name: "Facebook", icon: "f", href: "#" },
  { name: "Pinterest", icon: "P", href: "#" },
  { name: "Instagram", icon: "📷", href: "#" },
  { name: "Tumblr", icon: "t", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-3">
              {recentPosts.map((post, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-blue-100 hover:text-white text-sm transition-colors leading-relaxed"
                  >
                    {post}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-blue-100 text-sm mb-4">
              Subscribe To Toy Detective Hub Newsletter
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
              <Button
                variant="secondary"
                className="w-full bg-white text-blue-600 hover:bg-blue-50"
              >
                Submit
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-blue-100 hover:text-white text-sm transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded text-center text-sm leading-8 transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <div>
              <h4 className="font-medium mb-2">Please Share This</h4>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-white/20 text-white hover:bg-white/10"
                >
                  𝕏
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-white/20 text-white hover:bg-white/10"
                >
                  f
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-white/20 text-white hover:bg-white/10"
                >
                  P
                </Button>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-blue-100 text-sm">
            © Toy Detective Hub 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
