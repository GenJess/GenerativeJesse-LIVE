import Spline from '@splinetool/react-spline';

export default function Index() {
  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      height: '100vh', // Full viewport height
      background: 'black',
      overflow: 'hidden' // Prevents scrollbars from appearing
    }}>
      <Spline 
        scene="https://prod.spline.design/wPA3LRYxI9Gxx53V/scene.splinecode"
        style={{
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
}

