import React, { useState } from 'react';

const TimeSchedule = ({ currentWeek }) => {
    const hours = Array.from({ length: 11 }, (_, i) => 7 + i); // Mảng giờ từ 7 AM đến 5 PM

    const getDayOfWeek = (date, dayOffset) => {
        const tempDate = new Date(date);
        tempDate.setDate(date.getDate() + dayOffset);
        return tempDate;
    };

    const formatDate = (date) => {
        const options = { day: '2-digit', month: '2-digit' }; // Định dạng DD/MM
        return date.toLocaleDateString('en-GB', options); // 'en-GB' là cài đặt vùng cho định dạng DD/MM
    };    

    return (
        <div className="grid grid-cols-8 gap-2 text-center text-black mt-2">
            {/* Cột giờ */}
            <div>
                {hours.map((hour) => (
                    <div key={hour} className="h-32 flex items-center justify-center text-gray-500">
                        {hour <= 12 ? `${hour} AM` : `${hour - 12} PM`}
                    </div>
                ))}
            </div>
            {/* Cột ngày với ngày và giờ hiển thị dưới tiêu đề */}
            {Array.from({ length: 7 }).map((_, index) => {
                const dayOffset = index === 0 ? 0 : index; // Điều chỉnh offset sao cho ngày bắt đầu từ Chủ nhật
                const dayOfWeek = getDayOfWeek(currentWeek, dayOffset);
                return (
                    <div key={index} className="relative border-r border-b">
                        {/* Hiển thị ngày dưới tiêu đề ngày */}
                        <div className="p-2 text-sm text-gray-600">
                            {`${dayOfWeek.toLocaleString('en-US', { weekday: 'short' })} - ${formatDate(dayOfWeek)}`}
                        </div>
                        {/* Các ô thời gian */}
                        {hours.map((hour) => (
                            <div
                                key={hour}
                                className={`relative border-r border-b h-32 ${hour === 8 && index === 1 ? 'bg-blue-100' : ''} ${hour === 9 && index === 1 ? 'bg-yellow-100' : ''}`}
                            >
                                {/* Nội dung sự kiện nếu có */}
                                {hour === 8 && index === 1 && (
                                    <div className="absolute top-0 left-0 p-2 text-blue-600">
                                        <div>8:00 AM</div>
                                        <div>Anh Quân</div>
                                    </div>
                                )}
                                {hour === 9 && index === 1 && (
                                    <div className="absolute top-0 left-0 p-2 text-yellow-600">
                                        <div>9:00 PM</div>
                                        <div>Xuân Bình</div>
                                        <div>Đánh giá tốt</div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

const CalendarComponent = () => {
    const [currentDate, setCurrentDate] = useState(new Date()); // Lưu trữ ngày hiện tại

    // Hàm tính ngày Chủ nhật của tuần hiện tại
    const getStartOfWeek = (date) => {
        const tempDate = new Date(date);
        const day = tempDate.getDay(); // Lấy ngày trong tuần (0 = Chủ nhật, 1 = Thứ 2, ...)
        const diff = tempDate.getDate() - day; // Tính số ngày cần trừ để về Chủ nhật
        tempDate.setDate(diff);
        return tempDate;
    };

    const changeWeek = (direction) => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + direction * 7); // Điều chỉnh ngày cho tuần trước hoặc tuần sau
        setCurrentDate(getStartOfWeek(newDate)); // Đảm bảo bắt đầu từ Chủ nhật của tuần đó
    };

    const formatDate = (date) => {
        const options = { weekday: 'short', day: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div className="min-h-screen bg-white p-4">
            <div className="flex justify-between items-center mb-4">
                {/* Chuyển nút 'Previous', 'Next' sang bên trái nút 'Today' */}
                <div className="flex space-x-4">
                    <button onClick={() => changeWeek(-1)} className="text-gray-500">Previous</button>
                    {/* Nút Today */}
                    <button onClick={() => setCurrentDate(getStartOfWeek(new Date()))} className="bg-gray-200 px-4 py-2 rounded">Today</button>
                    <button onClick={() => changeWeek(1)} className="text-gray-500">Next</button>
                </div>
                <div className="flex space-x-4">
                            <button className="bg-pink-200 text-pink-600 px-4 py-2 rounded">ĐÁNH DẤU HOÀN THÀNH</button>
                            <button className="bg-pink-200 text-pink-600 px-4 py-2 rounded">GHI CHÚ</button>
                        </div>
            </div>

            <div className="flex justify-center items-center mb-4">
                <div className="text-xl text-gray-700">
                    {formatDate(currentDate)} - {formatDate(new Date(currentDate.setDate(currentDate.getDate() + 6)))}
                </div>
            </div>

            {/* Hàng tiêu đề với các ngày trong tuần */}
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

            <TimeSchedule currentWeek={currentDate} />
        </div>
    );
};

export default CalendarComponent;
