// Import Firestore instance
const { db } = require('./firebaseInit');
const { collection, addDoc } = require('firebase/firestore');

// Function to add test data to the 'suveniruri' collection
async function addTestData() {
  try {
    // Reference to the collection 'suveniruri'
    const suveniruriCollection = collection(db, 'suveniruri');

    // Example documents to add
    const testSuveniruri = [
      // Paris
{ tara: 'France (FR)', oras: 'Paris', suvenir: 'Eiffel Tower Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'France (FR)', oras: 'Paris', suvenir: 'Parisian Perfume', categorie: 'Beauty', destinatari: ['relative', 'lover'] },
{ tara: 'France (FR)', oras: 'Paris', suvenir: 'French Cooking Book', categorie: 'Books', destinatari: ['acquaintance', 'co-worker'] },

// Nice
{ tara: 'France (FR)', oras: 'Nice', suvenir: 'Côte d\'Azur Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'France (FR)', oras: 'Nice', suvenir: 'Provence Lavender Soap', categorie: 'Beauty', destinatari: ['relative', 'acquaintance'] },
{ tara: 'France (FR)', oras: 'Nice', suvenir: 'French Wine Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },

// Lyon
{ tara: 'France (FR)', oras: 'Lyon', suvenir: 'Lyon Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'France (FR)', oras: 'Lyon', suvenir: 'Silk Scarf', categorie: 'Fashion', destinatari: ['relative', 'lover'] },
{ tara: 'France (FR)', oras: 'Lyon', suvenir: 'Lyon Gastronomy Guide', categorie: 'Books', destinatari: ['acquaintance', 'co-worker'] },

// Marseille
{ tara: 'France (FR)', oras: 'Marseille', suvenir: 'Calanques Landscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'France (FR)', oras: 'Marseille', suvenir: 'Marseille Soap Set', categorie: 'Beauty', destinatari: ['relative', 'lover'] },
{ tara: 'France (FR)', oras: 'Marseille', suvenir: 'Bouillabaisse Recipe Book', categorie: 'Books', destinatari: ['acquaintance', 'co-worker'] },

// Bordeaux
{ tara: 'France (FR)', oras: 'Bordeaux', suvenir: 'Bordeaux Vineyard Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'France (FR)', oras: 'Bordeaux', suvenir: 'Wine Stoppers Set', categorie: 'Food', destinatari: ['relative', 'acquaintance'] },
{ tara: 'France (FR)', oras: 'Bordeaux', suvenir: 'Bordeaux Wine Guide', categorie: 'Books', destinatari: ['lover', 'co-worker'] },

// Toulouse
{ tara: 'France (FR)', oras: 'Toulouse', suvenir: 'Toulouse Cityscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'France (FR)', oras: 'Toulouse', suvenir: 'Airbus Model Plane', categorie: 'Art', destinatari: ['relative', 'lover'] },
{ tara: 'France (FR)', oras: 'Toulouse', suvenir: 'Toulouse Violet Sweets', categorie: 'Food', destinatari: ['acquaintance', 'co-worker'] },

// Strasbourg
{ tara: 'France (FR)', oras: 'Strasbourg', suvenir: 'Strasbourg Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'France (FR)', oras: 'Strasbourg', suvenir: 'Alsatian Wine Set', categorie: 'Food', destinatari: ['relative', 'acquaintance'] },
{ tara: 'France (FR)', oras: 'Strasbourg', suvenir: 'Christmas Market Ornament', categorie: 'Decor', destinatari: ['lover', 'co-worker'] },

// Lille
{ tara: 'France (FR)', oras: 'Lille', suvenir: 'Lille Belfry Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'France (FR)', oras: 'Lille', suvenir: 'Lille Lace Tablecloth', categorie: 'Fashion', destinatari: ['relative', 'lover'] },
{ tara: 'France (FR)', oras: 'Lille', suvenir: 'Maroilles Cheese Selection', categorie: 'Food', destinatari: ['acquaintance', 'co-worker'] },

// Nantes
{ tara: 'France (FR)', oras: 'Nantes', suvenir: 'Nantes Castle Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'France (FR)', oras: 'Nantes', suvenir: 'Brittany Cider Set', categorie: 'Food', destinatari: ['relative', 'acquaintance'] },
{ tara: 'France (FR)', oras: 'Nantes', suvenir: 'Jules Verne Book Collection', categorie: 'Books', destinatari: ['lover', 'co-worker'] },

// Montpellier
{ tara: 'France (FR)', oras: 'Montpellier', suvenir: 'Montpellier Old Town Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'France (FR)', oras: 'Montpellier', suvenir: 'Camargue Salt Set', categorie: 'Food', destinatari: ['relative', 'acquaintance'] },
{ tara: 'France (FR)', oras: 'Montpellier', suvenir: 'Montpellier Vineyard Guide', categorie: 'Books', destinatari: ['lover', 'co-worker'] },

// New York City
{ tara: 'United States (US)', oras: 'New York City', suvenir: 'Statue of Liberty Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United States (US)', oras: 'New York City', suvenir: 'Broadway Musical CD', categorie: 'Music', destinatari: ['relative', 'lover'] },
{ tara: 'United States (US)', oras: 'New York City', suvenir: 'New York Coffee Table Book', categorie: 'Books', destinatari: ['acquaintance', 'co-worker'] },

// Los Angeles
{ tara: 'United States (US)', oras: 'Los Angeles', suvenir: 'Hollywood Sign Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United States (US)', oras: 'Los Angeles', suvenir: 'Celebrity Sunglasses', categorie: 'Fashion', destinatari: ['relative', 'lover'] },
{ tara: 'United States (US)', oras: 'Los Angeles', suvenir: 'LA Beach Photography Book', categorie: 'Books', destinatari: ['acquaintance', 'co-worker'] },

// Orlando
{ tara: 'United States (US)', oras: 'Orlando', suvenir: 'Disney Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United States (US)', oras: 'Orlando', suvenir: 'Mickey Mouse Ears Hat', categorie: 'Fashion', destinatari: ['relative', 'lover'] },
{ tara: 'United States (US)', oras: 'Orlando', suvenir: 'Florida Orange Juice Set', categorie: 'Food', destinatari: ['acquaintance', 'co-worker'] },

// Las Vegas
{ tara: 'United States (US)', oras: 'Las Vegas', suvenir: 'Las Vegas Strip Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United States (US)', oras: 'Las Vegas', suvenir: 'Poker Chip Set', categorie: 'Games', destinatari: ['relative', 'lover'] },
{ tara: 'United States (US)', oras: 'Las Vegas', suvenir: 'Showgirl Costume Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'co-worker'] },

// San Francisco
{ tara: 'United States (US)', oras: 'San Francisco', suvenir: 'Golden Gate Bridge Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United States (US)', oras: 'San Francisco', suvenir: 'Alcatraz Penitentiary Keychain', categorie: 'Fashion', destinatari: ['relative', 'lover'] },
{ tara: 'United States (US)', oras: 'San Francisco', suvenir: 'San Francisco Ghirardelli Chocolate', categorie: 'Food', destinatari: ['acquaintance', 'co-worker'] },

// Chicago
{ tara: 'United States (US)', oras: 'Chicago', suvenir: 'Chicago Skyline Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United States (US)', oras: 'Chicago', suvenir: 'Deep Dish Pizza Kit', categorie: 'Food', destinatari: ['relative', 'lover'] },
{ tara: 'United States (US)', oras: 'Chicago', suvenir: 'Chicago Blues Music Album', categorie: 'Music', destinatari: ['acquaintance', 'co-worker'] },

// Washington, D.C.
{ tara: 'United States (US)', oras: 'Washington, D.C.', suvenir: 'US Capitol Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United States (US)', oras: 'Washington, D.C.', suvenir: 'President Memorabilia Set', categorie: 'Collectibles', destinatari: ['relative', 'lover'] },
{ tara: 'United States (US)', oras: 'Washington, D.C.', suvenir: 'Cherry Blossom Tea Set', categorie: 'Food', destinatari: ['acquaintance', 'co-worker'] },

// Miami
{ tara: 'United States (US)', oras: 'Miami', suvenir: 'Miami Art Deco Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United States (US)', oras: 'Miami', suvenir: 'Cuban Cigar Sampler', categorie: 'Fashion', destinatari: ['relative', 'lover'] },
{ tara: 'United States (US)', oras: 'Miami', suvenir: 'Florida Beach Sand Globe', categorie: 'Decor', destinatari: ['acquaintance', 'co-worker'] },

// Boston
{ tara: 'United States (US)', oras: 'Boston', suvenir: 'Boston Tea Party Reproduction', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United States (US)', oras: 'Boston', suvenir: 'Harvard University Sweatshirt', categorie: 'Fashion', destinatari: ['relative', 'lover'] },
{ tara: 'United States (US)', oras: 'Boston', suvenir: 'Boston Clam Chowder Kit', categorie: 'Food', destinatari: ['acquaintance', 'co-worker'] },

// Seattle
{ tara: 'United States (US)', oras: 'Seattle', suvenir: 'Space Needle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United States (US)', oras: 'Seattle', suvenir: 'Starbucks Coffee Sampler', categorie: 'Food', destinatari: ['relative', 'lover'] },
{ tara: 'United States (US)', oras: 'Seattle', suvenir: 'Pacific Northwest Rain Gear', categorie: 'Fashion', destinatari: ['acquaintance', 'co-worker'] },

// Rome
{ tara: 'Italy (IT)', oras: 'Rome', suvenir: 'Colosseum Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Italy (IT)', oras: 'Rome', suvenir: 'Vatican Rosary', categorie: 'Religious', destinatari: ['relative', 'lover'] },
{ tara: 'Italy (IT)', oras: 'Rome', suvenir: 'Roman Pasta Set', categorie: 'Food', destinatari: ['acquaintance', 'co-worker'] },

// Venice
{ tara: 'Italy (IT)', oras: 'Venice', suvenir: 'Venetian Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Italy (IT)', oras: 'Venice', suvenir: 'Murano Glass Jewelry', categorie: 'Fashion', destinatari: ['relative', 'lover'] },
{ tara: 'Italy (IT)', oras: 'Venice', suvenir: 'Venetian Gondolier Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'co-worker'] },

// Florence
{ tara: 'Italy (IT)', oras: 'Florence', suvenir: 'David Statue Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Italy (IT)', oras: 'Florence', suvenir: 'Florentine Leather Wallet', categorie: 'Fashion', destinatari: ['relative', 'lover'] },
{ tara: 'Italy (IT)', oras: 'Florence', suvenir: 'Tuscan Olive Oil Set', categorie: 'Food', destinatari: ['acquaintance', 'co-worker'] },

// Milan
{ tara: 'Italy (IT)', oras: 'Milan', suvenir: 'Milan Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Italy (IT)', oras: 'Milan', suvenir: 'Fashion Designer Scarf', categorie: 'Fashion', destinatari: ['relative', 'lover'] },
{ tara: 'Italy (IT)', oras: 'Milan', suvenir: 'Italian Espresso Coffee Set', categorie: 'Food', destinatari: ['acquaintance', 'co-worker'] },

// Naples
{ tara: 'Italy (IT)', oras: 'Naples', suvenir: 'Pompeii Ruins Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Italy (IT)', oras: 'Naples', suvenir: 'Neapolitan Pizza Kit', categorie: 'Food', destinatari: ['relative', 'lover'] },
{ tara: 'Italy (IT)', oras: 'Naples', suvenir: 'Capodimonte Porcelain Figurine', categorie: 'Art', destinatari: ['acquaintance', 'co-worker'] },

// Turin
{ tara: 'Italy (IT)', oras: 'Turin', suvenir: 'Mole Antonelliana Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Italy (IT)', oras: 'Turin', suvenir: 'Turin Chocolate Assortment', categorie: 'Food', destinatari: ['relative', 'lover'] },
{ tara: 'Italy (IT)', oras: 'Turin', suvenir: 'Egyptian Museum Book', categorie: 'Books', destinatari: ['acquaintance', 'co-worker'] },

// Bologna
{ tara: 'Italy (IT)', oras: 'Bologna', suvenir: 'Asinelli Tower Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Italy (IT)', oras: 'Bologna', suvenir: 'Bolognese Pasta Kit', categorie: 'Food', destinatari: ['relative', 'lover'] },
{ tara: 'Italy (IT)', oras: 'Bologna', suvenir: 'Bologna University Hoodie', categorie: 'Fashion', destinatari: ['acquaintance', 'co-worker'] },

// Genoa
{ tara: 'Italy (IT)', oras: 'Genoa', suvenir: 'Christopher Columbus Statue', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Italy (IT)', oras: 'Genoa', suvenir: 'Genoese Pesto Sauce Set', categorie: 'Food', destinatari: ['relative', 'lover'] },
{ tara: 'Italy (IT)', oras: 'Genoa', suvenir: 'Genoa Maritime Museum Print', categorie: 'Art', destinatari: ['acquaintance', 'co-worker'] },

// Verona
{ tara: 'Italy (IT)', oras: 'Verona', suvenir: 'Romeo and Juliet Balcony Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Italy (IT)', oras: 'Verona', suvenir: 'Verona Wine Selection', categorie: 'Food', destinatari: ['relative', 'lover'] },
{ tara: 'Italy (IT)', oras: 'Verona', suvenir: 'Verona Opera House Poster', categorie: 'Art', destinatari: ['acquaintance', 'co-worker'] },

// Siena
{ tara: 'Italy (IT)', oras: 'Siena', suvenir: 'Piazza del Campo Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Italy (IT)', oras: 'Siena', suvenir: 'Siena Panforte Cake', categorie: 'Food', destinatari: ['relative', 'lover'] },
{ tara: 'Italy (IT)', oras: 'Siena', suvenir: 'Siena Cathedral Print', categorie: 'Art', destinatari: ['acquaintance', 'co-worker'] },

// Barcelona
{ tara: 'Spain (ES)', oras: 'Barcelona', suvenir: 'Sagrada Familia Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Spain (ES)', oras: 'Barcelona', suvenir: 'Barcelona Football Jersey', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Spain (ES)', oras: 'Barcelona', suvenir: 'Catalan Cava Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Madrid
{ tara: 'Spain (ES)', oras: 'Madrid', suvenir: 'Royal Palace Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Spain (ES)', oras: 'Madrid', suvenir: 'Flamenco Dancer Figurine', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Spain (ES)', oras: 'Madrid', suvenir: 'Madrid Tapas Cookbook', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Seville
{ tara: 'Spain (ES)', oras: 'Seville', suvenir: 'Seville Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Spain (ES)', oras: 'Seville', suvenir: 'Flamenco Guitar Keychain', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Spain (ES)', oras: 'Seville', suvenir: 'Andalusian Olive Oil Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Valencia
{ tara: 'Spain (ES)', oras: 'Valencia', suvenir: 'City of Arts and Sciences Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Spain (ES)', oras: 'Valencia', suvenir: 'Valencian Orange Soap Set', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Spain (ES)', oras: 'Valencia', suvenir: 'Paella Kit', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Granada
{ tara: 'Spain (ES)', oras: 'Granada', suvenir: 'Alhambra Palace Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Spain (ES)', oras: 'Granada', suvenir: 'Granada Tapas Guide', categorie: 'Books', destinatari: ['lover', 'co-worker'] },
{ tara: 'Spain (ES)', oras: 'Granada', suvenir: 'Granada Hammam Set', categorie: 'Beauty', destinatari: ['acquaintance', 'relative'] },

// Malaga
{ tara: 'Spain (ES)', oras: 'Malaga', suvenir: 'Malaga Picasso Museum Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Spain (ES)', oras: 'Malaga', suvenir: 'Malaga Wine Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Spain (ES)', oras: 'Malaga', suvenir: 'Malaga Beach Towel', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Bilbao
{ tara: 'Spain (ES)', oras: 'Bilbao', suvenir: 'Guggenheim Museum Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Spain (ES)', oras: 'Bilbao', suvenir: 'Basque Beret', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Spain (ES)', oras: 'Bilbao', suvenir: 'Bilbao Chocolates Assortment', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Cordoba
{ tara: 'Spain (ES)', oras: 'Cordoba', suvenir: 'Mosque-Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Spain (ES)', oras: 'Cordoba', suvenir: 'Cordoban Leather Wallet', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Spain (ES)', oras: 'Cordoba', suvenir: 'Andalusian Ceramics Set', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Palma de Mallorca
{ tara: 'Spain (ES)', oras: 'Palma de Mallorca', suvenir: 'Mallorca Pearl Necklace', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Spain (ES)', oras: 'Palma de Mallorca', suvenir: 'Mallorca Ensaimada Pastries', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Spain (ES)', oras: 'Palma de Mallorca', suvenir: 'Mallorca Sea Salt Scrub', categorie: 'Beauty', destinatari: ['acquaintance', 'relative'] },

// Zaragoza
{ tara: 'Spain (ES)', oras: 'Zaragoza', suvenir: 'Basilica of Our Lady of the Pillar Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Spain (ES)', oras: 'Zaragoza', suvenir: 'Aragon Wine Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Spain (ES)', oras: 'Zaragoza', suvenir: 'Zaragoza Ceramic Tiles', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Beijing
{ tara: 'China (CN)', oras: 'Beijing', suvenir: 'Great Wall Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'China (CN)', oras: 'Beijing', suvenir: 'Peking Opera Mask', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'China (CN)', oras: 'Beijing', suvenir: 'Beijing Duck Recipe Book', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Shanghai
{ tara: 'China (CN)', oras: 'Shanghai', suvenir: 'Shanghai Skyline Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'China (CN)', oras: 'Shanghai', suvenir: 'Silk Embroidered Handkerchief', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'China (CN)', oras: 'Shanghai', suvenir: 'Shanghai Tea Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Xi'an
{ tara: 'China (CN)', oras: 'Xi\'an', suvenir: 'Terracotta Army Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'China (CN)', oras: 'Xi\'an', suvenir: 'Xi\'an Silk Scarf', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'China (CN)', oras: 'Xi\'an', suvenir: 'Xi\'an Noodle Recipe Book', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Guangzhou
{ tara: 'China (CN)', oras: 'Guangzhou', suvenir: 'Cantonese Opera Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'China (CN)', oras: 'Guangzhou', suvenir: 'Guangzhou Tea Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'China (CN)', oras: 'Guangzhou', suvenir: 'Pearl River Delta Painting', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Shenzhen
{ tara: 'China (CN)', oras: 'Shenzhen', suvenir: 'Shenzhen Electronics Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'China (CN)', oras: 'Shenzhen', suvenir: 'Silicon Valley of China Mug', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'China (CN)', oras: 'Shenzhen', suvenir: 'Dim Sum Recipe Book', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Hangzhou
{ tara: 'China (CN)', oras: 'Hangzhou', suvenir: 'West Lake Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'China (CN)', oras: 'Hangzhou', suvenir: 'Hangzhou Silk Scarf', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'China (CN)', oras: 'Hangzhou', suvenir: 'Longjing Tea Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Chengdu
{ tara: 'China (CN)', oras: 'Chengdu', suvenir: 'Panda Plush Toy', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'China (CN)', oras: 'Chengdu', suvenir: 'Sichuan Pepper Seasoning', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'China (CN)', oras: 'Chengdu', suvenir: 'Chengdu Panda Base Photo Album', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Guilin
{ tara: 'China (CN)', oras: 'Guilin', suvenir: 'Li River Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'China (CN)', oras: 'Guilin', suvenir: 'Guilin Landscape Scroll', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'China (CN)', oras: 'Guilin', suvenir: 'Osmanthus Flower Tea Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Suzhou
{ tara: 'China (CN)', oras: 'Suzhou', suvenir: 'Suzhou Silk Embroidery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'China (CN)', oras: 'Suzhou', suvenir: 'Suzhou Fan', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'China (CN)', oras: 'Suzhou', suvenir: 'Suzhou Mooncake Gift Box', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Hong Kong
{ tara: 'China (CN)', oras: 'Hong Kong', suvenir: 'Hong Kong Skyline Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'China (CN)', oras: 'Hong Kong', suvenir: 'Hong Kong Egg Waffles Mix', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'China (CN)', oras: 'Hong Kong', suvenir: 'Hong Kong Silk Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Mexico City
{ tara: 'Mexico (MX)', oras: 'Mexico City', suvenir: 'Frida Kahlo Portrait', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mexico (MX)', oras: 'Mexico City', suvenir: 'Mexican Hot Chocolate Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mexico (MX)', oras: 'Mexico City', suvenir: 'Mexico City Guidebook', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Cancun
{ tara: 'Mexico (MX)', oras: 'Cancun', suvenir: 'Mayan Pyramid Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mexico (MX)', oras: 'Cancun', suvenir: 'Tequila Sampler Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mexico (MX)', oras: 'Cancun', suvenir: 'Cancun Beach Towel', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Guadalajara
{ tara: 'Mexico (MX)', oras: 'Guadalajara', suvenir: 'Mariachi Band Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mexico (MX)', oras: 'Guadalajara', suvenir: 'Tequila Infusion Kit', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mexico (MX)', oras: 'Guadalajara', suvenir: 'Guadalajara Sombrero', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Playa del Carmen
{ tara: 'Mexico (MX)', oras: 'Playa del Carmen', suvenir: 'Playa del Carmen Beach Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mexico (MX)', oras: 'Playa del Carmen', suvenir: 'Mayan Hammock', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mexico (MX)', oras: 'Playa del Carmen', suvenir: 'Mexican Vanilla Extract', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Puerto Vallarta
{ tara: 'Mexico (MX)', oras: 'Puerto Vallarta', suvenir: 'Puerto Vallarta Sunset Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mexico (MX)', oras: 'Puerto Vallarta', suvenir: 'Huichol Art Beaded Bracelet', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mexico (MX)', oras: 'Puerto Vallarta', suvenir: 'Jalisco Tequila Sampler', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Tulum
{ tara: 'Mexico (MX)', oras: 'Tulum', suvenir: 'Tulum Mayan Ruins Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mexico (MX)', oras: 'Tulum', suvenir: 'Handwoven Mayan Blanket', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mexico (MX)', oras: 'Tulum', suvenir: 'Tulum Beach Photograph', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Cabo San Lucas
{ tara: 'Mexico (MX)', oras: 'Cabo San Lucas', suvenir: 'Cabo San Lucas Lighthouse Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mexico (MX)', oras: 'Cabo San Lucas', suvenir: 'Baja California Wine Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mexico (MX)', oras: 'Cabo San Lucas', suvenir: 'Cabo San Lucas Seashell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Merida
{ tara: 'Mexico (MX)', oras: 'Merida', suvenir: 'Yucatan Mayan Calendar', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mexico (MX)', oras: 'Merida', suvenir: 'Merida Yucatan Guayabera Shirt', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mexico (MX)', oras: 'Merida', suvenir: 'Merida Cacao Chocolate', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Oaxaca
{ tara: 'Mexico (MX)', oras: 'Oaxaca', suvenir: 'Oaxaca Alebrije Sculpture', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mexico (MX)', oras: 'Oaxaca', suvenir: 'Oaxacan Black Pottery', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mexico (MX)', oras: 'Oaxaca', suvenir: 'Mezcal Tasting Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Puebla
{ tara: 'Mexico (MX)', oras: 'Puebla', suvenir: 'Talavera Pottery Vase', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mexico (MX)', oras: 'Puebla', suvenir: 'Puebla Mole Sauce Kit', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mexico (MX)', oras: 'Puebla', suvenir: 'Puebla Embroidered Blouse', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Istanbul
{ tara: 'Turkey (TR)', oras: 'Istanbul', suvenir: 'Grand Bazaar Rug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Turkey (TR)', oras: 'Istanbul', suvenir: 'Turkish Delight Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Turkey (TR)', oras: 'Istanbul', suvenir: 'Hagia Sophia Replica', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Antalya
{ tara: 'Turkey (TR)', oras: 'Antalya', suvenir: 'Antalya Beach Towel', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Turkey (TR)', oras: 'Antalya', suvenir: 'Lycian Rock Tomb Model', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Turkey (TR)', oras: 'Antalya', suvenir: 'Turkish Tea Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Cappadocia
{ tara: 'Turkey (TR)', oras: 'Cappadocia', suvenir: 'Cappadocia Hot Air Balloon Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Turkey (TR)', oras: 'Cappadocia', suvenir: 'Turkish Ceramic Plate Set', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Turkey (TR)', oras: 'Cappadocia', suvenir: 'Cappadocia Wine Selection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Ankara
{ tara: 'Turkey (TR)', oras: 'Ankara', suvenir: 'Ankara Citadel Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Turkey (TR)', oras: 'Ankara', suvenir: 'Ankara Embroidered Pillow', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Turkey (TR)', oras: 'Ankara', suvenir: 'Turkish Coffee Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Izmir
{ tara: 'Turkey (TR)', oras: 'Izmir', suvenir: 'Izmir Clock Tower Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Turkey (TR)', oras: 'Izmir', suvenir: 'Izmir Figurine', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Turkey (TR)', oras: 'Izmir', suvenir: 'Turkish Olive Oil Soap', categorie: 'Beauty', destinatari: ['acquaintance', 'relative'] },

// Bursa
{ tara: 'Turkey (TR)', oras: 'Bursa', suvenir: 'Bursa Silk Scarf', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Turkey (TR)', oras: 'Bursa', suvenir: 'Bursa Green Olive Jar', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Turkey (TR)', oras: 'Bursa', suvenir: 'Bursa Ottoman Miniature', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Bodrum
{ tara: 'Turkey (TR)', oras: 'Bodrum', suvenir: 'Bodrum Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Turkey (TR)', oras: 'Bodrum', suvenir: 'Bodrum Turkish Towel', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Turkey (TR)', oras: 'Bodrum', suvenir: 'Turkish Sea Salt Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Fethiye
{ tara: 'Turkey (TR)', oras: 'Fethiye', suvenir: 'Fethiye Lighthouse Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Turkey (TR)', oras: 'Fethiye', suvenir: 'Lycian Boat Trip', categorie: 'Activity', destinatari: ['lover', 'co-worker'] },
{ tara: 'Turkey (TR)', oras: 'Fethiye', suvenir: 'Turkish Ceramic Bowl Set', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Konya
{ tara: 'Turkey (TR)', oras: 'Konya', suvenir: 'Konya Whirling Dervish Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Turkey (TR)', oras: 'Konya', suvenir: 'Konya Sufi Music CD', categorie: 'Music', destinatari: ['lover', 'co-worker'] },
{ tara: 'Turkey (TR)', oras: 'Konya', suvenir: 'Konya Turkish Delight', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Marmaris
{ tara: 'Turkey (TR)', oras: 'Marmaris', suvenir: 'Marmaris Marina Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Turkey (TR)', oras: 'Marmaris', suvenir: 'Turkish Bath Towel', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Turkey (TR)', oras: 'Marmaris', suvenir: 'Marmaris Olive Oil Soap', categorie: 'Beauty', destinatari: ['acquaintance', 'relative'] },

// Berlin
{ tara: 'Germany (DE)', oras: 'Berlin', suvenir: 'Brandenburg Gate Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Germany (DE)', oras: 'Berlin', suvenir: 'Berlin Wall Piece', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Germany (DE)', oras: 'Berlin', suvenir: 'German Beer Stein', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Munich
{ tara: 'Germany (DE)', oras: 'Munich', suvenir: 'Neuschwanstein Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Germany (DE)', oras: 'Munich', suvenir: 'Bavarian Beer Mug', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Germany (DE)', oras: 'Munich', suvenir: 'Oktoberfest Dirndl Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Frankfurt
{ tara: 'Germany (DE)', oras: 'Frankfurt', suvenir: 'Frankfurt Skyline Puzzle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Germany (DE)', oras: 'Frankfurt', suvenir: 'Frankfurt Apple Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Germany (DE)', oras: 'Frankfurt', suvenir: 'Goethe s Works Book Set', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Hamburg
{ tara: 'Germany (DE)', oras: 'Hamburg', suvenir: 'Miniature Port of Hamburg', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Germany (DE)', oras: 'Hamburg', suvenir: 'Hanseatic League Map', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Germany (DE)', oras: 'Hamburg', suvenir: 'Hamburg Marzipan Box', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Cologne
{ tara: 'Germany (DE)', oras: 'Cologne', suvenir: 'Cologne Cathedral Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Germany (DE)', oras: 'Cologne', suvenir: 'Eau de Cologne Perfume', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Germany (DE)', oras: 'Cologne', suvenir: 'Kölsch Beer Glasses', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Stuttgart
{ tara: 'Germany (DE)', oras: 'Stuttgart', suvenir: 'Mercedes-Benz Model Car', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Germany (DE)', oras: 'Stuttgart', suvenir: 'Stuttgart Wine Vinegar', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Germany (DE)', oras: 'Stuttgart', suvenir: 'Black Forest Cuckoo Clock', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Dresden
{ tara: 'Germany (DE)', oras: 'Dresden', suvenir: 'Dresden Frauenkirche Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Germany (DE)', oras: 'Dresden', suvenir: 'Meissen Porcelain Figurine', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Germany (DE)', oras: 'Dresden', suvenir: 'Dresden Stollen', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Leipzig
{ tara: 'Germany (DE)', oras: 'Leipzig', suvenir: 'Leipzig Gewandhaus Orchestra CD', categorie: 'Music', destinatari: ['family', 'friend'] },
{ tara: 'Germany (DE)', oras: 'Leipzig', suvenir: 'Bach Music Box', categorie: 'Music', destinatari: ['lover', 'co-worker'] },
{ tara: 'Germany (DE)', oras: 'Leipzig', suvenir: 'Leipzig Coffee Blend', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Nuremberg
{ tara: 'Germany (DE)', oras: 'Nuremberg', suvenir: 'Nuremberg Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Germany (DE)', oras: 'Nuremberg', suvenir: 'Nuremberg Gingerbread', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Germany (DE)', oras: 'Nuremberg', suvenir: 'Nuremberg Christmas Market Ornament', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Düsseldorf
{ tara: 'Germany (DE)', oras: 'Düsseldorf', suvenir: 'Düsseldorf Rhine Tower Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Germany (DE)', oras: 'Düsseldorf', suvenir: 'Altbier Glass Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Germany (DE)', oras: 'Düsseldorf', suvenir: 'Düsseldorf Fashion Magazine', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// London
{ tara: 'United Kingdom (GB)', oras: 'London', suvenir: 'Big Ben Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Kingdom (GB)', oras: 'London', suvenir: 'Tea Sampler Box', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Kingdom (GB)', oras: 'London', suvenir: 'London Underground Map Print', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Edinburgh
{ tara: 'United Kingdom (GB)', oras: 'Edinburgh', suvenir: 'Edinburgh Castle Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Kingdom (GB)', oras: 'Edinburgh', suvenir: 'Scottish Whisky Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Kingdom (GB)', oras: 'Edinburgh', suvenir: 'Tartan Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Manchester
{ tara: 'United Kingdom (GB)', oras: 'Manchester', suvenir: 'Manchester United Jersey', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'United Kingdom (GB)', oras: 'Manchester', suvenir: 'Manchester Bee Magnet', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Kingdom (GB)', oras: 'Manchester', suvenir: 'Manchester Toffee', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Birmingham
{ tara: 'United Kingdom (GB)', oras: 'Birmingham', suvenir: 'Birmingham Bullring Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Kingdom (GB)', oras: 'Birmingham', suvenir: 'Cadbury Chocolate Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Kingdom (GB)', oras: 'Birmingham', suvenir: 'Peaky Blinders DVD Box Set', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Glasgow
{ tara: 'United Kingdom (GB)', oras: 'Glasgow', suvenir: 'Glasgow Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Kingdom (GB)', oras: 'Glasgow', suvenir: 'Scottish Shortbread Tin', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Kingdom (GB)', oras: 'Glasgow', suvenir: 'Glasgow Subway Map Poster', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Liverpool
{ tara: 'United Kingdom (GB)', oras: 'Liverpool', suvenir: 'Liverpool Liver Bird Statue', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Kingdom (GB)', oras: 'Liverpool', suvenir: 'Beatles Vinyl Record', categorie: 'Music', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Kingdom (GB)', oras: 'Liverpool', suvenir: 'Liverpool Gin Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Bristol
{ tara: 'United Kingdom (GB)', oras: 'Bristol', suvenir: 'Bristol Suspension Bridge Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Kingdom (GB)', oras: 'Bristol', suvenir: 'Bristol Blue Glass Vase', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Kingdom (GB)', oras: 'Bristol', suvenir: 'Bristol Cider Variety Pack', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// York
{ tara: 'United Kingdom (GB)', oras: 'York', suvenir: 'York Minster Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Kingdom (GB)', oras: 'York', suvenir: 'Yorkshire Tea Gift Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Kingdom (GB)', oras: 'York', suvenir: 'York Chocolate Box', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Cambridge
{ tara: 'United Kingdom (GB)', oras: 'Cambridge', suvenir: 'Cambridge University Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Kingdom (GB)', oras: 'Cambridge', suvenir: 'Punting on River Cam Tour', categorie: 'Experience', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Kingdom (GB)', oras: 'Cambridge', suvenir: 'Cambridge Gin Collection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Oxford
{ tara: 'United Kingdom (GB)', oras: 'Oxford', suvenir: 'Oxford University Scarf', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'United Kingdom (GB)', oras: 'Oxford', suvenir: 'Inspector Morse DVD Set', categorie: 'Books', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Kingdom (GB)', oras: 'Oxford', suvenir: 'Oxfordshire Cheese Selection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Bangkok
{ tara: 'Thailand (TH)', oras: 'Bangkok', suvenir: 'Bangkok Temple Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Thailand (TH)', oras: 'Bangkok', suvenir: 'Thai Silk Scarf', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Thailand (TH)', oras: 'Bangkok', suvenir: 'Thai Street Food Cookbook', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Phuket
{ tara: 'Thailand (TH)', oras: 'Phuket', suvenir: 'Phuket Beach Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Thailand (TH)', oras: 'Phuket', suvenir: 'Coconut Shell Souvenir', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Thailand (TH)', oras: 'Phuket', suvenir: 'Thai Herbal Spa Set', categorie: 'Beauty', destinatari: ['acquaintance', 'relative'] },

// Chiang Mai
{ tara: 'Thailand (TH)', oras: 'Chiang Mai', suvenir: 'Chiang Mai Night Market Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Thailand (TH)', oras: 'Chiang Mai', suvenir: 'Chiang Mai Umbrella', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Thailand (TH)', oras: 'Chiang Mai', suvenir: 'Thai Elephant T-Shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Pattaya
{ tara: 'Thailand (TH)', oras: 'Pattaya', suvenir: 'Pattaya Beach Sand Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Thailand (TH)', oras: 'Pattaya', suvenir: 'Thai Massage Oil Set', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Thailand (TH)', oras: 'Pattaya', suvenir: 'Pattaya Floating Market Souvenir', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Krabi
{ tara: 'Thailand (TH)', oras: 'Krabi', suvenir: 'Krabi Island Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Thailand (TH)', oras: 'Krabi', suvenir: 'Krabi Seashell Jewelry', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Thailand (TH)', oras: 'Krabi', suvenir: 'Krabi Coconut Soap', categorie: 'Beauty', destinatari: ['acquaintance', 'relative'] },

// Hua Hin
{ tara: 'Thailand (TH)', oras: 'Hua Hin', suvenir: 'Hua Hin Beach Sunset Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Thailand (TH)', oras: 'Hua Hin', suvenir: 'Hua Hin Seashell Wind Chime', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Thailand (TH)', oras: 'Hua Hin', suvenir: 'Thai Tea Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Ayutthaya
{ tara: 'Thailand (TH)', oras: 'Ayutthaya', suvenir: 'Ayutthaya Temple Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Thailand (TH)', oras: 'Ayutthaya', suvenir: 'Ayutthaya History Book', categorie: 'Books', destinatari: ['lover', 'co-worker'] },
{ tara: 'Thailand (TH)', oras: 'Ayutthaya', suvenir: 'Ayutthaya Elephant Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Koh Samui
{ tara: 'Thailand (TH)', oras: 'Koh Samui', suvenir: 'Koh Samui Coconut Candle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Thailand (TH)', oras: 'Koh Samui', suvenir: 'Koh Samui Beach Towel', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Thailand (TH)', oras: 'Koh Samui', suvenir: 'Thai Fruit Jam Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Chiang Rai
{ tara: 'Thailand (TH)', oras: 'Chiang Rai', suvenir: 'Chiang Rai Night Bazaar Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Thailand (TH)', oras: 'Chiang Rai', suvenir: 'Chiang Rai Tea Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Thailand (TH)', oras: 'Chiang Rai', suvenir: 'Chiang Rai Hill Tribe Textile', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Sukhothai
{ tara: 'Thailand (TH)', oras: 'Sukhothai', suvenir: 'Sukhothai Historical Park Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Thailand (TH)', oras: 'Sukhothai', suvenir: 'Sukhothai Lotus Flower Candle', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Thailand (TH)', oras: 'Sukhothai', suvenir: 'Sukhothai Rice Bowl Set', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Tokyo
{ tara: 'Japan (JP)', oras: 'Tokyo', suvenir: 'Tokyo Skyline Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Japan (JP)', oras: 'Tokyo', suvenir: 'Matcha Green Tea Kit', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Japan (JP)', oras: 'Tokyo', suvenir: 'Origami Paper Set', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Kyoto
{ tara: 'Japan (JP)', oras: 'Kyoto', suvenir: 'Kyoto Temple Bell Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Japan (JP)', oras: 'Kyoto', suvenir: 'Kimono Silk Scarf', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Japan (JP)', oras: 'Kyoto', suvenir: 'Kyoto Tea Ceremony Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Osaka
{ tara: 'Japan (JP)', oras: 'Osaka', suvenir: 'Osaka Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Japan (JP)', oras: 'Osaka', suvenir: 'Takoyaki Kit', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Japan (JP)', oras: 'Osaka', suvenir: 'Osaka Ramen Bowl', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Hiroshima
{ tara: 'Japan (JP)', oras: 'Hiroshima', suvenir: 'Hiroshima Peace Memorial Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Japan (JP)', oras: 'Hiroshima', suvenir: 'Hiroshima Sake Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Japan (JP)', oras: 'Hiroshima', suvenir: 'Hiroshima Okonomiyaki Kit', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Sapporo
{ tara: 'Japan (JP)', oras: 'Sapporo', suvenir: 'Sapporo Snow Festival Sculpture', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Japan (JP)', oras: 'Sapporo', suvenir: 'Sapporo Beer Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Japan (JP)', oras: 'Sapporo', suvenir: 'Sapporo Ramen Bowl', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Nara
{ tara: 'Japan (JP)', oras: 'Nara', suvenir: 'Nara Deer Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Japan (JP)', oras: 'Nara', suvenir: 'Nara Bento Box', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Japan (JP)', oras: 'Nara', suvenir: 'Nara Kimono Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Fukuoka
{ tara: 'Japan (JP)', oras: 'Fukuoka', suvenir: 'Fukuoka Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Japan (JP)', oras: 'Fukuoka', suvenir: 'Hakata Doll Set', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Japan (JP)', oras: 'Fukuoka', suvenir: 'Fukuoka Ramen Kit', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Nagoya
{ tara: 'Japan (JP)', oras: 'Nagoya', suvenir: 'Nagoya Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Japan (JP)', oras: 'Nagoya', suvenir: 'Nagoya Pottery Set', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Japan (JP)', oras: 'Nagoya', suvenir: 'Hitsumabushi Eel Kit', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Kanazawa
{ tara: 'Japan (JP)', oras: 'Kanazawa', suvenir: 'Kanazawa Gold Leaf Artwork', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Japan (JP)', oras: 'Kanazawa', suvenir: 'Kanazawa Tea Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Japan (JP)', oras: 'Kanazawa', suvenir: 'Kanazawa Silk Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kobe
{ tara: 'Japan (JP)', oras: 'Kobe', suvenir: 'Kobe Beef Keychain', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Japan (JP)', oras: 'Kobe', suvenir: 'Kobe Sake Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Japan (JP)', oras: 'Kobe', suvenir: 'Kobe Chocolate Box', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Toronto
{ tara: 'Canada (CA)', oras: 'Toronto', suvenir: 'CN Tower Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Canada (CA)', oras: 'Toronto', suvenir: 'Maple Syrup Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Canada (CA)', oras: 'Toronto', suvenir: 'Toronto Raptors Jersey', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Vancouver
{ tara: 'Canada (CA)', oras: 'Vancouver', suvenir: 'Totem Pole Carving', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Canada (CA)', oras: 'Vancouver', suvenir: 'Smoked Salmon Gift Box', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Canada (CA)', oras: 'Vancouver', suvenir: 'Vancouver Canucks Cap', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Montreal
{ tara: 'Canada (CA)', oras: 'Montreal', suvenir: 'Montreal Bagel Kit', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'Canada (CA)', oras: 'Montreal', suvenir: 'Montreal Canadiens Mug', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Canada (CA)', oras: 'Montreal', suvenir: 'Poutine Kit', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Ottawa
{ tara: 'Canada (CA)', oras: 'Ottawa', suvenir: 'Parliament Hill Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Canada (CA)', oras: 'Ottawa', suvenir: 'Maple Leaf Pin', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Canada (CA)', oras: 'Ottawa', suvenir: 'Beaver Plush Toy', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Quebec City
{ tara: 'Canada (CA)', oras: 'Quebec City', suvenir: 'Château Frontenac Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Canada (CA)', oras: 'Quebec City', suvenir: 'Quebec Maple Sugar Candy', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Canada (CA)', oras: 'Quebec City', suvenir: 'Québécois Beret', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Calgary
{ tara: 'Canada (CA)', oras: 'Calgary', suvenir: 'Calgary Stampede Cowboy Hat', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Canada (CA)', oras: 'Calgary', suvenir: 'Alberta Beef Jerky Pack', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Canada (CA)', oras: 'Calgary', suvenir: 'Calgary Flames Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Edmonton
{ tara: 'Canada (CA)', oras: 'Edmonton', suvenir: 'West Edmonton Mall Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Canada (CA)', oras: 'Edmonton', suvenir: 'Alberta Rose Soap Set', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Canada (CA)', oras: 'Edmonton', suvenir: 'Edmonton Oilers Mug', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Winnipeg
{ tara: 'Canada (CA)', oras: 'Winnipeg', suvenir: 'Winnipeg Jets Hat', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Canada (CA)', oras: 'Winnipeg', suvenir: 'Manitoba Maple Syrup', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Canada (CA)', oras: 'Winnipeg', suvenir: 'Winnipeg Art Gallery Print', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Halifax
{ tara: 'Canada (CA)', oras: 'Halifax', suvenir: 'Halifax Citadel Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Canada (CA)', oras: 'Halifax', suvenir: 'Nova Scotia Lobster Kit', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Canada (CA)', oras: 'Halifax', suvenir: 'Halifax Harbour Print', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Victoria
{ tara: 'Canada (CA)', oras: 'Victoria', suvenir: 'Butchart Gardens Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Canada (CA)', oras: 'Victoria', suvenir: 'British Columbia Tea Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Canada (CA)', oras: 'Victoria', suvenir: 'Victoria Whale Watching Guidebook', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Moscow
{ tara: 'Russia (RU)', oras: 'Moscow', suvenir: 'Matryoshka Doll Set', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Russia (RU)', oras: 'Moscow', suvenir: 'Red Square Painting', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Russia (RU)', oras: 'Moscow', suvenir: 'Moscow Mule Copper Mug', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// St. Petersburg
{ tara: 'Russia (RU)', oras: 'St. Petersburg', suvenir: 'Hermitage Museum Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Russia (RU)', oras: 'St. Petersburg', suvenir: 'Fabergé Egg Replica', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Russia (RU)', oras: 'St. Petersburg', suvenir: 'St. Petersburg Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kazan
{ tara: 'Russia (RU)', oras: 'Kazan', suvenir: 'Kul Sharif Mosque Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Russia (RU)', oras: 'Kazan', suvenir: 'Tatarstan Rug', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Russia (RU)', oras: 'Kazan', suvenir: 'Kazan Kremlin Sketch', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Sochi
{ tara: 'Russia (RU)', oras: 'Sochi', suvenir: 'Sochi Beach Towel', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Russia (RU)', oras: 'Sochi', suvenir: 'Black Sea Seashell Necklace', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Russia (RU)', oras: 'Sochi', suvenir: 'Sochi Olympic Pin', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Vladivostok
{ tara: 'Russia (RU)', oras: 'Vladivostok', suvenir: 'Vladivostok Lighthouse Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Russia (RU)', oras: 'Vladivostok', suvenir: 'Russian Far East Tea Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Russia (RU)', oras: 'Vladivostok', suvenir: 'Vladivostok Maritime Map', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Yekaterinburg
{ tara: 'Russia (RU)', oras: 'Yekaterinburg', suvenir: 'Yeltsin Center Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Russia (RU)', oras: 'Yekaterinburg', suvenir: 'Ural Gemstone Pendant', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Russia (RU)', oras: 'Yekaterinburg', suvenir: 'Yekaterinburg Cityscape Painting', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Novosibirsk
{ tara: 'Russia (RU)', oras: 'Novosibirsk', suvenir: 'Novosibirsk Opera House Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Russia (RU)', oras: 'Novosibirsk', suvenir: 'Siberian Pine Nut Oil', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Russia (RU)', oras: 'Novosibirsk', suvenir: 'Novosibirsk Railway Print', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Nizhny Novgorod
{ tara: 'Russia (RU)', oras: 'Nizhny Novgorod', suvenir: 'Nizhny Novgorod Kremlin Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Russia (RU)', oras: 'Nizhny Novgorod', suvenir: 'Volga River Pearl Necklace', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Russia (RU)', oras: 'Nizhny Novgorod', suvenir: 'Nizhny Novgorod Enamel Pin', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Rostov-on-Don
{ tara: 'Russia (RU)', oras: 'Rostov-on-Don', suvenir: 'Rostov-on-Don Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Russia (RU)', oras: 'Rostov-on-Don', suvenir: 'Don River Caviar', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Russia (RU)', oras: 'Rostov-on-Don', suvenir: 'Rostov-on-Don Embroidery Kit', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kaliningrad
{ tara: 'Russia (RU)', oras: 'Kaliningrad', suvenir: 'Amber Jewelry Set', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Russia (RU)', oras: 'Kaliningrad', suvenir: 'Kaliningrad Cathedral Print', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Russia (RU)', oras: 'Kaliningrad', suvenir: 'Kaliningrad Amber Figurine', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Kuala Lumpur
{ tara: 'Malaysia (MY)', oras: 'Kuala Lumpur', suvenir: 'Petronas Twin Towers Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Malaysia (MY)', oras: 'Kuala Lumpur', suvenir: 'Batik Silk Scarf', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Malaysia (MY)', oras: 'Kuala Lumpur', suvenir: 'Durian Chocolate Box', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// George Town (Penang)
{ tara: 'Malaysia (MY)', oras: 'George Town (Penang)', suvenir: 'Penang Street Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Malaysia (MY)', oras: 'George Town (Penang)', suvenir: 'Nyonya Beaded Shoes', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Malaysia (MY)', oras: 'George Town (Penang)', suvenir: 'Penang Nutmeg Jam', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Kota Kinabalu
{ tara: 'Malaysia (MY)', oras: 'Kota Kinabalu', suvenir: 'Mount Kinabalu Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Malaysia (MY)', oras: 'Kota Kinabalu', suvenir: 'Sabah Handwoven Basket', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Malaysia (MY)', oras: 'Kota Kinabalu', suvenir: 'Borneo Tea Collection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Malacca
{ tara: 'Malaysia (MY)', oras: 'Malacca', suvenir: 'Malacca Sultanate Coin Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Malaysia (MY)', oras: 'Malacca', suvenir: 'Nyonya Kebaya', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Malaysia (MY)', oras: 'Malacca', suvenir: 'Malacca Pineapple Tarts', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Langkawi
{ tara: 'Malaysia (MY)', oras: 'Langkawi', suvenir: 'Langkawi Cable Car Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Malaysia (MY)', oras: 'Langkawi', suvenir: 'Langkawi Batik Painting', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Malaysia (MY)', oras: 'Langkawi', suvenir: 'Langkawi Chocolate Bar', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Johor Bahru
{ tara: 'Malaysia (MY)', oras: 'Johor Bahru', suvenir: 'Johor Batik Scarf', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Malaysia (MY)', oras: 'Johor Bahru', suvenir: 'Johor Pineapple Cake', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Malaysia (MY)', oras: 'Johor Bahru', suvenir: 'Johor Bahru Mosque Print', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Ipoh
{ tara: 'Malaysia (MY)', oras: 'Ipoh', suvenir: 'Ipoh Street Food Map', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Malaysia (MY)', oras: 'Ipoh', suvenir: 'Ipoh White Coffee', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Malaysia (MY)', oras: 'Ipoh', suvenir: 'Ipoh Kinta Tin Replica', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Kuching
{ tara: 'Malaysia (MY)', oras: 'Kuching', suvenir: 'Kuching Cat Statue', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Malaysia (MY)', oras: 'Kuching', suvenir: 'Sarawak Pepper Grinder', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Malaysia (MY)', oras: 'Kuching', suvenir: 'Orangutan Plush Toy', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Cameron Highlands
{ tara: 'Malaysia (MY)', oras: 'Cameron Highlands', suvenir: 'Cameron Tea Plantation Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Malaysia (MY)', oras: 'Cameron Highlands', suvenir: 'Cameron Highlands Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Malaysia (MY)', oras: 'Cameron Highlands', suvenir: 'Cameron Highlands Strawberries', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Genting Highlands
{ tara: 'Malaysia (MY)', oras: 'Genting Highlands', suvenir: 'Genting Highlands Casino Chip', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Malaysia (MY)', oras: 'Genting Highlands', suvenir: 'Genting Highlands Theme Park Mug', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Malaysia (MY)', oras: 'Genting Highlands', suvenir: 'Genting Highlands Strawberry Tart', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Athens
{ tara: 'Greece (GR)', oras: 'Athens', suvenir: 'Acropolis Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Athens', suvenir: 'Olive Oil Soap Set', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Greece (GR)', oras: 'Athens', suvenir: 'Greek Mythology Book', categorie: 'Books', destinatari: ['family', 'lover'] },

// Santorini
{ tara: 'Greece (GR)', oras: 'Santorini', suvenir: 'Santorini Sunset Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Santorini', suvenir: 'Volcano Ash Jewelry', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Greece (GR)', oras: 'Santorini', suvenir: 'Assorted Olives Jar', categorie: 'Food', destinatari: ['family', 'lover'] },

// Mykonos
{ tara: 'Greece (GR)', oras: 'Mykonos', suvenir: 'Mykonos Windmill Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Mykonos', suvenir: 'Cycladic Figurine', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Greece (GR)', oras: 'Mykonos', suvenir: 'Greek Wine Assortment', categorie: 'Food', destinatari: ['family', 'lover'] },

// Thessaloniki
{ tara: 'Greece (GR)', oras: 'Thessaloniki', suvenir: 'White Tower Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Thessaloniki', suvenir: 'Byzantine Icon Print', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Greece (GR)', oras: 'Thessaloniki', suvenir: 'Thessaloniki Bougatsa', categorie: 'Food', destinatari: ['family', 'lover'] },

// Crete (Heraklion)
{ tara: 'Greece (GR)', oras: 'Crete (Heraklion)', suvenir: 'Knossos Palace Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Crete (Heraklion)', suvenir: 'Cretan Olive Oil', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Greece (GR)', oras: 'Crete (Heraklion)', suvenir: 'Minoan Pottery Reproduction', categorie: 'Art', destinatari: ['family', 'lover'] },

// Rhodes
{ tara: 'Greece (GR)', oras: 'Rhodes', suvenir: 'Rhodes Colossus Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Rhodes', suvenir: 'Rhodes Honey Soap', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Greece (GR)', oras: 'Rhodes', suvenir: 'Rhodes Wine Selection', categorie: 'Food', destinatari: ['family', 'lover'] },

// Corfu
{ tara: 'Greece (GR)', oras: 'Corfu', suvenir: 'Corfu Venetian Fortress Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Corfu', suvenir: 'Kumquat Liqueur', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Greece (GR)', oras: 'Corfu', suvenir: 'Corfu Embroidery Kit', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Nafplio
{ tara: 'Greece (GR)', oras: 'Nafplio', suvenir: 'Bourtzi Fortress Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Nafplio', suvenir: 'Nafplio Figurine', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Greece (GR)', oras: 'Nafplio', suvenir: 'Olive Wood Kitchen Utensils', categorie: 'Art', destinatari: ['family', 'lover'] },

// Meteora (Kalambaka)
{ tara: 'Greece (GR)', oras: 'Meteora (Kalambaka)', suvenir: 'Meteora Monastery Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Meteora (Kalambaka)', suvenir: 'Meteora Landscape Painting', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Greece (GR)', oras: 'Meteora (Kalambaka)', suvenir: 'Greek Mountain Tea Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Delphi
{ tara: 'Greece (GR)', oras: 'Delphi', suvenir: 'Delphi Ruins Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Delphi', suvenir: 'Olive Wood Salad Servers', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Greece (GR)', oras: 'Delphi', suvenir: 'Oracle of Delphi Book', categorie: 'Books', destinatari: ['family', 'lover'] },

// Lisbon
{ tara: 'Portugal (PT)', oras: 'Lisbon', suvenir: 'Lisbon Tile Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Lisbon', suvenir: 'Portuguese Wine Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Portugal (PT)', oras: 'Lisbon', suvenir: 'Cork Wallet', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Porto
{ tara: 'Portugal (PT)', oras: 'Porto', suvenir: 'Porto Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Porto', suvenir: 'Port Wine Assortment', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Portugal (PT)', oras: 'Porto', suvenir: 'Traditional Portuguese Shawl', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Faro
{ tara: 'Portugal (PT)', oras: 'Faro', suvenir: 'Faro Lighthouse Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Faro', suvenir: 'Algarve Beach Sand Globe', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Portugal (PT)', oras: 'Faro', suvenir: 'Ceramic Sardine Plate', categorie: 'Art', destinatari: ['family', 'lover'] },

// Funchal (Madeira)
{ tara: 'Portugal (PT)', oras: 'Funchal (Madeira)', suvenir: 'Madeira Embroidery Kit', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Funchal (Madeira)', suvenir: 'Madeira Wine Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Portugal (PT)', oras: 'Funchal (Madeira)', suvenir: 'Funchal Traditional Hat', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Sintra
{ tara: 'Portugal (PT)', oras: 'Sintra', suvenir: 'Pena Palace Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Sintra', suvenir: 'Sintra Tile Coaster Set', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Portugal (PT)', oras: 'Sintra', suvenir: 'Sintra Castle Keychain', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Coimbra
{ tara: 'Portugal (PT)', oras: 'Coimbra', suvenir: 'Coimbra University Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Coimbra', suvenir: 'Coimbra Ceramic Tile', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Portugal (PT)', oras: 'Coimbra', suvenir: 'Portuguese Guitar Miniature', categorie: 'Art', destinatari: ['family', 'lover'] },

// Aveiro
{ tara: 'Portugal (PT)', oras: 'Aveiro', suvenir: 'Aveiro Canal Boat Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Aveiro', suvenir: 'Salt Flower Box', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Portugal (PT)', oras: 'Aveiro', suvenir: 'Traditional Ceramic Rooster', categorie: 'Art', destinatari: ['family', 'lover'] },

// Braga
{ tara: 'Portugal (PT)', oras: 'Braga', suvenir: 'Braga Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Braga', suvenir: 'Braga Pottery', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Portugal (PT)', oras: 'Braga', suvenir: 'Braga Embroidered Handkerchief', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Cascais
{ tara: 'Portugal (PT)', oras: 'Cascais', suvenir: 'Cascais Beach Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Cascais', suvenir: 'Cascais Wine Cork Keychain', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Portugal (PT)', oras: 'Cascais', suvenir: 'Cascais Seashell Necklace', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Evora
{ tara: 'Portugal (PT)', oras: 'Evora', suvenir: 'Evora Roman Temple Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Evora', suvenir: 'Alentejo Olive Oil', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Portugal (PT)', oras: 'Evora', suvenir: 'Cork Handbag', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Vienna
{ tara: 'Austria (AT)', oras: 'Vienna', suvenir: 'Vienna Opera House Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Vienna', suvenir: 'Sachertorte Chocolate Box', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Austria (AT)', oras: 'Vienna', suvenir: 'Viennese Porcelain Figurine', categorie: 'Art', destinatari: ['family', 'lover'] },

// Salzburg
{ tara: 'Austria (AT)', oras: 'Salzburg', suvenir: 'Salzburg Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Salzburg', suvenir: 'Mozart Chocolate Pralines', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Austria (AT)', oras: 'Salzburg', suvenir: 'Edelweiss Music Box', categorie: 'Art', destinatari: ['family', 'lover'] },

// Innsbruck
{ tara: 'Austria (AT)', oras: 'Innsbruck', suvenir: 'Innsbruck Golden Roof Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Innsbruck', suvenir: 'Tyrolean Alps Honey', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Austria (AT)', oras: 'Innsbruck', suvenir: 'Swarovski Crystal Necklace', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Graz
{ tara: 'Austria (AT)', oras: 'Graz', suvenir: 'Graz Clock Tower Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Graz', suvenir: 'Styrian Pumpkin Seed Oil', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Austria (AT)', oras: 'Graz', suvenir: 'Styrian Tracht Doll', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Hallstatt
{ tara: 'Austria (AT)', oras: 'Hallstatt', suvenir: 'Hallstatt Alpine House Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Hallstatt', suvenir: 'Hallstatt Salt Crystals', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Austria (AT)', oras: 'Hallstatt', suvenir: 'Traditional Austrian Hat', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Linz
{ tara: 'Austria (AT)', oras: 'Linz', suvenir: 'Linz Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Linz', suvenir: 'Linz Linzer Torte', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Austria (AT)', oras: 'Linz', suvenir: 'Linz Chocolate Box', categorie: 'Food', destinatari: ['family', 'lover'] },

// Klagenfurt
{ tara: 'Austria (AT)', oras: 'Klagenfurt', suvenir: 'Klagenfurt Dragon Fountain Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Klagenfurt', suvenir: 'Carinthian Herbal Liqueur', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Austria (AT)', oras: 'Klagenfurt', suvenir: 'Carinthian Doll', categorie: 'Art', destinatari: ['family', 'lover'] },

// Bregenz
{ tara: 'Austria (AT)', oras: 'Bregenz', suvenir: 'Bregenz Seebühne Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Bregenz', suvenir: 'Lake Constance Wine Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Austria (AT)', oras: 'Bregenz', suvenir: 'Bregenz Opera Glasses', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Zell am See
{ tara: 'Austria (AT)', oras: 'Zell am See', suvenir: 'Zell am See Lake Crystal', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Zell am See', suvenir: 'Austrian Alpine Wool Blanket', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Austria (AT)', oras: 'Zell am See', suvenir: 'Zell am See Ski Hat', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Villach
{ tara: 'Austria (AT)', oras: 'Villach', suvenir: 'Villach Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Villach', suvenir: 'Carinthian Mineral Water', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Austria (AT)', oras: 'Villach', suvenir: 'Traditional Austrian Dirndl', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Sydney
{ tara: 'Australia (AU)', oras: 'Sydney', suvenir: 'Sydney Opera House Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Sydney', suvenir: 'Australian Aboriginal Art Print', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Australia (AU)', oras: 'Sydney', suvenir: 'Sydney Harbour Bridge Climb Certificate', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Melbourne
{ tara: 'Australia (AU)', oras: 'Melbourne', suvenir: 'Melbourne Tram Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Melbourne', suvenir: 'Australian Made Chocolate Box', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Australia (AU)', oras: 'Melbourne', suvenir: 'Melbourne Laneway Art Print', categorie: 'Art', destinatari: ['family', 'lover'] },

// Brisbane
{ tara: 'Australia (AU)', oras: 'Brisbane', suvenir: 'Brisbane River Cruise Ticket', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Brisbane', suvenir: 'Queensland Made Macadamia Nuts', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Australia (AU)', oras: 'Brisbane', suvenir: 'Brisbane Koala Plush Toy', categorie: 'Art', destinatari: ['family', 'lover'] },

// Perth
{ tara: 'Australia (AU)', oras: 'Perth', suvenir: 'Perth Mint Gold Bullion Bar', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Perth', suvenir: 'Swan River Cruise Ticket', categorie: 'Experience', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Australia (AU)', oras: 'Perth', suvenir: 'Australian Made Wine Selection', categorie: 'Food', destinatari: ['family', 'lover'] },

// Adelaide
{ tara: 'Australia (AU)', oras: 'Adelaide', suvenir: 'Adelaide Oval Tour Ticket', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Adelaide', suvenir: 'South Australian Honey', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Australia (AU)', oras: 'Adelaide', suvenir: 'Adelaide Hills Wine Selection', categorie: 'Food', destinatari: ['family', 'lover'] },

// Gold Coast
{ tara: 'Australia (AU)', oras: 'Gold Coast', suvenir: 'Gold Coast Theme Park Pass', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Gold Coast', suvenir: 'Surfers Paradise Beach Towel', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Australia (AU)', oras: 'Gold Coast', suvenir: 'Australian Made Surfboard Keychain', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Cairns
{ tara: 'Australia (AU)', oras: 'Cairns', suvenir: 'Great Barrier Reef Snorkel Tour Ticket', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Cairns', suvenir: 'Queensland Tropical Fruit Basket', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Australia (AU)', oras: 'Cairns', suvenir: 'Cairns Coral Necklace', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Canberra
{ tara: 'Australia (AU)', oras: 'Canberra', suvenir: 'Parliament House Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Canberra', suvenir: 'Australian Made Olive Oil Set', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Australia (AU)', oras: 'Canberra', suvenir: 'National Gallery Art Print', categorie: 'Art', destinatari: ['family', 'lover'] },

// Hobart
{ tara: 'Australia (AU)', oras: 'Hobart', suvenir: 'Tasmanian Devil Plush Toy', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Hobart', suvenir: 'Tasmanian Whisky Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Australia (AU)', oras: 'Hobart', suvenir: 'Tasmanian Craft Beer Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Darwin
{ tara: 'Australia (AU)', oras: 'Darwin', suvenir: 'Crocodile Leather Wallet', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Darwin', suvenir: 'Northern Territory Aboriginal Art Print', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Australia (AU)', oras: 'Darwin', suvenir: 'Didgeridoo', categorie: 'Art', destinatari: ['family', 'lover'] },

// Amsterdam
{ tara: 'Netherlands (NL)', oras: 'Amsterdam', suvenir: 'Amsterdam Canal Houses Miniature Set', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Amsterdam', suvenir: 'Delft Blue Pottery', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Netherlands (NL)', oras: 'Amsterdam', suvenir: 'Amsterdam Bike Keychain', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Rotterdam
{ tara: 'Netherlands (NL)', oras: 'Rotterdam', suvenir: 'Rotterdam Skyline Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Rotterdam', suvenir: 'Dutch Cheese Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Netherlands (NL)', oras: 'Rotterdam', suvenir: 'Rotterdam Harbour Model', categorie: 'Art', destinatari: ['family', 'lover'] },

// The Hague
{ tara: 'Netherlands (NL)', oras: 'The Hague', suvenir: 'Peace Palace Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'The Hague', suvenir: 'Dutch Royal Family Tea Set', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Netherlands (NL)', oras: 'The Hague', suvenir: 'The Hague Cityscape Painting', categorie: 'Art', destinatari: ['family', 'lover'] },

// Utrecht
{ tara: 'Netherlands (NL)', oras: 'Utrecht', suvenir: 'Utrecht Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Utrecht', suvenir: 'Dutch Bicycles Puzzle', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Netherlands (NL)', oras: 'Utrecht', suvenir: 'Utrecht Honey Jar', categorie: 'Food', destinatari: ['family', 'lover'] },

// Maastricht
{ tara: 'Netherlands (NL)', oras: 'Maastricht', suvenir: 'Maastricht Vase', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Maastricht', suvenir: 'Limburgian Pie Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Netherlands (NL)', oras: 'Maastricht', suvenir: 'Maastricht Caves Tour Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Eindhoven
{ tara: 'Netherlands (NL)', oras: 'Eindhoven', suvenir: 'Eindhoven Philips Museum Ticket', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Eindhoven', suvenir: 'Eindhoven Technological Gadgets', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Netherlands (NL)', oras: 'Eindhoven', suvenir: 'Eindhoven Light Bulb Keychain', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Haarlem
{ tara: 'Netherlands (NL)', oras: 'Haarlem', suvenir: 'Haarlem Windmill Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Haarlem', suvenir: 'Haarlem Flower Bulb Set', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Netherlands (NL)', oras: 'Haarlem', suvenir: 'Haarlem Dutch Masters Art Print', categorie: 'Art', destinatari: ['family', 'lover'] },

// Groningen
{ tara: 'Netherlands (NL)', oras: 'Groningen', suvenir: 'Groningen University Hoodie', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Groningen', suvenir: 'Groningen Bicycle Bell', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Netherlands (NL)', oras: 'Groningen', suvenir: 'Groningen Cheese Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Leiden
{ tara: 'Netherlands (NL)', oras: 'Leiden', suvenir: 'Leiden University Scarf', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Leiden', suvenir: 'Leiden Botanical Garden Poster', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Netherlands (NL)', oras: 'Leiden', suvenir: 'Leiden Museum Pass', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Delft
{ tara: 'Netherlands (NL)', oras: 'Delft', suvenir: 'Delft Blue Tile Set', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Delft', suvenir: 'Delft Pottery Tea Set', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Netherlands (NL)', oras: 'Delft', suvenir: 'Delft Windmill Keychain', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Zurich
{ tara: 'Switzerland (CH)', oras: 'Zurich', suvenir: 'Zurich Clock Tower Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Zurich', suvenir: 'Swiss Chocolate Assortment', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Switzerland (CH)', oras: 'Zurich', suvenir: 'Zurich Lake Cruise Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Geneva
{ tara: 'Switzerland (CH)', oras: 'Geneva', suvenir: 'Geneva Jet d\'Eau Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Geneva', suvenir: 'Swiss Watch Keychain', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Switzerland (CH)', oras: 'Geneva', suvenir: 'Geneva Gourmet Chocolate Box', categorie: 'Food', destinatari: ['family', 'lover'] },

// Lucerne
{ tara: 'Switzerland (CH)', oras: 'Lucerne', suvenir: 'Lucerne Chapel Bridge Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Lucerne', suvenir: 'Swiss Army Knife', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Switzerland (CH)', oras: 'Lucerne', suvenir: 'Lucerne Alpine Cheese Selection', categorie: 'Food', destinatari: ['family', 'lover'] },

// Interlaken
{ tara: 'Switzerland (CH)', oras: 'Interlaken', suvenir: 'Interlaken Jungfrau Mountain Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Interlaken', suvenir: 'Swiss Cuckoo Clock', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Switzerland (CH)', oras: 'Interlaken', suvenir: 'Interlaken Swiss Fondue Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Basel
{ tara: 'Switzerland (CH)', oras: 'Basel', suvenir: 'Basel Minster Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Basel', suvenir: 'Basel Swiss Chocolate Truffles', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Switzerland (CH)', oras: 'Basel', suvenir: 'Basel Art Museum Pass', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Lausanne
{ tara: 'Switzerland (CH)', oras: 'Lausanne', suvenir: 'Lausanne Olympic Museum Ticket', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Lausanne', suvenir: 'Swiss Wine Assortment', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Switzerland (CH)', oras: 'Lausanne', suvenir: 'Lausanne Lakeside Painting', categorie: 'Art', destinatari: ['family', 'lover'] },

// Zermatt
{ tara: 'Switzerland (CH)', oras: 'Zermatt', suvenir: 'Matterhorn Mountain Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Zermatt', suvenir: 'Swiss Wool Sweater', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Switzerland (CH)', oras: 'Zermatt', suvenir: 'Zermatt Swiss Chocolate Fondue Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Bern
{ tara: 'Switzerland (CH)', oras: 'Bern', suvenir: 'Bern Clock Tower Keychain', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Bern', suvenir: 'Swiss Bernese Alps Calendar', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Switzerland (CH)', oras: 'Bern', suvenir: 'Bernese Chocolate Truffle Box', categorie: 'Food', destinatari: ['family', 'lover'] },

// Lugano
{ tara: 'Switzerland (CH)', oras: 'Lugano', suvenir: 'Lugano Lakeside Landscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Lugano', suvenir: 'Swiss Italian Cuisine Cookbook', categorie: 'Books', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Switzerland (CH)', oras: 'Lugano', suvenir: 'Lugano Swiss Watch', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// St. Moritz
{ tara: 'Switzerland (CH)', oras: 'St. Moritz', suvenir: 'St. Moritz Ski Resort Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'St. Moritz', suvenir: 'Swiss Alpine Cheese Fondue Set', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Switzerland (CH)', oras: 'St. Moritz', suvenir: 'St. Moritz Snow Globe', categorie: 'Art', destinatari: ['family', 'lover'] },

// Singapore (city-state)
{ tara: 'Singapore (SG)', oras: 'Singapore (city-state)', suvenir: 'Merlion Statue Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Singapore (SG)', oras: 'Singapore (city-state)', suvenir: 'Merlion Statue Replica', categorie: 'Art', destinatari: ['unspecified', 'lover'] },
{ tara: 'Singapore (SG)', oras: 'Singapore (city-state)', suvenir: 'Orchid Perfume', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Singapore (SG)', oras: 'Singapore (city-state)', suvenir: 'Orchid Perfume', categorie: 'Beauty', destinatari: ['lover', 'relative'] },
{ tara: 'Singapore (SG)', oras: 'Singapore (city-state)', suvenir: 'Singapore Sling Mix', categorie: 'Food', destinatari: ['family', 'lover'] },
{ tara: 'Singapore (SG)', oras: 'Singapore (city-state)', suvenir: 'Singapore Sling Mix', categorie: 'Food', destinatari: ['co-worker', 'unspecified'] },

// Seoul
{ tara: 'South Korea (KR)', oras: 'Seoul', suvenir: 'Seoul Skyline Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Seoul', suvenir: 'Korean Ginseng Tea Set', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'South Korea (KR)', oras: 'Seoul', suvenir: 'K-Pop Dance Class Voucher', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Busan
{ tara: 'South Korea (KR)', oras: 'Busan', suvenir: 'Busan Beach Scene Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Busan', suvenir: 'Korean Seafood Gift Basket', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'South Korea (KR)', oras: 'Busan', suvenir: 'Busan Hanbok Rental Voucher', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Jeju City
{ tara: 'South Korea (KR)', oras: 'Jeju City', suvenir: 'Jeju Island Landscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Jeju City', suvenir: 'Jeju Tangerine Gift Box', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'South Korea (KR)', oras: 'Jeju City', suvenir: 'Jeju Glass Castle Admission Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Incheon
{ tara: 'South Korea (KR)', oras: 'Incheon', suvenir: 'Incheon Port Scene Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Incheon', suvenir: 'Incheon Rice Cake Sampler', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'South Korea (KR)', oras: 'Incheon', suvenir: 'Incheon Traditional Hanji Crafts', categorie: 'Art', destinatari: ['family', 'lover'] },

// Gyeongju
{ tara: 'South Korea (KR)', oras: 'Gyeongju', suvenir: 'Gyeongju Silla Kingdom Artifact Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Gyeongju', suvenir: 'Gyeongju Rice Wine Set', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'South Korea (KR)', oras: 'Gyeongju', suvenir: 'Gyeongju Bulguksa Temple Tour Pass', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Daegu
{ tara: 'South Korea (KR)', oras: 'Daegu', suvenir: 'Daegu Modern Art Museum Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Daegu', suvenir: 'Daegu Spicy Chicken Gift Set', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'South Korea (KR)', oras: 'Daegu', suvenir: 'Daegu Kim Gwangseok Street Performance Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Daejeon
{ tara: 'South Korea (KR)', oras: 'Daejeon', suvenir: 'Daejeon Expo Park Memorabilia', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Daejeon', suvenir: 'Daejeon Bibimbap Cooking Class Voucher', categorie: 'Experience', destinatari: ['friend', 'acquaintance'] },
{ tara: 'South Korea (KR)', oras: 'Daejeon', suvenir: 'Daejeon Ginseng Chicken Soup Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Suwon
{ tara: 'South Korea (KR)', oras: 'Suwon', suvenir: 'Suwon Hwaseong Fortress Model Kit', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Suwon', suvenir: 'Suwon Traditional Hanbok Rental Voucher', categorie: 'Experience', destinatari: ['friend', 'acquaintance'] },
{ tara: 'South Korea (KR)', oras: 'Suwon', suvenir: 'Suwon Makgeolli Brewing Kit', categorie: 'Food', destinatari: ['family', 'lover'] },

// Chuncheon
{ tara: 'South Korea (KR)', oras: 'Chuncheon', suvenir: 'Chuncheon Dakgalbi Cooking Set', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Chuncheon', suvenir: 'Chuncheon Nami Island Ferry Ticket', categorie: 'Experience', destinatari: ['friend', 'acquaintance'] },
{ tara: 'South Korea (KR)', oras: 'Chuncheon', suvenir: 'Chuncheon Ceramic Tea Set', categorie: 'Art', destinatari: ['family', 'lover'] },

// Sokcho
{ tara: 'South Korea (KR)', oras: 'Sokcho', suvenir: 'Sokcho Seoraksan National Park Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Sokcho', suvenir: 'Sokcho Abai Village Trout Set', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'South Korea (KR)', oras: 'Sokcho', suvenir: 'Sokcho Beach Shell Collection', categorie: 'Art', destinatari: ['family', 'lover'] },

// Hong Kong
{ tara: 'Hong Kong (HK)', oras: 'Hong Kong (city-state)', suvenir: 'Hong Kong Skyline Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hong Kong (HK)', oras: 'Hong Kong (city-state)', suvenir: 'Dim Sum Cooking Class Voucher', categorie: 'Experience', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Hong Kong (HK)', oras: 'Hong Kong (city-state)', suvenir: 'Hong Kong Egg Waffles Mix', categorie: 'Food', destinatari: ['family', 'lover'] },

// Prague
{ tara: 'Czech Republic (CZ)', oras: 'Prague', suvenir: 'Prague Astronomical Clock Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Prague', suvenir: 'Bohemian Crystal Vase', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Czech Republic (CZ)', oras: 'Prague', suvenir: 'Czech Beer Selection', categorie: 'Food', destinatari: ['family', 'lover'] },

// Brno
{ tara: 'Czech Republic (CZ)', oras: 'Brno', suvenir: 'Brno Villa Tugendhat Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Brno', suvenir: 'Moravian Wine Collection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Czech Republic (CZ)', oras: 'Brno', suvenir: 'Brno Spilberk Castle Keychain', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Ostrava
{ tara: 'Czech Republic (CZ)', oras: 'Ostrava', suvenir: 'Ostrava Industrial Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Ostrava', suvenir: 'Moravian Folk Art Painting', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Czech Republic (CZ)', oras: 'Ostrava', suvenir: 'Ostrava Coal Mining History Book', categorie: 'Books', destinatari: ['family', 'lover'] },

// Plzen
{ tara: 'Czech Republic (CZ)', oras: 'Plzen', suvenir: 'Plzen Pilsner Brewery Tour Ticket', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Plzen', suvenir: 'Bohemian Glass Beer Mug', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Czech Republic (CZ)', oras: 'Plzen', suvenir: 'Plzen Historical Walking Map', categorie: 'Books', destinatari: ['family', 'lover'] },

// Karlovy Vary
{ tara: 'Czech Republic (CZ)', oras: 'Karlovy Vary', suvenir: 'Karlovy Vary Thermal Spa Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Karlovy Vary', suvenir: 'Czech Herbal Liquor Set', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Czech Republic (CZ)', oras: 'Karlovy Vary', suvenir: 'Karlovy Vary Porcelain Teapot', categorie: 'Art', destinatari: ['family', 'lover'] },

// Cesky Krumlov
{ tara: 'Czech Republic (CZ)', oras: 'Cesky Krumlov', suvenir: 'Cesky Krumlov Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Cesky Krumlov', suvenir: 'Bohemian Crystal Wine Glasses', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Czech Republic (CZ)', oras: 'Cesky Krumlov', suvenir: 'Cesky Krumlov Marionette Puppet', categorie: 'Art', destinatari: ['family', 'lover'] },

// Olomouc
{ tara: 'Czech Republic (CZ)', oras: 'Olomouc', suvenir: 'Olomouc Holy Trinity Column Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Olomouc', suvenir: 'Moravian Plum Brandy', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Czech Republic (CZ)', oras: 'Olomouc', suvenir: 'Olomouc Cheese Selection', categorie: 'Food', destinatari: ['family', 'lover'] },

// Liberec
{ tara: 'Czech Republic (CZ)', oras: 'Liberec', suvenir: 'Liberec Jested Tower Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Liberec', suvenir: 'Bohemian Crystal Jewelry', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Czech Republic (CZ)', oras: 'Liberec', suvenir: 'Liberec Winter Sports Museum Pass', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Hradec Kralove
{ tara: 'Czech Republic (CZ)', oras: 'Hradec Kralove', suvenir: 'Hradec Kralove Old Town Map', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Hradec Kralove', suvenir: 'Bohemian Glass Vase', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Czech Republic (CZ)', oras: 'Hradec Kralove', suvenir: 'Hradec Kralove Craft Beer Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Zlin
{ tara: 'Czech Republic (CZ)', oras: 'Zlin', suvenir: 'Zlin Bata Shoe Museum Pass', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Zlin', suvenir: 'Moravian Folk Art Doll', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Czech Republic (CZ)', oras: 'Zlin', suvenir: 'Zlin Brewery Tour Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Warsaw
{ tara: 'Poland (PL)', oras: 'Warsaw', suvenir: 'Warsaw Royal Castle Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Warsaw', suvenir: 'Polish Vodka Sampler', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Poland (PL)', oras: 'Warsaw', suvenir: 'Chopin Music Box', categorie: 'Art', destinatari: ['family', 'lover'] },

// Krakow
{ tara: 'Poland (PL)', oras: 'Krakow', suvenir: 'Krakow Cloth Hall Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Krakow', suvenir: 'Polish Amber Jewelry', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Poland (PL)', oras: 'Krakow', suvenir: 'Krakow Bagels (Obwarzanek Krakowski)', categorie: 'Food', destinatari: ['family', 'lover'] },

// Wroclaw
{ tara: 'Poland (PL)', oras: 'Wroclaw', suvenir: 'Wroclaw Dwarfs Figurines', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Wroclaw', suvenir: 'Polish Pottery Set', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Poland (PL)', oras: 'Wroclaw', suvenir: 'Wroclaw Salt & Honey Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Gdansk
{ tara: 'Poland (PL)', oras: 'Gdansk', suvenir: 'Gdansk Shipyard Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Gdansk', suvenir: 'Amber Stone Necklace', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Poland (PL)', oras: 'Gdansk', suvenir: 'Gdansk Liqueur Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Poznan
{ tara: 'Poland (PL)', oras: 'Poznan', suvenir: 'Poznan Town Hall Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Poznan', suvenir: 'St. Martin s Croissant', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Poland (PL)', oras: 'Poznan', suvenir: 'Poznan Beer Stein', categorie: 'Art', destinatari: ['family', 'lover'] },

// Lublin
{ tara: 'Poland (PL)', oras: 'Lublin', suvenir: 'Lublin Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Lublin', suvenir: 'Polish Linen Tablecloth', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Poland (PL)', oras: 'Lublin', suvenir: 'Lublin Honey and Jam Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Katowice
{ tara: 'Poland (PL)', oras: 'Katowice', suvenir: 'Katowice Spodek Arena Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Katowice', suvenir: 'Silesian Pottery', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Poland (PL)', oras: 'Katowice', suvenir: 'Katowice Sausage Selection', categorie: 'Food', destinatari: ['family', 'lover'] },

// Lodz
{ tara: 'Poland (PL)', oras: 'Lodz', suvenir: 'Lodz Manufaktura Mall Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Lodz', suvenir: 'Lodz Textile Art', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Poland (PL)', oras: 'Lodz', suvenir: 'Lodz Piotrkowska Street Coffee Blend', categorie: 'Food', destinatari: ['family', 'lover'] },

// Szczecin
{ tara: 'Poland (PL)', oras: 'Szczecin', suvenir: 'Szczecin Pomeranian Dukes Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Szczecin', suvenir: 'Szczecin Maritime Museum Ticket', categorie: 'Experience', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Poland (PL)', oras: 'Szczecin', suvenir: 'Szczecin Baltic Sea Amber', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Torun
{ tara: 'Poland (PL)', oras: 'Torun', suvenir: 'Torun Old Town Panoramic Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Torun', suvenir: 'Torun Gingerbread Assortment', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Poland (PL)', oras: 'Torun', suvenir: 'Copernicus Observatory Pass', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Stockholm
{ tara: 'Sweden (SE)', oras: 'Stockholm', suvenir: 'Stockholm Royal Palace Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Stockholm', suvenir: 'Swedish Fika Basket', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Sweden (SE)', oras: 'Stockholm', suvenir: 'Stockholm Archipelago Boat Tour Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Gothenburg
{ tara: 'Sweden (SE)', oras: 'Gothenburg', suvenir: 'Gothenburg Opera House Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Gothenburg', suvenir: 'Swedish Cinnamon Buns (Kanelbullar)', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Sweden (SE)', oras: 'Gothenburg', suvenir: 'Gothenburg Botanical Garden Poster', categorie: 'Art', destinatari: ['family', 'lover'] },

// Malmo
{ tara: 'Sweden (SE)', oras: 'Malmo', suvenir: 'Malmo Turning Torso Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Malmo', suvenir: 'Malmo Organic Coffee Blend', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Sweden (SE)', oras: 'Malmo', suvenir: 'Malmo Castle Garden Pass', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Uppsala
{ tara: 'Sweden (SE)', oras: 'Uppsala', suvenir: 'Uppsala Cathedral Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Uppsala', suvenir: 'Swedish Glassware Set', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Sweden (SE)', oras: 'Uppsala', suvenir: 'Uppsala University Book', categorie: 'Books', destinatari: ['family', 'lover'] },

// Visby
{ tara: 'Sweden (SE)', oras: 'Visby', suvenir: 'Visby Medieval Wall Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Visby', suvenir: 'Gotland Sheepskin Rug', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Sweden (SE)', oras: 'Visby', suvenir: 'Visby Viking Artefact Replica', categorie: 'Art', destinatari: ['family', 'lover'] },

// Helsingborg
{ tara: 'Sweden (SE)', oras: 'Helsingborg', suvenir: 'Helsingborg Kärnan Tower Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Helsingborg', suvenir: 'Swedish Berry Jam Assortment', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Sweden (SE)', oras: 'Helsingborg', suvenir: 'Helsingborg Maritime Museum Pass', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Lund
{ tara: 'Sweden (SE)', oras: 'Lund', suvenir: 'Lund University Emblem Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Lund', suvenir: 'Swedish Licorice Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Sweden (SE)', oras: 'Lund', suvenir: 'Lund Botanical Garden Seed Set', categorie: 'Art', destinatari: ['family', 'lover'] },

// Orebro
{ tara: 'Sweden (SE)', oras: 'Orebro', suvenir: 'Orebro Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Orebro', suvenir: 'Swedish Silver Jewelry', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Sweden (SE)', oras: 'Orebro', suvenir: 'Orebro Local Craft Beer Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Linkoping
{ tara: 'Sweden (SE)', oras: 'Linkoping', suvenir: 'Linkoping Cathedral Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Linkoping', suvenir: 'Swedish Dala Horse Figurine', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Sweden (SE)', oras: 'Linkoping', suvenir: 'Linkoping Aviation Museum Pass', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Karlstad
{ tara: 'Sweden (SE)', oras: 'Karlstad', suvenir: 'Karlstad City Hall Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Karlstad', suvenir: 'Swedish Reindeer Antler Knife', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Sweden (SE)', oras: 'Karlstad', suvenir: 'Karlstad Lake Cruise Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Copenhagen
{ tara: 'Denmark (DK)', oras: 'Copenhagen', suvenir: 'Copenhagen Little Mermaid Statue Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Copenhagen', suvenir: 'Danish Pastries Assortment', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Denmark (DK)', oras: 'Copenhagen', suvenir: 'Copenhagen Tivoli Gardens Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Aarhus
{ tara: 'Denmark (DK)', oras: 'Aarhus', suvenir: 'Aarhus Old Town Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Aarhus', suvenir: 'Danish Design Tea Set', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Denmark (DK)', oras: 'Aarhus', suvenir: 'Aarhus Viking Museum Pass', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Odense
{ tara: 'Denmark (DK)', oras: 'Odense', suvenir: 'Odense Hans Christian Andersen Book', categorie: 'Books', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Odense', suvenir: 'Danish Ceramic Tableware Set', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Denmark (DK)', oras: 'Odense', suvenir: 'Odense Funen Village Entrance Pass', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Aalborg
{ tara: 'Denmark (DK)', oras: 'Aalborg', suvenir: 'Aalborg Historical Museum Ticket', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Aalborg', suvenir: 'Danish Craft Beer Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Denmark (DK)', oras: 'Aalborg', suvenir: 'Aalborg Viking Ship Model', categorie: 'Art', destinatari: ['family', 'lover'] },

// Esbjerg
{ tara: 'Denmark (DK)', oras: 'Esbjerg', suvenir: 'Esbjerg Fisheries and Maritime Museum Pass', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Esbjerg', suvenir: 'Danish Smoked Fish Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Denmark (DK)', oras: 'Esbjerg', suvenir: 'Esbjerg Windmill Model', categorie: 'Art', destinatari: ['family', 'lover'] },

// Roskilde
{ tara: 'Denmark (DK)', oras: 'Roskilde', suvenir: 'Roskilde Viking Ship Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Roskilde', suvenir: 'Danish Cheese Assortment', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Denmark (DK)', oras: 'Roskilde', suvenir: 'Roskilde Cathedral Model', categorie: 'Art', destinatari: ['family', 'lover'] },

// Helsingor
{ tara: 'Denmark (DK)', oras: 'Helsingor', suvenir: 'Helsingor Kronborg Castle Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Helsingor', suvenir: 'Danish Liquorice Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Denmark (DK)', oras: 'Helsingor', suvenir: 'Helsingor Maritime Museum Pass', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Kolding
{ tara: 'Denmark (DK)', oras: 'Kolding', suvenir: 'Koldinghus Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Kolding', suvenir: 'Danish Glassware Set', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Denmark (DK)', oras: 'Kolding', suvenir: 'Kolding Scandinavian Design Book', categorie: 'Books', destinatari: ['family', 'lover'] },

// Viborg
{ tara: 'Denmark (DK)', oras: 'Viborg', suvenir: 'Viborg Cathedral Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Viborg', suvenir: 'Danish Viking Ship Figurine', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Denmark (DK)', oras: 'Viborg', suvenir: 'Viborg Historical Museum Pass', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Randers
{ tara: 'Denmark (DK)', oras: 'Randers', suvenir: 'Randers Rainforest Zoo Pass', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Randers', suvenir: 'Danish Organic Beer Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Denmark (DK)', oras: 'Randers', suvenir: 'Randers Viking Ship Model', categorie: 'Art', destinatari: ['family', 'lover'] },

// Cairo
{ tara: 'Egypt (EG)', oras: 'Cairo', suvenir: 'Pyramid Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Cairo', suvenir: 'Egyptian Papyrus Painting', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Egypt (EG)', oras: 'Cairo', suvenir: 'Cairo Spice Mix Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Luxor
{ tara: 'Egypt (EG)', oras: 'Luxor', suvenir: 'Luxor Temple Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Luxor', suvenir: 'Egyptian Hieroglyphic Keychain', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Egypt (EG)', oras: 'Luxor', suvenir: 'Luxor Antiquities Book', categorie: 'Books', destinatari: ['family', 'lover'] },

// Aswan
{ tara: 'Egypt (EG)', oras: 'Aswan', suvenir: 'Aswan Dam Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Aswan', suvenir: 'Nubian Jewelry Set', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Egypt (EG)', oras: 'Aswan', suvenir: 'Aswan Tea Blend', categorie: 'Food', destinatari: ['family', 'lover'] },

// Alexandria
{ tara: 'Egypt (EG)', oras: 'Alexandria', suvenir: 'Alexandria Lighthouse Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Alexandria', suvenir: 'Egyptian Cotton Clothing', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Egypt (EG)', oras: 'Alexandria', suvenir: 'Alexandria Mediterranean Spice Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Sharm El Sheikh
{ tara: 'Egypt (EG)', oras: 'Sharm El Sheikh', suvenir: 'Red Sea Coral Jewelry', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Sharm El Sheikh', suvenir: 'Bedouin Handcrafted Rug', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Egypt (EG)', oras: 'Sharm El Sheikh', suvenir: 'Sharm El Sheikh Resort Spa Package', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Hurghada
{ tara: 'Egypt (EG)', oras: 'Hurghada', suvenir: 'Red Sea Shell Necklace', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Hurghada', suvenir: 'Hurghada Coral Reef Poster', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Egypt (EG)', oras: 'Hurghada', suvenir: 'Egyptian Sandalwood Incense', categorie: 'Home', destinatari: ['family', 'lover'] },

// Giza
{ tara: 'Egypt (EG)', oras: 'Giza', suvenir: 'Giza Pyramids Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Giza', suvenir: 'Egyptian Scarab Beetle Pendant', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Egypt (EG)', oras: 'Giza', suvenir: 'Giza Egyptian Cotton Bedding Set', categorie: 'Home', destinatari: ['family', 'lover'] },

// Dahab
{ tara: 'Egypt (EG)', oras: 'Dahab', suvenir: 'Dahab Desert Sand Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Dahab', suvenir: 'Bedouin Handwoven Shawl', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Egypt (EG)', oras: 'Dahab', suvenir: 'Dahab Diving Safari Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Marsa Alam
{ tara: 'Egypt (EG)', oras: 'Marsa Alam', suvenir: 'Marsa Alam Dolphin Encounter', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Marsa Alam', suvenir: 'Red Sea Coral Reef Painting', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Egypt (EG)', oras: 'Marsa Alam', suvenir: 'Marsa Alam Sea Salt Scrub', categorie: 'Beauty', destinatari: ['family', 'lover'] },

// El Gouna
{ tara: 'Egypt (EG)', oras: 'El Gouna', suvenir: 'El Gouna Resort Beach Towel', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'El Gouna', suvenir: 'El Gouna Glass Bottom Boat Tour', categorie: 'Experience', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Egypt (EG)', oras: 'El Gouna', suvenir: 'Red Sea Fish Identification Guide', categorie: 'Books', destinatari: ['family', 'lover'] },

// Dubrovnik
{ tara: 'Croatia (HR)', oras: 'Dubrovnik', suvenir: 'Dubrovnik Old Town Map', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Dubrovnik', suvenir: 'Dubrovnik Game of Thrones Tour Ticket', categorie: 'Experience', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Croatia (HR)', oras: 'Dubrovnik', suvenir: 'Dalmatian Fig Spread', categorie: 'Food', destinatari: ['family', 'lover'] },

// Split
{ tara: 'Croatia (HR)', oras: 'Split', suvenir: 'Diocletian s Palace Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Split', suvenir: 'Split Marjan Hill Hiking Guide', categorie: 'Books', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Croatia (HR)', oras: 'Split', suvenir: 'Dalmatian Olive Oil Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Zagreb
{ tara: 'Croatia (HR)', oras: 'Zagreb', suvenir: 'Zagreb Upper Town Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Zagreb', suvenir: 'Zagreb Dolac Market Cookbook', categorie: 'Books', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Croatia (HR)', oras: 'Zagreb', suvenir: 'Zagreb Licitar Heart', categorie: 'Art', destinatari: ['family', 'lover'] },

// Zadar
{ tara: 'Croatia (HR)', oras: 'Zadar', suvenir: 'Zadar Sea Organ Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Zadar', suvenir: 'Maraschino Cherry Liqueur', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Croatia (HR)', oras: 'Zadar', suvenir: 'Zadar Sunset Painting', categorie: 'Art', destinatari: ['family', 'lover'] },

// Rovinj
{ tara: 'Croatia (HR)', oras: 'Rovinj', suvenir: 'Rovinj Old Town Canvas Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Rovinj', suvenir: 'Istrian Truffle Oil', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Croatia (HR)', oras: 'Rovinj', suvenir: 'Rovinj Seaside Ceramic Plate', categorie: 'Art', destinatari: ['family', 'lover'] },

// Pula
{ tara: 'Croatia (HR)', oras: 'Pula', suvenir: 'Pula Roman Amphitheatre Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Pula', suvenir: 'Istrian Olive Wood Cutting Board', categorie: 'Home', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Croatia (HR)', oras: 'Pula', suvenir: 'Pula Arena Postcard Set', categorie: 'Art', destinatari: ['family', 'lover'] },

// Sibenik
{ tara: 'Croatia (HR)', oras: 'Sibenik', suvenir: 'Sibenik Cathedral Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Sibenik', suvenir: 'Dalmatian Prosciutto Gift Box', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Croatia (HR)', oras: 'Sibenik', suvenir: 'Sibenik Seafront Painting', categorie: 'Art', destinatari: ['family', 'lover'] },

// Trogir
{ tara: 'Croatia (HR)', oras: 'Trogir', suvenir: 'Trogir Old Town Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Trogir', suvenir: 'Dalmatian Red Wine Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Croatia (HR)', oras: 'Trogir', suvenir: 'Trogir Historic Buildings Calendar', categorie: 'Art', destinatari: ['family', 'lover'] },

// Hvar
{ tara: 'Croatia (HR)', oras: 'Hvar', suvenir: 'Hvar Lavender Soap Set', categorie: 'Beauty', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Hvar', suvenir: 'Hvar Island Olive Oil', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Croatia (HR)', oras: 'Hvar', suvenir: 'Hvar Vineyard Tour Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Osijek
{ tara: 'Croatia (HR)', oras: 'Osijek', suvenir: 'Osijek Fortress Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Osijek', suvenir: 'Slavonian Honey Wine', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Croatia (HR)', oras: 'Osijek', suvenir: 'Osijek Traditional Embroidery', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Oslo
{ tara: 'Norway (NO)', oras: 'Oslo', suvenir: 'Oslo Opera House Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Oslo', suvenir: 'Norwegian Salmon Sampler', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Norway (NO)', oras: 'Oslo', suvenir: 'Viking Ship Museum Poster', categorie: 'Art', destinatari: ['family', 'lover'] },

// Bergen
{ tara: 'Norway (NO)', oras: 'Bergen', suvenir: 'Bryggen Hanseatic Wharf Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Bergen', suvenir: 'Norwegian Seafood Cookbook', categorie: 'Books', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Norway (NO)', oras: 'Bergen', suvenir: 'Bergen Rain Poncho', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Stavanger
{ tara: 'Norway (NO)', oras: 'Stavanger', suvenir: 'Stavanger Old Town Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Stavanger', suvenir: 'Norwegian Knit Sweater', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Norway (NO)', oras: 'Stavanger', suvenir: 'Stavanger Sardines Tin', categorie: 'Food', destinatari: ['family', 'lover'] },

// Trondheim
{ tara: 'Norway (NO)', oras: 'Trondheim', suvenir: 'Trondheim Nidaros Cathedral Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Trondheim', suvenir: 'Norwegian Forest Berries Jam', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Norway (NO)', oras: 'Trondheim', suvenir: 'Trondheim Fjord Cruise Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Tromso
{ tara: 'Norway (NO)', oras: 'Tromso', suvenir: 'Tromso Northern Lights Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Tromso', suvenir: 'Tromso Arctic Snow Globe', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Norway (NO)', oras: 'Tromso', suvenir: 'Norwegian Reindeer Salami', categorie: 'Food', destinatari: ['family', 'lover'] },

// Alesund
{ tara: 'Norway (NO)', oras: 'Alesund', suvenir: 'Alesund Art Nouveau Architecture Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Alesund', suvenir: 'Norwegian Aquavit Set', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Norway (NO)', oras: 'Alesund', suvenir: 'Alesund Lighthouse Miniature', categorie: 'Art', destinatari: ['family', 'lover'] },

// Kristiansand
{ tara: 'Norway (NO)', oras: 'Kristiansand', suvenir: 'Kristiansand Sailboat Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Kristiansand', suvenir: 'Norwegian Salmon Jerky', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Norway (NO)', oras: 'Kristiansand', suvenir: 'Kristiansand Maritime Museum Pass', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Drammen
{ tara: 'Norway (NO)', oras: 'Drammen', suvenir: 'Drammen Glassworks Art Piece', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Drammen', suvenir: 'Norwegian Aquavit Glass Set', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Norway (NO)', oras: 'Drammen', suvenir: 'Drammen Riverfront Painting', categorie: 'Art', destinatari: ['family', 'lover'] },

// Bodo
{ tara: 'Norway (NO)', oras: 'Bodo', suvenir: 'Bodo Northern Lights Canvas', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Bodo', suvenir: 'Bodo Arctic Char Fillet', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Norway (NO)', oras: 'Bodo', suvenir: 'Bodo Polar Bear Plush Toy', categorie: 'Toys', destinatari: ['family', 'lover'] },

// Lillehammer
{ tara: 'Norway (NO)', oras: 'Lillehammer', suvenir: 'Lillehammer Ski Jump Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Lillehammer', suvenir: 'Norwegian Elk Jerky', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Norway (NO)', oras: 'Lillehammer', suvenir: 'Lillehammer Winter Sports Museum Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Bali (Denpasar)
{ tara: 'Indonesia (ID)', oras: 'Bali (Denpasar)', suvenir: 'Balinese Batik Fabric', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Bali (Denpasar)', suvenir: 'Ubud Hand-carved Mask', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Indonesia (ID)', oras: 'Bali (Denpasar)', suvenir: 'Bali Coffee Beans', categorie: 'Food', destinatari: ['family', 'lover'] },

// Jakarta
{ tara: 'Indonesia (ID)', oras: 'Jakarta', suvenir: 'Jakarta Skyline Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Jakarta', suvenir: 'Indonesian Batik Scarf', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Indonesia (ID)', oras: 'Jakarta', suvenir: 'Jakarta Street Food Sampler', categorie: 'Food', destinatari: ['family', 'lover'] },

// Yogyakarta
{ tara: 'Indonesia (ID)', oras: 'Yogyakarta', suvenir: 'Borobudur Temple Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Yogyakarta', suvenir: 'Wayang Kulit (Shadow Puppet)', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Indonesia (ID)', oras: 'Yogyakarta', suvenir: 'Yogyakarta Batik Painting', categorie: 'Art', destinatari: ['family', 'lover'] },

// Surabaya
{ tara: 'Indonesia (ID)', oras: 'Surabaya', suvenir: 'Surabaya Ceramic Vase', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Surabaya', suvenir: 'Madura Batik Shirt', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Indonesia (ID)', oras: 'Surabaya', suvenir: 'East Javanese Snacks Assortment', categorie: 'Food', destinatari: ['family', 'lover'] },

// Bandung
{ tara: 'Indonesia (ID)', oras: 'Bandung', suvenir: 'Bandung Geometric Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Bandung', suvenir: 'Bandung Traditional Shawl', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Indonesia (ID)', oras: 'Bandung', suvenir: 'Bandung Tea Sampler', categorie: 'Food', destinatari: ['family', 'lover'] },

// Medan
{ tara: 'Indonesia (ID)', oras: 'Medan', suvenir: 'Medan Toba Lake Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Medan', suvenir: 'Batak Hand-carved Mask', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Indonesia (ID)', oras: 'Medan', suvenir: 'Medan Durian Chocolate Box', categorie: 'Food', destinatari: ['family', 'lover'] },

// Lombok
{ tara: 'Indonesia (ID)', oras: 'Lombok', suvenir: 'Lombok Beach Sand Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Lombok', suvenir: 'Sasak Hand-woven Textile', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Indonesia (ID)', oras: 'Lombok', suvenir: 'Lombok Sea Salt', categorie: 'Food', destinatari: ['family', 'lover'] },

// Makassar
{ tara: 'Indonesia (ID)', oras: 'Makassar', suvenir: 'Makassar Traditional Boat Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Makassar', suvenir: 'South Sulawesi Batik Pillow Case', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Indonesia (ID)', oras: 'Makassar', suvenir: 'Makassar Spices Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Batam
{ tara: 'Indonesia (ID)', oras: 'Batam', suvenir: 'Batam Local Handicraft', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Batam', suvenir: 'Batam Handmade Batik Scarf', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Indonesia (ID)', oras: 'Batam', suvenir: 'Batam Pineapple Tarts', categorie: 'Food', destinatari: ['family', 'lover'] },

// Semarang
{ tara: 'Indonesia (ID)', oras: 'Semarang', suvenir: 'Semarang Old Town Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Semarang', suvenir: 'Javanese Batik Table Runner', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Indonesia (ID)', oras: 'Semarang', suvenir: 'Semarang Kopi Luwak Coffee', categorie: 'Food', destinatari: ['family', 'lover'] },

// Dublin
{ tara: 'Ireland (IE)', oras: 'Dublin', suvenir: 'Dublin Guinness Storehouse Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Dublin', suvenir: 'Irish Wool Sweater', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Ireland (IE)', oras: 'Dublin', suvenir: 'Irish Whiskey Selection', categorie: 'Food', destinatari: ['family', 'lover'] },

// Galway
{ tara: 'Ireland (IE)', oras: 'Galway', suvenir: 'Galway Claddagh Ring', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Galway', suvenir: 'Connemara Marble Necklace', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Ireland (IE)', oras: 'Galway', suvenir: 'Galway Bay Smoked Salmon', categorie: 'Food', destinatari: ['family', 'lover'] },

// Cork
{ tara: 'Ireland (IE)', oras: 'Cork', suvenir: 'Cork Cityscape Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Cork', suvenir: 'Cork Crystal Wine Glasses', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Ireland (IE)', oras: 'Cork', suvenir: 'Cork Whiskey Cake', categorie: 'Food', destinatari: ['family', 'lover'] },

// Killarney
{ tara: 'Ireland (IE)', oras: 'Killarney', suvenir: 'Killarney National Park Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Killarney', suvenir: 'Irish Linen Scarf', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Ireland (IE)', oras: 'Killarney', suvenir: 'Killarney Chocolate Truffles', categorie: 'Food', destinatari: ['family', 'lover'] },

// Limerick
{ tara: 'Ireland (IE)', oras: 'Limerick', suvenir: 'Limerick Georgian Architecture Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Limerick', suvenir: 'Limerick Lace Handkerchief', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Ireland (IE)', oras: 'Limerick', suvenir: 'Limerick Hamper with Irish Cheese', categorie: 'Food', destinatari: ['family', 'lover'] },

// Waterford
{ tara: 'Ireland (IE)', oras: 'Waterford', suvenir: 'Waterford Crystal Vase', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Waterford', suvenir: 'Waterford Crystal Jewelry', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Ireland (IE)', oras: 'Waterford', suvenir: 'Waterford Blaa Bread Mix', categorie: 'Food', destinatari: ['family', 'lover'] },

// Kilkenny
{ tara: 'Ireland (IE)', oras: 'Kilkenny', suvenir: 'Kilkenny Castle Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Kilkenny', suvenir: 'Irish Craft Beer Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Ireland (IE)', oras: 'Kilkenny', suvenir: 'Kilkenny Traditional Hurling Ball', categorie: 'Sport', destinatari: ['family', 'lover'] },

// Sligo
{ tara: 'Ireland (IE)', oras: 'Sligo', suvenir: 'Sligo Landscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Sligo', suvenir: 'Sligo Handcrafted Pottery', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Ireland (IE)', oras: 'Sligo', suvenir: 'Sligo Irish Seaweed Bath Set', categorie: 'Beauty', destinatari: ['family', 'lover'] },

// Dingle
{ tara: 'Ireland (IE)', oras: 'Dingle', suvenir: 'Dingle Peninsula Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Dingle', suvenir: 'Dingle Sheep Wool Throw', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Ireland (IE)', oras: 'Dingle', suvenir: 'Dingle Peninsula Sea Salt', categorie: 'Food', destinatari: ['family', 'lover'] },

// Westport
{ tara: 'Ireland (IE)', oras: 'Westport', suvenir: 'Westport Harbour Watercolor Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Westport', suvenir: 'Westport Hand-knit Aran Sweater', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Ireland (IE)', oras: 'Westport', suvenir: 'Westport Whiskey Tasting Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Bucharest
{ tara: 'Romania (RO)', oras: 'Bucharest', suvenir: 'Bucharest Old Town Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Bucharest', suvenir: 'Romanian Traditional Blouse', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Romania (RO)', oras: 'Bucharest', suvenir: 'Romanian Wine Selection', categorie: 'Food', destinatari: ['family', 'lover'] },

// Cluj-Napoca
{ tara: 'Romania (RO)', oras: 'Cluj-Napoca', suvenir: 'Cluj-Napoca Botanical Garden Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Cluj-Napoca', suvenir: 'Transylvanian Wooden Spoon Set', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Romania (RO)', oras: 'Cluj-Napoca', suvenir: 'Cluj-Napoca Cheese Platter', categorie: 'Food', destinatari: ['family', 'lover'] },

// Brasov
{ tara: 'Romania (RO)', oras: 'Brasov', suvenir: 'Brasov Black Church Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Brasov', suvenir: 'Romanian Dracula T-shirt', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Romania (RO)', oras: 'Brasov', suvenir: 'Brasov Chocolate Box', categorie: 'Food', destinatari: ['family', 'lover'] },

// Sibiu
{ tara: 'Romania (RO)', oras: 'Sibiu', suvenir: 'Sibiu Bridge of Lies Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Sibiu', suvenir: 'Saxon Transylvanian Cuckoo Clock', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Romania (RO)', oras: 'Sibiu', suvenir: 'Sibiu Transylvanian Wine Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Timisoara
{ tara: 'Romania (RO)', oras: 'Timisoara', suvenir: 'Timisoara Opera House Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Timisoara', suvenir: 'Banat Traditional Ceramic Plate', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Romania (RO)', oras: 'Timisoara', suvenir: 'Timisoara Paprika Spice Blend', categorie: 'Food', destinatari: ['family', 'lover'] },

// Iasi
{ tara: 'Romania (RO)', oras: 'Iasi', suvenir: 'Iasi Palace of Culture Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Iasi', suvenir: 'Moldavian Traditional Embroidery', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Romania (RO)', oras: 'Iasi', suvenir: 'Iasi Sweets Assortment', categorie: 'Food', destinatari: ['family', 'lover'] },

// Constanta
{ tara: 'Romania (RO)', oras: 'Constanta', suvenir: 'Constanta Black Sea Coastline Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Constanta', suvenir: 'Romanian Seashell Jewelry', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Romania (RO)', oras: 'Constanta', suvenir: 'Constanta Sea Salt', categorie: 'Food', destinatari: ['family', 'lover'] },

// Oradea
{ tara: 'Romania (RO)', oras: 'Oradea', suvenir: 'Oradea Art Nouveau Architecture Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Oradea', suvenir: 'Oradea Thermal Bath Soap Set', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Romania (RO)', oras: 'Oradea', suvenir: 'Oradea Mineral Water Collection', categorie: 'Food', destinatari: ['family', 'lover'] },

// Sighisoara
{ tara: 'Romania (RO)', oras: 'Sighisoara', suvenir: 'Sighisoara Clock Tower Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Sighisoara', suvenir: 'Transylvanian Herbal Tea Sampler', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Romania (RO)', oras: 'Sighisoara', suvenir: 'Sighisoara Medieval Ceramic Mug', categorie: 'Art', destinatari: ['family', 'lover'] },

// Arad
{ tara: 'Romania (RO)', oras: 'Arad', suvenir: 'Arad Cityscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Arad', suvenir: 'Banat Regional Wine Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Romania (RO)', oras: 'Arad', suvenir: 'Arad Paprika Spice Blend', categorie: 'Food', destinatari: ['family', 'lover'] },

// Brussels
{ tara: 'Belgium (BE)', oras: 'Brussels', suvenir: 'Atomium Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Brussels', suvenir: 'Belgian Chocolate Assortment', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Belgium (BE)', oras: 'Brussels', suvenir: 'Manneken Pis Keychain', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Bruges
{ tara: 'Belgium (BE)', oras: 'Bruges', suvenir: 'Bruges Canal Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Bruges', suvenir: 'Bruges Lace Handkerchief', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Belgium (BE)', oras: 'Bruges', suvenir: 'Bruges Beer Selection', categorie: 'Food', destinatari: ['family', 'lover'] },

// Ghent
{ tara: 'Belgium (BE)', oras: 'Ghent', suvenir: 'Ghent Altarpiece Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Ghent', suvenir: 'Ghent Floral Arrangement', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Belgium (BE)', oras: 'Ghent', suvenir: 'Ghent Cuberdon Candies', categorie: 'Food', destinatari: ['family', 'lover'] },

// Antwerp
{ tara: 'Belgium (BE)', oras: 'Antwerp', suvenir: 'Antwerp Diamond Paperweight', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Antwerp', suvenir: 'Antwerp Fashion Magazine', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Belgium (BE)', oras: 'Antwerp', suvenir: 'Antwerp Belgian Waffles Mix', categorie: 'Food', destinatari: ['family', 'lover'] },

// Leuven
{ tara: 'Belgium (BE)', oras: 'Leuven', suvenir: 'Leuven University Hoodie', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Leuven', suvenir: 'Leuven Abbey Beer Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Belgium (BE)', oras: 'Leuven', suvenir: 'Leuven Library Poster', categorie: 'Art', destinatari: ['family', 'lover'] },

// Liege
{ tara: 'Belgium (BE)', oras: 'Liege', suvenir: 'Liege Cathedral Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Liege', suvenir: 'Liege Pâté Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Belgium (BE)', oras: 'Liege', suvenir: 'Liege Belgian Chocolate Box', categorie: 'Food', destinatari: ['family', 'lover'] },

// Namur
{ tara: 'Belgium (BE)', oras: 'Namur', suvenir: 'Namur Castle Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Namur', suvenir: 'Namur River Cruise Ticket', categorie: 'Experience', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Belgium (BE)', oras: 'Namur', suvenir: 'Namur Beer Sampler', categorie: 'Food', destinatari: ['family', 'lover'] },

// Mechelen
{ tara: 'Belgium (BE)', oras: 'Mechelen', suvenir: 'Mechelen Brewery Glass Set', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Mechelen', suvenir: 'Mechelen Lace Tablecloth', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Belgium (BE)', oras: 'Mechelen', suvenir: 'Mechelen Beer and Cheese Pairing Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Mons
{ tara: 'Belgium (BE)', oras: 'Mons', suvenir: 'Mons Grand Place Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Mons', suvenir: 'Mons Craft Beer Set', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Belgium (BE)', oras: 'Mons', suvenir: 'Mons Chocolate Truffle Box', categorie: 'Food', destinatari: ['family', 'lover'] },

// Oostende
{ tara: 'Belgium (BE)', oras: 'Oostende', suvenir: 'Oostende Beach Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Oostende', suvenir: 'Oostende Fishermen s Hat', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Belgium (BE)', oras: 'Oostende', suvenir: 'Oostende Seafood Assortment', categorie: 'Food', destinatari: ['family', 'lover'] },

// Hanoi
{ tara: 'Vietnam (VN)', oras: 'Hanoi', suvenir: 'Hanoi Ceramic Water Puppet', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Hanoi', suvenir: 'Vietnamese Silk Scarf', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Vietnam (VN)', oras: 'Hanoi', suvenir: 'Hanoi Street Food Spice Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Ho Chi Minh City
{ tara: 'Vietnam (VN)', oras: 'Ho Chi Minh City', suvenir: 'Ho Chi Minh City Skyline Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Ho Chi Minh City', suvenir: 'Vietnamese Coffee Beans', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Vietnam (VN)', oras: 'Ho Chi Minh City', suvenir: 'Ho Chi Minh City Ao Dai (Traditional Dress)', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Hoi An
{ tara: 'Vietnam (VN)', oras: 'Hoi An', suvenir: 'Hoi An Lantern', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Hoi An', suvenir: 'Hoi An Tailored Silk Shirt', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Vietnam (VN)', oras: 'Hoi An', suvenir: 'Hoi An Rice Noodle Basket', categorie: 'Food', destinatari: ['family', 'lover'] },

// Da Nang
{ tara: 'Vietnam (VN)', oras: 'Da Nang', suvenir: 'Da Nang Marble Mountain Sculpture', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Da Nang', suvenir: 'Da Nang Sea Shell Jewelry', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Vietnam (VN)', oras: 'Da Nang', suvenir: 'Da Nang Fish Sauce Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Ha Long
{ tara: 'Vietnam (VN)', oras: 'Ha Long', suvenir: 'Ha Long Bay Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Ha Long', suvenir: 'Ha Long Pearl Jewelry', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Vietnam (VN)', oras: 'Ha Long', suvenir: 'Ha Long Seafood Sampler', categorie: 'Food', destinatari: ['family', 'lover'] },

// Hue
{ tara: 'Vietnam (VN)', oras: 'Hue', suvenir: 'Hue Imperial Citadel Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Hue', suvenir: 'Hue Conical Hat', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Vietnam (VN)', oras: 'Hue', suvenir: 'Hue Royal Tea Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Nha Trang
{ tara: 'Vietnam (VN)', oras: 'Nha Trang', suvenir: 'Nha Trang Beach Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Nha Trang', suvenir: 'Nha Trang Pearl Necklace', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Vietnam (VN)', oras: 'Nha Trang', suvenir: 'Nha Trang Dried Seafood Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Phu Quoc
{ tara: 'Vietnam (VN)', oras: 'Phu Quoc', suvenir: 'Phu Quoc Coconut Candle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Phu Quoc', suvenir: 'Phu Quoc Fish Sauce', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Vietnam (VN)', oras: 'Phu Quoc', suvenir: 'Phu Quoc Pearl Earrings', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Sapa
{ tara: 'Vietnam (VN)', oras: 'Sapa', suvenir: 'Sapa Embroidered Bag', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Sapa', suvenir: 'Sapa Handwoven Blanket', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Vietnam (VN)', oras: 'Sapa', suvenir: 'Sapa Herbal Tea Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Can Tho
{ tara: 'Vietnam (VN)', oras: 'Can Tho', suvenir: 'Can Tho Floating Market Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Can Tho', suvenir: 'Can Tho Rice Wine', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Vietnam (VN)', oras: 'Can Tho', suvenir: 'Can Tho Rice Noodle Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Manila
{ tara: 'Philippines (PH)', oras: 'Manila', suvenir: 'Manila Jeepney Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Manila', suvenir: 'Barong Tagalog (Traditional Filipino Shirt)', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Philippines (PH)', oras: 'Manila', suvenir: 'Dried Mangoes', categorie: 'Food', destinatari: ['family', 'lover'] },

// Cebu
{ tara: 'Philippines (PH)', oras: 'Cebu', suvenir: 'Cebu Guitar', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Cebu', suvenir: 'Taal Woven Shawl', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Philippines (PH)', oras: 'Cebu', suvenir: 'Danggit (Dried Fish)', categorie: 'Food', destinatari: ['family', 'lover'] },

// Boracay
{ tara: 'Philippines (PH)', oras: 'Boracay', suvenir: 'Boracay Beach Sand Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Boracay', suvenir: 'Boracay Island T-Shirt', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Philippines (PH)', oras: 'Boracay', suvenir: 'Calamansi Marmalade', categorie: 'Food', destinatari: ['family', 'lover'] },

// Davao
{ tara: 'Philippines (PH)', oras: 'Davao', suvenir: 'Durian Chocolates', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Davao', suvenir: 'Malong (Traditional Filipino Wrap)', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Philippines (PH)', oras: 'Davao', suvenir: 'Davao Pomelo', categorie: 'Food', destinatari: ['family', 'lover'] },

// Baguio
{ tara: 'Philippines (PH)', oras: 'Baguio', suvenir: 'Baguio Handwoven Blanket', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Baguio', suvenir: 'Strawberry Jam', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Philippines (PH)', oras: 'Baguio', suvenir: 'Baguio Native Handicrafts', categorie: 'Art', destinatari: ['family', 'lover'] },

// Bohol
{ tara: 'Philippines (PH)', oras: 'Bohol', suvenir: 'Bohol Chocolate Hills Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Bohol', suvenir: 'Peanut Kisses', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Philippines (PH)', oras: 'Bohol', suvenir: 'Bohol Shell Necklace', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Palawan (Puerto Princesa)
{ tara: 'Philippines (PH)', oras: 'Palawan (Puerto Princesa)', suvenir: 'Palawan Handwoven Bag', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Palawan (Puerto Princesa)', suvenir: 'Cashew Nuts', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Philippines (PH)', oras: 'Palawan (Puerto Princesa)', suvenir: 'Palawan Sea Shell Crafts', categorie: 'Art', destinatari: ['family', 'lover'] },

// Vigan
{ tara: 'Philippines (PH)', oras: 'Vigan', suvenir: 'Vigan Heritage Village Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Vigan', suvenir: 'Vigan Empanada', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Philippines (PH)', oras: 'Vigan', suvenir: 'Abel Iloco Weaving', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Iloilo
{ tara: 'Philippines (PH)', oras: 'Iloilo', suvenir: 'Iloilo La Paz Batchoy Mix', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Iloilo', suvenir: 'Hablon Fabric', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Philippines (PH)', oras: 'Iloilo', suvenir: 'Iloilo Tinikling Dance Figurine', categorie: 'Art', destinatari: ['family', 'lover'] },

// Siargao
{ tara: 'Philippines (PH)', oras: 'Siargao', suvenir: 'Siargao Surfboard Keychain', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Siargao', suvenir: 'Dried Mango Rum Balls', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Philippines (PH)', oras: 'Siargao', suvenir: 'Siargao Island Painting', categorie: 'Art', destinatari: ['family', 'lover'] },

// Buenos Aires
{ tara: 'Argentina (AR)', oras: 'Buenos Aires', suvenir: 'Tango Dancer Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'Buenos Aires', suvenir: 'Mate Gourd and Bombilla Set', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Argentina (AR)', oras: 'Buenos Aires', suvenir: 'Leather Wallet', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Cordoba
{ tara: 'Argentina (AR)', oras: 'Cordoba', suvenir: 'Cordoba Jesuit Estancia Tour', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'Cordoba', suvenir: 'Alfajores (Dulce de Leche Cookies)', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Argentina (AR)', oras: 'Cordoba', suvenir: 'Handcrafted Leather Bag', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Mendoza
{ tara: 'Argentina (AR)', oras: 'Mendoza', suvenir: 'Malbec Wine Bottle', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'Mendoza', suvenir: 'Mendoza Wine Tour', categorie: 'Experience', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Argentina (AR)', oras: 'Mendoza', suvenir: 'Handcrafted Mate Gourd', categorie: 'Art', destinatari: ['family', 'lover'] },

// Rosario
{ tara: 'Argentina (AR)', oras: 'Rosario', suvenir: 'Rosario Football Jersey', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'Rosario', suvenir: 'Rosario Ceramic Mate Cup', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Argentina (AR)', oras: 'Rosario', suvenir: 'Rosario Alfajores', categorie: 'Food', destinatari: ['family', 'lover'] },

// Bariloche
{ tara: 'Argentina (AR)', oras: 'Bariloche', suvenir: 'Bariloche Chocolate Box', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'Bariloche', suvenir: 'Mapuche Handcrafted Woolen Poncho', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Argentina (AR)', oras: 'Bariloche', suvenir: 'Bariloche Snow Globe', categorie: 'Art', destinatari: ['family', 'lover'] },

// Ushuaia
{ tara: 'Argentina (AR)', oras: 'Ushuaia', suvenir: 'Ushuaia Penguin Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'Ushuaia', suvenir: 'Tierra del Fuego Postcard Set', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Argentina (AR)', oras: 'Ushuaia', suvenir: 'Ushuaia Snow Globe', categorie: 'Art', destinatari: ['family', 'lover'] },

// Salta
{ tara: 'Argentina (AR)', oras: 'Salta', suvenir: 'Salta Poncho', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'Salta', suvenir: 'Salta Handcrafted Andean Jewelry', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Argentina (AR)', oras: 'Salta', suvenir: 'Empanadas Saltenas', categorie: 'Food', destinatari: ['family', 'lover'] },

// Mar del Plata
{ tara: 'Argentina (AR)', oras: 'Mar del Plata', suvenir: 'Mar del Plata Beach Towel', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'Mar del Plata', suvenir: 'Mar del Plata Sea Shell Necklace', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Argentina (AR)', oras: 'Mar del Plata', suvenir: 'Dulce de Leche Mar del Plata', categorie: 'Food', destinatari: ['family', 'lover'] },

// La Plata
{ tara: 'Argentina (AR)', oras: 'La Plata', suvenir: 'La Plata Botanical Garden Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'La Plata', suvenir: 'La Plata Leather Notebook', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Argentina (AR)', oras: 'La Plata', suvenir: 'La Plata Handcrafted Pottery', categorie: 'Art', destinatari: ['family', 'lover'] },

// San Miguel de Tucuman
{ tara: 'Argentina (AR)', oras: 'San Miguel de Tucuman', suvenir: 'San Miguel de Tucuman Handcrafted Textiles', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'San Miguel de Tucuman', suvenir: 'Tucuman Local Craft Beer', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Argentina (AR)', oras: 'San Miguel de Tucuman', suvenir: 'Tucuman Leather Wallet', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Helsinki
{ tara: 'Finland (FI)', oras: 'Helsinki', suvenir: 'Helsinki Design Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Helsinki', suvenir: 'Finnish Licorice Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Finland (FI)', oras: 'Helsinki', suvenir: 'Marimekko Handbag', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Rovaniemi
{ tara: 'Finland (FI)', oras: 'Rovaniemi', suvenir: 'Rovaniemi Santa Claus Postcard', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Rovaniemi', suvenir: 'Reindeer Antler Jewelry', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Finland (FI)', oras: 'Rovaniemi', suvenir: 'Lapland Berry Jam', categorie: 'Food', destinatari: ['family', 'lover'] },

// Turku
{ tara: 'Finland (FI)', oras: 'Turku', suvenir: 'Turku Castle Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Turku', suvenir: 'Finnish Birch Sauna Whisk', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Finland (FI)', oras: 'Turku', suvenir: 'Turku Archipelago Smoked Salmon', categorie: 'Food', destinatari: ['family', 'lover'] },

// Tampere
{ tara: 'Finland (FI)', oras: 'Tampere', suvenir: 'Tampere Moomin Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Tampere', suvenir: 'Finnish Salmiakki Assortment', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Finland (FI)', oras: 'Tampere', suvenir: 'Tampere Sarkanniemi Amusement Park Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Oulu
{ tara: 'Finland (FI)', oras: 'Oulu', suvenir: 'Oulu Glassware', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Oulu', suvenir: 'Finnish Cloudberry Liqueur', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Finland (FI)', oras: 'Oulu', suvenir: 'Oulu Woolen Socks', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Espoo
{ tara: 'Finland (FI)', oras: 'Espoo', suvenir: 'Espoo Cityscape Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Espoo', suvenir: 'Finnish Blueberry Jam', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Finland (FI)', oras: 'Espoo', suvenir: 'Espoo Handcrafted Ceramic Bowl', categorie: 'Art', destinatari: ['family', 'lover'] },

// Vantaa
{ tara: 'Finland (FI)', oras: 'Vantaa', suvenir: 'Vantaa Glass Bird Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Vantaa', suvenir: 'Finnish Rye Bread', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Finland (FI)', oras: 'Vantaa', suvenir: 'Vantaa Handcrafted Wooden Bowl', categorie: 'Art', destinatari: ['family', 'lover'] },

// Porvoo
{ tara: 'Finland (FI)', oras: 'Porvoo', suvenir: 'Porvoo Old Town Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Porvoo', suvenir: 'Finnish Cinnamon Rolls (Korvapuusti)', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Finland (FI)', oras: 'Porvoo', suvenir: 'Porvoo Handcrafted Soap', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Kuopio
{ tara: 'Finland (FI)', oras: 'Kuopio', suvenir: 'Kuopio Kalakukko (Fish and Meat Pie)', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Kuopio', suvenir: 'Kuopio Wooden Spoon', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Finland (FI)', oras: 'Kuopio', suvenir: 'Kuopio Handwoven Rug', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Lahti
{ tara: 'Finland (FI)', oras: 'Lahti', suvenir: 'Lahti Sibelius Hall Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Lahti', suvenir: 'Finnish Licorice Pipes', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Finland (FI)', oras: 'Lahti', suvenir: 'Lahti Wooden Kuksa Cup', categorie: 'Art', destinatari: ['family', 'lover'] },

// Lima
{ tara: 'Peru (PE)', oras: 'Lima', suvenir: 'Lima Cityscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Lima', suvenir: 'Peruvian Pisco Bottle', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Peru (PE)', oras: 'Lima', suvenir: 'Lima Handcrafted Jewelry', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Cusco
{ tara: 'Peru (PE)', oras: 'Cusco', suvenir: 'Cusco Inca Mask Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Cusco', suvenir: 'Peruvian Alpaca Wool Blanket', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Peru (PE)', oras: 'Cusco', suvenir: 'Cusco Coca Tea', categorie: 'Food', destinatari: ['family', 'lover'] },

// Arequipa
{ tara: 'Peru (PE)', oras: 'Arequipa', suvenir: 'Arequipa Volcano Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Arequipa', suvenir: 'Peruvian Ceramic Vase', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Peru (PE)', oras: 'Arequipa', suvenir: 'Arequipa Rocoto Pepper Sauce', categorie: 'Food', destinatari: ['family', 'lover'] },

// Puno
{ tara: 'Peru (PE)', oras: 'Puno', suvenir: 'Puno Textile Wall Hanging', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Puno', suvenir: 'Peruvian Silver Jewelry', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Peru (PE)', oras: 'Puno', suvenir: 'Puno Totora Reed Handicraft', categorie: 'Art', destinatari: ['family', 'lover'] },

// Trujillo
{ tara: 'Peru (PE)', oras: 'Trujillo', suvenir: 'Trujillo Colonial Architecture Photo Book', categorie: 'Books', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Trujillo', suvenir: 'Peruvian Gold Filigree Earrings', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Peru (PE)', oras: 'Trujillo', suvenir: 'Trujillo Moche Pottery Replica', categorie: 'Art', destinatari: ['family', 'lover'] },

// Iquitos
{ tara: 'Peru (PE)', oras: 'Iquitos', suvenir: 'Iquitos Amazon Rainforest Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Iquitos', suvenir: 'Peruvian Jungle Crafted Necklace', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Peru (PE)', oras: 'Iquitos', suvenir: 'Iquitos Amazon Chocolate', categorie: 'Food', destinatari: ['family', 'lover'] },

// Paracas
{ tara: 'Peru (PE)', oras: 'Paracas', suvenir: 'Paracas National Reserve Photo Book', categorie: 'Books', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Paracas', suvenir: 'Peruvian Pisco Sour Kit', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Peru (PE)', oras: 'Paracas', suvenir: 'Paracas Handcrafted Shell Necklace', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Huaraz
{ tara: 'Peru (PE)', oras: 'Huaraz', suvenir: 'Huaraz Andean Mountain Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Huaraz', suvenir: 'Peruvian Woolen Scarf', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Peru (PE)', oras: 'Huaraz', suvenir: 'Huaraz Quinoa Superfood', categorie: 'Food', destinatari: ['family', 'lover'] },

// Chiclayo
{ tara: 'Peru (PE)', oras: 'Chiclayo', suvenir: 'Chiclayo Moche Pottery Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Chiclayo', suvenir: 'Peruvian Marinera Dance Doll', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Peru (PE)', oras: 'Chiclayo', suvenir: 'Chiclayo Ceviche Seasoning Mix', categorie: 'Food', destinatari: ['family', 'lover'] },

// Ayacucho
{ tara: 'Peru (PE)', oras: 'Ayacucho', suvenir: 'Ayacucho Huamanga Stone Sculpture', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Ayacucho', suvenir: 'Peruvian Andean Textile Tapestry', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Peru (PE)', oras: 'Ayacucho', suvenir: 'Ayacucho Quinua Bread', categorie: 'Food', destinatari: ['family', 'lover'] },

// Dubai
{ tara: 'United Arab Emirates (AE)', oras: 'Dubai', suvenir: 'Burj Khalifa Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Dubai', suvenir: 'Dubai Dates', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Dubai', suvenir: 'Dubai Camel Milk Chocolate', categorie: 'Food', destinatari: ['family', 'lover'] },

// Abu Dhabi
{ tara: 'United Arab Emirates (AE)', oras: 'Abu Dhabi', suvenir: 'Sheikh Zayed Mosque Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Abu Dhabi', suvenir: 'Arabian Coffee Set', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Abu Dhabi', suvenir: 'Abu Dhabi Falcon Souvenir', categorie: 'Art', destinatari: ['family', 'lover'] },

// Sharjah
{ tara: 'United Arab Emirates (AE)', oras: 'Sharjah', suvenir: 'Sharjah Heritage Book', categorie: 'Books', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Sharjah', suvenir: 'Sharjah Traditional Handicrafts', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Sharjah', suvenir: 'Sharjah Date Palm Products', categorie: 'Food', destinatari: ['family', 'lover'] },

// Al Ain
{ tara: 'United Arab Emirates (AE)', oras: 'Al Ain', suvenir: 'Al Ain Camel Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Al Ain', suvenir: 'Al Ain Date Honey', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Al Ain', suvenir: 'Al Ain Sand Art Bottle', categorie: 'Art', destinatari: ['family', 'lover'] },

// Ras Al Khaimah
{ tara: 'United Arab Emirates (AE)', oras: 'Ras Al Khaimah', suvenir: 'Ras Al Khaimah Dhow Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Ras Al Khaimah', suvenir: 'Ras Al Khaimah Saffron', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Ras Al Khaimah', suvenir: 'Ras Al Khaimah Traditional Pottery', categorie: 'Art', destinatari: ['family', 'lover'] },

// Fujairah
{ tara: 'United Arab Emirates (AE)', oras: 'Fujairah', suvenir: 'Fujairah Fort Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Fujairah', suvenir: 'Fujairah Dried Fruits', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Fujairah', suvenir: 'Fujairah Pearl Jewelry', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Ajman
{ tara: 'United Arab Emirates (AE)', oras: 'Ajman', suvenir: 'Ajman Souq Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Ajman', suvenir: 'Ajman Halwa', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Ajman', suvenir: 'Ajman Pearl Diving Art', categorie: 'Art', destinatari: ['family', 'lover'] },

// Umm Al Quwain
{ tara: 'United Arab Emirates (AE)', oras: 'Umm Al Quwain', suvenir: 'Umm Al Quwain Pottery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Umm Al Quwain', suvenir: 'Umm Al Quwain Date Syrup', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Umm Al Quwain', suvenir: 'Umm Al Quwain Traditional Textile', categorie: 'Art', destinatari: ['family', 'lover'] },

// Hatta
{ tara: 'United Arab Emirates (AE)', oras: 'Hatta', suvenir: 'Hatta Dam Landscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Hatta', suvenir: 'Hatta Mountain Honey', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Hatta', suvenir: 'Hatta Desert Sand Bottle', categorie: 'Art', destinatari: ['family', 'lover'] },

// Khor Fakkan
{ tara: 'United Arab Emirates (AE)', oras: 'Khor Fakkan', suvenir: 'Khor Fakkan Coral Reef Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Khor Fakkan', suvenir: 'Khor Fakkan Date Palm Products', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Khor Fakkan', suvenir: 'Khor Fakkan Maritime Art', categorie: 'Art', destinatari: ['family', 'lover'] },

// Marrakech
{ tara: 'Morocco (MA)', oras: 'Marrakech', suvenir: 'Marrakech Medina Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Marrakech', suvenir: 'Moroccan Tea Set', categorie: 'Home', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Morocco (MA)', oras: 'Marrakech', suvenir: 'Marrakech Spices', categorie: 'Food', destinatari: ['family', 'lover'] },

// Casablanca
{ tara: 'Morocco (MA)', oras: 'Casablanca', suvenir: 'Hassan II Mosque Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Casablanca', suvenir: 'Casablanca Argan Oil', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Morocco (MA)', oras: 'Casablanca', suvenir: 'Casablanca Leather Goods', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Fes
{ tara: 'Morocco (MA)', oras: 'Fes', suvenir: 'Fes Ceramic Plate', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Fes', suvenir: 'Fes Pottery', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Morocco (MA)', oras: 'Fes', suvenir: 'Fes Dates', categorie: 'Food', destinatari: ['family', 'lover'] },

// Tangier
{ tara: 'Morocco (MA)', oras: 'Tangier', suvenir: 'Tangier Kasbah Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Tangier', suvenir: 'Tangier Mint Tea Set', categorie: 'Home', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Morocco (MA)', oras: 'Tangier', suvenir: 'Tangier Almond Cookies', categorie: 'Food', destinatari: ['family', 'lover'] },

// Rabat
{ tara: 'Morocco (MA)', oras: 'Rabat', suvenir: 'Rabat Royal Palace Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Rabat', suvenir: 'Rabat Souk Crafts', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Morocco (MA)', oras: 'Rabat', suvenir: 'Rabat Pastries', categorie: 'Food', destinatari: ['family', 'lover'] },

// Agadir
{ tara: 'Morocco (MA)', oras: 'Agadir', suvenir: 'Agadir Beach Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Agadir', suvenir: 'Agadir Argan Oil Soap', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Morocco (MA)', oras: 'Agadir', suvenir: 'Agadir Spiced Nuts', categorie: 'Food', destinatari: ['family', 'lover'] },

// Chefchaouen
{ tara: 'Morocco (MA)', oras: 'Chefchaouen', suvenir: 'Chefchaouen Blue Pottery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Chefchaouen', suvenir: 'Chefchaouen Wool Blanket', categorie: 'Home', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Morocco (MA)', oras: 'Chefchaouen', suvenir: 'Chefchaouen Almond Sweets', categorie: 'Food', destinatari: ['family', 'lover'] },

// Essaouira
{ tara: 'Morocco (MA)', oras: 'Essaouira', suvenir: 'Essaouira Wind Chimes', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Essaouira', suvenir: 'Essaouira Argan Oil Cosmetics', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Morocco (MA)', oras: 'Essaouira', suvenir: 'Essaouira Salted Caramel', categorie: 'Food', destinatari: ['family', 'lover'] },

// Meknes
{ tara: 'Morocco (MA)', oras: 'Meknes', suvenir: 'Meknes Berber Rug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Meknes', suvenir: 'Meknes Olive Oil Soap', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Morocco (MA)', oras: 'Meknes', suvenir: 'Meknes Preserved Lemons', categorie: 'Food', destinatari: ['family', 'lover'] },

// Ouarzazate
{ tara: 'Morocco (MA)', oras: 'Ouarzazate', suvenir: 'Ouarzazate Kasbah Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Ouarzazate', suvenir: 'Ouarzazate Argan Oil Soap', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Morocco (MA)', oras: 'Ouarzazate', suvenir: 'Ouarzazate Spiced Tea Blend', categorie: 'Food', destinatari: ['family', 'lover'] },

// Jerusalem
{ tara: 'Israel (IL)', oras: 'Jerusalem', suvenir: 'Jerusalem Cross Pendant', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Jerusalem', suvenir: 'Dead Sea Salt Scrub', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Israel (IL)', oras: 'Jerusalem', suvenir: 'Jerusalem Ceramic Plate', categorie: 'Art', destinatari: ['family', 'lover'] },

// Tel Aviv
{ tara: 'Israel (IL)', oras: 'Tel Aviv', suvenir: 'Tel Aviv Beach Towel', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Tel Aviv', suvenir: 'Tel Aviv Coffee Blend', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Israel (IL)', oras: 'Tel Aviv', suvenir: 'Tel Aviv Skyline Art Print', categorie: 'Art', destinatari: ['family', 'lover'] },

// Haifa
{ tara: 'Israel (IL)', oras: 'Haifa', suvenir: 'Haifa Olive Oil Soap', categorie: 'Beauty', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Haifa', suvenir: 'Haifa Ceramic Tile', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Israel (IL)', oras: 'Haifa', suvenir: 'Haifa Dried Fruit Assortment', categorie: 'Food', destinatari: ['family', 'lover'] },

// Eilat
{ tara: 'Israel (IL)', oras: 'Eilat', suvenir: 'Eilat Red Sea Coral Jewelry', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Eilat', suvenir: 'Eilat Salt Scrub', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Israel (IL)', oras: 'Eilat', suvenir: 'Eilat Date Honey', categorie: 'Food', destinatari: ['family', 'lover'] },

// Nazareth
{ tara: 'Israel (IL)', oras: 'Nazareth', suvenir: 'Nazareth Handmade Olive Wood Cross', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Nazareth', suvenir: 'Nazareth Holy Water', categorie: 'Religious', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Israel (IL)', oras: 'Nazareth', suvenir: 'Nazareth Spices Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Tiberias
{ tara: 'Israel (IL)', oras: 'Tiberias', suvenir: 'Tiberias Sea of Galilee Photo Book', categorie: 'Books', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Tiberias', suvenir: 'Tiberias Fisherman s Cap', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Israel (IL)', oras: 'Tiberias', suvenir: 'Tiberias Olive Oil', categorie: 'Food', destinatari: ['family', 'lover'] },

// Dead Sea
{ tara: 'Israel (IL)', oras: 'Dead Sea', suvenir: 'Dead Sea Mud Mask', categorie: 'Beauty', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Dead Sea', suvenir: 'Dead Sea Salt Scrub', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Israel (IL)', oras: 'Dead Sea', suvenir: 'Dead Sea Mineral Soap', categorie: 'Beauty', destinatari: ['family', 'lover'] },

// Ashdod
{ tara: 'Israel (IL)', oras: 'Ashdod', suvenir: 'Ashdod Beach Sand Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Ashdod', suvenir: 'Ashdod Pottery', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Israel (IL)', oras: 'Ashdod', suvenir: 'Ashdod Citrus Candies', categorie: 'Food', destinatari: ['family', 'lover'] },

// Acre (Akko)
{ tara: 'Israel (IL)', oras: 'Acre (Akko)', suvenir: 'Acre Fortress Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Acre (Akko)', suvenir: 'Acre Olive Oil Soap', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Israel (IL)', oras: 'Acre (Akko)', suvenir: 'Acre Baklava', categorie: 'Food', destinatari: ['family', 'lover'] },

// Netanya
{ tara: 'Israel (IL)', oras: 'Netanya', suvenir: 'Netanya Beach Hat', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Netanya', suvenir: 'Netanya Wine Bottle', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Israel (IL)', oras: 'Netanya', suvenir: 'Netanya Glass Art', categorie: 'Art', destinatari: ['family', 'lover'] },

// Auckland
{ tara: 'New Zealand (NZ)', oras: 'Auckland', suvenir: 'Auckland Sky Tower Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Auckland', suvenir: 'Maori Carving', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'New Zealand (NZ)', oras: 'Auckland', suvenir: 'Manuka Honey', categorie: 'Food', destinatari: ['family', 'lover'] },

// Wellington
{ tara: 'New Zealand (NZ)', oras: 'Wellington', suvenir: 'Wellington Cable Car Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Wellington', suvenir: 'Lord of the Rings Memorabilia', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'New Zealand (NZ)', oras: 'Wellington', suvenir: 'Whittaker\'s Chocolate', categorie: 'Food', destinatari: ['family', 'lover'] },

// Christchurch
{ tara: 'New Zealand (NZ)', oras: 'Christchurch', suvenir: 'Christchurch Cathedral Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Christchurch', suvenir: 'Pounamu (Greenstone) Pendant', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'New Zealand (NZ)', oras: 'Christchurch', suvenir: 'New Zealand Wine', categorie: 'Food', destinatari: ['family', 'lover'] },

// Queenstown
{ tara: 'New Zealand (NZ)', oras: 'Queenstown', suvenir: 'Queenstown Adventure Photo Book', categorie: 'Books', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Queenstown', suvenir: 'New Zealand Merino Wool Sweater', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'New Zealand (NZ)', oras: 'Queenstown', suvenir: 'Kiwi Fruit Jam', categorie: 'Food', destinatari: ['family', 'lover'] },

// Rotorua
{ tara: 'New Zealand (NZ)', oras: 'Rotorua', suvenir: 'Rotorua Thermal Mud Mask', categorie: 'Beauty', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Rotorua', suvenir: 'Maori Greenstone Necklace', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'New Zealand (NZ)', oras: 'Rotorua', suvenir: 'Rotorua Manuka Honey Soap', categorie: 'Beauty', destinatari: ['family', 'lover'] },

// Dunedin
{ tara: 'New Zealand (NZ)', oras: 'Dunedin', suvenir: 'Dunedin Scottish Tartan Scarf', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Dunedin', suvenir: 'Otago Peninsula Wildlife Calendar', categorie: 'Books', destinatari: ['friend', 'acquaintance'] },
{ tara: 'New Zealand (NZ)', oras: 'Dunedin', suvenir: 'Dunedin Craft Beer', categorie: 'Food', destinatari: ['family', 'lover'] },

// Tauranga
{ tara: 'New Zealand (NZ)', oras: 'Tauranga', suvenir: 'Tauranga Beach Hat', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Tauranga', suvenir: 'Tauranga Avocado Oil', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'New Zealand (NZ)', oras: 'Tauranga', suvenir: 'Tauranga Arts & Crafts Book', categorie: 'Books', destinatari: ['family', 'lover'] },

// Hamilton
{ tara: 'New Zealand (NZ)', oras: 'Hamilton', suvenir: 'Hamilton Gardens Photo Album', categorie: 'Books', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Hamilton', suvenir: 'Waikato River Cruise Ticket', categorie: 'Experience', destinatari: ['friend', 'acquaintance'] },
{ tara: 'New Zealand (NZ)', oras: 'Hamilton', suvenir: 'Hamilton Honey', categorie: 'Food', destinatari: ['family', 'lover'] },

// Napier
{ tara: 'New Zealand (NZ)', oras: 'Napier', suvenir: 'Art Deco Napier Postcards', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Napier', suvenir: 'Hawke s Bay Wine Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'New Zealand (NZ)', oras: 'Napier', suvenir: 'Napier Marine Life Calendar', categorie: 'Books', destinatari: ['family', 'lover'] },

// Nelson
{ tara: 'New Zealand (NZ)', oras: 'Nelson', suvenir: 'Nelson Biking Trail Map', categorie: 'Books', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Nelson', suvenir: 'Nelson Lavender Soap', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'New Zealand (NZ)', oras: 'Nelson', suvenir: 'Nelson Artisan Cheese', categorie: 'Food', destinatari: ['family', 'lover'] },

// Bogotá
{ tara: 'Colombia (CO)', oras: 'Bogotá', suvenir: 'Bogotá Coffee Beans', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Bogotá', suvenir: 'Botero Museum Poster', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Colombia (CO)', oras: 'Bogotá', suvenir: 'Emerald Jewelry', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Medellín
{ tara: 'Colombia (CO)', oras: 'Medellín', suvenir: 'Medellín Orchid Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Medellín', suvenir: 'Paisa Hat', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Colombia (CO)', oras: 'Medellín', suvenir: 'Coffee Tour Experience', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Cartagena
{ tara: 'Colombia (CO)', oras: 'Cartagena', suvenir: 'Cartagena Handcrafted Hammock', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Cartagena', suvenir: 'Colombian Rum', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Colombia (CO)', oras: 'Cartagena', suvenir: 'Colonial Architecture Photo Book', categorie: 'Books', destinatari: ['family', 'lover'] },

// Cali
{ tara: 'Colombia (CO)', oras: 'Cali', suvenir: 'Cali Salsa Music CD', categorie: 'Music', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Cali', suvenir: 'Handcrafted Leather Wallet', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Colombia (CO)', oras: 'Cali', suvenir: 'Cali Carnival Mask', categorie: 'Art', destinatari: ['family', 'lover'] },

// Barranquilla
{ tara: 'Colombia (CO)', oras: 'Barranquilla', suvenir: 'Barranquilla Carnival Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Barranquilla', suvenir: 'Tayrona Beach Sand Bottle', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Colombia (CO)', oras: 'Barranquilla', suvenir: 'Barranquilla Tropical Fruit Basket', categorie: 'Food', destinatari: ['family', 'lover'] },

// Santa Marta
{ tara: 'Colombia (CO)', oras: 'Santa Marta', suvenir: 'Santa Marta Beach Towel', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Santa Marta', suvenir: 'Tayrona National Park Photo Book', categorie: 'Books', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Colombia (CO)', oras: 'Santa Marta', suvenir: 'Colombian Coffee Sampler', categorie: 'Food', destinatari: ['family', 'lover'] },

// San Andrés
{ tara: 'Colombia (CO)', oras: 'San Andrés', suvenir: 'San Andrés Coral Necklace', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'San Andrés', suvenir: 'San Andrés Sea Shell Art', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Colombia (CO)', oras: 'San Andrés', suvenir: 'San Andrés Rum Cake', categorie: 'Food', destinatari: ['family', 'lover'] },

// Bucaramanga
{ tara: 'Colombia (CO)', oras: 'Bucaramanga', suvenir: 'Bucaramanga Coffee Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Bucaramanga', suvenir: 'Bucaramanga Handmade Shawl', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Colombia (CO)', oras: 'Bucaramanga', suvenir: 'Santander Cheese Assortment', categorie: 'Food', destinatari: ['family', 'lover'] },

// Pereira
{ tara: 'Colombia (CO)', oras: 'Pereira', suvenir: 'Pereira Botanical Garden Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Pereira', suvenir: 'Coffee Region Sampler', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Colombia (CO)', oras: 'Pereira', suvenir: 'Pereira Traditional Hat', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Manizales
{ tara: 'Colombia (CO)', oras: 'Manizales', suvenir: 'Manizales Coffee Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Manizales', suvenir: 'Manizales Mountain Landscape Photo', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Colombia (CO)', oras: 'Manizales', suvenir: 'Coffee Aroma Candle', categorie: 'Home', destinatari: ['family', 'lover'] },

// Sofia
{ tara: 'Bulgaria (BG)', oras: 'Sofia', suvenir: 'Sofia Alexander Nevsky Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Sofia', suvenir: 'Bulgarian Rose Oil', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Bulgaria (BG)', oras: 'Sofia', suvenir: 'Sofia Street Map Poster', categorie: 'Art', destinatari: ['family', 'lover'] },

// Plovdiv
{ tara: 'Bulgaria (BG)', oras: 'Plovdiv', suvenir: 'Plovdiv Ancient Theatre Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Plovdiv', suvenir: 'Plovdiv Rose Perfume', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Bulgaria (BG)', oras: 'Plovdiv', suvenir: 'Thracian Wine Selection', categorie: 'Food', destinatari: ['family', 'lover'] },

// Varna
{ tara: 'Bulgaria (BG)', oras: 'Varna', suvenir: 'Varna Sea Garden Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Varna', suvenir: 'Black Sea Pearl Necklace', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Bulgaria (BG)', oras: 'Varna', suvenir: 'Bulgarian Rakia Assortment', categorie: 'Food', destinatari: ['family', 'lover'] },

// Burgas
{ tara: 'Bulgaria (BG)', oras: 'Burgas', suvenir: 'Burgas Beach Sand Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Burgas', suvenir: 'Bulgarian Lavender Soap', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Bulgaria (BG)', oras: 'Burgas', suvenir: 'Burgas Fishermen s Hat', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Ruse
{ tara: 'Bulgaria (BG)', oras: 'Ruse', suvenir: 'Ruse Danube River Cruise Ticket', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Ruse', suvenir: 'Ruse Antique Architecture Print', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Bulgaria (BG)', oras: 'Ruse', suvenir: 'Bulgarian Wine Selection', categorie: 'Food', destinatari: ['family', 'lover'] },

// Stara Zagora
{ tara: 'Bulgaria (BG)', oras: 'Stara Zagora', suvenir: 'Stara Zagora Roman Mosaics Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Stara Zagora', suvenir: 'Thracian Wine Flask', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Bulgaria (BG)', oras: 'Stara Zagora', suvenir: 'Bulgarian Rose Beauty Set', categorie: 'Beauty', destinatari: ['family', 'lover'] },

// Pleven
{ tara: 'Bulgaria (BG)', oras: 'Pleven', suvenir: 'Pleven Military Museum Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Pleven', suvenir: 'Bulgarian Wine Assortment', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Bulgaria (BG)', oras: 'Pleven', suvenir: 'Pleven Rose Garden Seeds', categorie: 'Home', destinatari: ['family', 'lover'] },

// Veliko Tarnovo
{ tara: 'Bulgaria (BG)', oras: 'Veliko Tarnovo', suvenir: 'Veliko Tarnovo Tsarevets Fortress Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Veliko Tarnovo', suvenir: 'Bulgarian Traditional Embroidery', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Bulgaria (BG)', oras: 'Veliko Tarnovo', suvenir: 'Veliko Tarnovo Craft Beer Set', categorie: 'Food', destinatari: ['family', 'lover'] },

// Blagoevgrad
{ tara: 'Bulgaria (BG)', oras: 'Blagoevgrad', suvenir: 'Blagoevgrad Pirin Mountain Hiking Map', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Blagoevgrad', suvenir: 'Bulgarian Yogurt Culture Kit', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Bulgaria (BG)', oras: 'Blagoevgrad', suvenir: 'Rhodope Mountain Honey', categorie: 'Food', destinatari: ['family', 'lover'] },

// Bansko
{ tara: 'Bulgaria (BG)', oras: 'Bansko', suvenir: 'Bansko Ski Resort Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Bansko', suvenir: 'Bulgarian Herbal Tea Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Bulgaria (BG)', oras: 'Bansko', suvenir: 'Bansko Snow Globe', categorie: 'Art', destinatari: ['family', 'lover'] },

// Riyadh
{ tara: 'Saudi Arabia (SA)', oras: 'Riyadh', suvenir: 'Riyadh Skyline Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Riyadh', suvenir: 'Traditional Saudi Arabian Dates', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Riyadh', suvenir: 'Camel Leather Wallet', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Jeddah
{ tara: 'Saudi Arabia (SA)', oras: 'Jeddah', suvenir: 'Jeddah Old Town Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Jeddah', suvenir: 'Arabian Coffee Blend', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Jeddah', suvenir: 'Gold-Plated Arabic Calligraphy Necklace', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Mecca
{ tara: 'Saudi Arabia (SA)', oras: 'Mecca', suvenir: 'Mecca Prayer Mat', categorie: 'Religious', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Mecca', suvenir: 'Dates from Mecca Region', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Mecca', suvenir: 'Mecca Tower Souvenir Keychain', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Medina
{ tara: 'Saudi Arabia (SA)', oras: 'Medina', suvenir: 'Medina Mosque Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Medina', suvenir: 'Medina Ajwa Dates', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Medina', suvenir: 'Medina Sandalwood Perfume', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Dammam
{ tara: 'Saudi Arabia (SA)', oras: 'Dammam', suvenir: 'Dammam Oil Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Dammam', suvenir: 'Dammam Spices Mix', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Dammam', suvenir: 'Pearl Diving Handcrafted Necklace', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Al Khobar
{ tara: 'Saudi Arabia (SA)', oras: 'Al Khobar', suvenir: 'Al Khobar Cityscape Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Al Khobar', suvenir: 'Eastern Province Dates', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Al Khobar', suvenir: 'Handcrafted Pearl Bracelet', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Abha
{ tara: 'Saudi Arabia (SA)', oras: 'Abha', suvenir: 'Abha Mountain Landscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Abha', suvenir: 'Abha Mountain Honey', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Abha', suvenir: 'Traditional Abha Shawl', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Taif
{ tara: 'Saudi Arabia (SA)', oras: 'Taif', suvenir: 'Taif Rose Oil', categorie: 'Beauty', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Taif', suvenir: 'Taif Dates with Almonds', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Taif', suvenir: 'Handcrafted Taif Ceramic Vase', categorie: 'Art', destinatari: ['family', 'lover'] },

// Jubail
{ tara: 'Saudi Arabia (SA)', oras: 'Jubail', suvenir: 'Jubail Industrial City Photo Frame', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Jubail', suvenir: 'Jubail Dates Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Jubail', suvenir: 'Jubail Oil Refinery Model', categorie: 'Science', destinatari: ['family', 'lover'] },

// Yanbu
{ tara: 'Saudi Arabia (SA)', oras: 'Yanbu', suvenir: 'Yanbu Red Sea Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Yanbu', suvenir: 'Yanbu Dried Dates', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Yanbu', suvenir: 'Handcrafted Yanbu Pearl Necklace', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Budapest
{ tara: 'Hungary (HU)', oras: 'Budapest', suvenir: 'Budapest Chain Bridge Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Budapest', suvenir: 'Hungarian Paprika Set', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Hungary (HU)', oras: 'Budapest', suvenir: 'Budapest Danube River Cruise Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Debrecen
{ tara: 'Hungary (HU)', oras: 'Debrecen', suvenir: 'Debrecen Reformed Great Church Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Debrecen', suvenir: 'Hungarian Tokaji Wine', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Hungary (HU)', oras: 'Debrecen', suvenir: 'Debrecen Hortobágy National Park Painting', categorie: 'Art', destinatari: ['family', 'lover'] },

// Szeged
{ tara: 'Hungary (HU)', oras: 'Szeged', suvenir: 'Szeged Votive Church Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Szeged', suvenir: 'Hungarian Paprika String', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Hungary (HU)', oras: 'Szeged', suvenir: 'Szeged Open-Air Festival Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Miskolc
{ tara: 'Hungary (HU)', oras: 'Miskolc', suvenir: 'Miskolc Avas Lookout Tower Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Miskolc', suvenir: 'Hungarian Tokaji Aszú Wine', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Hungary (HU)', oras: 'Miskolc', suvenir: 'Miskolc National Theatre Painting', categorie: 'Art', destinatari: ['family', 'lover'] },

// Pécs
{ tara: 'Hungary (HU)', oras: 'Pécs', suvenir: 'Pécs Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Pécs', suvenir: 'Hungarian Folk Art Embroidery', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Hungary (HU)', oras: 'Pécs', suvenir: 'Pécs Zsolnay Porcelain', categorie: 'Art', destinatari: ['family', 'lover'] },

// Győr
{ tara: 'Hungary (HU)', oras: 'Győr', suvenir: 'Győr Bishop s Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Győr', suvenir: 'Hungarian Salami Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Hungary (HU)', oras: 'Győr', suvenir: 'Győr Rába Quelle Thermal Bath Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Nyíregyháza
{ tara: 'Hungary (HU)', oras: 'Nyíregyháza', suvenir: 'Nyíregyháza Zoo Souvenir', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Nyíregyháza', suvenir: 'Hungarian Tokaji Essencia Wine', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Hungary (HU)', oras: 'Nyíregyháza', suvenir: 'Nyíregyháza Aquarius Water Park Pass', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Kecskemét
{ tara: 'Hungary (HU)', oras: 'Kecskemét', suvenir: 'Kecskemét Mercedes-Benz Factory Tour Pass', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Kecskemét', suvenir: 'Hungarian Apricot Jam', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Hungary (HU)', oras: 'Kecskemét', suvenir: 'Kecskemét Folk Art Pottery', categorie: 'Art', destinatari: ['family', 'lover'] },

// Székesfehérvár
{ tara: 'Hungary (HU)', oras: 'Székesfehérvár', suvenir: 'Székesfehérvár Royal Palace Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Székesfehérvár', suvenir: 'Hungarian Pick Salami', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Hungary (HU)', oras: 'Székesfehérvár', suvenir: 'Székesfehérvár Bory Castle Ticket', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Eger
{ tara: 'Hungary (HU)', oras: 'Eger', suvenir: 'Eger Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Eger', suvenir: 'Hungarian Bull s Blood Wine', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Hungary (HU)', oras: 'Eger', suvenir: 'Eger Thermal Bath Pass', categorie: 'Experience', destinatari: ['family', 'lover'] },

// Tunis
{ tara: 'Tunisia (TN)', oras: 'Tunis', suvenir: 'Tunisian Ceramic Plate', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Tunis', suvenir: 'Traditional Tunisian Carpet', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Tunisia (TN)', oras: 'Tunis', suvenir: 'Dates from Medjool Oasis', categorie: 'Food', destinatari: ['family', 'lover'] },

// Sousse
{ tara: 'Tunisia (TN)', oras: 'Sousse', suvenir: 'Sousse Beach Towel', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Sousse', suvenir: 'Spices and Herbs Selection', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Tunisia (TN)', oras: 'Sousse', suvenir: 'Sousse Medina Lantern', categorie: 'Art', destinatari: ['family', 'lover'] },

// Hammamet
{ tara: 'Tunisia (TN)', oras: 'Hammamet', suvenir: 'Hammamet Ceramic Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Hammamet', suvenir: 'Olive Oil Soap Set', categorie: 'Beauty', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Tunisia (TN)', oras: 'Hammamet', suvenir: 'Hammamet Beach Hat', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Monastir
{ tara: 'Tunisia (TN)', oras: 'Monastir', suvenir: 'Monastir Embroidered Scarf', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Monastir', suvenir: 'Traditional Pottery from Monastir', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Tunisia (TN)', oras: 'Monastir', suvenir: 'Monastir Olive Wood Kitchen Utensils', categorie: 'Household', destinatari: ['family', 'lover'] },

// Djerba
{ tara: 'Tunisia (TN)', oras: 'Djerba', suvenir: 'Djerba Ceramic Wall Tile', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Djerba', suvenir: 'Saffron Threads from Djerba', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Tunisia (TN)', oras: 'Djerba', suvenir: 'Djerba Handwoven Basket', categorie: 'Art', destinatari: ['family', 'lover'] },

// Carthage
{ tara: 'Tunisia (TN)', oras: 'Carthage', suvenir: 'Carthage Ancient Coin Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Carthage', suvenir: 'Carthage Punic Jug', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Tunisia (TN)', oras: 'Carthage', suvenir: 'Carthage History Book', categorie: 'Books', destinatari: ['family', 'lover'] },

// Tozeur
{ tara: 'Tunisia (TN)', oras: 'Tozeur', suvenir: 'Tozeur Desert Sand Art Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Tozeur', suvenir: 'Tozeur Dates and Nuts Mix', categorie: 'Food', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Tunisia (TN)', oras: 'Tozeur', suvenir: 'Tozeur Camel Leather Bag', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Mahdia
{ tara: 'Tunisia (TN)', oras: 'Mahdia', suvenir: 'Mahdia Pottery Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Mahdia', suvenir: 'Mahdia Silver Filigree Jewelry', categorie: 'Fashion', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Tunisia (TN)', oras: 'Mahdia', suvenir: 'Mahdia Beach Towel', categorie: 'Fashion', destinatari: ['family', 'lover'] },

// Bizerte
{ tara: 'Tunisia (TN)', oras: 'Bizerte', suvenir: 'Bizerte Seashell Collection', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Bizerte', suvenir: 'Bizerte Ceramic Plate', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Tunisia (TN)', oras: 'Bizerte', suvenir: 'Bizerte Olive Oil Soap Set', categorie: 'Beauty', destinatari: ['family', 'lover'] },

// Douz
{ tara: 'Tunisia (TN)', oras: 'Douz', suvenir: 'Douz Desert Sand Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Douz', suvenir: 'Traditional Douz Bedouin Rug', categorie: 'Art', destinatari: ['friend', 'acquaintance'] },
{ tara: 'Tunisia (TN)', oras: 'Douz', suvenir: 'Douz Camel Leather Wallet', categorie: 'Fashion', destinatari: ['family', 'lover'] }


    ];

    // Add documents to the collection
    for (const suvenir of testSuveniruri) {
      await addDoc(suveniruriCollection, suvenir);
    }

    console.log('Test data added successfully.');
  } catch (error) {
    console.error("Error adding test data: ", error);
    throw error;
  }
}

// Call the function to add test data
addTestData();
