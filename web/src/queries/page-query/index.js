import { gql } from "@apollo/client";
import { NEXT_IMAGE_FRAGMENT } from "../../components/NextImage/NextImage";
import { PAGE_FRAGMENT } from "../page-fragment";
import { BUTTON_FRAGMENT } from "../../components/Button/Button";
import { HOME_HERO_SECTION_FRAGMENT } from "../../sections/HomeHeroSection/HomeHeroSection";
import { GENERIC_TWO_COLUMN_FRAGEMNT } from "../../components/GenericTwoColumn/GenericTwoColumn";
import { PARALLEX_SECTION_FRAGMENT } from "../../sections/ParallexSection/ParallexSection";
import { PORTFOLIO_SECTION_FRAGMENT } from "../../sections/PorfolioSection/PorfolioSection";
import { CTA_FRAGMENT } from "../../components/Cta/Cta";
import { TESTIMONIAL_SECTION } from "../../sections/TestimonialSection/TestimonialSection";

export const pageQuery = gql`
  ${NEXT_IMAGE_FRAGMENT}
  ${BUTTON_FRAGMENT}
  ${PAGE_FRAGMENT}
  ${HOME_HERO_SECTION_FRAGMENT}
  ${GENERIC_TWO_COLUMN_FRAGEMNT}
  ${PARALLEX_SECTION_FRAGMENT}
  ${PORTFOLIO_SECTION_FRAGMENT}
  ${CTA_FRAGMENT}
  ${TESTIMONIAL_SECTION}

  query pageBySlug($slug: String) {
    allPages(where: { slug: { current: { eq: $slug } } }) {
      ...PagesQuery
    }
  }
`;
