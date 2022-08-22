import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Nav } from 'Shared'
import {
  Hero,
  Stats,
  Brands, 
} from 'Index'

export default function Home() {
  return <div>

    <Nav />
    <Hero />
    <Stats />
    <Brands />

  </div>

}
