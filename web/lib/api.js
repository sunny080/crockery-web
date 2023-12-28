import client from "./apollo/client";
import { allPages } from "../src/queries/all-pages";

export async function getAllPagesWithSlugs() {
  const promise = client.query({
    query: allPages,
    fetchPolicy: "no-cache",
  });

  const { data, errors } = await promise;
  if (errors) {
    return null;
  }
  return [...data?.allPages];
}

export async function getPageBySlug(pageQuery, slug) {
  const promise = client.query({
    query: pageQuery,
    variables: {
      slug,
    },
    fetchPolicy: "no-cache",
  });

  const { data, errors } = await promise;
  if (errors) {
    return null;
  }
  return {
    page: [...data?.allPages],
  };
}
