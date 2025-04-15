import React from "react";

function NavBar() {
  const links = ["#home", "#about", "#projects"];

  const mappedLinks = links.map((mappedLink, index) => {
    return <a href={links[index]} key={index}>{mappedLink}</a>
  })
  return <nav>{/* display an <a> tag for each link here */}
{mappedLinks}
  </nav>;
}

export default NavBar;
