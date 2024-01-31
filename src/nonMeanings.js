const nonMeaningfulWords = [
  "hello",
  "mad",
  "idiot",
  "hi",
  "hii",
  "name",
  "surname",
  "lastname",
  "firstname",
  "Run",
  "Jump",
  "Sing",
  "Dance",
  "Read",
  "Write",
  "Speak",
  "Listen",
  "Eat",
  "Sleep",
  "Study",
  "Work",
  "Play",
  "Create",
  "Learn",
  "Teach",
  "Travel",
  "Drive",
  "Cook",
  "Clean",
  "Exercise",
  "Watch",
  "Listen",
  "Talk",
  "Think",
  "Smile",
  "Laugh",
  "Cry",
  "Hug",
  "Kiss",
  "Build",
  "Destroy",
  "Fix",
  "Paint",
  "Draw",
  "Solve",
  "Discover",
  "Explore",
  "Celebrate",
  "Challenge",
  "Adapt",
  "Dream",
  "Achieve",
  "Help",
  "Share",
  "Imagine",
  "Elephant",
  "Lion",
  "Tiger",
  "Giraffe",
  "Zebra",
  "Kangaroo",
  "Penguin",
  "Koala",
  "Panda",
  "Monkey",
  "Gorilla",
  "Hippopotamus",
  "Rhino",
  "Koala",
  "Penguin",
  "Giraffe",
  "Zebra",
  "Elephant",
  "Horse",
  "Cow",
  "Sheep",
  "Goat",
  "Pig",
  "Horse",
  "Rabbit",
  "Fox",
  "Wolf",
  "Bear",
  "Cheetah",
  "Leopard",
  "Giraffe",
  "Zebra",
  "Hippopotamus",
  "Rhino",
  "Kangaroo",
  "Koala",
  "Penguin",
  "Panda",
  "Monkey",
  "Gorilla",
  "Tiger",
  "Lion",
  "Zebra",
  "Giraffe",
  "Elephant",
  "myname",
  "travel",
  "make",
  "justine",
  "bye",
  "goodbye",
  "thanks",
  "thank you",
  "good",
  "bad",
  "ok",
  "okay",
  "fine",
  "cool",
  "awesome",
  "no",
  "yes",
  "maybe",
  "sure",
  "yeah",
  "yup",
  "please",
  "sorry",
  "excuse me",
  "pardon",
  "alright",
  "nice",
  "great",
  "wonderful",
  "fantastic",
  "amazing",
  "beautiful",
  "good morning",
  "good afternoon",
  "good evening",
  "good night",
  "how are you",
  "what's up",
  "see you",
  "talk to you later",
  "take care",
  "have a nice day",
  "best regards",
  "sincerely",
  "morning",
  "afternoon",
  "evening",
  "night",
  "day",
  "week",
  "month",
  "year",
  "today",
  "tomorrow",
  "yesterday",
  "now",
  "later",
  "soon",
  "forever",
  "always",
  "never",
  "together",
  "apart",
  "here",
  "there",
  "everywhere",
  "anywhere",
  "nowhere",
  "up",
  "down",
  "left",
  "right",
  "north",
  "south",
  "east",
  "west",
  "far",
  "near",
  "farther",
  "nearer",
  "farthest",
  "nearest",
  "away",
  "back",
  "forward",
  "on",
  "off",
  "in",
  "out",
  "hello",
  "Hello",
  "over",
  "under",
  "above",
  "below",
  "through",
  "across",
  "between",
  "among",
  "within",
  "without",
  "beside",
  "beyond",
  "inside",
  "outside",
  "around",
  "about",
  "before",
  "after",
  "during",
  "while",
  "since",
  "until",
  "at",
  "by",
  "for",
  "with",
  "without",
  "about",
  "against",
  "instead",
  "besides",
  "Shubham",
  "shubham",
  "Vipul",
  "vipul",
  "Renuka",
  "renuka",
  "Chinmay",
  "chinmay",
  "Miraya",
  "miraya",
  "alex",
  "Alex",
  "javascript",
  "Javascript",
  "girl",
  "throughout",
  "along",
  "against",
  "blork",
  "snizzle",
  "quibbly",
  "flibber",
  "wuzzle",
  "gibberish",
  "ziggurat",
  "pizzazz",
  "quizzle",
  "fizzle",
  "blop",
  "quorp",
  "zork",
  "mizzle",
  "sprocket",
  "frobnicate",
  "jibber-jabber",
  "gobbledygook",
  "higgledy-piggledy",
  "mumbo-jumbo",
  "jibberish",
  "quabble",
  "brouhaha",
  "gadzooks",
  "gargle",
  "flummox",
  "gibber",
  "whatchamacallit",
  "thingamajig",
  "doodad",
  "gibber",
  "gobbledegook",
  "hocus-pocus",
  "hullabaloo",
  "mishmash",
  "noodle",
  "riffraff",
  "shenanigans",
  "willy-nilly",
  "zizzle",
  "wobbly",
  "quixotic",
  "flibbertigibbet",
  "gobbledygook",
  "higgledy-piggledy",
  "jibber-jabber",
  "mumbo-jumbo",
  "namby-pamby",
  "razzmatazz",
  "skedaddle",
  "whippersnapper",
  "gizmo",
  "fandango",
  "ballyhoo",
  "hullabaloo",
  "hokey-pokey",
  "rhubarb",
  "malarkey",
  "gibberish",
  "gobbledygook",
  "hullabaloo",
  "flibbertigibbet",
  "riffraff",
  "shenanigans",
  "willy-nilly",
  "kerfuffle",
  "brouhaha",
  "gadzooks",
  "hocus-pocus",
  "balderdash",
  "jibber",
  "flummox",
  "gibber",
  "whatchamacallit",
  "thingamajig",
  "doodad",
  "gibber",
  "gobbledegook",
  "hullabaloo",
  "mishmash",
  "noodle",
  "riffraff",
  "shenanigans",
  "willy-nilly",
  "gobbledygook",
  "higgledy-piggledy",
  "mumbo-jumbo",
  "jibberish",
  "quabble",
  "brouhaha",
  "gadzooks",
  "gargle",
  "flummox",
  "gibber",
  "whatchamacallit",
  "thingamajig",
  "doodad",
  "gibber",
  "gobbledegook",
  "hocus-pocus",
  "hullabaloo",
  "mishmash",
  "noodle",
  "riffraff",
  "shenanigans",
  "willy-nilly",
  "John",
  "Mary",
  "James",
  "Linda",
  "Robert",
  "Patricia",
  "Michael",
  "Jennifer",
  "William",
  "Elizabeth",
  "David",
  "Barbara",
  "Richard",
  "Susan",
  "Joseph",
  "Jessica",
  "Thomas",
  "Sarah",
  "Charles",
  "Karen",
  "Christopher",
  "Nancy",
  "Daniel",
  "Lisa",
  "Matthew",
  "Margaret",
  "Anthony",
  "Betty",
  "Donald",
  "Dorothy",
  "Mark",
  "Helen",
  "Paul",
  "Amanda",
  "George",
  "Melissa",
  "Steven",
  "Deborah",
  "Andrew",
  "Stephanie",
  "Kenneth",
  "Sharon",
  "Joshua",
  "Angela",
  "Kevin",
  "Michelle",
  "Brian",
  "Emily",
  "Susan",
  "Jacob",
  "Patricia",
  "Aarav",
  "Saanvi",
  "Arjun",
  "Ananya",
  "Advait",
  "Aadya",
  "Vivaan",
  "Anika",
  "Vihaan",
  "Pari",
  "Kabir",
  "Myra",
  "Reyansh",
  "Ishita",
  "Aryan",
  "Prisha",
  "Ishaan",
  "Avni",
  "Shaurya",
  "Aaradhya",
  "Rudra",
  "Riya",
  "Mohammed",
  "Zara",
  "Divyansh",
  "Aanya",
  "Aadi",
  "Maira",
  "Atharv",
  "Anaya",
  "Vedant",
  "Avika",
  "Dhruv",
  "Aarna",
  "Arnav",
  "Aishani",
  "Aaryan",
  "Chahat",
  "Vihaana",
  "Sara",
  "Kiaan",
  "Amaira",
  "Krishna",
  "Anvi",
  "Shivansh",
  "Tara",
  "Hrithik",
  "Aahana",
  "Tom",
  "Meryl",
  "Leonardo",
  "Julia",
  "Brad",
  "Angelina",
  "Johnny",
  "Cate",
  "Will",
  "Emma",
  "Denze",
  "Charlize",
  "Robert",
  "Jennifer",
  "Chris",
  "Natalie",
  "Ryan",
  "Scarlett",
  "Matthew",
  "Anne",
  "Keanu",
  "Nicole",
  "Hugh",
  "Mila",
  "George",
  "Kate",
  "Chris",
  "Amy",
  "Idri",
  "Emma",
  "Mark",
  "Halle",
  "Jake",
  "Sandra",
  "Chris",
  "Aishwarya",
  "Shah",
  "Priyanka",
  "Amitabh",
  "Deepika",
  "Rajinikanth",
  "Kangana",
  "Ranbir",
  "Kapoor",
  "Head",
  "Eyes",
  "Nose",
  "Mouth",
  "Ears",
  "Neck",
  "Shoulders",
  "Arms",
  "Elbows",
  "Hands",
  "Fingers",
  "Chest",
  "Back",
  "Spine",
  "Stomach",
  "Hips",
  "Legs",
  "Knees",
  "Ankles",
  "Feet",
  "Toes",
  "Hair",
  "Skin",
  "Muscles",
  "Bones",
  "Alia",
  "Aamir",
  "Khan",
  "Salman",
  "Kareena",
];

export default nonMeaningfulWords;