import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetUpItem.module.css'
import FavoritesContext from '../store/favorite-context';

function MeetUpItem(props){
  const favoriteCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    }
    else {
      favoriteCtx.addFavorites({
        id: props.id,
        title: props.title,
        description: props.description,
        address: props.address,
        });
      }
    }

  return <li className={classes.item}>
      <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>{ itemIsFavorite ? 'remove from favorites' : 'To Favorites'}</button>
        </div>
      </Card>
  </li>
  };

  
export default MeetUpItem;