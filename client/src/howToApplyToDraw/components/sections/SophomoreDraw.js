import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function SophomoreDraw() {
  return (
    <div>
      <Typography variant="h6">
      <strong> Rising Sophomore Room Draw </strong>
      </Typography>
      <br/>
      <Typography variant="body1">
      <u>Rising Sophomore without Advanced Academic Standing</u>
      </Typography>
      <br/>
      <Typography variant="body2">
      The Residential College where you lived as a first-year will again be
      home in your sophomore year. You may select or draw for a different room,
      and you may change your dining contract.
      </Typography>
      <br/>
      <Typography variant="body1">
      <u>Rising Sophomores with Advanced Academic Standing</u>
      </Typography>
      <br/>
      <Typography variant="body2">
      As a rising sophomore with advanced standing, you may draw for:
        <ul>
          <li><strong>The Residential College where you resided as a first-year</strong></li>
          <Typography variant="body2">
          Your application will be weighted according to your original class
          year, not your advanced standing. You may not use your advanced
          standing to improve your status for room draw in any of the four-year
          Residential Colleges.
          </Typography>
          <li><strong>Upperclass dorms and Spelman Hall, or draw as an Independent</strong></li>
          <Typography variant="body2">
          Your application will be weighted with your advanced standing; specific
          policies apply. If you choose this option, please email the Undergraduate
          Student Housing Office of your decision no later than the room draw application
          deadline. Should you rescind your advanced standing at any time after it is
          used for senior year in room draw, you would then revert back to junior
          year for the following room draw.
          </Typography>
        </ul>
      </Typography>
      <Typography variant="body1">
      <u>Meal Plan</u>
      </Typography>
      <br/>
      <Typography variant="body2" >
      You will be prompted to choose a meal plan during the room selection process.
      If your room is in Spelman, Independent, or Upperclass housing, you are
      not required to choose a meal plan.
      </Typography>
    </div>
  )
}
