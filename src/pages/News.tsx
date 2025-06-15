import React, { useState } from "react";
import { SearchIcon, PlusIcon } from "lucide-react";
import NewsCard from "../components/UI/NewsCard";
// Sample news data
const allNewsItems = [
  {
    id: "1",
    title: "Annual General Meeting",
    category: "Events",
    date: "August 31, 2024",
    image:
      "https://i.postimg.cc/CLCpV0tB/DSC0492.jpg",
    summary:
      "SCSSA Annual General Meeting 2024; A Celebration of Triumphs and the Dawn of New Horizons.",
  },
  {
    id: "2",
    title: "Munch Mania 2.0",
    category: "Events",
    date: "November 19, 2024",
    image:
      "https://i.postimg.cc/Jz2q6686/FB-IMG-1749893584205.jpg",
    summary:
      "SCSSA’s Munch Mania 2.0; A Flavor-Fueled Festival of Fun and Unity!.",
  },
  {
    id: "3",
    title: "PhD session(USA)",
    category: "Workshops",
    date: "October 19, 2024",
    image:
      "https://i.postimg.cc/Jzy3k7Lt/last.png",
    summary:
      "SSCSSA’s Online Session; Mastering the PhD Application Process in the U.S. ",
  },
  {
    id: "4",
    title: "Data Science",
    category: "Workshops",
    date: "November 21, 2024",
    image:
      "https://i.postimg.cc/bY7LW6wS/Whats-App-Image-2025-06-10-at-3-23-03-PM.jpg",
    summary:
      "Datasight'24 , Illuminating the Path to the Future of Data Science.",
  },
  {
    id: "5",
    title: "Stat Bee 2024",
    category: "Competition",
    date: "October 17, 2024",
    image:
      "https://i.postimg.cc/nzT9WNJ6/DSC-0207.jpg",
    summary:
      "Join our upcoming workshop on machine learning fundamentals led by industry experts. Perfect for beginners and intermediate learners.",
  },
  {
    id: "6",
    title: "PhD Session(Australia)",
    category: "Workshops",
    date: "December 22, 2024",
    image:
      "https://i.postimg.cc/MG0nMH97/FB-IMG-1749893525554.jpg",
    summary:
      "Charting the Path to a PhD in Australia, An Inspiring Session for Students.",
  },
  {
    id: "7",
    title: "PyQuest’24",
    category: "Workshops",
    date: "November 16, 2024",
    image:
      "https://i.postimg.cc/xCkPVKff/wall.png",
    summary:
      "PyQuest24: A Journey into Python Programming.",
  },
  {
    id: "8",
    title: "STCS Camp 2025",
    category: "Event",
    date: "January 11, 2025",
    image:
      "https://i.postimg.cc/dQrx7YFq/FB-IMG-1749893510703.jpg",
    summary:
      "STCS Camp 2025, held on 11th January at Che Adventure Park, united over 100 undergraduates for a day of adventure, leadership activities, and industry insights, promoting teamwork, personal growth, and a strong sense of community.",
  },
];
// Unique categories
const categories = [
  "All",
  ...new Set(allNewsItems.map((item) => item.category)),
];
const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPostForm, setShowPostForm] = useState(false);
  // Filter news items based on category and search query
  const filteredNews = allNewsItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            News & Highlights
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest happenings, announcements, and
            achievements at SCSSA.
          </p>
        </div>
        {/* Search and Filter */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md whitespace-nowrap mr-2 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <SearchIcon
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        {/* Post News Button */}
        {/* <div className="mb-8 flex justify-end">
            <button
              onClick={() => setShowPostForm(!showPostForm)}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              <PlusIcon size={18} className="mr-2" />
              {showPostForm ? "Cancel" : "Post News"}
            </button>
          </div> */}
        {/* Post News Form */}
        {/* {showPostForm && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-10">
              <h2 className="text-2xl font-bold mb-6">Post New Article</h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Article title"
                    className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {categories
                        .filter((c) => c !== "All")
                        .map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="author"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Author Name
                    </label>
                    <input
                      type="text"
                      id="author"
                      placeholder="Your name"
                      className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="summary"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Short Description
                  </label>
                  <textarea
                    id="summary"
                    rows={2}
                    placeholder="Brief summary of the article"
                    className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="content"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Content
                  </label>
                  <textarea
                    id="content"
                    rows={6}
                    placeholder="Write the full article content here..."
                    className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
                  >
                    Publish Article
                  </button>
                </div>
              </form>
            </div>
          )} */}
        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <NewsCard
                key={news.id}
                id={news.id}
                title={news.title}
                category={news.category}
                date={news.date}
                image={news.image}
                summary={news.summary}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No news articles found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default News;
