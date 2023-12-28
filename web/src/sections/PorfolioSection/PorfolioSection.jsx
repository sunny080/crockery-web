import clsx from "clsx";
import Heading from "../../components/Heading/Heading";
import NextImage from "../../components/NextImage";
import { useEffect, useState } from "react";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import Slider from "../../components/Slider/Slider";
import RichText from "../../components/RichText/RichText";
import Button from "../../components/Button";

export const PorfolioSection = ({ otherClasses, heading, gallery }) => {
  const porfolioSectionClasses = clsx(
    otherClasses,
    "max-w-1512 mx-auto w-full px-4 lg:px-20 xl:px-120 my-20 lg:my-120 flex flex-col items-center"
  );

  const [state, setState] = useState({
    findModalData: null,
    modalShow: false,
  });
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const handleButtonClick = (value) => {
    const finddata = gallery.find(({ _key }) => _key === value);
    setState((prev) => ({
      ...prev,
      findModalData: finddata,
      modalShow: true,
    }));
  };

  const modalClose = () => {
    setState((prev) => ({
      ...prev,
      modalShow: false,
      findModalData: null,
    }));
  };

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    asNavFor: nav2,
    slidesToScroll: 1,
  };
  const settings1 = {
    infinite: true,
    asNavFor: nav1,
    speed: 1000,
    slidesToShow: 4,
    focusOnSelect: true,
    slidesToScroll: 1,
  };

  return (
    <section className={porfolioSectionClasses} data-testid="porfolio-section">
      <Heading type="h2" otherClasses="text-primary_blue_600">
        {heading}
      </Heading>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {gallery.map(({ thumbnailImage, brand, _key }) => {
          return (
            <button
              onClick={() => handleButtonClick(_key)}
              className="text-left"
            >
              <NextImage {...thumbnailImage} otherClasses="w-full rounded-lg" />
              <Heading
                type="h4"
                otherClasses="text-primary_blue_600 mt-4 font-normal font-Roboto-Slab"
              >
                {brand}
              </Heading>
            </button>
          );
        })}
      </div>
      <ModalComponent
        otherClasses="lg:min-w-[1024px] max-w-[1024px] mx-auto !bg-transparent"
        show={state.modalShow}
        handleClose={modalClose}
      >
        {state.findModalData && (
          <div className="w-full px-4 py-10 lg:p-10 bg-white flex flex-col lg:flex-row items-center gap-10 xl:gap-16 relative">
            <button
              onClick={() => modalClose()}
              className="absolute right-4 lg:right-6 top-4 lg:top-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M18.6531 6.65731L6.65314 18.6573"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.65314 6.65731L18.6531 18.6573"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div className="w-full lg:w-2/4 flex flex-col gap-4">
              <Slider
                refs={(slider1) => setNav1(slider1)}
                customSettings={settings}
                otherClasses="w-full rounded-xl overflow-hidden"
              >
                {state.findModalData.galleryImages.map((node) => {
                  return (
                    <div className="w-full">
                      <NextImage
                        {...node}
                        otherClasses="max-h-[550px] w-full h-full"
                      />
                    </div>
                  );
                })}
              </Slider>
              <Slider
                customSettings={settings1}
                refs={(slider2) => setNav2(slider2)}
                customClass="gallery-slider"
              >
                {state.findModalData.galleryImages.map((node) => {
                  return (
                    <div className="pr-2">
                      <NextImage {...node} otherClasses="w-full rounded-lg" />
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="w-full lg:w-[40%]">
              <Heading type="h2" otherClasses="text-primary_blue_600">
                {state.findModalData.brand}
              </Heading>
              <RichText
                richText={state.findModalData.subTextRaw}
                otherClasses="global_rich_text_class my-6"
              />
              <Button
                slug={{ current: state.findModalData.pdf?.asset?.url }}
                variant="text-link-dark"
                label="Download Pdf"
                externalLink={true}
              />
            </div>
          </div>
        )}
      </ModalComponent>
    </section>
  );
};

export default PorfolioSection;

export const PORTFOLIO_SECTION_FRAGMENT = `
fragment PortfolioSection on PortfolioSection {
  _type
  identifier
  heading
  gallery {
    _key
    brand
    subTextRaw
    thumbnailImage {
      ...CustomImage
    }
    galleryImages {
      ...CustomImage
    }
    pdf {
      asset {
        url
      }
    }
  }
}
`;
