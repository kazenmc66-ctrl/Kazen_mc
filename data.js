// Semua konten website disimpan di array ini.
// Tambahkan object baru untuk menambah konten. Tidak perlu membuat file HTML baru.
const addonsData = [

  {
    id: "world-utilities",
    name: "World Utilities",
    category: "Addon",
    version: "Tidak dicantumkan",
    thumbnail: "assets/thumbs/world-utilities.jpg",
    description: "Kumpulan alat untuk mengatur dunia, teleportasi, dan pekerjaan tambang dari satu menu.",
    features: [
      "Waypoint dan teleport lintas dimensi",
      "Teleport ke koordinat atau pemain",
      "Kontrol cuaca dan waktu",
      "Auto Collect item",
      "Vein Miner",
      "Grid Miner hingga 9x9",
      "Auto Totem",
      "Auto Smelt dan Cook"
    ],
    download: "https://www.curseforge.com/minecraft-bedrock/addons/world-utilities-voxen/files/8582878"
  },

  {
    id: "farmers-delight-bedrock",
    name: "Farmer's Delight: Bedrock",
    category: "Addon",
    version: "Tidak dicantumkan",
    thumbnail: "https://media.forgecdn.net/attachments/1908/962/mcpedl-png.png",
    description: "Addon bertani dan memasak dengan tanaman baru, bahan masakan, serta peralatan dapur.",
    features: [
      "Kubis, bawang, tomat, dan nasi",
      "Rich soil",
      "Mushroom colony",
      "Cutting board dan pisau",
      "Cooking pot dan skillet",
      "Farmer's Book",
      "Dukungan 29 bahasa Minecraft"
    ],
    download: "https://edge.mcpedl.com/files/8789/351/Farmers%20Delight%20Bedrock%20(Unofficial%20port)%20V15.0.4.mcaddon"
  },

  {
    id: "bedrock-reimagined",
    name: "Bedrock Reimagined",
    category: "Addon",
    version: "Tidak dicantumkan",
    thumbnail: "https://media.forgecdn.net/attachments/1686/843/mcpedl-jpg.jpg",
    description: "Ekspansi survival besar dengan biome, struktur, mob, sihir, mesin, dan sistem quest.",
    features: [
      "Bos dan mini-bos",
      "Struktur kustom",
      "Mob hostile baru",
      "Sistem Magic dan Mana",
      "Mesin, pipa, dan otomasi",
      "Badai pasir dan hujan meteor",
      "Bijih, armor, senjata, dan alat baru",
      "Sistem quest RPG",
      "Biome kustom",
      "UI kustom dan minimap"
    ],
    download: "https://www.curseforge.com/minecraft-bedrock/addons/bedrock-reimagined/download/8693352"
  },

  {
    id: "better-on-bedrock",
    name: "Better on Bedrock",
    category: "Addon",
    version: "26.10",
    thumbnail: "https://i.pinimg.com/736x/57/41/c1/5741c12c716325fba7a20772a2daf98a.jpg",
    description: "Ekspansi vanilla-friendly untuk biome, struktur, item, mob, dan progresi survival.",
    features: [
      "Biome baru",
      "Item dan mob baru",
      "Trader Outpost",
      "Waystone Tower",
      "Adventurer Campsite",
      "Backpack dan scroll",
      "Blok dan crafting baru",
      "Tidak memerlukan experimental toggles"
    ],
    download: "https://www.curseforge.com/minecraft-bedrock/addons/better-on-bedrock/download/6943152"
  },

  {
    id: "modern-furniture",
    name: "Modern Furniture",
    category: "Addon",
    version: "Tidak dicantumkan",
    thumbnail: "assets/thumbs/modern-furniture.jpg",
    description: "Paket dekorasi rumah dengan ratusan furnitur, blok, lampu, dan perabot yang bisa dipakai.",
    features: [
      "Lebih dari 800 furnitur dan blok",
      "Sofa modular",
      "Furnitur dapur fungsional",
      "Lampu dan sakelar",
      "Kursi yang dapat diduduki",
      "Karpet dengan banyak desain",
      "Pintu garasi fungsional",
      "Tirai yang dapat dibuka dan ditutup"
    ],
    download: "https://mcpedl.com/modern-furniture-survival-addon/"
  },

  {
    id: "survival-reworked",
    name: "Survival Reworked",
    category: "Addon",
    version: "Tidak dicantumkan",
    thumbnail: "https://media.forgecdn.net/attachments/1833/939/keyart_1-8-1-png.png",
    description: "Survival yang lebih panjang dengan artefak, dungeon, mob baru, nutrisi, dan makanan yang bisa rusak.",
    features: [
      "Sistem artefak dengan kemampuan unik",
      "Lebih dari 100 mob baru",
      "Bos dan tantangan baru",
      "Biome, dungeon, dan reruntuhan",
      "Sistem memancing baru",
      "Nutrisi dan saturasi makanan",
      "Sistem pembusukan makanan",
      "Kulkas dan slot artefak"
    ],
    download: "https://edge.mcpedl.com/files/8756/395/SR%201.8.1.5.mcaddon"
  },

  {
    id: "more-tools-addon",
    name: "More Tools Addon",
    category: "Addon",
    version: "26.3",
    thumbnail: "https://media.forgecdn.net/attachments/988/142/mcpedl.png",
    description: "Koleksi alat, senjata, armor, bijih, dan blok tambahan dengan gaya vanilla.",
    features: [
      "Lebih dari 800 alat dan item",
      "20 blok baru",
      "Bijih baru di Overworld, Nether, dan End",
      "Upgrade Bench",
      "Hammer dengan area tambang 3x3",
      "Mace, battle axe, scythe, dan Leviathan Axe",
      "Armor trim vanilla-style",
      "Tidak memerlukan experimental features"
    ],
    download: "https://edge.mcpedl.com/files/8316/326/BP_RP_MTA_26.3.mcaddon"
  },

  {
    id: "quality-of-feature",
    name: "Quality of Feature",
    category: "Addon",
    version: "26.36",
    thumbnail: "https://cdn.jsdelivr.net/gh/aitji/QoF@sources/.github/img/settings/v1.5.3.png",
    description: "Kumpulan tweak kecil untuk membuat aktivitas sehari-hari di survival terasa lebih praktis.",
    features: [
      "Dynamic lighting",
      "Membuka banyak pintu sekaligus",
      "Memperbaiki anvil dengan iron ingot",
      "Concrete powder mengeras saat terkena air",
      "Membawa container tanpa kehilangan isinya",
      "Menukar mainhand dan offhand",
      "Panen otomatis dengan replant",
      "Resep crafting dan smelting tambahan"
    ],
    download: "https://github.com/aitji/QoF/releases/download/v1.5.0/QoF-1.5.0.mcaddon"
  },

  {
    id: "spartans-mech",
    name: "Spartan's Mech",
    category: "Addon",
    version: "1.21.120",
    thumbnail: "https://media.forgecdn.net/attachments/1645/892/mcpedl-png.png",
    description: "Addon robot tempur dengan beberapa jenis mech, senjata, turret, dan kendaraan terbang.",
    features: [
      "Berbagai jenis mech",
      "Gatling, rocket launcher, railgun, laser gun, dan sniper",
      "Mech Table",
      "Robot Soldier dan War Drone",
      "Radar pemanggil gelombang robot",
      "Turret yang dikendalikan villager",
      "Nitro dan perisai energi",
      "Mech yang dapat terbang"
    ],
    download: "https://edge.mcpedl.com/files/7494/69/Spartan%27s%20Mech.mcaddon"
  },

  {
    id: "actual-guns-addon",
    name: "Actual Guns Addon",
    category: "Addon",
    version: "1.26+",
    thumbnail:
      "assets/thumbs/actual-guns-addon.jpg",
    description:
      "Addon senjata modern untuk world bertema militer, modern, adventure, atau roleplay.",
    features: [
      "Menambahkan berbagai jenis senjata bertema modern",
      "Cocok untuk world bertema modern, adventure, atau roleplay.",
      "Memiliki model dan tampilan yang dibuat khusus untuk Minecraft Bedrock",
      "Menambahkan pengalaman gameplay yang berbeda dari Minecraft vanilla.",
      "Dapat digunakan sebagai bagian dari konsep world atau server bertema khusus.",
    ],
    download:
      "https://www.curseforge.com/minecraft-bedrock/addons/actual-guns-addon/download/8146357",
  },
  {
    id: "deathcoords-addon",
    name: "DeathCoords",
    category: "Resource Pack",
    version: "1.26+",
    thumbnail:
      "assets/thumbs/deathcoords.jpg",
    description:
      "Resource pack yang menandai lokasi kematian dan menunjukkan jarak menuju item yang tertinggal.",
    features: [
      "Menampilkan jarak menuju lokasi kematian.",
      "Penanda lokasi otomatis menghilang setelah pemain mencapai lokasi tersebut.",
      "Cocok untuk Survival, Server, dan Realm",
      "Kompatibel dengan berbagai resource pack lainnya.",
    ],
    download:
      "https://www.curseforge.com/minecraft-bedrock/texture-packs/death-coords/download/7652063",
  },
  {
    id: "dynamicsurroundings-addon",
    name: "DynamicSurroundings",
    category: "Resource Pack",
    version: "1.26+",
    thumbnail:
      "assets/thumbs/dynamic-surroundings.jpg",
    description:
      "Resource pack audio untuk langkah kaki, air, mob, angin, dan ambience biome.",

    features: [
      "Suara lingkungan lebih realistis.",
      "Audio langkah kaki yang lebih beragam.",
      "Suara air dan aktivitas berenang yang diperbaiki.",
      "Suara lingkungan/biome yang lebih atmosferik.",
      "Berbagai suara mob diperbaiki.",
    ],
    download:
      "https://www.curseforge.com/minecraft-bedrock/texture-packs/dynamicsurroundings-sounds-bedrock/download/8738262",
  },
  {
    id: "dynamic-boat-trails",
    name: "Dynamic Boat Trails",
    category: "Resource Pack",
    version: "1.26+",
    thumbnail:
      "assets/thumbs/dynamic-boat-trails.jpg",
    description:
      "Resource pack yang menambahkan jejak air, busa, dan percikan saat perahu bergerak.",
    features: [
      "Efek jejak air (wake trail) di belakang perahu.",
      "Efek busa, riak air, dan percikan.",
      "Efek partikel saat perahu bergerak maupun diam.",
      "Efek visual yang tetap terlihat dalam kondisi malam dan bawah air.",
      "Ringan dan ramah performa.",
      "Resolusi 16x",
    ],
    download:
      "https://www.curseforge.com/minecraft-bedrock/texture-packs/dynamic-boat-trails/download/8551936",
  },
  {
    id: "raiyons-java-saturation",
    name: "Raiyons Java Saturation",
    category: "Resource Pack",
    version: "1.20+",
    thumbnail:
      "assets/thumbs/raiyons-java-saturation.jpg",
    description:
      "Mengubah saturation dan regenerasi Bedrock agar lebih mendekati sistem Java Edition.",
    features: [
      "Regenerasi kesehatan berbasis saturation seperti Java.",
      "Menampilkan jumlah saturation pada HUD.",
      "Regenerasi darah menjadi lebih cepat sesuai tingkat saturation.",
      "Nilai saturation makanan menjadi lebih berpengaruh.",
      "Tersedia versi dengan UI dan No UI.",
      "Tidak menonaktifkan achievements.",
    ],
    download:
      "https://www.curseforge.com/minecraft-bedrock/addons/raiyons-java-saturation-regeneration/download/8059192",
  },
  {
    id: "world-builder",
    name: "World Builder",
    category: "Addon",
    version: "1.26+",
    thumbnail:
      "assets/thumbs/world-builder.jpg",
    description:
      "Alat bantu membangun untuk memilih area, menyalin struktur, mengisi blok, dan membuat bentuk dasar.",
    features: [
      "Selection Tool.",
      "Copy & Paste.",
      "Undo & Redo.",
      "Fill Selection.",
      "Membuat bentuk seperti cube, sphere, dan triangle.",
      "Mempermudah pembangunan struktur besar.",
    ],
    download:
      "https://www.mediafire.com/file/9o7lkgfgnmlnpji/World+Builder+Add-On+(addon)+(MDF).mcaddon/file",
  },
  {
    id: "combine-anything",
    name: "Combine Anything!",
    category: "Addon",
    version: "26.40, 26.10",
    thumbnail:
      "https://media.forgecdn.net/attachments/1627/611/1000246125-jpg.jpg",
    description:
      "Meja khusus untuk menggabungkan bahan menjadi alat, armor, dan senjata dengan kemampuan unik.",
    features: [
      "Combine Table",
      "Membuat lebih dari 30 item khusus",
      "Senjata dan armor dengan kemampuan unik",
      "Alat tambang area luas",
      "Item khusus seperti Teleport Compass",
    ],
    download:
      "https://www.curseforge.com/minecraft-bedrock/addons/combine-anything",
  },

  {
    id: "comforts-addon-unofficial",
    name: "Comforts Addon",
    category: "Addon",
    version: "1.21 + 26.30",
    thumbnail:
      "https://media.forgecdn.net/attachments/1558/314/comforts-1-1068x601-jpg-jpg.jpg",
    description:
      "Sleeping Bag dan Hammock untuk beristirahat tanpa memindahkan spawn point.",
    features: [
      "Sleeping Bag portabel",
      "Hammock untuk melewati siang",
      "Tersedia dalam 16 warna",
      "Bisa diwarnai ulang",
      "Cocok untuk survival",
    ],
    download: "https://edge.mcpedl.com/files/8766/10/Comforts%20Addon.mcaddon",
  },

  {
    id: "create-add-on",
    name: "Create Add-On",
    category: "Addon",
    version: "26+",
    thumbnail: "https://img.youtube.com/vi/GywuJ2kua9U/hqdefault.jpg",
    description:
      "Mesin dan sistem otomasi untuk membangun pabrik serta lini produksi di Bedrock.",
    features: [
      "Mesin-mesin baru",
      "Pabrik otomatis",
      "Lini produksi kompleks",
      "Pemrosesan sumber daya",
      "Transportasi item",
    ],
    download:
      "https://www.mediafire.com/file_premium/317i2517yejb5rn/create_addon.mcaddon/file",
  },

  {
    id: "freecam",
    name: "FreeCam",
    category: "Addon",
    version: "1.21 + 26.30",
    thumbnail:
      "https://media.forgecdn.net/attachments/1894/826/freecam-v3-jpg.jpg",
    description:
      "Kamera bebas untuk melihat dunia tanpa memindahkan karakter. Berguna untuk screenshot dan video.",
    features: [
      "Kamera bebas",
      "Mendukung PC dan mobile",
      "Bisa digunakan di multiplayer",
      "Cocok untuk screenshot dan video",
      "Tidak menonaktifkan achievement",
    ],
    download: "https://edge.mcpedl.com/files/8750/337/FreeCam%20V3_1.mcpack",
  },

  {
    id: "human-companions",
    name: "Human Companions",
    category: "Addon",
    version: "26.40, 26.30, 26.20",
    thumbnail:
      "assets/thumbs/human-companions.png",
    description:
      "Companion manusia yang bisa direkrut, dilengkapi armor, dan diberi beberapa perintah sederhana.",
    features: [
      "Berbagai tipe companion",
      "Dapat diberi armor dan senjata",
      "Mode Follow, Defend, Patrol, dan Rest",
      "Memiliki sistem leveling",
      "Mendukung multiplayer dan Realms",
    ],
    download:
      "https://www.curseforge.com/minecraft-bedrock/addons/human-companions/files/8786360",
  },

  {
    id: "real-ragdoll",
    name: "Real Ragdoll",
    category: "Addon",
    version: "1.2.1",
    thumbnail:
      "https://media.forgecdn.net/attachments/1873/527/realrag-png.png",
    description:
      "Mengganti animasi kematian mob dengan tubuh ragdoll yang bereaksi pada benturan dan ledakan.",
    features: [
      "Animasi kematian realistis",
      "Bereaksi terhadap serangan dan ledakan",
      "Tubuh dapat bertabrakan dengan lingkungan",
      "Ragdoll dapat didorong pemain",
      "Pengaturan jumlah dan waktu mayat",
    ],
    download: "https://mcpedl.com/real-ragdoll/#downloads",
  },
  {
    id: "gravestones",
    name: "GraveStones",
    category: "Addon",
    version: "1.21-26.0",
    thumbnail:
      "https://media.forgecdn.net/attachments/1099/308/gravestones-png.png",
    description:
      "Membuat makam di lokasi kematian agar inventaris lebih mudah ditemukan dan diambil kembali.",
    features: [
      "Menyimpan seluruh inventaris",
      "Memberikan key menuju makam",
      "Menampilkan koordinat makam",
      "Makam hanya dapat dibuka pemiliknya",
      "Mendukung multiplayer",
    ],
    download:
      "https://edge.mcpedl.com/files/8012/745/Gravestones%20V2.0.8.mcaddon",
  },
  {
    id: "utilities-vein-miner",
    name: "Utilities Vein Miner",
    category: "Addon",
    version: "1.21-26.20",
    thumbnail:
      "https://media.forgecdn.net/attachments/1640/595/utilities-vein-miner-mcpedl-v5-3-png.png",
    description:
      "Memecahkan blok yang terhubung sekaligus untuk mempercepat penambangan dan penebangan.",
    features: [
      "Menambang vein bijih sekaligus",
      "Mode penghancur area",
      "Tree Capitator bawaan",
      "Mendukung Fortune dan Silk Touch",
      "Memiliki pengaturan batas blok",
    ],
    download:
      "https://www.curseforge.com/minecraft-bedrock/addons/utilities-vein-miner/files/8133613",
  },
  {
    id: "backpacks",
    name: "Backpacks",
    category: "Addon",
    version: "26.10-26.0",
    thumbnail:
      "assets/thumbs/backpacks.jpg",
    description:
      "Backpack dengan beberapa ukuran dan varian khusus untuk menambah ruang simpan saat menjelajah.",
    features: [
      "Backpack Small, Medium, dan Large",
      "Ender Backpack dengan inventaris bersama",
      "Rocket Backpack untuk terbang",
      "Grave Backpack untuk melindungi item",
      "Search bar untuk mencari item",
    ],
    download:
      "https://www.curseforge.com/minecraft-bedrock/addons/backpacks-add-on/files/8029449",
  },
  {
    "id": "naturalist-addon",
    "name": "Naturalist Add-On",
    "category": "Addon",
    "version": "26.1.2; Bedrock 1.16+",
    "thumbnail": "assets/addons/naturalist-addon.jpg",
    "description": "Hidupkan dunia Bedrock dengan lebih dari 200 hewan dan bayi yang muncul alami di berbagai bioma.",
    "features": [
      "200+ hewan dan varian bayi",
      "Pemijahan alami di berbagai bioma",
      "Hewan dapat dijinakkan dan ditunggangi",
      "Interaksi satwa untuk pengalaman survival"
    ],
    "download": "https://chunk.gg/@starfish-studios/naturalist"
  },
  {
    "id": "more-simple-structures",
    "name": "More Simple Structures",
    "category": "Addon",
    "version": "v1.1.0; Bedrock 26.40",
    "thumbnail": "assets/addons/more-simple-structures.png",
    "description": "Tambahkan reruntuhan, piramida, crypt, camp, dan struktur alami baru untuk mendorong eksplorasi.",
    "features": [
      "Struktur alami baru",
      "Mega Desert Pyramid",
      "Pillager Camps prosedural",
      "Mobs Decayed dan Pharaoh",
      "Dukungan perintah /locate"
    ],
    "download": "https://mcpedl.com/more-simple-structures-addon/"
  },
  {
    "id": "simple-waystone",
    "name": "Simple Waystone",
    "category": "Addon",
    "version": "v8.3; Bedrock 26.30+",
    "thumbnail": "assets/addons/simple-waystone.png",
    "description": "Gunakan waystone untuk perjalanan cepat antarlokasi dan antardimensi dengan sistem teleportasi berbasis XP.",
    "features": [
      "Teleportasi antarlokasi dan antardimensi",
      "Waystone Full hingga 256 titik",
      "Teleport Shard dan Warpstone Pedestal",
      "Diskon biaya XP melalui upgrade",
      "Favorit, filter dimensi, dan cooldown"
    ],
    "download": "https://mcpedl.com/simple-waystone/"
  },
  {
    "id": "unofficial-croptopia-beta",
    "name": "Unofficial Croptopia [Beta]",
    "category": "Addon",
    "version": "Bedrock 1.19.40–1.19.50",
    "thumbnail": "assets/addons/unofficial-croptopia-beta.png",
    "description": "Perkaya pertanian dan makanan dengan varian buah, tanaman, dan hasil pangan baru untuk dunia Bedrock.",
    "features": [
      "Buah dan tanaman baru",
      "Jeruk, pisang, mangga, kelapa, tomat, dan anggur",
      "Konten muncul di dunia permainan",
      "Behavior Pack dan Resource Pack tersedia"
    ],
    "download": "https://mcpedl.com/unofficial-croptopia/"
  },
  {
    "id": "cmdbloccs-vehicles",
    "name": "CMDBlocc's Vehicles",
    "category": "Addon",
    "version": "1.2.1; Bedrock 1.21.71+",
    "thumbnail": "assets/addons/cmdbloccs-vehicles.png",
    "description": "Tambahkan 15 kendaraan detail, dari mobil sport hingga moped, lengkap dengan sistem kepemilikan dan perawatan.",
    "features": [
      "15 kendaraan berbeda",
      "Kendaraan dapat dicat ulang",
      "Sistem kepemilikan, jual, dan tukar",
      "Perawatan dan kerusakan tabrakan",
      "Inventaris bagasi yang berfungsi"
    ],
    "download": "https://www.curseforge.com/minecraft-bedrock/addons/cmdbloccs-vehicles"
  },
  {
    "id": "wizards-and-magic",
    "name": "Wizards and Magic",
    "category": "Addon",
    "version": "26.40+; Bedrock",
    "thumbnail": "assets/addons/wizards-and-magic.png",
    "description": "Hadirkan penyihir elemental, mantra, scroll, soul, dan pertarungan boss ke dalam petualangan Bedrock.",
    "features": [
      "Fire, Dark, Ocean, Nature, Earth, Frost, Air, dan Light Wizard",
      "Scroll dan buku mantra",
      "Arcane Wizard di The End",
      "Pertarungan boss dengan serangan elemental",
      "Magic fae di berbagai biome"
    ],
    "download": "https://mcpedl.com/wizards-and-magic/"
  },
  {
    "id": "lightmans-currency-be-port",
    "name": "Lightman's Currency (BE Port)",
    "category": "Addon",
    "version": "Beta 1.2; Bedrock 26.50",
    "thumbnail": "assets/addons/lightmans-currency-be-port.jpg",
    "description": "Bangun sistem ekonomi multiplayer dengan koin, dompet, rekening bank, dan mesin dagang yang aman.",
    "features": [
      "Sistem uang berbasis koin",
      "Dompet yang dapat di-upgrade",
      "Mesin dagang terlindungi pemilik",
      "Rekening bank pribadi",
      "Konfigurasi crafting dan peleburan koin"
    ],
    "download": "https://www.curseforge.com/minecraft-bedrock/addons/lightmans-currency-be-port"
  },
  {
    "id": "red-securitycraft",
    "name": "[RED] SecurityCraft v1.6.0",
    "category": "Addon",
    "version": "v1.6.0; Bedrock 26.40",
    "thumbnail": "assets/addons/red-securitycraft.png",
    "description": "Perkuat basis multiplayer dengan blok pelindung, keypad, kamera, turret, ranjau, dan sistem whitelist.",
    "features": [
      "Blok tahan ledakan dan hanya dapat dihapus pemilik",
      "Pintu, keypad, pemindai retinal, dan peti berpassword",
      "Sentry turret dengan beberapa mode",
      "Kamera keamanan dan monitor",
      "Ranjau, laser, dan modul disguise"
    ],
    "download": "https://www.curseforge.com/minecraft-bedrock/addons/red-securitycraft"
  },
  {
    "id": "conqueror-of-villagers",
    "name": "Conqueror Of Villagers",
    "category": "Addon",
    "version": "Bedrock 1.21.101",
    "thumbnail": "assets/addons/conqueror-of-villagers.png",
    "description": "Selamatkan dan rekrut villager, beri mereka profesi, lalu panggil pekerja yang menghasilkan sumber daya otomatis.",
    "features": [
      "Menyelamatkan villager yang ditawan",
      "Mengubah villager menjadi Citizen",
      "Menetapkan profesi melalui Job Manual",
      "Miner dan Lumberjack dengan kontrak kerja",
      "Produksi mineral dan kayu otomatis"
    ],
    "download": "https://mcpedl.com/conqueror-of-villagers/"
  },
  {
    "id": "spark-portals",
    "name": "Spark Portals Add-On",
    "category": "Addon",
    "version": "Bedrock 1.20.60+",
    "thumbnail": "assets/addons/spark-portals.jpg",
    "description": "Buat dan hubungkan portal berwarna untuk berpindah cepat ke seluruh dimensi dunia Minecraft.",
    "features": [
      "Teleportasi lintas dimensi",
      "Portal dalam semua warna Minecraft",
      "Portal dapat ditautkan berpasangan",
      "Mendukung hingga 160 portal",
      "Blok portal custom yang dapat dicraft"
    ],
    "download": "https://chunk.gg/@spark-universe/spark-portals"
  },
];
// Data map dipisahkan agar mudah ditambah tanpa tercampur dengan addon.
const mapsData = [
  {
    id: "friend-a-horror-adventure",
    name: "F.R.I.E.N.D. : A Horror Adventure",
    category: "Map",
    version: "1.17+",
    thumbnail: "https://st2.mcpedl.com/submissions/84776/100/ce73ac7f2d774368915d58bf41be3aae_1-520x245.png",
    description: "Adventure horror di hutan terpencil dengan kejadian misterius dan secret ending.",
    features: [
      "Tema horror adventure",
      "Vanilla tanpa mod",
      "Tidak membutuhkan texture pack khusus",
      "Memiliki secret ending"
    ],
    download: "https://www.mediafire.com/file/lwicbxz4rg6mb0j/FRIEND.mcworld/file"
  },

  {
    id: "strange-rooms",
    name: "Strange Rooms",
    category: "Map",
    version: "Tidak dicantumkan",
    thumbnail: "https://st2.mcpedl.com/submissions/113481/100/img20240125165626_1-520x245.png",
    description: "Escape room horror dengan empat level, teka-teki, item tersembunyi, dan sistem petunjuk.",
    features: [
      "4 level",
      "Teka-teki khusus",
      "Item tersembunyi",
      "Sistem petunjuk",
      "Suasana horror",
      "Elemen escape room"
    ],
    download: "https://mcpedl.com/strange-rooms/"
  },

  {
    id: "one-chunk-100-random-layers",
    name: "One Chunk With 100 Random Layers",
    category: "Map",
    version: "1.21.2+",
    thumbnail: "https://r2.mcpedl.com/submissions/222131/images/dta-one-chunk100-random-layers-by-dta-mc_2.png",
    description: "Survival satu chunk dengan 100 lapisan acak yang harus dibuka sedikit demi sedikit.",
    features: [
      "100 lapisan survival",
      "Blok dan sumber daya unik",
      "Ruang bermain terbatas",
      "Mob berbahaya",
      "Kejutan tersembunyi",
      "End Portal sebagai tujuan akhir"
    ],
    download: "https://edge.mcpedl.com/files/6025/73/One%20Chunk%20with%20100%20fandom%20layers%20by%20DtA.mcworld"
  },

  {
    id: "custom-deserted-island",
    name: "CUSTOM DESERTED ISLAND",
    category: "Map",
    version: "26.30",
    thumbnail: "https://mcpeland.io/uploads/posts/2026-08/20260829-customdesertedisland-image-01.jpg",
    description: "Survival di pulau kecil buatan tangan, dikelilingi laut, loot tersembunyi, dan portal.",
    features: [
      "Pulau terpencil buatan tangan",
      "Lautan tanpa batas",
      "Loot tersembunyi",
      "Obsidian untuk Nether Portal",
      "End Portal",
      "Progression survival seimbang"
    ],
    download: "https://www.curseforge.com/minecraft-bedrock/maps/custom-deserted-island/files/all"
  },

  {
    id: "coop-2-player",
    name: "CooP 2 Player",
    category: "Map",
    version: "Tidak dicantumkan",
    thumbnail: "https://st2.mcpedl.com/submissions/127382/101/worldicon_1-520x245.png",
    description: "Puzzle adventure untuk dua pemain dengan maze, parkour, dan tantangan yang membutuhkan kerja sama.",
    features: [
      "Mazes",
      "Parkour",
      "Block matching",
      "Mendukung dua pemain",
      "Bahasa Inggris dan Indonesia",
      "Puzzle kerja sama"
    ],
    download: "https://mcpedl.com/coop-2-player-2/"
  },

  {
    id: "diversity-2-remixed",
    name: "Diversity II: Remixed",
    category: "Map",
    version: "Tidak dicantumkan",
    thumbnail: "https://media.forgecdn.net/attachments/1272/542/photo_2025-07-31_16-05-39-jpg.jpg",
    description: "Sepuluh tantangan dalam satu map: adventure, puzzle, parkour, dropper, maze, survival, dan boss battle.",
    features: [
      "Adventure",
      "Puzzle",
      "Arena",
      "Parkour",
      "Trivia",
      "Escape",
      "Dropper",
      "Survival",
      "Maze",
      "Boss Battle"
    ],
    download: "https://edge.mcpedl.com/files/6832/352/Diversity%20II%20Remixed%20(Bedrock).mcworld"
  },

  {
    id: "holiday-puzzle-rush",
    name: "Holiday Puzzle Rush!",
    category: "Map",
    version: "Tidak dicantumkan",
    thumbnail: "https://r2.mcpedl.com/submissions/45069/102/holiday-puzzle-rush_1.png",
    description: "Mini-game bertema liburan dengan tantangan singkat yang dimainkan dalam batas waktu.",
    features: [
      "Memasukkan kue",
      "Membersihkan salju",
      "Menemukan perbedaan",
      "Menyalakan api",
      "Menghias pohon",
      "Pilihan batas waktu permainan"
    ],
    download: "https://www.mediafire.com/file/rval65su5u4frev/HolidayPuzzleRush.mcworld/file"
  },

  {
    id: "onechunk-survival",
    name: "OneChunk Survival",
    category: "Map",
    version: "1.21.131 - 1.21.132",
    thumbnail: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663954116072/iZgveoktvGBnmFBI.jpeg",
    description: "Survival hardcore dalam satu chunk berukuran 16x16 blok, lengkap dengan Nether dan The End.",
    features: [
      "Dunia satu chunk",
      "Survival vanilla",
      "Mendukung singleplayer dan multiplayer",
      "Nether dan The End ditingkatkan",
      "Tidak membutuhkan mod"
    ],
    download: "https://www.curseforge.com/minecraft-bedrock/maps/onechunk-survival/files/7571136"
  },

{
  id: "raft-only-world",
  name: "Raft Only World",
  category: "Map Survival",
  version: "26.13+",
  thumbnail: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663954116072/FajqYRIxlQmZewLm.jpg",
  description: "Memulai survival di atas rakit kecil tanpa daratan. Sumber daya dan ruang berkembang sangat terbatas.",
  features: [
    "Survival bertema lautan",
    "Memulai permainan dari rakit kecil",
    "Sumber daya sangat terbatas",
    "Pemain dapat memperluas dan menghias rakit",
    "Cocok untuk Minecraft Bedrock Edition"
  ],
  download: "https://www.curseforge.com/minecraft-bedrock/maps/raft-only-world-bakuthebuilder"
},

{
  id: "redstone-world",
  name: "Redstone World",
  category: "Map Redstone",
  version: "1.21.132",
  thumbnail: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663954116072/DiIIEcbbwWLRFeSH.png",
  description: "Kumpulan contoh rangkaian redstone, dari storage otomatis sampai logic gate dan super smelter.",
  features: [
    "Sistem penyimpanan otomatis",
    "Auto crafting",
    "Logic gate AND, OR, XOR, dan XNOR",
    "Contoh pintu menggunakan kode dan key-card",
    "Sugar cane farm",
    "Elevator air tingkat lanjut",
    "Bee farm",
    "Slot machine",
    "Super smelter otomatis",
    "Auto armor dispenser"
  ],
  download: "https://www.curseforge.com/minecraft-bedrock/maps/redstone-world/files/7584773"
},

{
  id: "xyz-minigames",
  name: "XYZ MINIGAMES",
  category: "Map Mini Game",
  version: "26.40",
  thumbnail: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663954116072/ZJPralGsDDUsCaAw.jpg",
  description: "Kumpulan mini-game untuk singleplayer dan multiplayer, termasuk BedWars, SkyWars, Parkour, dan TNT Run.",
  features: [
    "Parkour, Minefield, Dropper, dan TNT Run",
    "Block Party dan Squid Game",
    "BedWars, SkyWars, Hunger Games, dan Spleef",
    "PvP Games, DeathRun, Floor Is Lava, dan Diggers Battle",
    "Custom settings untuk setiap mini-game",
    "Sistem kosmetik dan reward",
    "Lobby parkour",
    "Custom chat dan chat emoji",
    "Mendukung bahasa Inggris dan Rusia"
  ],
  download: "https://www.curseforge.com/minecraft-bedrock/maps/xyz-minigames/files/8587847"
},

{
  id: "redstone-calculator-8bit",
  name: "Redstone Calculator 8bit",
  category: "Map Redstone",
  version: "1.21",
  thumbnail: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663954116072/yZEvsWNOummxSjba.jpg",
  description: "Kalkulator 8-bit yang dibangun sepenuhnya dengan redstone, lengkap dengan empat operasi dasar.",
  features: [
    "Mode penjumlahan",
    "Mode pengurangan",
    "Mode perkalian",
    "Mode pembagian",
    "Input hingga 8-bit atau maksimum 255",
    "Output hingga 16-bit atau maksimum 65025",
    "Memiliki tombol angka dan fitur reset",
    "Setiap struktur dapat digunakan secara terpisah"
  ],
  download: "https://www.curseforge.com/minecraft-bedrock/maps/redstone-calculator-8bit-minecraft-bedrock/files/7228564"
},
{
  id: "universe-4-6-7",
  name: "Universe 4.6.7 | Adventure Map",
  category: "Map Adventure",
    version: "Tidak dicantumkan",
  thumbnail: "https://media.forgecdn.net/attachments/899/510/title-467.png",
  description: "Adventure map cerita untuk dua pemain dengan dunia Nether, pilihan bercabang, dan portal tersembunyi.",
  features: [
    "Map cerita semi-linear untuk 2 pemain",
    "Pilihan pemain memengaruhi pengalaman dan ending",
    "18–21 bagian dalam satu permainan",
    "Total 24 bagian alternatif",
    "Pertarungan melawan mob Nether",
    "Loot dan makanan terbatas",
    "Portal pulang tersembunyi",
    "Dapat dimainkan untuk speedrun"
  ],
  download: "https://mcpedl.com/universe-467-map/"
},

{
  id: "spiral-parkour",
  name: "Spiral Parkour",
  category: "Map Parkour",
    version: "Tidak dicantumkan",
  thumbnail: "https://hielkemaps.com/media/maps/parkour-spiral/thumbnail.jpg",
  description: "Parkour di gunung raksasa dengan jalur melayang, checkpoint, dan tingkat kesulitan bertahap.",
  features: [
    "Gunung parkour raksasa",
    "Rute parkour yang beragam",
    "Tantangan bertahap dari dasar hingga tingkat lanjut",
    "Checkpoint strategis",
    "Pemandangan gunung"
  ],
  download: "https://www.curseforge.com/minecraft-bedrock/maps/spiral-parkour"
},

{
  id: "parkour-paradise-giant-house",
  name: "Parkour Paradise: Giant House!",
  category: "Map Parkour",
    version: "Tidak dicantumkan",
  thumbnail: "https://r2.mcpedl.com/submissions/36588/118/parkour-paradise-giant-house-parkour_1.png",
  description: "Parkour di dalam rumah raksasa dengan sepuluh level, checkpoint, dan satu level bonus.",
  features: [
    "10 level dengan tingkat kesulitan beragam",
    "1 level bonus dengan kesulitan lebih tinggi",
    "Lobi dengan instruksi permainan",
    "Checkpoint",
    "Mendukung multiplayer",
    "Area parkour bertema rumah raksasa"
  ],
  download: "https://mcpedl.com/parkour-paradise-map/"
},

{
  id: "glide-mini-game",
  name: "Glide Mini Game",
  category: "Map Parkour",
  version: "1.7.1",
  thumbnail: "https://media.forgecdn.net/attachments/1165/814/mcpedl-jpg.jpg",
  description: "Mini-game Elytra dengan beberapa lintasan, shortcut, checkpoint, dan mode time atau score attack.",
  features: [
    "Lintasan Cavern, Temple, dan Canyon",
    "Lobi dengan easter egg",
    "Voting lintasan melalui item di hotbar",
    "Mode Time Attack",
    "Mode Score Attack",
    "Checkpoint",
    "Boost oranye dan kuning",
    "Ring hijau, kuning, dan biru dengan nilai berbeda",
    "Dukungan track pack tambahan",
    "Dukungan Console Aspects"
  ],
  download: "https://edge.mcpedl.com/files/8656/92/Glide%201.7.1%20-%20MP%20-%20Time.mcworld"
},

{
  id: "find-the-button-v1",
  name: "Find the Button v1",
  category: "Map Adventure",
  version: "1.20.70 atau lebih baru",
  thumbnail: "https://media.forgecdn.net/attachments/1177/483/1000009729-png.png",
  description: "Puzzle sepuluh level untuk mencari tombol tersembunyi di Overworld, Nether, dan End.",
  features: [
    "10 level berbeda",
    "Area Plains",
    "Area Beach",
    "Area Ocean",
    "Area Small House",
    "Area Farm",
    "Area Cobblestone Generator",
    "Area Nether",
    "Area Stronghold",
    "Area End",
    "Level terakhir berisi puzzle",
    "Sistem petunjuk menggunakan perintah /function hint"
  ],
  download: "https://edge.mcpedl.com/files/6584/84/Find%20the%20Button%20v1.mcworld"
},

  {
    "id": "am-skyblock",
    "name": "AM SKYBLOCK",
    "category": "Map",
    "version": "V2.0.1; Bedrock 1.26.50+",
    "description": "Map Skyblock survival yang menempatkan pemain di lima pulau terapung unik untuk dijelajahi dan dikembangkan.",
    "features": [
      "5 pulau terapung dengan biome khusus",
      "Loot eksklusif dan rahasia tersembunyi",
      "Tantangan End Portal",
      "Mode survival dan eksplorasi"
    ],
    "download": "https://mcpedl.com/am-skyblock/",
    "thumbnail": "assets/map/am-skyblock.jpg",
    "source": "Internet source: https://mcpedl.com/am-skyblock/"
  },
  {
    "id": "elmsville-modern-city-roleplay",
    "name": "Elmsville: A Modern City (Roleplay)",
    "category": "Map",
    "version": "Bedrock/PE 1.6–1.11",
    "description": "Kota modern untuk roleplay dengan bangunan interaktif, command, redstone, toko, dan sistem uang.",
    "features": [
      "Bangunan kota interaktif",
      "Ribuan command dan rangkaian redstone",
      "Sistem uang pada XP bar",
      "Toko, pet shop, Hero Base, dan Criminal Base"
    ],
    "download": "https://mcpedl.com/elmsville-map/",
    "thumbnail": "assets/map/elmsville-modern-city-roleplay.png",
    "source": "Internet source: https://mcpedl.com/elmsville-map/"
  },
  {
    "id": "dungeons-minecraft-rpg-map",
    "name": "DUNGEONS - Minecraft RPG Map",
    "category": "Map",
    "version": "Bedrock 1.16.200–1.16.220",
    "description": "Map RPG dungeon dengan eksplorasi, puzzle, loot, senjata, armor, toko, dan progres petualangan bertingkat.",
    "features": [
      "4 tingkat kesulitan",
      "Lokasi dan lawan baru",
      "Puzzle dan objek tersembunyi",
      "Loot box, senjata, armor, toko, dan ekonomi",
      "Jungle Awakens dan Icy Land"
    ],
    "download": "https://mcpedl.com/dungeons-minecraft-mmo-map/",
    "thumbnail": "assets/map/dungeons-minecraft-rpg-map.png",
    "source": "Internet source: https://mcpedl.com/dungeons-minecraft-mmo-map/"
  },
  {
    "id": "parkour-b-map",
    "name": "Parkour B Map",
    "category": "Map",
    "version": "Bedrock 1.26",
    "description": "Tantangan parkour berbentuk huruf B dengan 20 level unik, checkpoint, timer speedrun, dan dukungan multiplayer.",
    "features": [
      "20 level parkour",
      "Checkpoint setiap level",
      "Timer untuk speedrun",
      "Tombol restart cepat",
      "Bisa dimainkan solo atau multiplayer"
    ],
    "download": "https://mcpedl.com/parkour-b-map/",
    "thumbnail": "assets/map/parkour-b-map.png",
    "source": "Internet source: https://mcpedl.com/parkour-b-map/"
  },
  {
    "id": "minegames-v3121",
    "name": "Minegames v3.12.1 [Cave Hunters Update]",
    "category": "Map",
    "version": "v3.12.1; Bedrock 1.19.20+",
    "description": "Dunia minigame multiplayer dengan 12 permainan kompetitif dan santai untuk dimainkan bersama teman.",
    "features": [
      "12 minigame unik",
      "Skywars, Hide N Seek, Parkour Race, TNT Run, dan Parkour Tag",
      "Map Hide N Seek diperluas",
      "Parkour Race dikerjakan ulang",
      "Berkas .mcworld dan .mcpack"
    ],
    "download": "https://mcpedl.com/minegames-map-1/",
    "thumbnail": "assets/map/minegames-v3121.png",
    "source": "Internet source: https://mcpedl.com/minegames-map-1/"
  },
];

// Data shader dipisahkan agar pengelolaannya tidak bercampur dengan addon.
const shadersData = [{
  id: "definitive-vibrant-visuals",
  name: "Definitive Vibrant Visuals | Static Light Update",
  category: "Shader",
  version: "Minecraft Bedrock v26.12",
  thumbnail: "https://media.forgecdn.net/attachments/description/null/description_e2e9b6ab-6bac-4094-9af7-93a41e392fc2.jpg",
  description: "Vibrant Visuals dengan warna biome, bayangan, air ber-kaustik, dan material reflektif.",
  features: [
    "Mendukung Xbox, PS5, Android, iOS, dan Windows",
    "Warna lingkungan berbeda berdasarkan biome",
    "Efek metalik pada Iron Golem dan Copper Golem",
    "Varian Low untuk optimasi perangkat",
    "Bayangan dan pencahayaan realistis",
    "Air realistis dengan efek kaustik",
    "Mineral dan blok logam mengilap",
    "Efek metalik pada perkakas dan zirah",
    "Pencahayaan statis pada blok yang memancarkan cahaya",
    "Tekstur reflektif pada blok seperti quartz",
    "Pencahayaan berbasis warna pada lilin"
  ],
  download: "https://edge.mcpedl.com/files/8765/306/Definitive%20Vibrant%20Visuals%20-%20Default.mcpack"
},

{
  id: "revolution-vibrant-visuals",
  name: "Revolution Vibrant Visuals",
  category: "Shader",
  version: "v26.3",
  thumbnail: "https://media.forgecdn.net/attachments/1507/413/mcpedl-jpg.jpg",
  description: "Deferred lighting dengan godrays, air, awan, mineral, dan armor yang lebih reflektif.",
  features: [
    "Lingkungan berubah berdasarkan biome",
    "Godrays dengan warna berdasarkan biome",
    "Armor dan alat reflektif",
    "Mineral bercahaya",
    "Gelombang air realistis",
    "Awan realistis berbasis cubemap",
    "Efek kaustik realistis",
    "Pencahayaan statis pada blok bercahaya",
    "Tekstur reflektif seperti quartz",
    "PBR lighting pada beberapa blok dan berries"
  ],
  download: "https://edge.mcpedl.com/files/8856/493/Revolution%20Vibrant%20Visuals%20-%20Realistic.mcpack"
},

{
  id: "lazshaders",
  name: "LazShaders",
  category: "Shader",
  version: "1.21.90+",
  thumbnail: "https://media.forgecdn.net/attachments/1221/907/untitled-design_20250616_181340_0000.png",
  description: "Vibrant Visuals yang mempertahankan tekstur vanilla dengan warna dan pencahayaan yang lebih tegas.",
  features: [
    "Visual Vibrant Visuals yang lebih hidup",
    "Mempertahankan tekstur asli Minecraft Bedrock",
    "Tidak memerlukan patch tambahan",
    "Menggunakan dukungan Vibrant Visuals bawaan",
    "Dapat digunakan setelah mengaktifkan Vibrant Visuals saat membuat dunia"
  ],
  download: "https://edge.mcpedl.com/files/7653/313/LazShaders%20X%20Pastel%20by%20XradicalD.mcpack"
},

{
  id: "newb-x-dragon-shader",
  name: "Newb X Dragon Shader",
  category: "Shader",
  version: "v26.44",
  thumbnail: "assets/thumbs/newb-x-dragon.webp",
  description: "Shader bergaya Complementary dengan langit malam baru, glow mineral, lava, dan terrain yang lebih kuat.",
  features: [
    "Peningkatan shader setelah perubahan Mojang v26.10",
    "Galaxy Night baru",
    "Subpack Low",
    "Bintang bergaya Complementary Shader",
    "Efek glow pada mineral dan blok bercahaya",
    "Lava yang lebih realistis",
    "Warna terrain yang ditingkatkan",
    "Complementary End baru",
    "Mengatasi masalah Nether berkedip"
  ],
  download: "https://edge.mcpedl.com/files/8856/393/Newb%20X%20Dragon%20REIMAGINED%20-%20Merged.mcpack"
},

{
  id: "solar-shaders",
  name: "Solar Shaders",
  category: "Shader",
    version: "Tidak dicantumkan",
  thumbnail: "https://media.forgecdn.net/attachments/1854/708/solar-shaders-banner-png.png",
  description: "Vibrant Visuals bernuansa golden hour dengan kabut, sinar volumetrik, dan langit berlapis.",
  features: [
    "Kabut, pencahayaan, dan color grading berdasarkan biome",
    "Sinar keemasan volumetrik",
    "Langit berlapis dari emas hingga biru",
    "Partikel aurora dan bintang jatuh",
    "Partikel angin, debu pasir, dan salju",
    "Ambience khusus untuk End dan meteor",
    "Sumber cahaya berwarna",
    "Tekstur PBR penuh dalam varian Default dan High",
    "Subpack tanpa partikel untuk perangkat kelas bawah",
    "Kompatibel dengan pack lain"
  ],
  download: "https://edge.mcpedl.com/files/8785/259/Solar%20Shaders%20Visuals%20v2.0.1.mcpack"
},


  {
    id: "refined-deferred",
    name: "Refined Deferred",
    category: "Shader",
    version: "Tidak dicantumkan",
    thumbnail: "https://media.forgecdn.net/attachments/1776/368/refined-deferred-banner-png.png",
    description: "Deferred shader bernuansa hangat dengan kabut merah muda, godrays lembut, dan cahaya sinematik.",
    features: [
      "Kabut hangat",
      "God rays lembut",
      "Pencahayaan sinematik",
      "Mendukung Vibrant Visuals",
      "Mendukung Android, iOS, Xbox, PlayStation, dan Windows"
    ],
    download: "https://edge.mcpedl.com/files/8806/367/Refined%20Deferred%20v3.3.0.mcpack"
  },

  {
    id: "lunac-shaders",
    name: "Lunac Shaders 3.0",
    category: "Shader",
    version: "3.0",
    thumbnail: "https://media.forgecdn.net/attachments/1250/876/lunac-shaders-2-0-mcpedl-thumbnail-jpg.jpg",
    description: "Shader bergaya RTX untuk Bedrock dengan air, bayangan, refleksi, dan langit dinamis.",
    features: [
      "Air realistis",
      "Gelombang air",
      "Bayangan realistis",
      "Refleksi",
      "Global illumination",
      "Langit dinamis",
      "Atmosfer unik setiap biome",
      "Deferred rendering"
    ],
    download: "https://edge.mcpedl.com/files/8662/637/Lunac%20Shaders%203.0%20%5BVibrant%20Visuals%5D.mcpack"
  },

  {
    id: "acd-shaders",
    name: "ACD Shaders",
    category: "Shader",
    version: "Tidak dicantumkan",
    thumbnail: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663954116072/tUhHUuWKwVOrTCmk.jpg",
    description: "Shader dengan pencahayaan sinematik, godrays, gua yang lebih terang, dan mineral bercahaya.",
    features: [
      "Cinematic lighting",
      "God rays",
      "Peningkatan pencahayaan gua",
      "Mineral bercahaya",
      "Atmosfer realistis",
      "Tampilan visual sinematik"
    ],
    download: "https://mcpedl.com/acd-shaders/"
  },

  {
    id: "dreamy-visuals",
    name: "Dreamy Visuals",
    category: "Shader",
    version: "Tidak dicantumkan",
    thumbnail: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663954116072/TlBSiqjMsviAJzhF.jpg",
    description: "Vibrant Visuals dengan warna lembut, cahaya hangat, dan tampilan dunia yang tidak terlalu jenuh.",
    features: [
      "Warna lembut",
      "Pencahayaan dreamy",
      "Suasana sinematik",
      "Peningkatan tampilan langit",
      "Pencahayaan biome yang lebih hidup"
    ],
    download: "https://mcpedl.com/dreamy-vibrant-visuals/"
  },

  {
    id: "better-vibrant-visuals",
    name: "Better Vibrant Visuals",
    category: "Shader",
    version: "Tidak dicantumkan",
    thumbnail: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663954116072/XEeaehmdxUhvUAdk.jpg",
    description: "Peningkatan Vibrant Visuals untuk warna, air, sunbeams, langit, dan pencahayaan yang lebih detail.",
    features: [
      "Warna dunia lebih hidup",
      "Peningkatan tampilan air",
      "Sunbeams",
      "Langit yang ditingkatkan",
      "Pencahayaan lebih detail",
      "Mendukung Vibrant Visuals"
    ],
    download: "https://mcpedl.com/bettervibrantvisuals/"
  },
  {
    "id": "eclipse-rtx",
    "name": "Eclipse RTX",
    "category": "Shader",
    "version": "Bedrock; versi terbaru 27 Juli 2026",
    "description": "Shader realistis dengan pencahayaan sinematik, warna vibrant, langit yang ditingkatkan, air indah, dan performa ringan.",
    "features": [
      "Pencahayaan realistis dan sinematik",
      "Warna lebih vibrant",
      "Langit yang ditingkatkan",
      "Air realistis",
      "Efek atmosfer ringan"
    ],
    "download": "https://mcpedl.com/eclipse-rtx/",
    "thumbnail": "assets/map/eclipse-rtx.jpg",
    "source": "Internet source: https://mcpedl.com/eclipse-rtx/"
  },
  {
    "id": "cartoonglow-shaders",
    "name": "CartoonGlow Shaders",
    "category": "Shader",
    "version": "Bedrock 26.3+; Vibrant Visuals",
    "description": "Shader fantasi colorful dengan langit pastel, air bercahaya, bayangan berwarna, dan atmosfer unik tiap biome.",
    "features": [
      "Palet warna fantasi untuk 87 biome",
      "Air animasi dengan caustics",
      "Kabut berwarna per biome",
      "Langit dinamis dan moon glow",
      "Lebih dari 50 sumber cahaya emissive"
    ],
    "download": "https://mcpedl.com/cartoonglow-shaders-vibrant-visuals-pack/",
    "thumbnail": "assets/map/cartoonglow-shaders.png",
    "source": "Internet source: https://mcpedl.com/cartoonglow-shaders-vibrant-visuals-pack/"
  },
  {
    "id": "twilight-visuals",
    "name": "Twilight Visuals",
    "category": "Shader",
    "version": "v1.7.1; Bedrock 26.40",
    "description": "Shader sinematik bernuansa biru-teal dengan malam bercahaya bulan, kabut volumetrik, dan suasana muram.",
    "features": [
      "Atmosfer siang biru-teal",
      "Malam biru dengan refleksi air teal",
      "Kabut volumetrik berbasis ketinggian",
      "Tone mapping bergaya film",
      "Color grading khusus tiap biome"
    ],
    "download": "https://www.curseforge.com/minecraft-bedrock/texture-packs/twilight-visuals",
    "thumbnail": "assets/map/twilight-visuals.png",
    "source": "Internet source: https://www.curseforge.com/minecraft-bedrock/texture-packs/twilight-visuals"
  },
  {
    "id": "prizma-visuals-legacy",
    "name": "Prizma Visuals Legacy",
    "category": "Shader",
    "version": "1.3.10; Bedrock Vibrant Visuals/Deferred",
    "description": "Shader visual vibrant dengan deferred rendering, PBR, pencahayaan realistis, dan kategori x16 yang relatif ringan.",
    "features": [
      "Dukungan Vibrant Visuals dan deferred rendering",
      "Tekstur PBR",
      "Pencahayaan dan kabut realistis",
      "Kategori shader x16",
      "Mendukung Android, iOS, dan Windows 10"
    ],
    "download": "https://mcpedl.com/prizma-pbr-deferred-pack/",
    "thumbnail": "assets/map/prizma-visuals-legacy.png",
    "source": "Internet source: https://mcpedl.com/prizma-pbr-deferred-pack/"
  },
  {
    "id": "smootea-low-end-shader",
    "name": "SmooTea Shader | Low End Shader",
    "category": "Shader",
    "version": "v4.5; Bedrock 26.30+",
    "description": "Shader pastel dan lembut yang meningkatkan pencahayaan, awan, kabut, air, dan suasana dengan fokus performa perangkat rendah.",
    "features": [
      "Performance Mode untuk perangkat low-end",
      "Awan dan kabut teroptimasi",
      "Air halus dengan warna pastel",
      "Optimasi entity dan torch lights",
      "End dan Nether lebih cerah"
    ],
    "download": "https://mcpedl.com/azifysmootea/",
    "thumbnail": "assets/map/smootea-low-end-shader.jpg",
    "source": "Internet source: https://mcpedl.com/azifysmootea/"
  },
];

// Array gabungan dipakai untuk search dan halaman detail.
const contents = [...addonsData, ...mapsData, ...shadersData];
