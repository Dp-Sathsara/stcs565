import React, { useState } from 'react';
import { CalendarIcon, UserIcon, PlusIcon } from 'lucide-react';
interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
}
const Blog: React.FC = () => {
  const [showPostForm, setShowPostForm] = useState(false);
  // Sample blog posts
  const blogPosts: BlogPost[] = [{
    id: '1',
    title: "Getting Started with Data Science: A Student's Perspective",
    author: 'Amal Fernando',
    date: 'June 12, 2025',
    content: "Data science is an exciting field that combines statistics, computer science, and domain expertise to extract meaningful insights from data. As a student, getting started can seem overwhelming, but with the right approach, it's absolutely manageable. In this post, I'll share my journey into data science, the resources I found helpful, and tips for fellow students looking to explore this field.\n\nFirst, focus on building a strong foundation in statistics and programming. Understanding concepts like probability, hypothesis testing, and regression is crucial. For programming, Python is an excellent language to start with due to its readability and extensive libraries for data analysis like pandas and scikit-learn.\n\nNext, work on small projects to apply what you've learned. Start with simple data analysis tasks and gradually move to more complex projects. The SCSSA workshops provide great opportunities to collaborate with peers on such projects.\n\nRemember, persistence is key. Data science is a vast field, and it's okay to feel lost sometimes. Join communities like our department's study groups or online forums to share knowledge and support each other.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }, {
    id: '2',
    title: 'My Internship Experience at a Leading Tech Company',
    author: 'Shalini Perera',
    date: 'May 28, 2025',
    content: "Securing an internship at a leading tech company was one of the most rewarding experiences of my academic journey. In this blog post, I want to share my experience, the application process, and what I learned during my time there.\n\nThe application process was competitive but straightforward. It involved an online assessment testing algorithmic thinking, followed by two rounds of technical interviews. The SCSSA mock interview sessions were incredibly helpful in preparing for these interviews.\n\nDuring the internship, I worked on a real-world project involving natural language processing. The learning curve was steep, but the supportive team environment made it manageable. I gained valuable insights into software development practices, version control with Git, and collaborative coding.\n\nBeyond technical skills, the internship taught me the importance of communication, time management, and adaptability in a professional setting. These soft skills are just as crucial as technical knowledge in the workplace.\n\nFor students looking to secure internships, I recommend starting early, polishing your resume, practicing coding interviews, and leveraging the university's career services and the SCSSA's industry connections.",
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }, {
    id: '3',
    title: 'The Role of Statistics in Modern Machine Learning',
    author: 'Dinesh Jayawardena',
    date: 'May 15, 2025',
    content: "As machine learning continues to evolve, its deep connection to statistical principles remains fundamental. This blog post explores how statistical concepts underpin modern machine learning algorithms and why a strong statistical foundation is essential for aspiring data scientists.\n\nMany machine learning algorithms are extensions or applications of statistical methods. Linear regression, a cornerstone of statistics, forms the basis for more complex models like neural networks. Similarly, concepts like maximum likelihood estimation are central to various classification algorithms.\n\nUnderstanding statistical inference helps in evaluating model performance and making reliable predictions. Concepts like confidence intervals and hypothesis testing are crucial for determining if a model's results are statistically significant or merely due to chance.\n\nMoreover, statistics provides the framework for experimental design and data collection, ensuring that the data used to train machine learning models is representative and unbiased.\n\nAs students of both statistics and computer science, we are uniquely positioned to bridge these fields. By strengthening our statistical intuition alongside programming skills, we can develop more robust and interpretable machine learning solutions.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }];
  return <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            SCSSA Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, experiences, and knowledge sharing from our community of
            statistics and computer science students.
          </p>
        </div>
        {/* Post Blog Button */}
        <div className="mb-8 flex justify-end">
          <button onClick={() => setShowPostForm(!showPostForm)} className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
            <PlusIcon size={18} className="mr-2" />
            {showPostForm ? 'Cancel' : 'Write a Blog Post'}
          </button>
        </div>
        {/* Post Blog Form */}
        {showPostForm && <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h2 className="text-2xl font-bold mb-6">Write a New Blog Post</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="blog-title" className="block text-gray-700 font-medium mb-2">
                  Title
                </label>
                <input type="text" id="blog-title" placeholder="Blog post title" className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="blog-image" className="block text-gray-700 font-medium mb-2">
                  Featured Image
                </label>
                <input type="file" id="blog-image" accept="image/*" className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="blog-content" className="block text-gray-700 font-medium mb-2">
                  Blog Content
                </label>
                <textarea id="blog-content" rows={10} placeholder="Write your blog post content here..." className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                  Publish Blog Post
                </button>
              </div>
            </form>
          </div>}
        {/* Blog Posts */}
        <div className="space-y-10">
          {blogPosts.map(post => <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {post.title}
                </h2>
                <div className="flex items-center text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <UserIcon size={16} className="mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon size={16} className="mr-1" />
                    {post.date}
                  </div>
                </div>
                <div className="text-gray-700 mb-6">
                  {post.content.split('\n\n').map((paragraph, idx) => <p key={idx} className="mb-4">
                      {paragraph}
                    </p>)}
                </div>
                <div className="flex justify-end">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Share Post
                  </button>
                </div>
              </div>
            </article>)}
        </div>
      </div>
    </div>;
};
export default Blog;