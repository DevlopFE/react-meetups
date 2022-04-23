import { initialMeetup } from "../../context/provider";
import { useMeetup } from "../../util-hooks/useMeetup";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { toast } from 'react-toastify';
import { meetupSchema } from "../../utils/validators";
import { createId } from "../../utils/tools";


export default function NewMeetupForm() {
  const {MeetupState, handleChange, setNewMeetup, addNewMeetupOnList} = useMeetup()
  const {meetup} = MeetupState
  function submitHandler(event) {
    event.preventDefault();
    const isValid = meetupSchema.validate(meetup)
    isValid.then((res) => {
      const meetupWithId = {...meetup}
      meetupWithId.id = createId(MeetupState.allMeetups)
      addNewMeetupOnList(meetupWithId)
      setNewMeetup(initialMeetup)
      toast.success("Meetup added!");
    })
    .catch((err) => {
      toast.error(err.message);
    })
  }

  const handleChangeForm = (event) => {
    const { id, value } = event.target;
    handleChange(id, value);
  };

  return (
    <>
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input value={meetup.title} type="text"  id="title" onChange={(e) => handleChangeForm(e)} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input value={meetup.image} type="url"  id="image" onChange={(e) => handleChangeForm(e)} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input value={meetup.address} type="text"  id="address" onChange={(e) => handleChangeForm(e)} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea value={meetup.description} id="description"  rows="5" onChange={(e) => handleChangeForm(e)}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
    </> 
  );
}
