import styles from '@/styles/page.module.css';
import Image from 'next/image';

const NavBar = () => {
    return (
        <>
            <div className={styles.grid}>
                <div className={styles.description}>
                    <p>
                        Jain Library &nbsp;
                        <a href="/" rel="noopener noreferrer">
                            By{' '}
                            <Image
                                src="/jjs.png"
                                alt="JJS"
                                className={styles.JJSLogo}
                                width={70}
                                height={70}
                                priority
                            />
                        </a>
                    </p>
                </div>

                <a href="/doc" className={styles.card} rel="noopener noreferrer">
                    <h2>
                        Jain Docs <span>-&gt;</span>
                    </h2>
                    <p>Find in-depth information about Jain Literatures.</p>
                </a>

                <a href="/learn" className={styles.card} rel="noopener noreferrer">
                    <h2>
                        Learn Jainism <span>-&gt;</span>
                    </h2>
                    <p>Learn about Jainism</p>
                </a>

                <a href="/temples" className={styles.card} rel="noopener noreferrer">
                    <h2>
                        Jain Temples <span>-&gt;</span>
                    </h2>
                    <p>Explore the Jain Temples</p>
                </a>

                <a href="/jainism-way" className={styles.card} rel="noopener noreferrer">
                    <h2>
                        A Way To Jainism <span>-&gt;</span>
                    </h2>
                    <p>Instantly start with the ideas of Jainism</p>
                </a>
            </div>
        </>
    );
};

export default NavBar;
