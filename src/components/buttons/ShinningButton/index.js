/* eslint-disable */
import ShinningButton from './ShinningButton';

const shinningCode = `
  import React from 'react';
  import PropTypes from 'prop-types';
  import Button from '@material-ui/core/Button';
  import { makeStyles } from '@material-ui/styles';
  
  const useStyles = makeStyles(({ palette, shadows }) => ({
    root: {
      position: 'relative',
      paddingLeft: 16,
      paddingRight: 16,
      background:
        'linear-gradient(to right, #aea0d5, #eaafc8)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      boxShadow: '0 0 20px 0 #f5005780',
      animation: 'mui-ripple-pulsate 1s infinite',
    },
    label: {
      color: palette.common.white,
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 700,
    },
    contained: {
      minHeight: 30,
      boxShadow: shadows[0],
      '&$focusVisible': { boxShadow: shadows[0] },
      '&:active': { boxShadow: shadows[0] },
      '&$disabled': { boxShadow: shadows[0] },
    },
  }));
  
  const ShinningButton = ({ className, ...props }) => {
    const classes = useStyles();
    return (
      <Button
        className={\`MuiButton--shinning \${className}\`}
        classes={classes}
        {...props}
      >
        Sunshine
      </Button>
    );
  };
  ShinningButton.propTypes = {
    className: PropTypes.string,
  };
  ShinningButton.defaultProps = {
    className: '',
  };
  
  export default ShinningButton;
`;
ShinningButton.info = {
  name: 'Shinning Button',
  description: 'I love to be shinned',
  links: [
    { label: 'Code Sandbox', url: 'https://codesandbox.io/s/ko3w0m4qw5' },
    { label: 'Full API', url: 'https://material-ui.com/api/button/' },
  ],
  files: [
    {
      label: 'ShinningButton.js',
      code: shinningCode,
    },
  ],
  libraries: [],
  dependencies: ['@material-ui/core'],
};
ShinningButton.codeSandbox = 'https://codesandbox.io/s/ko3w0m4qw5';

export default ShinningButton;
