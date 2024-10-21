import Link from "next/link";
import { MdCabin } from "react-icons/md";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <MdCabin className="h-6 w-6" />
      </Link>
    </Button>
  );
}

export default Logo;
