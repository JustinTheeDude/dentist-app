import React from "react";

import Weekday from "./Weekday";
import Day from "./Day";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

class Month extends React.PureComponent {
    constructor(props) {
        super(props);
        this.renderWeek = this.renderWeek.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseEnter.bind(this);

        this.state = {
            hoveredDate: null,
        };
    }

    render() {
        const {month, year} = this.props;
        const weekdayMarkup = weekdays.map(weekday => {
            return <Weekday key={weekday} title={weekdayAbrv(weekday)} label={weekday} />;
        });

        const weeks = getWeeksForMonth(month, year);

        const weeksMarkup = weeks.map((week, index) => {
            return (
                <div roll="row" className="Week" key={index}>
                    {week.map(this.renderWeek)}
                </div>
            );
        });

        return (
            <React.Fragment>
                <div className="WeekdayContainer">{weekdayMarkup}</div>
                {weeksMarkup}
            </React.Fragment>
        );
    }

    renderWeek(fullDate, dayIndex) {
        const {onDayClick} = this.props;
        const {hoveredDate} = this.state;

        if (fullDate === null) {
            return <Day key={dayIndex} />;
        }

        const date = fullDate.getDate();
        return (
            <Day
                key={dayIndex}
                fullDate={fullDate}
                onClick={onDayClick}
                selected={date === this.props.date}
                hovering={date === hoveredDate}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            />
        );
    }

    handleMouseEnter(date) {
        this.setState({
            hoveredDate: date,
        });
    }
    handleMouseLeave() {
        this.setState({
            hoveredDate: null,
        });
    }
}

function weekdayAbrv(weekday) {
    return weekday.substring(0, 3);
}

const week_length = 7;
function getWeeksForMonth(month, year) {
    const firstOfMonth = new Date(year, month, 1);
    const firstDayOfWeek = firstOfMonth.getDay();
    const weeks = [[]];

    let currentWeek = weeks[0];
    let currentDate = firstOfMonth;

    for (let i = 0; i < firstDayOfWeek; i++) {
        currentWeek.push(null);
    }

    while (currentDate.getMonth() === month) {
        if (currentWeek.length === week_length) {
            currentWeek = [];
            weeks.push(currentWeek);
        }

        currentWeek.push(currentDate);
        currentDate = new Date(year, month, currentDate.getDate() + 1);
    }

    while (currentWeek.length < 7) {
        currentWeek.push(null);
    }

    return weeks;
}

export default Month;