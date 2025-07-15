// Page-specific JavaScript for shorts page

const allShorts = [
    { id: 1, title: "CSS Grid Quick Tip", thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=533&fit=crop", duration: "0:45", views: "2.1K", category: "tips" },
    { id: 2, title: "WordPress Hook Explained", thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=533&fit=crop", duration: "1:20", views: "3.8K", category: "tips" },
    { id: 3, title: "Plugin Development Tip", thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=533&fit=crop", duration: "0:58", views: "1.9K", category: "tricks" },
    { id: 4, title: "Database Query Fix", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=533&fit=crop", duration: "1:15", views: "2.7K", category: "fixes" },
    { id: 5, title: "Security Quick Fix", thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=533&fit=crop", duration: "0:52", views: "4.2K", category: "fixes" },
    { id: 6, title: "WordPress 6.4 Update", thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=533&fit=crop", duration: "1:30", views: "5.8K", category: "updates" }
];

let filteredShorts = [...allShorts];
let currentDisplayCount = 15;

function loadAllShorts() {
    document.getElementById('loading-shorts').classList.add('hidden');
    displayShorts(filteredShorts.slice(0, currentDisplayCount));
}

function displayShorts(shorts) {
    const container = document.getElementById('shorts-grid');
    container.innerHTML = shorts.map(short => `
        <div class="shorts-card card-hover">
            <div class="relative h-full">
                <img src="${short.thumbnail}" alt="${short.title}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div class="absolute bottom-4 left-4 right-4 text-white">
                        <h3 class="text-sm font-semibold mb-1 line-clamp-2">${short.title}</h3>
                        <div class="flex items-center justify-between text-xs opacity-90">
                            <span>${short.duration}</span>
                            <span>${short.views} views</span>
                        </div>
                    </div>
                </div>
                <div class="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold">Short</div>
            </div>
        </div>
    `).join('');
    container.classList.remove('hidden');
    lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('shorts.html')) {
        loadAllShorts();
        
        // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                filteredShorts = filter === 'all' ? [...allShorts] : allShorts.filter(s => s.category === filter);
                displayShorts(filteredShorts.slice(0, currentDisplayCount));
            });
        });
    }
});