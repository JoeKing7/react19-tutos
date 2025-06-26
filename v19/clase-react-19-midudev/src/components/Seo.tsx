import { version } from 'react';

interface SeoProps {
  readonly title?: string;
  readonly description?: string;
}

export default function Seo({
  title = `Nuevo en React ${version}`,
  description = 'Descripción',
}: SeoProps) {
  return (
    <>
      <h1>Seo</h1>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}
