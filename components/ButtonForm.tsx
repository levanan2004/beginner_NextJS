import Link from "next/link";
import React from "react";

interface ButtonFormProps {
  href: string;
  icon?: string;
  text: string;
}

const ButtonForm: React.FC<ButtonFormProps> = ({ href, icon, text }) => {
  return (
    <Link
      href={href}
      className="flex border px-3 h-8 border-gray-400 rounded-2xl justify-center items-center cursor-pointer"
    >
      {icon && <i className={`relative ${icon} mr-2`}></i>} {text}
    </Link>
  );
};

export default ButtonForm;
