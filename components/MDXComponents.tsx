import ImageWithCaption from './ImageWithCaption';

export const mdxComponents = {
  ImageWithCaption,
  h1: (props: any) => <h1 className="text-4xl font-bold text-slate-900 mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="text-slate-700 leading-relaxed mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside space-y-2 text-slate-700 ml-4" {...props} />,
  li: (props: any) => <li className="text-slate-700" {...props} />,
  strong: (props: any) => <strong className="font-bold text-slate-900" {...props} />,
  hr: (props: any) => <hr className="my-8 border-slate-300" {...props} />,
  a: (props: any) => (
    <a 
      className="text-blue-600 hover:text-blue-800 underline font-medium" 
      target="_blank" 
      rel="noopener noreferrer"
      {...props} 
    />
  ),
};