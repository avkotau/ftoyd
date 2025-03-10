import { ReactNode } from 'react';
import styled from 'styled-components';

export type VariantType = keyof typeof textStyles;

export interface TypographyProps {
  variant?: VariantType;
  children: ReactNode;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  className?: string;
}

export const Typography = (
  {
    variant = 'regular',
    children,
    fontSize,
    fontWeight,
    color,
    className
  }: TypographyProps
) => {
  return (
    <StyledText
      className={className}
      variant={variant}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.p<{ variant: VariantType; fontSize?: number; fontWeight?: number; color?: string }>`
    font-family: ${({ variant }) => textStyles[variant].fontFamily};
    font-weight: ${({ fontWeight, variant }) => fontWeight || textStyles[variant].fontWeight};
    font-size: ${({ fontSize, variant }) => fontSize || textStyles[variant].fontSize}px;
    color: ${({ color, variant }) => color || textStyles[variant].color};
    margin: 0;
`;

const textStyles = {
  regular: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: 16,
    color: 'var(--text-primary)'
  },
  muted: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    fontSize: 14,
    color: 'var(--text-secondary)'
  },
  semibold: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: 16,
    color: 'var(--text-secondary-semibold)'
  },
  semiboldPrimary: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: 16,
    color: 'var(text-primary-semibold)'
  },
  medium: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: 18,
    color: 'var(--text-primary)'
  },
  mediumLite: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    fontSize: 18,
    color: 'var(--text-primary)'
  }


  // bold: {
  //     fontFamily: 'Inter, sans-serif',
  //     fontWeight: 700,
  //     fontSize: 20,
  //     color: 'var(--text-hover)',
  // },

  // regular: {
  //     fontFamily: 'Inter, sans-serif',
  //     fontWeight: 400,
  //     fontSize: 16,
  //     color: 'var(--text-default)',
  // },


};
