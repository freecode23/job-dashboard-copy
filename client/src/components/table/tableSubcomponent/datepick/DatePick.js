import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePick(props) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    onSelect={props.handleDateSelect} //when day is clicked
                    dateFormat="MMM d, yy"
                    />
    );
};