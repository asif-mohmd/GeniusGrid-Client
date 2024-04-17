interface CreateCourse4Props {
  onPrev: () => void;
  data: string;
}

const CreateCourse4: React.FC<CreateCourse4Props> = ({ onPrev, data }) => {
  return (
    <div>
      Course previeww
      <button
        onClick={onPrev}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3"
      >
        Prev
      </button>
    </div>
  );
};

export default CreateCourse4;
