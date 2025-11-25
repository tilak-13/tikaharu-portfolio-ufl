const Footer = () => {
  return (
    <footer className="py-8 dark:bg-transparent bg-secondary/50" style={{ backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm dark:text-[hsl(210,20%,85%)] text-muted-foreground">
          © {new Date().getFullYear()} Tikaharu Sharma. Built with passion and React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
