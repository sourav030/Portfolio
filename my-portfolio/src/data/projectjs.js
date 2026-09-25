
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
    tag: "Featured",
    title: "Full-Stack E-Commerce",
    description: "A comprehensive shopping platform with Role-Based Access Control (Admin vs User). Features include secure Stripe payment gateway integration, advanced product filtering, shopping cart functionality, and order history tracking. Images are optimized and stored using Cloudinary.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "Stripe", "Cloudinary"],
    image: ecommerceImg,
    githubLink: "https://github.com/sourav030/MernEcommerce",
    liveLink: "https://your-ecommerce-link.com",
  },
  {
    id: 2,
    tag: "Featured",
    title: "Job Portal with Resume Screening",
    description: "A full-stack job portal with JWT authentication and role-based access separating admin, recruiter and candidate permissions. Features an automated resume screening pipeline that extracts candidate details and ranks applications against keyword criteria, Cloudinary resume storage and Nodemailer email notifications.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    image: hireHubImg,
    githubLink: "https://github.com/sourav030/Hire-Hub",
    liveLink: "https://your-hirehub-link.com",
  },
  {
    id: 3,
    title: "Omegle Clone (Video Chat)",
    description: "A real-time random video calling application. Leverages WebRTC for peer-to-peer media streaming and Socket.io for signaling, allowing users to connect instantly with strangers globally.",
    techStack: ["React.js", "Node.js", "Express", "Socket.io", "WebRTC"],
    image: omegleImg,
    githubLink: "https://github.com/sourav030/Learn-socket-and-webrtc",
    liveLink: "https://your-omegle-clone.com",
  },
  {
    id: 4,
    title: "Real-Time Chat App",
    description: "A seamless messaging application supporting instant text communication. Built with the MERN stack and Socket.io to ensure low-latency message delivery and persistent chat history.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io"],
    image: realTimeChatImg,
    githubLink: "https://github.com/sourav030/ChatApp",
    liveLink: "https://your-chat-app.com",
  },
  {
    id: 5,
    title: "Sweet Shop Platform",
    description: "A niche e-commerce solution for a sweet shop. Features a custom admin dashboard for inventory management, dynamic product displays, and Cloudinary integration for high-quality food imagery.",
    techStack: ["React.js", "Node.js", "MongoDB", "Cloudinary"],
    image: sweetShopImg,
    githubLink: "https://github.com/sourav030/Incubyte-assignment",
    liveLink: "https://your-sweet-shop.com",
  },
  {
    id: 6,
    title: "Sentiment Analysis Model",
    description: "A Machine Learning project that classifies text sentiment. Utilizes Python libraries like Pandas for data manipulation and NLP techniques for text preprocessing to analyze user feedback.",
    techStack: ["Python", "Machine Learning", "Pandas", "NLP"],
    image: sentimentImg,
    githubLink: "https://github.com/sourav030/Sentiment-analysis/tree/main/sentiment%20analysis",
    liveLink: "#",
  },
  {
    id: 7,
    title: "Food Delivery Frontend",
    description: "A responsive frontend interface for a food delivery service. Utilizes React Context API for efficient state management (Cart logic) and implements advanced filtering for menu categories.",
    techStack: ["React.js", "Context API", "CSS Modules"],
    image: foodDeliveryImg,
    githubLink: "https://github.com/sourav030/ReactJsFoodDelivery",
    liveLink: "https://your-food-delivery.com",
  },
];