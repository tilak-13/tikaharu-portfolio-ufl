const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Tikaharu Sharma. Built with passion and React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
