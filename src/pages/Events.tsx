import React, { useState } from "react";
import {
  CalendarIcon,
  MapPinIcon,
  ClockIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";
interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  status: "upcoming" | "ongoing";
  description: string;
  images: string[];
}
const Events: React.FC = () => {
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);
  const toggleEvent = (id: string) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };
  const events: Event[] = [
    {
      id: "1",
      title: "AGM – Annual General Meeting",
      date: "June 16, 2025",
      location: "B1 212, Faculty of Science",
      status: "upcoming",
      description:
        "The Annual General Meeting of the Statistics and Computer Science Students' Association will elect the new executive committee for the academic year 2025/2026. All members are encouraged to attend this important event that shapes the future direction of our association.",
      images: [
        "https://i.postimg.cc/4Ny31BxF/2.jpg",
        "https://i.postimg.cc/Y2b9gJMW/1.jpg",
        "https://i.postimg.cc/m2ngpCcZ/4.jpg",
      ],
    }, 
  ];
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return (
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
            Upcoming
          </span>
        );
      case "ongoing":
        return (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
            Ongoing
          </span>
        );
      case "completed":
        return (
          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
            Completed
          </span>
        );
      default:
        return null;
    }
  };
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Upcoming Events
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for our exciting events throughout the academic year. Click
            on any event to learn more.
          </p>
        </div>
        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleEvent(event.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                      {event.title}
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <CalendarIcon
                          size={18}
                          className="mr-2 text-blue-600"
                        />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPinIcon size={18} className="mr-2 text-blue-600" />
                        {event.location}
                      </div>
                    </div>
                    {getStatusBadge(event.status)}
                  </div>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    aria-label={
                      expandedEventId === event.id
                        ? "Collapse event details"
                        : "Expand event details"
                    }
                  >
                    {expandedEventId === event.id ? (
                      <ChevronUpIcon size={24} />
                    ) : (
                      <ChevronDownIcon size={24} />
                    )}
                  </button>
                </div>
              </div>
              {expandedEventId === event.id && (
                <div className="px-6 pb-6 pt-2">
                  <hr className="mb-6" />
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  <h3 className="font-semibold text-lg mb-4">Event Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {event.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${event.title} image ${index + 1}`}
                        className="rounded-lg h-48 w-full object-cover"
                      />
                    ))}
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                      Register for this event
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Events;
