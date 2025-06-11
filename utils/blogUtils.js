// Utility functions for blog operations

export const deleteBlog = async (blogId) => {
  try {
    const response = await fetch(`/api/blogs?id=${blogId}`, {
      method: 'DELETE',
    });
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error deleting blog:', error);
    return { success: false, message: 'Network error occurred' };
  }
};

export const handleEditRedirect = (router, blogId) => {
  router.push(`/verified/dashboard/all/view-blogs/edit-blogs?id=${blogId}`);
};

export const handleDeleteWithConfirmation = async (blogId, onSuccess, onError) => {
  const confirmed = window.confirm(
    'Are you sure you want to delete this blog post? This action cannot be undone.'
  );
  
  if (confirmed) {
    const result = await deleteBlog(blogId);
    
    if (result.success) {
      onSuccess && onSuccess(result.message);
    } else {
      onError && onError(result.message);
    }
  }
};