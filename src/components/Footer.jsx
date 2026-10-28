export default function Footer() {
  return (
    <footer style={{ background: "#0B1F3A", color: "white", padding: "30px 0" }}>
      <div className="container">
        <p>© {new Date().getFullYear()} NexaPay. All rights reserved.</p>
      </div>
    </footer>
  );
}