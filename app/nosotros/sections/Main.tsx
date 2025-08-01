import { Divider } from "@heroui/react";
import React from "react";

export default function AboutMain() {
  return (
    <div className="py-5 flex flex-1 w-full justify-center max-w-[1500px] h-full my-24">
      <div className="flex w-full">
        <div className="flex flex-col w-full h-full gap-10">
          <h2 className="text-3xl font-bold text-center">
            Somos TuHogarBoreal
          </h2>
          <div className="w-full h-full flex flex-col-reverse md:flex-row gap-7">
            <div className="w-full px-7 md:px-0 md:pl-7 md:w-1/2 flex flex-col text-justify gap-3 justify-center">
              <h5 className="font-semibold text-lg">Sample title</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum pulvinar porta lorem, eu viverra metus egestas eu.
                Maecenas sed arcu sed ipsum cursus porta. Vestibulum eget
                interdum enim. Maecenas sed eros varius, consequat libero
                imperdiet, efficitur orci. Nulla accumsan eu urna in
                sollicitudin. Fusce posuere convallis lectus. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Integer tempus ex vitae dui pharetra
                consequat.
              </p>
              <p>
                Vestibulum dui magna, sagittis non quam ut, luctus porta sem. Ut
                vestibulum, quam vel venenatis rutrum, est leo porta felis, a
                semper erat mauris ut mi. Donec in nunc pellentesque, dignissim
                felis a, pharetra risus. Morbi sit amet lobortis magna. Aliquam
                at nisl molestie, dictum risus quis, facilisis odio. Nunc
                lobortis quam sem, quis tincidunt lorem blandit a. Cras
                facilisis condimentum orci, in dapibus enim sagittis tempus. Sed
                turpis tortor, posuere vitae nunc quis, auctor hendrerit augue.
              </p>
            </div>
            <div className="px-5 w-full md:w-1/2 h-full flex justify-center">
              <div className=" bg-black rounded-lg text-center flex items-center justify-center w-full aspect-video">
                <p className="text-white">Image/Video</p>
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-5 px-5">
            <h2 className="text-2xl font-semibold">Sample subtitle 2</h2>
            <div className="flex flex-col md:flex-row w-full gap-7 min-h-[500px] md:px-7">
              <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-5 md:gap-x-8 w-full md:w-2/3 h-[300px] md:h-auto">
                <div className="rounded-lg p-3 bg-black text-center text-white flex items-center justify-center">
                  Image
                </div>
                <div className="rounded-lg p-3 bg-black text-center text-white flex items-center justify-center">
                  Image
                </div>
                <div className="rounded-lg p-3 bg-black text-center text-white flex items-center justify-center">
                  Image
                </div>
                <div className="rounded-lg p-3 bg-black text-center text-white flex items-center justify-center">
                  Image
                </div>
              </div>
              <div className="flex flex-col w-full md:w-1/3 text-justify gap-5 justify-center">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum iure a eius rerum voluptatibus sed amet deserunt
                  perspiciatis? Ducimus quas nisi nesciunt voluptatibus maxime
                  possimus voluptate deleniti cum non reprehenderit.
                </p>
                <p>
                  Nullam egestas a enim nec iaculis. Donec lorem sem, mattis non
                  libero sed, congue vestibulum turpis. Vestibulum auctor dui
                  eget magna fringilla, malesuada eleifend nisi dapibus. Morbi
                  orci nisl, accumsan sit amet dui a, consectetur pellentesque
                  ante. Phasellus magna magna, tincidunt eu consectetur et,
                  placerat id nulla. Ut dapibus ipsum ac ligula euismod
                  hendrerit. Morbi egestas orci ipsum.
                </p>
                <p>
                  Mauris tempor quam at rhoncus auctor. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  curae; Vivamus ac auctor leo. Pellentesque id blandit elit.
                  Curabitur in mattis purus. Ut vel neque est.
                </p>
              </div>
            </div>
          </div>
          <Divider />
          <div className="bg-black m-5 rounded-lg aspect-video  text-center text-white flex items-center justify-center">
            Main video
          </div>
        </div>
      </div>
    </div>
  );
}
