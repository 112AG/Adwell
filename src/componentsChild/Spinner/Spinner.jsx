import React from "react";

function Spinner() {
  return (
    <div>
      <div className="spinner"></div>
      <h1 className="font-semibold">Loading....</h1>
      <style jsx>{`
        .spinner {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: conic-gradient(#0000 10%, #ff0000); /* Changed to red */

          -webkit-mask: radial-gradient(
            farthest-side,
            #0000 calc(100% - 9px),
            #000 0
          );
          animation: spinner-zp9dbg 1s infinite linear;
        }

        @keyframes spinner-zp9dbg {
          to {
            transform: rotate(1turn);
          }
        }
      `}</style>
    </div>
  );
}

export default Spinner;
