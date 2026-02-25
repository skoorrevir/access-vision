import styles from "./ContactWidget.module.css";
import { Mail } from 'lucide-react';

export default function ContactWidget() {
  return (
    <div className={styles.mail}>
      <Mail size={32} strokeWidth={1.5} />
    </div>
  );
}
