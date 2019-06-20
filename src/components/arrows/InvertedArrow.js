import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Icon from 'components/predefined/Icon';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  root: {
    borderRadius: '50%',
    border: '1px solid',
    borderColor: 'rgba(255, 255, 255, 0.6)',
    width: 40,
    minWidth: 40,
    height: 40,
    '& .MuiIcon-root': {
      transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.38)',
      borderColor: palette.common.white,
      '& .MuiIcon-root': {
        transform: 'scale(1.3)',
        [breakpoints.up('md')]: {
          transform: 'scale(1.7)',
        },
      },
    },
    [breakpoints.up('sm')]: {
      width: 48,
      minWidth: 48,
      height: 48,
    },
    [breakpoints.up('md')]: {
      width: 64,
      minWidth: 64,
      height: 64,
    },
  },
  label: {
    color: palette.common.white,
  },
}));

const InvertedArrow = ({ direction, iconProps, ...props }) => {
  const classes = useStyles();
  return (
    <Button classes={classes} {...props}>
      <Icon>{`keyboard_arrow_${direction}`}</Icon>
    </Button>
  );
};

InvertedArrow.propTypes = {
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
  iconProps: PropTypes.shape({}),
  className: PropTypes.string,
};
InvertedArrow.defaultProps = {
  iconProps: {},
  className: '',
};

InvertedArrow.code = `
  import React from 'react';
  import PropTypes from 'prop-types';
  import { makeStyles } from '@material-ui/styles';
  import Button from '@material-ui/core/Button';
  import Icon from 'components/predefined/Icon';
  
  const useStyles = makeStyles(({ palette, breakpoints }) => ({
    root: {
      borderRadius: '50%',
      border: '1px solid',
      borderColor: 'rgba(255, 255, 255, 0.6)',
      width: 40,
      minWidth: 40,
      height: 40,
      '& .MuiIcon-root': {
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
      },
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.38)',
        borderColor: palette.common.white,
        '& .MuiIcon-root': {
          transform: 'scale(1.3)',
          [breakpoints.up('md')]: {
            transform: 'scale(1.7)',
          },
        },
      },
      [breakpoints.up('sm')]: {
        width: 48,
        minWidth: 48,
        height: 48,
      },
      [breakpoints.up('md')]: {
        width: 64,
        minWidth: 64,
        height: 64,
      },
    },
    label: {
      color: palette.common.white,
    },
  }));
  
  const InvertedArrow = ({ direction, iconProps, ...props }) => {
    const classes = useStyles();
    return (
      <Button classes={classes} {...props}>
        <Icon>{\`keyboard_arrow_\${direction}\`}</Icon>
      </Button>
    );
  };
  
  InvertedArrow.propTypes = {
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
    iconProps: PropTypes.shape({}),
    className: PropTypes.string,
  };
  InvertedArrow.defaultProps = {
    iconProps: {},
    className: '',
  };
  
  export default InvertedArrow;

`;

export default InvertedArrow;
