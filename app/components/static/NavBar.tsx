import Header from "./Header";
import WrappedSearchBar from "../wrapped/WrappedSearchBar";
import SelectLink from "@/app/components/shared/SelectLink";
import AuthWrapper from "@/app/components/wrapped/AuthWrapper";
import BurgerMenuDD from "./BurgerMenuDD";
import { menuList } from "../../../data/MenuItems";
import MobileDropDown from "./MobileDropDown";

export default function NavBar() {
  return (
    <>
      <Header />
      <div className="sticky top-0 z-10">
        <div
          className={`absolute font-poppins px-2 top-0 h-14 flex  justify-center items-center w-full font-semibold bg-transparent backdrop-blur-md`}
        >
          <div className="md:hidden flex justify-center flex-col w-full">
            <div className="flex flex-row justify-between gap-8">
              <BurgerMenuDD />
              <WrappedSearchBar />
              <MobileDropDown />
            </div>
          </div>
          <div className="hidden md:flex flex-row max-w-[1400px] w-full lg:p-0 px-3">
            <div className="menu-values flex flex-row gap-5 lg:gap-9 items-center w-full lg:justify-between">
              <div className="flex flex-row gap-9 pl-3 items-center">
                {menuList.map((item, index) => (
                  <SelectLink
                    key={index}
                    label={item.label}
                    uri={item.uri}
                    fontSize="sm"
                    customClass="md:text-md"
                  />
                ))}
              </div>
              <div className="w-full xl:w-1/4">
                <WrappedSearchBar />
              </div>
              <MobileDropDown />
              <div className="lg:flex flex-row gap-3 items-center hidden">
                <AuthWrapper variation="desktop" orientation="horizontal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
