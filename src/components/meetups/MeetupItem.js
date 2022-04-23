import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useMeetup } from "../../util-hooks/useMeetup";


export default function MeetupItem({meetup}) {
  const { MeetupState, setTotalFavs, addFavoriteMeetups, removeFavoriteMeetups} = useMeetup()

  const handleFav = (meetup) => {
    addFavoriteMeetups(meetup)
    setTotalFavs(MeetupState.favoritesMeetups.length + 1)
  }

  const handleRemoveFav = (meetup) => {
    removeFavoriteMeetups(meetup)
    setTotalFavs(MeetupState.favoritesMeetups.length - 1)
  }

  const checkIfIsFavorite = (meetup) => {
   if (!MeetupState) return false
    const isFavorite = MeetupState.favoritesMeetups.find(m => m.id === meetup.id)
    return isFavorite ? true : false
  }

  return (
    <li className={ classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          {checkIfIsFavorite(meetup) 
          ? <button  className={classes.favBtn} onClick={() =>handleRemoveFav(meetup)}>Remove from favorites</button>
          : <button  className={classes.noFavBtn} onClick={() =>handleFav(meetup)}>Add to favorites</button>
          }
        </div>
      </Card>
    </li>
  );
}
