import Image from "next/image";

export default function QRCode() {
  return (
    <div className="outer-container">
      <div className="card-container light-gray">
        <div className="qrcode-container">
          <div className="qrcode">
            {/* <img src="./images/image-qr-code.png" alt="qrcode" /> */}
            <Image
              src="./images/image-qr-code.png"
              alt="QR Code"
              className="qr-image"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
          <div className="description">
            <h1>Improve your front-end skills by building projects</h1>
            <p>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
