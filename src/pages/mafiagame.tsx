import { type NextPage } from 'next';
import Head from 'next/head';

const MafiaGame: NextPage = () => {
    return (
        <>
            <Head>
                <title>The Mafia Game</title>
                <meta name='description' content='The Mafia Game is Among Us, but in Real Life.' />
            </Head>
            <main className='container mx-auto flex min-h-screen flex-col items-center justify-center p-4'>
                <h1 className='text-5xl font-extrabold leader-normal text-gray-700 md:text-[5rem]'>
                    The Mafia Game App
                </h1>
                <p className='text-2xl text-gray-700'>This is Among Us, but IRL. With Technology!</p>
            </main>
        </>
    )
}

export default MafiaGame;