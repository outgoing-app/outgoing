import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment'; // Ensure moment is installed

// styles
const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#C0C0C0',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    fontSize: 13,
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2875C7',
    color: '#FFFFFF',
    padding: 10,
  },
  monthLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  arrow: {
    padding: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  week: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  day: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  dayText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

// DayNames Component
const DayNames = () => {
  return (
    <View style={styles.week}>
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
        <Text style={styles.day} key={dayName}>{dayName}</Text>
      ))}
    </View>
  );
};

// Day Component
const Day = ({ day, select, selected }) => {
  const dayStyle = [
    styles.day,
    day.isToday ? { backgroundColor: '#D3EFFF' } : null,
    day.isCurrentMonth ? null : { color: '#C0C0C0' },
    day.date.isSame(selected) ? { backgroundColor: '#2875C7', color: '#FFFFFF' } : null,
  ];

  return (
    <TouchableOpacity style={dayStyle} onPress={() => select(day)}>
      <Text style={styles.dayText}>{day.number}</Text>
    </TouchableOpacity>
  );
};

// Week Component
const Week = ({ date, month, select, selected }) => {
  let days = [];
  for (let i = 0; i < 7; i++) {
    const day = {
      name: date.format("dd").substring(0, 1),
      number: date.date(),
      isCurrentMonth: date.month() === month.month(),
      isToday: date.isSame(new Date(), "day"),
      date: date.clone(),
    };
    days.push(<Day key={day.date.toString()} day={day} select={select} selected={selected} />);
    date.add(1, "day");
  }

  return <View style={styles.week}>{days}</View>;
};

// Calendar Component
const Calendar = () => {
  const [month, setMonth] = useState(moment());
  const [selected, setSelected] = useState(moment().startOf('day'));

  const previous = () => {
    setMonth(prevMonth => prevMonth.clone().subtract(1, 'month'));
  };

  const next = () => {
    setMonth(prevMonth => prevMonth.clone().add(1, 'month'));
  };

  const select = (day) => {
    setSelected(day.date);
    setMonth(day.date.clone());
  };

  const renderWeeks = () => {
    let weeks = [];
    let done = false;
    let date = month.clone().startOf("month").day("Sunday");
    let monthIndex = date.month();

    while (!done) {
      weeks.push(
        <Week key={date.toString()} date={date.clone()} month={month} select={select} selected={selected} />
      );
      date.add(1, "week");
      done = monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  const renderMonthLabel = () => {
    return <Text style={styles.monthLabel}>{month.format("MMMM YYYY")}</Text>;
  };

  return (
    <View style={styles.calendarContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={previous}>
          <Text style={styles.arrow
