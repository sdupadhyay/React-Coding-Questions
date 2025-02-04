import { useEffect, useRef, useState } from "react";

export const AutoComplete = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [cacheData, setCacheData] = useState({});
  const inputRef = useRef(null);
  const listingRef = useRef(null);
  const getData = async () => {
    let data = await fetch(
      `https://www.google.com/complete/search?client=firefox&q=${text}`
    );
    let res = await data.json();
    // console.log(res[1])
    setData(res[1]);
    setCacheData({ ...cacheData, [text]: res[1] });
  };
  const handleClickOutside = (e)=>{
    if (e.target !== inputRef.current && e.target !== listingRef.current)
      setIsVisible(false);
  }
  useEffect(() => {
    let timer = setTimeout(() => {
      if (cacheData[text]) setData(cacheData[text]);
      else getData();
    }, 600);
    return () => clearTimeout(timer);
  }, [text]);
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click",()=>{})
    
  }, []);
  return (
    <>
      <div className="m-12">
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Something"
          type="search"
          className="p-2 shadow  w-[50%]"
          onFocus={() => setIsVisible(true)}
          // onBlur={(e) => {
          //   console.log(e);
          //   setIsVisible(false);
          // }}
        />

        {data?.length > 0 && isVisible ? (
          <div className="p-2 border border-black mt-3 w-[50%]" ref={listingRef}>
            {data?.map((ele, ind) => (
              <div
                onClick={() => setText(ele)}
                key={ind}
                className="cursor-pointer"
              >
                {ele}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};
