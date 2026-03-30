/**
 * Реестр стратегий анимаций
 * Каждая стратегия определяет начальный класс для анимации
 */

/**
 * @typedef {Object} AnimationStrategy
 * @property {string} initialClass - Класс, применяемый изначально (например, 'animate-fade-up')
 */

/**
 * Базовая стратегия: Fade Up (появление снизу)
 * @type {AnimationStrategy}
 */
export const fadeUpStrategy = {
  initialClass: 'animate-fade-up',
};

/**
 * Стратегия: Fade In (простое появление)
 * @type {AnimationStrategy}
 */
export const fadeInStrategy = {
  initialClass: 'animate-fade-in',
};

/**
 * Стратегия: Fade Left (появление слева)
 * @type {AnimationStrategy}
 */
export const fadeLeftStrategy = {
  initialClass: 'animate-fade-left',
};

/**
 * Стратегия: Fade Right (появление справа)
 * @type {AnimationStrategy}
 */
export const fadeRightStrategy = {
  initialClass: 'animate-fade-right',
};

/**
 * Стратегия: Scale In (появление с увеличением)
 * @type {AnimationStrategy}
 */
export const scaleInStrategy = {
  initialClass: 'animate-scale-in',
};

/**
 * Стратегия: Zoom Out (появление с уменьшением)
 * @type {AnimationStrategy}
 */
export const zoomOutStrategy = {
  initialClass: 'animate-zoom-out',
};

/**
 * Стратегия: Slide Down (появление сверху)
 * @type {AnimationStrategy}
 */
export const slideDownStrategy = {
  initialClass: 'animate-slide-down',
};

/**
 * Реестр всех доступных стратегий
 * @type {Record<string, AnimationStrategy>}
 */
export const animationStrategies = {
  'fade-up': fadeUpStrategy,
  'fade-in': fadeInStrategy,
  'fade-left': fadeLeftStrategy,
  'fade-right': fadeRightStrategy,
  'scale-in': scaleInStrategy,
  'zoom-out': zoomOutStrategy,
  'slide-down': slideDownStrategy,
};

/**
 * Получить стратегию по имени
 * @param {string} name - имя стратегии
 * @returns {AnimationStrategy}
 */
export function getStrategy(name) {
  const strategy = animationStrategies[name];
  if (!strategy) {
    console.warn(`Анимация "${name}" не найдена, используется fade-up`);
    return fadeUpStrategy;
  }
  return strategy;
}
