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
};

const ReactAnimateScroll: React.FC<OwnProps> = props => {
  const { animateClasses, children, offset = '0' } = props;
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    const $current = $(wrapper.current).addClass(
      cx({ animated: animateClasses })
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
    <div>
      <div ref={wrapper}>{children}</div>
    </div>
  );
};

export default ReactAnimateScroll;
