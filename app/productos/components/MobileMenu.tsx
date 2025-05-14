"use client";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Slider,
} from "@heroui/react";
import Image from "next/image";
import React from "react";

export default function MobileMenu() {
  return (
    <>
      <Dropdown closeOnSelect={false}>
        <DropdownTrigger>
          <div className="flex gap-2">
            <p className="font-bold">Filtros</p>
            <Image
              src="/icons/base-dd.svg"
              alt="drop_down_arrow"
              width={16}
              height={16}
            />
          </div>
        </DropdownTrigger>
        <DropdownMenu className="w-[300px]">
          <DropdownItem key="checkbox_menu">
            <CheckboxGroup label="Origen" className="font-semibold">
              <Checkbox value="local" className="">
                Local
              </Checkbox>
              <Checkbox value="international">Internacional</Checkbox>
            </CheckboxGroup>
            <Divider className="my-4" />
            <div className="flex flex-col gap-2">
              <p className="text-black/50 font-semibold">Categoria</p>
              <Select>
                <SelectItem key="tech">Tecnología</SelectItem>
              </Select>
            </div>
            <Divider className="my-4" />
            <div className="flex flex-col gap-2">
              <Slider
                className="max-w-md"
                defaultValue={[0, 100000]}
                formatOptions={{ style: "currency", currency: "USD" }}
                label={"Precio"}
                maxValue={500000}
                minValue={0}
                step={10000}
              />
            </div>
            <Button fullWidth className="mt-5">
              Aplicar
            </Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown closeOnSelect={false}>
        <DropdownTrigger>
          <div className="flex gap-2">
            <p className="font-bold">Ordenar</p>
            <Image
              src="/icons/base-dd.svg"
              alt="drop_down_arrow"
              width={16}
              height={16}
            />
          </div>
        </DropdownTrigger>
        <DropdownMenu className="w-[300px]">
          <DropdownItem key="checkbox_menu">
            <RadioGroup className="font-semibold">
              <Radio value="price">Por precio</Radio>
              <Radio value="discount">Por descuento</Radio>
              <Radio value="name">Por nombre</Radio>
            </RadioGroup>
            <Button fullWidth className="mt-5">
              Aplicar
            </Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown closeOnSelect={false}>
        <DropdownTrigger>
          <div className="flex gap-2">
            <p className="font-bold">Sub-Categorías</p>
            <Image
              src="/icons/base-dd.svg"
              alt="drop_down_arrow"
              width={16}
              height={16}
            />
          </div>
        </DropdownTrigger>
        <DropdownMenu className="w-[300px]">
          <DropdownItem key="checkbox_menu">
            <p className="font-poppins text-sm my-2 text-center italic">
              Para ver esta sección necesitas seleccionar una categoría
              principal en filtros
            </p>
            <CheckboxGroup className="font-semibold">
              <Checkbox value="tech">Aparatos electrónicos</Checkbox>
              <Checkbox value="audio">Audio</Checkbox>
              <Checkbox value="video">Video</Checkbox>
              <Checkbox value="gaming">Gaming</Checkbox>
            </CheckboxGroup>
            <Button fullWidth className="mt-5">
              Aplicar
            </Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
