import Spline from '@splinetool/react-spline';

export default function Index() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '200vh', // Allows scrolling
      background: 'black'
    }}>
      <div style={{
        width: '100vw',
        height: '100vh',
        background: 'black'
      }}>
        <Spline
          scene="https://prod.spline.design/wPA3LRYxI9Gxx53V/scene.splinecode"
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>
    </div>
  );
}

