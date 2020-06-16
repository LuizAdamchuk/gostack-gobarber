import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 0 30px;
  padding-top: 80px;
  padding-bottom: 60px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';

  margin: 48px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 48px;
`;

export const ForgotPasswordText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 14px;
  color: #f4ede8;
`;

export const BackToSignIn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 26px 0;
  flex-direction: row;
  padding-top: 8px;
  background: #312e38;

  border-top-width: 1px;
  border-top-color: #232129;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const BackToSignInText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  color: #fff;
  font-size: 16px;

  margin-left: 12px;
`;
