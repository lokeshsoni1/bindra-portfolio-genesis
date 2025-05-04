
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mode, setMode } = useTheme();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 10);
      
      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      const sectionElements = sections.map((id) => document.getElementById(id));
      
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-2" : "py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary">
          Pankaj<span className="text-foreground">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`nav-link ${
                    activeSection === item.href.substring(1) ? "active" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {mode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <ThemeSwitcher />
          </div>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle dark mode"
          >
            {mode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-background/95 z-50 transition-transform duration-300 transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden backdrop-blur-sm`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <a href="#home" className="text-2xl font-bold text-primary" onClick={closeMobileMenu}>
                Pankaj<span className="text-foreground">.</span>
              </a>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1">
              <ul className="space-y-6 text-lg">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`block transition-colors hover:text-primary ${
                        activeSection === item.href.substring(1)
                          ? "text-primary font-medium"
                          : ""
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="pt-6 pb-8">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
