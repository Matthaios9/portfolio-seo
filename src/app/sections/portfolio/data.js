const data = [
  // --- CYBERSECURITY PROJECTS ---
  {
    id: 1,
    title: "secure JWT Authentication",
    category: "Cybersecurity",
    description:
      "Demonstrated custom JWT creation and token verification workflows. Constructed a customized JSON payload (sub, role: admin, permissions), signed it using HMAC-SHA256 with a 256-bit secret key to generate a signed JWT token, and subsequently decoded and validated the token signature to confirm payload integrity and authentic claim extraction.",
    projectLink: "https://1drv.ms/v/c/8ba7733f57b4cf84/IQBxPS88n5uqRI6WuR5TbnT8Af93MTku7T5BaGjuvYIfUaQ?e=BzNQbU",
    githubLink: "https://github.com/expressjs/express",
    imageId:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=300&h=150&fit=crop",
    createdAt: "2024-01-15T13:46:58.058Z",
  },
  {
    id: 2,
    title: "Phishing message Header Analyzer",
    category: "Cybersecurity",
    description:
      "Performed threat investigation on malicious email headers using Message Header Analyzer. Identified display-name spoofing (`PayPal Security Team`) pointing to a suspicious `Reply-To` address (`credential-harvester@evil-domain.com`), extracted the true originating IP (`192.0.2.45`), traced routing hops, and verified key domain authentication check failures (`SPF`, `DKIM`, and `DMARC`).",
    projectLink: "https://1drv.ms/v/c/8ba7733f57b4cf84/IQDmqREwmMQ1S4U7sE7AV5mHAdw3N5E1Aa-5vC94n8LkBQc?e=Z0Pp1Z",
    githubLink: "https://github.com/Yara-Rules/rules",
    imageId:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&h=150&fit=crop",
    createdAt: "2024-01-15T13:48:47.597Z",
  },
  {
    id: 3,
    title: "Memory Forensics and investigation",
    category: "Cybersecurity",
    description:
      "Executed memory forensic analysis on a raw memory dump (`exercise1.raw`) using Volatility Framework 2.5. Identified OS profile (`Win7SP1x64`), performed process enumeration (`pslist`), analyzed active TCP/UDP network connections (`netscan`), and ran process anomaly detection (`psxview`) to uncover hidden or unlinked malicious processes during incident triage.",
    projectLink: "https://1drv.ms/v/c/8ba7733f57b4cf84/IQBrGY5QPvLoSpS5dPJa5FlzAd0MP0rxOETr0vivfWr0ao4?e=VHEZDO",
    githubLink: "https://github.com/volatilityfoundation/volatility3",
    imageId:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=300&h=150&fit=crop",
    createdAt: "2024-01-16T05:32:18.173Z",
  },
  {
    id: 4,
    title: "Vulnerability Assessment with ZAP API",
    category: "Cybersecurity",
    description:
      "running OWASP ZAP 2.15.0 on Kali Linux. Executed automated web crawling, active vulnerability scanning, and live traffic interception using HUD proxy against a target web application.",
    projectLink: "https://1drv.ms/v/c/8ba7733f57b4cf84/IQBF36DHBKZfQIznNWdxM1KtAZtvEI3flpisq_oodxKjTyY?e=ydhHs9",
    githubLink: "https://github.com/zaproxy/zap-extensions",
    imageId:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=300&h=150&fit=crop",
    createdAt: "2024-01-16T05:32:18.173Z",
  },
  {
    id: 5,
    title: "Threat Hunting with Zeek",
    category: "Cybersecurity",
    description:
      "Analyzed network packet capture files (.pcap) using Zeek logs and Suricata to trace malicious command-and-control (C2) traffic, DNS tunneling, and data exfiltration patterns.",
    projectLink: "https://1drv.ms/v/c/8ba7733f57b4cf84/IQDZKMMqlRHhTrOStzTbl3QeAcCJjlP32WnX8MXjZDH2wu4?e=KIhDsF",
    githubLink: "https://github.com/zeek/zeek",
    imageId:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=300&h=150&fit=crop",
    createdAt: "2024-01-16T05:32:18.173Z",
  },
  {
    id: 6,
    title: "SOC Lab",
    category: "Cybersecurity",
    description:
      "deploying an end-to-end open-source SIEM security monitoring infrastructure. Highlights step-by-step setup including Elasticsearch engine, Filebeat data collection pipeline, Kibana interface integration, Wazuh Manager platform, and cross-platform Wazuh Agent deployments on Ubuntu Server and Windows endpoints.",
    projectLink: "https://1drv.ms/v/c/8ba7733f57b4cf84/IQD5EkkDzu7qTZ8grikRarokATkb7f8cZ8z0qNtr5zdr8dU?e=8KCKCQ",
    githubLink: "https://github.com/wazuh/wazuh",
    imageId:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=300&h=150&fit=crop",
    createdAt: "2024-01-16T05:32:18.173Z",
  },
  {
    id: 7,
    title: "Exploit Lab",
    category: "Cybersecurity",
    description:
      "SMB enumeration and credential brute-forcing using Metasploit in Kali Linux against a target host, including SMB version detection, user and share enumeration, password list creation, credential testing via smb_login, and directory listing on exposed shares.",
    projectLink: "https://1drv.ms/v/c/8ba7733f57b4cf84/IQDvCuSLk4D4Q65KTSU-O1PDAWfCmEGhryctCp5s4XF-JCg?e=FmNhb4",
    githubLink: "https://github.com/rapid7/metasploitable3",
    imageId:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=300&h=150&fit=crop",
    createdAt: "2024-01-16T05:32:18.173Z",
  },
  {
    id: 8,
    title: "Network Traffic Analysis",
    category: "Cybersecurity",
    description:
      "Hands-on packet capture analysis using Wireshark to inspect network activity, including DNS queries, ICMP ping requests, SMB2 file operations, and RDP remote desktop connections.",
    projectLink: "https://1drv.ms/v/c/8ba7733f57b4cf84/IQC0Al5d5cl-T4_-xut9vOEnARTcZ5IksIfLE4li8j9Q3XE?e=HALdab",
    githubLink: "https://github.com/Lovedipsingh/Wireshark-Network-Analysis-Lab",
    imageId:
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=300&h=150&fit=crop",
    createdAt: "2024-01-16T05:32:18.173Z",
  },
  {
    id: 9,
    title: "Active Directory GPO Hardening",
    category: "Cybersecurity",
    description:
      "Applied Center for Internet Security (CIS) benchmarks to Active Directory domain controllers via Group Policy Objects (GPOs), Configuring the Default Domain Controllers Policy,LDAP server signing requirements,Refuse password changes for machine accounts,LAN Manager authentication level and Applying and Verifying Policy Updates",
    projectLink: "https://1drv.ms/v/c/8ba7733f57b4cf84/IQDNTg3jls1ZQrJvV-LdZXDjAfFfpZORpuFCv94wUfbTUC0?e=5YbbFQ",
    githubLink: "https://github.com/LoicVeirman/HardenAD",
    imageId:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=150&fit=crop",
    createdAt: "2024-01-15T13:45:09.758Z",
  },
   {
    id: 10,
    title: "Linux Os Hardening",
    category: "Cybersecurity",
    description:
      "security audit and system hardening scan on an Ubuntu Linux system using the Lynis auditing tool, Lynis evaluates system parameters including boot settings, kernel configuration, user accounts, file systems, networking, SSH security, and active services, Displays the final audit results, highlighting suggestions for hardening security (e.g., SSH configuration tweaks, banner notices, auditing settings) alongside a calculated Hardening Index score (57).",
    projectLink: "https://1drv.ms/v/c/8ba7733f57b4cf84/IQCO9FM2b2egQqB5bzIkKAtqAXQepj4rcRL992YfswJWqfI?e=fDiCYX",
    githubLink: "https://github.com/jbarcia/Lynis",
    imageId:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=150&fit=crop",
    createdAt: "2024-01-15T13:45:09.758Z",
  },
   {
    id: 11,
    title: "Linux Network Security Lab",
    category: "Cybersecurity",
    description:
      "Linux system administration and security testing across two terminal sessions (a host/server terminal at the top and a client terminal at the bottom),Installing Network Tools,Inspecting Network Services & Firewall,Configuring Firewall Rules,",
    projectLink: "https://1drv.ms/v/c/8ba7733f57b4cf84/IQAjboY_05N2QrQa6XbZCIOSAYDDqF-NUp7DVr6Gm2naIaA?e=m4fPQX",
    githubLink: "https://github.com/nmap/nmap",
    imageId:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=150&fit=crop",
    createdAt: "2024-01-15T13:45:09.758Z",
  },
  // --- ORIGINAL SOFTWARE DEV PROJECTS ---
  {
    id: 10,
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
    id: 11,
    title: "Hotel Nirvana",
    category: "Fullstack",
    description:
      "Hotel Nirvana is a cutting-edge hotel management system meticulously crafted using React.js and seamlessly integrated with Firebase. This robust platform empowers hoteliers to efficiently manage their properties, reservations, and guest interactions. With its user-friendly interface and real-time data synchronization, Hotel Nirvana elevates the hotel management experience to new heights.",
    projectLink: "https://hotel-nirvana12.netlify.app",
    githubLink: "https://github.com/Matthaios9/hotel_nirvana",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2Fhotel_nirvana.png?alt=media&token=76bb1f1c-9408-4343-a283-4ff9c23ddbaa",
    createdAt: "2024-01-15T13:46:58.058Z",
  },
  {
    id: 12,
    title: "Whatsapp Clone",
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
    id: 13,
    title: "Pig-Dice Game",
    category: "Frontend",
    description:
      "Behold the HTML, CSS, and JavaScript-powered Pig Dice Roll Game! Two players take turns rolling a virtual dice on a beautifully designed interface. With each roll, points accumulate, but beware the dreaded 1 – it resets your turn's score! Victory awaits the player who first reaches a total score of 100.",
    projectLink: "https://pigyrollgame.netlify.app",
    githubLink: "https://github.com/Matthaios9/pig-game",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2Fpig-game.png?alt=media&token=6421ca52-fa8c-4ca8-9554-ff2823f9f3b2",
    createdAt: "2024-01-16T05:32:18.173Z",
  },
  {
    id: 14,
    title: "React Meals",
    category: "Frontend",
    description:
      "React Meals is a charming small restaurant website crafted with React.js. Explore our delightful menu offerings, browse through mouthwatering food photos, and find our location easily. We've designed this website to provide a seamless and user-friendly experience for our valued customers.",
    projectLink: "https://restaurant69.netlify.app/",
    githubLink: "https://github.com/Matthaios9/restaurant-app/",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2Freact-meals.png?alt=media&token=20bb9b3e-4167-4002-8a31-0f9db6d48bcd",
    createdAt: "2024-01-16T05:41:58.435Z",
  },
  {
    id: 15,
    title: "Fresh Coffee Website",
    category: "Frontend",
    description:
      "Designed with love using HTML and CSS, is a coffee enthusiast's dream. Dive into the world of aromatic brews, tantalizing blends, and cozy coffee shops. Explore our menu, learn about our story, and find your nearest café location. We've brewed this website to perfection, just like our coffee.",
    projectLink: "https://fresshcoffee.netlify.app",
    githubLink: "https://github.com/Matthaios9/Coffee-Website-Main",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2FCofee-website.png?alt=media&token=2fa18a1b-9871-4485-87fd-722912587581",
    createdAt: "2024-01-16T05:43:44.397Z",
  },
  {
    id: 16,
    title: "Travel Time",
    category: "Frontend",
    description:
      "Meticulously crafted using HTML and CSS, is your companion for discovering the world's most stunning destinations. Dive into a treasure trove of travel inspiration, browse travel packages, and read travel tips from seasoned adventurers. Get ready to embark on a virtual journey with ExploreWorld!",
    projectLink: "https://travel-timez.netlify.app/",
    githubLink: "https://github.com/Matthaios9/Travel-website",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2FTravel-website.png?alt=media&token=e26abf13-39cb-4f39-a389-344f83b21b92",
    createdAt: "2024-01-16T05:46:04.660Z",
  },
  {
    id: 17,
    title: "Iphone 14 Animation",
    category: "Frontend",
    description:
      "A website that goes beyond the ordinary! As you scroll down, witness the magic unfold – the all-new iPhone 14 comes to life with a mesmerizing 3D rotation animation. Crafted with the latest web technologies, our website blends the elegance of HTML and CSS with the power of JavaScript.",
    projectLink: "https://iphone77.netlify.app/",
    githubLink: "https://github.com/Matthaios9/iphone",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2FIphone.png?alt=media&token=52252925-8c6d-4f22-8968-4b34a3fce526",
    createdAt: "2024-01-16T05:47:27.444Z",
  },
  {
    id: 18,
    title: "Fancy Interactive Card",
    category: "Frontend",
    description:
      "Discover our beautifully crafted Rating Card UI component, meticulously built with HTML, CSS, and JavaScript. This dynamic interface allows users to rate and review with ease. Hover over the stars to see them light up and provide instant feedback.",
    projectLink: "https://fancy-card-css.netlify.app/",
    githubLink: "https://github.com/Matthaios9/interactive_rating_card",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2FInteractive-rating-card.png?alt=media&token=8e7d03e7-b0e7-4701-8721-b0ac2565549d",
    createdAt: "2024-01-16T05:50:55.752Z",
  },
  {
    id: 19,
    title: "Discover Website",
    category: "Frontend",
    description:
      "Discover makes your travel planning a breeze. Whether you're seeking luxury hotels, cozy inns, or budget-friendly flights, we've got you covered. Embark on your next journey with confidence and convenience, right here on Discover.",
    projectLink: "https://trillo-zutet.netlify.app/",
    githubLink: "https://github.com/Matthaios9/trillo",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2Fdiscover.png?alt=media&token=85aeb6c2-db5f-4fb3-8e2e-ebe6c182e97b",
    createdAt: "2024-01-16T05:53:52.137Z",
  },
  {
    id: 20,
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
    id: 21,
    title: "Natours",
    category: "Frontend",
    description:
      "Discover pristine landscapes, thrilling adventures, and serene getaways with Natours. Browse our curated listings, get inspired by stunning imagery, and embark on a journey that reconnects you with nature's beauty. Your next eco-adventure begins here.",
    projectLink: "https://natours-meta.netlify.app",
    githubLink: "https://github.com/Matthaios9/natours",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2Fnatours.png?alt=media&token=51ebc28a-db7b-4049-ba92-87671dccd5e0",
    createdAt: "2024-01-16T06:00:03.226Z",
  },
  {
    id: 22,
    title: "Guess Number",
    category: "Frontend",
    description:
      "Fun and challenging game built with HTML and JavaScript. Can you guess the secret number? Put your skills to the test as you input your best guesses and receive feedback in real-time. With each attempt, you'll get closer to the correct number.",
    projectLink: "https://guess-number-zutet.netlify.app/",
    githubLink: "https://github.com/Matthaios9/guessNumber",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2Fguess-number.png?alt=media&token=93256761-bf86-42c5-b05f-c2886810223e",
    createdAt: "2024-01-16T06:18:01.164Z",
  },
  {
    id: 23,
    title: "Cargo Game",
    category: "Fullstack",
    description:
      "Caro is an engaging board game inspired by the renowned Japanese strategy board game, Gomoku. The frontend is designed with a Spring Thymeleaf theme, connecting to a SOAP Web Service. On the backend, Caro leverages Spring Boot to construct a powerful SOAP Web Service.",
    projectLink: "https://github.com/Matthaios9/CaroGameOnline",
    githubLink: "https://github.com/Matthaios9/CaroGameOnline",
    imageId:
      "https://firebasestorage.googleapis.com/v0/b/sonorous-stone-402314.appspot.com/o/projects%2FScreenshot%20(226).png?alt=media&token=c50b36a2-21bd-46c9-b5a8-6feee06ac6f9",
    createdAt: "2024-01-16T10:42:40.190Z",
  },
];

export default data;
