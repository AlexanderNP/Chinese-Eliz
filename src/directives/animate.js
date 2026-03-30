import { getStrategy } from './animations/strategies.js';

/**
 * Длительность анимации в миллисекундах
 * Должна совпадать с --animation-duration в base.css
 * @constant {number}
 */
const ANIMATION_DURATION = 600;

/**
 * Директива для анимации появления элементов при скролле
 * 
 * Использование:
 *   v-animate - fade-up по умолчанию
 *   v-animate="'fade-in'" - другой тип анимации
 *   v-animate="{ type: 'fade-up', delay: 150 }" - с задержкой
 * 
 * @example
 *   <div v-animate>Элемент</div>
 *   <div v-animate="'scale-in'">Элемент</div>
 *   <div v-animate="{ type: 'fade-left', delay: 200 }">Элемент</div>
 */
export default {
  mounted(el, binding) {
    const { strategy, delay } = parseBindingValue(binding.value);

    // Применяем базовый класс с transition
    el.classList.add('animate');

    // Применяем начальный класс анимации (например, animate-fade-up)
    const initialClass = strategy.initialClass;
    if (initialClass) {
      el.classList.add(initialClass);
    }

    // Сохраняем задержку в data-attribute для использования в Observer
    if (delay > 0) {
      el.dataset.animateDelay = delay;
    }

    // Создаём Observer
    const observer = createObserver(el, strategy);
    observer.observe(el);

    // Сохраняем observer для очистки
    el._animateObserver = observer;
  },

  beforeUnmount(el) {
    if (el._animateObserver) {
      el._animateObserver.unobserve(el);
      delete el._animateObserver;
    }
  },
};

/**
 * Парсинг значения директивы
 * @param {*} value - значение binding.value
 * @returns {{ strategy: AnimationStrategy, delay: number }}
 */
function parseBindingValue(value) {
  // По умолчанию - fade-up без задержки
  if (value === undefined || value === null) {
    return { strategy: getStrategy('fade-up'), delay: 0 };
  }

  // Строка - имя стратегии
  if (typeof value === 'string') {
    return { strategy: getStrategy(value), delay: 0 };
  }

  // Объект с параметрами
  if (typeof value === 'object') {
    const type = value.type || 'fade-up';
    const delay = value.delay || 0;
    return { strategy: getStrategy(type), delay };
  }

  // Fallback
  return { strategy: getStrategy('fade-up'), delay: 0 };
}

/**
 * Создать Intersection Observer
 * @param {HTMLElement} el - элемент
 * @param {AnimationStrategy} strategy - стратегия анимации
 * @returns {IntersectionObserver}
 */
function createObserver(el, strategy) {
  let observer;
  
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Получаем задержку из data-attribute
          const delay = getInlineDelay(el);

          // Используем requestAnimationFrame для плавной анимации
          if (delay > 0) {
            // Если есть задержка — используем setTimeout + RAF
            setTimeout(() => {
              requestAnimationFrame(() => {
                el.classList.add('is-visible');
              });
            }, delay);
          } else {
            // Если задержки нет — сразу RAF
            requestAnimationFrame(() => {
              el.classList.add('is-visible');
            });
          }
          
          // Удаляем начальный класс после завершения анимации
          setTimeout(() => {
            if (strategy.initialClass) {
              el.classList.remove(strategy.initialClass);
            }
          }, delay + ANIMATION_DURATION);

          // Перестаем наблюдать после активации
          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  return observer;
}

/**
 * Получить задержку из data-attribute
 * @param {HTMLElement} el
 * @returns {number} задержка в мс
 */
function getInlineDelay(el) {
  return parseInt(el.dataset.animateDelay || '0', 10);
}
