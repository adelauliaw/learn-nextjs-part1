
import Link from "next/link";

import About from "../components/About";
import Posts from "../components/Posts";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="home">

      {/* NAVIGATION */}
      <nav className="navbar">
        <h2>MyWebsite</h2>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Welcome to My Website</h1>
        <p>
          Learn, Explore, and Discover Something New.
        </p>

        <Link href="/blog">
          Explore Blog →
        </Link>
      </section>

      <About/>

      {/* STYLED JSX */}
      <style jsx>{`
        .home {
          font-family: Arial, sans-serif;
          color: #7c2828;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background: #172b4d;
          color: white;
        }

        .nav-links {
          display: flex;
          gap: 25px;
        }

        .nav-links :global(a) {
          color: white;
          text-decoration: none;
        }

        .hero {
          text-align: center;
          padding: 80px 20px;
          background: #f0f4ff;
        }

        .hero h1 {
          font-size: 40px;
        }

        .hero p {
          color: #666;
          margin-bottom: 25px;
        }

        .hero :global(a) {
          background: #2563eb;
          color: white;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
        }

        .content {
          max-width: 1000px;
          margin: 40px auto;
          padding: 25px;
          border: 1px solid #eee;
          border-radius: 10px;
        }

        @media (max-width: 600px) {
          .navbar {
            padding: 15px;
          }

          .nav-links {
            gap: 12px;
          }

          .hero h1 {
            font-size: 28px;
          }
        }
      `}</style>

    </main>
  );
}
