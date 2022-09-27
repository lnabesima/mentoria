import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import CircleIcon from '@mui/icons-material/Circle';
import style from './styles';

export enum AlertStatus {
  Ok = 'OK',
  Warning = 'WARNING',
  Critical = 'CRITICAL',
}

type AlertColorMap = Record<string, 'success' | 'primary' | 'error'>

const colorMap: AlertColorMap = {
  [AlertStatus.Ok]: 'success',
  [AlertStatus.Warning]: 'primary',
  [AlertStatus.Critical]: 'error',
};

const alertSizeMap = {
  small: { height: '12px', width: '12px' },
  medium: { height: '24px', width: '24px' },
  large: { height: '48px', width: '48px' },
}

interface IProps {
  status: AlertStatus;
  size?: 'small' | 'medium' | 'large';
}

const Alert: React.FC<IProps> = (props) => {
  const { status, size } = props;

  const styleProps = size ? alertSizeMap[size] : alertSizeMap.small;

  return (
    <CircleIcon css={style(styleProps)} color={colorMap[status]} />
  );
};

Alert.defaultProps = {
  size: 'small',
};
  
export default Alert;
