import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

interface Props {
  checked: boolean;
}

const Icon = ({ checked }: Props) => {
  const theme = useContext(ThemeContext);
  return (
    <svg x="0px" y="0px" width="18px" height="18px" viewBox="0 0 474.8 474.801">
      <g>
        <g>
          {checked && (
            <>
              <path
                fill={theme.txtColor}
                d="M396.283,257.097c-1.14-0.575-2.282-0.862-3.433-0.862c-2.478,0-4.661,0.951-6.563,2.857l-18.274,18.271
			c-1.708,1.715-2.566,3.806-2.566,6.283v72.513c0,12.565-4.463,23.314-13.415,32.264c-8.945,8.945-19.701,13.418-32.264,13.418
			H82.226c-12.564,0-23.319-4.473-32.264-13.418c-8.947-8.949-13.418-19.698-13.418-32.264V118.622
			c0-12.562,4.471-23.316,13.418-32.264c8.945-8.946,19.7-13.418,32.264-13.418H319.77c4.188,0,8.47,0.571,12.847,1.714
			c1.143,0.378,1.999,0.571,2.563,0.571c2.478,0,4.668-0.949,6.57-2.852l13.99-13.99c2.282-2.281,3.142-5.043,2.566-8.276
			c-0.571-3.046-2.286-5.236-5.141-6.567c-10.272-4.752-21.412-7.139-33.403-7.139H82.226c-22.65,0-42.018,8.042-58.102,24.126
			C8.042,76.613,0,95.978,0,118.629v237.543c0,22.647,8.042,42.014,24.125,58.098c16.084,16.088,35.452,24.13,58.102,24.13h237.541
			c22.647,0,42.017-8.042,58.101-24.13c16.085-16.084,24.134-35.45,24.134-58.098v-90.797
			C402.001,261.381,400.088,258.623,396.283,257.097z"
              />
              <path
                fill={theme.primaryColor}
                d="M467.95,93.216l-31.409-31.409c-4.568-4.567-9.996-6.851-16.279-6.851c-6.275,0-11.707,2.284-16.271,6.851
			L219.265,246.532l-75.084-75.089c-4.569-4.57-9.995-6.851-16.274-6.851c-6.28,0-11.704,2.281-16.274,6.851l-31.405,31.405
			c-4.568,4.568-6.854,9.994-6.854,16.277c0,6.28,2.286,11.704,6.854,16.274l122.767,122.767c4.569,4.571,9.995,6.851,16.274,6.851
			c6.279,0,11.704-2.279,16.274-6.851l232.404-232.403c4.565-4.567,6.854-9.994,6.854-16.274S472.518,97.783,467.95,93.216z"
              />
            </>
          )}
          {!checked && (
            <path fill={theme.txtColor} d="m82.227 36.4c-22.65 0-42.02 8.043-58.104 24.127-16.082 16.086-24.123 35.451-24.123 58.102v237.54c0 14.974 3.5193 28.514 10.551 40.619 3.7153 6.6791 8.4788 12.93 14.299 18.75 16.084 16.088 35.453 24.131 58.1 24.131h237.54c22.65 0 42.018-8.0429 58.102-24.131 16.083-16.084 24.125-35.451 24.125-58.098v-237.54c0-22.651-8.041-42.016-24.123-58.102-6.9274-6.9274-14.466-12.359-22.611-16.303-0.76685-0.78127-1.7038-1.4374-2.8184-1.957-10.272-4.752-21.411-7.1387-33.402-7.1387h-237.54zm0 36.539h162.76l75.508 1.2715c12.562 0.21153 23.319 4.472 32.264 13.418 8.947 8.948 13.418 19.704 13.418 32.266v237.54c0 12.566-4.471 23.315-13.418 32.264-6.6926 6.6926-14.399 10.879-23.117 12.564-3.3443-0.19298-6.6787-0.41797-9.8711-0.41797h-237.54c-12.564 0-23.319-4.473-32.264-13.418-8.947-8.949-13.418-19.7-13.418-32.266v-237.54c0-12.562 4.471-23.316 13.418-32.264 8.945-8.946 19.7-13.418 32.264-13.418z" />
          )}
        </g>
      </g>
    </svg>
  );
};

export default Icon;
