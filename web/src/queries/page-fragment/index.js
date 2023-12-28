export const PAGE_FRAGMENT = `
fragment PagesQuery on Pages {
    _type
    seoTitle
    metaDescription
    isIndexed
    title
    slug {
      current
    }
    pageBuilder{
      ...HomeHeroSection
      ...GenericTwoColumn
      ...ParallexSection
      ...PortfolioSection
    }
  }
  `;
