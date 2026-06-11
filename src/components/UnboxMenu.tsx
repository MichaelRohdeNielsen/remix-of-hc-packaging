import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
{ label: "Packaging", href: "#packaging" },
{ label: "Paperpulp", href: "#paperpulp" },
{ label: "Compliance", href: "#compliance" },
{ label: "About Us", href: "#about" },
{ label: "Contact", href: "#contact" }];


const UnboxMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-50 font-body text-xs tracking-[0.3em] uppercase hover:opacity-60 transition-opacity duration-300 mix-blend-difference text-primary-foreground bg-transparent"
        aria-label="Toggle menu">
        
        {isOpen ? "Close ×" : "Unbox"}
      </button>

      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-background/80 backdrop-blur-xl">
          
            <nav className="flex flex-col items-center gap-8">
              {menuItems.map((item, i) =>
            <motion.button
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.23, 1, 0.32, 1]
              }}
              onClick={() => handleClick(item.href)}
              className="font-serif text-4xl md:text-6xl text-foreground hover:opacity-40 transition-opacity duration-300">
              
                  {item.label}
                </motion.button>
            )}
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </>);

};

export default UnboxMenu;