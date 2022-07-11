import React, { useState, useEffect } from 'react'
import './CalendarHome.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
import { BiPlusCircle } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
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
import PopUp from '../PopUp/PopUp';


function CalendarHome() {
    var currentD = new Date();
    const [selectedDate, setSelectedDate] = useState(currentD);

    const [clickedWeekDay, setClickedWeekDay] = useState("");
    const [clickedMonth, setClickedMonth] = useState("");
    const [clickedDay, setClickedDay] = useState("");
    const [selectedImage, setSelectedImage] = useState(jan_image);

    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [addCalendarButton, setAddCalendarButton] = useState(false);

    const [showEvents, setShowEvents] = useState(true);

    //Event form details
    const [formTitle, setFormTitle] = useState("");
    const [formDescription, setFormDescription] = useState("");
    const [formStartDate, setFormStartDate] = useState("");
    const [formEndDate, setFormEndDate] = useState("");
    const [formTime, setFormTime] = useState("");
    const [formLocation, setFormLocation] = useState("");
    const [formTags, setFormTags] = useState("")
    const [formCalendar, setFormCalendar] = useState("");

    // const [datesToAddClassTo, setDatesToAddClassTo] = useState(["Tue Jul 12 2022 00:00:00 GMT+0530 (India Standard Time)"]);



    const setClickedDate = (a, b, c, x, y) => {
        // console.log(selectedDate);

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
        // console.log(d.getMonth());
        setSelectedImage(homeImages[d.getMonth()]);
    }

    const setFormData = (a, b, c, d, e, f, g, h) => {

    }
    const datesToAddClassTo = ["Tue Jul 12 2022 00:00:00 GMT+0530 (India Standard Time)"];

    useEffect(() => {
        setClickedDate(selectedDate, clickedWeekDay, clickedMonth, clickedDay, selectedImage);
        setFormData(formTitle, formDescription, formStartDate, formEndDate, formTime, formLocation, formTags, formCalendar, datesToAddClassTo);

    },
        [selectedDate, clickedWeekDay, clickedMonth, clickedDay, selectedImage,
            formTitle, formDescription, formStartDate, formEndDate, formTime, formLocation, formTags, formCalendar
            , datesToAddClassTo
        ])


    return (
        <>
            <div className='calendar_container'>
                <div className="calendar_innercontainer">
                    <div className="addEvents_container">
                        <div className="create_button">
                            <button
                                onClick={() => {
                                    setButtonPopUp(true);
                                }}
                            ><BiPlusCircle size={25} />Create</button>
                        </div>
                        <div className="my_calenders">
                            <div className='my_calenders_headers'>
                                <p>Calendars</p>
                            </div>
                            <div className="my_calenders_checkbox_holder">
                                <div>
                                    <input type="checkbox" name="your_calender" />
                                    <label >Your Calendar</label><br />
                                </div>
                                <div>
                                    <input type="checkbox" name="reminders" />
                                    <label >Reminders</label><br />
                                </div>
                                <div>
                                    <input type="checkbox" name="task" />
                                    <label >Tasks</label>
                                </div>
                            </div>
                            <div className='add_calenders my_calenders_headers'>
                                <p>Add Calendars</p>
                                <FaPlus onClick={() => {
                                    setAddCalendarButton(true);
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className="calendar_innercontainer_sec1">
                        <div className="calender_sec1_one">
                            <div className="calendar_sec1_image_holder">
                                <img src={selectedImage} alt="" />
                            </div>
                        </div>
                        <div className="calender_sec1_two">
                            <Calendar
                                onChange={(value, e) => {
                                    setSelectedDate(value);
                                    setClickedDate(selectedDate, clickedWeekDay, clickedMonth, clickedDay, selectedImage);
                                }}

                                tileClassName={
                                    ({ date, view }) => {
                                        if (view === 'month') {
                                            if (datesToAddClassTo[0] === date.toString()) {
                                                console.log("Match found!!!!!");
                                                return 'highlight';
                                            }

                                        }
                                    }
                                }


                            />
                        </div>
                    </div>
                    <div className="calendar_innercontainer_sec2">
                        <div className="calender_sec2_one">
                            <h2>{clickedMonth}</h2>
                            <h1>{clickedWeekDay}, {clickedDay}</h1>
                            <p>Events</p>
                        </div>
                        {
                            showEvents ?
                                <div className="calender_sec2_two">
                                    <div className="no_image_image_holder">
                                        <img src={no_events} alt="No events" />
                                    </div>
                                    <h2 className='noEvents_header'>Hurray!!</h2>
                                    <p>There Are No Events Today</p>
                                </div> :
                                <div className='show-events-container'>
                                    <div className="show-events-inner">
                                        <h2>{formTitle}</h2>
                                        <p>
                                            {formDescription}
                                        </p>
                                        {/* <p><label>Start Date : </label>{formStartDate}</p> */}
                                        <p><label>Due Date : </label>{formEndDate}</p>
                                        <p><label>Time : </label>{formTime}</p>
                                        {/* <p><label>Location : </label>{formLocation}</p> */}
                                        {/* <p><label>Tags : </label>{formTags}</p> */}
                                        {/* <p><label>Calendar : </label>{formCalendar}</p> */}
                                    </div>
                                </div>

                        }
                    </div>

                </div>
            </div>
            <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                <div className="popup-divs popup-date">
                    <label>Select Event Date</label>
                    <input type="date"
                        onChange={(e) => {
                            setFormStartDate(e.target.value);
                        }}
                    />
                </div>
                <div className="popup-divs popup-calendar">
                    <label>Select a Calendar</label>
                    <select onChange={(e) => {
                        setFormCalendar(e.target.value);
                    }}>
                        <option value="Calendar1">Calendar - 1</option>
                        <option value="Calendar2">Calendar - 2</option>
                    </select>
                </div>
                <div className="popup-divs popup-title">
                    <label >Title</label>
                    <input type="text"
                        onChange={(e) => {
                            setFormTitle(e.target.value);
                        }}
                    />
                </div>
                <div className="popup-divs popup-description">
                    <label>Description</label>
                    <textarea
                        onChange={(e) => {
                            setFormDescription(e.target.value);
                        }}>
                    </textarea>
                </div>
                <div className="popup-divs popup-due">
                    <label>Due Date</label>
                    <input type="date"
                        onChange={(e) => {
                            setFormEndDate(e.target.value);
                        }}
                    />
                </div>
                <div className="popup-divs popup-time">
                    <label>Time</label>
                    <input type="time"
                        onChange={(e) => {
                            setFormTime(e.target.value);
                        }}
                    />
                </div>
                <div className="popup-divs popup-location">
                    <label >Location</label>
                    <input type="text"
                        onChange={(e) => {
                            setFormLocation(e.target.value);
                        }}
                    />
                </div>
                <div className="popup-divs popup-tags">
                    <label >Tags</label>
                    <input type="tag"
                        onChange={(e) => {
                            setFormTags(e.target.value);
                        }}
                    />
                </div>


                <div className="popup-divs popup-buttons">
                    <button onClick={() => { setButtonPopUp(false) }} id="form_close">
                        Close
                    </button>
                    <button onClick={() => {
                        setShowEvents(false);
                        setButtonPopUp(false);
                    }}>
                        Submit
                    </button>
                </div>
            </PopUp>
            <PopUp trigger={addCalendarButton} setTrigger={setAddCalendarButton}>
                <div className="popup-calendar-container">
                    <div className="popup-calendar-input">
                        <label >Enter Calendar Name</label>
                        <input type="text" />
                    </div>
                    <button onClick={()=>{
                        setAddCalendarButton(false);
                    }}>
                        Add Calendar
                    </button>
                </div>
            </PopUp>
        </>
    )
}

export default CalendarHome