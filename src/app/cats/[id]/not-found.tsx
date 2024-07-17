import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 Page not found',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not Found a cat</h1>
    </main>
  );
}
