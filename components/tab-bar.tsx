"use client";
import {
  HomeIcon as SolidHomeIcon,
  NewspaperIcon as SolidNewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon as SolidChatIcon,
  VideoCameraIcon as SolidLiveIcon,
  UserIcon as SolidUserIcon,
} from "@heroicons/react/24/solid";
import {
  HomeIcon as OutlineHomeIcon,
  NewspaperIcon as OutlineNewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon as OutlineChatIcon,
  VideoCameraIcon as OutlineLiveIcon,
  UserIcon as OutlineUserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabBar() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 w-full mx-auto max-w-screen-md grid grid-cols-5 border-neutral-600 border-t px-5 py-3 *:text-white bg-neutral-800">
      <Link href="/products" className="flex flex-col items-center gap-px">
        {pathname === "/products" ? (
          <SolidHomeIcon className="w-7 h-7"></SolidHomeIcon>
        ) : (
          <OutlineHomeIcon className="w-7 h-7"></OutlineHomeIcon>
        )}
        <span>홈</span>
      </Link>
      <Link href="/life" className="flex flex-col items-center gap-px">
        {pathname === "/life" ? (
          <SolidNewspaperIcon className="w-7 h-7"></SolidNewspaperIcon>
        ) : (
          <OutlineNewspaperIcon className="w-7 h-7"></OutlineNewspaperIcon>
        )}
        <span>동네생활</span>
      </Link>
      <Link href="/chat" className="flex flex-col items-center gap-px">
        {pathname === "/chat" ? (
          <SolidChatIcon className="w-7 h-7"></SolidChatIcon>
        ) : (
          <OutlineChatIcon className="w-7 h-7"></OutlineChatIcon>
        )}
        <span>채팅</span>
      </Link>
      <Link href="/live" className="flex flex-col items-center gap-px">
        {pathname === "/live" ? (
          <SolidLiveIcon className="w-7 h-7"></SolidLiveIcon>
        ) : (
          <OutlineLiveIcon className="w-7 h-7"></OutlineLiveIcon>
        )}
        <span>쇼핑</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center gap-px">
        {pathname === "/profile" ? (
          <SolidUserIcon className="w-7 h-7"></SolidUserIcon>
        ) : (
          <OutlineUserIcon className="w-7 h-7"></OutlineUserIcon>
        )}
        <span>나의 당근</span>
      </Link>
    </div>
  );
}
