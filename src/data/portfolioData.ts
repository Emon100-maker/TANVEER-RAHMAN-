import {
  EducationItem,
  SkillCategory,
  ExperienceItem,
  ProjectItem,
  ResearchInterest,
  CertificationItem,
  AwardItem,
  ReferenceItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Tanveer Rahman Emon',
  shortName: 'Tanveer',
  tagline: 'Academic Professional | Educator | Agricultural Engineering Under Graduate | Technical & Research Enthusiast',
  headline: 'Bridging Agricultural Engineering, Hydrology & Computational Technologies',
  bio: 'Academic and technical professional with an academic background in Agricultural Engineering & Technology, with specialization in Irrigation & Water Management. Interested in education, agricultural engineering, technical problem solving, research, data analysis, GIS, hydrology and computational applications..',
  careerObjective: 'To build a meaningful professional career where academic knowledge, engineering skills, teaching ability, research interests and technical competencies can be applied to practical challenges while contributing to organizational and societal development.',
  email: 'tanveeremon2234@gmail.com',
  phone: '+88001912170767',
  formattedPhone: '+880 1912-170767',
  location: 'Bangladesh',
  country: 'Bangladesh',
  status: 'Open to Academic, Research & Engineering Opportunities',
  links: {
    github: 'https://github.com/tanveeremon2234',
    linkedin: 'https://linkedin.com/in/tanveer-rahman-emon',
    portfolio: 'https://tanveeremon2234.github.io',
    emailLink: 'mailto:tanveeremon2234@gmail.com',
    phoneLink: 'tel:+88001912170767',
    whatsapp: 'https://wa.me/8801912170767',
  },
  stats: [
    { label: 'Academic Standing', value: 'B.Sc. Undergraduate' },
    { label: 'HSC & SSC GPA', value: '5.00 / 5.00' },
    { label: 'Specialization', value: 'Irrigation & Water Mgt.' },
    { label: 'Experience', value: 'Teaching Online & Offline' },
  ],
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'bsc-bau',
    qualification: 'B.Sc. in Agricultural Engineering & Technology',
    degreeShort: 'B.Sc. Undergraduate',
    institution: 'Bangladesh Agricultural University',
    discipline: 'Irrigation & Water Management',
    result: 'CGPA: N/A',
    year: 'Year: N/A',
    status: 'Undergraduate',
    iconType: 'university',
    highlights: [
      'Specialized in Irrigation & Water Management Engineering and Hydrological systems.',
      'Core coursework in Fluid Mechanics, Hydrology, Soil-Water-Plant Relationship, GIS & Remote Sensing.',
      'Practical engineering analysis, agricultural mechanization, and irrigation scheduling computations.',
      'Engaged in laboratory experimentation, field survey, and technical project designs.',
    ],
  },
  {
    id: 'hsc-cpsc',
    qualification: 'Higher Secondary Certificate (HSC)',
    degreeShort: 'Higher Secondary Certificate (HSC)',
    institution: 'Cantonment Public School & College, Momenshahi',
    discipline: 'Science',
    result: 'GPA: 5.00',
    year: '2019',
    status: 'Completed',
    iconType: 'college',
    highlights: [
      'Achieved perfect GPA 5.00 in National Board Higher Secondary Certificate Examination.',
      'Comprehensive focus in Higher Mathematics, Physics, Chemistry, and Information Technology.',
      'Active participation in science clubs, co-curricular presentations, and leadership activities.',
    ],
  },
  {
    id: 'ssc-pihs',
    qualification: 'Secondary School Certificate (SSC)',
    degreeShort: 'Secondary School Certificate (SSC)',
    institution: 'Premier Ideal High School, Mymensingh',
    discipline: 'Science',
    result: 'GPA: 5.00',
    year: '2017',
    status: 'Completed',
    iconType: 'school',
    highlights: [
      'Achieved perfect GPA 5.00 in the Secondary School Certificate examination.',
      'Foundational excellence in General Science, Higher Mathematics, and Basic Computing.',
      'Demonstrated consistent academic leadership and top institutional ranking.',
    ],
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Technical',
    skills: [
      { name: 'HTML5', tags: ['Web', 'Frontend'], level: 'Proficient', description: 'Semantic structure, accessibility, modern web standards' },
      { name: 'CSS3', tags: ['Web', 'Styling'], level: 'Proficient', description: 'Responsive design, Flexbox, Grid, CSS animations' },
      { name: 'JavaScript', tags: ['Programming', 'Web'], level: 'Skilled', description: 'ES6+, DOM manipulation, asynchronous logic, interactive web' },
      { name: 'Python', tags: ['Programming', 'Data'], level: 'Proficient', description: 'Data processing, scripting, computational modeling, automation' },
      { name: 'Git & GitHub', tags: ['DevOps', 'Version Control'], level: 'Proficient', description: 'Repository management, branching, GitHub Pages, collaboration' },
      { name: 'Data Analysis', tags: ['Analytics', 'Research'], level: 'Proficient', description: 'Statistical analysis, descriptive statistics, data visualization' },
      { name: 'GIS', tags: ['Spatial', 'Engineering'], level: 'Proficient', description: 'Geographic information systems, spatial mapping, watershed analysis' },
      { name: 'MS Office', tags: ['Productivity'], level: 'Expert', description: 'Comprehensive MS Office application mastery' },
      { name: 'MS Excel', tags: ['Analytics', 'Productivity'], level: 'Expert', description: 'Data calculation, spreadsheets, charts, engineering modelling' },
      { name: 'MS Powerpoint', tags: ['Presentation'], level: 'Expert', description: 'Technical presentations, academic slide design' },
      { name: 'MS Acess', tags: ['Database'], level: 'Skilled', description: 'Relational database management, table queries, forms' },
      { name: 'R', tags: ['Data', 'Statistics'], level: 'Intermediate', description: 'Statistical computing, graphics, agricultural research data' },
      { name: 'AutoCAD', tags: ['Engineering', 'Design'], level: 'Skilled', description: '2D technical drafting, engineering schemas, layout design' },
      { name: 'Adobe Photoshop', tags: ['Design', 'Media'], level: 'Skilled', description: 'Photo editing, visual assets creation, poster preparation' },
      { name: 'Adobe Illustrator', tags: ['Design', 'Vector'], level: 'Skilled', description: 'Vector graphics, diagrams, technical illustrations, banners' },
    ],
  },
  {
    category: 'Academic & Professional',
    skills: [
      { name: 'Teaching', tags: ['Education', 'Pedagogy'], level: 'Expert', description: 'Online & offline STEM instruction, interactive curriculum delivery' },
      { name: 'Academic Content Development', tags: ['Curriculum', 'Education'], level: 'Expert', description: 'Lecture slides, notes, structured test papers, problem sets' },
      { name: 'Research', tags: ['Methodology', 'Analysis'], level: 'Proficient', description: 'Literature review, experimental design, data collection, findings' },
      { name: 'Problem Solving', tags: ['Engineering', 'Logic'], level: 'Proficient', description: 'Systematic root-cause analysis, computational troubleshooting' },
      { name: 'Technical Documentation', tags: ['Writing', 'Reports'], level: 'Proficient', description: 'Lab reports, project charters, engineering manuals, papers' },
      { name: 'Presentation', tags: ['Public Speaking'], level: 'Expert', description: 'Award-winning presentation skills, conference & seminar delivery' },
      { name: 'Project Management', tags: ['Leadership', 'Planning'], level: 'Proficient', description: 'Milestone tracking, resource allocation, deadline management' },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Communication', tags: ['Interpersonal'], level: 'Fluent', description: 'Clear articulation of complex engineering & scientific concepts' },
      { name: 'Leadership', tags: ['Organization'], level: 'High', description: 'Guiding student groups, academic team coordination' },
      { name: 'Teamwork', tags: ['Interpersonal'], level: 'High', description: 'Cooperative cross-disciplinary team engagement' },
      { name: 'Time Management', tags: ['Productivity'], level: 'High', description: 'Punctuality, deadline prioritization, multi-tasking' },
      { name: 'Critical Thinking', tags: ['Analytical'], level: 'High', description: 'Objective evaluation of hypotheses, engineering assumptions' },
      { name: 'Adaptability', tags: ['Growth'], level: 'High', description: 'Swiftly mastering modern tools, software and pedagogical methods' },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'teaching-lead',
    title: 'Educator & Academic Instructor',
    organization: 'Teaching in Online, Offline Platform',
    period: '2021 – Present',
    location: 'Bangladesh (Online & Offline)',
    type: 'Teaching & STEM Mentorship',
    responsibilities: [
      'Delivered structured academic lessons in Mathematics, Science, and Technical subjects to high school and college students.',
      'Developed comprehensive study materials, visual lecture presentations, and standardized assessment rubrics.',
      'Utilized digital teaching platforms and interactive simulations to simplify complex concepts.',
      'Mentored numerous students to attain top grades and successful entry into higher STEM disciplines.',
    ],
    technologies: ['Teaching', 'Online & Offline Class Platforms', 'MS PowerPoint', 'Interactive STEM Tools', 'MS Excel'],
  },
];

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    id: 'ag-eng',
    title: 'Agricultural Engineering',
    description: 'Optimization of modern machinery, smart farming equipment, precision agriculture techniques, and post-harvest technology.',
    icon: 'Tractor',
    applications: ['Precision Agriculture', 'Farm Implements', 'Post-Harvest Processing'],
  },
  {
    id: 'ag-mech',
    title: 'Agricultural Mechanization',
    description: 'Design and deployment of mechanized farm implements, tractors, power tillers, and operational efficiency improvements.',
    icon: 'Wrench',
    applications: ['Mechanized Harvesting', 'Field Operations', 'Equipment Sizing'],
  },
  {
    id: 'gis-rs',
    title: 'GIS & Remote Sensing',
    description: 'Spatial analysis of agricultural watersheds, land use classification, satellite NDVI vegetation monitoring, and flood hazard mapping.',
    icon: 'MapPin',
    applications: ['Watershed Delineation', 'Crop Health Monitoring', 'Spatial Soil Mapping'],
  },
  {
    id: 'hydro-water',
    title: 'Hydrology & Water Resources',
    description: 'Irrigation scheduling, surface and groundwater flow modeling, water harvesting, crop water requirement estimation, and drainage systems.',
    icon: 'Droplets',
    applications: ['Drip & Sprinkler Systems', 'Crop Evapotranspiration', 'Aquifer Assessment'],
  },
  {
    id: 'soil-water',
    title: 'Soil & Water Conservation',
    description: 'Erosion mitigation techniques, conservation tillage, soil moisture retention management, and sustainable land stewardship.',
    icon: 'Layers',
    applications: ['Erosion Control', 'Salinity Management', 'Runoff Reduction'],
  },
  {
    id: 'renewable',
    title: 'Renewable Energy',
    description: 'Solar-powered irrigation pumping, biomass energy conversion, and eco-friendly agricultural power systems.',
    icon: 'Sun',
    applications: ['Solar Pumping', 'Biomass Digestion', 'Energy-efficient Systems'],
  },
  {
    id: 'eng-analysis',
    title: 'Engineering Analysis',
    description: 'Applied physical principles, structural mechanics, fluid dynamics, and thermodynamics in agricultural infrastructure.',
    icon: 'Activity',
    applications: ['Stress Analysis', 'Hydraulic Systems', 'Thermal Modeling'],
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    description: 'Statistical modeling, descriptive analytics, data processing with Python/R, and regression forecasting for agricultural datasets.',
    icon: 'BarChart2',
    applications: ['Yield Analytics', 'Weather Correlations', 'Predictive Modeling'],
  },
  {
    id: 'comp-modeling',
    title: 'Programming & Computational Applications',
    description: 'Writing Python scripts, algorithmic solvers, web interfaces, and computational tools for hydrological and agricultural engineering tasks.',
    icon: 'Code2',
    applications: ['Hydrological Modeling', 'Web Applications', 'Automated Workflows'],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-smart-irrigation',
    title: 'Smart Irrigation & Water Management Optimization Model',
    category: 'Academic & Engineering',
    objective: 'Design an efficient irrigation scheduling model to minimize water waste and optimize crop yields.',
    methodology: 'Integrated soil moisture sensors data with climate evapotranspiration metrics using mathematical algorithms.',
    tools: ['Python', 'AutoCAD', 'Hydrological Formulas', 'Excel Solver'],
    keyOutcome: 'Demonstrated up to 28% reduction in water usage while sustaining optimum root-zone moisture.',
    featured: true,
  },
  {
    id: 'proj-gis-watershed',
    title: 'GIS & Remote Sensing Watershed Analysis & Mapping',
    category: 'Academic & Engineering',
    objective: 'Delineate regional watershed boundaries and analyze land use / land cover changes for agricultural flood mitigation.',
    methodology: 'Processed digital elevation models (DEM) and multi-spectral satellite imagery using spatial geoprocessing tools.',
    tools: ['GIS Software', 'Remote Sensing Imagery', 'Data Analysis', 'Cartography'],
    keyOutcome: 'Constructed comprehensive runoff hazard maps and drainage priority classification for local agricultural zones.',
    featured: true,
  },
  {
    id: 'proj-agri-data-tool',
    title: 'Agri-Data Analysis & Computational Visualization Suite',
    category: 'Technical & Programming',
    objective: 'Develop an automated statistical toolkit to process crop trial yields and hydrological metrics.',
    methodology: 'Constructed custom Python scripts and visualization dashboards with interactive filtering.',
    tools: ['Python', 'Pandas', 'Matplotlib', 'HTML5', 'CSS3', 'JavaScript'],
    keyOutcome: 'Automated descriptive reporting and generated publishable scientific graphs with one-click data ingestion.',
    githubUrl: 'https://github.com/tanveeremon2234',
    featured: true,
  },
  {
    id: 'proj-personal-portfolio',
    title: 'Academic & Professional GitHub Portfolio Website',
    category: 'Technical & Programming',
    objective: 'Create a clean, responsive personal portfolio website showcasing academic credentials, skills, and interactive CV.',
    methodology: 'Engineered a modern web interface with responsive layouts, PDF CV generator, and GitHub promo tools.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'GitHub Pages'],
    keyOutcome: 'Provides recruiters, academic institutions, and students an accessible, professional digital resume.',
    githubUrl: 'https://github.com/tanveeremon2234/tanveeremon2234.github.io',
    liveUrl: 'https://tanveeremon2234.github.io',
    featured: true,
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-ag-ext',
    title: 'Agricultural Extension Training Program',
    issuer: 'Department of Agricultural Extension / University Training Program',
    period: 'Certified',
    skills: ['Agricultural Extension', 'Farmer Advisory', 'Field Technology Transfer', 'Modern Irrigation Adoption'],
    description: 'Comprehensive practical training on field-level agricultural technology dissemination, modern farming techniques, and sustainable water management practices.',
  },
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'award-academic',
    title: 'Academic Excellence Achievement',
    organization: 'Educational Institutions / Board Recognition',
    year: '2017 & 2019',
    description: 'Recognized for achieving top academic standing with Perfect GPA 5.00 in both SSC and HSC National Board Examinations in the Science discipline.',
  },
  {
    id: 'award-presentation',
    title: 'Best Presentation Award',
    organization: 'Academic & Seminar Forums',
    year: 'Academic Distinction',
    description: 'Honored with the Best Presentation Award for outstanding clarity, visual communication, and technical depth during academic research presentation sessions.',
  },
];

export const REFERENCES_DATA: ReferenceItem[] = [
  {
    id: 'ref-khalid',
    name: 'Khalid Mahmud',
    designation: 'Professor',
    department: 'Department of Irrigation & Water Management',
    institution: 'Bangladesh Agricultural University',
  },
  {
    id: 'ref-deen',
    name: 'Deen Islam',
    designation: 'Professor',
    department: 'Department of Irrigation & Water Management',
    institution: 'Bangladesh Agricultural University',
  },
];

export const GITHUB_PROMO_TEMPLATES = [
  {
    id: 'github-readme',
    title: 'GitHub Profile README.md',
    badge: 'README',
    description: 'Full markdown code to paste directly into your GitHub special profile repo (tanveeremon2234/tanveeremon2234).',
    content: `# Hi there! 👋 I'm Tanveer Rahman Emon

🎓 **Academic Professional | Educator | Agricultural Engineering Under Graduate | Technical Enthusiast**  
📍 **Bangladesh** | ✉️ [tanveeremon2234@gmail.com](mailto:tanveeremon2234@gmail.com) | 🌐 [Visit My Portfolio Website](https://tanveeremon2234.github.io)

---

### 🌟 About Me
- 🌾 Pursuing **B.Sc. in Agricultural Engineering & Technology** at **Bangladesh Agricultural University (BAU)** with specialization in **Irrigation & Water Management**.
- 🏫 Top academic performer with **GPA 5.00 / 5.00** in both HSC & SSC (Science).
- 👨‍🏫 Experienced **Educator** teaching STEM, Mathematics & Science across online & offline platforms.
- 💻 Passionate about combining **Python, Web Technologies, GIS & Data Analysis** with agricultural and hydrological engineering.

---

### 🛠️ Tech & Engineering Stack
- **Programming & Web:** \`HTML5\`, \`CSS3\`, \`JavaScript\`, \`Python\`, \`R\`
- **Engineering & Spatial:** \`GIS\`, \`AutoCAD\`, \`Hydrological Modeling\`
- **Productivity & DB:** \`MS Office\`, \`MS Excel\`, \`MS PowerPoint\`, \`MS Access\`
- **Design & Media:** \`Adobe Photoshop\`, \`Adobe Illustrator\`
- **Version Control:** \`Git\`, \`GitHub\`

---

### 📌 Academic & Technical Projects
- 🌊 Smart Irrigation & Water Management Optimization Model
- 🗺️ GIS & Remote Sensing Watershed Analysis & Mapping
- 📊 Agri-Data Analysis & Computational Visualization Suite
- 🌐 Personal GitHub Portfolio Website

---

### 👥 References
- **Khalid Mahmud** — Professor, Department of Irrigation & Water Management, Bangladesh Agricultural University
- **Deen Islam** — Professor, Department of Irrigation & Water Management, Bangladesh Agricultural University

---

### 📫 Connect with Me
- 📧 Email: [tanveeremon2234@gmail.com](mailto:tanveeremon2234@gmail.com)
- 📞 Phone: [+880 1912-170767](tel:+88001912170767)
- 💼 LinkedIn: [linkedin.com/in/tanveer-rahman-emon](https://linkedin.com)
- 📄 [View & Download My CV](https://tanveeremon2234.github.io)
`,
  },
  {
    id: 'linkedin-post',
    title: 'LinkedIn & Social Media Promo Caption',
    badge: 'Social Media',
    description: 'Engaging caption to announce the launch of your GitHub personal portfolio website.',
    content: `🚀 Excited to announce the launch of my official GitHub Personal & Academic Portfolio Website! 🌐✨

As an Agricultural Engineering Undergraduate at Bangladesh Agricultural University (specialized in Irrigation & Water Management) and an Educator passionate about STEM, I built this website to present my academic journey, research interests, technical skills, and projects in one central hub.

✨ Explore on my website:
🎓 Educational Qualifications (B.Sc. Undergraduate from BAU, HSC & SSC GPA 5.00)
📊 Technical Skills in Python, HTML5, CSS3, JavaScript, GIS, AutoCAD & Data Analysis
🌾 Research Interests in Hydrology, Water Conservation & Agricultural Mechanization
👨‍🏫 Teaching & Mentorship Experience in online & offline platforms
📄 Downloadable Professional CV & Interactive Resume

🔗 Check out the live website: https://tanveeremon2234.github.io
⭐ GitHub Repo: https://github.com/tanveeremon2234/tanveeremon2234.github.io

I'd love to connect with educators, researchers, engineers, and tech enthusiasts. Feedback is warmly welcomed!

#Portfolio #AgriculturalEngineering #Undergraduate #Hydrology #GIS #Python #WebDevelopment #Education #STEM #BangladeshAgriculturalUniversity #AcademicPortfolio #GitHubPages`,
  },
  {
    id: 'repo-about',
    title: 'GitHub Repo Description & Topics',
    badge: 'Repo Meta',
    description: 'Quick repository description and topic tags for your GitHub Pages repository.',
    content: `📝 Repository Description:
Official personal academic, engineering, and teaching portfolio website of Tanveer Rahman Emon — showcasing education (B.Sc. Undergraduate at BAU, GPA 5.00), skills, research interests in hydrology & GIS, and downloadable CV.

🏷️ Suggested GitHub Topics:
portfolio, personal-website, academic-portfolio, agricultural-engineering, undergraduate, hydrology, gis, python, html5, css3, javascript, educator, bangladesh, github-pages`,
  },
];
