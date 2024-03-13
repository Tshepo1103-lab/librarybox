import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Column 1: Image */}
        <div className={styles.column}>
          <div className={styles.image}>
          <Image src="/img/books.png" alt="Stack of books" width={500} height={400} />
          </div>
        </div>

        {/* Column 2: Content */}
        <div className={styles.column}>
          <div className={styles.content}>
            <h1>Welcome Siyakwamukela!</h1>
            <h3>A Library for the community established in 1950</h3>
          </div>
        </div>

        {/* Column 3: Trading Hours */}
        <div className={styles.column}>
          <div className={styles.tradingHours}>
            <h4>Trading Hours</h4>
            <ul>
              <li>Weekdays: 07:30 - 22:00</li>
              <li>Saturday: 08:00 - 15:00</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
