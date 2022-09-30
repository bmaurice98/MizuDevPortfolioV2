export const Projects = [
  {
    title: "Spotify Together",
    summary: "If there's an aux, anyone can play a song",
    devices: ["Desktop, Mobile"],
    tech: ["ReactJS", "NextJS", "MongoDB", "CharkaUI"],
    description:
      "There aren't many way to listen along to a friends music through spotify. So I built the app with a goal to allows friends listening to music in the same room or discord, to queue music the current device on the aux.",
    link: "https://queuemusicboys.vercel.app",
  },
  {
    title: "Spotify Discover",
    summary: "A fast and easy way to discover new music.",
    devices: ["iOS"],
    tech: ["Xcode", "SwiftUI", "Python", "Firebase"],
    description:
      "I wanted to create and application to make discovering new music less of a hassle. Discover utilizes a users most frequently listened to genres from their top 50 tracks over that past month to display new music recommended from those genres. The UI of the app follows a similar layout to most dating apps, Tinder being the main inspiration. It consists of the general first impression feature, with a like or dislike button/swipe action, and information component accessed through tapping on the album art.",
    link: "https://github.com/bmaurice98/Spotify",
  },
  {
    title: "Blockchain transaction site",
    summary:
      "Built a Working SPA for sending and recording transactions across the blockchain",
    devices: ["WebApp"],
    tech: ["React", "NextJS", "Solidity", "GIPHY", "prisma"],
    description:
      "SPA for sending ethereum transactions across the blockchain using metamask, alchemy, solidity smart contracts.  This project was built following the lead of Javascript mastery, with new original ideas implemented as well.  Users are able to create accounts, allowing for transactions to be made.",
    link: "https://github.com/bmaurice98/CryptoNet",
  },
  {
    title: "Sorting Algorithm Visualizer",
    summary: "Visualizer for sorting algorithms.",
    devices: ["WebApp"],
    tech: ["ReactJS"],
    description:
      "A display for seeing the progression sorting algorithms take to sort a list.",
    link: "https://github.com/bmaurice98/React-Work/tree/master/Sorting-Visualizer",
  },
  {
    title: "HYCYB Twitter Bot",
    summary:
      "Tracks all recent tweets that contain a certain phrase, and replies with a set phrasee and video.",
    devices: ["Desktop"],
    tech: ["Python", "TweepyAPI"],
    description:
      "After asking some friends for twitter bot ideas, One of them came up with this idea.  Refrencing a famous tiktoker, the bot should look for keywords and phrases.  After tracking tweets fitting the criteria, reply with a video link and phrase from the tiktok.",
    link: "https://github.com/bmaurice98/Python-Work/tree/master/DYCYB",
  },
  {
    title: "Live Global Chat",
    summary: "Built a real time chat application using the MERN stack",
    tech: ["ReactJS", "MongoDB", "ExpressJS", "NodeJS", "Heroku", "ChakraUI"],
    description:
      "This application represents exactly what the title stands for. Anyone from anywhere can make an account and communicate with users apart of this webapp. The applications frontend is handled through React.  All requests made through the frontend get sent to the backend; ExpressJS makes api calls to the web server, which is then sent from the web sever to MongoDB, then travels back up the ladder to display the users, search, and chats details/results. If you'd like to learn more take a look into my github ReadMe for what I learned and struggled with creating this apoplication.",
    link: "https://mern-mizu-live-chat.herokuapp.com/",
  },
];
