import React from 'react';
import { Flex, Textt, ImageComponent, Spacer } from '../../../../components';
import { TabContainer } from './HeaderTabs.styles';
import { colors } from '../../../../infrasctructure/theme';
import { headerTabInfo } from '../../../../infrasctructure/data';

const HeaderTabs = () => {
  return (
    <Flex flexEnd>
      {headerTabInfo.map((tab) => (
        <TabContainer backgroundColor={tab.backgroundColor} key={tab.title}>
          <Textt color={colors.lightGray} textAlign>
            {tab.title}
          </Textt>
          <ImageComponent img={tab.image} width="50px" height="15px" />
        </TabContainer>
      ))}
    </Flex>
  );
};

export default HeaderTabs;
