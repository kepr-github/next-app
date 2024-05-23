
import Image from "next/image";
import Link from 'next/link'
import './nuv.css';
import './footer.css';
import './main.css';

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
    <nav className="nav">
    <ul>
    <li><a >Home</a></li>
    <li><a >About</a></li>
    <li><a >App</a></li>
    <li><a >Blog</a></li>
    </ul>
    </nav>
    <header className="top">
        <h1 className="top_msg">Keishu Aruga</h1>
    </header>
    <main>
        <section className="content">
            <h2>websiteの最新情報</h2>
            <p>最新の情報をご案内します。</p>
        </section>
    </main>

    <footer className="footer">
            &copy; 2024 keishu, inc. All Rights Reserved.
    </footer>
    </div>
  );
    }

