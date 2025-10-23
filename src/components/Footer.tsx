const Footer = () => {
  return (
    <footer className="border-t py-8 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aakash Verma. Built with passion for data excellence.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          They/Them • Open to Data-Driven Opportunities
        </p>
      </div>
    </footer>
  );
};

export default Footer;
