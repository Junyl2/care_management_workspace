import { Card } from '@/components/ui/Card/Card';
import Link from 'next/link';
import { serviceLinks } from '@/lib/constants';
import Image from 'next/image';
import styles from './ServiceGrid.module.css';

export default function ServicesGrid() {
  return (
    <div className={styles.grid}>
      {serviceLinks.map((service, index) => (
        <Link key={service.path} href={service.path}>
          <Card className={styles.card}>
            <Card.Header>
              <div className={styles.imageWrapper}>
                <Image
                  src={`/images/services/${index + 1}.jpg`}
                  alt={service.name}
                  fill
                  className={styles.image}
                />
              </div>
            </Card.Header>
            <Card.Content>
              <Card.Title>{service.name}</Card.Title>
            </Card.Content>
          </Card>
        </Link>
      ))}
    </div>
  );
}
