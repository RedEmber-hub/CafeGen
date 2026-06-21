import { Logo } from '@/shared/components/Logo';
import styles from './DefaultLayout.module.scss';
import { DefaultLayoutProps } from './DefaultLayout.props';

import { Header } from '@/widgets/Header';

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className={styles.defaultLayout}>
      <header className={styles.header}>
        <Header leading={<Logo />} center={<div>stepper</div>} trailing={<div>step</div>} />
      </header>

      <main className={styles.body}>{children}</main>
    </div>
  );
}
