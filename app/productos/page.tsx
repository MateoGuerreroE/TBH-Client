//! Wrapper for section and etc
"use client";
import Carousel from "@/components/Carousel/Carousel";
import ProductCard from "@/components/Product/ProductCard";
import DesktopMenu from "@/components/Shop/DesktopMenu";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Pagination,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Slider,
} from "@heroui/react";
import Image from "next/image";

export default function Productos() {
  return (
    <main className="pt-14 bg-[#bebebe] flex flex-col gap-5 font-poppins items-center">
      <section className="flex flex-col lg:flex-row max-w-[1500px] p-3 md:p-5 w-full">
        <div className="lg:flex flex-row w-1/4 hidden">
          <div className="flex flex-col p-5 font-poppins">
            <DesktopMenu />
          </div>
          <Divider orientation="vertical" className="mx-3 h-full" />
        </div>
        <div className="flex lg:hidden flex-col">
          <div className="flex flex-row items-center justify-evenly w-full font-poppins">
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
          </div>
          <Divider className="my-3" />
        </div>
        <div className="flex flex-col h-full w-full lg:w-3/4 px-5 lg:p-5">
          <div className="bg-black hidden lg:block h-32 w-full"></div>
          <div className="h-12 flex justify-end items-center px-2 gap-7 font-poppins">
            <p>Página</p>
            <Pagination
              isDisabled={true}
              variant="light"
              key={1}
              initialPage={1}
              total={1}
            ></Pagination>
          </div>
          <div className="flex flex-col pl-5 pt-5">
            <h3 className="font-poppins text-2xl font-bold mb-3">Tecnología</h3>
            <Carousel
              options={{
                loop: false,
                adapt: true,
                dragFree: true,
                slidesPerView: 3,
              }}
            >
              <ProductCard
                shortDescription="lorem"
                name="Levanta pies, el santo giral"
                images={[
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                ]}
                price={85000}
              />
              <ProductCard
                shortDescription="lorem"
                name="Levanta pies, el santo giral"
                images={[
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                ]}
                price={17500.12}
              />
              <ProductCard
                shortDescription="lorem"
                name="Levanta pies, el santo giral"
                images={[
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                ]}
                price={17500.12}
              />
              <ProductCard
                shortDescription="lorem"
                name="Levanta pies, el santo giral"
                images={[
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                ]}
                price={17500.12}
              />
              <ProductCard
                shortDescription="lorem"
                name="Levanta pies, el santo giral"
                images={[
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                ]}
                price={17500.12}
              />
              <ProductCard
                shortDescription="lorem"
                name="Levanta pies, el santo giral"
                images={[
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                  "https://www.productsamples.com/wp-content/uploads/2021/10/il-box.png",
                ]}
                price={17500.12}
              />
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
}
