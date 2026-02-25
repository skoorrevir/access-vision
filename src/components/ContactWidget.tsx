'use client';
import { useState } from 'react';
import styles from "./ContactWidget.module.css";
import { Mail, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      {isOpen && (
        <div className={styles.popup}>
           <div className={styles.popupHeader}>
            <h3>Get in touch</h3>
            <p>We usually respond within a few hours.</p>
          </div>
          <div className={styles.popupContent}>
            <Link className={styles.emailLink} href="mailto:hello@yourdomain.com">
              <Mail size={18} />
              <span>hello@yourdomain.com</span>
              <ArrowRight size={14} style={{ marginLeft: 'auto', opacity: 0.5 }} />
            </Link>
          </div>
        </div>
      )}

      <button 
        className={styles.mail} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle contact menu"
      >
        {isOpen ? <X size={28} /> : <Mail size={28} strokeWidth={2} />}
      </button>
    </div>
  );
}