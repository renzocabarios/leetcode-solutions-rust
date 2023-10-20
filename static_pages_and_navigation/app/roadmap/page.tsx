import { Card, Navbar } from "@/components";
import style from "./style.module.css";
export default function Home() {
  const roads: any[] = [
    {
      title: "Setup and Basic Structure",
      steps: [
        {
          title: "Install Node.js and npm",
          description:
            "Make sure you have Node.js and npm installed on your system.",
        },
        {
          title: "Create a Next.js Project:",
          description:
            "Use the following command to set up a new Next.js project.",
        },
        {
          title: "Project Structure",
          description:
            "Familiarize yourself with the project structure, pages, and components.",
        },
        {
          title: "Install Node.js and npm",
          description: `Create a simple "Hello, World!" page in Next.js to test your setup.`,
        },
      ],
    },
    {
      title: "Static Pages and Navigation",
      steps: [
        {
          title: "Static Pages",
          description:
            "Create static pages for your roadmap project. These could include an about page, contact page, and a home page.",
        },
        {
          title: "Navigation",
          description:
            "Implement navigation between these pages using Next.js's Link component.",
        },
      ],
    },
    {
      title: "Styling",
      steps: [
        {
          title: "CSS Styling",
          description:
            "Style your pages using CSS. You can use traditional CSS, CSS modules, or a CSS-in-JS solution like styled-components or Emotion.",
        },
      ],
    },
    {
      title: "Dynamic Pages",
      steps: [
        {
          title: "Dynamic Routing",
          description:
            "Implement dynamic routing by creating pages that depend on dynamic data or parameters. For example, create blog post pages based on their slugs.",
        },
      ],
    },
    {
      title: "Data Fetching",
      steps: [
        {
          title: "API Routes",
          description:
            "Create API routes to fetch data from external sources. For example, create an API route to fetch and display a list of articles.",
        },
      ],
    },
    {
      title: "Authentication",
      steps: [
        {
          title: "User Authentication",
          description:
            "Implement user authentication. You can use authentication providers like Auth0, Firebase, or create your own authentication system.",
        },
        {
          title: "Authenticated Routes",
          description:
            "Create pages that are only accessible to authenticated users.",
        },
      ],
    },
    {
      title: "State Management",
      steps: [
        {
          title: "State Management",
          description:
            "Implement a state management solution like React Context or Redux to manage global app state.",
        },
      ],
    },
    {
      title: "Database Integration",
      steps: [
        {
          title: "Database Integration",
          description:
            "Connect your project to a database. You can use a database like MongoDB, PostgreSQL, or a serverless solution like Firebase Firestore.",
        },
      ],
    },
    {
      title: "Deployment",
      steps: [
        {
          title: "Deployment",
          description:
            "Deploy your Next.js project. You can use services like Vercel, Netlify, or AWS to host your application.",
        },
      ],
    },
    {
      title: "Testing and Optimization",
      steps: [
        {
          title: "Testing",
          description:
            "Write tests for your components, pages, and API routes.",
        },
        {
          title: "Performance Optimization",
          description:
            "Optimize your application for performance. Use tools like Lighthouse, Webpack Bundle Analyzer, and lazy loading to improve the user experience.",
        },
      ],
    },
    {
      title: "Additional Features",
      steps: [
        {
          title: "Additional Features",
          description:
            "Add more features to your project based on your interests and goals. Examples include user profiles, comments, likes, and real-time features using WebSockets.",
        },
      ],
    },
    {
      title: "Documentation and Refinement",
      steps: [
        {
          title: "Documentation",
          description:
            "Document your project, including installation instructions, usage guidelines, and a README file.",
        },
        {
          title: "Code Refinement",
          description:
            "Review and refactor your code to ensure it's clean, maintainable, and follows best practices.",
        },
      ],
    },
    {
      title: "Launch",
      steps: [
        {
          title: "Launch",
          description:
            "Share your roadmap project with others, whether it's a personal portfolio project or something you'd like to see used by a broader audience.",
        },
      ],
    },
  ];
  return (
    <main>
      <Navbar />
      <div className={style.container}>
        {roads.map((road: any, index: number) => (
          <Card key={road.title}>
            <div className="w-full h-full text-white-50 flex flex-col gap-4">
              <h5>
                Stage {index + 1}:{" "}
                <span className="font-bold">{road.title}</span>
              </h5>

              {road.steps.map((step: any, stepNumber: number) => (
                <p key={step.title}>
                  {stepNumber + 1}. {step.title}: {step.description}
                </p>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
