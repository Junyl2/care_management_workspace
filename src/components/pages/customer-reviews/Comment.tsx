'use client';
import React, { useState } from 'react';
import styles from './Comment.module.css';
import { CommentProps, CommentType } from '@/types/reviews';
import { formatToKoreanDate } from '@/lib/utils';
import StarRating from '@/components/ui/StarRating/StarRating';
import Image from 'next/image';
import DefaultProfile from '../../../../public/assets/images/default-profile.png';

export default function Comment({
  isAdmin,
  data,
}: {
  isAdmin?: boolean | undefined;
  data: CommentProps;
}) {
  const [comment, setComment] = useState('');
  //to be changed implementation when there is api integ
  //const isAdmin = true / false;
  const {
    DateCreated = new Date().toISOString(),
    AuthorName: UserName,
    // UserProfileImage, not used atm
    ContentTitle,
    Content,
    ServiceType,
    Rating,
    Age,
    Location,
    Gender,
    Comments = [],
    Images,
  } = data;

  const SubmitComment = () => {
    if (isAdmin) {
      alert('This feature is a work in progress');
    } else {
      alert('Please login as an admin to submit a comment');
    }
  };
  const CommentHeaderBadge: React.FC<{ str: string }> = ({ str }) => {
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

  const AudienceComment: React.FC<{ data: CommentType }> = ({ data }) => {
    const { UserName, UserProfileImage, commentId, Comment, DateCreated } =
      data;
    return (
      <div className={styles.flexCol + ' ' + styles.gap8 + ' ' + styles.mb10}>
        <p className={styles.textMuted2}>
          {formatToKoreanDate(new Date(DateCreated))}
        </p>
        <div className={styles.flexCol}>
          <div
            className={
              styles.flexRow + ' ' + styles.alignCenter + ' ' + styles.gap10
            }
          >
            {UserProfileImage ? (
              <Image
                src={UserProfileImage}
                className={styles.alignSelfStart}
                alt={`user profile ${UserName}_${commentId}`}
                width={30}
                height={30}
              />
            ) : (
              <Image
                src={DefaultProfile}
                className={styles.alignSelfStart}
                alt={`user profile ${UserName}_${commentId}`}
                width={30}
                height={30}
              />
            )}
            <p className={styles.audienceComment}>{Comment}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.card}>
      <div className={styles.topSection}>
        <div
          className={
            styles.flexRow +
            ' ' +
            styles.justifyBetween +
            ' ' +
            styles['w-full']
          }
        >
          <CommentHeaderBadge str={ServiceType} />
          <div className={styles.dateSection}>
            <p>{formatToKoreanDate(new Date(DateCreated))}</p>
          </div>
        </div>
        <div className={styles.flexCol} style={{ gap: '7px' }}>
          <div className={styles.flexRow}>
            <p>
              {Gender === 'male' ? '👱‍♂️ ' : '👩 '}
              {UserName}
            </p>
            <StarRating step={Rating} showNumber={false} />
          </div>
          <p className={styles.textMuted2 + ' ' + styles.onlyShowInMobile}>
            (어르신, {Age}세, {Location} {Gender === 'male' ? '🙋' : '🙋‍♀️'})
          </p>
        </div>
      </div>

      <div className={styles.middleSection}>
        <div className={styles.imageGallery}>
          {Images?.map((image, index) => {
            if (index > 3) {
              //if 4+ images
              return null;
            } else {
              return (
                <Image
                  key={image + index}
                  className={styles.imageTile}
                  src={image}
                  alt="image"
                  width={300}
                  height={300}
                />
              );
            }
          })}
        </div>
        <p className={styles.commentTitle}>☺️ {ContentTitle}</p>
        <p className={styles.comment}>{Content}</p>
      </div>

      <div className={styles.bottomSection}>
        {Comments?.map((comment: CommentType, index: number) => (
          <AudienceComment key={index} data={comment} />
        ))}
        {isAdmin === true && (
          <div className={styles.commentTextInputSection}>
            <p style={{ fontWeight: '500' }}>댓글</p>
            <textarea
              className={styles.commentTextInput}
              placeholder="댓글을 작성하세요."
              value={comment}
              onChange={(e) => {
                const newComment = e.target.value;
                if (newComment.length <= 300) {
                  setComment(newComment);
                }
              }}
            ></textarea>

            <p className={styles.commentLength}>{comment.length + '/' + 300}</p>

            <button
              className={styles.sendCommentButton}
              onClick={SubmitComment}
            >
              댓글 등록
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
