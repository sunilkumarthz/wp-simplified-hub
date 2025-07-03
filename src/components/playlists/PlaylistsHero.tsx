
interface PlaylistsHeroProps {
  totalPlaylists: number;
}

const PlaylistsHero = ({ totalPlaylists }: PlaylistsHeroProps) => {
  return (
    <div className="py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-6 animate-fade-in">
        WordPress <span className="text-gradient">Playlists</span>
      </h1>

      <p className="text-xl text-slate-300 max-w-3xl mx-auto font-roboto leading-relaxed mb-8">
        Dive deep into specific WordPress topics with our curated playlists.
        From beginner basics to advanced techniques, find the perfect learning
        path for you.
      </p>

      {/* Stats */}
      {/* <div className="flex justify-center items-center gap-8 text-center mb-12">
        <div className="space-y-2">
          <div className="text-2xl font-baloo font-bold text-wp-teal">{totalPlaylists}+</div>
          <div className="text-slate-400 text-sm">Total Playlists</div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-baloo font-bold text-wp-teal">Step-by-Step</div>
          <div className="text-slate-400 text-sm">Learning</div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-baloo font-bold text-wp-teal">Expert</div>
          <div className="text-slate-400 text-sm">Techniques</div>
        </div>
      </div> */}
    </div>
  );
};

export default PlaylistsHero;
