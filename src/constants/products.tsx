import sidefolioFlyr from "public/images/flyrhospitality_logo.jpeg";
import sidefolioSignals from "public/images/signals-logo.jpeg";
import sidefolioPeak from "public/images/peak-logo.jpeg";
import sidefolioImpala from "public/images/impala-logo.jpeg";
import sidefolioFreelance from "public/images/freelance-logo.jpg";

export const products = [
  {
    href: "https://flyr.com",
    title: "FLYR Hospitality",
    description:
      "AI-powered revenue management system for hospitality businesses.",
    thumbnail: sidefolioFlyr,
    images: [sidefolioFlyr],
    stack: ["React", "GraphQL", "Node.js", "Python", "PostgreSQL", "GCP"],
    slug: "flyr-hospitality",
    content: (
      <div>
        <p>
          FLYR Hospitality is an AI-powered revenue management platform for the
          hospitality industry. It leverages modern deep learning algorithms to
          optimize pricing, forecasting, and revenue management for hotels. The
          platform also offers industry-leading data visualization and reporting
          features.
        </p>
        <p>
          My role involves end-to-end development of complex features, spanning:
          <ul>
            <li>Frontend: React</li>
            <li>GraphQL layer: Node.js, TypeScript, Apollo</li>
            <li>Backend services: Python, PostgreSQL</li>
            <li>Google Cloud Platform</li>
          </ul>
          I&apos;ve led development on key features, collaborating with
          developers, data scientists, and product managers to integrate deep
          learning algorithms and create intuitive user interfaces.
        </p>
      </div>
    ),
  },
  {
    href: "https://signalsicp.com",
    title: "Signals",
    description:
      "Location-based chat app built on the Internet Computer blockchain",
    thumbnail: sidefolioSignals,
    images: [sidefolioSignals],
    stack: ["React", "Rust", "ICP", "Web3", "Blockchain"],
    slug: "signals",
    content: (
      <div>
        <p>
          Signals is a location-based chat app built on the Internet Computer blockchain.
          It enables users to make connections, organize communities, and discover events.
        </p>
        <p>
          My role involved:
          <ul>
            <li>Re-building the frontend app prototype, a map-based React application</li>
            <li>Contributing to the backend services built in Rust, tackling architectural challenges unique to blockchain technology</li>
            <li>Helping improve system performance and ensure scalability for handling location-based data</li>
          </ul>
          I utilized modern tools such as React and TailwindCSS for the frontend, and integrated open-source mapping libraries like Leaflet.js to implement the map functionality.
        </p>
      </div>
    ),
  },
  {
    href: "https://impala.travel",
    title: "Impala",
    description: "Transforming travel infrastructure with modern technology.",
    thumbnail: sidefolioImpala,
    images: [sidefolioImpala],
    stack: ["Next.js", "Node.js", "TypeScript", "Nest.js", "PostgreSQL"],
    slug: "impala",
    content: (
      <div>
        <p>
          Impala is a travel technology company modernizing the travel industry. 
          Their platform provides a unified API for hotel bookings, enabling travel 
          companies to access and distribute hotel inventory more efficiently.
        </p>
        <p>
          My role involved:
          <ul>
            <li>Developing internal tools using Next.js for the frontend and Node.js with PostgreSQL for the backend</li>
            <li>Contributing to the payments and bookings team, integrating and managing payment infrastructure with Stripe</li>
            <li>Building and maintaining RESTful APIs using Nest.js and TypeScript</li>
            <li>Mentoring junior engineers and participating in code reviews</li>
          </ul>
          I worked on improving the developer experience and streamlining the booking process, 
          which helped increase the efficiency of the platform and reduce integration time for partners.
        </p>
      </div>
    ),
  },
  {
    href: "https://peak.ai",
    title: "Peak AI",
    description: "AI-powered decision making for business.",
    thumbnail: sidefolioPeak,
    images: [sidefolioPeak],
    stack: [
      "React",
      "AWS",
      "Auth0",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "GraphQL",
    ],
    slug: "peak-ai",
    content: (
      <div>
        <p>
          Peak is an AI-driven SaaS startup leading the field in data analytics as a service. 
          Their platform helps businesses make better decisions by leveraging artificial intelligence 
          and machine learning technologies.
        </p>
        <p>
          My contributions included:
          <ul>
            <li>Developing and maintaining the frontend application using React and TypeScript</li>
            <li>Implementing GraphQL APIs with Node.js and integrating them with the frontend</li>
            <li>Working with AWS services to ensure scalability and reliability of the platform</li>
            <li>Implementing user authentication and authorization using Auth0</li>
            <li>Collaborating with data scientists to integrate ML models into the application</li>
          </ul>
          I played a key role in improving the user interface and experience of the platform, 
          making complex AI-driven insights more accessible to business users.
        </p>
      </div>
    ),
  },
  {
    href: "https://lukemurray.dev",
    title: "Freelance Projects",
    description: "Building full-stack applications for various clients.",
    thumbnail: sidefolioFreelance,
    images: [sidefolioFreelance],
    stack: ["Supabase", "Next.js", "Vercel", "Auth0", "React Native"],
    slug: "freelance",
    content: (
      <div>
        <p>
          As a freelance developer, I&apos;ve worked on a variety of projects for different clients, 
          building full-stack applications that solve unique business problems.
        </p>
        <p>
          Some of my notable projects include:
          <ul>
            <li>A local food and drink marketplace, connecting consumers with local producers</li>
            <li>A React Native mobile recipe app, allowing users to save and share recipes</li>
            <li>An e-commerce platform for a boutique clothing brand</li>
          </ul>
          These projects allowed me to:
          <ul>
            <li>Utilize modern tools and technologies such as Supabase, Next.js, and Vercel</li>
            <li>Implement secure authentication and authorization using Auth0</li>
            <li>Design and develop responsive, user-friendly interfaces</li>
            <li>Create efficient backend services and APIs</li>
            <li>Manage the entire development lifecycle, from initial concept to deployment and maintenance</li>
          </ul>
          Through these freelance projects, I&apos;ve honed my skills in project
          management, client communication, and delivering high-quality software
          solutions that meet specific business needs.
        </p>
      </div>
    ),
  },
];
