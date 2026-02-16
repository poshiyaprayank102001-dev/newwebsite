import TrueFocus from '@/components/react-bits/TrueFocus';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between max-w-5xl mx-auto gap-8">
          <div className="flex-1 w-full text-center">
            <TrueFocus
              sentence="Small beginnings|Big dreams"
              splitBy="|"
              separator=""
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              glowColor="rgba(255, 0, 0, 0.6)"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
              className="gap-20 text-5xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
