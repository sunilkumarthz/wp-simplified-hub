
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
    const response = await fetch(`${BASE_URL}/videos/latest`);
    if (!response.ok) {
      throw new Error('Failed to fetch latest videos');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching latest videos:', error);
    throw error;
  }
};

export const fetchAllPlaylists = async (): Promise<Playlist[]> => {
  try {
    const response = await fetch(`${BASE_URL}/playlists`);
    if (!response.ok) {
      throw new Error('Failed to fetch playlists');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching playlists:', error);
    throw error;
  }
};

export const fetchAllPodcasts = async (): Promise<Podcast[]> => {
  try {
    const response = await fetch(`${BASE_URL}/podcasts`);
    if (!response.ok) {
      throw new Error('Failed to fetch podcasts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching podcasts:', error);
    throw error;
  }
};

export const fetchAllShorts = async (): Promise<Short[]> => {
  try {
    const response = await fetch(`${BASE_URL}/shorts`);
    if (!response.ok) {
      throw new Error('Failed to fetch shorts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching shorts:', error);
    throw error;
  }
};

export const searchVideos = async (keyword: string): Promise<Video[]> => {
  try {
    const response = await fetch(`${BASE_URL}/videos/search?keyword=${encodeURIComponent(keyword)}`);
    if (!response.ok) {
      throw new Error('Failed to search videos');
    }
    return await response.json();
  } catch (error) {
    console.error('Error searching videos:', error);
    throw error;
  }
};

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(`${BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
