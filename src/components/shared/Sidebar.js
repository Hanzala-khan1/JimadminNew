import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faChevronRight, faCircle, faCloud, faCoins, faCube, faCubes, faDumbbell, faEnvelope, faHome, faIndianRupeeSign, faPhoneVolume, faSquarePlus, faUserClock, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const [isActiveGymsOpen, setIsActiveGymsOpen] = useState(false);
    const [isActiveEarningsOpen, setIsActiveEarningsOpen] = useState(false);
    const role = localStorage.getItem("role");
    const location = useLocation()
    // Define menu items based on user roles
    const menuItems = {
        admin: [
            { label: 'Dashboard', link: '/', icon: faHome },
            {
                label: 'Active Gyms', submenu: [
                    { label: 'Gyms', link: '/gyms' },
                    { label: 'Gym Users', link: '/gym-users' }
                ], icon: faDumbbell
            },
            { label: 'New Gym Request', link: '/new-gym-request', icon: faUserClock },
            { label: 'Add New Gym', link: '/add-new-jim', icon: faSquarePlus },
            { label: 'Packages', link: '/packages', icon: faCubes },
            { label: 'Earnings', link: '/earning', icon: faIndianRupeeSign },
            { label: 'Contact Queries', link: '/contact', icon: faPhoneVolume }
        ],
        jimAdmin: [
            { label: 'Dashboard', link: '/', icon: faHome },
            { label: 'All Members', link: '/all-member', icon: faUsers },
            { label: 'New Requests', link: '/new-request', icon: faUserClock },
            { label: 'Add new Members', link: '/add-new-member', icon: faUserPlus },
            { label: 'Packages', link: '/packages', icon: faCubes },
            { label: 'Earnings', link: '/earning', icon: faIndianRupeeSign },
            { label: 'Contact Queries', link: '/contact', icon: faPhoneVolume }
        ],
        user: [
            {
                label: 'Switch Jim', submenu: [
                    { label: 'Gyms 1', link: '/gyms-1' },
                    { label: 'Gyms 2', link: '/gyms-2' }
                ], icon: faDumbbell
            },
            { label: 'Dashboard', link: '/', icon: faHome },
            { label: 'Packages', link: '/packages', icon: faCubes },
            { label: 'Other Jims', link: '/Other-jims', icon: faCloud }
        ]
    };

    const toggleActiveGyms = (type) => {
        console.log("ttttttttttttttttttttttttttttttttt", type)
        if (type == "Earnings") {
            setIsActiveGymsOpen(!isActiveGymsOpen);
        } else {
            setIsActiveEarningsOpen(!isActiveEarningsOpen);
        }
    };

    const renderMenuItems = (items) => {

        return items.map((item, index) => {
            const isActive = location.pathname === item.link;

            return (
                <li className={`menu-item ${isActive ? 'active' : ''}`} key={index}>
                    {item.submenu ? (
                        <a href="javascript:void(0);" className="menu-link menu-toggle" onClick={() => toggleActiveGyms(item.label)}>
                            <FontAwesomeIcon icon={item.icon} className="menu-icon" />
                            <div className="d-flex justify-content-between w-100">
                                {item.label} {!isActiveGymsOpen ? <FontAwesomeIcon icon={faChevronRight} /> : <FontAwesomeIcon icon={faAngleDown} />}
                            </div>
                        </a>
                    ) : (
                        <Link to={item.link} className="menu-link">
                            <FontAwesomeIcon icon={item.icon} className="menu-icon" />
                            <div>{item.label}</div>
                        </Link>
                    )}
                    {isActiveGymsOpen && item.submenu && (
                        <ul className="">
                            {item.submenu.map((subItem, subIndex) => (
                                <li className="menu-item" key={subIndex}>
                                    <Link to={subItem.link} className="menu-link">
                                        <div> <FontAwesomeIcon icon={faCircle} /> {subItem.label}</div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    {isActiveEarningsOpen && item.submenu && (
                        <ul className="">
                            {item.submenu.map((subItem, subIndex) => (
                                <li className="menu-item" key={subIndex}>
                                    <Link to={subItem.link} className="menu-link">
                                        <div> <FontAwesomeIcon icon={faCircle} /> {subItem.label}</div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            )
        });
    };

    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme pt-4">
            <div className="app-brand demo mb-4">
                <Link to="/" className="app-brand-link">
                    <span className="app-brand-logo demo">
                        <img src="logo.svg" alt="FlexFlow Logo" />
                    </span>
                    <span className="app-brand-text demo menu-text fw-bold">FlexFlow</span>
                </Link>
                {/* Menu toggle button (responsive) */}
                <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
                    <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
                    <i className="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
                </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
                {menuItems[role] && renderMenuItems(menuItems[role])}
            </ul>
        </aside>
    );
};

export default Sidebar;
