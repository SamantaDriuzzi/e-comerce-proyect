import { Tiro_Devanagari_Sanskrit } from "next/font/google";

const TiroDevanagariSanskrit = Tiro_Devanagari_Sanskrit({
  weight: "400",
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <>
      <div
        style={{
          fontFamily: TiroDevanagariSanskrit.className,
        }}
        className="text-5xl font-bold w-72 tracking-widest"
      >
        SHOP
      </div>
    </>
  );
};

export default Logo;
