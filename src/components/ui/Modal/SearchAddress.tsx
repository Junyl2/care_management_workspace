'use client';

import React, { useState, useEffect } from 'react';
import { BaseModal } from './BaseModal';
import styles from './SearchAddress.module.css';
import { CiSearch } from 'react-icons/ci';

import { useAppDispatch } from '@/store/hooks';
import { setField } from '@/store/features/reservationFormSlice';

interface SearchAddressProps {
  open: boolean;
  onClose: () => void;
  onSelectAddress: (selected: string) => void;
}

interface AddressResult {
  roadAddress: string;
  jibunAddress: string;
  postalCode: string;
}

export const SearchAddress: React.FC<SearchAddressProps> = ({
  open,
  onClose,
  onSelectAddress,
}) => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState('');
  const [results, setResults] = useState<AddressResult[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setIsMobileScreen(width <= 768);
    };

    checkScreen();

    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const handleSearch = async () => {
    if (!input.trim()) return;

    // Dummy data for testing UI
    const dummyResults: AddressResult[] = [
      {
        roadAddress:
          '서울특별시 동대문구 망우로 82 (휘경동, 삼육서울병원, 삼육보건대학교)',
        jibunAddress:
          '서울특별시 동대문구 휘경동 29-1 삼육서울병원, 삼육보건대학교',
        postalCode: '02500',
      },
      {
        roadAddress:
          '서울특별시 동대문구 망우로 82 (휘경동, 삼육서울병원, 삼육보건대학교)',
        jibunAddress: '서울특별시 동대문구 휘경동 100 휘경중학교',
        postalCode: '02510',
      },
    ];

    setResults(dummyResults);
  };

  const handleSelect = (address: string) => {
    setSelectedAddress(address);
    onSelectAddress(address);
  };

  /* Confirm button saves to Redux & closes modal */
  const handleConfirm = () => {
    if (!selectedAddress) return;
    dispatch(setField({ field: 'address', value: selectedAddress }));
    onSelectAddress(selectedAddress);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      title="주소를 검색해주세요."
      withOverlay={isMobileScreen ? false : true}
      titleClassName={styles.textStartTitle}
      className={styles.mobileModal}
      noRadius={isMobileScreen ? true : false}
    >
      <div className={styles.content}>
        {/* search Input */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={styles.input}
            placeholder="도로명, 지번, 건물명 검색"
          />
          <button
            className={styles.searchBtn}
            onClick={handleSearch}
            disabled={!input.trim()}
          >
            <CiSearch className={styles.searchIcon} size={22} />
          </button>
        </div>
        {/*  Search Results */}
        {results.length > 0 && (
          <div className={styles.resultsContainer}>
            <h3 className={styles.resultTitle}>검색 결과</h3>
            <div className="flex flex-col gap-2">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`${styles.resultItem} ${
                    selectedAddress === result.roadAddress
                      ? styles.selectedResult
                      : ''
                  }`}
                >
                  <div className={styles.addressText}>
                    <div className={styles.roadAddressWrapper}>
                      <p>{result.roadAddress}</p>

                      <button
                        className={styles.selectBtn}
                        onClick={() => handleSelect(result.roadAddress)}
                      >
                        선택
                      </button>
                    </div>
                    <div className={styles.subAddressWrapper}>
                      <div className={styles.subAddress}>
                        <span className={styles.label}>지번</span>
                        {result.jibunAddress}
                      </div>
                      <div className={styles.subAddress}>
                        <span className={styles.label}>우편번호</span>
                        {result.postalCode}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/*  Search Example */}
        {results.length === 0 && (
          <div className={styles.searchExample}>
            <h2>주소 검색 방법</h2>
            <h3 className={styles.h3WithDot}>도로명 + 건물번호</h3>
            <p>예) 정자일로 95, 불정로 6</p>
            <h3 className={styles.h3WithDot}>동/읍/면/리 + 번지</h3>
            <p>예) 정자동 178-4, 동면 만천리 1000</p>
          </div>
        )}
        {/* Confirm Button */}
        {!isMobileScreen && (
          <button
            onClick={handleConfirm}
            className={`${styles.confirmButton} ${
              selectedAddress ? styles.confirmPrimary : styles.confirmSecondary
            }`}
            disabled={!selectedAddress}
          >
            확인
          </button>
        )}

        {isMobileScreen && (
          <button
            onClick={handleConfirm}
            className={`${styles.mobileConfirmButton} ${
              selectedAddress ? styles.confirmPrimary : styles.confirmSecondary
            }`}
            disabled={!selectedAddress}
          >
            확인
          </button>
        )}
      </div>
    </BaseModal>
  );
};
