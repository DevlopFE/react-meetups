import { useEffect} from "react";
import MeetupContainer from "../components/meetups/MeetupContainer";
import { useFetch } from "../util-hooks/useFetch";
import classes from "../components/meetups/MeetupContainer.module.css";
import { useMeetup } from '../util-hooks/useMeetup';


export default function AllMeetupsPage() {
  const { MeetupState, setAllMeetups} = useMeetup()
  const {allMeetups} = MeetupState
  const { data } = useFetch({
    url: "/data.json",
  });

useEffect(() => {
if(allMeetups.length === 0 && data){
  setAllMeetups(data)
}
}, [data])


  return (
    <section>
      <h1>All Meetups</h1>
      <div className={classes.list}>
        <MeetupContainer meetups={allMeetups} />
      </div>
    </section>
  );
}
