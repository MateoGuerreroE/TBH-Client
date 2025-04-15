"use client";
import {
  AccordionItem,
  Accordion,
  CheckboxGroup,
  Divider,
  SelectItem,
  Input,
  RadioGroup,
  Radio,
  Checkbox,
  Select,
} from "@heroui/react";
import React from "react";

export default function DesktopMenu() {
  return (
    <Accordion
      className="h-full"
      selectionMode="multiple"
      defaultExpandedKeys={["filters", "order"]}
    >
      <AccordionItem
        classNames={{
          indicator: "text-black font-bold",
          content: "mb-5",
        }}
        className="font-bold"
        key="filters"
        aria-label="Accordion1"
        title="Filtros"
      >
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
          <p className="text-black/50 font-semibold">Precio</p>
          <div className="flex flex-row items-center gap-2">
            <Input type="number" />
            <p>-</p>
            <Input type="number" />
          </div>
        </div>
      </AccordionItem>
      <AccordionItem
        classNames={{
          indicator: "text-black font-bold",
          content: "mb-5",
        }}
        className="font-bold"
        key="order"
        title="Ordenar"
      >
        <RadioGroup className="font-semibold">
          <Radio value="price">Por precio</Radio>
          <Radio value="discount">Por descuento</Radio>
          <Radio value="name">Por nombre</Radio>
        </RadioGroup>
      </AccordionItem>
      <AccordionItem
        classNames={{
          indicator: "text-black font-bold",
          content: "mb-5",
        }}
        key="subcategories"
        className="font-bold"
        title="Subcategorías"
        subtitle="Debes tener una categoria en filtros"
      >
        <CheckboxGroup className="font-semibold">
          <Checkbox value="tech">Aparatos electrónicos</Checkbox>
          <Checkbox value="audio">Audio</Checkbox>
          <Checkbox value="video">Video</Checkbox>
          <Checkbox value="gaming">Gaming</Checkbox>
        </CheckboxGroup>
      </AccordionItem>
    </Accordion>
  );
}
