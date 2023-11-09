import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';


export type PropsCatalogFilmCard = {
  id: number;
  name: string;
  imgSrc: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function CatalogFilmCard({ id, name, imgSrc, onMouseEnter, onMouseLeave }: PropsCatalogFilmCard): JSX.Element {
  return(
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <img
          src={imgSrc}
          alt={name}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film(id)}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default CatalogFilmCard;
