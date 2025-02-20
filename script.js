function spawnLove(event) {
    let love = document.createElement("span");
    love.innerText = "❤️";
    love.style.position = "absolute";
    love.style.left = `${event.clientX}px`;
    love.style.top = `${event.clientY}px`;
    love.style.fontSize = `${Math.random() * 20 + 20}px`; // Saiz rawak antara 20px - 40px
    love.style.opacity = 1;
    love.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    document.body.appendChild(love);

    // Efek naik ke atas sebelum hilang
    setTimeout(() => {
        love.style.opacity = 0;
        love.style.transform = "translateY(-30px)";
    }, 100);

    // Hapus elemen lepas animasi
    setTimeout(() => {
        love.remove();
    }, 1000);
}
function spawnEmoji(event, type) {
    let emojis = {
        love: ["❤️", "💖", "💕", "💞", "💓", "💗", "💘"],
        special: ["🎉", "🌸", "🎂", "🍭", "🎶", "✨", "🎈"],
        fire: ["🔥", "⚡", "💥", "🚀", "🔥🔥", "🔥💯"]
    };

    let selectedEmojis = emojis[type] || ["❓"];
    let emoji = document.createElement("span");
    emoji.innerText = selectedEmojis[Math.floor(Math.random() * selectedEmojis.length)];
    
    // Tetapkan gaya
    emoji.style.position = "absolute";
    emoji.style.left = `${event.clientX}px`;
    emoji.style.top = `${event.clientY}px`;
    emoji.style.fontSize = `${Math.random() * 20 + 20}px`; 
    emoji.style.opacity = 1;
    emoji.style.transition = "opacity 1s ease-out, transform 1s ease-out";

    // Tambah emoji ke dalam page
    document.body.appendChild(emoji);

    // Efek naik ke atas sebelum hilang
    setTimeout(() => {
        emoji.style.opacity = 0;
        emoji.style.transform = "translateY(-30px)";
    }, 100);

    // Hapus elemen selepas animasi
    setTimeout(() => {
        emoji.remove();
    }, 1000);
}
