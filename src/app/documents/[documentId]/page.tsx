import Editor from './editor';

interface DocumentPageProps {
  params: { documentId: string };
}

export default async function DocumentPage({ params }: DocumentPageProps) {

  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <Editor />
    </div>
  );
}
