import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function Eligibility() {
  return(
    <div>
    <Typography variant="h6">
      <strong>Eligibility</strong>
    </Typography>
    <br/>
    <Typography variant="body1">
    <u>Those that are NOT ALLOWED to Participate in the Room Draw: </u>
      <Typography variant="body2">
        <ul>
          <li>Rising juniors and seniors who will live off campus.</li>
          <li>Rising juniors and seniors who will live in eating clubs.
          Please e-mail your club name and phone number to the Undergraduate
          Student Housing Office at ughsg@princeton.edu.</li>
          <li>Students who will study abroad during the fall semester.</li>
          <li>Students who will be on a leave of absence for the fall semester.</li>
          <li>Students who are assigned in a pre-draw process such as a Living
          Learning Community, Special Needs housing, Resident College Advisor, etc.</li>
        </ul>
      </Typography>
    </Typography>
    <Typography variant="body1">
    <u>Readmitted and Students Returning from Study Abroad:</u>
    </Typography>
    <br/>
    <Typography variant="body2">
    Readmitted and students returning from study abroad may participate in room
    draw if the Dean of the College provides verification of your return by the
    room draw application deadline. You will choose a room and one of three
    dining options: a meal plan contract through Dining Services, membership
    in an eating club or co-op, or to cook on your own as an Independent. For
    more information, visit the the Study Abroad Website.
    </Typography>
    </div>
  )
}
