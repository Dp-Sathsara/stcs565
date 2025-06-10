import React, { useState } from "react";
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string | React.ReactNode;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Updated handleSubmit function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validation (unchanged)
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: "Please fill in all required fields",
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        success: false,
        message: "Please enter a valid email address",
      });
      setIsSubmitting(false);
      return;
    }

    // Try to open Gmail
    try {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=scssa.dscs@gmail.com&su=${encodeURIComponent(
        formData.subject || "Contact Form Submission"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      const newWindow = window.open(gmailUrl, "_blank");

      // Fallback to mailto if Gmail failed
      if (!newWindow || newWindow.closed) {
        window.location.href = `mailto:scssa.dscs@gmail.com?subject=${encodeURIComponent(
          formData.subject || "Contact Form Submission"
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
      }

      setSubmitStatus({
        success: true,
        message: (
          <div>
            <p>Your message is ready to send!</p>
            <p className="mt-1 text-sm">
              {window.innerWidth > 768
                ? "Check your browser for a new Gmail tab."
                : "Check your email app or browser tabs."}
            </p>
            <p className="mt-2 text-sm">
              Still having trouble? Email us directly at{" "}
              <a
                href="mailto:scssa.dscs@gmail.com"
                className="text-blue-600 underline"
              >
                scssa.dscs@gmail.com
              </a>
            </p>
          </div>
        ),
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          "Couldn't open email service. Please email us directly at scssa.dscs@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Get in touch
            with the SCSSA team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MailIcon size={24} className="text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                  <p className="text-gray-600 mb-1">General Inquiries:</p>
                  <a
                    href="mailto:scssa@kln.ac.lk"
                    className="text-blue-600 hover:underline"
                  >
                    scssa@kln.ac.lk
                  </a>
                  <p className="text-gray-600 mb-1 mt-3">President:</p>
                  <a
                    href="mailto:president.scssa@kln.ac.lk"
                    className="text-blue-600 hover:underline"
                  >
                    president.scssa@kln.ac.lk
                  </a>
                  <p className="text-gray-600 mb-1 mt-3">Secretary:</p>
                  <a
                    href="mailto:secretary.scssa@kln.ac.lk"
                    className="text-blue-600 hover:underline"
                  >
                    secretary.scssa@kln.ac.lk
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon size={24} className="text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
                  <p className="text-gray-600 mb-1">Department Office:</p>
                  <p className="text-gray-800">+94 11 2903470</p>
                  <p className="text-gray-600 mb-1 mt-3">President:</p>
                  <p className="text-gray-800">+94 71 1234567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon size={24} className="text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    Department of Statistics & Computer Science,
                    <br />
                    Faculty of Science,
                    <br />
                    University of Kelaniya,
                    <br />
                    Kelaniya, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">
                Office Hours
              </h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 4:00 PM
                <br />
                Saturday & Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-md ${
                  submitStatus.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Event Inquiry"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full text-gray-700 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center w-full transition-colors ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <SendIcon size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h2>
          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2871487030316!2d79.91297847448315!3d6.975408517747947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597c8dde7e47%3A0x341e7e820c46d3ed!2sUniversity%20of%20Kelaniya!5e0!3m2!1sen!2slk!4v1749277572570!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="University of Kelaniya Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
