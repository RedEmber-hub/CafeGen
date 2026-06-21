import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';

export default function Header({ leading, center, trailing }: HeaderProps) {
  return (
    <div className={styles.header}>
      {leading && <div className={styles.leading}>{leading}</div>}
      {center && <div className={styles.center}>{center}</div>}
      {trailing && <div className={styles.trailing}>{trailing}</div>}
    </div>
  );
}
