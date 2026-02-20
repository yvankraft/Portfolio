import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import React from "react";
import { Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className=" bg-slate-200 min-h-screen p-4">
      <Navbar />
      <div className="flex p-8 justify-start items-center ">
        <div className="mockup-phone">
          <div className="mockup-phone-camera"></div>
          <div className="mockup-phone-display text-white grid place-content-center">
            <div className="flex  items-center justify-evenly text-2xl cursor-pointer">
              <div className="flex flex-col w-[100%] items-center justify-center">
                <div className="flex">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                  <span className="text-sm">+49 157 57528515</span>
                </div>
                <div className="flex items-center gap-2 group cursor-pointer w-full justify-center mt-4">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  <span
                    onClick={() =>
                      openLink("https://github.com/yvankraft", "_blank")
                    }
                    className="text-sm cursor-pointer hover:text-white transition-colors"
                  >
                    GitHub
                  </span>
                </div>

                {/* Icône LinkedIn */}
                <div className="flex items-center gap-2 group cursor-pointer">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <span
                    onClick={() => openLink("https://www.linkedin.com/feed/")}
                    className="text-sm"
                  >
                    LinkedIn
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
