import React, { useState } from "react";

const TypebotButton = () => {
  const [open, setOpen] = useState(false);

  const buttonStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#9900ffff",
    color: "white",
    fontSize: "28px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s",
    zIndex: 9999
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
  };

  return (
    <>
      {/* botão flutuante */}
      <button
        style={buttonStyle}
        onClick={() => setOpen(true)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        💬
      </button>

      {/* modal */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "600px",
              height: "80%",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
            }}
          >
            {/* botão de fechar */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                background: "#ff4d4f",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "4px 8px",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              ✕
            </button>

            {/* iframe do chat ia */}
            <iframe
              src="https://typebot.co/passa-a-bola-s5yu65e"
              title="Chat IA"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TypebotButton;
