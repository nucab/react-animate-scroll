/**
 * @class ReactAnimateScroll
 */

import * as React from 'react';
import cx from 'classnames';

type OwnProps = {
  animateClasses?: string;
  className?: string;
  context: any;
  delay: 'delay-2s' | 'delay-3s' | 'delay-4s' | 'delay-5s';
  enabled: boolean;
  group: 'default' | string;
  offset: any;
  speed: 'slow' | 'slower' | 'fast' | 'faster';
};

const ReactAnimateScroll: React.FC<OwnProps> = props => {
  const {
    animateClasses,
    children,
    className,
    context = window,
    delay = '',
    enabled = true,
    offset = '80%',
    speed = ''
  } = props;
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    const $ = typeof window !== 'undefined' && window.$;
    const Waypoint = typeof window !== 'undefined' && window.Waypoint;
    const $current = $(wrapper.current).addClass(
      cx(className, delay, speed, { animated: animateClasses })
    );
    const element = new Waypoint({
      context,
      element: $current,
      enabled,
      offset,
      handler: () => {
        $current.addClass(animateClasses);
      }
    });
    return () => {
      element.destroy();
    };
  });
  return (
    <>
      <div ref={wrapper}>{children}</div>
    </>
  );
};

export default ReactAnimateScroll;
