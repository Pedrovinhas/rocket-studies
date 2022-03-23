import styles from "./styles.module.scss";

export default function Finder() {
  return (
    <section className={styles.finderSection}>
      <button>
        <img src="/logo.svg" alt="" />
        <span> Encontrar filme</span>
      </button>
      <p>
        Clique em "Encontrar filme" que traremos informações de algum filme para
        você assistir hoje.
      </p>
    </section>
  );
}
