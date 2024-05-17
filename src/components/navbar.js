"use client";

import NavbarLink from "@/components/navbarLink";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-2 px-8 shadow-grey shadow-lg">
      <NavbarLink
        styling="bg-gradient-to-r from-orange-500 to-pink-500 inline-block text-transparent bg-clip-text hover:bg-black"
        linkToPage="/artists"
        iconName="vital_signs"
      />
      <NavbarLink
        styling="bg-gradient-to-r from-orange-500 to-pink-500 inline-block text-transparent bg-clip-text hover:bg-black"
        iconName="mic"
      />
      <NavbarLink
        centerStyling="bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-white w-10 h-10 flex justify-center items-center"
        iconName="wifi_tethering"
      />
      <NavbarLink
        styling="bg-gradient-to-r from-orange-500 to-pink-500 inline-block text-transparent bg-clip-text hover:bg-black"
        iconName="radio_button_partial"
      />
      <NavbarLink
        styling="bg-gradient-to-r from-orange-500 to-pink-500 inline-block text-transparent bg-clip-text hover:bg-black"
        iconName="settings"
      />
    </nav>
  );
}
