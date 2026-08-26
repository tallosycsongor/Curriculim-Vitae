import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Csongor Tallósy | DevOps & Cloud-Native Engineer',
  description: 'DevOps and application operations professional focused on Kubernetes, Linux, observability, CI/CD and cloud-native infrastructure.',
  openGraph: {
    title: 'Csongor Tallósy | DevOps & Cloud-Native Engineer',
    description: 'Kubernetes, Linux, observability and application operations in enterprise environments.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
