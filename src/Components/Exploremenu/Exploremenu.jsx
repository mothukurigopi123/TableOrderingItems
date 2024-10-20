import React, { useEffect, useRef } from 'react';
import './Exploremenu.css';
import { menu_list } from '../../assets/assets';

const Exploremenu = ({ category, setCategory }) => {
    const scrollRef = useRef(null);
    const scrollInnerRef = useRef(null);
    const directionRef = useRef(1);

    useEffect(() => {
        const scrollInner = scrollInnerRef.current;

        const scroll = () => {
            if (scrollInner) {
                scrollInner.scrollLeft += directionRef.current;

                if (scrollInner.scrollLeft >= scrollInner.scrollWidth - scrollInner.clientWidth) {
                    directionRef.current = -1;
                } else if (scrollInner.scrollLeft <= 0) {
                    directionRef.current = 1;
                }
            }
        };

        const interval = setInterval(scroll, 30);
        return () => clearInterval(interval);
    }, []);

    const handleScroll = (e) => {
        const scrollInner = scrollInnerRef.current;
        scrollInner.scrollLeft += e.deltaY;
    };

    const scrollToItem = (index) => {
        const scrollInner = scrollInnerRef.current;
        const item = scrollInner.children[index];
        if (item) {
            const itemOffset = item.offsetLeft - (scrollInner.clientWidth / 2) + (item.clientWidth / 2);
            scrollInner.scrollTo({
                left: itemOffset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='explore-menu' id='explore-menu' onWheel={handleScroll}>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>
                Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
            </p>
            <div className="explore-menu-list" ref={scrollRef}>
                <div className="explore-menu-list-inner" ref={scrollInnerRef}>
                    {menu_list.map((item, index) => (
                        <div 
                            onClick={() => {
                                setCategory(prev => prev === item.menu_name ? "All" : item.menu_name);
                                scrollToItem(index);
                            }} 
                            key={index} 
                            className={`explore-menu-item ${category === item.menu_name ? "active" : ""}`} 
                        >
                            <div className={`image-container ${category === item.menu_name ? "active" : ""}`}>
                                <img src={item.menu_image} alt={item.menu_name} />
                            </div>
                            <p>{item.menu_name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Exploremenu;
