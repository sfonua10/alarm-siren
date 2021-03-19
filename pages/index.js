import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const toDOItems = [
    "15 minute Book of Mormon Reference",
    "15 minute Prayer to God",
    "15 Minute Write in Journal",
    "1 Hour Exericse",
    "15 Minute Video Games (Nintendo Switch)"
  ];
  const [isPlaying, setIsPlaying] = useState(true);
  const [counter, setCounter] = useState(15);
  useEffect(() => {
    const audio = new Audio('/alarm_tone.mp3');
    if (isPlaying) {
    audio.play();
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter - 1)
    }, 1000)
  }, [counter])

  return (
    <div className={styles.container}>
      <Head>
        <title>Alarm</title>
        <link rel="icon" href="/spider_senses.png" />
      </Head>

      <main className={styles.main}>
        <p><span>Immediate</span> Task To Do within:</p>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">{counter}</a>
          <h5 className={styles.textSm} href="https://nextjs.org">Seconds</h5>
        </h1>

        <p className={styles.description}>
          {toDOItems[0]}
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Started &rarr;</h3>
          </a>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>State &rarr;</h3>
            <p>Has Changed?</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          You Got This
          <img src="/action_saia.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
