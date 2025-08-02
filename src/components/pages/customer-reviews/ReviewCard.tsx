import { Card } from '@/components/ui';
import styles from './ReviewCard.module.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
import StarRating from '@/components/ui/StarRating/StarRating';

interface ReviewCardProps {
  serviceType: string;
  user: string;
  rating: number;
  age: number;
  location: string;
  contentTop: string;
  contentBottom: string;
  gender: string;
  style?: React.CSSProperties;
}
const ReviewCard = (data: ReviewCardProps) => {
  const {
    serviceType = 'Not Set',
    user = 'String',
    rating = 5,
    age = 70,
    location = '부산',
    contentTop = 'Heading not provided.',
    contentBottom = 'No Review Provided.',
    gender,
    style, // Destructure style
  } = data;

  const CardHeaderBadge: React.FC<{ str: string }> = ({ str }) => {
    let badgeStyle: string = 'primary';
    switch (str) {
      case '병원동행':
        badgeStyle = 'primary';
        break;
      case '식사도움':
        badgeStyle = 'secondary';
        break;
      case '운동도움':
        badgeStyle = 'tertiary';
        break;
      default:
        badgeStyle = 'primary';
    }
    return (
      <div className={styles.cardHeaderBadge + ' ' + styles[badgeStyle]}>
        {str} 서비스
      </div>
    );
  };
  return (
    <Card variant="outlined" padding="md" className={styles.card} style={style}>
      <Card.Header>
        <CardHeaderBadge str={serviceType} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            alignItems: 'flex-start',
            marginTop: '1rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
            <p className={styles.cardContentUser}>
              {gender === 'male' ||
              gender === 'Male' ||
              gender === '남' ||
              gender === 'M'
                ? '👱‍♂️ '
                : '👵 '}
              {user}
            </p>
            <StarRating step={rating} showNumber={true} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
            <p className={styles.userDetails}>
              (어르신, {age}세, {location},{' '}
              {gender === 'male' ||
              gender === 'Male' ||
              gender === '남' ||
              gender === 'M'
                ? '🙋'
                : '🙋‍♀️'}
              )
            </p>
          </div>
        </div>
      </Card.Header>
      <Card.Content>
        <div className={styles.cardContentContainer}>
          <div className={styles.cardContent}>
            <p className={styles.contentTop}>{contentTop}</p>
            <p className={styles.contentBottom}>{contentBottom}</p>
          </div>
          <div className={styles.cardContentArrow}>
            <MdKeyboardArrowRight size={24} />
          </div>
        </div>
      </Card.Content>
    </Card>
  );
};

export default ReviewCard;
