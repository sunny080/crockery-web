const STEPHEN_PLUMBING_SECTIONS = [
  {
    sectionType: 'homeHeroSection',
    sectionTitle: 'Home Hero Section',
  },
  {
    sectionType: 'twoColumnGeneric',
    sectionTitle: 'Two Column Generic',
  },
  {
    sectionType: 'parallexSection',
    sectionTitle: 'Parallex Section',
  },
  {
    sectionType: 'portfolioSection',
    sectionTitle: 'Portfolio Section',
  },
  {
    sectionType: 'testimonialSection',
    sectionTitle: 'Testimonial Section',
  },
  {
    sectionType: 'ctaSection',
    sectionTitle: 'Cta Section',
  },
]

const STEPHEN_PLUMBING_TEMPLATE = [
  {
    templateType: 'pages',
    templateTitle: 'Pages',
  },
]

export const myStructure = (S) =>
  S.list()
    .title('Jani Web')
    .items([
      S.listItem()
        .title('Sections')
        .child(
          S.list()
            .title('Sections')
            .items(
              STEPHEN_PLUMBING_SECTIONS.sort((a, b) =>
                a.sectionTitle.localeCompare(b.sectionTitle),
              ).map((section) => {
                return S.listItem()
                  .title(section.sectionTitle)
                  .child(S.documentTypeList(section.sectionType))
              }),
            ),
        ),
      S.listItem()
        .title('Templates')
        .child(
          S.list()
            .title('Templates')
            .items(
              STEPHEN_PLUMBING_TEMPLATE.sort((a, b) =>
                a.templateTitle.localeCompare(b.templateTitle),
              ).map((section) => {
                return S.listItem()
                  .title(section.templateTitle)
                  .child(S.documentTypeList(section.templateType))
              }),
            ),
        ),
    ])
