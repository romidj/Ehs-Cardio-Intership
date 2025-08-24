import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faHome, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Sidebar = () => {
  const { serviceName } = useParams(); // dynamic service name

  return (
    <div className='min-h-screen bg-white shadow-r shadow-sm shadow-gray-600 '>
      <div className="flex flex-col items-center">
        <img src={logo} alt="Logo" className="h-12 w-auto pt-2" />
      </div>
      <ul className='text-blue-950 mt-5'>
        <NavLink
          to={`/admin/${serviceName}/dashboard`}
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-2 md:px-2  cursor-pointer ${isActive ? 'bg-red-100 border-l-4 border-red-700' : ''
            }`
          }
        >
          <FontAwesomeIcon icon={faHome} />
          <p className='hidden md:block'>Dashboard</p>
        </NavLink>

        <NavLink
          to={`/admin/${serviceName}/today`}
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-l md:pl-2 pr-6 cursor-pointer ${isActive ? 'bg-red-100 border-l-4 border-red-700' : ''
            }`
          }
        >
          <FontAwesomeIcon icon={faCalendarDay} />
          <p className='hidden md:block'>Rendez-vous</p>
        </NavLink>

        <NavLink
          to={`/admin/${serviceName}/waiting`}
          className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-2 md:px-2  cursor-pointer ${isActive ? 'bg-red-200 border-l-4 border-red-700' : ''
            }`
          }
        >
          <FontAwesomeIcon icon={faHourglassHalf} />
          <p className='hidden md:block'>En attente</p>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
