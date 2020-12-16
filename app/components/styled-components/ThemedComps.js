import styled from 'styled-components/native';
import { CommonStyles } from '@Themes/CommonStyles';

export const ThemedView = styled.View`
    backgroundColor: ${(props) => props.theme.colors.background};
`;

export const ThemedHeader = styled.View`
    backgroundColor: ${(props) => props.theme.colors.header};
    borderBottomWidth: 0.3px;
    borderBottomColor: silver;
`;

export const ThemedContainer = styled.View`
    backgroundColor: ${(props) => props.theme.colors.background};
    display: flex;
    flex: 1;
`;

export const ThemedSubContainer = styled.View`
    backgroundColor: ${(props) => props.theme.colors.background};
    display: flex;
    flex: 1;
    paddingLeft: ${CommonStyles.container.paddingLeft};
    paddingRight: ${CommonStyles.container.paddingRight};
    flexDirection: column;
`;

export const ThemedText = styled.Text`
    color: ${(props) => props.theme.colors.text};
    fontSize: ${CommonStyles.texts.text};
    fontFamily: Piazzolla-Light;
`;

export const ThemedHeaderText = styled.Text`
    color: ${(props) => props.theme.colors.text};
    fontSize: ${CommonStyles.headerComp.headerText};
    fontFamily: Piazzolla-Bold;
    marginLeft: ${CommonStyles.headerComp.marginLeft};
`;

