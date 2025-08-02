import React, { useState, useEffect, useMemo } from 'react';
import styles from './ReviewForm.module.css';
import StarRating from '@/components/ui/StarRating/StarRating';
import { reviewFormInput } from '@/types/reviews';
// import MobileDrawer from '@/components/ui/Drawer/Drawer';
import Image from 'next/image';
import CameraIcon from '../../../../../public/assets/icons/gridicons_camera.svg';
import Modal from '@/components/ui/Modal/Modal';
export default function ReviewForm({
  reviewFormData,
  setReviewFormData,
}: {
  reviewFormData: reviewFormInput;
  setReviewFormData: (data: reviewFormInput) => void;
}) {
  const [rating, setRating] = useState(0);
  const [files, setFiles] = useState<File[] | undefined>([]);
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  // const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);
  const [authorNameError, setAuthorNameError] = useState<string | undefined>(
    undefined
  );

  const checkRequiredFields = () => {
    if (
      !reviewFormData.author_name ||
      !reviewFormData.service_used ||
      !reviewFormData.review ||
      reviewFormData.author_name === '' ||
      reviewFormData.service_used === '' ||
      reviewFormData.review === ''
    ) {
      return true;
    } else {
      return false;
    }
  };

  // Memoize the image URLs to prevent unnecessary re-renders
  const imageUrls = useMemo(() => {
    return files?.map((file) => URL.createObjectURL(file)) || [];
  }, [files]);

  // Cleanup URLs when component unmounts or files change
  useEffect(() => {
    return () => {
      imageUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imageUrls]);
  return (
    <div className={styles.formContainer}>
      <Modal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        showCloseButton={true}
      >
        <div className={styles.errorModalContainer}>
          <p className={styles.errorModalTitle}>필수 입력</p>

          <p className={styles.errorModalText}>
            리뷰 작성을 위해 필수 항목을 모두
            <br /> 입력해 주세요.
          </p>
          <button
            onClick={() => setShowErrorModal(false)}
            className={styles.errorModalConfirmButton}
          >
            확인
          </button>
        </div>
      </Modal>
      <p className={styles.formTitle}>서비스가 만족스러우셨나요?</p>
      <StarRating
        step={rating}
        showNumber={false}
        variant={'formStyle'}
        clickable={true}
        setStep={setRating}
      />
      <p className={styles.mutedText}>별점을 선택하세요.</p>

      <div className={styles.formSectionContainer}>
        <div className={styles.formFirstRow}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              className={styles.inputContainer + ' ' + styles.authorNameInput}
            >
              <p className={styles.formLabel}>
                이름<span className={styles.required}>*</span>
              </p>
              <input
                className={
                  styles.formInput +
                  ' ' +
                  (authorNameError ? styles.inputError : '')
                }
                type="text"
                placeholder="이름을 입력하세요."
                value={reviewFormData.author_name}
                onChange={(e) => {
                  const value = e.target.value;
                  // Check if input contains numbers or special characters
                  const hasNumbersOrSpecialChars =
                    /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);

                  if (hasNumbersOrSpecialChars) {
                    setAuthorNameError('숫자나 특수문자는 사용할 수 없습니다.');
                  } else {
                    setAuthorNameError(undefined);
                  }

                  setReviewFormData({
                    ...reviewFormData,
                    author_name: value,
                  });
                }}
              />
              {authorNameError && (
                <p className={styles.formSubText} style={{ color: 'red' }}>
                  {authorNameError}
                </p>
              )}
              {!authorNameError && (
                <p className={styles.formSubText}>
                  이름은 일부만 표시됩니다. (예: 김*수)
                </p>
              )}
            </div>
          </div>
        </div>
        <div className={styles.formSecondRow}>
          {/*Choose Your Service - Mobile Version */}
          <div
            className={styles.inputContainer + ' ' + styles.selectServiceInput}
          >
            <p className={styles.formLabel}>
              이용 서비스<span className={styles.required}>*</span>
            </p>
            <select
              className={styles.formInput}
              value={reviewFormData.service_used}
              style={{
                color:
                  reviewFormData.service_used === '' ? '#778088' : '#000000',
              }}
              onChange={(e) =>
                setReviewFormData({
                  ...reviewFormData,
                  service_used: e.target.value,
                })
              }
            >
              <option value="" disabled={true} hidden={true}>
                서비스 선택
              </option>
              <option value="병원동행">병원동행</option>
              <option value="식사도움">식사도움</option>
              <option value="가사도움">가사도움</option>
              <option value="운동도움">운동도움</option>
              <option value="목욕도움">목욕도움</option>
            </select>
          </div>
        </div>

        <div className={styles.formThirdRow}>
          <div className={styles.inputContainer}>
            <p className={styles.formLabel}>
              리뷰<span className={styles.required}>*</span>
            </p>

            <textarea
              className={styles.formInput + ' ' + styles.reviewInput}
              placeholder="최소 10자 이상 입력해주세요."
              value={reviewFormData.review}
              onChange={(e) => {
                const newComment = e.target.value;
                if (newComment.length <= 1000) {
                  setReviewFormData({
                    ...reviewFormData,
                    review: e.target.value,
                  });
                }
              }}
            ></textarea>

            <p className={styles.reviewLength}>
              {reviewFormData.review?.length
                ? reviewFormData.review.length + '/1000'
                : '0/1000'}
            </p>
          </div>
        </div>

        <div className={styles.formFourthRow}>
          <div className={styles.inputContainer + ' ' + styles.photoInput}>
            <p className={styles.formLabel}>사진첨부:</p>
            <div className={styles.photoGallery}>
              {files &&
                Array.isArray(files) &&
                files?.map((item, key) => (
                  <Image
                    key={`${item.name}-${item.lastModified}--${key}`}
                    className={styles.photoItem}
                    style={{ objectFit: 'cover', cursor: 'pointer' }}
                    src={imageUrls[key]}
                    alt={item.name}
                    width={500}
                    height={500}
                    onClick={() => {
                      const newFiles = [...files];
                      newFiles.splice(key, 1);
                      setFiles(newFiles);
                      setReviewFormData({
                        ...reviewFormData,
                        review_images: newFiles,
                      });
                    }}
                  />
                ))}
            </div>

            <button
              className={
                styles.addPhotoButton +
                ' ' +
                (files && files.length < 4 ? '' : styles.addPhotoButtonDisabled)
              }
              onClick={() => {
                document.getElementById('photoInput')?.click();
              }}
            >
              <div className={styles.addPhotoButtonIcon}>
                <Image
                  src={CameraIcon}
                  alt="add photo"
                  width={24}
                  height={24}
                />
                <p className={styles.addPhotoText}>사진 첨부하기</p>
              </div>
              <input
                id="photoInput"
                type="file"
                accept="image/*"
                multiple={false}
                style={{ display: 'none' }}
                onChange={(e) => {
                  const newFiles = Array.from(e.target.files || []);
                  if (newFiles) {
                    setFiles([...(files || []), ...newFiles]);
                    setReviewFormData({
                      ...reviewFormData,
                      review_images: [
                        ...(reviewFormData.review_images || []),
                        ...newFiles,
                      ],
                    });
                  }
                }}
                disabled={files && files.length < 4 ? false : true}
              />
            </button>
          </div>
        </div>
        <div className={styles.lastRow}>
          <button
            onClick={() => {
              if (checkRequiredFields() === true) {
                setShowErrorModal(true);
              } else {
                alert('Form Submitted!');
                // to integrate api
              }
            }}
            className={
              styles.submitButton +
              ' ' +
              (checkRequiredFields() === true ? '' : styles.enabled)
            }
          >
            작성 완료
          </button>
        </div>
      </div>
    </div>
  );
}
