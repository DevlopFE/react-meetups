import classes from "./MeetupContainer.module.css";
import MeetupItem from "./MeetupItem";

export default function MeetupContainer({ meetups }) {

    if (!meetups) return <p>Loading...</p>;

  return (
    <ul className={classes.list} data-test='meet-up-container'>
      {
        meetups && meetups.map(item =>  <MeetupItem meetup={item} key={item.id} />)
      }
    </ul>
  );
}
