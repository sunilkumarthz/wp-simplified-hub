
const BASE_URL = 'https://backend.wpsimplified.in/wp-json/wpsimplified/v1';

// Types
export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  duration: string;
  views: string;
  published_date: string;
  category: string;
}

export interface Playlist {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  video_count: number;
  duration: string;
  difficulty: string;
  url: string;
}

export interface Podcast {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  audio_url: string;
  duration: string;
  published_date: string;
  guest: string;
}

export interface Short {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
  duration: string;
  views: string;
  published_date: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  purpose: string;
}

// API Functions
export const fetchLatestVideos = async (): Promise<Video[]> => {
  try {
    console.log('Fetching latest videos from:', `${BASE_URL}/videos/latest`);
    const response = await fetch(`${BASE_URL}/videos/latest`);
    if (!response.ok) {
      throw new Error(`Failed to fetch latest videos: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Latest videos response:', data);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching latest videos:', error);
    return [];
  }
};

export const fetchAllPlaylists = async (): Promise<Playlist[]> => {
  try {
    console.log('Fetching playlists from:', `${BASE_URL}/playlists`);
    const response = await fetch(`${BASE_URL}/playlists`);
    if (!response.ok) {
      throw new Error(`Failed to fetch playlists: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Playlists response:', data);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching playlists:', error);
    return [];
  }
};

export const fetchAllPodcasts = async (): Promise<Podcast[]> => {
  try {
    console.log('Fetching podcasts from:', `${BASE_URL}/podcasts`);
    const response = await fetch(`${BASE_URL}/podcasts`);
    if (!response.ok) {
      throw new Error(`Failed to fetch podcasts: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Podcasts response:', data);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching podcasts:', error);
    return [];
  }
};

export const fetchAllShorts = async (): Promise<Short[]> => {
  try {
    console.log('Fetching shorts from:', `${BASE_URL}/shorts`);
    const response = await fetch(`${BASE_URL}/shorts`);
    if (!response.ok) {
      throw new Error(`Failed to fetch shorts: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Shorts response:', data);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching shorts:', error);
    return [];
  }
};

export const searchVideos = async (keyword: string): Promise<Video[]> => {
  try {
    console.log('Searching videos with keyword:', keyword);
    const response = await fetch(`${BASE_URL}/videos/search?keyword=${encodeURIComponent(keyword)}`);
    if (!response.ok) {
      throw new Error(`Failed to search videos: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Search videos response:', data);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error searching videos:', error);
    return [];
  }
};

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('Submitting contact form:', data);
    const response = await fetch(`${BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to submit contact form: ${response.status} ${response.statusText}`);
    }
    
    const result = await response.json();
    console.log('Contact form response:', result);
    return result;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, message: 'Failed to submit form. Please try again.' };
  }
};
