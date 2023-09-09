import React from 'react'

function LoadingModal() {
    // WE SHALL SET UP THE MESSAGES LATER.
    const crSuccessMessage = (message) => {
        Modal.success({
          title: (
            <div>
              {' '}
              <p style={{color: 'green'}}> Success Message</p>{' '}
            </div>
          ),
          content: (
            <div>
              {' '}
              <p style={{fontWeight: 'bold', fontSize: 15}}> {message}</p>{' '}
            </div>
          ),
          onOk: () => {
            setIscrVisible(true);
          },
        });
      };
  return (
    <div>LoadingModal</div>
  )
}

export default LoadingModal