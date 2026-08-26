import Link from "next/link";
import MegaNav from "@/components/layout/MegaNav";
import SiteFooter from "@/components/layout/SiteFooter";

export default function NotFound() {
  return (
    <>
      <MegaNav />
      <div style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "var(--warm-white2)",
      }}>
        <h1 style={{ fontSize: "4rem", color: "var(--indigo)", marginBottom: "1rem" }}>404</h1>
        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Page Not Found</h2>
        <p style={{ maxWidth: "500px", margin: "0 auto 2rem auto", color: "var(--text)", lineHeight: 1.6 }}>
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track to launch your IT career.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/" className="clean-btn-primary" style={{ textDecoration: "none" }}>
            Return Home
          </Link>
          <Link href="/courses" className="clean-btn-secondary" style={{ textDecoration: "none" }}>
            Explore Courses
          </Link>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}