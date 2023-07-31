import { css, cx } from '@emotion/css';
import { range } from '@/utils/range';
import { env } from '@/config';

interface SpinnerProps {
  size?: number;
  length?: number;
  color?: string;
  pad?: number;
}
// Spinner 컴포넌트는 로딩 상태를 나타내는 스피너를 보여줍니다.
export const Spinner = ({
  size = 100,
  length = 16,
  color: _color = 'primary',
  pad = 1,
}: SpinnerProps) => {
  const color = _color === 'primary' ? env.colors.primary : _color;

  return (
    <div className={cx(container(size, color))} style={{ padding: pad * 4 }}>
      {range(length).map((_, index) => (
        <div
          className="tornado"
          key={index}
          style={{
            animationDelay: `-${(index * 120) / 3}ms`,
          }}
        >
          <div
            className="tornado-circle"
            style={{
              animationDelay: `-${(index * 120) / 3}ms`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

const container = (size: number, color: string) => css`
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 1px;
  height: ${size}px; /* 스피너의 높이 */

  .tornado {
    position: absolute;
    width: ${size}px; /* 토네이도의 너비 */
    height: ${size}px; /* 토네이도의 높이 */
    animation: spin 2s linear infinite;
  }

  .tornado-circle {
    width: ${size / 2.8}px; /* 원의 너비 */
    height: ${size / 2.8}px; /* 원의 높이 */
    border-radius: 50%;
    background-color: ${color}; /* 원의 색상 */
    opacity: 0.75;
    animation: shrink 1.2s ease-in-out infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes shrink {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.2);
    }
  }
`;
