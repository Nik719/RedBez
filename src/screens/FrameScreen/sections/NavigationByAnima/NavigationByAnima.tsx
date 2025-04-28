import { ChevronDownIcon, GlobeIcon, SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const NavigationByAnima = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation menu items with links
  const navItems = [
    { label: "Ride", hasDropdown: false, link: "/ride" },
    { label: "Drive", hasDropdown: false, link: "/drive" },
    { label: "Team", hasDropdown: false, link: "/team" },
    { label: "About", hasDropdown: true, link: "/about" },
  ];

  // Right side menu items with links
  const rightMenuItems = [
    { label: "EN", icon: <img className="w-4 h-4" alt="RedBez" src="/rodbez.png" />, link: "#" },
    { label: "Help", icon: null, link: "/help" },
    { label: "Sign up", icon: null, link: "/signup" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 flex w-full items-start justify-center px-4 py-3 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 shadow-lg' : 'bg-wwwolacabscomblack'
      }`}
    >
      <div className="relative flex-1 max-w-[1408px] h-10 flex justify-between items-center">
        {/* Logo */}
        <div className="flex h-10 items-center">
          <a href="/" className="flex items-center">
            <span className="text-3xl">
              <span className="text-white">Red</span>
              <span className="text-[#fce003]">B</span>
              <span className="text-white">ez</span>
            </span>
          </a>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-1 ml-10">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="inline-flex items-center justify-center px-3 py-2.5 bg-black rounded-[30px] hover:bg-black/80 transition-colors duration-200"
              asChild
            >
              <a href={item.link}>
                <span className="relative w-fit mt-[-1.00px] [font-family:'Uber_Move_Text-Medium',Helvetica] font-medium text-wwwolacabscomwhite text-sm text-center tracking-[0] leading-4 whitespace-nowrap">
                  {item.label}
                </span>
                {item.hasDropdown && (
                  <ChevronDownIcon className="w-[18px] h-[18px] text-white ml-2" />
                )}
              </a>
            </Button>
          ))}
        </div>

        {/* Right Side Menu */}
        <div className="flex items-center gap-1">
          {/* Search Input */}
          <div className="inline-flex items-center rounded-[25px] overflow-hidden border-2 border-solid border-[#f3f3f3] bg-wwwolacabscomwhite">
            <div className="inline-flex items-center justify-center px-2.5 py-0 bg-wwwolacabscomwhite">
              <SearchIcon className="w-[18px] h-[18px] text-gray-500" />
            </div>
            <Input
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 [font-family:'Uber_Move_Text-Regular',Helvetica] font-normal text-wwwubercomscorpion text-sm"
              placeholder="Search Redbez.in"
            />
          </div>

          {/* Right Menu Buttons */}
          {rightMenuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-black rounded-[30px] hover:bg-black/80 transition-colors duration-200"
              asChild
            >
              <a href={item.link}>
                {item.icon}
                <span className="relative w-fit mt-[-1.00px] [font-family:'Uber_Move_Text-Medium',Helvetica] font-medium text-wwwolacabscomwhite text-sm text-center tracking-[0] leading-4 whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            </Button>
          ))}

          {/* Login Button */}
          <Button
            variant="default"
            className="inline-flex items-center justify-center px-3 py-2.5 bg-white rounded-[30px] hover:bg-white/90 transition-colors duration-200"
            asChild
          >
            <a href="/login">
              <span className="relative w-fit mt-[-1.00px] [font-family:'Uber_Move_Text-Medium',Helvetica] font-medium text-wwwolacabscomblack text-sm text-center tracking-[0] leading-4 whitespace-nowrap">
                Log in
              </span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};