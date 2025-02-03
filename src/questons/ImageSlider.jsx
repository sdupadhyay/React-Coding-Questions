import { useEffect, useState } from "react";

export const ImageSlider = ({ autoSlide = false }) => {
  const images = [
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg",
    "https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png",
    "https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s",
  ];
  const [active, setActive] = useState(0);
  const handleIncrement = () => {
    setActive((pre) => (pre < images.length - 1 ? pre + 1 : 0));
  };
  const handleDecrement = () => {
    setActive((pre) => (pre == 0 ? images.length - 1 : pre - 1));
  };
  useEffect(() => {
    let id;
    if (autoSlide) {
      id = setInterval(() => {
        handleIncrement();
      }, 2000);
    }
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <div className="flex justify-center mt-10 items-center">
        <span onClick={handleDecrement} className="text-3xl cursor-pointer">
          ⬅️
        </span>
        <div>
          <img
            src={images[active]}
            alt="Image"
            width={"600px"}
            height={"400px"}
          />
        </div>
        <span onClick={handleIncrement} className="text-3xl cursor-pointer">
          ➡️
        </span>
        <div>{active}</div>
      </div>
    </>
  );
};
