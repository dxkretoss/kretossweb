import { useEffect } from 'react';

/**
 * Custom hook to dynamically manage page-specific SEO metadata.
 * @param {Object} metadata
 * @param {string} metadata.title - The document title
 * @param {string} metadata.description - The meta description
 */
export default function useDocumentMetadata({ title, description }) {
    useEffect(() => {
        if (title) {
            document.title = title;
        }

        if (description) {
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', description);
            } else {
                // If meta tag doesn't exist, create it
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = description;
                document.head.appendChild(meta);
            }
        }
    }, [title, description]);
}
