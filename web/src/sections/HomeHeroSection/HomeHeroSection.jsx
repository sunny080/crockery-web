import clsx from "clsx";
import NextImage from "../../components/NextImage/NextImage";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";

export const HomeHeroSection = ({
  otherClasses,
  title,
  heading,
  desktopImage,
  mobileImage,
  button,
  toggleFunc,
}) => {
  const homeHeroSectionClasses = clsx(
    otherClasses,
    "lg:pl-20 xl:pl-120 flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center"
  );

  return (
    <section className={homeHeroSectionClasses} data-testid="home-hero-section">
      <div className="w-full lg:w-[30%] relative z-10 px-4 lg:px-0">
        <Heading type="h6" otherClasses="largeText text-primary_red_600">
          {title}
        </Heading>
        <p className="w-full lg:w-[65%] text-base font-normal font-Roboto leading-6 my-6">
          {heading}
        </p>
        <Button {...button} onClick={() => toggleFunc(button?.form)} />
      </div>
      <div className="lg:ml-[-5%] xl:ml-[-10%] w-full lg:w-[75%] xl:w-[80%]">
        <NextImage {...desktopImage} otherClasses="lg:block hidden w-full" />
        <NextImage {...mobileImage} otherClasses="lg:hidden w-full" />
      </div>
    </section>
  );
};

export default HomeHeroSection;

export const HOME_HERO_SECTION_FRAGMENT = `
fragment HomeHeroSection on HomeHeroSection{
  _type
  identifier
  title
  heading
  desktopImage{
    ...CustomImage
  }
  mobileImage{
    ...CustomImage
  }
  button{
    ...Button
  }
}  
`;
