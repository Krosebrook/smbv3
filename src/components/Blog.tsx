import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Corporate Branding Trends That Will Define 2024",
    excerpt: "Discover the latest trends in corporate branding that successful companies are using to stand out in today's competitive market.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    category: "Trends",
    readTime: "5 min read",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "How Custom Promotional Products Boost Employee Engagement",
    excerpt: "Learn how thoughtfully designed branded merchandise can improve team morale and create a stronger company culture.",
    author: "Michael Chen",
    date: "December 10, 2024",
    category: "Employee Engagement",
    readTime: "7 min read",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "The ROI of Premium Corporate Gifting Programs",
    excerpt: "Data-driven insights on how strategic corporate gifting can increase client retention and drive business growth.",
    author: "Emily Rodriguez",
    date: "December 5, 2024",
    category: "Business Strategy",
    readTime: "6 min read",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Sustainable Branding: Eco-Friendly Promotional Products",
    excerpt: "Explore environmentally conscious promotional product options that align with your company's sustainability goals.",
    author: "David Kim",
    date: "November 28, 2024",
    category: "Sustainability",
    readTime: "4 min read",
    image: "/api/placeholder/400/250"
  },
  {
    id: 5,
    title: "From Concept to Delivery: Our Custom Branding Process",
    excerpt: "Take a behind-the-scenes look at how we transform your brand vision into high-impact promotional products.",
    author: "Lisa Thompson",
    date: "November 20, 2024",
    category: "Process",
    readTime: "8 min read",
    image: "/api/placeholder/400/250"
  },
  {
    id: 6,
    title: "Trade Show Success: Promotional Products That Convert",
    excerpt: "Maximize your trade show ROI with promotional products that attract visitors and generate qualified leads.",
    author: "Robert Wilson",
    date: "November 15, 2024",
    category: "Events",
    readTime: "5 min read",
    image: "/api/placeholder/400/250"
  }
];

const categories = [
  "All Posts",
  "Trends",
  "Employee Engagement", 
  "Business Strategy",
  "Sustainability",
  "Process",
  "Events"
];

const Blog = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Branding Insights & Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, industry trends, and actionable strategies 
            to elevate your corporate branding efforts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All Posts" ? "default" : "outline"}
              className="cursor-pointer hover-scale px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16 animate-scale-in">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover-scale">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Tag className="w-16 h-16 mx-auto mb-4" />
                    <p>Featured Article Image</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <Badge className="mb-4">Featured</Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {blogPosts[0].readTime}
                  </Badge>
                </div>
                <Button className="hover-scale">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card 
              key={post.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Tag className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Article Image</p>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-lg hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
                <Button variant="ghost" className="w-full mt-4 hover-scale">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12 animate-fade-in">
          <Button variant="outline" size="lg" className="hover-scale">
            Load More Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;