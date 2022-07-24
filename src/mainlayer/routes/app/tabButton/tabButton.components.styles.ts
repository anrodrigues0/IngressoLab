import styled from 'styled-components/native';
import {Animated} from 'react-native'
type Props = {
  IsFocused?:boolean
}

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
    flex:1;
    justify-content:space-between;
    align-items:center;
    align-self:center;
`;

export const CircleIcon = styled(Animated.View)<Props>`
  background-color:${({ theme, IsFocused }) => (IsFocused ? theme.colors.main : theme.colors.white)};
  padding:8px;
  border-radius:30px;
  elevation:${({ IsFocused }) => (IsFocused ? 4 : 0)}
`;
