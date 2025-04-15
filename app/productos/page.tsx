"use client"; //! Wrapper for section and etc
import Carousel from "@/components/Carousel/Carousel";
import ProductCard from "@/components/Product/ProductCard";
import {
  Accordion,
  AccordionItem,
  Checkbox,
  CheckboxGroup,
  Divider,
  Input,
  Pagination,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from "@heroui/react";
import React from "react";

export default function Productos() {
  return (
    <main className="h-[200vh] pt-14 bg-[#bebebe] flex flex-col gap-5 font-poppins items-center">
      <section className="flex flex-row max-w-[1500px] p-3 md:p-5 w-full h-screen">
        <div className="w-1/4 flex flex-col p-5 font-poppins">
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
        </div>
        <Divider orientation="vertical" className="mx-3" />
        <div className="flex flex-col h-full w-3/4 p-5">
          <div className="bg-black h-32 w-full"></div>
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
                adapt: false,
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
          <Divider className="my-5" />
          <div className="flex flex-col pl-5 pt-5">
            <h3 className="font-poppins text-2xl font-bold mb-3">Tecnología</h3>
            <Carousel
              options={{
                loop: false,
                adapt: false,
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
          <Divider className="my-5" />
          <div className="flex flex-col pl-5 pt-5">
            <h3 className="font-poppins text-2xl font-bold mb-3">Tecnología</h3>
            <Carousel
              options={{
                loop: false,
                adapt: false,
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
      {/* <div className="h-[600px] px-5">
        <Carousel options={{ loop: false, dotButton: true, adapt: true }}>
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
      </div> */}
    </main>
  );
}
