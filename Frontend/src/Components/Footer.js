import style from './Footer.module.css';
import Menu from './Menu';

function Footer () {

  return (
    <div className={style.footer}>
        <Menu/>
    </div>
    
  );
}

export default Footer;