import React from "react";
import yearsData from "../../../data/years.json";
import * as StyledComponents from "./Calender.style";
import { IconButton } from "@mui/material";
import * as Icons from "./icons";
import WeekEach from "./Week";
import sub from "date-fns/sub";
import setDate from "date-fns/setDate";
import constants from "../../../config/constants";
import days from "./days.static";
import months from "./months.static";
import isAfter from "date-fns/isAfter";

const {
  Wrapper,
  Title,
  MonthSelector,
  Month,
  Year,
  Week,
  Days,
  Day,
  StyledButton,
  YearsSelect,
  YearOption,
  ConfigSelectorContainer,
} = StyledComponents;

const getFirstDayOfMonth = (date, month, year) => {
  const dt = new Date(year, month, date);
  return setDate(dt, 1);
};

const Calender = ({ close, getDates, styleOverrides }) => {
  const currentDate = new Date();

  //   states
  const [month, setMonth] = React.useState(currentDate.getMonth());
  const [year, setYear] = React.useState(currentDate.getFullYear());
  const [showYears, setShowYears] = React.useState(false);

  const first = getFirstDayOfMonth(currentDate.getDate(), month, year);
  const firstDay = sub(first, { days: first.getDay() });
  const [selections, setSelections] = React.useState({
    start: currentDate,
    end: null,
  });
  //   handlers
  const prevMonthHandler = (e) => {
    if (month === 0) {
      setYear((prevState) => prevState - 1);
      return setMonth(11);
    }
    setMonth((prevState) => prevState - 1);
  };

  const nextMonthHandler = (e) => {
    if (month === 11) {
      setYear((prevState) => prevState + 1);
      return setMonth(0);
    }
    setMonth((prevState) => prevState + 1);
  };

  const openYearHandler = (e) => {
    setShowYears((prevState) => !prevState);
  };
  const yearsList = yearsData.Sheet1.map((el) => +el["1980"]);
  const clickDateHandler = (e) => {
    const selectedDate = new Date(e.currentTarget.getAttribute("id"));
    let temp = { ...selections };
    const { start } = temp;
    if (!selections.end) {
      if (isAfter(start, selectedDate)) {
        let tempDate = start;
        temp = {
          start: selectedDate,
          end: tempDate,
        };
      } else {
        temp = {
          end: selectedDate,
          start,
        };
      }
    } else {
      temp = {
        start: selectedDate,
        end: null,
      };
    }
    setSelections(temp);
    setMonth(selectedDate.getMonth());
  };

  return (
    <Wrapper style={styleOverrides}>
      <IconButton
        onClick={(e) => close()}
        sx={{ position: "absolute", top: "10px", right: "10px" }}
      >
        <Icons.Cross />
      </IconButton>
      <Title>{constants.selectDate}</Title>
      <MonthSelector>
        <IconButton onClick={prevMonthHandler}>
          <Icons.Left />
        </IconButton>
        <ConfigSelectorContainer
          style={{ cursor: "pointer" }}
          onClick={openYearHandler}
        >
          <Month>{months[month]}</Month>
          <Year>{year}</Year>
          <IconButton sx={{ padding: 0 }}>
            <Icons.Down />
          </IconButton>
          {showYears && (
            <YearsSelect>
              {yearsList.map((year, index) => (
                <YearOption
                  onClick={(e) => setYear(+e.target.innerText)}
                  key={index}
                >
                  {year}
                </YearOption>
              ))}
            </YearsSelect>
          )}
        </ConfigSelectorContainer>
        <IconButton onClick={nextMonthHandler}>
          <Icons.Right />
        </IconButton>
      </MonthSelector>
      <Days>
        {days.map((day, index) => (
          <Day key={index}>{day}</Day>
        ))}
      </Days>
      {[...new Array(6)].map((_, weekIndex) => {
        return (
          <Week key={weekIndex}>
            {[...new Array(7)].map((_, dateIndex) => {
              return (
                <WeekEach
                  key={dateIndex}
                  clickDateHandler={clickDateHandler}
                  dateIndex={dateIndex}
                  month={month}
                  selections={selections}
                  weekIndex={weekIndex}
                  first={firstDay}
                />
              );
            })}
          </Week>
        );
      })}

      <StyledButton
        onClick={(e) => {
          const { start, end } = selections;
          getDates({
            start: {
              date: start.getDate(),
              month: months[start.getMonth()],
              year: start.getFullYear(),
              monthIndex: start.getMonth(),
            },
            end: end
              ? {
                  date: end.getDate(),
                  month: months[end.getMonth()],
                  year: end.getFullYear(),
                  monthIndex: end.getMonth(),
                }
              : null,
          });
        }}
        variant="contained"
      >
        Save Date
      </StyledButton>
    </Wrapper>
  );
};

export default Calender;

Calender.defaultProps = {
  getDates: (e) => {
    return;
  },
  close: (e) => {
    return;
  },
};
