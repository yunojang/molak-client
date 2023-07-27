import Carousel from '@/components/Elements/Carousel/Carousel';

function Landing() {
  return (
    <div>
      <Carousel
        autoPlay
        sliders={[
          <div key={0} className="h-full p-3 bg-red-500">
            0
          </div>,
          <div key={1} className="h-full p-3 bg-blue-500">
            1
          </div>,
          <div key={2} className="h-full p-3 bg-green-500">
            2
          </div>,
        ]}
      />
    </div>
  );
}

export default Landing;
