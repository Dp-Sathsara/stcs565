import React from "react";
import { CalendarIcon } from "lucide-react";
import { Link } from "react-router-dom";
interface NewsCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
}
const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  category,
  date,
  image,
  summary,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
            {category}
          </span>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <CalendarIcon size={14} className="mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {summary}
        </p>
        <Link
          to={`/news/${id}`}
          className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 flex items-center"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
export default NewsCard;
