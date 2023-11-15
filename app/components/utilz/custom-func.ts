export default function changeDateFormat(created_at: any) {
    const date = new Date(created_at);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options as any);
    return formattedDate;
}

export function storiesCount (stories: any) {
    const parsed = JSON.parse(stories?.toString() || '{}');
    return parsed.length;
}

export function totalWordCount (stories: any) {
    let sum = 0;
    stories.map((story: any) => {
        sum += story.word_count;
    })
    return sum;
}

export function totalChapters (stories: any) {
    let sum = 0;
    stories.map((story: any) => {
        try {
          const parsed = JSON.parse(story.chapters?.toString() || '{}');
          sum += parsed.length;
        } catch (error) {
          console.error('Error parsing JSON:', error);
          // Handle the error gracefully
        }
    });
    return sum;
}
