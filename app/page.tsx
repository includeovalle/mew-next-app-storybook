'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.scss'
import {RightBrow, LeftBrow} from './components/atoms/button/Button';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className={styles.main}>
      <RightBrow label="this" />
      <LeftBrow label="this not" />
      </main>
  )
}
