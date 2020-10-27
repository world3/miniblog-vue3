export interface Post {
    id: string;
    title: string;
    content: string[];
    author: string;
    publishDate: Date;
}

function assertNull(name: string, value: string | string[]) {
    if (!value) {
        throw new Error(`${name} cannot be empty`)
    }
}

export function usePost() {
    const createPost = function(title: string, content: string[], author?: string, publishDate?: Date) {
        assertNull('title', title)
        assertNull('content', content)
        return {
            id: title.split(' ').map(s => s.replace('/', '-')).join('-'),
            title,
            content,
            author: author || 'Anonymous',
            publishDate: publishDate || new Date(),
        }
    }

    const formatPublishDate = (d: Date) => {
        return `${d.getUTCMonth() + 1}/${d.getUTCDate()}/${d.getFullYear()}`
    }

    return {
        createPost,
        formatPublishDate,
    }
}