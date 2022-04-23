import MeetupContainer from "../components/meetups/MeetupContainer";
import classes from "../components/meetups/MeetupContainer.module.css";
import { useMeetup } from '../util-hooks/useMeetup';


export default function FavoritesPage() {
  const { MeetupState} = useMeetup()
  const {favoritesMeetups} = MeetupState
  return (
    <section>
      <h1>Favorites Page</h1>
      <div className={classes.list}>
        <MeetupContainer meetups={favoritesMeetups} />
      </div>
    </section>
  );
}
