export const RELIGIONS = ["Buddhist", "Christian", "Hindu", "Jain", "Muslim", "Other", "Sikh"] as const;

export const CATEGORIES = ["General", "SC", "ST", "OBC", "Minority"] as const;

export const CASTE_CERTIFICATE_TYPES = ["RD Number", "Upload Physical Document"] as const;

export const SPECIALLY_ABLED_TYPES = [
  "Visual",
  "Locomotive",
  "Hearing",
  "Other",
  "Intellectual",
  "Physical",
  "Speech",
] as const;

export const SPECIALLY_ABLED_SUB_TYPES = [
  "Low Vision",
  "Blindness",
  "One Leg Affected",
  "Both Legs Affected",
  "One Arm Affected",
  "Hard of Hearing",
  "Deaf",
  "Speech and Language Disability",
  "Intellectual Disability",
  "Multiple Disabilities",
] as const;

export const SALUTATIONS = ["Mr.", "Ms.", "Mrs.", "Dr."] as const;

export const STATES = [
  "ANDAMAN AND NICOBAR ISLANDS",
  "ANDHRA PRADESH",
  "ARUNACHAL PRADESH",
  "ASSAM",
  "BIHAR",
  "CHANDIGARH",
  "CHHATTISGARH",
  "DADRA AND NAGAR HAVELI",
  "DAMAN AND DIU",
  "DELHI",
  "GOA",
  "GUJARAT",
  "HARYANA",
  "HIMACHAL PRADESH",
  "JAMMU AND KASHMIR",
  "JHARKHAND",
  "KARNATAKA",
  "KERALA",
  "LAKSHADWEEP",
  "MADHYA PRADESH",
  "MAHARASHTRA",
  "MANIPUR",
  "MEGHALAYA",
  "MIZORAM",
  "NAGALAND",
  "ODISHA",
  "PUDUCHERRY",
  "PUNJAB",
  "RAJASTHAN",
  "SIKKIM",
  "TAMIL NADU",
  "TELANGANA",
  "TRIPURA",
  "UTTAR PRADESH",
  "UTTARAKHAND",
  "WEST BENGAL",
] as const;

export const DISTRICTS: Record<string, readonly string[]> = {
  KARNATAKA: [
    "BAGALKOT",
    "BALLARI",
    "BELAGAVI",
    "BENGALURU RURAL",
    "BENGALURU URBAN",
    "BIDAR",
    "CHAMARAJANAGARA",
    "CHIKKABALLAPURA",
    "CHIKKAMAGALURU",
    "CHITRADURGA",
    "DAKSHINA KANNADA",
    "DAVANAGERE",
    "DHARWAD",
    "GADAG",
    "HASSAN",
    "HAVERI",
    "KALABURAGI",
    "KODAGU",
    "KOLAR",
    "KOPPAL",
    "MANDYA",
    "MYSURU",
    "RAICHUR",
    "RAMANAGARA",
    "SHIVAMOGGA",
    "TUMAKURU",
    "UDUPI",
    "UTTARA KANNADA",
    "VIJAYAPURA",
    "YADGIR",
  ],
};

export const TALUKS: Record<string, readonly string[]> = {
  "BAGALKOT": ["Bagalkot", "Badami", "Bilagi", "Hunagund", "Jamakhandi", "Mudhol", "Guledgudda", "Rabkavi Banhatti", "Ilkal"],
  "BALLARI": ["Ballari", "Kurugodu", "Siruguppa", "Sandur", "Kampli"],
  "BELAGAVI": ["Belagavi", "Athani", "Bailhongal", "Chikkodi", "Gokak", "Hukkeri", "Khanapur", "Ramdurg", "Raybag", "Saundatti", "Nippani", "Kagwad"],
  "BENGALURU RURAL": ["Devanahalli", "Doddaballapura", "Hoskote", "Nelamangala"],
  "BENGALURU URBAN": ["Anekal", "Bengaluru North", "Bengaluru East", "Bengaluru South", "Yelahanka"],
  "BIDAR": ["Bidar", "Bhalki", "Humnabad", "Aurad", "Basavakalyan", "Kamalnagar", "Chitgoppa"],
  "CHAMARAJANAGARA": ["Chamarajanagar", "Gundlupet", "Kollegal", "Yelandur", "Hanur"],
  "CHIKKABALLAPURA": ["Chikkaballapura", "Bagepalli", "Chintamani", "Gauribidanur", "Sidlaghatta", "Gudibanda"],
  "CHIKKAMAGALURU": ["Chikkamagaluru", "Kadur", "Koppa", "Mudigere", "Narasimharajapura", "Sringeri", "Tarikere", "Ajjampura"],
  "CHITRADURGA": ["Chitradurga", "Challakere", "Hiriyur", "Holalkere", "Hosadurga", "Molakalmuru"],
  "DAKSHINA KANNADA": ["Mangaluru", "Bantwal", "Puttur", "Sullia", "Belthangady", "Moodabidri", "Kadaba"],
  "DAVANAGERE": ["Davanagere", "Harihar", "Channagiri", "Honnali", "Jagalur"],
  "DHARWAD": ["Dharwad", "Hubballi", "Kalghatgi", "Kundgol", "Navalgund", "Alnavar", "Annigeri"],
  "GADAG": ["Gadag", "Ron", "Shirahatti", "Nargund", "Mundargi", "Gajendragad", "Lakshmeshwar"],
  "HASSAN": ["Hassan", "Alur", "Arkalgud", "Belur", "Channarayapatna", "Holenarasipura", "Sakleshpur", "Yeslur"],
  "HAVERI": ["Haveri", "Byadgi", "Hangal", "Hirekerur", "Ranibennur", "Savanur", "Shiggaon", "Rattihalli"],
  "KALABURAGI": ["Kalaburagi", "Afzalpur", "Aland", "Chincholi", "Chitapur", "Jevargi", "Sedam", "Shahabad", "Kalgi", "Kamalapur"],
  "KODAGU": ["Madikeri", "Somwarpet", "Virajpet"],
  "KOLAR": ["Kolar", "Bangarapet", "Malur", "Mulbagal", "Srinivaspur", "KGF"],
  "KOPPAL": ["Koppal", "Gangavathi", "Kushtagi", "Yelburga", "Kanakagiri", "Karatagi", "Kuknoor"],
  "MANDYA": ["Mandya", "Maddur", "Malavalli", "Srirangapatna", "Krishnarajapet", "Pandavapura", "Nagamangala"],
  "MYSURU": ["Mysuru", "Nanjangud", "Hunsur", "H D Kote", "Krishnarajanagara", "Periyapatna", "T Narasipura", "Saragur", "Saligrama"],
  "RAICHUR": ["Raichur", "Devadurga", "Lingsugur", "Manvi", "Sindhanur", "Maski", "Sirwar"],
  "RAMANAGARA": ["Ramanagara", "Channapatna", "Kanakapura", "Magadi"],
  "SHIVAMOGGA": ["Shivamogga", "Bhadravathi", "Hosanagara", "Sagar", "Shikaripura", "Soraba", "Thirthahalli"],
  "TUMAKURU": ["Tumakuru", "Chiknayakanahalli", "Kunigal", "Madhugiri", "Sira", "Tiptur", "Turuvekere", "Pavagada", "Koratagere", "Gubbi"],
  "UDUPI": ["Udupi", "Kundapura", "Karkala", "Kaup", "Brahmavar", "Byndoor", "Hebri"],
  "UTTARA KANNADA": ["Karwar", "Ankola", "Bhatkal", "Honnavar", "Kumta", "Sirsi", "Siddapur", "Yellapur", "Mundgod", "Haliyal", "Joida", "Dandeli"],
  "VIJAYAPURA": ["Vijayapura", "Indi", "Muddebihal", "Sindagi", "Babaleshwar", "Basavana Bagewadi", "Chadchan", "Devar Hippargi", "Kolhar", "Nidgundi", "Talikoti"],
  "YADGIR": ["Yadgir", "Shahapur", "Shorapur", "Gurmitkal", "Hunasagi", "Wadgera"],
};

export const EDUCATION_LEVELS = [
  "10th",
  "PUC",
  "Diploma",
  "ITI",
  "Graduate",
  "Post Graduate",
] as const;

export const STREAMS: Record<string, readonly string[]> = {
  PUC: ["Arts", "Commerce", "Science"],
  Diploma: ["Diploma"],
  ITI: ["ITI"],
  Graduate: ["Arts", "Commerce", "Science", "Engineering", "Management", "Law", "Education"],
  "Post Graduate": ["Arts", "Commerce", "Science", "Engineering", "Management", "Law"],
  "High School": ["General"],
};

export const SUBJECTS: Record<string, readonly string[]> = {
  Arts: ["History", "Economics", "Political Science", "Sociology", "Kannada"],
  Commerce: ["Accountancy", "Business Studies", "Statistics"],
  Science: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science"],
  Engineering: ["Civil", "Mechanical", "Electrical", "Electronics", "Computer Science"],
  Management: ["Finance", "Marketing", "Human Resources", "Operations"],
  Diploma: ["Civil", "Mechanical", "Electrical", "Electronics", "Computer Science"],
  ITI: ["Fitter", "Electrician", "Welder", "Turner", "Mechanic"],
};

export const LANGUAGES_KNOWN = ["Kannada", "English", "Hindi", "Telugu", "Tamil"] as const;

export const SKILLS = [
  "AWS Academy Cloud Foundation",
  "Computer Hardware and Networking",
  "Computer Programming",
  "AWS Solution Architect Associate",
  "Business Development Guidance",
  "Cisco IT Essentials",
  "AWS Solution Architect Associate with Academy Cloud Foundation",
  "Accounts Executive - Tally ERP 9",
] as const;


export const TRAINING_DURATIONS = ["2 - 4 weeks"] as const;

export const PASSING_YEARS = Array.from({ length: 2026 - 2017 + 1 }, (_, i) => String(2017 + i));

export const LAST_SALARY = ["Less than 10,000", "10,000 to 20,000", "20,000 and 25,000", "25,000 and above"] as const;

export const EXPECTED_SALARY = [
  "7,500 to 10,000",
  "10,000 to 15,000",
  "15,000 to 20,000",
  "20,000 to 25,000",
  "25,000 and above",
] as const;

export const MIGRATION_AREAS = ["Outside District", "Outside State", "Outside Country", "Bangalore"] as const;
