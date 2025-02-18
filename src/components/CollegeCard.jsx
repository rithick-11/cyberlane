

const CollegeCard = () => {
  return (
    <div className="flex flex-col md:flex-row  justify-between items-center text-white">
      <img
        className="h-40 w-auto"
        src="https://res.cloudinary.com/dwpmsw2i4/image/upload/v1739894754/college%20logo.png"
        alt="logo 1"
      />
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="font-light text-2xl md:text-3xl text-center">
          Mahendra Engineering College (Autonomous)
        </h1>
        <p className="font-extralight text-xs sm:text-sm md:text-lg w-[80%] text-center">
          Autonomous Institution Approved by AICTE | Recognized U/S 12(B) & 2(F)
          of UGC ACT 1956 Affiliated to Anna University, Chennai | NAAC
          Accredited with 'A++' Grade & NBA Tier - 1(WA) UG: CSE,ECE,EEE
        </p>
      </div>
      {/* <img className="h-20 w-auto" src="https://mahendra.org/wp-content/uploads/2021/04/mahendra_text-only-1.png" /> */}
      <img
        className="h-40 w-auto hidden md:block"
        src="https://res.cloudinary.com/dwpmsw2i4/image/upload/v1739894754/college%20logo.png"
        alt="logo 1"
      />
    </div>
  );
};

export default CollegeCard;
