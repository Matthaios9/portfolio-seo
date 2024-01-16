import movie_explorer from "../../../../public/assets/movie_explorer.png";
const Image2 = "/assets/hotel_nirvana.png";
const Whastapp = "/assets/whatsapp_clone.png";
const PigGame = "/assets/pig-game.png";
const ReactMeals = "/assets/react-meals.png";
const CoffeeWebsite = "/assets/Cofee-website.png";
const TravelWebsite = "/assets/Travel-website.png";
const Iphone14 = "/assets/Iphone.png";
const OneSlice = "/assets/one-slice.png";
const InteractiveCard = "/assets/Interactive-rating-card.png";
const Discover = "/assets/discover.png";
const Nexter = "/assets/nexter.png";
const Natours = "/assets/natours.png";
const GuessNumber = "/assets/guess-number.png";
const Calculator = "/assets/calculator.png";

const data = [
  {
    id: 1,
    title: "Movie Explorer",
    category: "Frontend",
    description:
      "Movie Explorer is a React.js-based project that offers users an intuitive platform to discover popular movies effortlessly. It facilitates quick searches for your favorite films and presents comprehensive movie information, including titles, release dates, and synopses. Movie Explorer streamlines the process, making movie exploration a breeze.",
    projectLink: "https://movie-explorer51.netlify.app",
    githubLink: "https://github.com/Matthaios9/movie_explorer",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2Fmovie_explorer.png?alt=media&token=bde96392-21ea-438d-b9bb-601f93b27993",
    createdAt: "2024-01-15T13:45:09.758Z",
  },
  {
    id: 2,
    title: "Hotel Nirvana",
    category: "Fullstack",
    description:
      "Hotel Nirvana is a cutting-edge hotel management system meticulously crafted using React.js and seamlessly integrated with Firebase. This robust platform empowers hoteliers to efficiently manage their properties, reservations, and guest interactions. With its user-friendly interface and real-time data synchronization, Hotel Nirvana elevates the hotel management experience to new heights, providing a tranquil and seamless solution for the modern hospitality industry.",
    projectLink: "https://hotel-nirvana12.netlify.app",
    githubLink: "https://github.com/Matthaios9/hotel_nirvana",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2Fhotel_nirvana.png?alt=media&token=76bb1f1c-9408-4343-a283-4ff9c23ddbaa",
    createdAt: "2024-01-15T13:46:58.058Z",
  },
  {
    id: 3,
    title: "Whatsapp",
    category: "Fullstack",
    description:
      "WhatsApp Clone with Chat Rooms is a messaging app reminiscent of WhatsApp. It emphasizes text-based communication and introduces chat rooms for group discussions. Users can enjoy one-on-one and group chats, creating and joining chat rooms for diverse conversations.",
    projectLink: "https://zutet-messenger.netlify.app",
    githubLink: "https://github.com/Matthaios9/whatsapp",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2Fwhatsapp_clone.png?alt=media&token=dfbd6887-36f3-4fa1-a8a9-e3d8df284cf8",
    createdAt: "2024-01-15T13:48:47.597Z",
  },
  {
    id: 4,
    title: "Pig-Dice game",
    category: "Frontend",
    description:
      "Behold the HTML, CSS, and JavaScript-powered Pig Dice Roll Game! Two players take turns rolling a virtual dice on a beautifully designed interface. With each roll, points accumulate, but beware the dreaded 1 – it resets your turn's score! Victory awaits the player who first reaches a total score of 100. Strategy and risk management are the keys to success. Roll the dice, hold your breath, and strive to be the first to hit that winning score!",
    projectLink: "https://pigyrollgame.netlify.app",
    githubLink: "https://github.com/Matthaios9/pig-game",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2Fpig-game.png?alt=media&token=6421ca52-fa8c-4ca8-9554-ff2823f9f3b2",
    createdAt: "2024-01-16T05:32:18.173Z",
  },
  {
    id: 5,
    title: "React Meals",
    category: "Frontend",
    description:
      "React Meals is a charming small restaurant website crafted with React.js. Explore our delightful menu offerings, browse through mouthwatering food photos, and find our location easily. We've designed this website to provide a seamless and user-friendly experience for our valued customers. Discover your next culinary adventure with React Meals.",
    projectLink: "https://restaurant69.netlify.app/",
    githubLink: "https://github.com/Matthaios9/restaurant-app/",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2Freact-meals.png?alt=media&token=20bb9b3e-4167-4002-8a31-0f9db6d48bcd",
    createdAt: "2024-01-16T05:41:58.435Z",
  },
  {
    id: 6,
    title: "Fresh Coffee Website",
    category: "Frontend",
    description:
      "Designed with love using HTML and CSS, is a coffee enthusiast's dream. Dive into the world of aromatic brews, tantalizing blends, and cozy coffee shops. Explore our menu, learn about our story, and find your nearest café location. We've brewed this website to perfection, just like our coffee. Come and take a sip",
    projectLink: "https://fresshcoffee.netlify.app",
    githubLink: "https://github.com/Matthaios9/Coffee-Website-Main",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2FCofee-website.png?alt=media&token=2fa18a1b-9871-4485-87fd-722912587581",
    createdAt: "2024-01-16T05:43:44.397Z",
  },
  {
    id: 7,
    title: "Travel Time",
    category: "Frontend",
    description:
      "Meticulously crafted using HTML and CSS, is your companion for discovering the world's most stunning destinations. Dive into a treasure trove of travel inspiration, browse travel packages, and read travel tips from seasoned adventurers. We've designed this website to spark your wanderlust and help you plan your next adventure. Get ready to embark on a virtual journey with ExploreWorld!",
    projectLink: "https://travel-timez.netlify.app/",
    githubLink: "https://github.com/Matthaios9/Travel-website",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2FTravel-website.png?alt=media&token=e26abf13-39cb-4f39-a389-344f83b21b92",
    createdAt: "2024-01-16T05:46:04.660Z",
  },
  {
    id: 8,
    title: "Iphone 14 Animation",
    category: "Frontend",
    description:
      "A website that goes beyond the ordinary! As you scroll down, witness the magic unfold – the all-new iPhone 14 comes to life with a mesmerizing 3D rotation animation. Crafted with the latest web technologies, our website blends the elegance of HTML and CSS with the power of JavaScript. Immerse yourself in the future of smartphones as you explore every angle of the iPhone 14 in this captivating and interactive experience. Scroll to discover the future, one pixel at a time.",
    projectLink: "https://iphone77.netlify.app/",
    githubLink: "https://github.com/Matthaios9/iphone",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2FIphone.png?alt=media&token=52252925-8c6d-4f22-8968-4b34a3fce526",
    createdAt: "2024-01-16T05:47:27.444Z",
  },
  {
    id: 10,
    title: "Fancy Interactive Card",
    category: "Frontend",
    description:
      "Discover our beautifully crafted Rating Card UI component, meticulously built with HTML, CSS, and JavaScript. This dynamic interface allows users to rate and review with ease. Hover over the stars to see them light up and provide instant feedback. With a sleek design and seamless interaction, it's the perfect addition to enhance user engagement on your website or application. Create memorable user experiences with our Interactive Rating Card UI component today!",
    projectLink: "https://fancy-card-css.netlify.app/",
    githubLink: "https://github.com/Matthaios9/interactive_rating_card",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2FInteractive-rating-card.png?alt=media&token=8e7d03e7-b0e7-4701-8721-b0ac2565549d",
    createdAt: "2024-01-16T05:50:55.752Z",
  },
  {
    id: 11,
    title: "Discover Website",
    category: "Frontend",
    description:
      "Discover makes your travel planning a breeze. Whether you're seeking luxury hotels, cozy inns, or budget-friendly flights, we've got you covered. Embark on your next journey with confidence and convenience, right here on Discover. Start your travel adventure today!.",
    projectLink: "https://trillo-zutet.netlify.app/",
    githubLink: "https://github.com/Matthaios9/trillo",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2Fdiscover.png?alt=media&token=85aeb6c2-db5f-4fb3-8e2e-ebe6c182e97b",
    createdAt: "2024-01-16T05:53:52.139Z",
  },
  {
    id: 12,
    title: "Nexter",
    category: "Frontend",
    description:
      "Discover beautiful homes with Nexter, where your dream property is just a click away. Our landing page, designed using HTML and CSS, simplifies the search for your perfect home. Explore stunning listings, browse through captivating images, and embark on your homebuying journey today!",
    projectLink: "https://nexter-houz.netlify.app/",
    githubLink: "https://github.com/Matthaios9/nexter",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2Fnexter.png?alt=media&token=0b93049b-4e1c-4b5e-82ce-d7df0bd2eb23",
    createdAt: "2024-01-16T05:56:44.845Z",
  },
  {
    id: 13,
    title: "Natours ",
    category: "Frontend",
    description:
      "Discover pristine landscapes, thrilling adventures, and serene getaways with Natours. Browse our curated listings, get inspired by stunning imagery, and embark on a journey that reconnects you with nature's beauty. Your next eco-adventure begins here. Start your exploration with Natours today!",
    projectLink: "https://natours-meta.netlify.app",
    githubLink: "https://github.com/Matthaios9/natours",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2Fnatours.png?alt=media&token=51ebc28a-db7b-4049-ba92-87671dccd5e0",
    createdAt: "2024-01-16T06:00:03.226Z",
  },
  {
    id: 14,
    title: "Guess Number",
    category: "Frontend",
    description:
      "Fun and challenging game built with HTML and JavaScript. Can you guess the secret number? Put your skills to the test as you input your best guesses and receive feedback in real-time. With each attempt, you'll get closer to the correct number. Keep playing, keep guessing, and see how quickly you can crack the code. Challenge yourself with 'Guess the Number' today!",
    projectLink: "https://guess-number-zutet.netlify.app/",
    githubLink: "https://github.com/Matthaios9/guessNumber",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2Fguess-number.png?alt=media&token=93256761-bf86-42c5-b05f-c2886810223e",
    createdAt: "2024-01-16T06:18:01.164Z",
  },
  {
    id: 15,
    title: "Cargo Game",
    category: "Fullstack",
    description:
      "Caro is an engaging board game inspired by the renowned Japanese strategy board game, Gomoku. The frontend of Caro is designed with a visually appealing Spring Thymeleaf theme, seamlessly connecting to a SOAP Web Service. This ensures a user-friendly and interactive experience for players. On the backend, Caro leverages the robust capabilities of Spring Boot to construct a powerful SOAP Web Service",
    projectLink: "https://github.com/Matthaios9/CaroGameOnline",
    githubLink: "https://github.com/Matthaios9/CaroGameOnline",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2FScreenshot%20(226).png?alt=media&token=c50b36a2-21bd-46c9-b5a8-6feee06ac6f9",
    createdAt: "2024-01-16T10:42:40.190Z",
  },
];

export default data;
