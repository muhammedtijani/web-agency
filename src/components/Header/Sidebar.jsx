import { useGlobalContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/Sidebar";
import sublinks from "../../utils/data";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <aside
        className={`${
          isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
        }`}
      >
        <div className="sidebar">
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
          <div className="sidebar-links">
            {sublinks.map((item, index) => {
              const { links, page } = item;
              return (
                <article key={index}>
                  <h4>{page}</h4>
                  <div className="sidebar-sublinks">
                    {links?.map((link, index) => {
                      const { url, label } = link;
                      return (
                        <a key={index} href={url}>
                          {label}
                        </a>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </aside>
    </Wrapper>
  );
};

export default Sidebar;
