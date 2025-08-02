import React, { useEffect, useRef, useState } from 'react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function MobileDrawer({
  isOpen,
  onClose,
  title,
  children,
}: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    // Prevent body scroll when drawer is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    // Handle ESC key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setStartY(touch.clientY);
    setCurrentY(touch.clientY);
    setIsDragging(true);
    setTranslateY(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const deltaY = touch.clientY - startY;

    // Only allow downward dragging
    if (deltaY > 0) {
      setCurrentY(touch.clientY);
      setTranslateY(deltaY);

      // Apply the transform immediately to the drawer element
      if (drawerRef.current) {
        drawerRef.current.style.transform = `translateY(${deltaY}px)`;
      }
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    const deltaY = currentY - startY;
    const threshold = 150; // Close if dragged down more than 150px

    if (deltaY > threshold) {
      onClose();
    } else {
      // Reset position with animation
      if (drawerRef.current) {
        drawerRef.current.style.transition =
          'transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)';
        drawerRef.current.style.transform = 'translateY(0)';

        // Remove inline transition after animation completes
        setTimeout(() => {
          if (drawerRef.current) {
            drawerRef.current.style.transition = '';
          }
        }, 300);
      }
      console.log(translateY);
      setTranslateY(0);
    }

    setIsDragging(false);
    setStartY(0);
    setCurrentY(0);
  };

  // Handle mouse events for desktop testing
  const handleMouseDown = (e: React.MouseEvent) => {
    setStartY(e.clientY);
    setCurrentY(e.clientY);
    setIsDragging(true);
    setTranslateY(0);
  };

  //   const handleMouseMove = (e: React.MouseEvent) => {
  //     if (!isDragging) return;

  //     const deltaY = e.clientY - startY;

  //     // Only allow downward dragging
  //     if (deltaY > 0) {
  //       setCurrentY(e.clientY);
  //       setTranslateY(deltaY);

  //       // Apply the transform immediately to the drawer element
  //       if (drawerRef.current) {
  //         drawerRef.current.style.transform = `translateY(${deltaY}px)`;
  //       }
  //     }
  //   };

  //   const handleMouseUp = () => {
  //     if (!isDragging) return;

  //     const deltaY = currentY - startY;
  //     const threshold = 150;

  //     if (deltaY > threshold) {
  //       onClose();
  //     } else {
  //       // Reset position with animation
  //       if (drawerRef.current) {
  //         drawerRef.current.style.transition =
  //           'transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)';
  //         drawerRef.current.style.transform = 'translateY(0)';

  //         setTimeout(() => {
  //           if (drawerRef.current) {
  //             drawerRef.current.style.transition = '';
  //           }
  //         }, 300);
  //       }
  //       setTranslateY(0);
  //     }

  //     setIsDragging(false);
  //     setStartY(0);
  //     setCurrentY(0);
  //   };

  // Add global mouse event listeners when dragging
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (e: MouseEvent) => {
        const deltaY = e.clientY - startY;
        if (deltaY > 0) {
          setCurrentY(e.clientY);
          setTranslateY(deltaY);
          if (drawerRef.current) {
            drawerRef.current.style.transform = `translateY(${deltaY}px)`;
          }
        }
      };

      const handleGlobalMouseUp = () => {
        const deltaY = currentY - startY;
        const threshold = 150;

        if (deltaY > threshold) {
          onClose();
        } else {
          if (drawerRef.current) {
            drawerRef.current.style.transition =
              'transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)';
            drawerRef.current.style.transform = 'translateY(0)';
            setTimeout(() => {
              if (drawerRef.current) {
                drawerRef.current.style.transition = '';
              }
            }, 300);
          }
          setTranslateY(0);
        }

        setIsDragging(false);
        setStartY(0);
        setCurrentY(0);
      };

      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove);
        document.removeEventListener('mouseup', handleGlobalMouseUp);
      };
    }
  }, [isDragging, startY, currentY, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <style jsx>{`
        .drawer-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          display: none;
        }

        .drawer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
          animation: fadeIn 0.3s ease forwards;
        }

        .drawer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          border-radius: 12px 12px 0 0;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
          transform: translateY(100%);
          max-height: 90vh;
          overflow: hidden;
          animation: slideUp 0.3s cubic-bezier(0.32, 0.72, 0, 1) forwards;
        }

        .drawer-handle {
          width: 64px;
          height: 4px;
          background-color: #e0e0e0;
          border-radius: 2px;
          margin: 12px auto 8px;
          cursor: grab;
          touch-action: none;
          user-select: none;
        }

        .drawer-handle:active {
          cursor: grabbing;
        }

        .drawer-header {
          padding: 0 20px 0px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .drawer-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }

        .drawer-close {
          background: none;
          border: none;
          font-size: 24px;
          color: #666;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
        }

        .drawer-close:hover {
          background-color: #f5f5f5;
        }

        .drawer-content {
          padding: 2px 15px 10vh;
          overflow-y: auto;
          max-height: calc(90vh - 120px);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        /* Show only on mobile */
        @media (max-width: 767px) {
          .drawer-container {
            display: block;
          }
        }

        /* Hide on desktop */
        @media (min-width: 768px) {
          .drawer-container {
            display: none !important;
          }
        }
      `}</style>

      <div className="drawer-container">
        <div className="drawer-overlay" onClick={onClose} />
        <div
          ref={drawerRef}
          className="drawer"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
        >
          <div className="drawer-handle" />
          <div className="drawer-header">
            <h2 className="drawer-title">{title}</h2>
            <button className="drawer-close" onClick={onClose}>
              ×
            </button>
          </div>
          <div className="drawer-content">{children}</div>
        </div>
      </div>
    </>
  );
}
