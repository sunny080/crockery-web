import React from "react";
import HomeHeroSection from "../../sections/HomeHeroSection/HomeHeroSection";
import GenericTwoColumn from "../GenericTwoColumn/GenericTwoColumn";
import ParallexSection from "../../sections/ParallexSection/ParallexSection";
import PorfolioSection from "../../sections/PorfolioSection/PorfolioSection";

const EntryRenderer = ({ pageBuilder, toggleFunc, BlogFeatured, BlogHub }) => {
  return pageBuilder.map(({ _type, ...sectionData }, index) => {
    switch (_type) {
      case "homeHeroSection":
        return (
          <HomeHeroSection
            key={index}
            {...sectionData}
            toggleFunc={toggleFunc}
          />
        );
      case "twoColumnGeneric":
        return (
          <GenericTwoColumn
            key={index}
            {...sectionData}
            toggleFunc={toggleFunc}
          />
        );
      case "parallexSection":
        return (
          <ParallexSection
            key={index}
            {...sectionData}
            toggleFunc={toggleFunc}
          />
        );
      case "portfolioSection":
        return (
          <PorfolioSection
            key={index}
            {...sectionData}
            toggleFunc={toggleFunc}
          />
        );

      default:
        return null;
    }
  });
};

export default EntryRenderer;
