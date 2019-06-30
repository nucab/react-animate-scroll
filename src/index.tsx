/**
 * @class ReactAnimateScroll
 */

import * as React from 'react';
import cx from 'classnames';

const $ = window.$;
const Waypoint = window.Waypoint;

type OwnProps = {
  animateClasses?: string;
  offset: any;
  delay: 'delay-2s' | 'delay-3s' | 'delay-4s' | 'delay-5s';
  speed: 'slow' | 'slower' | 'fast' | 'faster';
};

const ReactAnimateScroll: React.FC<OwnProps> = props => {
  const {
    animateClasses,
    children,
    delay = '',
    offset = '80%',
    speed = ''
  } = props;
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    const $current = $(wrapper.current).addClass(
      cx(delay, speed, { animated: animateClasses })
    );
    const element = new Waypoint({
      element: $current,
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
