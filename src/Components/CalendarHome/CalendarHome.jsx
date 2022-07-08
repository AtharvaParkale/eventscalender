import React, { useState, useEffect } from 'react'
import './CalendarHome.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
import jan_image from '../../assets/Images/january_image.svg'
import feb_image from '../../assets/Images/feburary_image.svg'
import mar_image from '../../assets/Images/march_image.svg'
import apr_image from '../../assets/Images/april_image.svg'
import may_image from '../../assets/Images/may_image.svg'
import jun_image from '../../assets/Images/june_image.svg'
import jul_image from '../../assets/Images/july_image.svg'
import aug_image from '../../assets/Images/august_image.svg'
import sep_image from '../../assets/Images/september_image.svg'
import oct_image from '../../assets/Images/october_image.svg'
import nov_image from '../../assets/Images/november_image.svg'
import dec_image from '../../assets/Images/december_image.svg'
import no_events from '../../assets/Images/noEvents_image.svg'


function CalendarHome() {
    var currentD = new Date();
    const [selectedDate, setSelectedDate] = useState(currentD);

    const [clickedWeekDay, setClickedWeekDay] = useState("");
    const [clickedMonth, setClickedMonth] = useState("");
    const [clickedDay, setClickedDay] = useState("  ");
    const [selectedImage, setSelectedImage] = useState(jan_image);

    const setClickedDate = (a, b, c, x, y) => {
        console.log(selectedDate);

        const d = new Date(selectedDate);
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        setClickedMonth(month[d.getMonth()]);
        setClickedDay(d.getDate());
        setClickedWeekDay(weekday[d.getDay()]);

        // console.log("Year : "+d.getFullYear());
        // console.log("Month : "+month[d.getMonth()]);
        // console.log("WeekDay : "+weekday[d.getDay()]);
        // console.log("Date : "+d.getDate());

        //Setting home image
        const homeImages = [jan_image, feb_image, mar_image, apr_image, may_image, jun_image,
            jul_image, aug_image, sep_image, oct_image, nov_image, dec_image]
          
            // console.log(homeImages[2]);
            console.log(d.getMonth());
            setSelectedImage(homeImages[d.getMonth()]);

    }

    useEffect(() => {
        setClickedDate(selectedDate, clickedWeekDay, clickedMonth, clickedDay, selectedImage);
    }, [selectedDate, clickedWeekDay, clickedMonth, clickedDay, selectedImage])

    return (
        <div className='calendar_container'>
            <div className="calendar_innercontainer">
                <div className="calendar_innercontainer_sec1">
                    <div className="calender_sec1_one">
                        <div className="calendar_sec1_image_holder">
                            <img src={selectedImage} alt="" />
                        </div>
                    </div>
                    <div className="calender_sec1_two">
                        <Calendar onChange={(value, e) => {
                            setSelectedDate(value);
                            setClickedDate(selectedDate, clickedWeekDay, clickedMonth, clickedDay, selectedImage);
                        }} />
                    </div>
                </div>
                <div className="calendar_innercontainer_sec2">
                    <div className="calender_sec2_one">
                        <h2>{clickedMonth}</h2>
                        <h1>{clickedWeekDay}, {clickedDay}</h1>
                        <p>Events</p>
                    </div>
                    <div className="calender_sec2_two">
                        <div className="no_image_image_holder">
                            <img src={no_events} alt="No events" />
                        </div>
                        <h2 className='noEvents_header'>Hurray!!</h2>
                        <p>There Are No Events Today</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarHome