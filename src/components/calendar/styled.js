import { Modal } from "antd";
import { Calendar } from "react-big-calendar";
import styled from "styled-components";
import "antd/dist/antd.css";

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

  div.rbc-allday-cell {
    display: none;
  }

  @media (max-width: 730px) {
    /* span.rbc-toolbar-label {
      display: none;
    } */

    div.rbc-toolbar {
      flex-direction: column;
    }
    span.rbc-btn-group {
      margin: 10px 10px;
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

  @media (max-width: 430px) {
    .rbc-agenda-view table.rbc-agenda-table tbody > tr > td {
      padding: 0;
      font-size: 14px;
    }
  }

  @media (max-width: 400px) {
    .rbc-agenda-view table.rbc-agenda-table tbody > tr > td {
      padding: 0;
      font-size: 12px;
    }
  }
`;

export const StyledModal = styled(Modal)`
  .ant-modal-title {
    color: #9e9e9e;
  }

  p.modal-confirm-text {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #585858;
  }
  span.modal-confirm-label {
    font-weight: 700;
    color: #70a3ef;
  }
`;
