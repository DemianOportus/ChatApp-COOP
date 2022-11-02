import profile from "./images/profile.png";
import { Menu } from "@headlessui/react";
import i18n from "../i18";
import { useContext } from "react";
import { Context } from "./Context";
import { useState } from "react";

function Navbar() {
  useContext(Context);
  const [homeBackground, setHomeBackground] = useState(false);
  const [patientsBackground, setPatientsBackground] = useState(false);
  const [doctorsBackground, setDoctorsBackground] = useState(false);
  const [aboutBackground, setAboutBackground] = useState(false);

  function changeHomeBackground() {
    if (homeBackground == false) {
      setHomeBackground(true);
      setPatientsBackground(false);
      setDoctorsBackground(false);
      setAboutBackground(false);
    } 
  }
  
  function changePatientsBackground() {
    if (patientsBackground == false) {
      setPatientsBackground(true);
      setHomeBackground(false);
      setDoctorsBackground(false);
      setAboutBackground(false);
    } 
  }

  function changeDoctorsBackground() {
    if (doctorsBackground == false) {
      setDoctorsBackground(true);
      setHomeBackground(false);
      setPatientsBackground(false);
      setAboutBackground(false);
    } 
  }

  function changeAboutBackground() {
    if (aboutBackground == false) {
      setAboutBackground(true);
      setHomeBackground(false);
      setPatientsBackground(false);
      setDoctorsBackground(false);
    } 
  }

  function MyDropdown() {
    return (
      <Menu className="md:hidden">
        <div className="w-[100%]">
          <Menu.Button>
            <i className="fa-solid fa-2xl fa-bars absolute right-[50px] top-[55px] text-white"></i>
          </Menu.Button>
          <Menu.Items className="list-none flex flex-col pr-[20px] text-right bg-gray-100 text-black text-xl font-[myriadREgular]">
            <Menu.Item className="py-4 ">
              {({ active }) => (
                <a href="/join-as-a-patient" className={`${active}`}>
                  {i18n.gettext("joinPatient")}
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="py-4">
              {({ active }) => (
                <a href="/join-as-a-doctor" className={`${active}`}>
                  {i18n.gettext("joinDoctor")}
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="py-4">
              {({ active }) => (
                <a rel="noreferrer" href="/about-us" className={`${active}`}>
                  {i18n.gettext("aboutUs")}
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </div>
      </Menu>
    );
  }

  return (
    <div className="bg-[#323239] text-white font-[myriadRegular]">
      <div className="md:flex md:items-center md:justify-between md:pr-10 md:pl-6">  
        <div>
          <div className="flex">
            <div className="pt-[22px]">
              <img
                src={profile}
                alt="User Profile"
                className="w-[4rem] mx-[15px] rounded-full"
              />
            </div>
            <div className="text-[1rem] pb-[20px] pt-[30px] font-[myriadRegular] md:pb-[30px]">
              <p>CHAT APP</p>
              <p>{i18n.gettext("clinicOfTheFuture")}</p>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center justify-end gap-1 text-2xl">
            <a 
              href="/"
              className={`py-1 px-5 ${homeBackground && 'bg-[#D55E00]'}`} 
              onClick={changeHomeBackground}
            >
              Home
            </a>
            <a 
              href="/join-as-a-patient"
              className={`py-1 px-5 ${patientsBackground && 'bg-[#D55E00]'}`} 
              onClick={changePatientsBackground}
            >
              For Patients
            </a>
            <a 
              href="/join-as-a-doctor"
              className={`py-1 px-5 ${doctorsBackground && 'bg-[#D55E00]'}`} 
              onClick={changeDoctorsBackground}
            >
              For Doctors
            </a>
            <a 
              href="/about"
              className={`py-1 px-5 ${aboutBackground && 'bg-[#D55E00]'}`} 
              onClick={changeAboutBackground}
            >
              About
            </a>
          </div>
        </div>
      </div>
      <MyDropdown/>
    </div>
  );
}

export default Navbar;
