import { useEffect, useState } from "react";

export const AutoComplete = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [cacheData, setCacheData] = useState({});
  const getData = async () => {
    let data = await fetch(
      `https://www.google.com/complete/search?client=firefox&q=${text}`
    );
    let res = await data.json();
    // console.log(res[1])
    setData(res[1]);
    setCacheData({ ...cacheData, [text]: res[1] });
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      if (cacheData[text]) setData(cacheData[text]);
      else getData();
    }, 600);
    return () => clearTimeout(timer);
  }, [text]);
  return (
    <>
      <div className="m-12">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Something"
          type="search"
          className="p-2 shadow  w-[50%]"
          onFocus={() => setIsVisible(true)}
          onBlur={(e) => {
            console.log(e);
            setIsVisible(false);
          }}
        />

        {data?.length > 0 && isVisible ? (
          <ul className="p-2 border border-black mt-3 w-[50%]">
            {data?.map((ele, ind) => (
              <li
                onClick={() => setText(ele)}
                key={ind}
                className="cursor-pointer"
              >
                {ele}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};
