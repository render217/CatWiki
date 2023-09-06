import React from "react";
import { Link, useLocation } from "react-router-dom";

export const BreadCrumb = () => {
  const location = useLocation();
  let paths = location.pathname;
  let updatedPath = "Home" + paths;
  let crumbs = updatedPath.split("/").filter((item) => item != "");

  let breadcrumbs = crumbs.map((item, i) => {
    if (item === "Home") {
      return { label: item, url: ["/"].join("/") };
    }
    return { label: item, url: "/" + [...crumbs.slice(1, i + 1)].join("/") };
  });

  return (
    <nav>
      <ul className="flex">{breadcrumbs.map((path, index) => (
        <li key={index} className="flex items-center">
            <Link to={path.url} className="text-cZinnwalditeBrown hover:text-cZinnwalditeBrown/80">{path.label.replace(/%20/g, ' ')}</Link>
            {index < breadcrumbs.length - 1 && (<span className="mx-2">&rsaquo;</span>)}
        </li>
      ))}</ul>
    </nav>
  );
};
