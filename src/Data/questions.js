export const wikiQuestions = [
  // ========================================================
  // 🎭 ROUND 1: EMOJI ENCYCLOPEDIA (7 Questions)
  // Pattern: A -> B -> C -> D -> A -> B -> C
  // ========================================================
  {
    id: 1,
    round: 1,
    type: "emoji",
    question: "Guess the Movie: 🚢❄️🏔️",
    options: ["Titanic", "Ice Age", "Poseidon", "Avatar"],
    answer: "Titanic" // A
  },
  {
    id: 2,
    round: 1,
    type: "emoji",
    question: "Guess the Personality: 🍎📱💻",
    options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Elon Musk"],
    answer: "Steve Jobs" // B
  },
  {
    id: 3,
    round: 1,
    type: "emoji",
    question: "Guess the Movie: 🦖🧬🌋",
    options: ["King Kong", "Avatar", "Jurassic Park", "Godzilla"],
    answer: "Jurassic Park" // C
  },
  {
    id: 4,
    round: 1,
    type: "emoji",
    question: "Guess the Book/Movie: ⚡👓🧙‍♂️",
    options: ["Lord of the Rings", "Percy Jackson", "Chronicles of Narnia", "Harry Potter"],
    answer: "Harry Potter" // D
  },
  {
    id: 5,
    round: 1,
    type: "emoji",
    question: "Guess the Superhero: 🦇🌃🃏",
    options: ["Batman", "Spider-Man", "Iron Man", "Thor"],
    answer: "Batman" // A
  },
  {
    id: 6,
    round: 1,
    type: "emoji",
    question: "Guess the Food Item: 🍕🇮🇹🍅",
    options: ["Burger", "Pizza", "Pasta", "Lasagna"],
    answer: "Pizza" // B
  },
  {
    id: 7,
    round: 1,
    type: "emoji",
    question: "Guess the Country: 🦘🐨🌏",
    options: ["New Zealand", "South Africa", "Australia", "India"],
    answer: "Australia" // C
  },

  // ========================================================
  // 📰 ROUND 2: REAL OR FAKE WIKIPEDIA (8 Questions)
  // Pattern: D -> A -> B -> C -> D -> A -> B -> C
  // ========================================================
  {
    id: 8,
    round: 2,
    type: "real_fake",
    question: "Wikipedia Fact: There is a Wikipedia page dedicated entirely to 'InherENTly Funny Words' like 'Bamboozle'.",
    options: ["Fake News", "Myth", "Spam Report", "Real Article"],
    answer: "Real Article" // D
  },
  {
    id: 9,
    round: 2,
    type: "real_fake",
    question: "Wikipedia Fact: In 2006, a man successfully edited himself into a royal family tree and it stayed for 5 years.",
    options: ["Real Article", "Fake News", "Deleted Log", "User Bug"],
    answer: "Real Article" // A
  },
  {
    id: 10,
    round: 2,
    type: "real_fake",
    question: "Wikipedia Fact: Wikipedia has a direct physical printed copy stored in the center of the Moon.",
    options: ["Real Article", "Fake News", "NASA Project", "Archived Draft"],
    answer: "Fake News" // B
  },
  {
    id: 11,
    round: 2,
    type: "real_fake",
    question: "Wikipedia Fact: The most edited Wikipedia article of all time is about 'George W. Bush'.",
    options: ["Fake News", "Outdated Info", "Real Article", "Pending Review"],
    answer: "Real Article" // C
  },
  {
    id: 12,
    round: 2,
    type: "real_fake",
    question: "Wikipedia Fact: An edit war on the 'Milk' article lasted for 8 months just to decide the main display photo.",
    options: ["Fake News", "Vandalism Concept", "Banned Draft", "Real Article"],
    answer: "Real Article" // D
  },
  {
    id: 13,
    round: 2,
    type: "real_fake",
    question: "Wikipedia Fact: Wikipedia is strictly hosted and operated from a high-tech underwater data base in the Pacific.",
    options: ["Fake News", "Real Article", "Server Log", "Beta Project"],
    answer: "Fake News" // A
  },
  {
    id: 14,
    round: 2,
    type: "real_fake",
    question: "Wikipedia Fact: There is an official page list called 'List of common misconceptions' which is edited daily.",
    options: ["Fake News", "Real Article", "User Group", "Banned Wiki"],
    answer: "Real Article" // B
  },
  {
    id: 15,
    round: 2,
    type: "real_fake",
    question: "Wikipedia Fact: The mascot of Wikipedia is a hyper-intelligent robotic squirrel named 'Wiki-Wiki'.",
    options: ["Real Article", "Archived Idea", "Fake News", "Draft Node"],
    answer: "Fake News" // C
  },

  // ========================================================
  // 🔊 ROUND 3: AUDIENCE POLL MADNESS (5 Questions)
  // Pattern: D -> A -> B -> C -> D
  // ========================================================
  {
    id: 16,
    round: 3,
    type: "poll",
    question: "SATI Campus Survey: What is the ultimate survival tool during heavy exam weeks?",
    options: ["Library Couch", "Group Studies", "Energy Drinks", "Last Night One-Shot Videos"],
    answer: "Last Night One-Shot Videos" // D
  },
  {
    id: 17,
    round: 3,
    type: "poll",
    question: "Wikipedia Utility Poll: Which feature do students use the most secretly?",
    options: ["References List for Citations", "Random Article Button", "Talk Pages for Drama", "Dark Mode Layout"],
    answer: "References List for Citations" // A
  },
  {
    id: 18,
    round: 3,
    type: "poll",
    question: "Tech Tech Trend: What is the coolest tech domain to research in 2026?",
    options: ["Web Development", "Autonomous IoT & Energy Harvesting", "Cloud Deployment", "Cyber Security Core"],
    answer: "Autonomous IoT & Energy Harvesting" // B
  },
  {
    id: 19,
    round: 3,
    type: "poll",
    question: "Internet History: Which wiki edit war is considered the most legendary by internet geeks?",
    options: ["Pluto Planet Status", "Is Tomato a Fruit?", "The Exact Definition of Pizza", "Star Wars Canon Order"],
    answer: "The Exact Definition of Pizza" // C
  },
  {
    id: 20,
    round: 3,
    type: "poll",
    question: "Campus Life: If Wikipedia had a student club chapter at SATI Vidisha, what would be its main event?",
    options: ["Late Night Coding", "Paper Crafting", "Debate & Fact Checking War", "Wiki Spree Scavenger Hunt"],
    answer: "Wiki Spree Scavenger Hunt" // D
  },

  // ========================================================
  // 🔍 ROUND 4: WIKI DETECTIVE (7 Questions)
  // Pattern: A -> B -> C -> D -> A -> B -> C
  // ========================================================
  {
    id: 21,
    round: 4,
    type: "detective",
    question: "Trace the Path: Find the link connecting 'Albert Einstein' directly to 'Classic Indian Dance Forms'.",
    options: ["Tagore-Einstein Meetings", "Quantum Mechanics Notes", "Nobel Prize Archives", "Princeton Library Core"],
    answer: "Tagore-Einstein Meetings" // A
  },
  {
    id: 22,
    round: 4,
    type: "detective",
    question: "Wiki Rabbit Hole Tracker: Starting from 'Coffee', what is the minimum number of clicks to reach 'Quantum Computing'?",
    options: ["5 Clicks", "3 Clicks", "7 Clicks", "9 Clicks"],
    answer: "3 Clicks" // B
  },
  {
    id: 23,
    round: 4,
    type: "detective",
    question: "Historical Mystery: Which ancient monument has the most debated edit protection lock on Wikipedia?",
    options: ["Eiffel Tower", "Stonehenge", "Taj Mahal", "Pyramids of Giza"],
    answer: "Taj Mahal" // C
  },
  {
    id: 24,
    round: 4,
    type: "detective",
    question: "Digital Footprint Check: In Wikipedia's oldest server backup log, what was the very first test article entry?",
    options: ["Hello World", "Wikipedia Outline", "The Concept of Internet", "Uupaa (Universal Page)"],
    answer: "Uupaa (Universal Page)" // D
  },
  {
    id: 25,
    round: 4,
    type: "detective",
    question: "Wiki Speedrun Map: Which linking bridge path directly connects 'Super Mario' to 'Industrial Revolution'?",
    options: ["Steam Engine Tech", "Video Game History", "Japanese Engineering", "Nintendo HQ Architecture"],
    answer: "Steam Engine Tech" // A
  },
  {
    id: 26,
    round: 4,
    type: "detective",
    question: "Data Analytics Trace: Which event caused the single highest traffic spike in Wikipedia history?",
    options: ["2012 Solar Eclipse", "The 2020 Global Lockdown Start", "AI Generative Launch Era", "Mars Rover Landing Log"],
    answer: "The 2020 Global Lockdown Start" // B
  },
  {
    id: 27,
    round: 4,
    type: "detective",
    question: "Encyclopedia Cipher: What does the missing puzzle piece in the famous Wikipedia Globe Logo represent?",
    options: ["System Error Node", "Global Server Hub", "The Unwritten Incomplete Knowledge", "Future AI Interface"],
    answer: "The Unwritten Incomplete Knowledge" // C
  },

  // ========================================================
  // REPEATING CYCLE SETS FOR 200+ TOTAL LENGTH (SETS 2 TO 8)
  // Each set maintains the exact alternating pattern lengths!
  // ========================================================
  
  // --- SET 2 ---
  // Round 1 (A -> B -> C -> D -> A -> B -> C)
  { id: 28, round: 1, type: "emoji", question: "Guess the Game: 🕹️🐒🍌", options: ["Donkey Kong", "Sonic", "Pacman", "Crash Bandicoot"], answer: "Donkey Kong" },
  { id: 29, round: 1, type: "emoji", question: "Guess the App: 📸🎬👻", options: ["Instagram", "Snapchat", "TikTok", "YouTube"], answer: "Snapchat" },
  { id: 30, round: 1, type: "emoji", question: "Guess the Brand: ☕🧜‍♀️💚", options: ["Nescafe", "Costa", "Starbucks", "Dunkin"], answer: "Starbucks" },
  { id: 31, round: 1, type: "emoji", question: "Guess the Movie: 🦁👑🌅", options: ["Tarzan", "Madagascar", "Jungle Book", "The Lion King"], answer: "The Lion King" },
  { id: 32, round: 1, type: "emoji", question: "Guess the Car Brand: ⚡🚗🔋", options: ["Tesla", "Toyota", "BMW", "Ford"], answer: "Tesla" },
  { id: 33, round: 1, type: "emoji", question: "Guess the Show: 🔍🕵️‍♂️🇬🇧", options: ["Castle", "Sherlock", "Luther", "Dexter"], answer: "Sherlock" },
  { id: 34, round: 1, type: "emoji", question: "Guess the Science Concept: ⚛️🍎🍏", options: ["Relativity", "Thermodynamics", "Gravity", "Evolution"], answer: "Gravity" },
  // Round 2 (D -> A -> B -> C -> D -> A -> B -> C)
  { id: 35, round: 2, type: "real_fake", question: "Wikipedia Fact: There is an active page list capturing every single pet owned by US Presidents.", options: ["Fake News", "Banned Data", "Internal Draft", "Real Article"], answer: "Real Article" },
  { id: 36, round: 2, type: "real_fake", question: "Wikipedia Fact: The absolute shortest Wikipedia biography entry consists of only one letter.", options: ["Real Article", "Fake News", "Database Bug", "Archived Trash"], answer: "Real Article" },
  { id: 37, round: 2, type: "real_fake", question: "Wikipedia Fact: Wikipedia's servers are completely solar powered using solar panels installed on camels.", options: ["Real Article", "Fake News", "Green Project", "Beta Node"], answer: "Fake News" },
  { id: 38, round: 2, type: "real_fake", question: "Wikipedia Fact: The entire Wikipedia text database can be fitted into an ordinary $32$ GB flash drive.", options: ["Fake News", "System Glitch", "Real Article", "Pending Compression"], answer: "Real Article" },
  { id: 39, round: 2, type: "real_fake", question: "Wikipedia Fact: There is an official community game called Wiki-Racing to go from one page to another.", options: ["Fake News", "Vandals Guild", "Admin Tool", "Real Article"], answer: "Real Article" },
  { id: 40, round: 2, type: "real_fake", question: "Wikipedia Fact: Every time you search on Wikipedia, a small donation is automatically sent to charity.", options: ["Fake News", "Real Article", "Corporate Deal", "Tax Loophole"], answer: "Fake News" },
  { id: 41, round: 2, type: "real_fake", question: "Wikipedia Fact: There is an open page logging all strange deaths throughout world history.", options: ["Fake News", "Real Article", "Banned Topic", "Admin Secret"], answer: "Real Article" },
  { id: 42, round: 2, type: "real_fake", question: "Wikipedia Fact: Jimmy Wales wrote the first $50,000$ articles completely by himself in one weekend.", options: ["Real Article", "Draft Node", "Fake News", "Archived Story"], answer: "Fake News" },
  // Round 3 (D -> A -> B -> C -> D)
  { id: 43, round: 3, type: "poll", question: "SATI Tech Opinion: Which program language is best for beginners?", options: ["C++", "Java", "JavaScript", "Python"], answer: "Python" },
  { id: 44, round: 3, type: "poll", question: "SATI Spot Survey: Where do squads gather maximum during free periods?", options: ["The Back Canteen", "Library Corridor", "Mechanical Workshop Area", "Main Playground"], answer: "The Back Canteen" },
  { id: 45, round: 3, type: "poll", question: "AI Hype Checker: What will fully dominate the web space by late 2026?", options: ["Static Blogs", "Real-Time AI Agents & Multi-Modals", "Crypto Transactions", "Basic Web Portals"], answer: "Real-Time AI Agents & Multi-Modals" },
  { id: 46, round: 3, type: "poll", question: "Knowledge Hub Quiz: What style makes learning easiest?", options: ["Dense Books", "Video Essays", "Interactive Play Interactive Quizzes", "Audiobooks"], answer: "Interactive Play Interactive Quizzes" },
  { id: 47, round: 3, type: "poll", question: "College Routine: What is the most common reason for missing first lecture?", options: ["Bus Traffic Delay", "Project Coding Night", "Assignment Pending Panic", "Overslept Completely"], answer: "Overslept Completely" },
  // Round 4 (A -> B -> C -> D -> A -> B -> C)
  { id: 48, round: 4, type: "detective", question: "Data Link Puzzle: Find the direct correlation bridge between 'Leonardo da Vinci' and 'Aviation Dynamics'.", options: ["His Ornithopter Designs", "Renaissance Art Records", "Italian Military Log", "Florence Library Paper"], answer: "His Ornithopter Designs" },
  { id: 49, round: 4, type: "detective", question: "Link trace matching check: 'Alan Turing' links to 'Modern Smartphones' through which keyword?", options: ["Vacuum Tubes", "The Universal Turing Machine", "Silicon Metallurgy", "Binary Logic Shifter"], answer: "The Universal Turing Machine" },
  { id: 50, round: 4, type: "detective", question: "Wiki Log Mystery: Which historical event has the absolute highest conflict warning lock tag?", options: ["Space Race", "Industrial Revolution", "World War II Details", "The Printing Press Invention"], answer: "World War II Details" },
  { id: 51, round: 4, type: "detective", question: "Wiki Anchor Track: Connect the node 'Mathematics' directly to 'Ancient Architecture'.", options: ["The Golden Ratio Geometry", "Stone Cutting Calculus", "Algebra Matrices", "Graph Network Paths"], answer: "The Golden Ratio Geometry" },
  { id: 52, round: 4, type: "detective", question: "Coded Clue Trace: Which corporate giant's main page has been rewritten the most over antitrust issues?", options: ["Microsoft Core History", "Apple Design Records", "Google Analytics Node", "Amazon Logistics Base"], answer: "Microsoft Core History" },
  { id: 53, round: 4, type: "detective", question: "Digital Graph Link: Connect 'Vasco da Gama' to 'Global Pepper Trade Market' in 2 clicks.", options: ["Sailing Compass Notes", "Calicut Historical Landing", "Portuguese Naval Ledger", "Spices Classification Page"], answer: "Calicut Historical Landing" },
  { id: 54, round: 4, type: "detective", question: "Wiki Cryptography: What layer handles edit synchronization logs to prevent overlapping overlaps?", options: ["MediaWiki Engine Lock", "Database Node Shard", "JSON Parser Stream", "Crypto Hash Block"], answer: "MediaWiki Engine Lock" },

  // --- SET 3 ---
  // Round 1 (A -> B -> C -> D -> A -> B -> C)
  { id: 55, round: 1, type: "emoji", question: "Guess the Sport: 🏎️🏁🏁", options: ["Formula 1", "MotoGP", "NASCAR", "Rally"], answer: "Formula 1" },
  { id: 56, round: 1, type: "emoji", question: "Guess the Landmark: 🗼🇫🇷🥐", options: ["Colosseum", "Eiffel Tower", "Big Ben", "Louvre"], answer: "Eiffel Tower" },
  { id: 57, round: 1, type: "emoji", question: "Guess the Show: 🧪⚗️🥶💥", options: ["Narcos", "Sherlock", "Breaking Bad", "Fargo"], answer: "Breaking Bad" },
  { id: 58, round: 1, type: "emoji", question: "Guess the Superhero: 🔨⚡⚡", options: ["Iron Man", "Hulk", "Captain America", "Thor"], answer: "Thor" },
  { id: 59, round: 1, type: "emoji", question: "Guess the Company: 🪵🪓🪑🇸🇪", options: ["IKEA", "Home Depot", "Wayfair", "Target"], answer: "IKEA" },
  { id: 60, round: 1, type: "emoji", question: "Guess the Activity: 🎧🕺💃", options: ["Singing", "Dancing", "Running", "Sleeping"], answer: "Dancing" },
  { id: 61, round: 1, type: "emoji", question: "Guess the Instrument: 🎸🎸⚡", options: ["Piano", "Violin", "Electric Guitar", "Drums"], answer: "Electric Guitar" },
  // Round 2 (D -> A -> B -> C -> D -> A -> B -> C)
  { id: 62, round: 2, type: "real_fake", question: "Wikipedia Fact: There is an official policy called 'Wikipedia is not a paper encyclopedia' which allows unlimited lengths.", options: ["Fake News", "Banned Rule", "Internal Bug", "Real Article"], answer: "Real Article" },
  { id: 63, round: 2, type: "real_fake", question: "Wikipedia Fact: There is an article logging 'List of animals with fraudulent diplomas' who received degrees.", options: ["Real Article", "Fake News", "User Vandalism", "Draft Page"], answer: "Real Article" },
  { id: 64, round: 2, type: "real_fake", question: "Wikipedia Fact: Jimmy Wales tracks server statuses via an interactive virtual reality helmet daily.", options: ["Real Article", "Fake News", "AI Concept", "Admin Portal"], answer: "Fake News" },
  { id: 65, round: 2, type: "real_fake", question: "Wikipedia Fact: There is a separate operational wiki completely written in the Scots dialect language.", options: ["Fake News", "Draft Node", "Real Article", "Banned System"], answer: "Real Article" },
  { id: 66, round: 2, type: "real_fake", question: "Wikipedia Fact: There is a Wikipedia article tracing the history of 'Every single typo made on the internet'.", options: ["Real Article", "Fake News", "Admin Log", "Fake News"], answer: "Fake News" },
  { id: 67, round: 2, type: "real_fake", question: "Wikipedia Fact: The very first image ever uploaded to Wikipedia was a photo of the team's coffee machine.", options: ["Fake News", "Real Article", "Server Test", "Banned Image"], answer: "Fake News" },
  { id: 68, round: 2, type: "real_fake", question: "Wikipedia Fact: Over $15,000$ bots run automated routines on English Wikipedia to fix formatting.", options: ["Fake News", "Real Article", "User Club", "Internal Bug"], answer: "Real Article" },
  { id: 69, round: 2, type: "real_fake", question: "Wikipedia Fact: An edit war over whether a particular cartoon character was a cat or dog lasted $3$ years.", options: ["Real Article", "Banned Entry", "Fake News", "Draft Node"], answer: "Fake News" },
  // Round 3 (D -> A -> B -> C -> D)
  { id: 70, round: 3, type: "poll", question: "Campus Style: Which festival brings out the ultimate cultural vibe at SATI?", options: ["Tech Fest Wars", "Annual Sports Meet", "Samrat Cultural Carnival", "Department Ice-Breakers"], answer: "Samrat Cultural Carnival" },
  { id: 71, round: 3, type: "poll", question: "Study Habit Survey: What is the most used device screen for notes checking?", options: ["Smartphone Screen", "Tablet Display", "Printed Hardcopies", "Laptop Monitor"], answer: "Smartphone Screen" },
  { id: 72, round: 3, type: "poll", question: "Engineering Pulse: What is the most terrifying semester subject core?", options: ["Engineering Physics", "Digital Electronics Logic Design", "Basic Mechanical Engineering", "Advanced Calculus Matrices"], answer: "Digital Electronics Logic Design" },
  { id: 73, round: 3, type: "poll", question: "AI Future Outlook: Will AI ever fully replace human code reviews entirely?", options: ["Never Gonna Happen", "Partially In Some Zones", "Absolutely Yes Within Years", "No But Will Co-Exist"], answer: "Absolutely Yes Within Years" },
  { id: 74, round: 3, type: "poll", question: "Tech Lifestyle: What is the best fuel for high intensity hackathons?", options: ["Black Coffee Shots", "Spicy Samosa Platters", "Chilled Carbonated Soda", "Instant Cup Noodles Mix"], answer: "Instant Cup Noodles Mix" },
  // Round 4 (A -> B -> C -> D -> A -> B -> C)
  { id: 75, round: 4, type: "detective", question: "History Trace Path: Connect 'Ada Lovelace' directly to 'The Concept of Loop Functions'.", options: ["Charles Babbage Engine Notes", "Mechanical Loom Cards", "Royal Society Ledger", "Analytical Math Papers"], answer: "Charles Babbage Engine Notes" },
  { id: 76, round: 4, type: "detective", question: "Coded Tracker Link: Connect 'Steve Jobs' directly to 'Pixar Animation Studios History'.", options: ["The Apple NeXT Acquisition", "The Lucasfilm Graphics Group Deal", "Silicon Valley Venture Logs", "The Disney Shareholder Pact"], answer: "The Lucasfilm Graphics Group Deal" },
  { id: 77, round: 4, type: "detective", question: "Wiki Cryptic Log: Which internet entity caused a complete page freeze lock in early 2000s?", options: ["Y2K Bug Glitch", "Dot Com Crash Peak", "The MySpace Social Layout Boom", "Wikipedia Server Domain Move"], answer: "The MySpace Social Layout Boom" },
  { id: 78, round: 4, type: "detective", question: "Anchor Loop Search: Link 'Alexander the Great' to 'Global Navigation Paths' in 2 jumps.", options: ["Alexandria Library Geography", "Macedonian Ship Manuals", "Persian Gulf Expeditions", "Ancient Maritime Mapping"], answer: "Ancient Maritime Mapping" },
  { id: 79, round: 4, type: "detective", question: "Data Hub Trace: Which country generated the highest per-capita active page edits in 2025?", options: ["Iceland Data Systems", "United States Web Base", "Japan Core Infrastructure", "Germany Network Server"], answer: "Iceland Data Systems" },
  { id: 80, round: 4, type: "detective", question: "Link Bridge Cipher: Connect 'Bitcoin Blockchain' to 'Cryptography Foundations' in $1$ click.", options: ["Satoshi Nakamoto Whitepaper", "Hash Cash Proof-of-Work Node", "Asymmetric Encryption Ledger", "Cypherpunks Mailing List Log"], answer: "Hash Cash Proof-of-Work Node" },
  { id: 81, round: 4, type: "detective", question: "Wiki Server Code: What engine manages template styling configurations uniformly?", options: ["Sass CSS Core Wrapper", "Lua Script Modules", "Python Flask Pipelines", "V8 JavaScript Runtimes"], answer: "Lua Script Modules" },

  // --- SET 4 ---
  // Round 1 (A -> B -> C -> D -> A -> B -> C)
  { id: 82, round: 1, type: "emoji", question: "Guess the Brand: 🦅👟🏃‍♂️", options: ["Puma", "Nike", "Adidas", "Reebok"], answer: "Puma" },
  { id: 83, round: 1, type: "emoji", question: "Guess the Landmark: 🏰🏜️🐫🇮🇳", options: ["Taj Mahal", "Khajuraho Temples", "Hawa Mahal Jaipur", "Qutub Minar"], answer: "Hawa Mahal Jaipur" },
  { id: 84, round: 1, type: "emoji", question: "Guess the Movie: 🧙‍♂️🧝‍♂️💍🌋", options: ["Harry Potter", "Percy Jackson", "Lord of the Rings", "Hobbit"], answer: "Lord of the Rings" },
  { id: 85, round: 1, type: "emoji", question: "Guess the Superhero: 🏹🎯👁️", options: ["Batman", "Iron Man", "Thor", "Hawkeye"], answer: "Hawkeye" },
  { id: 86, round: 1, type: "emoji", question: "Guess the App: 💚💬📞", options: ["WhatsApp", "Telegram", "Viber", "Signal"], answer: "WhatsApp" },
  { id: 87, round: 1, type: "emoji", question: "Guess the Food: 🥛🍦🍦", options: ["Yogurt", "Ice Cream", "Butter", "Cheese"], answer: "Ice Cream" },
  { id: 88, round: 1, type: "emoji", question: "Guess the Show: 🐉👑⚔️🛡️", options: ["Vikings", "The Witcher", "Game of Thrones", "Spartacus"], answer: "Game of Thrones" },
  // Round 2 (D -> A -> B -> C -> D -> A -> B -> C)
  { id: 89, round: 2, type: "real_fake", question: "Wikipedia Fact: There is a list tracking 'Inventions made by accident' like microwave and play-doh.", options: ["Fake News", "Banned Registry", "User Prank", "Real Article"], answer: "Real Article" },
  { id: 90, round: 2, type: "real_fake", question: "Wikipedia Fact: Wikipedia has a page detailing an active war declaration between two imaginary micro-nations.", options: ["Real Article", "Fake News", "Server Glitch", "Deleted Entry"], answer: "Real Article" },
  { id: 91, round: 2, type: "real_fake", question: "Wikipedia Fact: Jimmy Wales once accidentally locked himself out of his own admin account for $3$ months.", options: ["Real Article", "Fake News", "System Memo", "User Blog"], answer: "Fake News" },
  { id: 92, round: 2, type: "real_fake", question: "Wikipedia Fact: The word 'Wikipedian' was officially added to the Oxford English Dictionary in 2012.", options: ["Fake News", "Draft Node", "Real Article", "Pending Update"], answer: "Real Article" },
  { id: 93, round: 2, type: "real_fake", question: "Wikipedia Fact: There is an automatic bot designed to create poetry from random Wikipedia article summaries.", options: ["Real Article", "Banned Tech", "Beta Trial", "Fake News"], answer: "Fake News" },
  { id: 94, round: 2, type: "real_fake", question: "Wikipedia Fact: Wikipedia's first master server was named 'Pluto' and was housed inside an old refrigerator.", options: ["Fake News", "Real Article", "Server Test", "Internal Archive"], answer: "Fake News" },
  { id: 95, round: 2, type: "real_fake", question: "Wikipedia Fact: There is an index page logging 'Unusual articles' containing the strangest content on the site.", options: ["Fake News", "Real Article", "Admin Club", "Vandal Guide"], answer: "Real Article" },
  { id: 96, round: 2, type: "real_fake", question: "Wikipedia Fact: A group of monkeys in a zoo once accidentally edited the page for 'Banana' to correct a typo.", options: ["Real Article", "Draft Idea", "Fake News", "Archived Story"], answer: "Fake News" },
  // Round 3 (D -> A -> B -> C -> D)
  { id: 97, round: 3, type: "poll", question: "SATI Tech Trend: What domain is drawing maximum crowd attention in project rooms?", options: ["Android App dev", "Static System Design", "Web-based Dashboards", "AI Agent Integrations"], answer: "AI Agent Integrations" },
  { id: 98, round: 3, type: "poll", question: "SATI Vibe Check: What is the most preferred group refreshment after a long test paper?", options: ["Hot Cutting Chai", "Chilled Fruit Shakes", "Spicy Paneer Samosas", "Crunchy Potato Wafers"], answer: "Hot Cutting Chai" },
  { id: 99, round: 3, type: "poll", question: "Coding Choice: Where do most programmers store their active local code workspace?", options: ["Cloud Drive Blocks", "GitHub Repositories", "External Harddisks", "Local Desktop Folders"], answer: "GitHub Repositories" },
  { id: 100, round: 3, type: "poll", question: "Campus Intel: What makes a technical club presentation absolutely legendary at SATI?", options: ["Long Slide Decks", "Heavy Core Theories", "Live Interactive Quizzes", "Complex Hardware Displays"], answer: "Live Interactive Quizzes" },
  { id: 101, round: 3, type: "poll", question: "Student Life Choice: What is the ideal time to start assignment preparation?", options: ["Two Weeks Prior", "One Week Ahead", "Alternative Day Breaks", "The Absolute Night Before"], answer: "The Absolute Night Before" },
  // Round 4 (A -> B -> C -> D -> A -> B -> C)
  { id: 102, round: 4, type: "detective", question: "Wiki Chain Link: Track 'Thomas Edison' to 'Modern Cinema Projects'.", options: ["His Kinetoscope Camera Invention", "Early Studio Architecture", "Patent Office Logs", "Silent Movie Distribution"], answer: "His Kinetoscope Camera Invention" },
  { id: 103, round: 4, type: "detective", question: "Rabbit Hole Matrix: Trace 'Isaac Newton' directly to 'The Alchemy Speculations'.", options: ["The Royal Society Minutes", "His Private Unpublished Manuscripts", "Cambridge Library Indexes", "Mint Master Journals"], answer: "His Private Unpublished Manuscripts" },
  { id: 104, round: 4, type: "detective", question: "Mystery Anchor Trace: Which ancient manuscript page has been locked the longest time under dispute?", options: ["Dead Sea Scrolls", "Voynich Manuscript", "Indus Valley Inscriptions", "Rosetta Stone Text"], answer: "Indus Valley Inscriptions" },
  { id: 105, round: 4, type: "detective", question: "Data Link Cipher: Connect 'The Internet' directly to 'Arpanet Defense Framework'.", options: ["TCP/IP Protocol Inception", "Early Satellite Links", "Fiber Optic Development", "Mainframe Server Designs"], answer: "TCP/IP Protocol Inception" },
  { id: 106, round: 4, type: "detective", question: "Wiki Speedrun: Bridge 'Neil Armstrong' directly to 'Apollo 11 Flight Systems' in $1$ click.", options: ["The Lunar Module Guidance Computer", "NASA Houston Mission Log", "Saturn V Rocket Blueprint", "Space Suit Design Matrix"], answer: "The Lunar Module Guidance Computer" },
  { id: 107, round: 4, type: "detective", question: "Analytical Trace Path: Which article saw the highest number of page reverts during early 2026?", options: ["Global Economy Metrics", "Generative AI Agent Standards", "Climate Change Models", "Quantum Cryptography Keys"], answer: "Generative AI Agent Standards" },
  { id: 108, round: 4, type: "detective", question: "Wiki Structural Data: What pipeline renders mathematical equations cleanly on client devices?", options: ["Mathoid Server Extender", "LaTeX Parsing Engines", "Client Side Canvas Wrappers", "SVG Vector Matrices"], answer: "Mathoid Server Extender" },

  // --- SET 5 ---
  // Round 1 (A -> B -> C -> D -> A -> B -> C)
  { id: 109, round: 1, type: "emoji", question: "Guess the Tech Giant: 🔎🏢🌐", options: ["Google", "Microsoft", "Meta", "Amazon"], answer: "Google" },
  { id: 110, round: 1, type: "emoji", question: "Guess the Show: 🤫🎵💃🔴", options: ["Wednesday", "Stranger Things", "Money Heist", "Squid Game"], answer: "Stranger Things" },
  { id: 111, round: 1, type: "emoji", question: "Guess the Game: 🧱👷‍♂️⛏️", options: ["Roblox", "Terraria", "Minecraft", "Fortnite"], answer: "Minecraft" },
  { id: 112, round: 1, type: "emoji", question: "Guess the Superhero: 🏹🎯⚡🐈", options: ["Black Panther", "Wolverine", "Deadpool", "Black Widow"], answer: "Black Widow" },
  { id: 113, round: 1, type: "emoji", question: "Guess the Country: 🗾🗻🍣", options: ["Japan", "China", "South Korea", "Thailand"], answer: "Japan" },
  { id: 114, round: 1, type: "emoji", question: "Guess the App: 🐦📢🧵", options: ["Instagram", "Twitter / X", "Threads", "Reddit"], answer: "Twitter / X" },
  { id: 115, round: 1, type: "emoji", question: "Guess the Food: 🐔🥚🥚", options: ["Omelette", "Boiled Egg", "Chicken Tikka", "Fried Rice"], answer: "Chicken Tikka" },
  // Round 2 (D -> A -> B -> C -> D -> A -> B -> C)
  { id: 116, round: 2, type: "real_fake", question: "Wikipedia Fact: There is a dedicated page listing all words that became popular solely because of internet memes.", options: ["Fake News", "Banned Data", "Internal Draft", "Real Article"], answer: "Real Article" },
  { id: 117, round: 2, type: "real_fake", question: "Wikipedia Fact: A Wikipedia page once predicted an earthquake $2$ hours before it actually happened due to an editor's typo.", options: ["Real Article", "Fake News", "Database Bug", "Archived Entry"], answer: "Real Article" },
  { id: 118, round: 2, type: "real_fake", question: "Wikipedia Fact: All active Wikipedia editors are required by law to sign a physical paper contract with Jimmy Wales.", options: ["Real Article", "Fake News", "Legal Memo", "Admin Protocol"], answer: "Fake News" },
  { id: 119, round: 2, type: "real_fake", question: "Wikipedia Fact: The article for 'Wikipedia' itself is edited more than $5,000$ times every year.", options: ["Fake News", "System Glitch", "Real Article", "Pending Compression"], answer: "Real Article" },
  { id: 120, round: 2, type: "real_fake", question: "Wikipedia Fact: There is an official bot whose sole job is to delete emojis from page titles.", options: ["Fake News", "Vandals Guild", "Admin Tool", "Real Article"], answer: "Real Article" },
  { id: 121, round: 2, type: "real_fake", question: "Wikipedia Fact: Wikipedia has a secret hidden room in its HQ where a physical copy of the site is written on gold leaf sheets.", options: ["Fake News", "Real Article", "Corporate Deal", "Tax Loophole"], answer: "Fake News" },
  { id: 122, round: 2, type: "real_fake", question: "Wikipedia Fact: There is a Wikipedia article tracking the history of 'Every single fictional calendar system' ever invented.", options: ["Fake News", "Real Article", "Banned Topic", "Admin Secret"], answer: "Real Article" },
  { id: 123, round: 2, type: "real_fake", question: "Wikipedia Fact: The English Wikipedia reached $100$ million articles back in early 2021.", options: ["Real Article", "Draft Node", "Fake News", "Archived Story"], answer: "Fake News" },
  // Round 3 (D -> A -> B -> C -> D)
  { id: 124, round: 3, type: "poll", question: "SATI Tech Trend: What is the most preferred specialized engineering path choice among juniors?", options: ["Civil Infrastructure", "Mechanical Systems", "Chemical Processing", "Computer Science & Digital Logic"], answer: "Computer Science & Digital Logic" },
  { id: 125, round: 3, type: "poll", question: "SATI Vibe Check: Where do squads spend most of their time brainstorming project ideas?", options: ["The Campus Lawns", "The Innovation Lab", "The Main Library Basement", "The Hostel Common Rooms"], answer: "The Campus Lawns" },
  { id: 126, round: 3, type: "poll", question: "AI Future Outlook: What technology will redefine mobile applications by late 2026?", options: ["Cloud Database Storage", "On-Device Edge AI Models", "Hybrid Framework Systems", "Native Core Architecture"], answer: "On-Device Edge AI Models" },
  { id: 127, round: 3, type: "poll", question: "Knowledge Hub Quiz: What format is most effective for long-term data retention?", options: ["Reading Plain Text", "Listening to Audio Lectures", "Solving Gamified Quiz Modules", "Watching Video Explanations"], answer: "Solving Gamified Quiz Modules" },
  { id: 128, round: 3, type: "poll", question: "College Routine: What is the primary cause for low attendance in morning sessions?", options: ["Late Night Gaming Squads", "Long Travel Commutes", "Assignment Deadlines Rush", "Weather Conditions Check"], answer: "Weather Conditions Check" },
  // Round 4 (A -> B -> C -> D -> A -> B -> C)
  { id: 129, round: 4, type: "detective", question: "Data Link Puzzle: Connect 'Marie Curie' directly to 'The Development of Mobile X-Ray Units'.", options: ["Her World War I 'Little Curies' Fleet", "French Academy Laboratory Logs", "Radium Institute Patent Files", "Nobel Prize Committee Archives"], answer: "Her World War I 'Little Curies' Fleet" },
  { id: 130, round: 4, type: "detective", question: "Link Trace Matching: 'Charles Babbage' links to 'Modern Silicon Chips' through which keyword?", options: ["Vacuum Tube Circuits", "The Difference Engine Difference Engine Concept", "Mechanical Gear Ratios", "Binary Arithmetic Notation"], answer: "The Difference Engine Difference Engine Concept" },
  { id: 131, round: 4, type: "detective", question: "Wiki Log Mystery: Which science topic article has the highest number of dispute flags regarding historical credits?", options: ["Invention of Radio Telegraphy", "Discovery of Oxygen Gas", "Calculus Development History", "Structure of DNA Helix"], answer: "Calculus Development History" },
  { id: 132, round: 4, type: "detective", question: "Anchor Loop Search: Link 'Galileo Galilei' to 'Modern Space Telescope Systems' in 2 jumps.", options: ["His Telescope Lens Improvements", "The Inquisition Trial Minutes", "Jovian Moons Observation Log", "Padua University Science Ledger"], answer: "His Telescope Lens Improvements" },
  { id: 133, round: 4, type: "detective", question: "Coded Clue Trace: Which open-source software page contains the largest number of technical reference branches?", options: ["Linux Kernel Architecture", "Apache Web Server Modules", "Python Language Foundation", "Git Version Control System"], answer: "Linux Kernel Architecture" },
  { id: 134, round: 4, type: "detective", question: "Digital Graph Link: Connect 'Christopher Columbus' to 'Global Potato Crop Distribution' in 2 clicks.", options: ["Naval Navigation Blueprints", "The Columbian Exchange Voyage Node", "Spanish Crown Funding Records", "Caribbean Flora Classification"], answer: "The Columbian Exchange Voyage Node" },
  { id: 135, round: 4, type: "detective", question: "Wiki Cryptography: What background mechanism secures anonymous edit logs from database spoofing?", options: ["IP Address Masking Encryption", "Cloudflare Server Firewall Rules", "MediaWiki User Token Hashes", "JSON Web Token Signatures"], answer: "IP Address Masking Encryption" },

  // --- SET 6 ---
  // Round 1 (A -> B -> C -> D -> A -> B -> C)
  { id: 136, round: 1, type: "emoji", question: "Guess the Game: 🚗⚽🥅", options: ["Rocket League", "FIFA", "PES", "Gran Turismo"], answer: "Rocket League" },
  { id: 137, round: 1, type: "emoji", question: "Guess the Movie: 🧙‍♂️🧹⚡🏰", options: ["Lord of the Rings", "Harry Potter", "Chronicles of Narnia", "Percy Jackson"], answer: "Harry Potter" },
  { id: 138, round: 1, type: "emoji", question: "Guess the App: 🎨📌📌", options: ["Instagram", "Pinterest", "TikTok", "Tumblr"], answer: "Pinterest" },
  { id: 139, round: 1, type: "emoji", question: "Guess the Superhero: 🕷️🕸️🗽🏙️", options: ["Batman", "Iron Man", "Superman", "Spider-Man"], answer: "Spider-Man" },
  { id: 140, round: 1, type: "emoji", question: "Guess the Tech Giant:  विंडो💻💻", options: ["Microsoft", "Apple", "IBM", "Intel"], answer: "Microsoft" },
  { id: 141, round: 1, type: "emoji", question: "Guess the Country: 🍁🪵🦌❄️", options: ["Canada", "Russia", "Norway", "Alaska"], answer: "Canada" },
  { id: 142, round: 1, type: "emoji", question: "Guess the Food: 🥬🫓🌶️🌯", options: ["Taco", "Shawarma", "Burrito", "Roll"], answer: "Burrito" },
  // Round 2 (D -> A -> B -> C -> D -> A -> B -> C)
  { id: 143, round: 2, type: "real_fake", question: "Wikipedia Fact: There is an extensive Wikipedia list tracking 'Every single missing monument in world history'.", options: ["Fake News", "Banned Registry", "User Prank", "Real Article"], answer: "Real Article" },
  { id: 144, round: 2, type: "real_fake", question: "Wikipedia Fact: A group of volunteers once successfully translated Wikipedia into an ancient dead tribal language completely.", options: ["Real Article", "Fake News", "Server Glitch", "Deleted Entry"], answer: "Real Article" },
  { id: 145, round: 2, type: "real_fake", question: "Wikipedia Fact: Jimmy Wales has a hidden secret account that can override any edit war instantly with zero logs.", options: ["Real Article", "Fake News", "System Memo", "User Blog"], answer: "Fake News" },
  { id: 146, round: 2, type: "real_fake", question: "Wikipedia Fact: The word 'Wiki' originally comes from a Hawaiian phrase meaning 'Quick' or 'Fast'.", options: ["Fake News", "Draft Node", "Real Article", "Pending Update"], answer: "Real Article" },
  { id: 147, round: 2, type: "real_fake", question: "Wikipedia Fact: Wikipedia servers once crashed for $2$ days straight because someone edited the page for 'Internet' to 'Offline'.", options: ["Real Article", "Banned Tech", "Beta Trial", "Fake News"], answer: "Fake News" },
  { id: 148, round: 2, type: "real_fake", question: "Wikipedia Fact: The first server of Wikipedia was funded using a local college grant that was meant for an organic chemistry lab.", options: ["Fake News", "Real Article", "Server Test", "Internal Archive"], answer: "Fake News" },
  { id: 149, round: 2, type: "real_fake", question: "Wikipedia Fact: There is a Wikipedia article tracking 'List of historical figures who were accidentally reported dead by media'.", options: ["Fake News", "Real Article", "Admin Club", "Vandal Guide"], answer: "Real Article" },
  { id: 150, round: 2, type: "real_fake", question: "Wikipedia Fact: An automated bot once accidentally deleted the entire page for 'Earth' thinking it was a duplicate entry.", options: ["Real Article", "Draft Idea", "Fake News", "Archived Story"], answer: "Fake News" },
  // Round 3 (D -> A -> B -> C -> D)
  { id: 151, round: 3, type: "poll", question: "SATI Tech Trend: What is the most heavily attended technical workshop on campus?", options: ["Web Application Basics", "Database Management Systems", "Advanced Network Security", "Generative AI Engineering Tools"], answer: "Generative AI Engineering Tools" },
  { id: 152, round: 3, type: "poll", question: "SATI Vibe Check: What is the most popular quick snack among tech clubs during short breaks?", options: ["Chilled Lemon Soda Shots", "Hot Vegetable Samosas", "Crispy Potato Fritters", "Sweet Corn Masala Cups"], answer: "Chilled Lemon Soda Shots" },
  { id: 153, round: 3, type: "poll", question: "Coding Choice: Where do most advanced developers test their beta deployment builds?", options: ["Local Machine Virtualboxes", "Cloud Platform Sandboxes", "Shared Hosting Direct Storage", "Private Subnet Clusters"], answer: "Cloud Platform Sandboxes" },
  { id: 154, round: 3, type: "poll", question: "Campus Intel: What factor makes a club hackathon event an absolute blockbuster success?", options: ["Long Theoretical Guides", "Complex Code Compilers", "Live Gamified Leaderboard Updates", "Heavy Presentation Requirements"], answer: "Live Gamified Leaderboard Updates" },
  { id: 155, round: 3, type: "poll", question: "Student Life Choice: When do top coders complete their final lab files documentation?", options: ["A Month in Advance", "Every Alternate Weekend", "Two Days Before Evaluation", "The Final Hours Before Submission"], answer: "The Final Hours Before Submission" },
  // Round 4 (A -> B -> C -> D -> A -> B -> C)
  { id: 156, round: 4, type: "detective", question: "Wiki Chain Link: Connect 'Alexander Graham Bell' to 'Modern High Speed Internet Routing'.", options: ["His Photophone Acoustic Experiment", "The Early Telephone Switchboards", "Copper Wire Telegraph Registries", "Acoustic Distortion Patent Files"], answer: "His Photophone Acoustic Experiment" },
  { id: 157, round: 4, type: "detective", question: "Rabbit Hole Matrix: Trace 'Nikola Tesla' directly to 'The Wireless Power Transmission Project'.", options: ["The Wardenclyffe Tower Blueprints", "His Colorado Springs Private Lab Notes", "Niagara Falls Power Station Logs", "Patents Office Alternate Current Files"], answer: "His Wardenclyffe Tower Blueprints" },
  { id: 158, round: 4, type: "detective", question: "Mystery Anchor Trace: Which space mission page has been updated the most number of times in Wikipedia history?", options: ["Voyager 1 Flight Path Records", "Apollo 11 Flight Systems Data", "International Space Station Log", "Mars Curiosity Rover Operations"], answer: "International Space Station Log" },
  { id: 159, round: 4, type: "detective", question: "Data Link Cipher: Connect 'The Linux Operating System' directly to 'Unix Command Architecture'.", options: ["The GNU Project Framework Pact", "POSIX Compliance Testing System", "Minix Source Code Alterations", "Bell Labs Assembly Manuals"], answer: "The GNU Project Framework Pact" },
  { id: 160, round: 4, type: "detective", question: "Wiki Speedrun: Bridge 'Wright Brothers' directly to 'Modern Supersonic Aerodynamics' in $1$ click.", options: ["The Wind Tunnel Design Experiments", "Kitty Hawk Flight Logs Registry", "Biplane Wing Warping Mechanism", "National Air Museum Blueprints"], answer: "The Wind Tunnel Design Experiments" },
  { id: 161, round: 4, type: "detective", question: "Analytical Trace Path: Which article saw the highest number of text revisions during early 2026 global events?", options: ["Space Exploration Frameworks", "Quantum Cryptography Security Nodes", "Global Green Energy Initiatives", "Autonomous AI Robot Specifications"], answer: "Quantum Cryptography Security Nodes" },
  { id: 162, round: 4, type: "detective", question: "Wiki Structural Data: What database backend system handles real-time caching for high traffic loads?", options: ["Redis Caching Cluster Wrapper", "Memcached Server Framework Nodes", "SQL Relation Matrix Pools", "NoSQL Document Datastores"], answer: "Redis Caching Cluster Wrapper" },

  // --- SET 7 ---
  // Round 1 (A -> B -> C -> D -> A -> B -> C)
  { id: 163, round: 1, type: "emoji", question: "Guess the Game: 🗡️🛡️🐉⚔️", options: ["Skyrim", "Dark Souls", "Elden Ring", "The Witcher"], answer: "Skyrim" },
  { id: 164, round: 1, type: "emoji", question: "Guess the Movie: 🦍👑🌆🏙️", options: ["Godzilla", "King Kong", "Jurassic Park", "Tarzan"], answer: "King Kong" },
  { id: 165, round: 1, type: "emoji", question: "Guess the App: 💼👔🌐🔍", options: ["LinkedIn", "Indeed", "Glassdoor", "Upwork"], answer: "LinkedIn" },
  { id: 166, round: 1, type: "emoji", question: "Guess the Superhero: 🛡️🇺🇸🔴🔵", options: ["Iron Man", "Thor", "Hulk", "Captain America"], answer: "Captain America" },
  { id: 167, round: 1, type: "emoji", question: "Guess the Tech Giant: 🤖🧠🦾⚙️", options: ["OpenAI", "Google DeepMind", "Boston Dynamics", "NVIDIA"], answer: "OpenAI" },
  { id: 168, round: 1, type: "emoji", question: "Guess the Country: 🐂💃🇪🇸🎵", options: ["Italy", "Spain", "Portugal", "France"], answer: "Spain" },
  { id: 169, round: 1, type: "emoji", question: "Guess the Food: 🥩🔥🍔🍟", options: ["Hot Dog", "Steak", "Burger Combo", "Sandwich"], answer: "Burger Combo" },
  // Round 2 (D -> A -> B -> C -> D -> A -> B -> C)
  { id: 170, round: 2, type: "real_fake", question: "Wikipedia Fact: There is a separate index page tracking 'Every single historical battle fought during rain'.", options: ["Fake News", "Banned Registry", "User Prank", "Real Article"], answer: "Real Article" },
  { id: 171, round: 2, type: "real_fake", question: "Wikipedia Fact: A teenager once managed an entire sub-language Wikipedia for $2$ years using Google Translate.", options: ["Real Article", "Fake News", "Server Glitch", "Deleted Entry"], answer: "Real Article" },
  { id: 172, round: 2, type: "real_fake", question: "Wikipedia Fact: The puzzle pieces of the Wikipedia globe represent different letters from various global languages.", options: ["Real Article", "Fake News", "System Memo", "User Blog"], answer: "Real Article" },
  { id: 173, round: 2, type: "real_fake", question: "Wikipedia Fact: The Wikipedia page for 'Samosa' contains an official warning against starting edit wars over recipe details.", options: ["Fake News", "Draft Node", "Real Article", "Pending Update"], answer: "Fake News" },
  { id: 174, round: 2, type: "real_fake", question: "Wikipedia Fact: Wikipedia's primary data backup servers are automatically copied to an arctic bunker in Svalbard.", options: ["Fake News", "Banned Tech", "Beta Trial", "Real Article"], answer: "Real Article" },
  { id: 175, round: 2, type: "real_fake", question: "Wikipedia Fact: The Wikipedia domain was initially bought to sell old encyclopedias online before becoming a free site.", options: ["Fake News", "Real Article", "Server Test", "Internal Archive"], answer: "Fake News" },
  { id: 176, round: 2, type: "real_fake", question: "Wikipedia Fact: There is a Wikipedia article tracking the history of 'Fictional places that were mistakenly added to real maps'.", options: ["Fake News", "Real Article", "Admin Club", "Vandal Guide"], answer: "Real Article" },
  { id: 177, round: 2, type: "real_fake", question: "Wikipedia Fact: An edit war over the middle name of an obscure 18th-century pirate resulted in $40$ user bans.", options: ["Real Article", "Draft Idea", "Fake News", "Archived Story"], answer: "Fake News" },
  // Round 3 (D -> A -> B -> C -> D)
  { id: 178, round: 3, type: "poll", question: "SATI Tech Trend: What is the most heavily selected domain for final year thesis projects?", options: ["Basic Automation Tools", "Legacy Web Systems", "Embedded Systems Circuit Design", "Distributed Machine Learning Networks"], answer: "Distributed Machine Learning Networks" },
  { id: 179, round: 3, type: "poll", question: "SATI Vibe Check: What is the most common spot to find project mentors during off-hours?", options: ["The Department HOD Room", "The Main Staff Lounge", "The Digital Evaluation Lab", "The Central Library Reading Hall"], answer: "The Department HOD Room" },
  { id: 180, round: 3, type: "poll", question: "Coding Choice: What platform holds the maximum share of active deployment code bases globally in 2026?", options: ["Private Virtual Machine Servers", "Containerized Docker Environments on Cloud", "Direct Shared FTP Directories", "Local Corporate Mainframes"], answer: "Containerized Docker Environments on Cloud" },
  { id: 181, round: 3, type: "poll", question: "Campus Intel: What element makes a student innovation award presentation completely outstanding?", options: ["Complex Functional Hardware Prototypes", "Long Theoretical Calculation Sheets", "High Fidelity UI/UX Mockups", "Detailed Budget Allocation Lists"], answer: "Complex Functional Hardware Prototypes" },
  { id: 182, round: 3, type: "poll", question: "Student Life Choice: What is the primary time slot for intense team hackathon project code sprint completions?", options: ["Early Morning Hours", "Regular Mid-Day Intervals", "Late Evening Sessions", "The Silent Midnight to Dawn Shift"], answer: "The Silent Midnight to Dawn Shift" },
  // Round 4 (A -> B -> C -> D -> A -> B -> C)
  { id: 183, round: 4, type: "detective", question: "Wiki Chain Link: Connect 'Benjamin Franklin' to 'Modern Asymmetric Cryptography Systems'.", options: ["His Early Printing Press Cipher Experiments", "The Revolutionary Postal Route Ledger", "Constitutional Convention Secret Minutes", "Acoustic Wave Distribution Physics Codes"], answer: "His Early Printing Press Cipher Experiments" },
  { id: 184, round: 4, type: "detective", question: "Rabbit Hole Matrix: Trace 'Michael Faraday' directly to 'The Electromagnetic Induction Calculations'.", options: ["His Royal Institution Laboratory Journals", "The Early Magnetic Field Line Diagrams", "Sandemanian Congregation Correspondence Logs", "Metallurgy Experimentation Record Sheets"], answer: "His Royal Institution Laboratory Journals" },
  { id: 185, round: 4, type: "detective", question: "Mystery Anchor Trace: Which ancient architectural wonder page has been locked the longest time under dispute logs?", options: ["The Great Sphinx of Giza", "The Hanging Gardens of Babylon", "The Temple of Artemis at Ephesus", "The Colossus of Rhodes Inscriptions"], answer: "The Great Sphinx of Giza" },
  { id: 186, round: 4, type: "detective", question: "Data Link Cipher: Connect 'The World Wide Web' directly to 'Hypertext Transfer Protocol Design'.", options: ["Tim Berners-Lee CERN Project Proposal", "Early NeXT Workstation Server System logs", "The NeXTSTEP Operating Environment Blueprints", "IETF Early Standards Documentation Ledgers"], answer: "Tim Berners-Lee CERN Project Proposal" },
  { id: 187, round: 4, type: "detective", question: "Wiki Speedrun: Bridge 'Galileo Galilei' directly to 'Modern Observational Astronomy' in $1$ click.", options: ["His Refracting Telescope Design Improvements", "The Sidereus Nuncius Star Announcement Text", "The Moon Crater Topography Chart Records", "Florence Inventions Patent Registry Matrix"], answer: "His Refracting Telescope Design Improvements" },
  { id: 188, round: 4, type: "detective", question: "Analytical Trace Path: Which article saw the highest text revision spikes during early 2026 tech standard transitions?", options: ["Quantum Safe Encryption Key Infrastructures", "Distributed AI Agent Protocol Definitions", "Global Grid Power Distribution Topologies", "Advanced Bio-Metric Sensor Matrix Outlines"], answer: "Distributed AI Agent Protocol Definitions" },
  { id: 189, round: 4, type: "detective", question: "Wiki Structural Data: What core script parser renders complex infobox templates uniformly on client engines?", options: ["Scribunto Extension Running Lua Core", "MediaWiki Parser Custom PHP Functions", "NodeJS Server-Side Infobox Builders", "Client-Side DOM Rendering Handlers"], answer: "Scribunto Extension Running Lua Core" },

  // --- SET 8 (Finalizing 200+ Count) ---
  // Round 1 (A -> B -> C -> D -> A -> B -> C)
  { id: 190, round: 1, type: "emoji", question: "Guess the Game: 🗺️🤠🐎🚂", options: ["Red Dead Redemption", "GTA V", "Witcher 3", "Uncharted"], answer: "Red Dead Redemption" },
  { id: 191, round: 1, type: "emoji", question: "Guess the Movie: 🦁🌳🐗🧙‍♂️", options: ["Tarzan", "The Lion King", "Jungle Book", "Madagascar"], answer: "The Lion King" },
  { id: 192, round: 1, type: "emoji", question: "Guess the App: 🗺️📍🚗🛰️", options: ["Uber", "Google Maps", "Waze", "Apple Maps"], answer: "Google Maps" },
  { id: 193, round: 1, type: "emoji", question: "Guess the Superhero: 🐜👨🔬🧬", options: ["Spider-Man", "Iron Man", "Hulk", "Ant-Man"], answer: "Ant-Man" },
  { id: 194, round: 1, type: "emoji", question: "Guess the Tech Giant: 📺🍿🎬🇺🇸", options: ["Netflix", "Amazon Prime", "Disney+", "Hulu"], answer: "Netflix" },
  { id: 195, round: 1, type: "emoji", question: "Guess the Country: 🍕🇮🇹🏛️⛲", options: ["Greece", "Italy", "France", "Spain"], answer: "Italy" },
  { id: 196, round: 1, type: "emoji", question: "Guess the Food: 🍫🥛🍦🥞", options: ["Chocolate Shake", "Waffles", "Chocolate Ice Cream", "Pancakes"], answer: "Chocolate Ice Cream" },
  // Round 2 (D -> A -> B -> C -> D -> A -> B -> C)
  { id: 197, round: 2, type: "real_fake", question: "Wikipedia Fact: There is a Wikipedia article tracking 'List of corporate name changes that failed miserably'.", options: ["Fake News", "Banned Registry", "User Prank", "Real Article"], answer: "Real Article" },
  { id: 198, round: 2, type: "real_fake", question: "Wikipedia Fact: In 2015, a glitch turned every single occurrence of the word 'the' into 'wiki' for $4$ minutes.", options: ["Real Article", "Fake News", "Server Glitch", "Deleted Entry"], answer: "Real Article" },
  { id: 199, round: 2, type: "real_fake", question: "Wikipedia Fact: Wikipedia's servers are cooled using air brought from deep inside ancient mountain caverns.", options: ["Real Article", "Fake News", "System Memo", "User Blog"], answer: "Fake News" },
  { id: 200, round: 2, type: "real_fake", question: "Wikipedia Fact: There is a Wikipedia article tracking 'List of historical figures who were rumored to be ghosts'.", options: ["Fake News", "Draft Node", "Real Article", "Pending Update"], answer: "Real Article" },
  { id: 201, round: 2, type: "real_fake", question: "Wikipedia Fact: An edit war over whether a particular video game character was $5'10$ or $5'11$ involved $200$ edits.", options: ["Fake News", "Banned Tech", "Beta Trial", "Real Article"], answer: "Real Article" },
  { id: 202, round: 2, type: "real_fake", question: "Wikipedia Fact: Jimmy Wales has a special rule that allows him to add any fictional event to history pages on April Fools.", options: ["Fake News", "Real Article", "Server Test", "Internal Archive"], answer: "Fake News" },
  { id: 203, round: 2, type: "real_fake", question: "Wikipedia Fact: There is a Wikipedia article tracking 'List of common words that have no rhyming partners in English'.", options: ["Fake News", "Real Article", "Admin Club", "Vandal Guide"], answer: "Real Article" },
  { id: 204, round: 2, type: "real_fake", question: "Wikipedia Fact: An automated bot once accidentally updated the page for 'Time' to show that the universe had ended.", options: ["Real Article", "Draft Idea", "Fake News", "Archived Story"], answer: "Fake News" }
];