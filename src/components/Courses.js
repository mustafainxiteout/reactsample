import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { CheckIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';


function Courses() {
    const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      getCourses();
    }, []);
  
    const getCourses = () => {
      axios.get('http://127.0.0.1:8000/api/courses')
        .then(response => {
          setCourses(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };

  return (
    <div className="bg-white py-12 font-GoogleSans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className='flex justify-end px-8 py-4'>
        <Link to='/' className='rounded-lg text-xs font-bold cursor-none lg:cursor-pointer text-gray-400 border border-gray-400 p-1 ml-2'>Add Course</Link>
        </div>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-wider text-gray-900 sm:text-4xl">Get All your Courses here</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Upgrade your skills by reading courses - Read up now!
          </p>
        </div>
        {courses.map(course => (
        <div key={course.courseID} className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">{course.title}</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
            {course.term} Batch
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Description</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {course.description}
                </li>
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Total Credits</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">{course.credits}</span>
                </p>
                <Link to={`/edit/${course.courseID}/`}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Edit Course
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Courses