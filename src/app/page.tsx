import Image from 'next/image'
import styles from '@/styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/adhinath-bhagwan.svg"
          alt="Next.js Logo"
          width={1500}
          height={670}
          priority
        />
      </div>

    </main>
  )
}
