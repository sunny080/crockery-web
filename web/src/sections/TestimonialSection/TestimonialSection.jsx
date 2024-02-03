import clsx from "clsx";
import { useMediaPredicate } from "react-media-hook";
import Heading from "../../components/Heading/Heading";
import NextImage from "../../components/NextImage/NextImage";
import Slider from "../../components/Slider/Slider";
import RichText from "../../components/RichText/RichText";

export const TestimonialSection = ({
  otherClasses,
  desktopBackgroundImage,
  mobileBackgroundImage,
  heading,
  reviews,
}) => {
  const testimonialSectionClasses = clsx(
    otherClasses,
    "w-full testimonial_container mt-20 lg:mt-120 scroll-mt-120"
  );
  const isDesktop = useMediaPredicate("(min-width: 1024px)");

  const settings = {
    infinite: true,
    speed: 1000,
    dots: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
    arrows: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <section
      id="testimonial"
      style={{
        backgroundImage: `url(${
          isDesktop
            ? desktopBackgroundImage?.asset?.url
            : mobileBackgroundImage?.asset?.url
        })`,
      }}
      className={testimonialSectionClasses}
      data-testid="testimonial-section"
    >
      <div className="max-w-[720px] mx-auto w-full">
        <Heading
          type="h2"
          otherClasses="h2 text-white text-center font-Roboto-Slab w-fit flex flex-col items-center gap-4 after:block after:w-[50%] after:h-[3px] after:bg-primary_blue_600 mx-auto mb-10"
        >
          {heading}
        </Heading>
        <Slider
          customSettings={settings}
          customClass="testimonial_section_slider"
        >
          {reviews.map(({ name, userImage, reviewRaw, logo }, index) => {
            return (
              <div key={index} className="w-full">
                <div className="w-full flex flex-col items-center lg:px-4">
                  <NextImage
                    {...userImage}
                    otherClasses="max-w-[56px] max-h-[56px] w-14 h-14 rounded-full mb-2"
                  />
                  <p className="text-center text-white font-Gentium-Plus leading-[30px] text-[20px] font-normal mb-10">
                    {name}
                  </p>
                  <RichText
                    richText={reviewRaw}
                    otherClasses="testimonial_rich_text text-center mb-10"
                  />
                  <NextImage
                    {...logo}
                    otherClasses="max-w-[80px] max-h-[30px]"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;

export const TESTIMONIAL_SECTION = `
fragment TestimonialSection on TestimonialSection{
  _type
  identifier
  heading
  desktopBackgroundImage{
    ...CustomImage
  }
  mobileBackgroundImage{
    ...CustomImage
  }
  reviews{
    userImage{
      ...CustomImage
    }
    name
    reviewRaw
    logo{
      ...CustomImage
    }
  }
}`;
