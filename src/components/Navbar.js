import profile from "./images/profile.png";
import { Menu } from "@headlessui/react";
import i18n from "../i18";

function Navbar() {
  function MyDropdown() {
    return (
      <Menu>
        <div className="w-[100%]">
          <Menu.Button>
            <i className="fa-solid fa-2xl fa-bars absolute right-[50px] top-[55px] text-white"></i>
          </Menu.Button>
          <Menu.Items className="list-none flex flex-col pr-[20px] text-right bg-gray-100 text-black text-xl">
            <Menu.Item className="py-4 ">
              {({ active }) => (
                <a href="/" className={`${active}`}>
                  {i18n.gettext("joinPatient")}
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="py-4">
              {({ active }) => (
                <a href="/" className={`${active}`}>
                  {i18n.gettext("joinDoctor")}
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="py-4">
              {({ active }) => (
                <a href="/" className={`${active}`}>
                  About us
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </div>
      </Menu>
    );
  }

  return (
    <div className="bg-[#323239] text-white">
      <div className="flex">
        <div className="pt-[25px]">
          <img
            src={profile}
            alt="User Profile"
            className="w-[4rem] mx-[15px] rounded-full"
          />
        </div>
        <div className="text-[1rem] pb-[20px] pt-[30px]">
          <p>CHAT</p>
          <p>Clinic of the future</p>
        </div>
      </div>
      <MyDropdown />
    </div>
  );
}

export default Navbar;