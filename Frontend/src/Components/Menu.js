import ItemMenu from "./ItemMenu";

function Menu () {
  return (
    <nav>
      <ul>
        <ItemMenu Item="Home" url="/"/> |
        <ItemMenu Item="Health" url="/Health"/> |
        <ItemMenu Item="Politic" url="/Politic"/> |
        <ItemMenu Item="Sciend and Technology" url="/ScienceAndTechnology"/> |
        <ItemMenu Item="World" url="/World"/>
      </ul>
    </nav>
  );
}

export default Menu;