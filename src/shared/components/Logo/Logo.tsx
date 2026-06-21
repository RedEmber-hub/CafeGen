import styles from './Logo.module.scss';

import { Coffee } from 'lucide-react';
import { useWindowWidth } from '@/shared/hooks/useWindowWidth';

export default function Logo() {
  const { isMobile } = useWindowWidth();

  return (
    <div className={styles.logo}>
      <div className={styles.logoImage}>
        <Coffee size={14} color="white" />
      </div>

      <div className={styles.logoText}>{!isMobile && <span>CaféGen</span>}</div>

      <div className={styles.logoTag}>
        <span>BETA</span>
      </div>
    </div>
  );
}
