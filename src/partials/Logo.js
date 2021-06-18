import { Link } from "react-router-dom";

export default function Logo({ width, height }) {
  return (
    <Link to="/" className="block" aria-label="dot9">
      <svg
        width={width}
        height={height}
        viewBox="0 0 186 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <rect width="186" height="70" fill="white" />
          <path
            d="M149.264 51.504C152.336 51.504 154.784 50.712 156.608 49.128C158.48 47.544 159.416 45.36 159.416 42.576C158.888 43.008 157.904 43.512 156.464 44.088C155.072 44.664 153.272 44.952 151.064 44.952C148.856 44.952 146.84 44.64 145.016 44.016C143.24 43.392 141.704 42.48 140.408 41.28C139.112 40.032 138.104 38.52 137.384 36.744C136.664 34.968 136.304 32.904 136.304 30.552C136.304 28.488 136.664 26.544 137.384 24.72C138.104 22.848 139.184 21.216 140.624 19.824C142.064 18.384 143.84 17.256 145.952 16.44C148.112 15.576 150.608 15.144 153.44 15.144C159.104 15.144 163.544 17.04 166.76 20.832C170.024 24.624 171.656 30.024 171.656 37.032C171.656 41.016 171.152 44.52 170.144 47.544C169.136 50.568 167.72 53.088 165.896 55.104C164.12 57.12 161.984 58.632 159.488 59.64C156.992 60.648 154.232 61.152 151.208 61.152C147.368 61.152 144.368 60.624 142.208 59.568C140.048 58.512 138.968 56.904 138.968 54.744C138.968 53.736 139.184 52.776 139.616 51.864C140.096 50.904 140.648 50.184 141.272 49.704C142.568 50.28 143.912 50.736 145.304 51.072C146.744 51.36 148.064 51.504 149.264 51.504ZM153.872 35.736C154.784 35.736 155.696 35.544 156.608 35.16C157.568 34.776 158.36 34.248 158.984 33.576V32.712C158.936 29.976 158.456 27.984 157.544 26.736C156.632 25.488 155.288 24.864 153.512 24.864C151.928 24.864 150.68 25.368 149.768 26.376C148.904 27.336 148.472 28.656 148.472 30.336C148.472 31.968 148.976 33.288 149.984 34.296C150.992 35.256 152.288 35.736 153.872 35.736Z"
            fill="#47597E"
          />
          <path
            d="M8.232 42.504C8.232 39.336 8.712 36.6 9.672 34.296C10.632 31.944 11.952 30 13.632 28.464C15.36 26.928 17.352 25.8 19.608 25.08C21.912 24.312 24.384 23.928 27.024 23.928C27.984 23.928 28.92 24.024 29.832 24.216C30.744 24.36 31.488 24.552 32.064 24.792V13.128C32.544 12.984 33.312 12.84 34.368 12.696C35.424 12.504 36.504 12.408 37.608 12.408C38.664 12.408 39.6 12.48 40.416 12.624C41.28 12.768 42 13.056 42.576 13.488C43.152 13.92 43.584 14.52 43.872 15.288C44.16 16.008 44.304 16.968 44.304 18.168V52.296C44.304 54.552 43.248 56.352 41.136 57.696C39.744 58.608 37.944 59.4 35.736 60.072C33.528 60.792 30.984 61.152 28.104 61.152C24.984 61.152 22.176 60.72 19.68 59.856C17.232 58.992 15.144 57.744 13.416 56.112C11.736 54.48 10.44 52.536 9.528 50.28C8.664 47.976 8.232 45.384 8.232 42.504ZM28.68 33.504C26.088 33.504 24.096 34.248 22.704 35.736C21.312 37.224 20.616 39.48 20.616 42.504C20.616 45.48 21.264 47.736 22.56 49.272C23.856 50.76 25.728 51.504 28.176 51.504C29.04 51.504 29.808 51.384 30.48 51.144C31.2 50.856 31.752 50.544 32.136 50.208V34.368C31.176 33.792 30.024 33.504 28.68 33.504ZM88.1475 42.504C88.1475 45.48 87.6915 48.144 86.7795 50.496C85.8675 52.8 84.5715 54.744 82.8915 56.328C81.2595 57.912 79.2915 59.112 76.9875 59.928C74.6835 60.744 72.1155 61.152 69.2835 61.152C66.4515 61.152 63.8835 60.72 61.5795 59.856C59.2755 58.992 57.2835 57.768 55.6035 56.184C53.9715 54.552 52.6995 52.584 51.7875 50.28C50.8755 47.976 50.4195 45.384 50.4195 42.504C50.4195 39.672 50.8755 37.104 51.7875 34.8C52.6995 32.496 53.9715 30.552 55.6035 28.968C57.2835 27.336 59.2755 26.088 61.5795 25.224C63.8835 24.36 66.4515 23.928 69.2835 23.928C72.1155 23.928 74.6835 24.384 76.9875 25.296C79.2915 26.16 81.2595 27.408 82.8915 29.04C84.5715 30.624 85.8675 32.568 86.7795 34.872C87.6915 37.176 88.1475 39.72 88.1475 42.504ZM62.9475 42.504C62.9475 45.432 63.4995 47.688 64.6035 49.272C65.7555 50.808 67.3395 51.576 69.3555 51.576C71.3715 51.576 72.9075 50.784 73.9635 49.2C75.0675 47.616 75.6195 45.384 75.6195 42.504C75.6195 39.624 75.0675 37.416 73.9635 35.88C72.8595 34.296 71.2995 33.504 69.2835 33.504C67.2675 33.504 65.7075 34.296 64.6035 35.88C63.4995 37.416 62.9475 39.624 62.9475 42.504ZM106.359 47.976C106.359 49.224 106.743 50.112 107.511 50.64C108.327 51.168 109.455 51.432 110.895 51.432C111.615 51.432 112.359 51.384 113.127 51.288C113.895 51.144 114.567 50.976 115.143 50.784C115.575 51.312 115.935 51.912 116.223 52.584C116.559 53.208 116.727 53.976 116.727 54.888C116.727 56.712 116.031 58.2 114.639 59.352C113.295 60.504 110.895 61.08 107.439 61.08C103.215 61.08 99.951 60.12 97.647 58.2C95.391 56.28 94.263 53.16 94.263 48.84V18.024C94.791 17.88 95.535 17.736 96.495 17.592C97.503 17.4 98.559 17.304 99.663 17.304C101.775 17.304 103.407 17.688 104.559 18.456C105.759 19.176 106.359 20.736 106.359 23.136V27.744H115.791C116.079 28.272 116.343 28.944 116.583 29.76C116.871 30.528 117.015 31.392 117.015 32.352C117.015 34.032 116.631 35.256 115.863 36.024C115.143 36.744 114.159 37.104 112.911 37.104H106.359V47.976Z"
            fill="#47597E"
          />
          <circle cx="126.5" cy="52.5" r="7.5" fill="#47597E" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="186" height="70" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
}