
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "E-mail" }
  ];

  const footerLinks = [
    { name: "Política de Privacidade", href: "#" },
    { name: "Termos de Uso", href: "#" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-michroma font-bold text-primary">
                La Elvis Tech
              </h3>
              <p className="text-muted-foreground max-w-sm">
                Desenvolvemos soluções web modernas que transformam ideias em 
                experiências digitais excepcionais.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h4 className="font-michroma font-semibold text-foreground">
                Links Úteis
              </h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="font-michroma font-semibold text-foreground">
                Redes Sociais
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 bg-muted/50 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} La Elvis Tech. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Feito com ❤️ em São Paulo, Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
