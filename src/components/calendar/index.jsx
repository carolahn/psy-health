import moment from "moment";
import React from "react";
import { momentLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarWrapper } from "./styled";

const Calendar = () => {
  moment.locale("en-US");
  const localizer = momentLocalizer(moment);

  var myEventsList = [
    {
      title: "Conference",
      start: new Date(2020, 9, 1),
      end: new Date(2020, 9, 1),
      desc: "Big conference for important people",
    },
    {
      title: "Conference2",
      start: new Date(2020, 9, 1, 17, 0, 0),
      end: new Date(2020, 9, 1, 18, 0, 0),
      desc: "Big conference for important people",
    },
    {
      title: "Meeting",
      start: new Date(2020, 8, 28, 10, 30, 0, 0),
      end: new Date(2020, 8, 28, 12, 30, 0, 0),
      desc: "Pre-meeting meeting, to prepare for the meeting",
    },
    {
      title: "Lunch",
      start: new Date(2020, 9, 1, 6, 0, 0, 0),
      end: new Date(2020, 9, 1, 7, 0, 0, 0),
      desc: "Power lunch",
    },
    {
      title: "Doctor",
      start: new Date(2020, 9, 2, 9, 0, 0, 0),
      end: new Date(2020, 9, 2, 10, 0, 0, 0),
      desc: "Surgery",
    },
  ];

  function onSlotChange(slotInfo) {
    var startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
    var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
    console.log("startTime", startDate); //shows the start time chosen
    console.log("endTime", endDate); //shows the end time chosen
    console.log("startcarol", moment(slotInfo.start.toLocaleString())._d); //pegar sat ou sun por aqui
  }

  function onEventClick(event) {
    console.log(event); //Shows the event details provided while booking
  }

  function eventStyleGetter(event, start, end, isSelected) {
    console.log("event", event);

    if (event.title.includes("Conference")) {
      var backgroundColor = "#ba274a";
    }
    var style = {
      backgroundColor,
      // borderRadius: '0px',
      // opacity: 0.8,
      // color: 'black',
      // border: '0px',
      // display: 'block',
    };
    return {
      style,
    };
  }

  return (
    <CalendarWrapper
      views={["work_week", "agenda"]}
      defaultView="work_week"
      selectable
      onSelectEvent={(event) => onEventClick(event)}
      onSelectSlot={(slotInfo) => onSlotChange(slotInfo)}
      eventPropGetter={eventStyleGetter}
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "auto", maxWidth: 900 }}
      // timeslots={2}
    />
  );
};

export default Calendar;
