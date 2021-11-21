import style from './Card.module.css';

function Card ({news}) {
  return (
    <ul>
      {news.map((notice, index) => (
        <li key={index}>
          <div className={style.notices}>
            <div>
              <img src={notice.multimedia[0].url} alt="Notice_Image" />
            </div>

            <div>
              
            </div>
          </div>

          

        </li>
        
      ))}
    </ul>
  );
}

export default Card;