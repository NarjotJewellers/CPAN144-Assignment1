import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="card">
          <h1>Student Dashboard</h1>

          <p>
            Welcome to CPAN144 Assignment 1.
          </p>

          <p>
            This application demonstrates:
          </p>

          <ul>
            <li>React Components</li>
            <li>Props</li>
            <li>State Management</li>
            <li>Event Handling</li>
            <li>Conditional Rendering</li>
          </ul>

          <ThemeToggle />
        </div>
      </div>
    </>
  );
}