'use client';
import './global.css';

import ClipLoader from 'react-spinners/ClipLoader';

export default function Loading() {
  return (
    <div className="loading">
      <ClipLoader size={60} color="#0d6efd" />
    </div>
  );
}
