
import Image from "next/image";
import Link from 'next/link'


// import './main.css';

// const style: React.CSSProperties = {
//   color: 'blue',
//   background: '#aaccff',
//   padding: '0.5em',
//   fontWeight: 'bolder',
//   borderRadius: '0.5em',
// };

export default function Home() {
  return (
    <div>

    <header className="top">
        <h1 className="top_msg"></h1>
    </header>

    <main>


    {/* <div className="space-y-5 md:space-y-8">
      <div className="space-y-3">
        <h2 className="text-center font-bold md:text-3xl dark:text-black">ようこそ！</h2>

        <p className="text-lg text-black-800 dark:text-black-200">
        こんにちは！私はあなたの名前です。私はあなたの専門分野（例：ウェブデザイナー、フロントエンド開発者、グラフィックデザイナーなど）として活動しています。私のポートフォリオサイトにご訪問いただき、ありがとうございます。 
        </p>
        <h2 className="text-center font-bold md:text-3xl dark:text-black">ポートフォリオ</h2>
      <p className="text-lg text-black-800 dark:text-black-200">ここでは、これまでに手掛けた様々なプロジェクトをご紹介しています。各プロジェクトの詳細をご覧いただき、私のスキルと成果を確認してください。</p>

  
      <h2 className="text-center font-bold md:text-3xl dark:text-black">お問い合わせ</h2>
      <p className="text-lg text-black-800 dark:text-black-200">新しいプロジェクトやコラボレーションのご相談など、お気軽にご連絡ください。皆様と素晴らしいアイデアを共有し、実現することを楽しみにしています。</p>

    </div>
    </div> */}


    <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

  <blockquote className="text-center lg:mx-auto lg:w-3/5">
    <svg className="mx-auto w-20 h-auto sm:w-28 text-gray-800 dark:text-black-200" width="106" height="36" viewBox="0 0 106 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* <path d="M55.4732 9.52669C55.4732 10.6846 54.5258 11.6846 53.3153 11.6846C52.1048 11.6846 51.1574 10.7372 51.1574 9.52669C51.1574 8.31616 52.0521 7.36879 53.3153 7.36879C54.5785 7.47406 55.4732 8.42142 55.4732 9.52669ZM46.6837 13.8425C46.6837 14.053 46.6837 14.3688 46.6837 14.3688C46.6837 14.3688 45.6837 13.053 43.5258 13.053C39.9469 13.053 37.1574 15.7898 37.1574 19.5267C37.1574 23.2635 39.8942 26.0004 43.5258 26.0004C45.7363 26.0004 46.6837 24.6319 46.6837 24.6319V25.2109C46.6837 25.4741 46.8942 25.6846 47.1574 25.6846H49.789V13.3688C49.789 13.3688 47.3679 13.3688 47.1574 13.3688C46.8942 13.3688 46.6837 13.632 46.6837 13.8425ZM46.6837 21.7372C46.21 22.4741 45.21 23.1056 44.0521 23.1056C41.9469 23.1056 40.3679 21.7898 40.3679 19.5793C40.3679 17.3688 41.9995 16.053 44.0521 16.053C45.21 16.053 46.2627 16.6846 46.6837 17.4214V21.7372ZM51.789 13.3688H54.9469V25.6846H51.789V13.3688ZM98.789 13.053C96.6311 13.053 95.6311 14.3688 95.6311 14.3688V7.47406H92.4732V25.7372C92.4732 25.7372 94.8942 25.7372 95.1048 25.7372C95.3679 25.7372 95.5785 25.5267 95.5785 25.2635V24.6846C95.5785 24.6846 96.5785 26.053 98.7364 26.053C102.315 26.053 105.105 23.3162 105.105 19.5793C105.157 15.7898 102.368 13.053 98.789 13.053ZM98.2627 23.053C97.0521 23.053 96.1048 22.4214 95.6311 21.6846V17.2635C96.1048 16.632 97.1574 15.8951 98.2627 15.8951C100.368 15.8951 101.947 17.2109 101.947 19.4214C101.947 21.632 100.368 23.053 98.2627 23.053ZM90.8416 18.4214V25.7898H87.6837V18.7898C87.6837 16.7372 87.0521 15.9477 85.2627 15.9477C84.3153 15.9477 83.3153 16.4214 82.6837 17.1583V25.7372H79.5258V13.3688H81.9995C82.2627 13.3688 82.4732 13.5793 82.4732 13.8425V14.3688C83.3679 13.4214 84.6311 13.053 85.8416 13.053C87.21 13.053 88.3679 13.4214 89.2627 14.2109C90.4206 15.1583 90.8416 16.3162 90.8416 18.4214ZM71.8942 13.053C69.7364 13.053 68.7364 14.3688 68.7364 14.3688V7.47406H65.5785V25.7372C65.5785 25.7372 67.9995 25.7372 68.21 25.7372C68.4732 25.7372 68.6837 25.5267 68.6837 25.2635V24.6846C68.6837 24.6846 69.6837 26.053 71.8416 26.053C75.4206 26.053 78.21 23.3162 78.21 19.5793C78.2627 15.7898 75.4732 13.053 71.8942 13.053ZM71.3679 23.053C70.1574 23.053 69.21 22.4214 68.7364 21.6846V17.2635C69.21 16.632 70.2627 15.8951 71.3679 15.8951C73.4732 15.8951 75.0521 17.2109 75.0521 19.4214C75.0521 21.632 73.4732 23.053 71.3679 23.053ZM62.8416 13.053C63.789 13.053 64.2627 13.2109 64.2627 13.2109V16.1056C64.2627 16.1056 61.6311 15.2109 59.9995 17.1056V25.7372H56.8416V13.3688C56.8416 13.3688 59.2627 13.3688 59.4732 13.3688C59.7364 13.3688 59.9469 13.5793 59.9469 13.8425V14.3688C60.5785 13.6846 61.8942 13.053 62.8416 13.053ZM30.1574 24.6319C29.9995 24.2635 29.8416 23.7898 29.6837 23.4741C29.4206 22.8951 29.1574 22.3162 28.9469 21.7898L28.8942 21.7372C26.6311 16.8425 24.21 11.8425 21.6311 6.89511L21.5258 6.68458C21.2627 6.2109 20.9995 5.68458 20.7363 5.15827C20.4206 4.57932 20.1048 3.94774 19.5785 3.36879C18.5258 2.053 16.9995 1.31616 15.4206 1.31616C13.789 1.31616 12.3153 2.053 11.21 3.26353C10.6837 3.89511 10.3153 4.47406 9.99951 5.10564C9.73635 5.63195 9.47319 6.15827 9.21003 6.63195L9.10477 6.84248C6.57845 11.7372 4.10477 16.7372 1.84161 21.6846L1.78898 21.7372C1.57845 22.2635 1.3153 22.8425 1.05214 23.4214C0.894243 23.7898 0.736348 24.1583 0.578453 24.5793C0.1574 25.7898 -0.000494055 26.9477 0.210032 28.1056C0.578453 30.5793 2.21003 32.632 4.47319 33.5267C5.3153 33.8951 6.21003 34.053 7.10477 34.053C7.36793 34.053 7.68372 34.0004 7.94687 34.0004C9.05214 33.8951 10.1574 33.5267 11.21 32.8951C12.5785 32.1583 13.8416 31.053 15.2627 29.4741C16.6837 31.053 17.9995 32.1056 19.3153 32.8951C20.4206 33.5267 21.5258 33.8951 22.5785 34.0004C22.8416 34.053 23.1574 34.053 23.4206 34.053C24.3153 34.053 25.2627 33.8951 26.0521 33.5267C28.3679 32.632 29.9469 30.5267 30.3153 28.1056C30.6837 26.9477 30.5785 25.8425 30.1574 24.6319ZM15.3679 26.3162C13.5785 24.1056 12.4732 22.0004 12.0521 20.2109C11.8942 19.4741 11.8416 18.7898 11.9469 18.2109C11.9995 17.6846 12.21 17.2109 12.4732 16.8425C13.1048 15.9477 14.1574 15.4214 15.3679 15.4214C16.5785 15.4214 17.6837 15.9477 18.2627 16.8425C18.5258 17.2109 18.7363 17.6846 18.789 18.2109C18.8942 18.7898 18.8416 19.4741 18.6837 20.2109C18.2627 21.9477 17.1048 24.053 15.3679 26.3162ZM28.4206 27.8425C28.21 29.5267 27.0521 31.0004 25.4206 31.6846C24.6311 32.0004 23.789 32.1056 22.9469 32.0004C22.1048 31.8951 21.3153 31.632 20.4732 31.1583C19.3153 30.5267 18.1048 29.4741 16.7363 28.0004C18.8942 25.3688 20.21 22.8951 20.6837 20.7372C20.8942 19.7372 20.9469 18.7898 20.8416 17.9477C20.7363 17.1056 20.4206 16.3688 19.9469 15.7372C18.9469 14.2635 17.21 13.4214 15.3153 13.4214C13.4206 13.4214 11.6837 14.3162 10.6837 15.7372C10.21 16.3688 9.94687 17.1583 9.78898 17.9477C9.68372 18.7898 9.68372 19.7372 9.94687 20.7372C10.4206 22.8951 11.789 25.3688 13.8942 28.0004C12.5258 29.5267 11.3153 30.5267 10.1574 31.1583C9.3153 31.632 8.47319 31.8951 7.68372 32.0004C6.78898 32.1056 5.94687 31.9477 5.21003 31.6846C3.57845 31.053 2.47319 29.5267 2.21003 27.8425C2.10477 27.0004 2.1574 26.2109 2.52582 25.2635C2.63108 24.9477 2.78898 24.632 2.94687 24.2109C3.1574 23.6846 3.42056 23.1056 3.68372 22.5793L3.73635 22.5267C5.99951 17.632 8.42056 12.632 10.9469 7.78985L11.0521 7.57932C11.3153 7.10564 11.5785 6.57932 11.8416 6.053C12.1048 5.52669 12.4206 5.053 12.7363 4.63195C13.4206 3.84248 14.3679 3.42143 15.3679 3.42143C16.3679 3.42143 17.3153 3.84248 17.9995 4.63195C18.3679 5.053 18.6311 5.52669 18.8942 6.053C19.1574 6.52669 19.4206 7.053 19.6837 7.57932L19.789 7.78985C22.2627 12.6846 24.6837 17.6846 26.9469 22.5267V22.5793C27.21 23.1056 27.4206 23.6846 27.6837 24.2109C27.8416 24.5793 27.9995 24.9477 28.1048 25.2635C28.4732 26.1583 28.5785 27.0004 28.4206 27.8425Z" fill="currentColor"></path> */}
    
    </svg>

    <div className="mt-6 lg:mt-10">
      <p className="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800">
        <svg className="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-gray-200 sm:h-24 sm:w-24 dark:text-black-700" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z" fill="currentColor"/>
        </svg>
        <span className="relative z-10 italic text-gray-800 dark:text-black-200">こちらが私のポートフォリオサイトです。私のクリエイティブな旅の軌跡をお楽しみください。</span>
      </p>
    </div>

    <footer className="mt-6">
      <div className="font-semibold text-gray-800 dark:text-black-200">Keishu</div>
      <div className="text-sm text-gray-500 dark:text-black-500">Student | Here</div>
    </footer>
  </blockquote>

</div>






<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
 
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    <div className="group flex flex-col h-full bg-white border border-black-200 shadow-sm rounded-xl dark:bg-black-900 dark:border-black-700 dark:shadow-black-700/70">
      <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
        <svg className="size-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="56" height="56" rx="10" fill="white"/>
          <path d="M20.2819 26.7478C20.1304 26.5495 19.9068 26.4194 19.6599 26.386C19.4131 26.3527 19.1631 26.4188 18.9647 26.5698C18.848 26.6622 18.7538 26.78 18.6894 26.9144L10.6019 43.1439C10.4874 43.3739 10.4686 43.6401 10.5496 43.884C10.6307 44.1279 10.805 44.3295 11.0342 44.4446C11.1681 44.5126 11.3163 44.5478 11.4664 44.5473H22.7343C22.9148 44.5519 23.0927 44.5037 23.2462 44.4084C23.3998 44.3132 23.5223 44.1751 23.5988 44.011C26.0307 38.9724 24.5566 31.3118 20.2819 26.7478Z" fill="url(#paint0_linear_2204_541)"/>
          <path d="M28.2171 11.9791C26.201 15.0912 25.026 18.6755 24.8074 22.3805C24.5889 26.0854 25.3342 29.7837 26.9704 33.1126L32.403 44.0113C32.4833 44.1724 32.6067 44.3079 32.7593 44.4026C32.912 44.4973 33.088 44.5475 33.2675 44.5476H44.5331C44.6602 44.5479 44.7861 44.523 44.9035 44.4743C45.0209 44.4257 45.1276 44.3543 45.2175 44.2642C45.3073 44.1741 45.3785 44.067 45.427 43.9492C45.4755 43.8314 45.5003 43.7052 45.5 43.5777C45.5001 43.4274 45.4659 43.2791 45.3999 43.1441L29.8619 11.9746C29.7881 11.8184 29.6717 11.6864 29.5261 11.594C29.3805 11.5016 29.2118 11.4525 29.0395 11.4525C28.8672 11.4525 28.6984 11.5016 28.5529 11.594C28.4073 11.6864 28.2908 11.8184 28.2171 11.9746V11.9791Z" fill="#2684FF"/>
          <defs>
          <linearGradient id="paint0_linear_2204_541" x1="24.734" y1="29.2284" x2="16.1543" y2="44.0429" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#0052CC"/>
          <stop offset="0.92" stop-color="#2684FF"/>
          </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="p-4 md:p-6">
        <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
          My sample app
        </span>
        <h3 className="text-xl font-semibold text-black-800 dark:text-black-300 dark:hover:text-black">
        Inspirational Quotes
        </h3>
        <p className="mt-3 text-black-500 dark:text-black-500">
        Are you seeking wisdom, motivation, or encouragement? Look no further! Our app, “Inspirational Quotes,” delivers a daily dose of uplifting quotes from renowned thinkers, leaders, and visionaries. 
        </p>
      </div>
      <div className="mt-auto flex border-t border-black-200 divide-x divide-black-200 dark:border-black-700 dark:divide-black-700">
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-black-800 shadow-sm hover:bg-black-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-black-900 dark:border-black-700 dark:text-black dark:hover:bg-black-800" href="application/translation">
          go to app
        </a>
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-black-800 shadow-sm hover:bg-black-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-black-900 dark:border-black-700 dark:text-black dark:hover:bg-black-800" href="#">
          View API
        </a>
      </div>
    </div>

    <div className="group flex flex-col h-full bg-white border border-black-200 shadow-sm rounded-xl dark:bg-black-900 dark:border-black-700 dark:shadow-black-700/70">
      <div className="h-52 flex flex-col justify-center items-center bg-rose-500 rounded-t-xl">
        <svg className="size-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="56" height="56" rx="10" fill="white"/>
          <g clip-path="url(#clip0_2204_541)">
          <path d="M37.0409 28.8697C33.1968 28.8697 30.0811 31.9854 30.0811 35.8288C30.0811 39.6726 33.1968 42.789 37.0409 42.789C40.8843 42.789 44 39.6726 44 35.8288C44 31.9854 40.8843 28.8697 37.0409 28.8697ZM18.9594 28.8701C15.116 28.8704 12 31.9854 12 35.8292C12 39.6726 15.116 42.7886 18.9594 42.7886C22.8032 42.7886 25.9192 39.6726 25.9192 35.8292C25.9192 31.9854 22.8032 28.8701 18.9591 28.8701H18.9594ZM34.9595 20.1704C34.9595 24.0138 31.8438 27.1305 28.0004 27.1305C24.1563 27.1305 21.0406 24.0138 21.0406 20.1704C21.0406 16.3269 24.1563 13.2109 28.0003 13.2109C31.8438 13.2109 34.9591 16.3269 34.9591 20.1704H34.9595Z" fill="url(#paint0_radial_2204_541)"/>
          </g>
          <defs>
          <radialGradient id="paint0_radial_2204_541" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28.0043 29.3944) scale(21.216 19.6102)">
          <stop offset="0%" stop-color="#FFB900"/>
          <stop offset="0.6" stop-color="#F95D8F"/>
          <stop offset="0.999" stop-color="#F95353"/>
          </radialGradient>
          <clipPath id="clip0_2204_541">
          <rect width="32" height="29.5808" fill="white" transform="translate(12 13.2096)"/>
          </clipPath>
          </defs>
        </svg>
      </div>
      <div className="p-4 md:p-6">
        <span className="block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500">
          Asana API
        </span>
        <h3 className="text-xl font-semibold text-black-800 dark:text-black-300 dark:hover:text-black">
          Asana
        </h3>
        <p className="mt-3 text-black-500 dark:text-black-500">
          Track tasks and projects, use agile boards, measure progress.
        </p>
      </div>
      <div className="mt-auto flex border-t border-black-200 divide-x divide-black-200 dark:border-black-700 dark:divide-black-700">
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-black-800 shadow-sm hover:bg-black-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-black-900 dark:border-black-700 dark:text-black dark:hover:bg-black-800" href="#">
          View sample
        </a>
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-black-800 shadow-sm hover:bg-black-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-black-900 dark:border-black-700 dark:text-black dark:hover:bg-black-800" href="#">
          View API
        </a>
      </div>
    </div>

    <div className="group flex flex-col h-full bg-white border border-black-200 shadow-sm rounded-xl dark:bg-black-900 dark:border-black-700 dark:shadow-black-700/70">
      <div className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl">
        <svg className="size-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="56" height="56" rx="10" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7326 11.968C21.9637 11.9693 20.5321 13.4049 20.5334 15.1738C20.5321 16.9427 21.965 18.3782 23.7339 18.3795H26.9345V15.1751C26.9358 13.4062 25.5029 11.9706 23.7326 11.968C23.7339 11.968 23.7339 11.968 23.7326 11.968M23.7326 20.5184H15.2005C13.4316 20.5197 11.9987 21.9553 12 23.7242C11.9974 25.4931 13.4303 26.9286 15.1992 26.9312H23.7326C25.5016 26.9299 26.9345 25.4944 26.9332 23.7255C26.9345 21.9553 25.5016 20.5197 23.7326 20.5184V20.5184Z" fill="#36C5F0"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M44.0001 23.7242C44.0014 21.9553 42.5684 20.5197 40.7995 20.5184C39.0306 20.5197 37.5977 21.9553 37.599 23.7242V26.9312H40.7995C42.5684 26.9299 44.0014 25.4944 44.0001 23.7242ZM35.4666 23.7242V15.1738C35.4679 13.4062 34.0363 11.9706 32.2674 11.968C30.4985 11.9693 29.0656 13.4049 29.0669 15.1738V23.7242C29.0643 25.4931 30.4972 26.9286 32.2661 26.9312C34.035 26.9299 35.4679 25.4944 35.4666 23.7242Z" fill="#2EB67D"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M32.2661 44.0322C34.035 44.0309 35.4679 42.5953 35.4666 40.8264C35.4679 39.0575 34.035 37.622 32.2661 37.6207H29.0656V40.8264C29.0642 42.594 30.4972 44.0295 32.2661 44.0322ZM32.2661 35.4804H40.7995C42.5684 35.4791 44.0013 34.0436 44 32.2747C44.0026 30.5058 42.5697 29.0702 40.8008 29.0676H32.2674C30.4985 29.0689 29.0656 30.5045 29.0669 32.2734C29.0656 34.0436 30.4972 35.4791 32.2661 35.4804V35.4804Z" fill="#ECB22E"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 32.2746C11.9987 34.0435 13.4316 35.479 15.2005 35.4804C16.9694 35.479 18.4024 34.0435 18.401 32.2746V29.0688H15.2005C13.4316 29.0702 11.9987 30.5057 12 32.2746ZM20.5334 32.2746V40.825C20.5308 42.5939 21.9637 44.0295 23.7326 44.0321C25.5016 44.0308 26.9345 42.5952 26.9332 40.8263V32.2772C26.9358 30.5083 25.5029 29.0728 23.7339 29.0702C21.9637 29.0702 20.5321 30.5057 20.5334 32.2746C20.5334 32.2759 20.5334 32.2746 20.5334 32.2746Z" fill="#E01E5A"/>
        </svg>
      </div>
      <div className="p-4 md:p-6">
        <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
          Slack API
        </span>
        <h3 className="text-xl font-semibold text-black-800 dark:text-black-300 dark:hover:text-black">
          Slack
        </h3>
        <p className="mt-3 text-black-500 dark:text-black-500">
          Email collaboration and email service desk made easy.
        </p>
      </div>
      <div className="mt-auto flex border-t border-black-200 divide-x divide-black-200 dark:border-black-700 dark:divide-black-700">
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-black-800 shadow-sm hover:bg-black-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-black-900 dark:border-black-700 dark:text-black dark:hover:bg-black-800" href="#">
          View sample
        </a>
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-black-800 shadow-sm hover:bg-black-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-black-900 dark:border-black-700 dark:text-black dark:hover:bg-black-800" href="#">
          View API
        </a>
      </div>
    </div>
  
  </div>
 
</div>

    </main>

    
    </div>
  );
    }

