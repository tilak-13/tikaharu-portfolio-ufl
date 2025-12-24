const Footer = () => {
  return (
    <footer className="py-8 bg-transparent backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-[hsl(210,20%,85%)]">© {new Date().getFullYear()} Tikaharu Sharma.</p>
      </div>
    </footer>
  );
};

export default Footer;
