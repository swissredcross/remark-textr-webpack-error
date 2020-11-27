import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import textr from "remark-textr";

export const Markdown = ({ source }) => {
  return (
    <ReactMarkdown
      {...{
        source,
        plugins: [[textr]],
      }}
    />
  );
};

Markdown.propTypes = {
  source: PropTypes.string.isRequired,
};
