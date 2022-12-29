import React from 'react';
import { COLORS } from '../../constants/theme';
import { StyledBadge, Icon } from './CustomIcon.styles';
import { Text } from 'react-native';
export const CustomIcon = ({ badgeContent, size = 30, icon, color = 'black' }) => {
  const IconName = icon;

  return (
    <>
      <Text>Napraw Iconcxcvxcvxcvcx</Text>
      <Icon>
        {badgeContent ? (
          <Icon style={{ fontSize: `${size}px`, color: `${color}` }}>
            <StyledBadge badgeContent={badgeContent} />
          </Icon>
        ) : (
          <Icon
            style={{
              fontSize: `${size}px`,
              color: `${color}`,
              textAlign: 'center'
            }}
          />
        )}
      </Icon>
    </>
  );
};
