// Updated mock data with 10 JOBS + 10 internships (20 total listings)
const jobsData = [
  // 10 JOBS
  {
    id: 1,
    type: "job",
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Bengaluru, India",
    salary: "₹8–12 LPA",
    experience: "1-3 years",
    jobType: "Full-Time",
    category: "Web Development"
  },
  {
    id: 12,
    type: "job",
    title: "Full Stack Developer (MERN)",
    company: "HireQuotient",
    location: "Remote",
    salary: "₹12–18 LPA",
    experience: "2-4 years",
    jobType: "Remote",
    category: "Web Development"
  },
  {
    id: 13,
    type: "job",
    title: "Data Scientist",
    company: "Fractal Analytics",
    location: "Hyderabad, India",
    salary: "₹15–22 LPA",
    experience: "2-5 years",
    jobType: "Full-Time",
    category: "Data Science"
  },
  {
    id: 14,
    type: "job",
    title: "HR Business Partner",
    company: "ValueLabs",
    location: "Hyderabad, India",
    salary: "₹10–15 LPA",
    experience: "3-5 years",
    jobType: "Hybrid",
    category: "Human Resources"
  },
  {
    id: 15,
    type: "job",
    title: "Backend Developer (Node.js)",
    company: "TCS Digital",
    location: "Bengaluru, India",
    salary: "₹9–14 LPA",
    experience: "1-3 years",
    jobType: "Full-Time",
    category: "Web Development"
  },
  // 5 NEW JOBS
  {
    id: 16,
    type: "job",
    title: "DevOps Engineer",
    company: "Infosys",
    location: "Pune, India",
    salary: "₹14–20 LPA",
    experience: "3-6 years",
    jobType: "Full-Time",
    category: "DevOps"
  },
  {
    id: 17,
    type: "job",
    title: "Mobile App Developer (React Native)",
    company: "Zoho Corporation",
    location: "Chennai, India",
    salary: "₹11–16 LPA",
    experience: "2-4 years",
    jobType: "Full-Time",
    category: "Mobile Development"
  },
  {
    id: 18,
    type: "job",
    title: "Product Manager",
    company: "Flipkart",
    location: "Bengaluru, India",
    salary: "₹20–30 LPA",
    experience: "4-7 years",
    jobType: "Full-Time",
    category: "Product Management"
  },
  {
    id: 19,
    type: "job",
    title: "Cloud Engineer (AWS)",
    company: "Accenture",
    location: "Remote",
    salary: "₹13–19 LPA",
    experience: "2-5 years",
    jobType: "Remote",
    category: "Cloud Computing"
  },
  {
    id: 20,
    type: "job",
    title: "QA Automation Engineer",
    company: "Wipro",
    location: "Noida, India",
    salary: "₹7–11 LPA",
    experience: "1-3 years",
    jobType: "Full-Time",
    category: "Quality Assurance"
  },

  // 10 INTERNSHIPS (unchanged - keeping them here for completeness)
  {
    id: 2,
    type: "internship",
    title: "MERN Stack Developer Intern",
    company: "Codetech IT Solutions",
    location: "Remote",
    stipend: "₹15,000 - ₹25,000 / month",
    duration: "3-6 Months",
    mode: "Remote",
    category: "Web Development"
  },
  {
    id: 3,
    type: "internship",
    title: "Data Science Intern",
    company: "Corporate Web Solutions",
    location: "Remote",
    stipend: "₹7,500 - ₹15,000 / month",
    duration: "1-6 Months",
    mode: "Remote",
    category: "Data Science"
  },
  {
    id: 4,
    type: "internship",
    title: "React.js Web Development Intern",
    company: "Optimspace",
    location: "Remote",
    stipend: "₹10,000 - ₹18,000 / month",
    duration: "3 Months",
    mode: "Remote",
    category: "Web Development"
  },
  {
    id: 5,
    type: "internship",
    title: "Full Stack Web Developer Intern",
    company: "LetsIntern",
    location: "Remote",
    stipend: "₹18,000 - ₹22,000 / month",
    duration: "6 Months",
    mode: "Remote",
    category: "Web Development"
  },
  {
    id: 6,
    type: "internship",
    title: "HR Recruiter Intern",
    company: "ValueMomentum",
    location: "Hyderabad, India",
    stipend: "₹8,000 - ₹12,000 / month",
    duration: "3-6 Months",
    mode: "Hybrid",
    category: "Human Resources"
  },
  {
    id: 7,
    type: "internship",
    title: "Python Data Analytics Intern",
    company: "TRC Companies",
    location: "Remote",
    stipend: "₹12,000 / month",
    duration: "6 Months",
    mode: "Remote",
    category: "Data Science"
  },
  {
    id: 8,
    type: "internship",
    title: "Frontend Developer Intern",
    company: "TCS Digital",
    location: "Bengaluru, India",
    stipend: "₹20,000 / month",
    duration: "6-8 Weeks",
    mode: "Onsite",
    category: "Web Development"
  },
  {
    id: 9,
    type: "internship",
    title: "Talent Acquisition Intern",
    company: "Infosys Winternship",
    location: "Hyderabad, India",
    stipend: "₹15,000 / month",
    duration: "76 Days",
    mode: "Onsite",
    category: "Human Resources"
  },
  {
    id: 10,
    type: "internship",
    title: "Machine Learning Intern",
    company: "Qualcomm India",
    location: "Bengaluru, India",
    stipend: "₹25,000 / month",
    duration: "6 Months",
    mode: "Hybrid",
    category: "Data Science"
  },
  {
    id: 11,
    type: "internship",
    title: "UI/UX Design Intern",
    company: "Clinchcloud Solutions",
    location: "Remote",
    stipend: "₹10,000 / month",
    duration: "3 Months",
    mode: "Remote",
    category: "Design"
  }
];

const companiesData = [
  { name: "TechNova", industry: "Software", jobs: 12 },
  { name: "DataSphere", industry: "Analytics", jobs: 5 },
  { name: "HireHub", industry: "HR Tech", jobs: 8 },
  { name: "Codetech IT", industry: "Web Dev", jobs: 15 },
  { name: "TCS Digital", industry: "IT Services", jobs: 25 },
  { name: "Fractal Analytics", industry: "Data Science", jobs: 18 },
  { name: "ValueLabs", industry: "IT Services", jobs: 10 },
  { name: "Infosys", industry: "IT Services", jobs: 35 },
  { name: "Zoho", industry: "SaaS", jobs: 22 },
  { name: "Flipkart", industry: "E-commerce", jobs: 28 }
];

// Updated skills for new categories
function loadDetailsFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id") || "1", 10);
  const item = jobsData.find(j => j.id === id) || jobsData[0];

  const titleEl = document.getElementById("details-title");
  const companyEl = document.getElementById("details-company");
  const metaEl = document.getElementById("details-meta");
  const skillsList = document.getElementById("skills-list");
  const requirementsList = document.getElementById("requirements-list");

  if (!titleEl) return;

  titleEl.textContent = item.title;
  companyEl.textContent = item.company;

  metaEl.innerHTML = `
    <span>${item.location}</span>
    <span>Type: ${item.jobType || item.mode}</span>
    <span>${item.salary || item.stipend}</span>
    ${item.experience ? `<span>Experience: ${item.experience}</span>` : `<span>Duration: ${item.duration}</span>`}
    <span>Category: ${item.category}</span>
  `;

  // Dynamic skills based on category
  const skillsByCategory = {
    "Web Development": ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    "Data Science": ["Python", "Pandas", "SQL", "Machine Learning", "Tableau", "Power BI"],
    "Human Resources": ["Recruitment", "ATS", "Communication", "Excel", "LinkedIn", "People Analytics"],
    "DevOps": ["Docker", "Kubernetes", "Jenkins", "AWS", "CI/CD", "Terraform"],
    "Mobile Development": ["React Native", "Flutter", "Java/Kotlin", "Swift", "Firebase", "REST APIs"],
    "Product Management": ["Agile", "Jira", "User Research", "Analytics", "Roadmapping", "Stakeholder Mgmt"],
    "Cloud Computing": ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes"],
    "Quality Assurance": ["Selenium", "Cypress", "Postman", "Jira", "TestNG", "Automation Frameworks"]
  };

  const skills = skillsByCategory[item.category] || ["JavaScript", "Git", "Teamwork"];
  
  skillsList.innerHTML = skills.map(skill => `<span class="chip">${skill}</span>`).join('');

  requirementsList.innerHTML = `
    <li>${item.experience ? `Minimum ${item.experience} experience required.` : `Available for ${item.duration} commitment.`}</li>
    <li>Strong foundation in ${item.category.toLowerCase()} fundamentals.</li>
    <li>Hands-on project experience with real-world applications.</li>
    <li>Excellent problem-solving, communication, and teamwork skills.</li>
  `;
}

// Rest of the functions remain exactly the same...
function filterListings(pageType) {
  const listEl = document.getElementById("listings");
  if (!listEl) return;

  let filtered = jobsData.filter(j => 
    pageType === "jobs" ? j.type === "job" : j.type === "internship"
  );

  // Apply basic filters if any are set (demo)
  const categoryFilter = document.querySelector('select')?.value || '';
  if (categoryFilter && categoryFilter !== "Any" && categoryFilter !== "") {
    filtered = filtered.filter(j => j.category === categoryFilter);
  }

  listEl.innerHTML = "";
  filtered.slice(0, 12).forEach(item => {  // Show max 12
    const card = document.createElement("div");
    card.className = "card";
    const compensation = item.salary || item.stipend || "Not disclosed";

    card.innerHTML = `
      <div class="job-card-header">
        <div>
          <h3 style="font-size:1rem;margin-bottom:8px">${item.title}</h3>
          <div class="company-chip">
            <div class="company-logo">${item.company.charAt(0)}</div>
            <div>
              <div style="font-size:0.9rem;font-weight:500">${item.company}</div>
              <div style="font-size:0.8rem;color:#6b7280">${item.location}</div>
            </div>
          </div>
        </div>
        <span class="badge">${pageType === "jobs" ? "Full-Time" : "Internship"}</span>
      </div>
      <div class="job-meta">
        <span style="font-weight:600;color:#059669">${compensation}</span>
        <span>${item.experience || item.duration}</span>
        <span>${item.jobType || item.mode}</span>
      </div>
      <div class="job-actions" style="margin-top:12px">
        <button class="btn-primary" onclick="goToDetails(${item.id})" style="flex:1">Apply Now</button>
        <a href="details.html?id=${item.id}" style="font-size:0.8rem;color:#2563eb;text-decoration:none;padding:4px 8px">Details →</a>
      </div>
    `;
    listEl.appendChild(card);
  });
}

function goToDetails(id) {
  window.location.href = `details.html?id=${id}`;
}

function handleFakeSubmit(e) {
  e.preventDefault();
  const formType = e.target.closest('form')?.dataset?.demo || 'form';
  if (formType.includes('login')) {
    alert('Logged in successfully! (Demo)');
  } else {
    alert('Registration successful! Check your email to verify. (Demo)');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  if (page === "internships") {
    filterListings("internships");
  }
  if (page === "jobs") {
    filterListings("jobs");
  }
  if (page === "details") {
    loadDetailsFromQuery();
  }

  const forms = document.querySelectorAll("form[data-demo]");
  forms.forEach(f => f.addEventListener("submit", handleFakeSubmit));

  if (page === "companies") {
    const wrap = document.getElementById("company-list");
    if (wrap) {
      companiesData.forEach(c => {
        const card = document.createElement("div");
        card.className = "card company-card";
        card.innerHTML = `
          <div class="company-logo">${c.name.charAt(0)}</div>
          <div style="flex:1">
            <div style="font-weight:600">${c.name}</div>
            <div style="font-size:0.85rem;color:#6b7280">${c.industry}</div>
            <div style="font-size:0.8rem;color:#4b5563">Jobs posted: ${c.jobs}</div>
          </div>
          <button class="btn-primary" style="padding:6px 14px;font-size:0.8rem">Follow</button>
        `;
        wrap.appendChild(card);
      });
    }
  }

  const filterBtns = document.querySelectorAll('.sidebar button');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const page = document.body.dataset.page;
      if (page === 'internships' || page === 'jobs') {
        filterListings(page);
        alert('Filters applied! (Demo)');
      }
    });
  });
});
