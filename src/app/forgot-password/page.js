import React from 'react'

const page = () => {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        textAlign: 'center',
        backgroundColor: "var(--box-bg-light)",
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '20px'
      }}>
        <h3 style={{
          color: '#333',
          lineHeight: '1.6',
          margin: 0,
          fontSize: '18px'
        }}>
          Password recovery is not available through this interface.
          To regain access to your account, administrative support is required.
          Please contact your system administrator.
        </h3>
      </div>
    </div>
  )
}

export default page