
import ecommerceImg from '../assets/Ecommerce.png';
import hireHubImg from '../assets/Hire Hub.png';
import omegleImg from '../assets/Omgele.png';
import realTimeChatImg from '../assets/Real Time Chat.png';
import sweetShopImg from '../assets/sweetShop.png';
import sentimentImg from '../assets/SentimentAnalysic  Chatbot.png'; 
import foodDeliveryImg from '../assets/Food Delivery.png';

export const projectData = [
  {
    id: 1,
    title: "Full-Stack E-Commerce",
    description: "A comprehensive shopping platform with Role-Based Access Control (Admin vs User). Features include secure Stripe payment gateway integration, advanced product filtering, shopping cart functionality, and order history tracking. Images are optimized and stored using Cloudinary.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "Stripe", "Cloudinary"],
    image: ecommerceImg,
    githubLink: "https://github.com/yourusername/ecommerce",
    liveLink: "https://your-ecommerce-link.com",
  },
  {
    id: 2,
    title: "HireHub - Job Portal",
    description: "A recruitment platform streamlining the hiring process. Includes a robust Admin Panel for managing applications, functionality for users to apply to jobs, and an automated email notification system for application status updates.",
    techStack: ["React.js", "Node.js", "Express", "MySQL"],
    image: hireHubImg,
    githubLink: "https://github.com/yourusername/hirehub",
    liveLink: "https://your-hirehub-link.com",
  },
  {
    id: 3,
    title: "Omegle Clone (Video Chat)",
    description: "A real-time random video calling application. Leverages WebRTC for peer-to-peer media streaming and Socket.io for signaling, allowing users to connect instantly with strangers globally.",
    techStack: ["React.js", "Node.js", "Express", "Socket.io", "WebRTC"],
    image: omegleImg,
    githubLink: "https://github.com/yourusername/omegle-clone",
    liveLink: "https://your-omegle-clone.com",
  },
  {
    id: 4,
    title: "Real-Time Chat App",
    description: "A seamless messaging application supporting instant text communication. Built with the MERN stack and Socket.io to ensure low-latency message delivery and persistent chat history.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io"],
    image: realTimeChatImg,
    githubLink: "https://github.com/yourusername/chat-app",
    liveLink: "https://your-chat-app.com",
  },
  {
    id: 5,
    title: "Sweet Shop Platform",
    description: "A niche e-commerce solution for a sweet shop. Features a custom admin dashboard for inventory management, dynamic product displays, and Cloudinary integration for high-quality food imagery.",
    techStack: ["React.js", "Node.js", "MongoDB", "Cloudinary"],
    image: sweetShopImg,
    githubLink: "https://github.com/yourusername/sweet-shop",
    liveLink: "https://your-sweet-shop.com",
  },
  {
    id: 6,
    title: "Sentiment Analysis Model",
    description: "A Machine Learning project that classifies text sentiment. Utilizes Python libraries like Pandas for data manipulation and NLP techniques for text preprocessing to analyze user feedback.",
    techStack: ["Python", "Machine Learning", "Pandas", "NLP"],
    image: sentimentImg,
    githubLink: "https://github.com/yourusername/sentiment-analysis",
    liveLink: "#",
  },
  {
    id: 7,
    title: "Food Delivery Frontend",
    description: "A responsive frontend interface for a food delivery service. Utilizes React Context API for efficient state management (Cart logic) and implements advanced filtering for menu categories.",
    techStack: ["React.js", "Context API", "CSS Modules"],
    image: foodDeliveryImg,
    githubLink: "https://github.com/yourusername/food-delivery",
    liveLink: "https://your-food-delivery.com",
  },
];