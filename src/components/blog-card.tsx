import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  category?: string;
}

export default function BlogCard({ title, excerpt, image, href, category }: BlogCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardContent className="p-6">
        {category && (
          <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-md mb-2 font-medium">
            {category}
          </span>
        )}
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link href={href}>
            Read More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
