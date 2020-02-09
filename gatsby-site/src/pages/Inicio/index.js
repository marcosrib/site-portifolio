import React from 'react';
import Header from '../../components/header';
import img from '../../assets/not1.jpeg'

export default function Inicio() {

    const style = { background: '#FC6161' }
    return (
        <>
            <Header />
            <div className='flex-grow mt-8 lg:mt-0 lg:flex lg:h-screen ' >
                <div className='flex lg:w-3/6 items-center justify-center'>
                    <img width='400' height='400' src={img} alt="" />
                </div>
                <div className='flex mt-8 lg:mt-0 lg:flex lg:w-3/6 items-center mr-8 ml-8 .bg-green-900	'>
                    <div className='text-gray-700'>
                        <h1 className='font-bold text-3xl text-gray-700 subpixel-antialiased'>Marcos Ribeiro de Sousa</h1>

                        <p className='font-sans'>Teve inicio na carreira na área de tecnologia em 2014 como estagiário em suporte técnico em uma empresa multinacional.</p><br />
                        <p>Em 2015 teve inicio no suporte técnico em uma startup no segmento de plano de saúde para animais de estimação, onde foi efetivado iniciando em 2017 na área de desenvolvimento de sistema web com a linguagem de programação Java.</p><br />
                        <p>Em 2018 começou a atuar no desenvolvimento web com java e mobile com React Native.</p><br />
                        <p> Atualmente trabalha como desenvolvedor e na horas vagas gerencia um site onde busca passar conhecimento adquirido para pessoas da área de tecnologia e para pessoas iniciantes.</p><br />
                    </div>
                </div>
            </div>

            <div style={style} class=" text-white text-2xl p-8">
                Footer!
            </div>


        </>
    );
}
