import { getAllPagesWithSlugs, getPageBySlug } from "../lib/api";
import EntryRenderer from "../src/components/EntryRenderer/EntryRenderer";
import { pageQuery } from "../src/queries/page-query";
import SEO from "../src/components/seo";
function Page(page) {
  switch (page?.page?._type) {
    case "pages":
      return (
        <>
          {page?.page?.pageBuilder?.length > 0 && (
            <EntryRenderer
              toggleFunc={page?.toggleFunc}
              pageBuilder={page?.page?.pageBuilder}
              BlogFeatured={page?.BlogFeatured}
              BlogHub={page?.BlogHub}
            />
          )}
          <SEO
            title={page?.page?.seoTitle}
            description={page?.page?.metaDescription}
          />
        </>
      );
    // case "blogs":
    //   return (
    //     <>
    //       <BlogPostSection {...page?.page} />
    //       <BlogFeaturedSection BlogFeatured={page?.BlogFeatured} />
    //       <Cta {...mocks} />
    //       <SEO
    //         title={page?.page?.seoTitle}
    //         description={page?.page?.metaDescription}
    //       />
    //     </>
    //   );
    default:
      return null;
  }
}

export async function getStaticPaths() {
  const pagesWithSlugs = await getAllPagesWithSlugs();
  return {
    paths: pagesWithSlugs?.map(({ slug: { current } }) => `/${current}`) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let uri = "/";
  if (Object.keys(params).length) {
    const { current } = params;
    const result = current.reduce((acc, current) => acc + "/" + current);
    const formattedString = result.startsWith("/") ? result.slice(1) : result;
    uri = formattedString;
  }

  const { page = [] } = await getPageBySlug(pageQuery, uri);
  if (page?.length === 0) {
    return { notFound: true, props: { page: null } };
  }
  return {
    props: { page: page[0] },
    revalidate: 10,
  };
}

export default Page;
