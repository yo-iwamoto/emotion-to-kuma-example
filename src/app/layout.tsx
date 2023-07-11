import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata = {
  title: 'emotion to kuma example',
  description: 'An example of emotion to kuma',
} satisfies Metadata;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
