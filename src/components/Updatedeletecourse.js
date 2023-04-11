import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Updatedeletecourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    courseID: '',
    title: '',
    description: '',
    credits: '',
    term: ''
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/courses/${id}`)
      .then(response => {
        const data = response.data[0];
        setFormData({
          courseID: data.courseID,
          title: data.title,
          description: data.description,
          credits: data.credits,
          term: data.term
        });
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/courses/${id}`, formData)
      .then(response => {
        navigate('/courses/');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`http://127.0.0.1:8000/api/courses/${id}`)
      .then(response => {
        navigate('/courses/');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="isolate bg-white px-6 py-12 lg:px-8 font-GoogleSans">
    <div
      className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      aria-hidden="true"
    >
      <div
        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-wider text-gray-900 sm:text-4xl">Update Course</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">
      Unlock your potential by updating courses - Update up now!
      </p>
    </div>
    <form onSubmit={handleUpdate} className="mx-auto mt-8 max-w-xl">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            Course ID
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="courseID"
              onChange={handleChange} 
              value={formData.courseID}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            Credits
          </label>
          <div className="mt-2.5">
            <input
              type="number"
              name="credits"
              onChange={handleChange} 
              value={formData.credits}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            Course Title
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="title"
              onChange={handleChange} 
              value={formData.title}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
            <label htmlFor="term" className="block text-sm font-semibold leading-6 text-gray-900">
              Term
            </label>
            <div className="mt-2.5">
              <select
                id="term"
                name="term"
                value={formData.term} 
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="Spring">Spring</option>
                <option value="Fall">Fall</option>
                <option value="Summer">Summer</option>
              </select>
            </div>
          </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            Description
          </label>
          <div className="mt-2.5">
            <textarea
              name="description"
              onChange={handleChange} 
              value={formData.description}
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mt-10">
        <button
          type="submit"
          className="block w-1/2 rounded-md tracking-widest bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update Course
        </button>
          <button
          className="block w-1/2 rounded-md tracking-widest bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" 
          onClick={handleDelete}>
            Delete Course
            </button>
      </div>
    </form>
  </div>
)
}      

export default Updatedeletecourse;