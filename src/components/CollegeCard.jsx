const CollegeCard = () => {
  return (
    <div className="flex flex-col md:flex-row  justify-between items-center text-white gap-4">
      <img
          className="h-32 rounded-full hidden md:block md:h-40 w-auto"
          src="https://res.cloudinary.com/dwpmsw2i4/image/upload/v1739948737/logo-wide1_ynrh2l.jpg"
          alt="logo 1"
        />
      <div className="flex gap-7 md:hidden">
        <img
          className="h-32 rounded-full md:h-40 w-auto"
          src="https://res.cloudinary.com/dwpmsw2i4/image/upload/v1739948737/logo-wide1_ynrh2l.jpg"
          alt="logo 1"
        />
        <img
          className="h-32 rounded-full md:h-40 w-auto block md:hidden"
          src="https://media.licdn.com/dms/image/v2/C560BAQEz4acMnAuqrA/company-logo_200_200/company-logo_200_200/0/1678090772077?e=1747872000&v=beta&t=YpYlYaCkNqKw7r8ny3g8gxiyvDEX30DBB6utipZXy2I"
          alt="logo 1"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="font-light text-2xl md:text-3xl text-center">
          Mahendra Engineering College (Autonomous)
        </h1>
        <p className="font-extralight hidden md:block text-xs sm:text-sm w-[80%] text-center">
          Autonomous Institution Approved by AICTE | Recognized U/S 12(B) & 2(F)
          of UGC ACT 1956 Affiliated to Anna University, Chennai | NAAC
          Accredited with 'A++' Grade & NBA Tier - 1(WA) UG: CSE,ECE,EEE
        </p>
      </div>
      <img
        className="h-32 rounded-full md:h-40 w-auto hidden md:block"
        src="https://media.licdn.com/dms/image/v2/C560BAQEz4acMnAuqrA/company-logo_200_200/company-logo_200_200/0/1678090772077?e=1747872000&v=beta&t=YpYlYaCkNqKw7r8ny3g8gxiyvDEX30DBB6utipZXy2I"
        alt="logo 1"
      />
    </div>
  );
};

export default CollegeCard;
