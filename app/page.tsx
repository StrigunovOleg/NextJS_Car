import Header from './header'
import Footer from './footer'
import Slider from './slider'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Header />
      {/* WELCOME */}
      <div>
        <h1 className="text-center mt-8 mb-4 text-4xl font-extrabold leading-normal tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          ЗАКАЖИ СВОЙ  <span className="text-blue-700 dark:text-colorSite">АВТОМОБИЛЬ</span>
          <br />
          УЖЕ СЕЙЧАС
        </h1>
        <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Покупка и доставка автомобилей из Китая
        </p>
      </div>
      <main className="container xl mx-auto">
        {/* CARDS */}
        <div className='p-4 flex w-full flex-col md:flex-row gap-6'>
          {/* genearal card */}
          <Link href="./used" className='w-3/5 shrink-0 bg-gray-200 p-6 rounded-lg'>
            <div className='flex items-center justify-between'>
              <h4 className="text-2xl font-bold dark:text-black">
                ВЫБРАТЬ ПОДДЕРЖАНЫЙ АВТОМОБИЛЬ
              </h4>
              <svg className="w-5 h-5 text-black dark:text-black arrow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
            </div>
            <img className="h-auto max-w-full" src="https://lrxqrmfzyehktopsnyot.supabase.co/storage/v1/object/public/core/main_page/bu.png" alt="ПОДДЕРЖАНЫЕ АВТОМОБИЛИ"></img>
          </Link>
          {/* subs cards */}
          <div className='flex gap-4 flex-col w-full'>
            {/* new cars */}
            <div className="rounded-lg h-1/2 w-full bg-[url('https://lrxqrmfzyehktopsnyot.supabase.co/storage/v1/object/public/core/main_page/Resaize-110-min.jpg')] bg-cover bg-center p-4">
              <h5 className="text-xl font-bold dark:text-white">
                НОВЫЕ МАШИНЫ
              </h5>
            </div>
            {/* transpotr */}
            <div className="rounded-lg h-1/2 w-full bg-[url('https://lrxqrmfzyehktopsnyot.supabase.co/storage/v1/object/public/core/main_page/technic.jpg')] bg-cover bg-center p-4">
              <h5 className="text-xl font-bold dark:text-white">
                ТЕХНИКА
              </h5>
            </div>
          </div>
        </div>

        {/* SLIDER */}
        <div className='p-4'>
          <h1 className="text-center mt-8 text-4xl font-extrabold leading-none tracking-tight text-black md:text-4xl lg:text-5xl dark:text-black mb-10">
            ЛИДЕРЫ ПРОДАЖ
          </h1>
          <Slider />
          <div className='text-center mt-10'>
            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              СМОТРЕТЬ ВСЁ
            </button>
          </div>
        </div>

        {/* ABOUT US */}
        <div className='p-4 mb-10'>
          <div className='container xl mx-auto bg-gray-200 rounded-2xl flex '>
            <div className='p-8'>
              <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-black md:text-2xl lg:text-4xl dark:text-black mb-10">
                О НАС
              </h1>
              <p className="text-2xl text-gray-900 dark:text-black mb-10">
                Мы - динамичная китайская компания, которая уже много лет успешно сотрудничает с Россией, предоставляя высококачественные автомобили для наших доверенных клиентов. Наша репутация прочно укреплена, и это основание, по которому нас выбирают снова и снова.
              </p>
              <button type="button" className="text-white bg-colorSite hover:opacity-90 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-colorSite dark:hover:opacity-90 focus:outline-none dark:focus:ring-blue-800">
                УЗНАТЬ БОЛЬШЕ
              </button>
            </div>
            <div>
              <img className='max-w-xs' src="https://lrxqrmfzyehktopsnyot.supabase.co/storage/v1/object/public/employees/person.png" alt="person" />
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className='p-4 mb-20'>
          <div className='flex bg-colorSite rounded-2xl p-8 items-center'>
            <div className='text-center max-w-3xl flex flex-col justify-center items-center'>
              <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-black md:text-2xl lg:text-5xl dark:text-white mb-10">
                Пора сесть за новый автомобиль
              </h1>
              <img className='max-w-md' src="https://lrxqrmfzyehktopsnyot.supabase.co/storage/v1/object/public/core/main_page/Changan.png" alt="order" />
            </div>
            <form className='flex flex-col max-w-xl'>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  ВАШЕ ИМЯ
                </label>
                <input type="text" id="text" className="mb-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  ВАША ПОЧТА
                </label>
                <input type="email" id="email" className="mb-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  НОМЕР ТЕЛЕФОНА
                </label>
                <input type="phone" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />

              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-black hover:underline dark:text-black">terms and conditions</a></label>
              </div>
              <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">ОСТАВИТЬ ЗАЯВКУ</button>
            </form>
          </div>
        </div>

        {/* <Link className='text-gray-500' href="./about">о нас</Link> */}
      </main>
      <Footer />
    </>
  )
}
