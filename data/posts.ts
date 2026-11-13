import {Post} from '@/types/posts'

const posts: Post[] = [
    {
        id: '1',
        title: 'General',
        body: 'General Knowledge',
        author: 'Billboard',
        date: '2026-06-01',
        comments:[
            {
                id: '1', text: 'Great', username: 'Jane'
            },
            {
                id: '2', text: 'Great2', username: 'Jane2'
            }
        ]
    },
    {
        id: '2',
        title: 'Technology',
        body: 'Latest in technology',
        author: 'Ellias',
        date: '2026-07-01',
        comments:[
            {
                id: '1', text: 'Great', username: 'Jane'
            },
            {
                id: '2', text: 'Great2', username: 'Jane2'
            }
        ]
    },
    {
        id: '3',
        title: 'Science',
        body: 'Latest in science',
        author: 'Alexander',
        date: '2026-08-01',
        comments:[
            {
                id: '1', text: 'Great', username: 'Jane'
            },
            {
                id: '2', text: 'Great2', username: 'Jane2'
            }
        ]
    },
    {
        id: '4',
        title: 'Health',
        body: 'Latest in health',
        author: 'Zain',
        date: '2026-09-01',
        comments:[
            {
                id: '1', text: 'Great', username: 'Jane'
            },
            {
                id: '2', text: 'Great2', username: 'Jane2'
            }
        ]
    }
];


export default posts;