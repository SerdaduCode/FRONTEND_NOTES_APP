import React, { useEffect, useState } from "react";
import { formatDate } from "../../utils/FormatTanggal";
const colors = [
  "border-t-red-500",
  "border-t-blue-500",
  "border-t-primary",
  "border-t-quartenary",
  "border-t-purple-500",
  "border-t-pink-500",
  "border-t-indigo-500",
];
const Card = (props) => {
  const { body, title, createdAt } = props;
  const [borderColorClass, setBorderColorClass] = useState(colors[0]);

  const getRandomColorClass = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const changeColor = () => {
    const newColorClass = getRandomColorClass();
    setBorderColorClass(newColorClass);
  };
  useEffect(() => {
    changeColor();
  }, []);
  return (
    <div
      className={`md:max-w-sm flex flex-col bg-white border border-t-4 shadow-sm rounded-xl ${borderColorClass}`}
    >
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-primary italic">{title}</h3>
        <p className="mt-2 text-gray-500 truncate">{body}</p>
        <p>{formatDate(createdAt)}</p>
        <div className="flex gap-3">
          <button>Arsip</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
