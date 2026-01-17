import { FloatingDockClient } from "./FloatingDockClient";

export function FloatingDock() {
  const navItems = [
    { title: "Home", href: "#home", icon: "IconHome" },
    { title: "About", href: "#about", icon: "IconUser" },
    { title: "Projects", href: "#projects", icon: "IconFolder" },
    { title: "Journal", href: "#blog", icon: "IconNotebook" },
    { title: "Contact", href: "#contact", icon: "IconMail" },
  ];

  return <FloatingDockClient navItems={navItems} />;
}
