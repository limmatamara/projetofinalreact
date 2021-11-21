import style from './Card.module.css';

function Card ({news}) {
  return (
    <ul>
      {news.map((notice, index) => (
        <li key={index}>
          <div className={style.notices}>
            <div className={style.imageNotice}>            
              <img src={notice.multimedia[0].url} alt="Notice_Image" />
            </div>

            <div className={style.noticeNote}>            
              <h2>{notice.title}</h2>
              <span>{notice.byline}</span>
            
              <p>{notice.abstract}</p>
            </div>
          </div>

          

        </li>
        
      ))}
    </ul>
  );
}

export default Card;