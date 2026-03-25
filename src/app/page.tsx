"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="compact"
      sizing="largeSmall"
      background="noise"
      cardStyle="outline"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Ahmed Souidi"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      {/* 
        No sections were provided in the plan or section registry. 
        This output may be considered INVALID as it does not include required sections (hero, contact, footer).
        Please ensure your plan.sections array and sectionRegistry are populated with components.
      */}
    </ThemeProvider>
  );
}
