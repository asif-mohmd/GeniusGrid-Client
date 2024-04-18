import React, { useState } from 'react'
import CourseSection from './CourseSection'
import { CreateCourse3Props, ICreateCourse3 } from '../../../../interfaces/ICourseInterface'

const CreateCourse3: React.FC<CreateCourse3Props> = ({ onNext, onPrev, data }) => {

  const [formData, setFormData] = useState<Array<ICreateCourse3>>([{
    videoTitle: '',
    videoURL: '',
    subtitleURL: '',
    videoDescription: '',
    links: [],
  }]);
  return (
    <div>
      <CourseSection onNext={onNext} onPrev={onPrev} setFormData={setFormData} formData={formData} data={data} />
      <button
        onClick={onPrev}
        className="m-2 bg-blue-500 text-white py-1 px-2 rounded"
      >
        Prev
      </button>
      <button
        type="submit"
        className="m-2 bg-blue-500 text-white py-1 px-2 rounded"
      >
        Next
      </button>
    </div>
  )
}

export default CreateCourse3