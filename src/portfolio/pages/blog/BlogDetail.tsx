import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const blogContent: any = {
  "designing-scalable-systems": {
    title: "System Design Basics: Designing Scalable Systems",
    content: `
Scalability is the ability of a system to handle increasing traffic.

1. Horizontal Scaling
Add more servers behind a load balancer.

2. Caching
Use Redis to reduce database load.

3. Database Replication
Separate read and write workloads.

4. Microservices
Break monolith into independent services.

Real-world examples:
Netflix, Amazon, and Uber use these principles.
    `,
  },

  "cap-theorem-explained": {
    title: "CAP Theorem Explained Simply",
    content: `
CAP Theorem states that a distributed system can guarantee only two:

1. Consistency
2. Availability
3. Partition Tolerance

CP Systems: Banking systems  
AP Systems: Social media platforms  

You must choose trade-offs wisely.
    `,
  },

  "design-url-shortener": {
    title: "How to Design a URL Shortener",
    content: `
Step 1: Requirements
- Shorten URL
- Redirect users
- Handle millions of requests

Step 2: Database Schema
id | original_url | short_code

Step 3: Use Base62 Encoding

Step 4: Cache frequently accessed URLs

Step 5: Scale using Load Balancer + CDN
    `,
  },
};

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogContent[slug || ""];

  if (!post) return <div className="text-white p-10">Post Not Found</div>;

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-blue-400 mb-10"
        >
          <FaArrowLeft /> Back to Blog
        </Link>

        <h1 className="text-4xl font-bold text-blue-400 mb-8">
          {post.title}
        </h1>

        <div className="text-gray-300 whitespace-pre-line leading-relaxed text-lg">
          {post.content}
        </div>

      </div>
    </div>
  );
};

export default BlogDetail;
