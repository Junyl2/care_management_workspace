import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      color: 'white',
      padding: '20px',
      textAlign: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        padding: '40px',
        maxWidth: '500px',
        width: '100%'
      }}>
        <div style={{
          fontSize: '120px',
          fontWeight: 'bold',
          background: '#007FFF',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradient 3s ease infinite',
          marginBottom: '20px',
          lineHeight: '1'
        }}>
          404
        </div>
        
        <h1 style={{
          fontSize: '32px',
          fontWeight: '600',
          marginBottom: '15px',
          color: 'black'
        }}>
          Oops! Page Not Found
        </h1>
        
        <p style={{
          fontSize: '18px',
          color: 'black',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          The page you&apos;re looking for seems to have wandered off into the digital wilderness.
        </p>
        
        <Link href="/" style={{
          display: 'inline-block',
          background: '#007FFF',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '16px',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          border: 'none',
          cursor: 'pointer'
        }}
        >
          🏠 Back to Home
        </Link>
      </div>
    </div>
  );
}
