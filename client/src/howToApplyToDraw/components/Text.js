import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import RoomDrawSchedule from './sections/RoomDrawSchedule';
import Eligibility from './sections/Eligibility';
import Process from './sections/Process';
import SophomoreDraw from './sections/SophomoreDraw';
import JuniorSeniorDraw from './sections/JuniorSeniorDraw';
import RoomDrawGlossary from './sections/RoomDrawGlossary';
import Foot from '../../footer/Foot';

export default function Text() {
  return(
    <div>
      <Container style={{width:"90%"}}>
        <br/>
        <RoomDrawSchedule />
        <br/>
        <Divider /> <Divider />
        <br/>
        <Eligibility />
        <br/>
        <Divider /> <Divider />
        <br/>
        <Process />
        <br/>
        <Divider /> <Divider />
        <br/>
        <SophomoreDraw/>
        <br/>
        <Divider /> <Divider />
        <br/>
        <JuniorSeniorDraw/>
        <br/>
        <Divider /> <Divider />
        <br/>
        <RoomDrawGlossary />
        <br/>
      </Container>
      <Foot/>
    </div>
  )
}
