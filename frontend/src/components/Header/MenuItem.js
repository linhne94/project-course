import React from 'react';


function MenuItem({ text, link, className }) {
  return (
    <li className={className}>
      <a href={link} className="block py-2">{text}</a>
    </li>
  );
}
export default MenuItem;