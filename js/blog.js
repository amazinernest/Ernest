/**
 * BLOG DATA
 * Simple data store for blog content to simulate dynamic loading.
 */

const BLOG_POSTS = {
    1: {
        title: 'The Art of Negative Space — Why Less Is Always More',
        category: 'Design',
        date: 'March 18, 2026',
        readTime: '5 min read',
        excerpt: 'Whitespace is one of the most powerful tools in design, yet it\'s consistently misunderstood. Here\'s how mastering negative space can transform your work.',
        content: `
            <p>Negative space, often referred to as whitespace, is the area of a page that is left unmarked. It is the space between graphics, columns, images, text, and other elements. While some might see it as "empty," in design, negative space is a crucial element that provides breathing room and visual hierarchy.</p>
            
            <h3>The Psychology of Space</h3>
            <p>Mastering negative space allows you to control where a user looks first. By surrounding an element with ample space, you signal its importance. This is why high-end brands often use minimalist layouts—they use the "luxury of space" to make their products stand out. It reduces cognitive load, allowing users to focus on the core message without distraction.</p>
            
            <h3>Improving Readability & Scanning</h3>
            <p>Without enough space between lines of text (leading) or between characters (kerning), copy becomes difficult to digest. Proper use of whitespace makes the reading experience effortless, keeping visitors engaged with your content longer. Furthermore, it helps in creating logical groupings of information, which is essential for scannable web content.</p>
            
            <h3>Macro vs. Micro Whitespace</h3>
            <p>Macro whitespace is the large empty space between major layout elements like headers and content sections. Micro whitespace is the small space within elements like font characters or lines of text. Both must work in harmony to create a balanced, premium feel.</p>

            <h3>Conclusion</h3>
            <p>Don't be afraid to leave things empty. Every element on your page should have a purpose, and often, the most purposeful thing you can add is nothing at all. In 2026, where the web is increasingly cluttered, space is the ultimate differentiator.</p>
        `
    },
    2: {
        title: 'How I Build Portfolio Websites That Actually Convert',
        category: 'Development',
        date: 'February 25, 2026',
        readTime: '8 min read',
        excerpt: 'After building dozens of portfolio sites, I\'ve distilled the key elements that turn visitors into clients. Here\'s my step-by-step framework.',
        content: `
            <p>A portfolio shouldn't just be a gallery of pretty images. It should be a sales tool that convinces a potential client or employer that you are the right person for the job. Over my career, I've noticed a pattern: high-converting portfolios share three core traits.</p>
            
            <h3>1. Clarity Over Cleverness</h3>
            <p>Before showing any work, your homepage should state exactly what you do and who you do it for. Within three seconds of landing, a visitor should know your primary skill and your unique value proposition. Avoid vague titles like "Creative Ninja"—instead, use "Product Designer specialized in Fintech."</p>
            
            <h3>2. Case Studies as Narratives</h3>
            <p>Clients don't just want to see the final product; they want to see your process. A good case study follows a story arc: the initial challenge, the research phase, the design/dev iterations, and finally, the successful outcome. Use high-resolution images, code snippets, and even short video walkthroughs to make it real.</p>
            
            <h3>3. Social Proof and Results</h3>
            <p>Showing your work is good, but showing that your work *worked* is better. Include testimonials, metrics (e.g., "Increased conversion by 20%"), and the names of reputable brands you've collaborated with. Don't underestimate the power of a "Featured In" section.</p>

            <h3>4. Frictionless Contact</h3>
            <p>The entire goal of your site is likely to get someone to contact you. Use bold CTAs at the end of every page. If you're a freelancer, make sure your email is clickable and your contact form is short. The less friction, the more leads.</p>
        `
    },
    3: {
        title: 'Typography in 2026: What\'s Working and What Isn\'t',
        category: 'Design',
        date: 'January 12, 2026',
        readTime: '6 min read',
        excerpt: 'Type trends come and go, but the principles of great typographic design are timeless. A look at what\'s resonating in modern web design this year.',
        content: `
            <p>Typography is the foundation of the web. As we move through 2026, we're seeing a shift away from overly geometric sans-serifs toward more characterful, humanistic typefaces that feel warmer and more approachable.</p>
            
            <h3>The Return of the Editorial Serif</h3>
            <p>For a long time, serifs were considered "old school." Now, they are being used to provide warmth and credibility to modern tech brands. Pairing a bold, slightly irregular serif headline with a clean, high-legibility sans-serif body is a winning combination this year. It suggests experience and heritage in an AI-driven age.</p>
            
            <h3>Variable Fonts are Standard</h3>
            <p>We've moved beyond simple Bold/Regular weights. Variable fonts allow us to fine-tune thickness, slant, and even "optical size" in real-time. This isn't just a gimmick; it allows for better performance (fewer files) and more responsive typography that looks perfect on every screen size.</p>
            
            <h3>Kinetic Typography</h3>
            <p>Text is no longer static. Through CSS and JS, we are animating text on scroll, making it feel alive. The key is subtlety—hover effects that reveal more info or headers that shift slightly as you scroll. It turns "reading" into an "experience."</p>

            <h3>Conclusion</h3>
            <p>Typography is how we give a voice to content. In 2026, that voice is becoming more personal, more accessible, and more dynamic than ever before.</p>
        `
    },
    4: {
        title: 'My Journey from Graphic Designer to Full-Stack Developer',
        category: 'Career',
        date: 'December 5, 2025',
        readTime: '10 min read',
        excerpt: 'How I made the transition, what skills transferred across, and what I wish I\'d known before starting — an honest account of career reinvention.',
        content: `
            <p>Transitioning from a purely visual role to a technical one was the most challenging and rewarding experience of my professional life. It required a complete rewire of how I approach problem-solving.</p>
            
            <h3>The Bridge: CSS as Logic</h3>
            <p>For designers, CSS is the logical entry point into coding. It allows you to see the immediate visual impact of your code. Mastering layouts like Flexbox and Grid was my "lightbulb moment"—it proved that design could be codified into strict, mathematical systems.</p>
            
            <h3>The JavaScript Wall</h3>
            <p>Eventually, I had to move beyond styles and into logic. JavaScript felt like a different world. My breakthrough came when I stopped trying to memorize syntax and started focusing on *Data Flow*. Understanding how information moves from an input to a database and back to the UI changed everything.</p>
            
            <h3>Thinking in Components</h3>
            <p>The biggest shift wasn't syntax; it was mental. Designers think in pages; developers think in reusable components. Learning to design *Atomic Systems* in Figma first made my code much cleaner and more modular. Nowadays, I don't "build pages"—I build "systems."</p>

            <h3>Advice for Aspiring Devs</h3>
            <p>Don't be afraid to fail publicly. Build things in the open, even if they're broken. The discipline of finishing a "ugly" working project is 10x more valuable than starting a "perfect" one that never ships.</p>
        `
    },
    5: {
        title: 'CSS That Feels Alive: Micro-Animations Worth Stealing',
        category: 'Development',
        date: 'November 14, 2025',
        readTime: '7 min read',
        excerpt: 'Small, intentional animations can make an interface feel premium without adding visual noise. Here are ten patterns I use in every project.',
        content: `
            <p>Motion design isn't just about "flashy" effects. It's about providing feedback and guiding the user's attention through visual cues. In 2026, the best animations are the ones you barely notice—they just make the site feel *right*.</p>
            
            <h3>The Cubic-Bezier Difference</h3>
            <p>Standard ` + "`" + `ease-in-out` + "`" + ` is boring. If you want your site to feel premium, you need custom easing curves. A curve like ` + "`" + `cubic-bezier(0.87, 0, 0.13, 1)` + "`" + ` gives a sophisticated, luxury feel to transitions. It creates a motion that starts slow, speeds up, and settles gently.</p>
            
            <h3>Scroll-Triggered Reveal Patterns</h3>
            <p>By revealing elements as the user scrolls, you create a sense of discovery and progression. I use a "staggered" reveal where items in a grid fade and slide up one after the other. It keeps the user curious about what's coming next while keeping the performance high by only animating what's in view.</p>
            
            <h3>Hover Feedback Loops</h3>
            <p>Buttons shouldn't just change color. They should respond to the user's intent. A subtle glow, a slight shift in an icon's position, or a magnetic effect (where the button follows the cursor slightly) creates a tactile experience in a digital world.</p>

            <h3>Performance is a Feature</h3>
            <p>Always animate ` + "`" + `transform` + "`" + ` and ` + "`" + `opacity` + "`" + ` rather than ` + "`" + `width` + "`" + ` or ` + "`" + `margin` + "`" + `. This ensures the browser doesn't have to recalculate the layout, keeping your animations buttery smooth at 120fps.</p>
        `
    },
    6: {
        title: 'Why I Switched from Figma to Framer (And Back)',
        category: 'Tools',
        date: 'October 3, 2025',
        readTime: '4 min read',
        excerpt: 'My honest six-month experiment with Framer as my primary design tool — what I loved, what frustrated me, and what I ultimately decided.',
        content: `
            <p>Framer is an incredible tool for high-fidelity prototyping and direct-to-web publishing. However, after six months of using it as my "daily driver," I found myself returning to Figma for my core design work. Here's why.</p>
            
            <h3>Where Framer Excels</h3>
            <p>If you need to ship a landing page *now*, Framer is unbeatable. The way it handles responsive design and layout (Stacks and Grids) is lightyears ahead of static design tools. It essentially forces you to "think in code" while dragging and dropping. For marketing sites, it's a superpower.</p>
            
            <h3>The Friction of Web-First Design</h3>
            <p>Framer's greatest strength is also its weakness. Because it's so close to code, basic design iterations can feel slower than in Figma. In Figma, I can move items around with zero constraints during the "messy" conceptual phase. Framer feels more like "assembling" than "sketching."</p>
            
            <h3>The Current Workflow</h3>
            <p>My current setup involves using Figma for the entire conceptual and design system phase. Once the direction is locked, I move to Framer for the final deployment of marketing sites, or to Next.js for full-scale applications. Both have their place; the key is knowing when to use each.</p>
        `
    },
    7: {
        title: 'The Digital Foundation: Why Every Modern Business Needs a Scalable Website',
        category: 'Business',
        date: 'March 25, 2026',
        readTime: '12 min read',
        excerpt: 'In 2026, a website is no longer a luxury—it\'s a requirement. A deep dive into why you need a site, why WordPress wins, and how to rank on Google.',
        content: `
            <p>The business landscape has changed. In an era where trust is the primary currency, your digital presence is your handshake. If a potential client searches for you and finds nothing—or worse, a slow, outdated site—you've already lost the sale.</p>
            
            <h3>Why Business Owners Need a Website (Beyond Social Media)</h3>
            <p>Many business owners make the mistake of relying solely on Instagram or TikTok. While social media is great for reach, it is "rented land." If the algorithm changes or your account is flagged, your entire business vanishes. A website is your "owned digital real estate." It provides:</p>
            <ul>
                <li><strong>24/7 Global Salesroom:</strong> Your site is working while you sleep, answering questions and booking appointments.</li>
                <li><strong>Credibility & Authority:</strong> A custom domain and a professional site signal that you are a serious, established entity.</li>
                <li><strong>Data Control:</strong> You own the analytics, the customer journey, and the first-party data.</li>
            </ul>
            
            <h3>WordPress: The Ultimate No-Code Design Tool</h3>
            <p>WordPress has evolved. It is no longer just a "blogging platform"; it is the most flexible design engine on the planet. For designers and business owners, it offers the perfect balance of "No-Code" ease and high-code potential.</p>
            <p><strong>The Power of the Ecosystem:</strong> Tools like Elementor, Bricks, and Gutenberg allow you to build pixel-perfect, custom layouts without writing a single line of code. Unlike closed platforms like Squarespace or Wix, WordPress is open-source. This means you have total freedom to move your site, scale your features, and integrate with any API imaginable.</p>
            
            <h3>The Google Search Engine Success Checklist</h3>
            <p>Having a website is only half the battle; people need to find it. Here is my "Essential SEO Checklist" for 2026:</p>
            <ul>
                <li><strong>Mobile-First Everything:</strong> Google indexes the mobile version of your site first. If your mobile view is broken, your ranking will be too.</li>
                <li><strong>Core Web Vitals:</strong> Your site must load fast (under 2 seconds) and be visually stable during loading.</li>
                <li><strong>Secure Protocol (HTTPS):</strong> Without an SSL certificate, browsers will flag your site as "Not Secure," destroying user trust.</li>
                <li><strong>Strategic Keywords:</strong> Use tools to find what your customers are actually searching for and weave those terms naturally into your "H1" headers and "Alt" tags.</li>
                <li><strong>XML Sitemap:</strong> Ensure you have a sitemap submitted to Google Search Console so the "crawlers" know exactly which pages to index.</li>
            </ul>

            <h3>Final Thoughts</h3>
            <p>A website is an investment, not an expense. When built correctly on a platform like WordPress and optimized for search, it becomes your most valuable employee.</p>
        `
    }
};

/**
 * PAGE LOGIC
 */
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId && BLOG_POSTS[postId]) {
        loadBlogPost(BLOG_POSTS[postId]);
    } else if (window.location.pathname.includes('blog-post.html')) {
        // Redirect back to blog index if no valid ID
        window.location.href = 'blog.html';
    }
});

function loadBlogPost(post) {
    // Update basic meta
    document.title = `${post.title} — Ernest Okpako`;

    // Update DOM elements
    const titleEl = document.getElementById('post-title');
    const categoryEl = document.getElementById('post-category');
    const dateEl = document.getElementById('post-date');
    const readTimeEl = document.getElementById('post-read-time');
    const contentEl = document.getElementById('post-content');

    if (titleEl) titleEl.textContent = post.title;
    if (categoryEl) categoryEl.textContent = post.category;
    if (dateEl) dateEl.textContent = post.date;
    if (readTimeEl) readTimeEl.textContent = post.readTime;
    if (contentEl) contentEl.innerHTML = post.content;
}
