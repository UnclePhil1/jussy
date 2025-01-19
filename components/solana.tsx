export default function GradientBorderText() {
    return (
      <div className="bg-black flex items-center justify-center p-4">
        <h1 
          className="text-6xl md:text-9xl font-bold relative"
          style={{
            WebkitTextStroke: "2px transparent",
            WebkitTextFillColor: "transparent",
            backgroundImage: "linear-gradient(90deg, #00FFA3 0%, #00FFE0 30%, #4BA9FF 60%, #9747FF 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 20px rgba(0, 255, 163, 0.2))",
            position: "relative"
          }}
        >
          <span 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, #00FFA3 0%, #00FFE0 30%, #4BA9FF 60%, #9747FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextStroke: "4px transparent",
              WebkitTextFillColor: "black",
              backgroundClip: "text",
              zIndex: -1,
            }}
          >
            SOLANA
          </span>
          SOLANA
        </h1>
      </div>
    )
  }
  
  