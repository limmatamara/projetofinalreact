import {Link} from "react-router-dom";

function ItemMenu ( {url, Item}) {
  return (
    <>
      <li><Link to = {url} > {Item} </Link></li>
    </>
  );
}

export default ItemMenu;