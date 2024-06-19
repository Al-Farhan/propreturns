export function slugify(title) {

    if (typeof title !== 'string') {
        return '';
      }

    return title
      .toLowerCase() // Convert to lowercase
      .trim() // Trim leading/trailing whitespace
      .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters except spaces and hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
  }