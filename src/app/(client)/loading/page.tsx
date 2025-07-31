// app/loading.tsx
'use client';

import ClipLoader from 'react-spinners/ClipLoader';

export default function Loading() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        zIndex: 9999,
      }}
    >
      <ClipLoader size={60} color="#0d6efd" />
    </div>
  );
}
