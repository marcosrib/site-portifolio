import React from 'react'
import wa from '../assets/whatssap.png'


const BtnWhatssap = () => {
    return (
      <div className='text-black bg-white shadow rounded px-5 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row'>
        <img src={wa} width="100" alt="whatssap" />
        <div className='ml-2'>
          <h3 className='font-bold text-2xl'>Orcar seu projeto</h3>
          <p className='text-xs'>Projeto e orcamento sem compromisso</p>
          <p className='font-bold'>(33) 9999-9999</p>
        </div>
      </div>
    )
  }

  export default BtnWhatssap;