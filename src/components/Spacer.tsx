import styled from '@emotion/native';

export const Spacer = styled.View<{ height: number }>(props => ({
  height: props.height,
}));
