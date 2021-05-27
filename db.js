const db = {
    header_games: [{
            genre: "Luta",
            games: [
                { title: "Mortal Kombat", href: "/games/mk-x" },
                { title: "Smash Bros", href: "/games/smash-bros" },
                { title: "Killer Instict", href: "/games/killer-instict" },
                { title: "DBZ Kakarot", href: "/games/dbz-kakarot" },

            ]
        },
        {
            genre: "Ação / Aventura",
            games: [
                { title: "GTA V", href: "/games/gta-v" },
                { title: "Tomb Raider", href: "/games/tomb-raider" },
                { title: "HALO", href: "/games/halo" },
                { title: "Call of Duty", href: "/games/cod" },
            ]
        },
        {
            genre: "Corrida",
            games: [
                { title: "NEED For SPEED", href: "/games/nfs" },
                { title: "Forza Horizon", href: "/games/forza-horizon" },
            ]
        },
    ],
    banner_games: [{
            title: "Mortal Kombat X",
            price: 299.99,
            description: "Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.",
            img: "./img/principal_banner_desktop.jpg"
        },
        {
            title: "Red Dead Redemption",
            price: 199.99,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            img: "./img/principal_banner_desktop_02.jpg"
        },
    ],
    overlay_games: [{
            title: "The Legend of Zelda - Breath of the Wild",
            img: "./img/zelda_banner.jpg",
            href: "/games/zelda-breath-of-the-wild"
        },
        {
            title: "SEKIRO - Shadows Die Twice",
            img: "./img/sekiro_banner.jpg",
            href: "/games/sekiro-shadows-die-twice"
        }
    ],
    hot_games: [{
            title: "Outriders",
            price: 200.00,
            img: "./img/product-outriders.png",
            href: "/games/outriders",
            id: "game-id-0000"
        },
        {
            title: "CYBERPUNK 2077",
            price: 200.00,
            img: "./img/product-cyberpunk2077.png",
            href: "/games/cyberpunk-2077",
            id: "game-id-0001"
        },
        {
            title: "Donkey Kong Country Tropical Freeze",
            price: 200.00,
            img: "./img/product-donkey-kong-country-tropical-freeze.png",
            href: "/games/dk-country-tropical-freeze",
            id: "game-id-0002"
        },
    ]
}