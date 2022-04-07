import styles from './styles.module.scss';
import Finder from '../Finder'

export default function MovieSection({movie}) {
    const {title, poster_path, overview, original_title} = movie
    const imageLink = `https://image.tmdb.org/t/p/w300/${poster_path}`
    
    return (
        <div key={movie} className={styles.container}>
             
            <section>
                <aside>
                    <img src={imageLink} alt={original_title} />
                </aside>
                <main>
                    <h2>{title}</h2>
                    <p>
                        {overview}
                    </p>
                </main>
            </section>
        </div>
    )

}