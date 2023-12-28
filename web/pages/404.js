import Link from "next/link";
import Button from "../src/components/Button";

export default function Custom404() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <span className="text-[52px] font-Roboto-Slab text-[#072C3E] font-bold">
          404
        </span>
        <p className="font-Roboto text-primary_body_text text-base leading-6 mb-6">
          oops! something went wrong
        </p>
        <Link href="/">
          <Button label="Go To Home" variant="primary" />
        </Link>
      </div>
    </div>
  );
}
