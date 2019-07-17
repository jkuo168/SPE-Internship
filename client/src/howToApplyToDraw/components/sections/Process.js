import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Process() {
  return (
    <div>
      <Typography variant="h6">
        <strong>Room Draw Process</strong>
      </Typography>
      <br/>
      <Typography variant="body1">
        <u>When to Apply</u>
      </Typography>
      <Typography variant="body2">
        <p>At the beginning of spring semester, the Student Housing Office will
        send an email to rising students, with dates when room draw guidelines
        will be posted to the Housing and Real Estate Services website. In
        mid-February the Student Housing Office will send another email to let
        you know when to apply for room draw . </p>
      </Typography>
      <Typography variant="body1">
        <u>How to Apply</u>
      </Typography>
      <Typography variant="body2">
        <ul>
          <li>Decide whether to participate in room draw as an individual or with a group.</li>
          <li>Log in to My Housing for Undergraduates to complete and submit your application.</li>
          <li>My Housing for Undergraduates will generate a summary of your application.</li>
          <li>You will receive confirmation of your application in email. If you do not receive confirmation,
          you have not submitted your application properly.</li>
          <li>Draw times are posted in mid-March.</li>
        </ul>
      </Typography>
      <Typography variant="body1">
        <u>Apply as a Group</u>
      </Typography>
      <Typography variant="body2">
        <ul>
          <li>Your group may include from two to eight students, and gender may be mixed.</li>
          <li>Rooms and suites are gender neutral.</li>
          <li>Students who apply in groups may draw singles (if available) but can also draw a suite.</li>
          <li>Sophomore groups applying to Wilson College may include up to ten students.
          If you apply in a 10 person group it indicates your desire to select the
          10 person suite and if it's available you will be required to select this room.</li>
          <li>Your group may include Independents (juniors and seniors in the Independent and Spelman Hall Room Draws).</li>
          <li>A group leader will initiate your application.</li>
          <li>Each group member will receive an email asking for confirmation of his/her acceptance
          to membership in the group. Confirmation from all members is required to complete the
          application and generate a draw time. Only students with completed applications will
          be able to participate in room selection.</li>
          <li>If a member rejects membership in the group, the application will be invalid.
           A new application must be submitted before the deadline.</li>
        </ul>
      </Typography>
      <Typography variant="body1">
        <u>Apply as an Individual</u>
      </Typography>
      <Typography variant="body2">
        <ul>
          <li>You apply alone</li>
          <li>You may be an Independent (juniors and seniors only).</li>
          <li>Single room availability is not guaranteed at your room selection
          time. You may need to use the drop down feature to add yourself to a group during room draw.</li>
        </ul>
      </Typography>
      <Typography variant="body1">
        <u>Apply as an Independent</u>
      </Typography>
      <Typography variant="body2">
        <ul>
          <li>Your group may include from two to eight students, and gender may be mixed.</li>
          <li>Rooms and suites are gender neutral.</li>
          <li>At least 50% of each room must be Independent.</li>
          <li>Juniors and seniors only.</li>
        </ul>
      </Typography>
      <Typography variant="body1">
        <u>Apply as a Mixed Class Group in the Four-Year Residential Collegee, Regular
        Upperclass and Independent Room Draws</u>
      </Typography>
      <Typography variant="body2">
        <ul>
          <li>This is only available to juniors and seniors</li>
          <li>Your group may include up to four students of mixed class.</li>
          <li>At least one member of the older class in your group must reside in each room.</li>
          <li>If the upperclass limit is met before your draw (seperate junior and senior limits),
          all student members' draw times in that group will become null and void. You will need to use one of your other draw times. It is not advisable to form a mixed class group.</li>
          <li>If the sole upperclassman in a room or suite cancels his/her contract before the first day of classes, the underclass members will be moved to a new room or suite.</li>
        </ul>
      </Typography>
      <Typography variant="body1">
        <u>Apply as a Mixed Class Group in the Spelman Hall Room Draw</u>
      </Typography>
      <Typography variant="body2">
        <ul>
          <li>Your group may include four or eight students of mixed class.</li>
          <li>Older group members are not required to live in each suite.</li>
        </ul>
      </Typography>
      <Typography variant="body1">
        <u>How Your Application is Weighted</u>
      </Typography>
      <Typography variant="body2">
        <p>Your application for each draw is weighted with points based on your
        class year and whether you apply as an individual, an Independent or
        as a member of a group. A higher weight allows you an earlier room
        selection date and time. Applications with equal weights are randomly
        ordered by a computer program.</p>
        <i>Individual applications:</i>
        <ul>
          <li>All rising sophomore applications: 1 point</li>
          <li>Individual or group applications:</li>
            <ul>
              <li>Rising juniors: 2 points</li>
              <li>Rising seniors: 3 points</li>
            </ul>
          <li>Independent, individual or group applications for the Independent and Spelman Hall Room Draws:</li>
          <ul>
            <li>Rising juniors: 4 points</li>
            <li>Rising seniors: 5 points</li>
          </ul>
        </ul>
        <i>Group applications</i>
        <p>A weighted average is calculated by adding the points for each member and
        dividing by the number of members in the group. Group members who apply
        to their current Residential College add 0.1 point for each year of
        residence in that college or its paired college.</p>
      </Typography>
    </div>
  )
}
