import { useState } from "react";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const PaymentMethod = () => {
  const [count, setCount] = useState(1);

  const onIncCount = () => {
    setCount(count + 1);
  };
  const onDecCount = () => {
    if (count <= 1) {
      return;
    }

    setCount(count - 1);
  };
  return (
    <div className="flex flex-col hidden justify-center items-center gap-1 text-white font-light">
      <div className="flex text-2xl gap-3">
        <button onClick={onDecCount}>
          <GrFormSubtract />
        </button>
        <div className="flex items-center gap-1">
          <RxAvatar />
          {count}
        </div>
        <button onClick={onIncCount}>
          <IoMdAdd />
        </button>
      </div>
      <a
        href={`upi://pay?pa=roopame1995-1@okicici&pn=Roopame&am=${
          count * 200
        }&cu=INR&url=https://gpay.app.goo.gl/`}
        target="_blank"
        className="underline "
      >
        Click here to pay : ₹{count * 200}
      </a>
    </div>
  );
};

export default PaymentMethod;
