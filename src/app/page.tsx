import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import TicTacToe from './components/tic-tac-toe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <TicTacToe />
      </div>
    </main>
  )
}
