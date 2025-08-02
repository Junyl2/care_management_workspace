'use client';
import React, { useState } from 'react';
import Comment from '@/components/pages/customer-reviews/Comment';
import styles from './CommentSection.module.css';
import { Button } from '@/components/ui';
import Select from '@/components/ui/Select/Select';
import SampleImage from '../../../../public/assets/images/banners/home-section-hero2.png';
import { CommentProps } from '@/types/reviews';
import { useRouter } from 'next/navigation';

const buttonList = [
  { name: 'all', label: '전체' },
  { name: 'hospital-accompaniment', label: '병원동행' },
  { name: 'meal-assistance', label: '식사도움' },
  { name: 'exercise-assistance', label: '운동도움' },
  { name: 'bathing-assistance', label: '목욕도움' },
  { name: 'housekeeping', label: '가사도움' },
];

const selectList = [
  { name: 'recommended', label: '추천순' },
  { name: 'newest', label: '최신순' },
  { name: 'oldest', label: '오래된' },
];

const commentsData: CommentProps[] = [
  {
    id: '1',
    DateCreated: '2025-06-30T10:00:00Z',
    AuthorName: '김*수',
    UserProfileImage: 'https://via.placeholder.com/150',
    Content:
      '평소 부모님 혼자 병원에 다녀오시면 몸도 마음도 많이 힘들어하셨어요. 접수부터 진료까지 혼자 처리하시느라 많이 지치셨고, 의사 선생님께 꼭 여쭤봐야 할 것도 빠뜨리기 일쑤였거든요. 이번엔 돌봄대장 병원동행 서비스를 이용해봤는데, 처음부터 끝까지 꼼꼼하게 챙겨주셔서 정말 든든했습니다. 보호자 입장에서 함께 가지 못하는 게 늘 걱정이었는데, 친절하게 안내도 해주시고, 의사 선생님 말씀도 잘 전달해주셔서 안심할 수 있었어요. 약까지 챙겨주시고, 저도 참 감사한 마음이 들었습니다. 앞으로도 자주 이용하게 될 것 같아요.',
    ServiceType: '병원동행',
    Rating: 5,
    Age: 30,
    Images: [
      SampleImage.src,
      SampleImage.src,
      SampleImage.src,
      SampleImage.src,
      SampleImage.src,
      SampleImage.src,
    ],
    Location: 'Seoul',
    Gender: 'male',
    Comments: [],
    ContentTitle: '맘편히 이용한 최고의 서비스예요.',
  },
  {
    id: '2',
    DateCreated: '2025-06-30T10:00:00Z',
    AuthorName: '김*수',
    Gender: 'female',
    ContentTitle: '맘편히 이용한 최고의 서비스예요.',
    UserProfileImage: 'https://via.placeholder.com/150',
    Images: [SampleImage.src, SampleImage.src],
    Content:
      '평소 부모님 혼자 병원에 다녀오시면 몸도 마음도 많이 힘들어하셨어요. 접수부터 진료까지 혼자 처리하시느라 많이 지치셨고, 의사 선생님께 꼭 여쭤봐야 할 것도 빠뜨리기 일쑤였거든요. 이번엔 돌봄대장 병원동행 서비스를 이용해봤는데, 처음부터 끝까지 꼼꼼하게 챙겨주셔서 정말 든든했습니다. 보호자 입장에서 함께 가지 못하는 게 늘 걱정이었는데, 친절하게 안내도 해주시고, 의사 선생님 말씀도 잘 전달해주셔서 안심할 수 있었어요. 약까지 챙겨주시고, 저도 참 감사한 마음이 들었습니다. 앞으로도 자주 이용하게 될 것 같아요.',
    ServiceType: '병원동행',
    Rating: 5,
    Age: 30,
    Location: 'Seoul',
    Comments: [],
  },
  {
    id: '3',
    DateCreated: '2025-06-30T10:00:00Z',
    AuthorName: '김*수',
    Gender: 'female',
    ContentTitle: '맘편히 이용한 최고의 서비스예요.',
    Images: [SampleImage.src, SampleImage.src],
    Content:
      '평소 부모님 혼자 병원에 다녀오시면 몸도 마음도 많이 힘들어하셨어요. 접수부터 진료까지 혼자 처리하시느라 많이 지치셨고, 의사 선생님께 꼭 여쭤봐야 할 것도 빠뜨리기 일쑤였거든요. 이번엔 돌봄대장 병원동행 서비스를 이용해봤는데, 처음부터 끝까지 꼼꼼하게 챙겨주셔서 정말 든든했습니다. 보호자 입장에서 함께 가지 못하는 게 늘 걱정이었는데, 친절하게 안내도 해주시고, 의사 선생님 말씀도 잘 전달해주셔서 안심할 수 있었어요. 약까지 챙겨주시고, 저도 참 감사한 마음이 들었습니다. 앞으로도 자주 이용하게 될 것 같아요.',
    ServiceType: '병원동행',
    Rating: 5,
    Age: 30,
    Location: 'Seoul',
    Comments: [
      {
        commentId: '3',
        DateCreated: '2025-06-30T10:00:00Z',
        UserName: '김*수',
        Comment:
          '소중한 리뷰 감사드립니다. 언제나 친절한 서비스로 보답하겠습니다. 돌봄대장 드림',
      },
    ],
  },
  {
    id: '3',
    DateCreated: '2025-06-30T10:00:00Z',
    AuthorName: '김*수',
    Gender: 'female',
    ContentTitle: '맘편히 이용한 최고의 서비스예요.',
    Images: [],
    Content:
      '평소 부모님 혼자 병원에 다녀오시면 몸도 마음도 많이 힘들어하셨어요. 접수부터 진료까지 혼자 처리하시느라 많이 지치셨고, 의사 선생님께 꼭 여쭤봐야 할 것도 빠뜨리기 일쑤였거든요. 이번엔 돌봄대장 병원동행 서비스를 이용해봤는데, 처음부터 끝까지 꼼꼼하게 챙겨주셔서 정말 든든했습니다. 보호자 입장에서 함께 가지 못하는 게 늘 걱정이었는데, 친절하게 안내도 해주시고, 의사 선생님 말씀도 잘 전달해주셔서 안심할 수 있었어요. 약까지 챙겨주시고, 저도 참 감사한 마음이 들었습니다. 앞으로도 자주 이용하게 될 것 같아요.',
    ServiceType: '병원동행',
    Rating: 5,
    Age: 30,
    Location: 'Seoul',
    Comments: [
      {
        commentId: '3',
        DateCreated: '2025-06-30T10:00:00Z',
        UserName: '김*수',
        Comment:
          '소중한 리뷰 감사드립니다. 언제나 친절한 서비스로 보답하겠습니다. 돌봄대장 드림',
      },
    ],
  },
];
export default function CommentSection() {
  const [selectedButton, setSelectedButton] = useState<string>('all');
  const [selectedSorting, setSelectedSorting] = useState<string>('recommended');
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonCollectionPc}>
          {buttonList.map((button) => (
            <Button
              key={button.name}
              name={button.name}
              style={{ fontWeight: 'normal' }}
              variant={selectedButton === button.name ? 'primary' : 'secondary'}
              onClick={() => setSelectedButton(button.name)}
            >
              {button.label}
            </Button>
          ))}
        </div>
        <div className={styles.endButton}>
          <Button
            variant={'tertiary'}
            onClick={() => router.push('/review/write')}
          >
            리뷰 작성하기
          </Button>
        </div>
      </div>
      <div className={styles.selectContainer}>
        <Select
          className={styles.hideOnDesktop}
          variant="primary"
          options={buttonList.map((button) => ({
            value: button.name,
            label: button.label,
          }))}
          showLabel={true}
          label=""
          value={selectedButton}
          onChange={(e) => setSelectedButton(e.target.value)}
        />
        <Select
          variant="simple"
          options={selectList.map((select) => ({
            value: select.name,
            label: select.label,
          }))}
          showLabel={true}
          label=""
          value={selectedSorting}
          onChange={(e) => setSelectedSorting(e.target.value)}
        />
      </div>
      <div className={styles.commentContainer}>
        {commentsData.map((comment, index) => (
          <div key={index}>
            <Comment
              key={comment.id}
              data={comment}
              isAdmin={index >= 2 ? true : false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
