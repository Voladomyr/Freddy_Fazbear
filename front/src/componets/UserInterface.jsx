import React, { useEffect, useState } from "react";
import '../styles/UserInterface.css'
import { Link } from "react-router-dom";

const UserInterface = () =>{

    const [top1, setTop] = useState(322);
    useEffect(()=> {
        if(window.location.pathname === '/UserProfile'){
            setTop(400);
        }
        else if(window.location.pathname === '/Contact'){
            setTop(500);
        }
        else if(window.location.pathname === '/Cart'){
            setTop(378);
        }
        else if (window.location.pathname === '/CartOrder'){
            setTop(378);
        }
        
    }, [])


return(
    <div className="frame-1">
        <div className="rectangle-5"></div>


        <div className="rectangle-4" style={{top: top1 + 'px'}}></div>

        <Link to={'/Cart'}>
        <svg className="user-interface-shopping-cart" width="29" height="29" viewBox="0 0 29 29" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.83333 3.625C4.16599 3.625 3.625 4.16599 3.625 4.83333C3.625 5.50068 4.16599 6.04167 4.83333 6.04167H5.26881C5.8448 6.04167 6.34071 6.44822 6.45368 7.01303L8.28753 16.1823C8.51345 17.3119 9.50529 18.125 10.6573 18.125H21.3942C22.5184 18.125 23.4941 17.3499 23.7483 16.2548L25.3228 9.47236C25.5866 8.33601 24.7238 7.25 23.5572 7.25H8.9656L8.82341 6.53908C8.48453 4.84467 6.99678 3.625 5.26881 3.625H4.83333Z"
                fill="black" />
            <path fillRule="evenodd" clipRule="evenodd"
                d="M13.2917 22.9583C13.2917 24.293 12.2097 25.375 10.875 25.375C9.54035 25.375 8.45837 24.293 8.45837 22.9583C8.45837 21.6236 9.54035 20.5417 10.875 20.5417C12.2097 20.5417 13.2917 21.6236 13.2917 22.9583ZM22.9584 22.9583C22.9584 24.293 21.8764 25.375 20.5417 25.375C19.207 25.375 18.125 24.293 18.125 22.9583C18.125 21.6236 19.207 20.5417 20.5417 20.5417C21.8764 20.5417 22.9584 21.6236 22.9584 22.9583Z"
                fill="black" />
        </svg>
        </Link>
        <Link to={'/'}>
        <svg className="vector" width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.089 6.44415L5.16708 14.8646V23.9528C5.16708 24.1881 5.25779 24.4137 5.41927 24.5801C5.58075 24.7465 5.79976 24.84 6.02812 24.84L12.0587 24.8239C12.2863 24.8227 12.5042 24.7288 12.6647 24.5625C12.8253 24.3962 12.9154 24.1712 12.9154 23.9367V18.6293C12.9154 18.394 13.0061 18.1683 13.1676 18.0019C13.3291 17.8355 13.5481 17.7421 13.7764 17.7421H17.2206C17.449 17.7421 17.668 17.8355 17.8295 18.0019C17.991 18.1683 18.0817 18.394 18.0817 18.6293V23.9328C18.0813 24.0495 18.1033 24.1652 18.1464 24.2732C18.1896 24.3811 18.2529 24.4793 18.3329 24.562C18.4129 24.6446 18.5079 24.7102 18.6126 24.755C18.7172 24.7998 18.8294 24.8228 18.9427 24.8228L24.9711 24.84C25.1995 24.84 25.4185 24.7465 25.58 24.5801C25.7414 24.4137 25.8321 24.1881 25.8321 23.9528V14.8585L15.9124 6.44415C15.7958 6.34729 15.6505 6.29447 15.5007 6.29447C15.3509 6.29447 15.2056 6.34729 15.089 6.44415ZM30.7616 12.1674L26.2627 8.34617V0.665431C26.2627 0.488948 26.1946 0.319693 26.0735 0.1949C25.9524 0.0701079 25.7882 0 25.6169 0H22.6032C22.432 0 22.2677 0.0701079 22.1466 0.1949C22.0255 0.319693 21.9574 0.488948 21.9574 0.665431V4.69185L17.1394 0.607206C16.677 0.215145 16.0968 0.000783737 15.498 0.000783737C14.8992 0.000783737 14.319 0.215145 13.8566 0.607206L0.234365 12.1674C0.168973 12.2231 0.114871 12.2915 0.0751508 12.3688C0.0354308 12.446 0.0108711 12.5306 0.0028749 12.6176C-0.00512131 12.7046 0.00360275 12.7924 0.0285486 12.876C0.0534944 12.9595 0.0941732 13.0372 0.14826 13.1046L1.52055 14.8236C1.57449 14.8912 1.64084 14.9471 1.71579 14.9883C1.79075 15.0294 1.87284 15.0549 1.95736 15.0633C2.04189 15.0717 2.1272 15.0628 2.2084 15.0372C2.28959 15.0116 2.36509 14.9697 2.43057 14.914L15.089 4.17059C15.2056 4.07373 15.3509 4.02091 15.5007 4.02091C15.6505 4.02091 15.7958 4.07373 15.9124 4.17059L28.5714 14.914C28.6367 14.9697 28.7121 15.0116 28.7932 15.0373C28.8743 15.063 28.9595 15.072 29.0439 15.0638C29.1284 15.0556 29.2104 15.0302 29.2854 14.9893C29.3604 14.9484 29.4268 14.8926 29.4808 14.8253L30.8531 13.1062C30.9071 13.0385 30.9477 12.9604 30.9723 12.8765C30.997 12.7926 31.0053 12.7045 30.9968 12.6172C30.9883 12.53 30.9631 12.4453 30.9228 12.3681C30.8824 12.2909 30.8277 12.2227 30.7616 12.1674Z"
                fill="black" />
        </svg>
        </Link>
        <svg  className="vector2" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M24.6582 22.3728L19.79 17.3342C19.5703 17.1068 19.2725 16.9805 18.96 16.9805H18.1641C19.5117 15.1965 20.3125 12.9527 20.3125 10.5117C20.3125 4.70501 15.7666 0 10.1562 0C4.5459 0 0 4.70501 0 10.5117C0 16.3184 4.5459 21.0234 10.1562 21.0234C12.5146 21.0234 14.6826 20.1946 16.4062 18.7998V19.6236C16.4062 19.947 16.5283 20.2553 16.748 20.4827L21.6162 25.5212C22.0752 25.9963 22.8174 25.9963 23.2715 25.5212L24.6533 24.091C25.1123 23.616 25.1123 22.8478 24.6582 22.3728ZM10.1562 16.9805C6.7041 16.9805 3.90625 14.0897 3.90625 10.5117C3.90625 6.93875 6.69922 4.04297 10.1562 4.04297C13.6084 4.04297 16.4062 6.93369 16.4062 10.5117C16.4062 14.0847 13.6133 16.9805 10.1562 16.9805Z"
                fill="black" />
        </svg>
        <Link to = '/Contact'>
        <svg className="user-interface-bell" width="30" height="30" viewBox="0 0 30 30" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 25H17.5C17.5 26.3807 16.3807 27.5 15 27.5C13.6193 27.5 12.5 26.3807 12.5 25Z" fill="black" />
            <path
                d="M16.2554 5H13.7444L12.4615 5.46152C9.48492 6.53228 7.50018 9.35549 7.50018 12.5188V16.6692C7.50018 17.5864 7.06893 18.4502 6.33586 19.0014C3.77664 20.9256 5.1375 25 8.3394 25H21.6609C24.8628 25 26.2236 20.9256 23.6645 19.0014C22.9314 18.4502 22.5002 17.5864 22.5002 16.6693V12.5189C22.5002 9.35554 20.5154 6.53228 17.5387 5.46158L16.2554 5Z"
                fill="black" />
            <path d="M13.75 3.75C13.75 3.05964 14.3096 2.5 15 2.5C15.6904 2.5 16.25 3.05964 16.25 3.75V5H13.75V3.75Z"
                fill="black" />
        </svg>
        </Link>
        <svg className="user-interface-user" width="30" height="30" viewBox="0 0 30 30" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                d="M5 23.75C5 20.2982 7.79822 17.5 11.25 17.5H18.75C22.2018 17.5 25 20.2982 25 23.75C25 25.8211 23.3211 27.5 21.25 27.5H8.75C6.67893 27.5 5 25.8211 5 23.75Z"
                fill="black" />
            <path
                d="M15 2.5C11.5482 2.5 8.75 5.29822 8.75 8.75C8.75 12.2018 11.5482 15 15 15C18.4518 15 21.25 12.2018 21.25 8.75C21.25 5.29822 18.4518 2.5 15 2.5Z"
                fill="black" />
        </svg>
        </div>
        
)
}
export default UserInterface;