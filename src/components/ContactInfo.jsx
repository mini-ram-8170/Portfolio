import React from 'react';

const ContactInfo = () => {
  const socialLinks = [
    { 
      href: "https://linkedin.com/in/rishabh-ostwal-39378b243/", 
      icon: "linkedin.svg", 
      label: "LinkedIn",
      color: "hover:shadow-[0_0_20px_rgba(10,102,194,0.7)]"
    },
    { 
      href: "https://instagram.com/jain_rishabh48", 
      icon: "instagram.svg", 
      label: "Instagram",
      color: "hover:shadow-[0_0_20px_rgba(225,48,108,0.7)]"
    },
    { 
      href: "https://twitter.com/jain_rishabh48", 
      icon: "twitter.svg", 
      label: "Twitter",
      color: "hover:shadow-[0_0_20px_rgba(29,161,242,0.7)]"
    },
    { 
      href: "https://github.com/rishabhostwal48", 
      icon: "github.svg", 
      label: "GitHub",
      color: "hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]"
    },
    { 
      href: "mailto:ostwaalrishabh0817@gmail.com", 
      icon: "mail.svg", 
      label: "Email",
      color: "hover:shadow-[0_0_20px_rgba(234,88,12,0.7)]"
    }
  ];

  return (
    <div className="mt-16 text-center">
      <div className="flex flex-col items-center gap-4 mb-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Contact Info
        </h3>
        <a 
          href="mailto:ostwaalrishabh0817@gmail.com"
          className="text-gray-400 hover:text-white transition-colors"
        >
          ostwaalrishabh0817@gmail.com
        </a>
        <p className="text-gray-400">Indore, India</p>
      </div>
      
      <div className="flex justify-center items-center gap-8">
        {socialLinks.map((social) => (
          <a 
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-3 rounded-full bg-white/5 backdrop-blur-sm
              transition-all duration-300 hover:bg-white/10 ${social.color}
              hover:-translate-y-1`}
          >
            <img 
              src={`/${social.icon}`}
              alt={social.label}
              className="w-6 h-6 filter invert transform transition-transform duration-300
                group-hover:scale-110 group-hover:rotate-6"
            />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 
              group-hover:opacity-100 transition-all duration-300 text-sm whitespace-nowrap
              bg-black/80 px-2 py-1 rounded-md">
              {social.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo; 