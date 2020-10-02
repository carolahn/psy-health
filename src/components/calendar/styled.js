import { Calendar } from "react-big-calendar";
import styled from "styled-components";

export const CalendarWrapper = styled(Calendar)`
  margin: 0 auto;
  padding: 0 30px;

  td.rbc-agenda-time-cell {
    max-width: 200px;
  }

  div.rbc-day-slot .rbc-events-container {
    margin-right: 0;
  }

  div.work-day {
    background-color: #4caf4f2b;
  }

  div.rbc-time-gutter .work-day {
    background-color: white;
  }

  @media (max-width: 730px) {
    span.rbc-toolbar-label {
      display: none;
    }

    span.rbc-btn-group {
      margin: 0 10px;
    }

    td.rbc-agenda-time-cell {
      white-space: unset;
      min-width: 100px;
    }
  }

  @media (max-width: 530px) {
    div.rbc-toolbar span:first-child {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 400px) {
    .rbc-agenda-view table.rbc-agenda-table tbody > tr > td {
      padding: 0;
      font-size: 12px;
    }
  }
`;
