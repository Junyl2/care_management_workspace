'use client';

import React, { useState } from 'react';
import { BaseModal } from './BaseModal';
import styles from './SearchAddress.module.css';
import { CiSearch } from 'react-icons/ci';

interface SearchAddressProps {
  open: boolean;
  onClose: () => void;
  onSelectAddress: (address: string) => void;
}

export const SearchAddress: React.FC<SearchAddressProps> = ({
  open,
  onClose,
  onSelectAddress,
}) => {
  const [input, setInput] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');

  const handleConfirm = () => {
    if (selectedAddress) {
      onSelectAddress(selectedAddress);
      onClose();
    }
  };

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      title="주소를 검색해주세요."
      titleClassName={styles.textStartTitle}
    >
      <div className={styles.content}>
        {/* Dummy address search logic - replace with real API later */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.input}
            placeholder="도로명, 지번, 건물명 검색"
          />
          <button
            className={styles.searchBtn}
            onClick={() => setSelectedAddress(input)}
            disabled={!input.trim()}
          >
            <CiSearch className={styles.searchIcon} />
          </button>
        </div>

        <div className={styles.searchExample}>
          <h2>주소 검색 방법</h2>
          <h3 className={styles.h3WithDot}>도로명 + 건물번호</h3>
          <p>예) 정자일로 95, 불정로 6</p>
          <h3 className={styles.h3WithDot}>동/읍/면/리 + 번지</h3>
          <p>예) 정자동 178-4, 동면 만천리 1000</p>
        </div>

        {selectedAddress && (
          <div className={styles.result}>
            선택된 주소: <strong>{selectedAddress}</strong>
          </div>
        )}

        <button
          className={`${styles.confirmBtn} ${
            selectedAddress ? styles.primary : styles.secondary
          }`}
          onClick={handleConfirm}
          disabled={!selectedAddress}
        >
          확인
        </button>
      </div>
    </BaseModal>
  );
};
