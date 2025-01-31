import { useState } from "react";

export const AccordionComponent = ({ isCollaspable = false }) => {
  const data = [
    {
      title: "Accordion Item #1",
      body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "Accordion Item #2",
      body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      title: "Accordion Item #3",
      body: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(isCollaspable ? [] : 0);
  return (
    <>
      <div className="w-[50%] m-auto mt-4">
        {data?.map((ele, ind) => (
          <Accordion
            {...ele}
            key={ind}
            ind={ind}
            isOpened={
              isCollaspable ? activeIndex?.includes(ind) : ind == activeIndex
            }
            setIsOpen={(ind) => {
              if (isCollaspable) {
                activeIndex.includes(ind)
                  ? setActiveIndex((pre) => pre?.filter((ele) => ele != ind))
                  : setActiveIndex([...activeIndex, ind]);
              } else setActiveIndex((pre) => (pre == ind ? null : ind));
            }}
          />
        ))}
      </div>
    </>
  );
};

const Accordion = ({ title, body, isOpened, setIsOpen, ind }) => {
  return (
    <div className="border border-black rounded-md mt-2">
      <div
        onClick={() => setIsOpen(ind)}
        className="font-bold p-2 bg-red-100 flex justify-between cursor-pointer"
      >
        <span>{title}</span>
        <span> {isOpened ? "⬆️" : "⬇️"}</span>
      </div>
      {isOpened ? <div className="p-2">{body}</div> : null}
    </div>
  );
};
