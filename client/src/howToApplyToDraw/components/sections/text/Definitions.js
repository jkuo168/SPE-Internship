import React from 'react';
import Typography from '@material-ui/core/Typography';

export function Rooms() {
  return(
    <Typography variant="body2">
      <p>A list of rooms available for selection during room draw. As rooms are
      selected they are removed from the list in real time. You can filter the
      list by Residential College, building and rated occupancy, and then sort
      it by square footage, substance-free, zones or gender. Log in to My Housing
      for Undergraduates to view the list. The available rooms list is posted on
      or around April 9th.</p>
    </Typography>
  );
}

export function Weights(){
  return(
    <Typography variant="body2">
      <p>The number of points assigned to a room draw application. Generally a
      higher class year is awarded more points, and an application with greater
      weight results in an earlier room selection date and time. See the Application
      page on this website for more specifics.</p>
    </Typography>
  );
}

export function Dropping(){
  return(
    <Typography variant="body2">
      <p>Joining another group with a later draw time. Dropping down is available
      to individuals or groups who want to draw into a suite that is not fully occupied,
      especially when there are no singles available. It is not available in the Independent
      or Spelman draws.</p>
      <p> If you drop down at your draw time:</p>
      <ul>
        <li key="1">Log in to My Housing, and look for a list of draw times and group numbers.
        Find the number of the group you want to join.</li>
        <li key="2">Each member of the group will receive an email, informing him/her of your request.</li>
        <li key="3">If your request is accepted by at least one group member, your new
        draw time will appear on your welcome page.</li>
        <li key="4">If your request is rejected, you may select a room at your originally
        assigned draw time, if there is a room available.</li>
      </ul>
    </Typography>
  );
}

export function Gender() {
  return (
    <Typography variant="body2">
      <p>In gender-inclusive housing two or more students may share a multiple-occupancy
      dorm room with no regard to the students' sex or gender. Gender Inclusive
      Housing website</p>
    </Typography>
  );
}

export function GroupDraw() {
  return(
    <Typography variant="body2">
      <p>Two to eight students who choose to live together and apply to room
      draw under the proxy of a designated group leader. Gender and class may be
      mixed. Wilson College sophomore groups may include up to ten students.</p>
    </Typography>
  );
}

export function IndependentDefinition() {
  return(
    <Typography variant="body2">
      <p> A student who provides his/her own meals. Independents choose not to
      contract with Dining Services or join an off-campus eating club, and cannot
      participate in Residential College or Upperclass Room Draws as an Indepedent.</p>
    </Typography>
  );
}

export function IndepedentPledge() {
  return (
    <Typography variant="body2">
      <p>The statement Independents agree to electronically when participating
      in an Independent room draw.</p>
      <p><i>“My signature on the Housing/Dining Agreement acknowledges my full
      understanding of the University’s definition of an Independent. I certify
      by my signature that I am aware if I fail to abide by the Pledge, I will
      be referred to the Office of the Dean of Undergraduate students for
      disciplinary action. If I am found in violation of the Independent Pledge,
      I understand the penalty is normally probation. I am aware that the
      probation is a matter of permanent record.”</i></p>
    </Typography>
  );
}

export function Last() {
  return (
    <Typography variant="body2">
      <p> A list of rooms selected in the preceding hour, useful to determine
      if your room choice is still available. Log in to My Housing to view the list.</p>
    </Typography>
  );
}

export function MixedClass() {
  return (
    <Typography variant="body2">
      <p>Two or more students from different classes who choose to apply to a group draw.</p>
    </Typography>
  );
}

export function MyHousing() {
  return (
    <Typography variant="body2">
      <p>The University website where you apply for room draw, select and change
      your rooms and meal plans, and electronically accept your room and meal contracts.
      Use your University NetID to access My Housing. When you log into My Housing,
      you will find a welcome page with information specific to you.</p>
    </Typography>
  );
}

export function Proxy() {
  return (
    <Typography variant="body2">
      <p> Authorizing another student or the Undergraduate Student Housing Office
      to select your room when circumstances prevent you from logging in to My Housing
      at your draw time. Proxies can be designated in My Housing. See the Application
      page on this website for more specifics.</p>
    </Typography>
  );
}

export function RoomImprovement() {
  return (
    <Typography variant="body2">
      <p>Allows juniors and seniors to upgrade their room selection, if they
      participated in Upperclass Room Draw and if they had draw times in the
      bottom quarter of their class. To apply for room improvement, complete the
      application in My Housing. See the Post Room Draw page on this website
      for more details.</p>
    </Typography>
  );
}

export function SpelmanDraw() {
  return (
    <Typography variant="body2">
      <p>The number of applications, breakdowns by class, and weighted ratings
      of the applications for the last five years of the Spelman Draw. Log in to
      My Housing to view these statistics when draw times are posted.</p>
    </Typography>
  );
}

export function UpperclassLimit() {
  return (
    <Typography variant="body2">
      <p>The number of spaces allocated for rising juniors and seniors in each of
      the four-year Residential Colleges.</p>
    </Typography>
  );
}

export function UpperclassLimitOverride() {
  return (
    <Typography variant="body2">
      <p>Allows a group to select a suite or suites that can accommodate the en
      tire group, even though the number of group members exceeds the number of
      available spaces allocated to rising juniors and seniors. After its first
      use, the override is closed to members of the junior or senior classes.</p>
    </Typography>
  );
}

export function WaitList() {
  return(
    <Typography variant="body2">
      <p>A list of students not able to draw rooms, compiled after all available
      rooms are selected during the Sophomore and Upperclass Room Draws. You may
      voluntarily place your name on the wait list rather than select a room,
      although the Undergraduate Student Housing Office recommends that you draw
      a room if there is availability. Log in to My Housing to see the wait list
      application. See Post Room Draw page on this website for more details.</p>
    </Typography>
  )
}
