import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeftIcon, CalendarIcon } from "lucide-react";

// Sample news data (should match the data in News.tsx)
const allNewsItems = [
  {
    id: "1",
    title: "Annual Genaral Meeting",
    category: "Events",
    date: "August 31, 2024",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    content: `SCSSA Annual General Meeting 2024; A Celebration of Triumphs and the Dawn of New Horizons.
    
    The 2024 Annual General Meeting (AGM) of the Statistics & Computer Science Students' Association (SCSSA), held on August 31st at the A8 MIT Auditorium, celebrated the conclusion of a remarkable year and the beginning of an exciting new chapter. The outgoing executive committee expressed gratitude to attendees and reflected on the milestones achieved, emphasizing accomplishments that brought pride to SCSSA and highlighted their dedication throughout the year. A presentation of the annual report showcased the association’s achievements, financial status, and future plans, reaffirming its commitment to fostering academic excellence, collaboration, and creativity


    A key moment of the AGM was the election of a dynamic new executive committee, including Dasun Navindu as President, Sandali Sewmini as Secretary, Dr. Basitha Kavinga as Senior Treasurer, and Samadhi Anusara as Vice Secretary. Alongside Chamith Madushanka, Chandali Nirmitha, Jithnuka, Movindu Anusara, Nidula Darmapriya, and Pasindu Sankalpa, this talented team is set to lead SCSSA with fresh energy and vision. Additionally, the editorial team—Desitha, Matheesha, and Marry—will play a vital role in supporting the association’s creative and academic initiatives.
    
    
    The AGM concluded with heartfelt appreciation for the outgoing committee's contributions, which have laid a strong foundation for future endeavors. The event left a lasting impression on members, inspiring active participation in the association’s vibrant community. With exciting events and initiatives on the horizon, SCSSA is poised to continue thriving, fostering academic success, and making a meaningful impact in the coming year.`,
    author: "Chandali Nirmitha",
    authorRole: "Committee Member of SCSSA",
  },
  {
    id: "2",
    title: "Munch Mania 2.0",
    category: "Event",
    date: "November 19, 2024",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: `SCSSA’s Munch Mania 2.0; A Flavor-Fueled Festival of Fun and Unity!
    
    Munch Mania 2.0, a vibrant and exciting two day street food festival, took the University of Kelaniya by storm this November! Organized by the enthusiastic first-year students of the Department of Statistics and Computer Science (DSCS), this unforgettable event unfolded from 19th to 20th behind the A7 building, next to the Science Auditorium. The festival was officially kicked off by Professor Wasana Chandrasekara, who welcomed the crowd to a celebration of flavor, creativity, and community spirit. From 4:00 pm to 6:00 pm each day, the air was filled with the mouthwatering aroma of delicious food, drawing a large and eager crowd who came to indulge in a diverse range of dishes crafted with love and passion. 
    
    What truly set Munch Mania 2.0 apart was the dedication and tireless effort of the first-year students, who were the heartbeat of the event. Their energy, enthusiasm, and attention to detail transformed every aspect of the festival—from the initial planning to the final execution—into something truly special. It was clear that their teamwork and commitment made this more than just a food festival; it was a lively and dynamic celebration of community and collaboration. 
    
    Munch Mania 2.0 was not just about food; it was about bringing people together, fostering creativity, and celebrating the strength of the DSCS family. The event served as a perfect example of how unity and hard work can create something extraordinary. 
    
    A huge thank you to all the attendees and supporters who made Munch Mania 2.0 a resounding success. The festival wouldn’t have been possible without you! Stay tuned for more exciting events from SCSSA as we continue to spice up the campus with unforgettable experiences! `,
    author: "Chandali Nirmitha",
    authorRole: "Committee Member of SCSSA",
  },
  {
    id: "3",
    title: "PhD session(USA) ",
    category: "Workshops",
    date: "October 19, 2024",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: `SCSSA’s Online Session; Mastering the PhD Application Process in the U.S. 
    
    On the evening of 19th October 2024, the Statistics & Computer Science Students' Association (SCSSA) hosted a highly informative and engaging online session titled "How to Navigate the PhD Application Process in the U.S. (From Application to Admission)". The session, held via Zoom from 8:30 to 9:30 PM, featured Dr. Devindi Rajapaksha, an Assistant Professor of Statistics at the University of Wisconsin - Whitewater, who shared invaluable insights into the journey of applying for PhD programs in top U.S. universities. 
    
    With the U.S. being a prime destination for higher education, the session served as a crucial guide for students considering or planning to pursue a PhD. Dr. Rajapaksha, drawing from her own experiences, offered a deep dive into the application process, from crafting a compelling statement of purpose to securing strong letters of recommendation and navigating the tricky waters of interviews and admissions decisions. 
    
    The session targeted a diverse group of students, including demonstrators and undergraduates from the 2nd, 3rd, and 4th years of the Department of Statistics & Computer Science. Dr. Rajapaksha’s insights were not only practical but also deeply personal, as she shared her journey of securing a position at one of the top universities in the U.S., giving attendees a rare opportunity to learn from someone who has successfully navigated the process.

    Participants were able to engage directly with Dr. Rajapaksha, asking questions and receiving personalized advice, making the session highly interactive. The feedback from the attendees was overwhelmingly positive, with many expressing appreciations for the actionable takeaways and the opportunity to learn from someone who has walked the path they are about to embark on.
    
    SCSSA’s commitment to supporting its members' academic and professional ambitions continues to shine through initiatives like this one. This session was just a glimpse of the many opportunities SCSSA is bringing to its members, helping them navigate their educational journeys and beyond.

    Stay tuned for more events and workshops from SCSSA that empower students to achieve their academic dreams and excel in their careers! `,
    author: "Chandali Nirmitha",
    authorRole: "Committee Member of SCSSA",
  },
  {
    id: "4",
    title: "Data Science ",
    category: "Workshops",
    date: "November 21, 2024",
    image:
      "https://i.postimg.cc/bY7LW6wS/Whats-App-Image-2025-06-10-at-3-23-03-PM.jpg",
    content: `Datasight'24 , Illuminating the Path to the Future of Data Science.
    
    On November 21, 2024, the A8 Auditorium at the University of Kelaniya hosted the highly anticipated Datasight'24, organized by the Statistics & Computer Science Students' Association (SCSSA). Under the theme "Extracting Insights from Data," the event brought together aspiring data scientists, tech enthusiasts, and industry professionals to explore the transformative power of data science. The highlight was a keynote by Mr. Roy Ian, Principal Data Scientist, who shared insights on building a successful career in data science, emphasizing the importance of technical skills and their application in solving real-world challenges. 
    
    Mr. Ian’s engaging talk, "Navigating the Path to a Career in Data Science," captivated the audience with practical advice and real-world examples from industries like healthcare and finance. Attendees participated actively in a dynamic Q&A session, delving into emerging trends and strategies for success in the evolving field of data science. The event's interactive nature sparked meaningful discussions, leaving participants inspired and informed.
    
    Datasight'24 underscored SCSSA’s dedication to nurturing talent and promoting innovation in data science. By hosting thought-provoking events like these, SCSSA continues to equip its members with the skills and insights needed to thrive in a data-driven world, solidifying its role as a leader in empowering the next generation of data scientists`,
    author: "Chandali Nirmitha",
    authorRole: "Committee Member of SCSSA",
  },
  {
    id: "5",
    title: " Stat Bee 2024",
    category: "Competition",
    date: "October 17, 2024",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: ` Stat Bee 2024, A Thrilling Quiz Competition by SCSSA.
    
    The Statistics and Computer Science Students’ Association (SCSSA) of the Faculty of Science, University of Kelaniya, hosted Stat Bee 2024, an exciting quiz competition held during October and November. Organized by the third-year students of the Department of Statistics and Computer Science, the event provided a platform for first- and second-year students to showcase their knowledge in a fun, competitive setting.
    
    The competition unfolded in three stages—Starter, Wizards, and Sorcerers—each progressively more challenging. The Starter Round tested participants’ fundamental understanding of statistics with individual MCQs, while the Wizards Round introduced more complex questions requiring critical thinking and precision under pressure. 
    
    The Sorcerers Round, the grand finale, brought the top performers together in teams for a live quiz. This interactive and fast-paced stage tested not only knowledge but also teamwork and quick thinking. The lively atmosphere and intense competition made the final round a memorable highlight for both participants and the audience. 
    
    Beyond the competition, Stat Bee 2024 celebrated teamwork, intellectual growth, and camaraderie. It encouraged cross-batch friendships, sparked greater interest in statistics, and gave students a platform to challenge themselves and build confidence. 
    
    The event’s success was due to the hard work and creativity of the third-year organizing team, whose efforts ensured a seamless and engaging experience. By blending competition, learning, and fun, Stat Bee 2024 has set a new standard for student-led initiatives, inspiring students to explore the fascinating world of statistics. `
    ,
    author: "Chandali Nirmitha",
    authorRole: "Committee Member of SCSSA",
  },
  {
    id: "6",
    title: "PhD Session(Australia)",
    category: "Workshops",
    date: "December 22, 2024",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: `Charting the Path to a PhD in Australia, An Inspiring Session for Students 
    
    On December 22nd, the Statistics and Computer Science Students’ Association of the Faculty of Science, University of Kelaniya, hosted a special online session that left attendees inspired and motivated. Titled "Pathway to a PhD in Australia: Opportunities and Application Insights," the event brought together curious students and a remarkable speaker to discuss pursuing higher education abroad.

    The session was led by Miss Sithara Wijekoon, a familiar face to many as a former Assistant Lecturer in the Department of Statistics & Computer Science at the University of Kelaniya. Now a PhD candidate in Statistics at the prestigious Queensland University of Technology in Australia, Miss Wijekoon shared her journey, experiences, and practical tips for those considering a similar path. 

    In her talk, she highlighted the steps to successfully apply for a PhD, the importance of identifying the right research area, and strategies for securing scholarships. She also shed light on the academic culture in Australia, offering students a glimpse into what it’s like to live and learn in an international setting. 

    The session wasn’t just about information—it was about inspiration. Miss Wijekoon’s story resonated with many attendees, showing that with determination and the right guidance, pursuing a PhD abroad is within reach. Students left the session feeling more confident about their ambitions and equipped with actionable advice to begin their own journeys. 

    This initiative by the Statistics and Computer Science Students’ Association reflects its dedication to empowering students to dream big and take bold steps toward their academic and career goals.
    `,
    author: "Chandali Nirmitha",
    authorRole: "Committee Member of SCSSA",
  },
  {
    id: "7",
    title: "PyQuest’24",
    category: "Workshops",
    date: "November 16, 2024",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: `PyQuest24: A Journey into Python Programming 
    
    The Statistics and Computer Science Students' Association (SCSSA) of the Faculty of Science, University of Kelaniya, successfully hosted PyQuest24, an engaging virtual programming workshop that kicked off on Saturday, November 16, 2024. Designed to cater to both beginners and those with advanced knowledge, the workshop provided an excellent platform for students to enhance their Python programming skills.

    The beginner sessions started with the basics, such as Python installation, operators, and control structures. Participants progressed to loops, data structures like lists, sets, and dictionaries, and eventually learned about functions, arrays, string formatting, and Python Lambda. These sessions also included practical lessons on object-oriented programming (OOP) concepts and exception handling, ensuring attendees gained a well-rounded understanding of Python.

    For those ready to dive deeper, the advanced sessions focused on exploratory data analysis (EDA) and data visualization, teaching students how to interpret and present data effectively. The highlight of the workshop was the session on building a machine learning module, where participants applied their newfound skills to a final project. 

    Certificates were awarded to participants who completed tutorials, assignments, quizzes, and a final exam while maintaining at least 80% attendance. This recognition celebrated their dedication and hard work throughout the program.

    PyQuest24 was more than just a workshop,it was an opportunity for students to learn, practice, and grow. By combining hands-on training with real-world applications, SCSSA successfully created an inspiring learning experience that left participants excited about the possibilities of Python programming. 

    `,
    author: "Chandali Nirmitha",
    authorRole: "Committee Member of SCSSA",
  },
  {
    id: "8",
    title: "STCS Camp 2025 ",
    category: "Event",
    date: "January 11, 2025",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: `STCS Camp 2025 – A Day of Unity, Adventure & Growth 
    
    Location: Che Adventure Park, Hanwella | Date: 11th January 2025
    
    STCS Camp 2025 was a celebration of energy, collaboration, and student spirit. Held at the scenic Che Adventure Park in Hanwella, the event brought together over 100 undergraduate students from the Department of Statistics & Computer Science, University of Kelaniya.

    Organized by the Statistics & Computer Science Students' Association (SCSSA), the camp focused on adventure, team-building, and personal development. A key highlight of the event was the presence of industry leaders and CEOs, who served as judges and mentors—sharing practical insights and bridging the gap between academia and the tech industry.

    Students engaged in thrilling physical and mental challenges that promoted leadership, communication, and resilience, all while enjoying an open, fun, and inclusive environment.

    The atmosphere throughout the day was uplifting, filled with laughter, encouragement, and unforgettable moments. The event stood as a testament to the strong bonds and collective spirit within the department.

    A heartfelt thanks goes out to the organizing team, supportive faculty, and our esteemed industry guests. Their dedication ensured the camp was not just a day of fun—but a meaningful experience that will resonate for years.

    Here’s to more inspiring STCS Camps in the future!
    
    `,
    author: "Chandali Nirmitha",
    authorRole: "Committee Member of SCSSA",
  },
];

const NewsArticle: React.FC = () => {
  const { id } = useParams();

  // Find the article with the matching id
  const article = allNewsItems.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Article not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <Link
          to="/news"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeftIcon size={20} className="mr-2" />
          Back to News
        </Link>
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <div className="flex items-center text-gray-500 dark:text-gray-400">
                <CalendarIcon size={16} className="mr-2" />
                {article.date}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {article.title}
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              {article.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph.split("\n").map((line, lineIdx) => (
                    <Fragment key={lineIdx}>
                      {line}
                      {lineIdx < paragraph.split("\n").length - 1 && <br />}
                    </Fragment>
                  ))}
                </p>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {article.author}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {article.authorRole}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsArticle;
