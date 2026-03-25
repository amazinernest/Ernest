// =============================================
// PROJECT SINGLE PAGE — Dynamic Content Loader
// =============================================

const PROJECTS = {
    1: {
        title: 'IJF Foundation',
        tagline: 'A nonprofit website for the Isaac Joseph-Fagbemi Foundation.',
        year: '2025',
        role: 'Web Developer',
        category: 'WordPress · Web Development',
        tech: ['WordPress', 'Elementor', 'CSS', 'PHP'],
        img: 'images/project_ijf.png',
        imgAlt: 'IJF Foundation nonprofit website homepage',
        overview: 'The Isaac Joseph-Fagbemi Foundation is a Nigerian nonprofit organisation working to expand opportunities for young people through education, leadership development, skills training, and community-driven programs. I built their website to give the foundation a credible digital home that communicates their mission and drives partnerships.',
        challenge: 'The foundation was doing meaningful impact work — reaching youth and supporting students — but had no website to show for it. Without an online presence, they struggled to attract partners, funders, and volunteers who could amplify their reach.',
        solution: 'I developed the full website on WordPress, designing a bold, impact-led layout with a standout hero section featuring the headline "Empowering Youth. Strengthening Communities. Creating Lasting Impact." The site includes an animated impact stats section (Youth Reached, Students Supported), a Partners & Collaborators section, and clear CTAs for partnerships and programme discovery — giving the foundation everything they need to tell their story and grow.',
        url: 'https://ijffoundation.org/',
    },
    2: {
        title: 'Moonnik',
        tagline: 'A professional website for a mental wellness & consultancy organisation.',
        year: '2024',
        role: 'Web Developer',
        category: 'WordPress · Web Development',
        tech: ['WordPress', 'Elementor', 'CSS', 'PHP'],
        img: 'images/project_moonnik.png',
        imgAlt: 'Moonnik consultancy website homepage',
        overview: 'Moonnik is a Nigerian consultancy organisation focused on mental wellness, personal growth, and professional development. I built their website to create a trustworthy, professional online presence that communicates their mission and converts visitors into clients.',
        challenge: 'Moonnik needed a website that balanced warmth and professionalism — welcoming enough that people dealing with sensitive mental wellness challenges felt safe reaching out, but polished enough to appeal to organisations seeking consultancy services.',
        solution: 'I developed the full site on WordPress using Elementor, using a deep navy and warm orange palette to convey trust and energy. The hero leads with a strong mission statement — "Empowering Growth, Transforming Lives" — with a prominent "Book Free Consultation" CTA. Below, feature cards highlight their integrated approach, evidence-based practice, and personalised care, building credibility before the user scrolls.',
        url: 'https://moonnik.org/',
    },
    3: {
        title: 'Redemption Schools',
        tagline: 'A full school website for Redemption Storyland Schools, Oyo State.',
        year: '2024',
        role: 'Web Developer',
        category: 'WordPress · Web Development',
        tech: ['WordPress', 'Elementor', 'CSS', 'PHP'],
        img: 'images/project_redemption.png',
        imgAlt: 'Redemption Storyland Schools website homepage',
        overview: 'Redemption Storyland Schools is a private educational institution in Oyo State, Nigeria, offering quality education from Nursery through Secondary level. I built their full website to give the school a modern, credible online presence that reflects their mission of nurturing minds and building character.',
        challenge: 'The school had no website — parents and prospective students had no way to learn about the institution online, see its facilities, or get key information like contact details, enrolment processes, and the school\'s ethos. They needed a professional digital home built quickly and affordably.',
        solution: 'I designed and developed the full site on WordPress using Elementor, crafting each section to reflect the school\'s bold magenta and teal brand identity. Key sections include a dynamic hero with CTAs for enrolment, an animated stats counter (Years of Excellence, Graduates), a school overview, and clear contact information. The result is a fast, mobile-friendly site that now serves as the school\'s primary point of public contact.',
        url: 'https://redemptionschools.com.ng/',
    },
    4: {
        title: 'ReportAm',
        tagline: 'A civic-tech platform empowering citizens to report community issues.',
        year: '2025',
        role: 'UI/UX Designer',
        category: 'Civic Tech · Web App',
        tech: ['Figma', 'React', 'Tailwind CSS', 'Node.js'],
        img: 'images/project_reportam.png',
        imgAlt: 'ReportAm community reporting platform interface',
        overview: 'ReportAm is a community-driven reporting platform that gives citizens a simple, accessible way to flag infrastructure and safety issues in their area — from bad roads and poor electricity to waste management and insecurity. Built for Oyo State, Nigeria, the platform bridges the gap between communities and local government.',
        challenge: 'In many Nigerian communities, residents have no effective channel to report local problems. Issues like potholes, failing drainage, and power outages go unaddressed for months because there\'s no centralised, accountable system for citizens to voice complaints and for authorities to track and respond to them.',
        solution: 'I designed the full UI/UX for ReportAm — a clean, step-by-step reporting flow that makes it effortless for any citizen to categorise and submit an issue in under two minutes. The category grid (Road, Waste, Drainage, Electricity, Water, Security, Health) uses clear iconography so even low-literacy users can navigate confidently. I collaborated closely with a team of developers to bring the design to life, ensuring the interface was responsive, accessible, and built for real-world usage on mobile networks.',
        url: 'https://reportam.vercel.app/report',
    },
    5: {
        title: 'Induc Nigeria Limited',
        tagline: 'A premier platform for industrial chemicals and safety solutions.',
        year: '2025',
        role: 'Web Developer',
        category: 'Industrial Solutions · Web Development',
        tech: ['WordPress', 'Elementor', 'PHP', 'CSS'],
        img: 'images/project_induc.png',
        imgAlt: 'Induc Nigeria Limited website homepage',
        overview: 'Induc Nigeria Limited is a leading industrial solutions provider focused on chemicals, safety infrastructure, and technical services. I built their website to bridge the gap between global industrial standards and local operational needs, providing a robust digital platform for their services.',
        challenge: 'Induc needed a digital presence that effectively communicated their technical expertise and their commitment to safety while showcasing their broad range of industrial chemicals and safety equipment to large-scale organizations.',
        solution: 'I developed a modern, high-performance website using WordPress and Elementor. The design features a professional deep blue palette, clear service categorization, and an optimized "Get a Quote" system that streamlines business inquiries. The interface effectively balances technical product detail with uncompromising safety standards, positioning Induc as a leader in Nigeria\'s industrial landscape.',
        url: 'https://induc.org/',
    },
};

// ---- Load Project Data ----
function loadProject() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const project = PROJECTS[id];

    if (!project) {
        document.getElementById('project-page-title').textContent = 'Project Not Found';
        return;
    }

    // Update page title
    document.title = `${project.title} — Ernest Okpako`;

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = project.tagline;

    // Hero
    document.getElementById('project-page-title').textContent = project.title;
    document.getElementById('project-page-tagline').textContent = project.tagline;

    // Image
    const img = document.getElementById('project-hero-img');
    img.src = project.img;
    img.alt = project.imgAlt;

    // Body text
    document.getElementById('project-overview').textContent = project.overview;
    document.getElementById('project-challenge').textContent = project.challenge;
    document.getElementById('project-solution').textContent = project.solution;

    // Sidebar
    document.getElementById('project-year-meta').textContent = project.year;
    document.getElementById('project-role-meta').textContent = project.role;
    document.getElementById('project-category-meta').textContent = project.category;

    const techContainer = document.getElementById('project-tech-meta');
    project.tech.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'meta-tag';
        tag.textContent = tech;
        techContainer.appendChild(tag);
    });

    const visitBtn = document.getElementById('project-visit-btn');
    visitBtn.href = project.url;

    // Back link hover style
    const backLink = document.getElementById('back-to-work');
    if (backLink) {
        backLink.addEventListener('mouseenter', () => backLink.style.color = 'var(--accent)');
        backLink.addEventListener('mouseleave', () => backLink.style.color = 'var(--text-muted)');
    }
}

document.addEventListener('DOMContentLoaded', loadProject);
