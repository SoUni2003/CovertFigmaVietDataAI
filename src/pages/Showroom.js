import React, { useState, useRef, useEffect } from 'react';  
import { ArrowRightOutlined } from '@ant-design/icons';

const Showroom = () => {  
    const [activeTab, setActiveTab] = useState('Hà Nội');  
    const [scrollPosition, setScrollPosition] = useState(0);  
    const listRef = useRef(null);  
    const [isDragging, setIsDragging] = useState(false);  

    const showroomData = {  
        'Hà Nội': [  
            { name: 'ABCSport Đông Đa', address: '94 Nguyễn Lương Bằng, Quận Đống Đa, Hà Nội', phone: '(024) 6259 1760' },  
            { name: 'ABCSport Hà Đông', address: '96 Lê Trọng Tấn, Quận Hà Đông, Hà Nội', phone: '(024) 6296 9344' },  
            { name: 'ABCSport Long Biên', address: '575-577 Nguyễn Văn Cừ, Quận Long Biên, Hà Nội', phone: '(024) 6272 2738' },
            { name: 'ABCSport Đông Đa', address: '94 Nguyễn Lương Bằng, Quận Đống Đa, Hà Nội', phone: '(024) 6259 1760' },  
            { name: 'ABCSport Hà Đông', address: '96 Lê Trọng Tấn, Quận Hà Đông, Hà Nội', phone: '(024) 6296 9344' },  
            { name: 'ABCSport Long Biên', address: '575-577 Nguyễn Văn Cừ, Quận Long Biên, Hà Nội', phone: '(024) 6272 2738' },    
        ],  
        'Hồ Chí Minh': [  
            { name: 'ABCSport Hồ Chí Minh', address: '1 Nguyễn Huệ, Quận 1, Hồ Chí Minh', phone: '(028) 1234 5678' },  
        ],  
        'Miền Bắc': [  
            { name: 'ABCSport Hồ Chí Minh', address: '1 Nguyễn Huệ, Quận 1, Hồ Chí Minh', phone: '(028) 1234 5678' },  
        ],  
        'An Giang': [  
            { name: 'ABCSport Hồ Chí Minh', address: '1 Nguyễn Huệ, Quận 1, Hồ Chí Minh', phone: '(028) 1234 5678' },  
        ],  
        'Miền Nam': [  
            { name: 'ABCSport Hồ Chí Minh', address: '1 Nguyễn Huệ, Quận 1, Hồ Chí Minh', phone: '(028) 1234 5678' },  
        ],  
    };  

    const handleScroll = () => {  
        const listHeight = listRef.current.scrollHeight - listRef.current.clientHeight;  
        const percentage = listRef.current.scrollTop / listHeight;  
        setScrollPosition(percentage * (showroomData[activeTab].length - 1)); // Update scroll position  
    };  

    const handleDragStart = (e) => {  
        setIsDragging(true);  
        e.preventDefault(); // Prevent default behavior for the drag event  
    };  

    const handleDrag = (e) => {  
        if (isDragging) {  
            const slider = e.currentTarget.parentElement;  
            const rect = slider.getBoundingClientRect();  
            const offsetY = e.clientY - rect.top;  
            const percentage = Math.max(0, Math.min(1, offsetY / rect.height));  

            // Set list scroll top based on drag  
            const listHeight = listRef.current.scrollHeight - listRef.current.clientHeight;  
            listRef.current.scrollTop = percentage * listHeight;  
            setScrollPosition(percentage * (showroomData[activeTab].length - 1));  
        }  
    };  

    const handleDragEnd = () => {  
        setIsDragging(false);  
    };  

    useEffect(() => {  
        const handleMouseUp = () => {  
            if (isDragging) {  
                handleDragEnd();  
            }  
        };  

        window.addEventListener('mouseup', handleMouseUp);  
        return () => window.removeEventListener('mouseup', handleMouseUp);  
    }, [isDragging]);  

    const handleWheel = (e) => {  
        e.preventDefault(); 
        const delta = e.deltaY;
        listRef.current.scrollTop += delta;
        handleScroll();   
    };  

    return (  
        <div className="bg-gray-100">  
            <div className="mx-[10%] py-20">  
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">  
                    {/* Left Column */}  
                    <div className="flex flex-col space-y-5">  
                        <img src="showroom1.png" alt="Showroom 1" className="w-full h-80 object-contain" />  
                        <img src="showroom2.png" alt="Showroom 2" className="w-full h-80 object-contain" />  
                    </div>  

                    {/* Right Column */}  
                    <div className="text-gray-800">  
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-main opacity-80 leading-snug">120 Showroom <br /> Toàn Quốc</h2>  

                        {/* Tabs */}  
                        <div className="flex space-x-4 mb-4 border-b-2 border-gray-300 mt-6">  
                            {Object.keys(showroomData).map((tab) => (  
                                <button  
                                    key={tab}  
                                    className={`py-2 px-2 text-base font-semibold ${activeTab === tab ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-orange-500 transition duration-300'}`}  
                                    onClick={() => setActiveTab(tab)}  
                                >  
                                    {tab}  
                                </button>  
                            ))}  
                        </div>  

                        {/* Showroom List with Scroll */}  
                        <div className="relative max-h-[368px] overflow-hidden p-4 flex" onWheel={handleWheel}>  
                            <div  
                                ref={listRef}  
                                style={{ maxHeight: '368px' }}  
                                onScroll={handleScroll}  
                                className="overflow-hidden"  
                            >  
                                {showroomData[activeTab].map((item, index) => (  
                                    <div key={index} className="mb-4">  
                                        <h3 className="font-bold text-lg text-main">{item.name}</h3>  
                                        <p className="text-gray-600">{item.address}</p>  
                                        <p className="text-gray-500">{item.phone}</p> 
                                        <p> <span className='text-main underline '>Xem bản đồ </span>(Có chỗ đậu ô tô)</p>
                                    </div>  
                                ))}  
                            </div>  

                            {/* Gradient Overlay */}  
                            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-100 via-gray-100 to-transparent pointer-events-none" />  

                            {/* Custom Scroll Bar */}  
                            <div  
                                className="absolute right-2 top-0 bottom-0 flex items-center cursor-pointer"  
                                onMouseDown={handleDragStart}  
                                onMouseMove={handleDrag}  
                                onMouseLeave={handleDragEnd}  
                            >  
                                <div className="h-full w-1 bg-gray-200 rounded-lg relative">  
                                    <div  
                                        style={{  
                                            transform: `translateY(${scrollPosition * (listRef.current?.scrollHeight / showroomData[activeTab].length)}px)`, // Ensure proper translation  
                                            transition: 'transform 0.1s ease',  
                                        }}  
                                        className="w-4 h-4 bg-gray-500 rounded-full absolute -right-2 transform -translate-x-1/2" // Center the handle  
                                    ></div>  
                                </div>  
                            </div>  
                        </div>  

                        <button className="mt-4 bg-main uppercase rounded-3xl px-6 sm:px-10 py-2 sm:py-3 hover:bg-white hover:text-main text-white flex items-center justify-center text-sm sm:text-base">
                         Xem tất cả
                        <ArrowRightOutlined className="ml-3" />
            </button>
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default Showroom;