import { useNavigate} from 'react-router-dom'

import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetupPage() {
    const nav = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch('https://react-getting-started-6a2cb-default-rtdb.firebaseio.com/meetup.json', 
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
           nav('/', {replace :true});
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupPage;