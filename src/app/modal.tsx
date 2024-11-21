// Modal.tsx
import { StaticImageData } from "next/image";
import React from "react";

// تحديد أنواع الـ props في Modal باستخدام TypeScript
interface ModalProps {
  setinfo: React.Dispatch<React.SetStateAction<boolean>>; // دالة لتغيير الحالة
  dd: {
    name: string;
    link: string;
    pic: StaticImageData;
    date: string;
    days: string;
  };
}

const Modal: React.FC<ModalProps> = ({ setinfo, dd }) => {
  return (
    <div>
      <h2>{dd.name}</h2>
      <p>{dd.date}</p>
      <p>{dd.days}</p>
      <button onClick={() => setinfo(false)}>Close</button>
    </div>
  );
};

export default Modal;
