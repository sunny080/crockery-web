import clsx from "clsx";
import Image from "next/image";

export const NextImage = ({ otherClasses, title, asset, ...props }) => {
  if (!asset) {
    return null;
  }

  return (
    <Image
      src={`${asset.url}?fm=webp`}
      width={asset?.metadata?.dimensions.width}
      height={asset?.metadata?.dimensions.height}
      alt={title}
      className={clsx(otherClasses)}
      {...props}
    />
  );
};

export default NextImage;

export const NEXT_IMAGE_FRAGMENT = `
fragment CustomImage on CustomImage {
  title
  asset {
    size
    url
    metadata {
      dimensions {
        height
        width
      }
    }
  }
}
`;
