import { coordinator } from "../util/data";

const LocationSection = () => {
  return (
    <section className="text-white py-4 text-sm space-y-5">
      <h1 className="text-center text-balance text-4xl">Contact</h1>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="">
          <h1 className="my-4 text-xl text-orange-400 font-semibold">
            Loaction
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1252.13100879406!2d77.99882702219472!3d11.477491634526436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babe0bee4ef722b%3A0xa949856b58bb6c9e!2sMahendra%20Engineering%20College!5e0!3m2!1sen!2sin!4v1739944030449!5m2!1sen!2sin"
            width="600"
            height="450"
            className="w-full"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="">
            <h1 className="my-4 text-xl text-orange-400 font-semibold">
              Faculty Coordinator
            </h1>
            <ul className="pl-4 space-y-5 text-sm">
              {coordinator.faculty.map((data, i) => (
                <li key={i}>
                  <p className="text-lg text-gray-100">{data.name}</p>
                  <a href={`tel:+91${data.phNo}`}>
                    <p className="text-sm text-gray-100/90 underline">+91 {data.phNo}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h1 className="my-4 text-xl text-orange-400 font-semibold">
              Sudent Coordinator
            </h1>
            <ul className="pl-4 space-y-5 text-sm">
              {coordinator.student.map((data, i) => (
                <li key={i}>
                  <p className="text-lg text-gray-100">{data.name}</p>
                  <a href={`tel:+91${data.phNo}`}>
                    <p className="text-sm text-gray-100/90 underline">+91 {data.phNo}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-start-2 hidden row-start-1">
            <h1 className="my-4 text-xl text-orange-400 font-semibold">
              Payment
            </h1>
            <ul className="pl-4 space-y-5 text-sm">
              <li className="flex flex-col items-start gap-2">
                <div className="flex flex-col gap-1">
                  <p>UPI ID :</p>
                  <a
                    href="upi://pay?pa=roopame1995-1@okicici&pn=Roopame&am=200&cu=INR&url=https://gpay.app.goo.gl/"
                    target="_blank"
                    className="underline "
                  >
                    roopame1995-1@okicici
                  </a>
                </div>
                <img
                  src="https://res.cloudinary.com/dwpmsw2i4/image/upload/v1739956964/uip_xqoypa.jpg"
                  alt="uip image"
                  className="h-30 rounded"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
