"use client";
import SelectLink from "@/components/SelectLink";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import Image from "next/image";
import { menuList } from "../data/MenuItems";

export default function BurgerMenuDD() {
  return (
    <>
      <Dropdown className="font-poppins">
        <DropdownTrigger>
          <Image src="/icons/menu.svg" alt="menu" width={40} height={40} />
        </DropdownTrigger>
        <DropdownMenu>
          {menuList.map((item, index) => (
            <DropdownItem key={index}>
              <SelectLink key={index} label={item} fontSize="sm" />
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
