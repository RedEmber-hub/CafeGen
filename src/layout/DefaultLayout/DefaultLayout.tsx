import styles from './DefaultLayout.module.scss';

export default function DefaultLayout({ children }: { children: React.ReactNode | null }) {
  return (
    <div className={styles.defaultLayout}>
      <div className={styles.header}>Header</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
