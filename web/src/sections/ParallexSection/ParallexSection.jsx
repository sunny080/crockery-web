import clsx from "clsx";
import { useMediaPredicate } from "react-media-hook";

export const ParallexSection = ({
  otherClasses,
  desktopImage,
  mobileImage,
}) => {
  const parallexSectionClasses = clsx(otherClasses, "paralax_main_container");

  const isDesktop = useMediaPredicate("(min-width: 1024px)");
  return (
    <section
      style={{
        backgroundImage: `url(${
          isDesktop ? desktopImage?.asset?.url : mobileImage?.asset?.url
        })`,
      }}
      className={parallexSectionClasses}
      data-testid="parallex-section"
    />
  );
};

export default ParallexSection;

export const PARALLEX_SECTION_FRAGMENT = `
fragment ParallexSection on ParallexSection {
  _type
  desktopImage {
    ...CustomImage
  }
  mobileImage {
    ...CustomImage
  }
}

`;
