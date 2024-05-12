import Image from "next/image";
import phone from "../../../public/images/phone.jpeg";
import phone2 from "../../../public/images/phone2.jpeg";

const Publicity = () => {
  return (
    <div className="flex flex-row items-center w-full animate-pulse">
      <div className="animate-pulsee animate-bounce">
        <Image src={phone} alt="phone" width={600} height={600} />
      </div>
      <div className="animate-pulse ">
        <Image src={phone2} alt="phone" width={600} height={600} />
      </div>
      <div className=" animate-bounce">
        <Image src={phone} alt="phone" width={600} height={600} />
      </div>
    </div>
  );
};
export default Publicity;
