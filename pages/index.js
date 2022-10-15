import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
	return (

		<div className={styles.container}>
			<h1>Hello</h1>
			<Link href="/people">People</Link>
			<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
		</div>)
}
