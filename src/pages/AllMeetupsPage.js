import MeetupContainer from "../components/meetups/MeetupContainer";
import classes from "../components/meetups/MeetupContainer.module.css";
import { useMeetup } from '../util-hooks/useMeetup';


export default function AllMeetupsPage() {
  const { MeetupState } = useMeetup()
  const {allMeetups} = MeetupState

  return (
    <section>
      <h2>All Meetups</h2>
      <div className={classes.list}>
        <MeetupContainer meetups={allMeetups} />
      </div>
    </section>
  );
}
