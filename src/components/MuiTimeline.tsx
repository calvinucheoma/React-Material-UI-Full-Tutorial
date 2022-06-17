import React from 'react';
import {Timeline,TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent} from '@mui/lab'



const MuiTimeline = () => {

  return (

    <Timeline position='alternate'>

        <TimelineItem>
            <TimelineOppositeContent color='text.success'> 09:30 am </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='success' variant='outlined'/>
                <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
                City A
            </TimelineContent>

        </TimelineItem>

        <TimelineItem>
            <TimelineOppositeContent color='text.success'> 10:30 am </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='success' variant='outlined'/>
                <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
                City B
            </TimelineContent>

        </TimelineItem>

        <TimelineItem>
            <TimelineOppositeContent color='text.success'> 12:30 am </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='success' variant='outlined'/>
            </TimelineSeparator>

            <TimelineContent>
                City C
            </TimelineContent>

        </TimelineItem>


    </Timeline>


  )

};

export default MuiTimeline;