import styles from './DefaultLayout.module.scss';
import { DefaultLayoutProps } from './DefaultLayout.props';

import { Header } from '@/widgets/Header';

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className={styles.defaultLayout}>
      <header className={styles.header}>
        <Header leading={<h1>Logo</h1>} center={<div>stepper</div>} trailing={<div>step</div>} />
      </header>

      <main className={styles.body}>{children}</main>
    </div>
  );
}
