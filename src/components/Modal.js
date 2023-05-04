import { XCircleIcon } from '@heroicons/react/24/outline';


const Modal = ({ closeModal }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex justify-center items-center text-black dark:text-white ">
      <div className="bg-white dark:bg-black p-6 rounded-lg relative text-black dark:text-white w-[50vw] h-[30vw]">
        <button
          className="absolute top-0 right-0 m-4 focus:outline-none"
          onClick={closeModal}
        >
          <XCircleIcon className="w-8 h-8 text-black hover:text-gray-900  text-black dark:text-white" />
        </button>
        <h2 className="text-xl font-semibold mb-2">Movie Title</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie
          nisi eget lectus bibendum, ac posuere est eleifend. Nullam sit amet
          dolor vitae justo imperdiet venenatis.
        </p>
       
      </div>
    </div>
  );
};

export default Modal;