import { formatDate } from "@lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { StartupType } from "app/types/startup";

export const StartupCard = ({ post }: { post: StartupType }) => {
  const {
    _id,
    title,
    views,
    _createAt,
    author: { _id: authorId, name: authorName },
    description,
    category: { _id: categoryId, name: categoryName },
    image,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup-card_date">{formatDate(_createAt.toString())}</p>
        <div className="flex gap-2">
          <EyeIcon size={24} />
          <span className="text-16-medium">{views} views</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-3">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{authorName}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <p className="text-26-semibold line-clamp-1">{title}</p>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt={"placeholder"}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <Image
          src={image}
          alt="image"
          width={280}
          height={200}
          className="rounded-lg"
        />
      </Link>

      <div className="flex-between mt-5 gap-3">
        <Link href={`/?category=${categoryId}`}>
          <p className="text-16-medium">{categoryName}</p>
        </Link>
        <Button className="startup-card_btn">
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};
