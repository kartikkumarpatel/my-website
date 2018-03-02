import React, { Component } from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';

class Experience extends Component {
  render() {
    return (
      <div className="experience">
          <h1>Work History</h1>
         
            <Timeline style={{float:"center", width:"50%"}}>
              <TimelineEvent title="4 Square (Family Business)" createdAt="2000 - Current">
                Help to manage the store, be a chekcout operator, cleaning (checkout, shelves, and moping the floor) along with open and close the store.
              </TimelineEvent>

              <TimelineEvent title="Coin Save" createdAt="2009">
                Helped to manage the store by opening and closing the store where the store was run by me throughout the day.
              </TimelineEvent>

              <TimelineEvent title="Tip Top ice cream runner" createdAt="2010 - 2012">
                Summer job of being a runner to deliver ice cream around the coromandle peninsula. Early morning starts and late finishes.
              </TimelineEvent>

              <TimelineEvent title="Noel Leeming" createdAt="10/08/2013 - Current">
                 Senior sales consulatant where key performance indicators (KPI) are always over acheived along with obtaining many awards and recognition in a sales role.
              </TimelineEvent>

               <TimelineEvent title="Spalk" createdAt="20/11/2017 - 09/02/2018">
                Software engineer for re-developing their entire website (Front-end and Back-end) with modern frameworks (React and GoLang).
              </TimelineEvent>


            </Timeline>
      </div>
    );
  }
}

export default Experience;
