import styles from './layout.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { Roboto_Mono } from 'next/font/google';

const roboto_mono = Roboto_Mono({ subsets: ['latin'] })

export default function Layout({children, home}) {
    <div>
        <Head>
            <link rel='icon' href='../public/favicon.ico' />
            <meta
                name='description'
                content='description2'
            />
        </Head>
        <header>
            <Link href={'./registration/loginPage'}>OTHER TEST</Link>
        </header>
        <>{children}
        </>
    </div>
}