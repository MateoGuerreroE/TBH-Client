"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import Image from "next/image";
import { menuList } from "../../data/MenuItems";
import { useRouter } from "next/navigation";

export default function BurgerMenuDD() {
  const router = useRouter();

  return (
    <>
      <Dropdown className="font-poppins">
        <DropdownTrigger>
          <Image src="/icons/menu.svg" alt="menu" width={40} height={40} />
        </DropdownTrigger>
        <DropdownMenu>
          {menuList.map((item, index) => (
            <DropdownItem key={index} onPress={() => router.push(item.uri)}>
              <p key={index}>{item.label}</p>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
