import { useState } from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Frame = ({ bucket }) => {

  const { id, date } = bucket
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function putSrc(id) {
    return `https://drive.google.com/file/d/${id}/preview`
  }

  const formatDate = (date) => {
    let res = new Date(date*1000);
    // return res.toLocaleDateString()
    return res.toLocaleString()
  }
    
  return (
    <div className='bg-white shadow-md rounded-lg py-5 px-5 text-center mx-2 my-2 text-gray-500'>
      <div className='flex justify-between mx-4'>
        <p className='uppercase'>{ id.replace('.mp4', '') }</p>
        <p>{ formatDate(date) }</p>
      </div>

      <video 
              className='mx-3 my-3'
              controls=""
              autoplay="" 
              width="384" 
              height="216" 
              name="media"
            >
              <source src="https://d1wzcuoplm7ums.cloudfront.net/s2865128.mp4" type="video/mp4"/>
      </video>
      

      <div className='flex justify-center mx-3 mt-4'>

        <button 
            className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-0.5 px-2.5 rounded'
            onClick={openModal}
          >
          Ver en pantalla completa
        </button>
      </div>

      <div className='container w-1/2 h-1/2 flex justify-center text-center'>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <div className='text-center'>

          <div className='flex justify-around'>
            <p className='uppercase'>{ id.replace('.mp4', '') }</p>
            <p>{ formatDate(date) }</p>
          </div>

      <video video 
              controls="true" 
              autoplay="" 
              width="854" 
              height="480" 
              name="media"
            >
              <source src="https://d1wzcuoplm7ums.cloudfront.net/s2865128.mp4" type="video/mp4"/>
      </video>
              
            <button 
              className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-5' 
              onClick={closeModal}>Cerrar
            </button>
          
          </div>
        </Modal>
      </div>


    </div>
  )
}

export default Frame