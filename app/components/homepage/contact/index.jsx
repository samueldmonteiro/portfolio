// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaInstagramSquare, FaStackOverflow } from 'react-icons/fa';
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
  const contactItems = [
    {
      icon: MdAlternateEmail,
      href: `mailto:${personalData.email}`,
      label: personalData.email,
      type: 'email'
    },
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/55898970051778',
      label: personalData.phone,
      type: 'whatsapp'
    },
    {
      icon: CiLocationOn,
      href: null,
      label: personalData.address,
      type: 'location'
    }
  ];

  // Dados das redes sociais
  const socialLinks = [
    {
      icon: IoLogoGithub,
      href: personalData.github,
      label: 'GitHub'
    },
    {
      icon: BiLogoLinkedin,
      href: personalData.linkedIn,
      label: 'LinkedIn'
    },
    {
      icon: FaInstagramSquare,
      href: personalData.instagram,
      label: 'Instagram'
    }
  ];

  return (
    <section id="contact" className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-[#1a1443] to-gray-900">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Indicador lateral para desktop */}
      <div className="hidden lg:flex flex-col items-center absolute top-1/2 -translate-y-1/2 -right-8 z-10">
        <span className="bg-gradient-to-r from-purple-600 to-cyan-500 w-fit text-white rotate-90 p-3 px-6 text-lg font-semibold rounded-full shadow-lg">
          CONTATO
        </span>
        <span className="h-32 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 mt-4 rounded-full"></span>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            Entre em contato através dos canais abaixo. Estou sempre disponível para novos projetos e oportunidades.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Informações de Contato */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
                <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-cyan-500 rounded-full"></div>
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  {contactItems.map((item, index) => {
                    const IconComponent = item.icon;
                    const isLink = item.href !== null;
                    
                    const content = (
                      <div 
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group ${
                          isLink 
                            ? 'hover:bg-white/5 cursor-pointer hover:scale-105' 
                            : 'bg-white/5'
                        }`}
                      >
                        <div className="relative">
                          <IconComponent 
                            className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300"
                            size={44}
                          />
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-400 text-sm font-medium capitalize">
                            {item.type}
                          </p>
                          <p className="text-white font-semibold text-lg truncate">
                            {item.label}
                          </p>
                        </div>
                      </div>
                    );

                    return isLink ? (
                      <a 
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block no-underline"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={index}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-purple-500 rounded-full"></div>
                  Redes Sociais
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                          <div className="relative mb-3">
                            <IconComponent 
                              className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 text-white shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                              size={40}
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                          </div>
                          <span className="text-white font-medium text-sm text-center">
                            {social.label}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;