import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  heading: string;
  backgroundColor?: string;
  textColor?: string;
  buttonInfo: { text: string; link: string; backgroundColor: string };
  children: ReactNode;
};
const InfoBox: React.FC<Props> = ({
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
  buttonInfo,
  children,
}) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`text-2xl ${textColor} font-bold`}>{heading}</h2>
      <p className={`mt-2 ${textColor} mb-4`}>{children}</p>
      <Link
        href={buttonInfo.link}
        className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:opacity-80`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
