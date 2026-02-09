// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagramSquare, FaWhatsapp } from 'react-icons/fa';
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
  return (
    <section id="contact" className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#0d1224] via-[#0a0e1f] to-[#0d1224]">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,60,255,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(200,60,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent">
              Vamos Trabalhar
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Juntos?
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
            Entre em contato para discutir seu próximo projeto. Estou sempre aberto a novas oportunidades e desafios.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5598970051778"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1443] to-[#0d1224] border border-violet-500/10 hover:border-violet-500/30 p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/20"
          >
            <div className="relative z-10">
              <div className="inline-flex p-3 md:p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl md:rounded-2xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaWhatsapp className="text-white text-2xl md:text-3xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-sm md:text-base text-gray-400 break-all">{personalData.phone}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/0 via-transparent to-green-600/0 group-hover:from-green-600/5 group-hover:to-green-600/5 transition-all duration-500"></div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${personalData.email}`}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1443] to-[#0d1224] border border-violet-500/10 hover:border-violet-500/30 p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/20"
          >
            <div className="relative z-10">
              <div className="inline-flex p-3 md:p-4 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl md:rounded-2xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <MdAlternateEmail className="text-white text-2xl md:text-3xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-sm md:text-base text-gray-400 break-all">{personalData.email}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 via-transparent to-purple-600/0 group-hover:from-violet-600/5 group-hover:to-purple-600/5 transition-all duration-500"></div>
          </a>

          {/* Location */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1443] to-[#0d1224] border border-violet-500/10 p-6 md:p-8">
            <div className="relative z-10">
              <div className="inline-flex p-3 md:p-4 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl md:rounded-2xl mb-4 md:mb-6">
                <CiLocationOn className="text-white text-2xl md:text-3xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Localização</h3>
              <p className="text-sm md:text-base text-gray-400">{personalData.address}</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-gradient-to-br from-violet-950/30 to-purple-950/30 border border-violet-500/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 backdrop-blur-sm">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Conecte-se Comigo
            </span>
          </h3>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {/* GitHub */}
            <Link
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20"
            >
              <IoLogoGithub className="text-white text-xl md:text-2xl group-hover:scale-110 transition-transform" />
              <span className="text-white font-semibold text-sm md:text-base">GitHub</span>
            </Link>

            {/* LinkedIn */}
            <Link
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20"
            >
              <BiLogoLinkedin className="text-white text-xl md:text-2xl group-hover:scale-110 transition-transform" />
              <span className="text-white font-semibold text-sm md:text-base">LinkedIn</span>
            </Link>

            {/* Instagram */}
            <Link
              href={personalData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20"
            >
              <FaInstagramSquare className="text-white text-xl md:text-2xl group-hover:scale-110 transition-transform" />
              <span className="text-white font-semibold text-sm md:text-base">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;