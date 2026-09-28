/* The Docs page for every component.
   Same as Storybook's default, plus a "Code" section: each file the
   component is made of, folded, so you can open it and read along. */

import { Title, Subtitle, Description, Primary, Controls, Stories, Source, useOf } from '@storybook/addon-docs/blocks';

type CodeFile = { name: string; code: string };

const summaryStyle = {
  cursor: 'pointer',
  padding: '12px 16px',
  fontFamily: 'ui-monospace, Menlo, monospace',
  fontSize: 14,
  fontWeight: 600,
  border: '1px solid rgba(0,0,0,0.1)',
  borderRadius: 8,
  marginBottom: 8,
};

function CodeFileBlock({ name, code }: CodeFile) {
  const language = name.endsWith('.css') ? 'css' : 'tsx';
  return (
    <details style={{ marginBottom: 8 }}>
      <summary style={summaryStyle}>{name}</summary>
      <Source code={code} language={language} dark />
    </details>
  );
}

function ComponentCode() {
  const resolved = useOf('meta', ['meta']);
  const files = (resolved.type === 'meta' ? resolved.preparedMeta.parameters.code : undefined) as CodeFile[] | undefined;
  if (!files) return null;

  return (
    <>
      <h3>Code</h3>
      <p>The files this is made of. Click to open.</p>
      {files.map((file) => (
        <CodeFileBlock key={file.name} {...file} />
      ))}
    </>
  );
}

export function DocsPage() {
  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      <Controls />
      <ComponentCode />
      <Stories />
    </>
  );
}
