import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  padding: 0 30px;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';

  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity``;
export const UserAvatar = styled.Image`
  height: 186px;
  width: 186px;
  border-radius: 96px;
  align-self: center;
`;

export const BackButton = styled.TouchableOpacity``;
