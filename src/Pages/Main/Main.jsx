import img from '../../i/main_image.png';
import Image from 'react-bootstrap/Image';

export default function Main() {
  return (
    <main className="main">
      <h1 className="main__title">main</h1>

      <Image src={img} fluid />

    </main>
  );
}
