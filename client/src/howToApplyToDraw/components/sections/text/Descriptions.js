import React from 'react';
import Typography from '@material-ui/core/Typography';

export function Regular() {
  return (
    <div>
    <Typography variant="body2">
    <p>All rooms in upperclass dormitories, except those chosen during the
    Independent Room Draw and those reserved for special needs students and
    dormitory assistants, are included in regular Upperclass Room Draw.</p>
    <p>Rooms in four-year Residential Colleges are also included when upperclass
    limits for each college have not been met. Residential College rules apply.</p>
    </Typography>
    </div>
  )
}

export function Four() {
  return (
    <Typography variant="body2">
      <p>Rising juniors and seniors may draw for a limited number of rooms in the
      four-year Butler, Mathey and Whitman Residential Colleges. Availability is
      dependent on upperclass limits for each college. You:</p>
      <ul>
        <li key="5">May apply for the draw in more than one Residential College.</li>
        <li key="6">Must apply for the draw in each Residential College separately.</li>
        <li key="7">Must choose a dining contract.</li>
      </ul>
      <p>Group draws may include from two to eight members in any number of either
      gender. Residential College room draw rules apply.</p>
    </Typography>
  )
}

export function Independents() {
  return (
    <Typography variant="body2">
      <p>Selected rooms near kitchens in each upperclass dormitory are set aside
      for Independents. At least half of the residents in each room must be
      Independent and may include any number of either gender.</p>
      <p>As an Independent in an upperclass dormitory, you agree to the Independent
      Pledge on your contract:</p>
      <p><i>“My signature on the Housing/Dining Agreement acknowledges my full
      understanding of the University’s definition of an Independent. I certify
      by my signature that I am aware if I fail to abide by the Pledge, I will
      be referred to the Office of the Dean of Undergraduate students for
      disciplinary action. If I am found in violation of the Independent Pledge,
      I understand the penalty is normally probation. I am aware that the probation
      is a matter of permanent record.”</i></p>
    </Typography>
  );
}

export function Spelman() {
  return(
    <Typography variant="body2">
      <p>Spelman Hall features suites, each with four single bedrooms and a full
      kitchen, and at least half of the students in each suite must be Independent.
      If you draw as a group, your group may include four or eight students in any
      number of either gender.</p>
      <p>As an Independent in Spelman Hall, you agree to the Independent Pledge on
      your contract (see Pledge above at “Option 3: Independent Room Draw.”)</p>
    </Typography>
  );
}

export function Married() {
  return(
    <Typography variant="body2">
      <p>Five four-room suites in Spelman Hall, each with a kitchen, a living
      room, a bedroom and private bath, are available to upperclass married
      students. They are suites 31, 33, 42, 62 and 72. There are no undergraduate
      accommodations for families with children.</p>
    </Typography>
  );
}
