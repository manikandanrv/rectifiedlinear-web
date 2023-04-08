import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getFutureEvents } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getFutureEvents()
    .then((newEvents) => setCategories(newEvents))
  }, []);

  return (
    <div className='bg-white shadown-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Upcoming Events
      </h3>  
      {categories.map((category) => (
        <div className='flex-grow ml-4 mb-8'>
            <p className='text-gray-800 font-xs font-semibold'>
              {category.title}
            </p>
            <p className='text-gray-500 text-md'>
            {category.description}
            </p>
            <p className='text-gray-700 text-lg font-italic'>
            On {moment(category.eventDateTime).format('MMM DD, YYYY')} at {moment(category.eventDateTime).format('hh:mm')} hrs
            </p>
        </div>
      ))}
    </div>
  )
}

export default Categories;