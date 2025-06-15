import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import Slideshow from "../components/UI/Slideshow";
import NewsCard from "../components/UI/NewsCard";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.section>
  );
};

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

const Home: React.FC = () => {
  // Sample data for slideshow
  const slideshowImages = [
    "https://i.postimg.cc/gJTmnPby/1.jpg",
    "https://i.postimg.cc/QCKs7nj2/3.jpg",
    "https://i.postimg.cc/HWF8hq87/6.jpg",
    "https://i.postimg.cc/T3Jyhh7r/7.jpg",
    "https://i.postimg.cc/7ZkGxSVH/4.jpg",
  ];

  // Sample news data
  const newsItems = [
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
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900">
      {/* Hero Section with Slideshow */}
      <section className="relative h-[500px] md:h-[600px]">
        <div className="absolute inset-0">
          <Slideshow images={slideshowImages} />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 flex items-center"
        >
          <div className="text-white p-6 max-w-2xl ml-4 md:ml-[10%]">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Statistics & Computer Science Students' Association
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl mb-8"
            >
              University of Kelaniya
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-xl"
            >
              Empowering students through education, innovation, and community
              in the fields of Statistics and Computer Science.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium text-lg transition-colors"
              >
                Join SCSSA
              </a>
              <Link
                to="/about"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-6 py-3 rounded-md font-medium text-lg transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Latest News Section */}
      <AnimatedSection className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <AnimatedItem>
              <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
            </AnimatedItem>
            <AnimatedItem>
              <Link
                to="/news"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                View All News
                <ArrowRightIcon size={18} className="ml-1" />
              </Link>
            </AnimatedItem>
          </div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {newsItems.map((news, index) => (
              <motion.div key={news.id} variants={itemVariants} custom={index}>
                <NewsCard
                  id={news.id}
                  title={news.title}
                  category={news.category}
                  date={news.date}
                  image={news.image}
                  summary={news.summary}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <AnimatedItem className="md:w-1/2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src="https://i.postimg.cc/N0ykX1W3/untitled-1-2100x1000.jpg"
                  alt="SCSSA Team"
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
            </AnimatedItem>
            <AnimatedItem className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About SCSSA
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                The Statistics & Computer Science Students' Association
                (SCSSA) is the official student body representing undergraduates
                in the Department of Statistics and Computer Science at the
                University of Kelaniya.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Founded with the mission to bridge the gap between academic
                learning and industry requirements, SCSSA organizes various
                events, workshops, and activities to enhance students' skills
                and knowledge beyond the classroom.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-lg transition-colors"
                >
                  Learn More About Us
                </Link>
              </motion.div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-16 px-4 bg-blue-700 text-white">
        <div className="container mx-auto text-center">
          <AnimatedItem>
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Become a member of SCSSA and access exclusive resources, events,
              and networking opportunities.
            </p>
          </AnimatedItem>
          <AnimatedItem>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors"
              >
                Register Now
              </a>
            </motion.div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
