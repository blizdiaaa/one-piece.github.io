document.addEventListener("DOMContentLoaded", function () {
    const main = document.getElementById("main");

    // Sample data for Luffy and his crewmates with image URLs
    const crewMembers = [
        { name: "Monkey D. Luffy", role: "Captain", image: "https://w0.peakpx.com/wallpaper/261/829/HD-wallpaper-monkey-d-luffy-portrait-artwork-manga-one-piece.jpg", info: "The captain of the Straw Hat Pirates." },
        { name: "Roronoa Zoro", role: "Swordsman", image: "https://c4.wallpaperflare.com/wallpaper/673/950/395/anime-one-piece-zoro-roronoa-wallpaper-preview.jpg", info: "The swordsman of the Straw Hat Pirates." },
        { name: "Sanji", role: "Cook", image: "https://motionbgs.com/media/1115/sanji-smoking-one-piece.jpg", info: "The cook of the Straw Hat Pirates." },
        { name: "Tony Tony Chopper", role: "Doctor", image: "https://w0.peakpx.com/wallpaper/443/556/HD-wallpaper-one-piece-tony-tony-chopper-one-piece-two-years-later.jpg", info: "The doctor of the Straw Hat Pirates." },
        { name: "Brook", role: "Musician", image: "https://cdn.wallpapersafari.com/24/54/mB75Vg.jpg", info: "The musician of the Straw Hat Pirates." },
        { name: "Nami", role: "Navigator", image: "https://i.ytimg.com/vi/LqFJHLJ4Fc8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGA8gZSg_MA8=&rs=AOn4CLDHPG6CRjK7EUUvcsvaTrQe2395lw", info: "The navigator of the Straw Hat Pirates." },
        { name: "Nico Robin", role: "Archaeologist", image: "https://wallpaperbat.com/img/630007-nico-robin-wallpaper.jpg", info: "The archaeologist of the Straw Hat Pirates." },
        { name: "Usopp", role: "Sniper", image: "https://i.ytimg.com/vi/9TaRecTiyBg/maxresdefault.jpg", info: "The sniper of the Straw Hat Pirates." },
        { name: "Franky", role: "Shipwright", image: "https://wallpapercave.com/wp/wp1899320.jpg", info: "The shipwright of the Straw Hat Pirates." },
        { name: "Jinbe", role: "Helmsman", image: "https://w0.peakpx.com/wallpaper/94/80/HD-wallpaper-one-piece-jinbe-one-piece.jpg", info: "The helmsman of the Straw Hat Pirates." }
    ];

    // Function to generate crew member cards
    function generateCards(crew) {
        main.innerHTML = "";
        crew.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${member.image}" alt="${member.name}">
                <div class="character-info">
                    <div>
                        <h2>${member.name}</h2>
                        <p>${member.info}</p>
                    </div>
                </div>
                <div class="card-content">
                    <h2>${member.name}</h2>
                    <p><strong>Role:</strong> ${member.role}</p>
                </div>
            `;
            main.appendChild(card);
        });
    }

    // Initial load
    generateCards(crewMembers);
});
