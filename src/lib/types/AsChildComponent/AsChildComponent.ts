import type { ReactNode } from 'react';

export interface AsChildComponent {
  /**
   * @default false
   */
  asChild?: boolean;
  children?: ReactNode;
}
