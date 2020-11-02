/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Slide = ({ content }) => (
  <div
    css={css`
      height: 100%;
      width: 100%;
    `}
  >
    <div
      css={css`
        height: 20vh;
        width: 80%;
        display: flex;
        justify-content: space-around;
      `}
    >
      {content.map((data, i) => {
        return (
          <div
            key={data + i}
            css={css`
            height: 100%;
            width: 25%;
            background-image: url('${data}');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          `}
          />
        );
      })}
    </div>
  </div>
);

export default Slide;
