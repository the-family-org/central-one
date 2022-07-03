import canvasConfetti from 'canvas-confetti';

/**
 * Shows a confetti animation on the screen. 🎉
 *
 * @param animation - Effect type.
 */
export function confettiEffect(
  animation?: 'realistic' | 'school-pride' | 'fireworks',
  colors?: string[],
): void {
  if (typeof document === 'undefined') {
    return;
  }

  if (animation === 'realistic' || typeof animation === 'undefined') {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fire = (particleRatio: number, opts: any) => {
      canvasConfetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        }),
      );
    };

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  if (animation === 'school-pride') {
    const end = Date.now() + 15 * 1000;
    const colorsConfig = colors || ['#cc00cc', '#ffccff'];

    (function frame() {
      canvasConfetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colorsConfig,
      });
      canvasConfetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colorsConfig,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }

  if (animation === 'fireworks') {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: NodeJS.Timer = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      canvasConfetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        }),
      );
      canvasConfetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        }),
      );
    }, 250);
  }
}
