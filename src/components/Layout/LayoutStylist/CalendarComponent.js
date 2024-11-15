import React, { useState } from 'react';

const initialEvents = [
    { date: '10/11', time: '07:00', eventName: 'Sự kiện A', status: 'pending' },
    { date: '10/11', time: '08:00', eventName: 'Sự kiện B', status: 'completed' },
    { date: '10/11', time: '09:00', eventName: 'Sự kiện C', status: 'canceled' },
];

const TimeSchedule = ({ currentWeek, events, markCompleted, cancelEvent, selectedEvent, setSelectedEvent }) => {
    const hours = Array.from({ length: 11 }, (_, i) => 7 + i);

    const getDayOfWeek = (date, dayOffset) => {
        const tempDate = new Date(date);
        tempDate.setDate(date.getDate() + dayOffset);
        return tempDate;
    };

    const formatDate = (date) => date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
    const formatTime = (hour) => (hour < 10 ? `0${hour}:00` : `${hour}:00`);

    return (
        <div className="grid grid-cols-8 gap-2 text-center text-black mt-2">
            <div>
                {hours.map((hour) => (
                    <div key={hour} className="h-32 flex items-center justify-center text-gray-500">
                        {formatTime(hour)}
                    </div>
                ))}
            </div>
            {Array.from({ length: 7 }).map((_, index) => {
                const dayOffset = index;
                const dayOfWeek = getDayOfWeek(currentWeek, dayOffset);
                const formattedDate = formatDate(dayOfWeek);

                return (
                    <div key={index} className="relative border-r border-b">
                        <div className="p-2 text-sm text-gray-600">
                            {`${dayOfWeek.toLocaleString('en-US', { weekday: 'short' })} - ${formattedDate}`}
                        </div>
                        {hours.map((hour) => {
                            const formattedTime = formatTime(hour);
                            const event = events.find(e => e.date === formattedDate && e.time === formattedTime);

                            let bgColor = '';
                            if (event) {
                                if (event.status === 'pending') bgColor = 'bg-blue-100';
                                if (event.status === 'completed') bgColor = 'bg-yellow-100';
                                if (event.status === 'canceled') bgColor = 'bg-red-100';
                            }

                            const isSelected = event && selectedEvent && event.date === selectedEvent.date && event.time === selectedEvent.time;
                            const selectedBorderClass = isSelected ? 'border-2 border-blue-500' : '';

                            const handleClick = () => {
                                if (event && event.status === 'pending') {
                                    setSelectedEvent(event);
                                }
                            };

                            return (
                                <div
                                    key={hour}
                                    className={`relative border-r border-b h-32 ${bgColor} ${selectedBorderClass}`}
                                    onClick={handleClick}
                                >
                                    {event && (
                                        <div className={`absolute top-0 left-0 p-2 ${bgColor === 'bg-yellow-100' ? 'text-yellow-600' : bgColor === 'bg-red-100' ? 'text-red-600' : 'text-blue-600'}`}>
                                            <div>{event.time}</div>
                                            <div>{event.eventName}</div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

const CalendarComponent = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState(initialEvents);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
    const [cancelReason, setCancelReason] = useState("");

    const getStartOfWeek = (date) => {
        const tempDate = new Date(date);
        const day = tempDate.getDay();
        tempDate.setDate(tempDate.getDate() - day);
        return tempDate;
    };

    const markCompleted = () => {
        if (selectedEvent && selectedEvent.status === 'pending') {
            setEvents(events.map(event =>
                event === selectedEvent ? { ...event, status: 'completed' } : event
            ));
            setSelectedEvent(null);
        }
    };

    const openCancelModal = () => {
        setIsCancelModalOpen(true);
    };

    const closeCancelModal = () => {
        setIsCancelModalOpen(false);
        setCancelReason("");
    };

    const confirmCancelEvent = () => {
        if (selectedEvent && selectedEvent.status === 'pending') {
            setEvents(events.map(event =>
                event === selectedEvent ? { ...event, status: 'canceled', reason: cancelReason } : event
            ));
            setSelectedEvent(null);
            closeCancelModal();
        }
    };

    const changeWeek = (direction) => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + direction * 7);
        setCurrentDate(getStartOfWeek(newDate));
    };

    const formatDateRange = () => {
        const startOfWeek = getStartOfWeek(currentDate);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        return `${startOfWeek.toLocaleDateString('en-GB')} - ${endOfWeek.toLocaleDateString('en-GB')}`;
    };

    return (
        <div className="min-h-screen bg-white p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-4">
                    <button onClick={() => changeWeek(-1)} className="text-gray-500">Previous</button>
                    <button onClick={() => setCurrentDate(getStartOfWeek(new Date()))} className="bg-gray-200 px-4 py-2 rounded">Today</button>
                    <button onClick={() => changeWeek(1)} className="text-gray-500">Next</button>
                </div>
                <div className="flex space-x-4">
                    <button onClick={markCompleted} className="bg-green-200 text-green-600 px-4 py-2 rounded" disabled={!selectedEvent}>
                        ĐÁNH DẤU HOÀN THÀNH
                    </button>
                    <button onClick={openCancelModal} className="bg-red-200 text-red-600 px-4 py-2 rounded" disabled={!selectedEvent}>
                        HỦY LỊCH
                    </button>
                </div>
            </div>

            <div className="flex justify-center items-center mb-4">
                <div className="text-xl text-gray-700">{formatDateRange()}</div>
            </div>

            <div className="grid grid-cols-8 gap-2 text-center text-gray-500">
                <div></div>
                <div>SUN</div>
                <div>MON</div>
                <div>TUE</div>
                <div>WED</div>
                <div>THU</div>
                <div>FRI</div>
                <div>SAT</div>
            </div>

            <TimeSchedule
                currentWeek={getStartOfWeek(currentDate)}
                events={events}
                markCompleted={markCompleted}
                selectedEvent={selectedEvent}
                setSelectedEvent={setSelectedEvent}
            />

            {isCancelModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-1/3">
                        <h3 className="text-lg font-semibold mb-4">Lý do hủy</h3>
                        <textarea
                            className="w-full p-2 border rounded mb-4"
                            placeholder="Nhập lý do hủy sự kiện..."
                            value={cancelReason}
                            onChange={(e) => setCancelReason(e.target.value)}
                        />
                        <div className="flex justify-end space-x-4">
                            <button onClick={closeCancelModal} className="bg-gray-300 px-4 py-2 rounded">Đóng</button>
                            <button onClick={confirmCancelEvent} className="bg-red-500 text-white px-4 py-2 rounded">
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalendarComponent;
