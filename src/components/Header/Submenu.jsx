import { useEffect, useRef, useState } from "react";
import Wrapper from "../../assets/wrappers/Submenu";
import { useGlobalContext } from "../../context/appContext";

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);
  return (
    <Wrapper>
      <aside
        className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
        ref={container}
      >
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { label, url } = link;
            return (
              <a key={index} href={url}>
                {label}
              </a>
            );
          })}
        </div>
      </aside>
    </Wrapper>
  );
};

export default Submenu;
