'use client'
import React from 'react'
import styles from './page.module.css'
import SecondarySelectPicker from '@/components/ui/Select/SecondarySelectPicker'
import { SERVICE_TYPE_OPTIONS, SORTING_STATUS_OPTIONS } from '@/constants/selectOptions'
import { useReservationManagement } from '@/hooks/admin/useReservationManagement'
import PrimarySelectPicker from '@/components/ui/Select/PrimarySelectPicker'
import { FiDownload } from "react-icons/fi";
import { PiCaretDown } from "react-icons/pi";
import AdminButton from '@/components/ui/Button/AdminButton'
import AdminSearchBar from '@/components/ui/SearchBar/AdminSearchBar'
import AdminCalendar from '@/components/ui/Calendar/AdminCalendar'
import Table, { TableColumn } from '@/components/ui/Table/Table'
import { IoIosArrowDown } from "react-icons/io";
import ReservationDetails from '@/components/pages/admin/reservation-management/ReservationDetails'
import Pagination from '@/components/ui/Pagination/Pagination'

const ReservationManagementPage = () => {
  const {
    sortingOption,
    serviceTypeOption,
    selectedDate,
    expandedKeys,
    selectedRowKeys,
    handleSortingChange,
    handleServiceTypeChange,
    handleDateSelect,
    handleExpandToggle,
    handleRowSelectionChange
  } = useReservationManagement();

  const tableColumns: TableColumn[] = [
    { key: 'serviceType', title: '서비스 종류', width: '130px' },
    { key: 'serviceDate', title: '서비스 날짜', width: '120px' },
    { key: 'serviceTime', title: '서비스 시간', width: '100px' },
    { key: 'helperName', title: '보조자 성함', width: '100px' },
    { key: 'clientContact', title: '이용자 연락처', width: '150px' },
    { key: 'discount', title: '할인', width: '200px' },
    { key: 'amount', title: '금액', width: '100px' },
    { 
      key: 'details', 
      title: '상세보기', 
      width: '100px',
      render: (_, record, index) => {
        const recordKey = record.id || index;
        const isExpanded = expandedKeys.includes(recordKey as string | number);
        return (
          <AdminButton 
            variant="rectangular"
            onClick={() => handleExpandToggle(recordKey as string | number)}
            className={styles.detailsButton}
          >
            <IoIosArrowDown className={`${styles.expandIcon} ${isExpanded ? styles.expanded : ''}`} />
            <span>{isExpanded ? '접기' : '보기'}</span>
          </AdminButton>
        )
      }
    },
  ]

  //TODO: Make this typesafe with actual API data! Refrain from using any
  const mockData = [
    {
      id: 1,
      serviceType: '병원 동행',
      serviceDate: '2025년 7월 15일',
      serviceTime: '11:00 ~ 13:00',
      helperName: '홍길동',
      clientContact: '010-000-0000',
      discount: '카카오채널 추가 5% 할인',
      amount: '45,900',
    }
  ]

  const mockestData = [
    ...mockData.map(item => ({ ...item, id: 1 })),
    ...mockData.map(item => ({ ...item, id: 2 })),
    ...mockData.map(item => ({ ...item, id: 3 })),
    ...mockData.map(item => ({ ...item, id: 4 })),
    ...mockData.map(item => ({ ...item, id: 5 })),
    ...mockData.map(item => ({ ...item, id: 6 })),
    ...mockData.map(item => ({ ...item, id: 7 })),
    ...mockData.map(item => ({ ...item, id: 8 })),
    ...mockData.map(item => ({ ...item, id: 9 })),
    ...mockData.map(item => ({ ...item, id: 10 })),
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>예약 목록</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.filtersContainer}>
          <SecondarySelectPicker
            options={SORTING_STATUS_OPTIONS}
            value={sortingOption}
            onChange={handleSortingChange}
          />
          <div className={styles.selectors}>
            <PrimarySelectPicker
              options={SERVICE_TYPE_OPTIONS}
              value={serviceTypeOption}
              onChange={handleServiceTypeChange}
              placeholder="서비스 종류"
            />
            <AdminCalendar
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
            />
            <AdminSearchBar placeholder="예약자명, 전화번호 , 금액 등 검색" />
            <AdminButton variant="primary">
              <FiDownload />
              <span>엑셀로 내보내기</span>
              <PiCaretDown size={20} />
            </AdminButton>
            <AdminButton variant="rectangular-secondary">선택 삭제</AdminButton>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <Table
            columns={tableColumns}
            data={mockestData}
            rowSelection={{
              selectedRowKeys: selectedRowKeys,
              onChange: handleRowSelectionChange,
              getCheckboxProps: () => ({})
            }}
            expandable={{
              expandType: 'full',
              expandedRowKeys: expandedKeys,
              onExpand: (expanded, record, index) => {
                const recordKey = record.id || index;
                handleExpandToggle(recordKey);
              },
              expandedRowRender: (record) => <ReservationDetails record={record} />,
            }}
          />
        </div>
        <div className={styles.paginationContainer}>
          <Pagination current={1} pageSize={10} total={50} />
        </div>
      </div>
    </div>
  )
}

export default ReservationManagementPage