import style from './Header.module.css';
import Menu from './Menu';

function Header () {

  return (
    <div className={style.header}>
      <div className={style.trending}>
      <p>TRENDING</p>
      </div>

      <div className={style.topics}>
        <Menu/>
      </div>
    </div>
  );
}

export default Header;