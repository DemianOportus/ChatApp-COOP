import profile from "./images/profile.png";

function Footer() {
  const date = new Date();
  let thisYear = date.getFullYear();

  return (
    <div className="mt-20">
      <div className="flex justify-between px-[30px] pb-[15px] md:justify-evenly ">
        <div>
          <p className="uppercase font-bold">Contact us</p>
          <p>Info@chat.ottawa.ca </p>
          <p>613.789.9090</p>
        </div>
        <div>
          <p className="uppercase font-bold">Find us on</p>
          <div className="text-center text-[#323239]">
            <i className="fa-xl fa-brands fa-square-facebook"></i>
            <i className="fa-xl fa-brands fa-square-twitter px-[10px]"></i>
            <i className="fa-xl fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="pt-[25px]">
          <img
            src={profile}
            alt="User Profile"
            className="w-[4rem] mx-[15px] rounded-full"
          />
        </div>
        <div className="text-[.6rem] pb-[30px] pt-[30px]">
          <p>CHAT</p>
          <p>Clinic of the future</p>
        </div>
      </div>
      <div className="text-center bg-[#323239] text-white pt-[20px] pb-[50px]">
        <p className="uppercase pb-[10px]">
          Join as a patient / Join as a doctor
        </p>
        <p className="uppercase pb-[10px]">About us / Data privacy</p>
        <p className="text-[.55rem] text-gray-300">
          {thisYear} CHAT Clinic of the future{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
