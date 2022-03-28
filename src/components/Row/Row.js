import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import defaultPropsMap from "Constants/defaultProps";
const { defaultProps, defaultPropTypes } = defaultPropsMap;

import styles from "./Row.module.scss";

import { showInCssClass } from "Utils/utils";

const Row = React.forwardRef(
  ({ showIn, className, children, ...props }, ref) => {
    return (
      <>
        <div
          className={cx(
            "row",
            showIn && showInCssClass("flex", showIn),
            className
          )}
          {...props}
          ref={ref}
        >
          {children}
        </div>
      </>
    );
  }
);

Row.propTypes = {
  ...defaultPropTypes,
  showIn: PropTypes.array,
};

Row.defaultProps = {
  ...defaultProps,
  showIn: ["xs", "sm", "md", "lg"],
};

export default Row;
