export const getEmbedLink = (url) => {
    const urlParts = url.split('/');
    const lastPart = urlParts.pop();
    let youtubeEmbedLink;

    if (lastPart.startsWith('playlist?list=')) {
        const playlistId = lastPart.split('=').pop(); // Extract the playlist ID.
        youtubeEmbedLink = `https://www.youtube.com/embed/videoseries?list=${playlistId}&autoplay=0&loop=1&mute=1`; // Playlist embed link
    } else {
        // Standard video embedding for single videos.
        youtubeEmbedLink = `https://www.youtube.com/embed/${lastPart}?autoplay=0&loop=1&mute=1`;
    }

    return youtubeEmbedLink;
};

export const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i, i + size));
    }
    return chunked;
};