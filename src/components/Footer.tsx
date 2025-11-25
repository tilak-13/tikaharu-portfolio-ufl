const Footer = () => {
  return (
    <footer className="py-8" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm" style={{ color: 'hsl(210, 20%, 85%)' }}>
          © {new Date().getFullYear()} Tikaharu Sharma. Built with passion and React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
