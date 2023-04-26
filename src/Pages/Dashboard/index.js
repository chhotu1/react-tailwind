import React from 'react'

const Dashboard = () => {
  return (
    <div className="p-4 sm:ml-64 dark">
      <div className="p-4">

        <ul className="flex flex-wrap text-sm font-medium text-center  dark:text-gray-100 bg-gray-100">
          <li className="mr-2">
            <a href="#" aria-current="page" className="inline-block p-2 text-gray-600 white  dark:bg-gray-800 dark:text-blue-500  active shadow">Profile</a>
          </li> 
          <li className="mr-2">
            <a href="#" className="inline-block p-2 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Dashboard</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-2 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Settings</a>
          </li>
          <li className="mr-2">
            <a href="#" className="inline-block p-2 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Contacts</a>
          </li>
          
        </ul>

      </div>
    </div>
  )
}

export default Dashboard
