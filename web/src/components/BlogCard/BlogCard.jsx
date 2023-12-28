import clsx from "clsx";
import NextImage from "../NextImage";
import Link from "next/link";

export const BlogCard = ({
  otherClasses,
  title,
  blogsCategory,
  slug,
  mobileImage,
  desktopImage,
}) => {
  const blogCardClasses = clsx(otherClasses);

  return (
    <div className={blogCardClasses} data-testid="blog-card">
      <Link href={slug?.current} className="group">
        <div className="w-full flex flex-col gap-6 items-start ">
          <div className="w-full overflow-hidden">
            <NextImage
              {...mobileImage}
              otherClasses="w-full object-cover group-hover:scale-110 transition-all ease-in-out duration-300 block lg:hidden"
            />
            <NextImage
              {...desktopImage}
              otherClasses="w-full  group-hover:scale-110 transition-all ease-in-out duration-300 hidden lg:block h-[236px] object-cover"
            />
          </div>
          {blogsCategory && (
            <div className="flex flex-col gap-2  items-start  self-stretch ">
              <p className="text-[#B2B2B2] font-Roboto text-sm not-italic font-semibold leading-[18px] tracking-[1.68px] uppercase">
                {blogsCategory.category}
              </p>
              <p className="text-primary_typography self-stretch font-Roboto text-xl not-italic font-normal leading-[30px] tracking-[0.6px] uppercase">
                {title}
              </p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
