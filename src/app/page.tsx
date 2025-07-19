import HomeHero from '@/components/sections/hero/HomeHero';
import { Card } from '@/components/ui';
/* import styles from './page.module.css'; */

export default function HomePage() {
  return (
    <main>
      <HomeHero />

      <section>
        <Card variant="elevated" padding="lg">
          <Card.Header>
            <Card.Title> Welcome to Our Platform</Card.Title>
          </Card.Header>
          <Card.Content>
            <Card.Text>
              Discover services tailored just for you. Our system makes it
              easier to manage everything in one place.
            </Card.Text>
          </Card.Content>
          <Card.Footer>Updated July 2025</Card.Footer>
        </Card>
      </section>
    </main>
  );
}
