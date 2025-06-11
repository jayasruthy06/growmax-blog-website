import { Suspense } from 'react';
import EditBlogForm from '../../../../../../../components/Blog/EditBlogForm';

export const metadata = {
  title: "Edit Blogs",
  description: "Edit and manage your existing blog posts on Growmax. Update content, optimize SEO, and keep your articles fresh and relevant."
}

export default function EditBlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditBlogForm />
    </Suspense>
  );
}