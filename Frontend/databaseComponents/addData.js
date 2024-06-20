// Import Firestore instance
const { db } = require('../firebaseInit');
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

//
// Athens
{ tara: 'Greece (GR)', oras: 'Athens', suvenir: 'Acropolis Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Athens', suvenir: 'Olive Oil Soap Set', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Greece (GR)', oras: 'Athens', suvenir: 'Greek Mythology Book', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },
//
//
//
//
//
//
// Santorini
{ tara: 'Greece (GR)', oras: 'Santorini', suvenir: 'Santorini Sunset Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Santorini', suvenir: 'Volcano Ash Jewelry', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Greece (GR)', oras: 'Santorini', suvenir: 'Assorted Olives Jar', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Mykonos
{ tara: 'Greece (GR)', oras: 'Mykonos', suvenir: 'Mykonos Windmill Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Mykonos', suvenir: 'Cycladic Figurine', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Greece (GR)', oras: 'Mykonos', suvenir: 'Greek Wine Assortment', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Thessaloniki
{ tara: 'Greece (GR)', oras: 'Thessaloniki', suvenir: 'White Tower Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Thessaloniki', suvenir: 'Byzantine Icon Print', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Greece (GR)', oras: 'Thessaloniki', suvenir: 'Thessaloniki Bougatsa', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Crete (Heraklion)
{ tara: 'Greece (GR)', oras: 'Crete (Heraklion)', suvenir: 'Knossos Palace Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Crete (Heraklion)', suvenir: 'Cretan Olive Oil', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Greece (GR)', oras: 'Crete (Heraklion)', suvenir: 'Minoan Pottery Reproduction', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Rhodes
{ tara: 'Greece (GR)', oras: 'Rhodes', suvenir: 'Rhodes Colossus Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Rhodes', suvenir: 'Rhodes Honey Soap', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Greece (GR)', oras: 'Rhodes', suvenir: 'Rhodes Wine Selection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Corfu
{ tara: 'Greece (GR)', oras: 'Corfu', suvenir: 'Corfu Venetian Fortress Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Corfu', suvenir: 'Kumquat Liqueur', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Greece (GR)', oras: 'Corfu', suvenir: 'Corfu Embroidery Kit', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Nafplio
{ tara: 'Greece (GR)', oras: 'Nafplio', suvenir: 'Bourtzi Fortress Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Nafplio', suvenir: 'Nafplio Figurine', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Greece (GR)', oras: 'Nafplio', suvenir: 'Olive Wood Kitchen Utensils', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Meteora (Kalambaka)
{ tara: 'Greece (GR)', oras: 'Meteora (Kalambaka)', suvenir: 'Meteora Monastery Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Meteora (Kalambaka)', suvenir: 'Meteora Landscape Painting', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Greece (GR)', oras: 'Meteora (Kalambaka)', suvenir: 'Greek Mountain Tea Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Delphi
{ tara: 'Greece (GR)', oras: 'Delphi', suvenir: 'Delphi Ruins Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Greece (GR)', oras: 'Delphi', suvenir: 'Olive Wood Salad Servers', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Greece (GR)', oras: 'Delphi', suvenir: 'Oracle of Delphi Book', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Lisbon
{ tara: 'Portugal (PT)', oras: 'Lisbon', suvenir: 'Lisbon Tile Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Lisbon', suvenir: 'Portuguese Wine Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Portugal (PT)', oras: 'Lisbon', suvenir: 'Cork Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Porto
{ tara: 'Portugal (PT)', oras: 'Porto', suvenir: 'Porto Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Porto', suvenir: 'Port Wine Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Portugal (PT)', oras: 'Porto', suvenir: 'Traditional Portuguese Shawl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Faro
{ tara: 'Portugal (PT)', oras: 'Faro', suvenir: 'Faro Lighthouse Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Faro', suvenir: 'Algarve Beach Sand Globe', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Portugal (PT)', oras: 'Faro', suvenir: 'Ceramic Sardine Plate', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Funchal (Madeira)
{ tara: 'Portugal (PT)', oras: 'Funchal (Madeira)', suvenir: 'Madeira Embroidery Kit', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Funchal (Madeira)', suvenir: 'Madeira Wine Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Portugal (PT)', oras: 'Funchal (Madeira)', suvenir: 'Funchal Traditional Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Sintra
{ tara: 'Portugal (PT)', oras: 'Sintra', suvenir: 'Pena Palace Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Sintra', suvenir: 'Sintra Tile Coaster Set', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Portugal (PT)', oras: 'Sintra', suvenir: 'Sintra Castle Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Coimbra
{ tara: 'Portugal (PT)', oras: 'Coimbra', suvenir: 'Coimbra University Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Coimbra', suvenir: 'Coimbra Ceramic Tile', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Portugal (PT)', oras: 'Coimbra', suvenir: 'Portuguese Guitar Miniature', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Aveiro
{ tara: 'Portugal (PT)', oras: 'Aveiro', suvenir: 'Aveiro Canal Boat Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Aveiro', suvenir: 'Salt Flower Box', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Portugal (PT)', oras: 'Aveiro', suvenir: 'Traditional Ceramic Rooster', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Braga
{ tara: 'Portugal (PT)', oras: 'Braga', suvenir: 'Braga Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Braga', suvenir: 'Braga Pottery', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Portugal (PT)', oras: 'Braga', suvenir: 'Braga Embroidered Handkerchief', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Cascais
{ tara: 'Portugal (PT)', oras: 'Cascais', suvenir: 'Cascais Beach Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Cascais', suvenir: 'Cascais Wine Cork Keychain', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Portugal (PT)', oras: 'Cascais', suvenir: 'Cascais Seashell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Evora
{ tara: 'Portugal (PT)', oras: 'Evora', suvenir: 'Evora Roman Temple Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Portugal (PT)', oras: 'Evora', suvenir: 'Alentejo Olive Oil', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Portugal (PT)', oras: 'Evora', suvenir: 'Cork Handbag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Vienna
{ tara: 'Austria (AT)', oras: 'Vienna', suvenir: 'Vienna Opera House Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Vienna', suvenir: 'Sachertorte Chocolate Box', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Austria (AT)', oras: 'Vienna', suvenir: 'Viennese Porcelain Figurine', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Salzburg
{ tara: 'Austria (AT)', oras: 'Salzburg', suvenir: 'Salzburg Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Salzburg', suvenir: 'Mozart Chocolate Pralines', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Austria (AT)', oras: 'Salzburg', suvenir: 'Edelweiss Music Box', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Innsbruck
{ tara: 'Austria (AT)', oras: 'Innsbruck', suvenir: 'Innsbruck Golden Roof Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Innsbruck', suvenir: 'Tyrolean Alps Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Austria (AT)', oras: 'Innsbruck', suvenir: 'Swarovski Crystal Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Graz
{ tara: 'Austria (AT)', oras: 'Graz', suvenir: 'Graz Clock Tower Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Graz', suvenir: 'Styrian Pumpkin Seed Oil', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Austria (AT)', oras: 'Graz', suvenir: 'Styrian Tracht Doll', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Hallstatt
{ tara: 'Austria (AT)', oras: 'Hallstatt', suvenir: 'Hallstatt Alpine House Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Hallstatt', suvenir: 'Hallstatt Salt Crystals', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Austria (AT)', oras: 'Hallstatt', suvenir: 'Traditional Austrian Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Linz
{ tara: 'Austria (AT)', oras: 'Linz', suvenir: 'Linz Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Linz', suvenir: 'Linz Linzer Torte', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Austria (AT)', oras: 'Linz', suvenir: 'Linz Chocolate Box', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Klagenfurt
{ tara: 'Austria (AT)', oras: 'Klagenfurt', suvenir: 'Klagenfurt Dragon Fountain Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Klagenfurt', suvenir: 'Carinthian Herbal Liqueur', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Austria (AT)', oras: 'Klagenfurt', suvenir: 'Carinthian Doll', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Bregenz
{ tara: 'Austria (AT)', oras: 'Bregenz', suvenir: 'Bregenz Seebühne Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Bregenz', suvenir: 'Lake Constance Wine Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Austria (AT)', oras: 'Bregenz', suvenir: 'Bregenz Opera Glasses', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Zell am See
{ tara: 'Austria (AT)', oras: 'Zell am See', suvenir: 'Zell am See Lake Crystal', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Zell am See', suvenir: 'Austrian Alpine Wool Blanket', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Austria (AT)', oras: 'Zell am See', suvenir: 'Zell am See Ski Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Villach
{ tara: 'Austria (AT)', oras: 'Villach', suvenir: 'Villach Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Austria (AT)', oras: 'Villach', suvenir: 'Carinthian Mineral Water', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Austria (AT)', oras: 'Villach', suvenir: 'Traditional Austrian Dirndl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Sydney
{ tara: 'Australia (AU)', oras: 'Sydney', suvenir: 'Sydney Opera House Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Sydney', suvenir: 'Australian Aboriginal Art Print', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Australia (AU)', oras: 'Sydney', suvenir: 'Sydney Harbour Bridge Climb Certificate', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Melbourne
{ tara: 'Australia (AU)', oras: 'Melbourne', suvenir: 'Melbourne Tram Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Melbourne', suvenir: 'Australian Made Chocolate Box', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Australia (AU)', oras: 'Melbourne', suvenir: 'Melbourne Laneway Art Print', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Brisbane
{ tara: 'Australia (AU)', oras: 'Brisbane', suvenir: 'Brisbane River Cruise Ticket', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Brisbane', suvenir: 'Queensland Made Macadamia Nuts', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Australia (AU)', oras: 'Brisbane', suvenir: 'Brisbane Koala Plush Toy', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Perth
{ tara: 'Australia (AU)', oras: 'Perth', suvenir: 'Perth Mint Gold Bullion Bar', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Perth', suvenir: 'Swan River Cruise Ticket', categorie: 'Experience', destinatari: ['lover', 'co-worker'] },
{ tara: 'Australia (AU)', oras: 'Perth', suvenir: 'Australian Made Wine Selection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Adelaide
{ tara: 'Australia (AU)', oras: 'Adelaide', suvenir: 'Adelaide Oval Tour Ticket', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Adelaide', suvenir: 'South Australian Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Australia (AU)', oras: 'Adelaide', suvenir: 'Adelaide Hills Wine Selection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Gold Coast
{ tara: 'Australia (AU)', oras: 'Gold Coast', suvenir: 'Gold Coast Theme Park Pass', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Gold Coast', suvenir: 'Surfers Paradise Beach Towel', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Australia (AU)', oras: 'Gold Coast', suvenir: 'Australian Made Surfboard Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Cairns
{ tara: 'Australia (AU)', oras: 'Cairns', suvenir: 'Great Barrier Reef Snorkel Tour Ticket', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Cairns', suvenir: 'Queensland Tropical Fruit Basket', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Australia (AU)', oras: 'Cairns', suvenir: 'Cairns Coral Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Canberra
{ tara: 'Australia (AU)', oras: 'Canberra', suvenir: 'Parliament House Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Canberra', suvenir: 'Australian Made Olive Oil Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Australia (AU)', oras: 'Canberra', suvenir: 'National Gallery Art Print', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Hobart
{ tara: 'Australia (AU)', oras: 'Hobart', suvenir: 'Tasmanian Devil Plush Toy', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Hobart', suvenir: 'Tasmanian Whisky Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Australia (AU)', oras: 'Hobart', suvenir: 'Tasmanian Craft Beer Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Darwin
{ tara: 'Australia (AU)', oras: 'Darwin', suvenir: 'Crocodile Leather Wallet', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Australia (AU)', oras: 'Darwin', suvenir: 'Northern Territory Aboriginal Art Print', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Australia (AU)', oras: 'Darwin', suvenir: 'Didgeridoo', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Amsterdam
{ tara: 'Netherlands (NL)', oras: 'Amsterdam', suvenir: 'Amsterdam Canal Houses Miniature Set', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Amsterdam', suvenir: 'Delft Blue Pottery', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Netherlands (NL)', oras: 'Amsterdam', suvenir: 'Amsterdam Bike Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Rotterdam
{ tara: 'Netherlands (NL)', oras: 'Rotterdam', suvenir: 'Rotterdam Skyline Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Rotterdam', suvenir: 'Dutch Cheese Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Netherlands (NL)', oras: 'Rotterdam', suvenir: 'Rotterdam Harbour Model', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// The Hague
{ tara: 'Netherlands (NL)', oras: 'The Hague', suvenir: 'Peace Palace Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'The Hague', suvenir: 'Dutch Royal Family Tea Set', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Netherlands (NL)', oras: 'The Hague', suvenir: 'The Hague Cityscape Painting', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Utrecht
{ tara: 'Netherlands (NL)', oras: 'Utrecht', suvenir: 'Utrecht Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Utrecht', suvenir: 'Dutch Bicycles Puzzle', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Netherlands (NL)', oras: 'Utrecht', suvenir: 'Utrecht Honey Jar', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Maastricht
{ tara: 'Netherlands (NL)', oras: 'Maastricht', suvenir: 'Maastricht Vase', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Maastricht', suvenir: 'Limburgian Pie Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Netherlands (NL)', oras: 'Maastricht', suvenir: 'Maastricht Caves Tour Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Eindhoven
{ tara: 'Netherlands (NL)', oras: 'Eindhoven', suvenir: 'Eindhoven Philips Museum Ticket', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Eindhoven', suvenir: 'Eindhoven Technological Gadgets', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Netherlands (NL)', oras: 'Eindhoven', suvenir: 'Eindhoven Light Bulb Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Haarlem
{ tara: 'Netherlands (NL)', oras: 'Haarlem', suvenir: 'Haarlem Windmill Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Haarlem', suvenir: 'Haarlem Flower Bulb Set', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Netherlands (NL)', oras: 'Haarlem', suvenir: 'Haarlem Dutch Masters Art Print', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Groningen
{ tara: 'Netherlands (NL)', oras: 'Groningen', suvenir: 'Groningen University Hoodie', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Groningen', suvenir: 'Groningen Bicycle Bell', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Netherlands (NL)', oras: 'Groningen', suvenir: 'Groningen Cheese Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Leiden
{ tara: 'Netherlands (NL)', oras: 'Leiden', suvenir: 'Leiden University Scarf', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Leiden', suvenir: 'Leiden Botanical Garden Poster', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Netherlands (NL)', oras: 'Leiden', suvenir: 'Leiden Museum Pass', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Delft
{ tara: 'Netherlands (NL)', oras: 'Delft', suvenir: 'Delft Blue Tile Set', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Netherlands (NL)', oras: 'Delft', suvenir: 'Delft Pottery Tea Set', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Netherlands (NL)', oras: 'Delft', suvenir: 'Delft Windmill Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Zurich
{ tara: 'Switzerland (CH)', oras: 'Zurich', suvenir: 'Zurich Clock Tower Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Zurich', suvenir: 'Swiss Chocolate Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Switzerland (CH)', oras: 'Zurich', suvenir: 'Zurich Lake Cruise Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Geneva
{ tara: 'Switzerland (CH)', oras: 'Geneva', suvenir: 'Geneva Jet d\'Eau Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Geneva', suvenir: 'Swiss Watch Keychain', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Switzerland (CH)', oras: 'Geneva', suvenir: 'Geneva Gourmet Chocolate Box', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Lucerne
{ tara: 'Switzerland (CH)', oras: 'Lucerne', suvenir: 'Lucerne Chapel Bridge Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Lucerne', suvenir: 'Swiss Army Knife', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Switzerland (CH)', oras: 'Lucerne', suvenir: 'Lucerne Alpine Cheese Selection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Interlaken
{ tara: 'Switzerland (CH)', oras: 'Interlaken', suvenir: 'Interlaken Jungfrau Mountain Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Interlaken', suvenir: 'Swiss Cuckoo Clock', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Switzerland (CH)', oras: 'Interlaken', suvenir: 'Interlaken Swiss Fondue Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Basel
{ tara: 'Switzerland (CH)', oras: 'Basel', suvenir: 'Basel Minster Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Basel', suvenir: 'Basel Swiss Chocolate Truffles', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Switzerland (CH)', oras: 'Basel', suvenir: 'Basel Art Museum Pass', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Lausanne
{ tara: 'Switzerland (CH)', oras: 'Lausanne', suvenir: 'Lausanne Olympic Museum Ticket', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Lausanne', suvenir: 'Swiss Wine Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Switzerland (CH)', oras: 'Lausanne', suvenir: 'Lausanne Lakeside Painting', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Zermatt
{ tara: 'Switzerland (CH)', oras: 'Zermatt', suvenir: 'Matterhorn Mountain Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Zermatt', suvenir: 'Swiss Wool Sweater', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Switzerland (CH)', oras: 'Zermatt', suvenir: 'Zermatt Swiss Chocolate Fondue Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Bern
{ tara: 'Switzerland (CH)', oras: 'Bern', suvenir: 'Bern Clock Tower Keychain', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Bern', suvenir: 'Swiss Bernese Alps Calendar', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Switzerland (CH)', oras: 'Bern', suvenir: 'Bernese Chocolate Truffle Box', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Lugano
{ tara: 'Switzerland (CH)', oras: 'Lugano', suvenir: 'Lugano Lakeside Landscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'Lugano', suvenir: 'Swiss Italian Cuisine Cookbook', categorie: 'Books', destinatari: ['lover', 'co-worker'] },
{ tara: 'Switzerland (CH)', oras: 'Lugano', suvenir: 'Lugano Swiss Watch', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// St. Moritz
{ tara: 'Switzerland (CH)', oras: 'St. Moritz', suvenir: 'St. Moritz Ski Resort Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Switzerland (CH)', oras: 'St. Moritz', suvenir: 'Swiss Alpine Cheese Fondue Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Switzerland (CH)', oras: 'St. Moritz', suvenir: 'St. Moritz Snow Globe', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Singapore (city-state)
{ tara: 'Singapore (SG)', oras: 'Singapore (city-state)', suvenir: 'Merlion Statue Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Singapore (SG)', oras: 'Singapore (city-state)', suvenir: 'Orchid Perfume', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Singapore (SG)', oras: 'Singapore (city-state)', suvenir: 'Orchid Perfume', categorie: 'Beauty', destinatari: ['acquaintance', 'relative'] },

// Seoul
{ tara: 'South Korea (KR)', oras: 'Seoul', suvenir: 'Seoul Skyline Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Seoul', suvenir: 'Korean Ginseng Tea Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'South Korea (KR)', oras: 'Seoul', suvenir: 'K-Pop Dance Class Voucher', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Busan
{ tara: 'South Korea (KR)', oras: 'Busan', suvenir: 'Busan Beach Scene Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Busan', suvenir: 'Korean Seafood Gift Basket', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'South Korea (KR)', oras: 'Busan', suvenir: 'Busan Hanbok Rental Voucher', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Jeju City
{ tara: 'South Korea (KR)', oras: 'Jeju City', suvenir: 'Jeju Island Landscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Jeju City', suvenir: 'Jeju Tangerine Gift Box', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'South Korea (KR)', oras: 'Jeju City', suvenir: 'Jeju Glass Castle Admission Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Incheon
{ tara: 'South Korea (KR)', oras: 'Incheon', suvenir: 'Incheon Port Scene Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Incheon', suvenir: 'Incheon Rice Cake Sampler', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'South Korea (KR)', oras: 'Incheon', suvenir: 'Incheon Traditional Hanji Crafts', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Gyeongju
{ tara: 'South Korea (KR)', oras: 'Gyeongju', suvenir: 'Gyeongju Silla Kingdom Artifact Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Gyeongju', suvenir: 'Gyeongju Rice Wine Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'South Korea (KR)', oras: 'Gyeongju', suvenir: 'Gyeongju Bulguksa Temple Tour Pass', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Daegu
{ tara: 'South Korea (KR)', oras: 'Daegu', suvenir: 'Daegu Modern Art Museum Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Daegu', suvenir: 'Daegu Spicy Chicken Gift Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'South Korea (KR)', oras: 'Daegu', suvenir: 'Daegu Kim Gwangseok Street Performance Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Daejeon
{ tara: 'South Korea (KR)', oras: 'Daejeon', suvenir: 'Daejeon Expo Park Memorabilia', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Daejeon', suvenir: 'Daejeon Bibimbap Cooking Class Voucher', categorie: 'Experience', destinatari: ['lover', 'co-worker'] },
{ tara: 'South Korea (KR)', oras: 'Daejeon', suvenir: 'Daejeon Ginseng Chicken Soup Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Suwon
{ tara: 'South Korea (KR)', oras: 'Suwon', suvenir: 'Suwon Hwaseong Fortress Model Kit', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Suwon', suvenir: 'Suwon Traditional Hanbok Rental Voucher', categorie: 'Experience', destinatari: ['lover', 'co-worker'] },
{ tara: 'South Korea (KR)', oras: 'Suwon', suvenir: 'Suwon Makgeolli Brewing Kit', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Chuncheon
{ tara: 'South Korea (KR)', oras: 'Chuncheon', suvenir: 'Chuncheon Dakgalbi Cooking Set', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Chuncheon', suvenir: 'Chuncheon Nami Island Ferry Ticket', categorie: 'Experience', destinatari: ['lover', 'co-worker'] },
{ tara: 'South Korea (KR)', oras: 'Chuncheon', suvenir: 'Chuncheon Ceramic Tea Set', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Sokcho
{ tara: 'South Korea (KR)', oras: 'Sokcho', suvenir: 'Sokcho Seoraksan National Park Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'South Korea (KR)', oras: 'Sokcho', suvenir: 'Sokcho Abai Village Trout Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'South Korea (KR)', oras: 'Sokcho', suvenir: 'Sokcho Beach Shell Collection', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Hong Kong
{ tara: 'Hong Kong (HK)', oras: 'Hong Kong (city-state)', suvenir: 'Hong Kong Skyline Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hong Kong (HK)', oras: 'Hong Kong (city-state)', suvenir: 'Dim Sum Cooking Class Voucher', categorie: 'Experience', destinatari: ['lover', 'co-worker'] },
{ tara: 'Hong Kong (HK)', oras: 'Hong Kong (city-state)', suvenir: 'Hong Kong Egg Waffles Mix', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Prague
{ tara: 'Czech Republic (CZ)', oras: 'Prague', suvenir: 'Prague Astronomical Clock Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Prague', suvenir: 'Bohemian Crystal Vase', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Czech Republic (CZ)', oras: 'Prague', suvenir: 'Czech Beer Selection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Brno
{ tara: 'Czech Republic (CZ)', oras: 'Brno', suvenir: 'Brno Villa Tugendhat Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Brno', suvenir: 'Moravian Wine Collection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Czech Republic (CZ)', oras: 'Brno', suvenir: 'Brno Spilberk Castle Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Ostrava
{ tara: 'Czech Republic (CZ)', oras: 'Ostrava', suvenir: 'Ostrava Industrial Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Ostrava', suvenir: 'Moravian Folk Art Painting', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Czech Republic (CZ)', oras: 'Ostrava', suvenir: 'Ostrava Coal Mining History Book', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Plzen
{ tara: 'Czech Republic (CZ)', oras: 'Plzen', suvenir: 'Plzen Pilsner Brewery Tour Ticket', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Plzen', suvenir: 'Bohemian Glass Beer Mug', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Czech Republic (CZ)', oras: 'Plzen', suvenir: 'Plzen Historical Walking Map', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Karlovy Vary
{ tara: 'Czech Republic (CZ)', oras: 'Karlovy Vary', suvenir: 'Karlovy Vary Thermal Spa Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Karlovy Vary', suvenir: 'Czech Herbal Liquor Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Czech Republic (CZ)', oras: 'Karlovy Vary', suvenir: 'Karlovy Vary Porcelain Teapot', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Cesky Krumlov
{ tara: 'Czech Republic (CZ)', oras: 'Cesky Krumlov', suvenir: 'Cesky Krumlov Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Cesky Krumlov', suvenir: 'Bohemian Crystal Wine Glasses', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Czech Republic (CZ)', oras: 'Cesky Krumlov', suvenir: 'Cesky Krumlov Marionette Puppet', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Olomouc
{ tara: 'Czech Republic (CZ)', oras: 'Olomouc', suvenir: 'Olomouc Holy Trinity Column Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Olomouc', suvenir: 'Moravian Plum Brandy', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Czech Republic (CZ)', oras: 'Olomouc', suvenir: 'Olomouc Cheese Selection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Liberec
{ tara: 'Czech Republic (CZ)', oras: 'Liberec', suvenir: 'Liberec Jested Tower Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Liberec', suvenir: 'Bohemian Crystal Jewelry', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Czech Republic (CZ)', oras: 'Liberec', suvenir: 'Liberec Winter Sports Museum Pass', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Hradec Kralove
{ tara: 'Czech Republic (CZ)', oras: 'Hradec Kralove', suvenir: 'Hradec Kralove Old Town Map', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Hradec Kralove', suvenir: 'Bohemian Glass Vase', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Czech Republic (CZ)', oras: 'Hradec Kralove', suvenir: 'Hradec Kralove Craft Beer Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Zlin
{ tara: 'Czech Republic (CZ)', oras: 'Zlin', suvenir: 'Zlin Bata Shoe Museum Pass', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Czech Republic (CZ)', oras: 'Zlin', suvenir: 'Moravian Folk Art Doll', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Czech Republic (CZ)', oras: 'Zlin', suvenir: 'Zlin Brewery Tour Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Warsaw
{ tara: 'Poland (PL)', oras: 'Warsaw', suvenir: 'Warsaw Royal Castle Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Warsaw', suvenir: 'Polish Vodka Sampler', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Poland (PL)', oras: 'Warsaw', suvenir: 'Chopin Music Box', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Krakow
{ tara: 'Poland (PL)', oras: 'Krakow', suvenir: 'Krakow Cloth Hall Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Krakow', suvenir: 'Polish Amber Jewelry', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Poland (PL)', oras: 'Krakow', suvenir: 'Krakow Bagels (Obwarzanek Krakowski)', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Wroclaw
{ tara: 'Poland (PL)', oras: 'Wroclaw', suvenir: 'Wroclaw Dwarfs Figurines', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Wroclaw', suvenir: 'Polish Pottery Set', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Poland (PL)', oras: 'Wroclaw', suvenir: 'Wroclaw Salt & Honey Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Gdansk
{ tara: 'Poland (PL)', oras: 'Gdansk', suvenir: 'Gdansk Shipyard Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Gdansk', suvenir: 'Amber Stone Necklace', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Poland (PL)', oras: 'Gdansk', suvenir: 'Gdansk Liqueur Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Poznan
{ tara: 'Poland (PL)', oras: 'Poznan', suvenir: 'Poznan Town Hall Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Poznan', suvenir: 'St. Martin s Croissant', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Poland (PL)', oras: 'Poznan', suvenir: 'Poznan Beer Stein', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Lublin
{ tara: 'Poland (PL)', oras: 'Lublin', suvenir: 'Lublin Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Lublin', suvenir: 'Polish Linen Tablecloth', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Poland (PL)', oras: 'Lublin', suvenir: 'Lublin Honey and Jam Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Katowice
{ tara: 'Poland (PL)', oras: 'Katowice', suvenir: 'Katowice Spodek Arena Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Katowice', suvenir: 'Silesian Pottery', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Poland (PL)', oras: 'Katowice', suvenir: 'Katowice Sausage Selection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Lodz
{ tara: 'Poland (PL)', oras: 'Lodz', suvenir: 'Lodz Manufaktura Mall Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Lodz', suvenir: 'Lodz Textile Art', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Poland (PL)', oras: 'Lodz', suvenir: 'Lodz Piotrkowska Street Coffee Blend', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Szczecin
{ tara: 'Poland (PL)', oras: 'Szczecin', suvenir: 'Szczecin Pomeranian Dukes Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Szczecin', suvenir: 'Szczecin Maritime Museum Ticket', categorie: 'Experience', destinatari: ['lover', 'co-worker'] },
{ tara: 'Poland (PL)', oras: 'Szczecin', suvenir: 'Szczecin Baltic Sea Amber', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Torun
{ tara: 'Poland (PL)', oras: 'Torun', suvenir: 'Torun Old Town Panoramic Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Poland (PL)', oras: 'Torun', suvenir: 'Torun Gingerbread Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Poland (PL)', oras: 'Torun', suvenir: 'Copernicus Observatory Pass', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Stockholm
{ tara: 'Sweden (SE)', oras: 'Stockholm', suvenir: 'Stockholm Royal Palace Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Stockholm', suvenir: 'Swedish Fika Basket', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sweden (SE)', oras: 'Stockholm', suvenir: 'Stockholm Archipelago Boat Tour Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Gothenburg
{ tara: 'Sweden (SE)', oras: 'Gothenburg', suvenir: 'Gothenburg Opera House Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Gothenburg', suvenir: 'Swedish Cinnamon Buns (Kanelbullar)', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sweden (SE)', oras: 'Gothenburg', suvenir: 'Gothenburg Botanical Garden Poster', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Malmo
{ tara: 'Sweden (SE)', oras: 'Malmo', suvenir: 'Malmo Turning Torso Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Malmo', suvenir: 'Malmo Organic Coffee Blend', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sweden (SE)', oras: 'Malmo', suvenir: 'Malmo Castle Garden Pass', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Uppsala
{ tara: 'Sweden (SE)', oras: 'Uppsala', suvenir: 'Uppsala Cathedral Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Uppsala', suvenir: 'Swedish Glassware Set', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sweden (SE)', oras: 'Uppsala', suvenir: 'Uppsala University Book', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Visby
{ tara: 'Sweden (SE)', oras: 'Visby', suvenir: 'Visby Medieval Wall Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Visby', suvenir: 'Gotland Sheepskin Rug', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sweden (SE)', oras: 'Visby', suvenir: 'Visby Viking Artefact Replica', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Helsingborg
{ tara: 'Sweden (SE)', oras: 'Helsingborg', suvenir: 'Helsingborg Kärnan Tower Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Helsingborg', suvenir: 'Swedish Berry Jam Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sweden (SE)', oras: 'Helsingborg', suvenir: 'Helsingborg Maritime Museum Pass', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Lund
{ tara: 'Sweden (SE)', oras: 'Lund', suvenir: 'Lund University Emblem Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Lund', suvenir: 'Swedish Licorice Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sweden (SE)', oras: 'Lund', suvenir: 'Lund Botanical Garden Seed Set', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Orebro
{ tara: 'Sweden (SE)', oras: 'Orebro', suvenir: 'Orebro Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Orebro', suvenir: 'Swedish Silver Jewelry', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sweden (SE)', oras: 'Orebro', suvenir: 'Orebro Local Craft Beer Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Linkoping
{ tara: 'Sweden (SE)', oras: 'Linkoping', suvenir: 'Linkoping Cathedral Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Linkoping', suvenir: 'Swedish Dala Horse Figurine', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sweden (SE)', oras: 'Linkoping', suvenir: 'Linkoping Aviation Museum Pass', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Karlstad
{ tara: 'Sweden (SE)', oras: 'Karlstad', suvenir: 'Karlstad City Hall Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sweden (SE)', oras: 'Karlstad', suvenir: 'Swedish Reindeer Antler Knife', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sweden (SE)', oras: 'Karlstad', suvenir: 'Karlstad Lake Cruise Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Copenhagen
{ tara: 'Denmark (DK)', oras: 'Copenhagen', suvenir: 'Copenhagen Little Mermaid Statue Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Copenhagen', suvenir: 'Danish Pastries Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Denmark (DK)', oras: 'Copenhagen', suvenir: 'Copenhagen Tivoli Gardens Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Aarhus
{ tara: 'Denmark (DK)', oras: 'Aarhus', suvenir: 'Aarhus Old Town Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Aarhus', suvenir: 'Danish Design Tea Set', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Denmark (DK)', oras: 'Aarhus', suvenir: 'Aarhus Viking Museum Pass', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Odense
{ tara: 'Denmark (DK)', oras: 'Odense', suvenir: 'Odense Hans Christian Andersen Book', categorie: 'Books', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Odense', suvenir: 'Danish Ceramic Tableware Set', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Denmark (DK)', oras: 'Odense', suvenir: 'Odense Funen Village Entrance Pass', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Aalborg
{ tara: 'Denmark (DK)', oras: 'Aalborg', suvenir: 'Aalborg Historical Museum Ticket', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Aalborg', suvenir: 'Danish Craft Beer Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Denmark (DK)', oras: 'Aalborg', suvenir: 'Aalborg Viking Ship Model', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Esbjerg
{ tara: 'Denmark (DK)', oras: 'Esbjerg', suvenir: 'Esbjerg Fisheries and Maritime Museum Pass', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Esbjerg', suvenir: 'Danish Smoked Fish Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Denmark (DK)', oras: 'Esbjerg', suvenir: 'Esbjerg Windmill Model', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Roskilde
{ tara: 'Denmark (DK)', oras: 'Roskilde', suvenir: 'Roskilde Viking Ship Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Roskilde', suvenir: 'Danish Cheese Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Denmark (DK)', oras: 'Roskilde', suvenir: 'Roskilde Cathedral Model', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Helsingor
{ tara: 'Denmark (DK)', oras: 'Helsingor', suvenir: 'Helsingor Kronborg Castle Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Helsingor', suvenir: 'Danish Liquorice Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Denmark (DK)', oras: 'Helsingor', suvenir: 'Helsingor Maritime Museum Pass', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Kolding
{ tara: 'Denmark (DK)', oras: 'Kolding', suvenir: 'Koldinghus Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Kolding', suvenir: 'Danish Glassware Set', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Denmark (DK)', oras: 'Kolding', suvenir: 'Kolding Scandinavian Design Book', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Viborg
{ tara: 'Denmark (DK)', oras: 'Viborg', suvenir: 'Viborg Cathedral Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Viborg', suvenir: 'Danish Viking Ship Figurine', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Denmark (DK)', oras: 'Viborg', suvenir: 'Viborg Historical Museum Pass', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Randers
{ tara: 'Denmark (DK)', oras: 'Randers', suvenir: 'Randers Rainforest Zoo Pass', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Denmark (DK)', oras: 'Randers', suvenir: 'Danish Organic Beer Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Denmark (DK)', oras: 'Randers', suvenir: 'Randers Viking Ship Model', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Cairo
{ tara: 'Egypt (EG)', oras: 'Cairo', suvenir: 'Pyramid Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Cairo', suvenir: 'Egyptian Papyrus Painting', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Egypt (EG)', oras: 'Cairo', suvenir: 'Cairo Spice Mix Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Luxor
{ tara: 'Egypt (EG)', oras: 'Luxor', suvenir: 'Luxor Temple Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Luxor', suvenir: 'Egyptian Hieroglyphic Keychain', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Egypt (EG)', oras: 'Luxor', suvenir: 'Luxor Antiquities Book', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Aswan
{ tara: 'Egypt (EG)', oras: 'Aswan', suvenir: 'Aswan Dam Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Aswan', suvenir: 'Nubian Jewelry Set', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Egypt (EG)', oras: 'Aswan', suvenir: 'Aswan Tea Blend', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Alexandria
{ tara: 'Egypt (EG)', oras: 'Alexandria', suvenir: 'Alexandria Lighthouse Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Alexandria', suvenir: 'Egyptian Cotton Clothing', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Egypt (EG)', oras: 'Alexandria', suvenir: 'Alexandria Mediterranean Spice Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Sharm El Sheikh
{ tara: 'Egypt (EG)', oras: 'Sharm El Sheikh', suvenir: 'Red Sea Coral Jewelry', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Sharm El Sheikh', suvenir: 'Bedouin Handcrafted Rug', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Egypt (EG)', oras: 'Sharm El Sheikh', suvenir: 'Sharm El Sheikh Resort Spa Package', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Hurghada
{ tara: 'Egypt (EG)', oras: 'Hurghada', suvenir: 'Red Sea Shell Necklace', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Hurghada', suvenir: 'Hurghada Coral Reef Poster', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Egypt (EG)', oras: 'Hurghada', suvenir: 'Egyptian Sandalwood Incense', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Giza
{ tara: 'Egypt (EG)', oras: 'Giza', suvenir: 'Giza Pyramids Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Giza', suvenir: 'Egyptian Scarab Beetle Pendant', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Egypt (EG)', oras: 'Giza', suvenir: 'Giza Egyptian Cotton Bedding Set', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Dahab
{ tara: 'Egypt (EG)', oras: 'Dahab', suvenir: 'Dahab Desert Sand Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Dahab', suvenir: 'Bedouin Handwoven Shawl', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Egypt (EG)', oras: 'Dahab', suvenir: 'Dahab Diving Safari Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Marsa Alam
{ tara: 'Egypt (EG)', oras: 'Marsa Alam', suvenir: 'Marsa Alam Dolphin Encounter', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'Marsa Alam', suvenir: 'Red Sea Coral Reef Painting', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Egypt (EG)', oras: 'Marsa Alam', suvenir: 'Marsa Alam Sea Salt Scrub', categorie: 'Beauty', destinatari: ['acquaintance', 'relative'] },

// El Gouna
{ tara: 'Egypt (EG)', oras: 'El Gouna', suvenir: 'El Gouna Resort Beach Towel', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Egypt (EG)', oras: 'El Gouna', suvenir: 'El Gouna Glass Bottom Boat Tour', categorie: 'Experience', destinatari: ['lover', 'co-worker'] },
{ tara: 'Egypt (EG)', oras: 'El Gouna', suvenir: 'Red Sea Fish Identification Guide', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Dubrovnik
{ tara: 'Croatia (HR)', oras: 'Dubrovnik', suvenir: 'Dubrovnik Old Town Map', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Dubrovnik', suvenir: 'Dubrovnik Game of Thrones Tour Ticket', categorie: 'Experience', destinatari: ['lover', 'co-worker'] },
{ tara: 'Croatia (HR)', oras: 'Dubrovnik', suvenir: 'Dalmatian Fig Spread', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Split
{ tara: 'Croatia (HR)', oras: 'Split', suvenir: 'Diocletian s Palace Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Split', suvenir: 'Split Marjan Hill Hiking Guide', categorie: 'Books', destinatari: ['lover', 'co-worker'] },
{ tara: 'Croatia (HR)', oras: 'Split', suvenir: 'Dalmatian Olive Oil Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Zagreb
{ tara: 'Croatia (HR)', oras: 'Zagreb', suvenir: 'Zagreb Upper Town Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Zagreb', suvenir: 'Zagreb Dolac Market Cookbook', categorie: 'Books', destinatari: ['lover', 'co-worker'] },
{ tara: 'Croatia (HR)', oras: 'Zagreb', suvenir: 'Zagreb Licitar Heart', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Zadar
{ tara: 'Croatia (HR)', oras: 'Zadar', suvenir: 'Zadar Sea Organ Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Zadar', suvenir: 'Maraschino Cherry Liqueur', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Croatia (HR)', oras: 'Zadar', suvenir: 'Zadar Sunset Painting', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Rovinj
{ tara: 'Croatia (HR)', oras: 'Rovinj', suvenir: 'Rovinj Old Town Canvas Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Rovinj', suvenir: 'Istrian Truffle Oil', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Croatia (HR)', oras: 'Rovinj', suvenir: 'Rovinj Seaside Ceramic Plate', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Pula
{ tara: 'Croatia (HR)', oras: 'Pula', suvenir: 'Pula Roman Amphitheatre Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Pula', suvenir: 'Istrian Olive Wood Cutting Board', categorie: 'Home', destinatari: ['lover', 'co-worker'] },
{ tara: 'Croatia (HR)', oras: 'Pula', suvenir: 'Pula Arena Postcard Set', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Sibenik
{ tara: 'Croatia (HR)', oras: 'Sibenik', suvenir: 'Sibenik Cathedral Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Sibenik', suvenir: 'Dalmatian Prosciutto Gift Box', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Croatia (HR)', oras: 'Sibenik', suvenir: 'Sibenik Seafront Painting', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Trogir
{ tara: 'Croatia (HR)', oras: 'Trogir', suvenir: 'Trogir Old Town Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Trogir', suvenir: 'Dalmatian Red Wine Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Croatia (HR)', oras: 'Trogir', suvenir: 'Trogir Historic Buildings Calendar', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Hvar
{ tara: 'Croatia (HR)', oras: 'Hvar', suvenir: 'Hvar Lavender Soap Set', categorie: 'Beauty', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Hvar', suvenir: 'Hvar Island Olive Oil', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Croatia (HR)', oras: 'Hvar', suvenir: 'Hvar Vineyard Tour Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Osijek
{ tara: 'Croatia (HR)', oras: 'Osijek', suvenir: 'Osijek Fortress Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Croatia (HR)', oras: 'Osijek', suvenir: 'Slavonian Honey Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Croatia (HR)', oras: 'Osijek', suvenir: 'Osijek Traditional Embroidery', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Oslo
{ tara: 'Norway (NO)', oras: 'Oslo', suvenir: 'Oslo Opera House Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Oslo', suvenir: 'Norwegian Salmon Sampler', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Norway (NO)', oras: 'Oslo', suvenir: 'Viking Ship Museum Poster', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Bergen
{ tara: 'Norway (NO)', oras: 'Bergen', suvenir: 'Bryggen Hanseatic Wharf Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Bergen', suvenir: 'Norwegian Seafood Cookbook', categorie: 'Books', destinatari: ['lover', 'co-worker'] },
{ tara: 'Norway (NO)', oras: 'Bergen', suvenir: 'Bergen Rain Poncho', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Stavanger
{ tara: 'Norway (NO)', oras: 'Stavanger', suvenir: 'Stavanger Old Town Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Stavanger', suvenir: 'Norwegian Knit Sweater', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Norway (NO)', oras: 'Stavanger', suvenir: 'Stavanger Sardines Tin', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Trondheim
{ tara: 'Norway (NO)', oras: 'Trondheim', suvenir: 'Trondheim Nidaros Cathedral Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Trondheim', suvenir: 'Norwegian Forest Berries Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Norway (NO)', oras: 'Trondheim', suvenir: 'Trondheim Fjord Cruise Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Tromso
{ tara: 'Norway (NO)', oras: 'Tromso', suvenir: 'Tromso Northern Lights Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Tromso', suvenir: 'Tromso Arctic Snow Globe', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Norway (NO)', oras: 'Tromso', suvenir: 'Norwegian Reindeer Salami', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Alesund
{ tara: 'Norway (NO)', oras: 'Alesund', suvenir: 'Alesund Art Nouveau Architecture Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Alesund', suvenir: 'Norwegian Aquavit Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Norway (NO)', oras: 'Alesund', suvenir: 'Alesund Lighthouse Miniature', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Kristiansand
{ tara: 'Norway (NO)', oras: 'Kristiansand', suvenir: 'Kristiansand Sailboat Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Kristiansand', suvenir: 'Norwegian Salmon Jerky', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Norway (NO)', oras: 'Kristiansand', suvenir: 'Kristiansand Maritime Museum Pass', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Drammen
{ tara: 'Norway (NO)', oras: 'Drammen', suvenir: 'Drammen Glassworks Art Piece', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Drammen', suvenir: 'Norwegian Aquavit Glass Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Norway (NO)', oras: 'Drammen', suvenir: 'Drammen Riverfront Painting', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Bodo
{ tara: 'Norway (NO)', oras: 'Bodo', suvenir: 'Bodo Northern Lights Canvas', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Bodo', suvenir: 'Bodo Arctic Char Fillet', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Norway (NO)', oras: 'Bodo', suvenir: 'Bodo Polar Bear Plush Toy', categorie: 'Toys', destinatari: ['acquaintance', 'relative'] },

// Lillehammer
{ tara: 'Norway (NO)', oras: 'Lillehammer', suvenir: 'Lillehammer Ski Jump Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Norway (NO)', oras: 'Lillehammer', suvenir: 'Norwegian Elk Jerky', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Norway (NO)', oras: 'Lillehammer', suvenir: 'Lillehammer Winter Sports Museum Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Bali (Denpasar)
{ tara: 'Indonesia (ID)', oras: 'Bali (Denpasar)', suvenir: 'Balinese Batik Fabric', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Bali (Denpasar)', suvenir: 'Ubud Hand-carved Mask', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Indonesia (ID)', oras: 'Bali (Denpasar)', suvenir: 'Bali Coffee Beans', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Jakarta
{ tara: 'Indonesia (ID)', oras: 'Jakarta', suvenir: 'Jakarta Skyline Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Jakarta', suvenir: 'Indonesian Batik Scarf', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Indonesia (ID)', oras: 'Jakarta', suvenir: 'Jakarta Street Food Sampler', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Yogyakarta
{ tara: 'Indonesia (ID)', oras: 'Yogyakarta', suvenir: 'Borobudur Temple Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Yogyakarta', suvenir: 'Wayang Kulit (Shadow Puppet)', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Indonesia (ID)', oras: 'Yogyakarta', suvenir: 'Yogyakarta Batik Painting', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Surabaya
{ tara: 'Indonesia (ID)', oras: 'Surabaya', suvenir: 'Surabaya Ceramic Vase', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Surabaya', suvenir: 'Madura Batik Shirt', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Indonesia (ID)', oras: 'Surabaya', suvenir: 'East Javanese Snacks Assortment', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Bandung
{ tara: 'Indonesia (ID)', oras: 'Bandung', suvenir: 'Bandung Geometric Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Bandung', suvenir: 'Bandung Traditional Shawl', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Indonesia (ID)', oras: 'Bandung', suvenir: 'Bandung Tea Sampler', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Medan
{ tara: 'Indonesia (ID)', oras: 'Medan', suvenir: 'Medan Toba Lake Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Medan', suvenir: 'Batak Hand-carved Mask', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Indonesia (ID)', oras: 'Medan', suvenir: 'Medan Durian Chocolate Box', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Lombok
{ tara: 'Indonesia (ID)', oras: 'Lombok', suvenir: 'Lombok Beach Sand Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Lombok', suvenir: 'Sasak Hand-woven Textile', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Indonesia (ID)', oras: 'Lombok', suvenir: 'Lombok Sea Salt', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Makassar
{ tara: 'Indonesia (ID)', oras: 'Makassar', suvenir: 'Makassar Traditional Boat Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Makassar', suvenir: 'South Sulawesi Batik Pillow Case', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Indonesia (ID)', oras: 'Makassar', suvenir: 'Makassar Spices Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Batam
{ tara: 'Indonesia (ID)', oras: 'Batam', suvenir: 'Batam Local Handicraft', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Batam', suvenir: 'Batam Handmade Batik Scarf', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Indonesia (ID)', oras: 'Batam', suvenir: 'Batam Pineapple Tarts', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Semarang
{ tara: 'Indonesia (ID)', oras: 'Semarang', suvenir: 'Semarang Old Town Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Indonesia (ID)', oras: 'Semarang', suvenir: 'Javanese Batik Table Runner', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Indonesia (ID)', oras: 'Semarang', suvenir: 'Semarang Kopi Luwak Coffee', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Dublin
{ tara: 'Ireland (IE)', oras: 'Dublin', suvenir: 'Dublin Guinness Storehouse Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Dublin', suvenir: 'Irish Wool Sweater', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ireland (IE)', oras: 'Dublin', suvenir: 'Irish Whiskey Selection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Galway
{ tara: 'Ireland (IE)', oras: 'Galway', suvenir: 'Galway Claddagh Ring', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Galway', suvenir: 'Connemara Marble Necklace', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ireland (IE)', oras: 'Galway', suvenir: 'Galway Bay Smoked Salmon', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Cork
{ tara: 'Ireland (IE)', oras: 'Cork', suvenir: 'Cork Cityscape Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Cork', suvenir: 'Cork Crystal Wine Glasses', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ireland (IE)', oras: 'Cork', suvenir: 'Cork Whiskey Cake', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Killarney
{ tara: 'Ireland (IE)', oras: 'Killarney', suvenir: 'Killarney National Park Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Killarney', suvenir: 'Irish Linen Scarf', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ireland (IE)', oras: 'Killarney', suvenir: 'Killarney Chocolate Truffles', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Limerick
{ tara: 'Ireland (IE)', oras: 'Limerick', suvenir: 'Limerick Georgian Architecture Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Limerick', suvenir: 'Limerick Lace Handkerchief', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ireland (IE)', oras: 'Limerick', suvenir: 'Limerick Hamper with Irish Cheese', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Waterford
{ tara: 'Ireland (IE)', oras: 'Waterford', suvenir: 'Waterford Crystal Vase', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Waterford', suvenir: 'Waterford Crystal Jewelry', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ireland (IE)', oras: 'Waterford', suvenir: 'Waterford Blaa Bread Mix', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Kilkenny
{ tara: 'Ireland (IE)', oras: 'Kilkenny', suvenir: 'Kilkenny Castle Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Kilkenny', suvenir: 'Irish Craft Beer Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ireland (IE)', oras: 'Kilkenny', suvenir: 'Kilkenny Traditional Hurling Ball', categorie: 'Sport', destinatari: ['acquaintance', 'relative'] },

// Sligo
{ tara: 'Ireland (IE)', oras: 'Sligo', suvenir: 'Sligo Landscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Sligo', suvenir: 'Sligo Handcrafted Pottery', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ireland (IE)', oras: 'Sligo', suvenir: 'Sligo Irish Seaweed Bath Set', categorie: 'Beauty', destinatari: ['acquaintance', 'relative'] },

// Dingle
{ tara: 'Ireland (IE)', oras: 'Dingle', suvenir: 'Dingle Peninsula Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Dingle', suvenir: 'Dingle Sheep Wool Throw', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ireland (IE)', oras: 'Dingle', suvenir: 'Dingle Peninsula Sea Salt', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Westport
{ tara: 'Ireland (IE)', oras: 'Westport', suvenir: 'Westport Harbour Watercolor Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ireland (IE)', oras: 'Westport', suvenir: 'Westport Hand-knit Aran Sweater', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ireland (IE)', oras: 'Westport', suvenir: 'Westport Whiskey Tasting Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Bucharest
{ tara: 'Romania (RO)', oras: 'Bucharest', suvenir: 'Bucharest Old Town Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Bucharest', suvenir: 'Romanian Traditional Blouse', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Romania (RO)', oras: 'Bucharest', suvenir: 'Romanian Wine Selection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Cluj-Napoca
{ tara: 'Romania (RO)', oras: 'Cluj-Napoca', suvenir: 'Cluj-Napoca Botanical Garden Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Cluj-Napoca', suvenir: 'Transylvanian Wooden Spoon Set', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Romania (RO)', oras: 'Cluj-Napoca', suvenir: 'Cluj-Napoca Cheese Platter', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Brasov
{ tara: 'Romania (RO)', oras: 'Brasov', suvenir: 'Brasov Black Church Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Brasov', suvenir: 'Romanian Dracula T-shirt', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Romania (RO)', oras: 'Brasov', suvenir: 'Brasov Chocolate Box', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Sibiu
{ tara: 'Romania (RO)', oras: 'Sibiu', suvenir: 'Sibiu Bridge of Lies Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Sibiu', suvenir: 'Saxon Transylvanian Cuckoo Clock', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Romania (RO)', oras: 'Sibiu', suvenir: 'Sibiu Transylvanian Wine Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Timisoara
{ tara: 'Romania (RO)', oras: 'Timisoara', suvenir: 'Timisoara Opera House Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Timisoara', suvenir: 'Banat Traditional Ceramic Plate', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Romania (RO)', oras: 'Timisoara', suvenir: 'Timisoara Paprika Spice Blend', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Iasi
{ tara: 'Romania (RO)', oras: 'Iasi', suvenir: 'Iasi Palace of Culture Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Iasi', suvenir: 'Moldavian Traditional Embroidery', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Romania (RO)', oras: 'Iasi', suvenir: 'Iasi Sweets Assortment', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Constanta
{ tara: 'Romania (RO)', oras: 'Constanta', suvenir: 'Constanta Black Sea Coastline Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Constanta', suvenir: 'Romanian Seashell Jewelry', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Romania (RO)', oras: 'Constanta', suvenir: 'Constanta Sea Salt', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Oradea
{ tara: 'Romania (RO)', oras: 'Oradea', suvenir: 'Oradea Art Nouveau Architecture Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Oradea', suvenir: 'Oradea Thermal Bath Soap Set', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Romania (RO)', oras: 'Oradea', suvenir: 'Oradea Mineral Water Collection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Sighisoara
{ tara: 'Romania (RO)', oras: 'Sighisoara', suvenir: 'Sighisoara Clock Tower Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Sighisoara', suvenir: 'Transylvanian Herbal Tea Sampler', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Romania (RO)', oras: 'Sighisoara', suvenir: 'Sighisoara Medieval Ceramic Mug', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Arad
{ tara: 'Romania (RO)', oras: 'Arad', suvenir: 'Arad Cityscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Romania (RO)', oras: 'Arad', suvenir: 'Banat Regional Wine Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Romania (RO)', oras: 'Arad', suvenir: 'Arad Paprika Spice Blend', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Brussels
{ tara: 'Belgium (BE)', oras: 'Brussels', suvenir: 'Atomium Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Brussels', suvenir: 'Belgian Chocolate Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belgium (BE)', oras: 'Brussels', suvenir: 'Manneken Pis Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Bruges
{ tara: 'Belgium (BE)', oras: 'Bruges', suvenir: 'Bruges Canal Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Bruges', suvenir: 'Bruges Lace Handkerchief', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belgium (BE)', oras: 'Bruges', suvenir: 'Bruges Beer Selection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Ghent
{ tara: 'Belgium (BE)', oras: 'Ghent', suvenir: 'Ghent Altarpiece Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Ghent', suvenir: 'Ghent Floral Arrangement', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belgium (BE)', oras: 'Ghent', suvenir: 'Ghent Cuberdon Candies', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Antwerp
{ tara: 'Belgium (BE)', oras: 'Antwerp', suvenir: 'Antwerp Diamond Paperweight', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Antwerp', suvenir: 'Antwerp Fashion Magazine', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belgium (BE)', oras: 'Antwerp', suvenir: 'Antwerp Belgian Waffles Mix', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Leuven
{ tara: 'Belgium (BE)', oras: 'Leuven', suvenir: 'Leuven University Hoodie', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Leuven', suvenir: 'Leuven Abbey Beer Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belgium (BE)', oras: 'Leuven', suvenir: 'Leuven Library Poster', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Liege
{ tara: 'Belgium (BE)', oras: 'Liege', suvenir: 'Liege Cathedral Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Liege', suvenir: 'Liege Pâté Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belgium (BE)', oras: 'Liege', suvenir: 'Liege Belgian Chocolate Box', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Namur
{ tara: 'Belgium (BE)', oras: 'Namur', suvenir: 'Namur Castle Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Namur', suvenir: 'Namur River Cruise Ticket', categorie: 'Experience', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belgium (BE)', oras: 'Namur', suvenir: 'Namur Beer Sampler', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Mechelen
{ tara: 'Belgium (BE)', oras: 'Mechelen', suvenir: 'Mechelen Brewery Glass Set', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Mechelen', suvenir: 'Mechelen Lace Tablecloth', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belgium (BE)', oras: 'Mechelen', suvenir: 'Mechelen Beer and Cheese Pairing Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Mons
{ tara: 'Belgium (BE)', oras: 'Mons', suvenir: 'Mons Grand Place Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Mons', suvenir: 'Mons Craft Beer Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belgium (BE)', oras: 'Mons', suvenir: 'Mons Chocolate Truffle Box', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Oostende
{ tara: 'Belgium (BE)', oras: 'Oostende', suvenir: 'Oostende Beach Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belgium (BE)', oras: 'Oostende', suvenir: 'Oostende Fishermen s Hat', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belgium (BE)', oras: 'Oostende', suvenir: 'Oostende Seafood Assortment', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Hanoi
{ tara: 'Vietnam (VN)', oras: 'Hanoi', suvenir: 'Hanoi Ceramic Water Puppet', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Hanoi', suvenir: 'Vietnamese Silk Scarf', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Vietnam (VN)', oras: 'Hanoi', suvenir: 'Hanoi Street Food Spice Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Ho Chi Minh City
{ tara: 'Vietnam (VN)', oras: 'Ho Chi Minh City', suvenir: 'Ho Chi Minh City Skyline Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Ho Chi Minh City', suvenir: 'Vietnamese Coffee Beans', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Vietnam (VN)', oras: 'Ho Chi Minh City', suvenir: 'Ho Chi Minh City Ao Dai (Traditional Dress)', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Hoi An
{ tara: 'Vietnam (VN)', oras: 'Hoi An', suvenir: 'Hoi An Lantern', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Hoi An', suvenir: 'Hoi An Tailored Silk Shirt', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Vietnam (VN)', oras: 'Hoi An', suvenir: 'Hoi An Rice Noodle Basket', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Da Nang
{ tara: 'Vietnam (VN)', oras: 'Da Nang', suvenir: 'Da Nang Marble Mountain Sculpture', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Da Nang', suvenir: 'Da Nang Sea Shell Jewelry', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Vietnam (VN)', oras: 'Da Nang', suvenir: 'Da Nang Fish Sauce Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Ha Long
{ tara: 'Vietnam (VN)', oras: 'Ha Long', suvenir: 'Ha Long Bay Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Ha Long', suvenir: 'Ha Long Pearl Jewelry', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Vietnam (VN)', oras: 'Ha Long', suvenir: 'Ha Long Seafood Sampler', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Hue
{ tara: 'Vietnam (VN)', oras: 'Hue', suvenir: 'Hue Imperial Citadel Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Hue', suvenir: 'Hue Conical Hat', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Vietnam (VN)', oras: 'Hue', suvenir: 'Hue Royal Tea Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Nha Trang
{ tara: 'Vietnam (VN)', oras: 'Nha Trang', suvenir: 'Nha Trang Beach Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Nha Trang', suvenir: 'Nha Trang Pearl Necklace', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Vietnam (VN)', oras: 'Nha Trang', suvenir: 'Nha Trang Dried Seafood Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Phu Quoc
{ tara: 'Vietnam (VN)', oras: 'Phu Quoc', suvenir: 'Phu Quoc Coconut Candle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Phu Quoc', suvenir: 'Phu Quoc Fish Sauce', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Vietnam (VN)', oras: 'Phu Quoc', suvenir: 'Phu Quoc Pearl Earrings', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Sapa
{ tara: 'Vietnam (VN)', oras: 'Sapa', suvenir: 'Sapa Embroidered Bag', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Sapa', suvenir: 'Sapa Handwoven Blanket', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Vietnam (VN)', oras: 'Sapa', suvenir: 'Sapa Herbal Tea Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Can Tho
{ tara: 'Vietnam (VN)', oras: 'Can Tho', suvenir: 'Can Tho Floating Market Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Vietnam (VN)', oras: 'Can Tho', suvenir: 'Can Tho Rice Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Vietnam (VN)', oras: 'Can Tho', suvenir: 'Can Tho Rice Noodle Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Manila
{ tara: 'Philippines (PH)', oras: 'Manila', suvenir: 'Manila Jeepney Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Manila', suvenir: 'Barong Tagalog (Traditional Filipino Shirt)', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Philippines (PH)', oras: 'Manila', suvenir: 'Dried Mangoes', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Cebu
{ tara: 'Philippines (PH)', oras: 'Cebu', suvenir: 'Cebu Guitar', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Cebu', suvenir: 'Taal Woven Shawl', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Philippines (PH)', oras: 'Cebu', suvenir: 'Danggit (Dried Fish)', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Boracay
{ tara: 'Philippines (PH)', oras: 'Boracay', suvenir: 'Boracay Beach Sand Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Boracay', suvenir: 'Boracay Island T-Shirt', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Philippines (PH)', oras: 'Boracay', suvenir: 'Calamansi Marmalade', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Davao
{ tara: 'Philippines (PH)', oras: 'Davao', suvenir: 'Durian Chocolates', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Davao', suvenir: 'Malong (Traditional Filipino Wrap)', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Philippines (PH)', oras: 'Davao', suvenir: 'Davao Pomelo', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Baguio
{ tara: 'Philippines (PH)', oras: 'Baguio', suvenir: 'Baguio Handwoven Blanket', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Baguio', suvenir: 'Strawberry Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Philippines (PH)', oras: 'Baguio', suvenir: 'Baguio Native Handicrafts', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Bohol
{ tara: 'Philippines (PH)', oras: 'Bohol', suvenir: 'Bohol Chocolate Hills Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Bohol', suvenir: 'Peanut Kisses', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Philippines (PH)', oras: 'Bohol', suvenir: 'Bohol Shell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Palawan (Puerto Princesa)
{ tara: 'Philippines (PH)', oras: 'Palawan (Puerto Princesa)', suvenir: 'Palawan Handwoven Bag', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Palawan (Puerto Princesa)', suvenir: 'Cashew Nuts', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Philippines (PH)', oras: 'Palawan (Puerto Princesa)', suvenir: 'Palawan Sea Shell Crafts', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Vigan
{ tara: 'Philippines (PH)', oras: 'Vigan', suvenir: 'Vigan Heritage Village Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Vigan', suvenir: 'Vigan Empanada', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Philippines (PH)', oras: 'Vigan', suvenir: 'Abel Iloco Weaving', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Iloilo
{ tara: 'Philippines (PH)', oras: 'Iloilo', suvenir: 'Iloilo La Paz Batchoy Mix', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Iloilo', suvenir: 'Hablon Fabric', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Philippines (PH)', oras: 'Iloilo', suvenir: 'Iloilo Tinikling Dance Figurine', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Siargao
{ tara: 'Philippines (PH)', oras: 'Siargao', suvenir: 'Siargao Surfboard Keychain', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Philippines (PH)', oras: 'Siargao', suvenir: 'Dried Mango Rum Balls', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Philippines (PH)', oras: 'Siargao', suvenir: 'Siargao Island Painting', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Buenos Aires
{ tara: 'Argentina (AR)', oras: 'Buenos Aires', suvenir: 'Tango Dancer Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'Buenos Aires', suvenir: 'Mate Gourd and Bombilla Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Argentina (AR)', oras: 'Buenos Aires', suvenir: 'Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Cordoba
{ tara: 'Argentina (AR)', oras: 'Cordoba', suvenir: 'Cordoba Jesuit Estancia Tour', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'Cordoba', suvenir: 'Alfajores (Dulce de Leche Cookies)', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Argentina (AR)', oras: 'Cordoba', suvenir: 'Handcrafted Leather Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Mendoza
{ tara: 'Argentina (AR)', oras: 'Mendoza', suvenir: 'Malbec Wine Bottle', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'Mendoza', suvenir: 'Mendoza Wine Tour', categorie: 'Experience', destinatari: ['lover', 'co-worker'] },
{ tara: 'Argentina (AR)', oras: 'Mendoza', suvenir: 'Handcrafted Mate Gourd', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Rosario
{ tara: 'Argentina (AR)', oras: 'Rosario', suvenir: 'Rosario Football Jersey', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'Rosario', suvenir: 'Rosario Ceramic Mate Cup', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Argentina (AR)', oras: 'Rosario', suvenir: 'Rosario Alfajores', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Bariloche
{ tara: 'Argentina (AR)', oras: 'Bariloche', suvenir: 'Bariloche Chocolate Box', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'Bariloche', suvenir: 'Mapuche Handcrafted Woolen Poncho', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Argentina (AR)', oras: 'Bariloche', suvenir: 'Bariloche Snow Globe', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Ushuaia
{ tara: 'Argentina (AR)', oras: 'Ushuaia', suvenir: 'Ushuaia Penguin Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'Ushuaia', suvenir: 'Tierra del Fuego Postcard Set', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Argentina (AR)', oras: 'Ushuaia', suvenir: 'Ushuaia Snow Globe', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Salta
{ tara: 'Argentina (AR)', oras: 'Salta', suvenir: 'Salta Poncho', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'Salta', suvenir: 'Salta Handcrafted Andean Jewelry', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Argentina (AR)', oras: 'Salta', suvenir: 'Empanadas Saltenas', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Mar del Plata
{ tara: 'Argentina (AR)', oras: 'Mar del Plata', suvenir: 'Mar del Plata Beach Towel', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'Mar del Plata', suvenir: 'Mar del Plata Sea Shell Necklace', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Argentina (AR)', oras: 'Mar del Plata', suvenir: 'Dulce de Leche Mar del Plata', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// La Plata
{ tara: 'Argentina (AR)', oras: 'La Plata', suvenir: 'La Plata Botanical Garden Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'La Plata', suvenir: 'La Plata Leather Notebook', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Argentina (AR)', oras: 'La Plata', suvenir: 'La Plata Handcrafted Pottery', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// San Miguel de Tucuman
{ tara: 'Argentina (AR)', oras: 'San Miguel de Tucuman', suvenir: 'San Miguel de Tucuman Handcrafted Textiles', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Argentina (AR)', oras: 'San Miguel de Tucuman', suvenir: 'Tucuman Local Craft Beer', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Argentina (AR)', oras: 'San Miguel de Tucuman', suvenir: 'Tucuman Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Helsinki
{ tara: 'Finland (FI)', oras: 'Helsinki', suvenir: 'Helsinki Design Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Helsinki', suvenir: 'Finnish Licorice Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Finland (FI)', oras: 'Helsinki', suvenir: 'Marimekko Handbag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Rovaniemi
{ tara: 'Finland (FI)', oras: 'Rovaniemi', suvenir: 'Rovaniemi Santa Claus Postcard', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Rovaniemi', suvenir: 'Reindeer Antler Jewelry', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Finland (FI)', oras: 'Rovaniemi', suvenir: 'Lapland Berry Jam', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Turku
{ tara: 'Finland (FI)', oras: 'Turku', suvenir: 'Turku Castle Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Turku', suvenir: 'Finnish Birch Sauna Whisk', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Finland (FI)', oras: 'Turku', suvenir: 'Turku Archipelago Smoked Salmon', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Tampere
{ tara: 'Finland (FI)', oras: 'Tampere', suvenir: 'Tampere Moomin Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Tampere', suvenir: 'Finnish Salmiakki Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Finland (FI)', oras: 'Tampere', suvenir: 'Tampere Sarkanniemi Amusement Park Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Oulu
{ tara: 'Finland (FI)', oras: 'Oulu', suvenir: 'Oulu Glassware', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Oulu', suvenir: 'Finnish Cloudberry Liqueur', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Finland (FI)', oras: 'Oulu', suvenir: 'Oulu Woolen Socks', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Espoo
{ tara: 'Finland (FI)', oras: 'Espoo', suvenir: 'Espoo Cityscape Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Espoo', suvenir: 'Finnish Blueberry Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Finland (FI)', oras: 'Espoo', suvenir: 'Espoo Handcrafted Ceramic Bowl', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Vantaa
{ tara: 'Finland (FI)', oras: 'Vantaa', suvenir: 'Vantaa Glass Bird Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Vantaa', suvenir: 'Finnish Rye Bread', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Finland (FI)', oras: 'Vantaa', suvenir: 'Vantaa Handcrafted Wooden Bowl', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Porvoo
{ tara: 'Finland (FI)', oras: 'Porvoo', suvenir: 'Porvoo Old Town Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Porvoo', suvenir: 'Finnish Cinnamon Rolls (Korvapuusti)', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Finland (FI)', oras: 'Porvoo', suvenir: 'Porvoo Handcrafted Soap', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kuopio
{ tara: 'Finland (FI)', oras: 'Kuopio', suvenir: 'Kuopio Kalakukko (Fish and Meat Pie)', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Kuopio', suvenir: 'Kuopio Wooden Spoon', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Finland (FI)', oras: 'Kuopio', suvenir: 'Kuopio Handwoven Rug', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Lahti
{ tara: 'Finland (FI)', oras: 'Lahti', suvenir: 'Lahti Sibelius Hall Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Finland (FI)', oras: 'Lahti', suvenir: 'Finnish Licorice Pipes', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Finland (FI)', oras: 'Lahti', suvenir: 'Lahti Wooden Kuksa Cup', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Lima
{ tara: 'Peru (PE)', oras: 'Lima', suvenir: 'Lima Cityscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Lima', suvenir: 'Peruvian Pisco Bottle', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Peru (PE)', oras: 'Lima', suvenir: 'Lima Handcrafted Jewelry', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Cusco
{ tara: 'Peru (PE)', oras: 'Cusco', suvenir: 'Cusco Inca Mask Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Cusco', suvenir: 'Peruvian Alpaca Wool Blanket', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Peru (PE)', oras: 'Cusco', suvenir: 'Cusco Coca Tea', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Arequipa
{ tara: 'Peru (PE)', oras: 'Arequipa', suvenir: 'Arequipa Volcano Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Arequipa', suvenir: 'Peruvian Ceramic Vase', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Peru (PE)', oras: 'Arequipa', suvenir: 'Arequipa Rocoto Pepper Sauce', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Puno
{ tara: 'Peru (PE)', oras: 'Puno', suvenir: 'Puno Textile Wall Hanging', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Puno', suvenir: 'Peruvian Silver Jewelry', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Peru (PE)', oras: 'Puno', suvenir: 'Puno Totora Reed Handicraft', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Trujillo
{ tara: 'Peru (PE)', oras: 'Trujillo', suvenir: 'Trujillo Colonial Architecture Photo Book', categorie: 'Books', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Trujillo', suvenir: 'Peruvian Gold Filigree Earrings', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Peru (PE)', oras: 'Trujillo', suvenir: 'Trujillo Moche Pottery Replica', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Iquitos
{ tara: 'Peru (PE)', oras: 'Iquitos', suvenir: 'Iquitos Amazon Rainforest Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Iquitos', suvenir: 'Peruvian Jungle Crafted Necklace', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Peru (PE)', oras: 'Iquitos', suvenir: 'Iquitos Amazon Chocolate', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Paracas
{ tara: 'Peru (PE)', oras: 'Paracas', suvenir: 'Paracas National Reserve Photo Book', categorie: 'Books', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Paracas', suvenir: 'Peruvian Pisco Sour Kit', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Peru (PE)', oras: 'Paracas', suvenir: 'Paracas Handcrafted Shell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Huaraz
{ tara: 'Peru (PE)', oras: 'Huaraz', suvenir: 'Huaraz Andean Mountain Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Huaraz', suvenir: 'Peruvian Woolen Scarf', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Peru (PE)', oras: 'Huaraz', suvenir: 'Huaraz Quinoa Superfood', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Chiclayo
{ tara: 'Peru (PE)', oras: 'Chiclayo', suvenir: 'Chiclayo Moche Pottery Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Chiclayo', suvenir: 'Peruvian Marinera Dance Doll', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Peru (PE)', oras: 'Chiclayo', suvenir: 'Chiclayo Ceviche Seasoning Mix', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Ayacucho
{ tara: 'Peru (PE)', oras: 'Ayacucho', suvenir: 'Ayacucho Huamanga Stone Sculpture', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Peru (PE)', oras: 'Ayacucho', suvenir: 'Peruvian Andean Textile Tapestry', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Peru (PE)', oras: 'Ayacucho', suvenir: 'Ayacucho Quinua Bread', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Dubai
{ tara: 'United Arab Emirates (AE)', oras: 'Dubai', suvenir: 'Burj Khalifa Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Dubai', suvenir: 'Dubai Dates', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Dubai', suvenir: 'Dubai Camel Milk Chocolate', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Abu Dhabi
{ tara: 'United Arab Emirates (AE)', oras: 'Abu Dhabi', suvenir: 'Sheikh Zayed Mosque Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Abu Dhabi', suvenir: 'Arabian Coffee Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Abu Dhabi', suvenir: 'Abu Dhabi Falcon Souvenir', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Sharjah
{ tara: 'United Arab Emirates (AE)', oras: 'Sharjah', suvenir: 'Sharjah Heritage Book', categorie: 'Books', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Sharjah', suvenir: 'Sharjah Traditional Handicrafts', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Sharjah', suvenir: 'Sharjah Date Palm Products', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Al Ain
{ tara: 'United Arab Emirates (AE)', oras: 'Al Ain', suvenir: 'Al Ain Camel Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Al Ain', suvenir: 'Al Ain Date Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Al Ain', suvenir: 'Al Ain Sand Art Bottle', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Ras Al Khaimah
{ tara: 'United Arab Emirates (AE)', oras: 'Ras Al Khaimah', suvenir: 'Ras Al Khaimah Dhow Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Ras Al Khaimah', suvenir: 'Ras Al Khaimah Saffron', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Ras Al Khaimah', suvenir: 'Ras Al Khaimah Traditional Pottery', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Fujairah
{ tara: 'United Arab Emirates (AE)', oras: 'Fujairah', suvenir: 'Fujairah Fort Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Fujairah', suvenir: 'Fujairah Dried Fruits', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Fujairah', suvenir: 'Fujairah Pearl Jewelry', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Ajman
{ tara: 'United Arab Emirates (AE)', oras: 'Ajman', suvenir: 'Ajman Souq Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Ajman', suvenir: 'Ajman Halwa', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Ajman', suvenir: 'Ajman Pearl Diving Art', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Umm Al Quwain
{ tara: 'United Arab Emirates (AE)', oras: 'Umm Al Quwain', suvenir: 'Umm Al Quwain Pottery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Umm Al Quwain', suvenir: 'Umm Al Quwain Date Syrup', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Umm Al Quwain', suvenir: 'Umm Al Quwain Traditional Textile', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Hatta
{ tara: 'United Arab Emirates (AE)', oras: 'Hatta', suvenir: 'Hatta Dam Landscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Hatta', suvenir: 'Hatta Mountain Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Hatta', suvenir: 'Hatta Desert Sand Bottle', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Khor Fakkan
{ tara: 'United Arab Emirates (AE)', oras: 'Khor Fakkan', suvenir: 'Khor Fakkan Coral Reef Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Khor Fakkan', suvenir: 'Khor Fakkan Date Palm Products', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'United Arab Emirates (AE)', oras: 'Khor Fakkan', suvenir: 'Khor Fakkan Maritime Art', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Marrakech
{ tara: 'Morocco (MA)', oras: 'Marrakech', suvenir: 'Marrakech Medina Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Marrakech', suvenir: 'Moroccan Tea Set', categorie: 'Home', destinatari: ['lover', 'co-worker'] },
{ tara: 'Morocco (MA)', oras: 'Marrakech', suvenir: 'Marrakech Spices', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Casablanca
{ tara: 'Morocco (MA)', oras: 'Casablanca', suvenir: 'Hassan II Mosque Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Casablanca', suvenir: 'Casablanca Argan Oil', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Morocco (MA)', oras: 'Casablanca', suvenir: 'Casablanca Leather Goods', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Fes
{ tara: 'Morocco (MA)', oras: 'Fes', suvenir: 'Fes Ceramic Plate', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Fes', suvenir: 'Fes Pottery', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Morocco (MA)', oras: 'Fes', suvenir: 'Fes Dates', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Tangier
{ tara: 'Morocco (MA)', oras: 'Tangier', suvenir: 'Tangier Kasbah Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Tangier', suvenir: 'Tangier Mint Tea Set', categorie: 'Home', destinatari: ['lover', 'co-worker'] },
{ tara: 'Morocco (MA)', oras: 'Tangier', suvenir: 'Tangier Almond Cookies', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Rabat
{ tara: 'Morocco (MA)', oras: 'Rabat', suvenir: 'Rabat Royal Palace Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Rabat', suvenir: 'Rabat Souk Crafts', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Morocco (MA)', oras: 'Rabat', suvenir: 'Rabat Pastries', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Agadir
{ tara: 'Morocco (MA)', oras: 'Agadir', suvenir: 'Agadir Beach Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Agadir', suvenir: 'Agadir Argan Oil Soap', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Morocco (MA)', oras: 'Agadir', suvenir: 'Agadir Spiced Nuts', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Chefchaouen
{ tara: 'Morocco (MA)', oras: 'Chefchaouen', suvenir: 'Chefchaouen Blue Pottery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Chefchaouen', suvenir: 'Chefchaouen Wool Blanket', categorie: 'Home', destinatari: ['lover', 'co-worker'] },
{ tara: 'Morocco (MA)', oras: 'Chefchaouen', suvenir: 'Chefchaouen Almond Sweets', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Essaouira
{ tara: 'Morocco (MA)', oras: 'Essaouira', suvenir: 'Essaouira Wind Chimes', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Essaouira', suvenir: 'Essaouira Argan Oil Cosmetics', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Morocco (MA)', oras: 'Essaouira', suvenir: 'Essaouira Salted Caramel', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Meknes
{ tara: 'Morocco (MA)', oras: 'Meknes', suvenir: 'Meknes Berber Rug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Meknes', suvenir: 'Meknes Olive Oil Soap', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Morocco (MA)', oras: 'Meknes', suvenir: 'Meknes Preserved Lemons', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Ouarzazate
{ tara: 'Morocco (MA)', oras: 'Ouarzazate', suvenir: 'Ouarzazate Kasbah Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Morocco (MA)', oras: 'Ouarzazate', suvenir: 'Ouarzazate Argan Oil Soap', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Morocco (MA)', oras: 'Ouarzazate', suvenir: 'Ouarzazate Spiced Tea Blend', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Jerusalem
{ tara: 'Israel (IL)', oras: 'Jerusalem', suvenir: 'Jerusalem Cross Pendant', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Jerusalem', suvenir: 'Dead Sea Salt Scrub', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Israel (IL)', oras: 'Jerusalem', suvenir: 'Jerusalem Ceramic Plate', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Tel Aviv
{ tara: 'Israel (IL)', oras: 'Tel Aviv', suvenir: 'Tel Aviv Beach Towel', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Tel Aviv', suvenir: 'Tel Aviv Coffee Blend', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Israel (IL)', oras: 'Tel Aviv', suvenir: 'Tel Aviv Skyline Art Print', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Haifa
{ tara: 'Israel (IL)', oras: 'Haifa', suvenir: 'Haifa Olive Oil Soap', categorie: 'Beauty', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Haifa', suvenir: 'Haifa Ceramic Tile', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Israel (IL)', oras: 'Haifa', suvenir: 'Haifa Dried Fruit Assortment', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Eilat
{ tara: 'Israel (IL)', oras: 'Eilat', suvenir: 'Eilat Red Sea Coral Jewelry', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Eilat', suvenir: 'Eilat Salt Scrub', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Israel (IL)', oras: 'Eilat', suvenir: 'Eilat Date Honey', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Nazareth
{ tara: 'Israel (IL)', oras: 'Nazareth', suvenir: 'Nazareth Handmade Olive Wood Cross', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Nazareth', suvenir: 'Nazareth Holy Water', categorie: 'Religious', destinatari: ['lover', 'co-worker'] },
{ tara: 'Israel (IL)', oras: 'Nazareth', suvenir: 'Nazareth Spices Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Tiberias
{ tara: 'Israel (IL)', oras: 'Tiberias', suvenir: 'Tiberias Sea of Galilee Photo Book', categorie: 'Books', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Tiberias', suvenir: 'Tiberias Fisherman s Cap', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Israel (IL)', oras: 'Tiberias', suvenir: 'Tiberias Olive Oil', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Dead Sea
{ tara: 'Israel (IL)', oras: 'Dead Sea', suvenir: 'Dead Sea Mud Mask', categorie: 'Beauty', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Dead Sea', suvenir: 'Dead Sea Salt Scrub', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Israel (IL)', oras: 'Dead Sea', suvenir: 'Dead Sea Mineral Soap', categorie: 'Beauty', destinatari: ['acquaintance', 'relative'] },

// Ashdod
{ tara: 'Israel (IL)', oras: 'Ashdod', suvenir: 'Ashdod Beach Sand Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Ashdod', suvenir: 'Ashdod Pottery', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Israel (IL)', oras: 'Ashdod', suvenir: 'Ashdod Citrus Candies', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Acre (Akko)
{ tara: 'Israel (IL)', oras: 'Acre (Akko)', suvenir: 'Acre Fortress Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Acre (Akko)', suvenir: 'Acre Olive Oil Soap', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Israel (IL)', oras: 'Acre (Akko)', suvenir: 'Acre Baklava', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Netanya
{ tara: 'Israel (IL)', oras: 'Netanya', suvenir: 'Netanya Beach Hat', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Israel (IL)', oras: 'Netanya', suvenir: 'Netanya Wine Bottle', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Israel (IL)', oras: 'Netanya', suvenir: 'Netanya Glass Art', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Auckland
{ tara: 'New Zealand (NZ)', oras: 'Auckland', suvenir: 'Auckland Sky Tower Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Auckland', suvenir: 'Maori Carving', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'New Zealand (NZ)', oras: 'Auckland', suvenir: 'Manuka Honey', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Wellington
{ tara: 'New Zealand (NZ)', oras: 'Wellington', suvenir: 'Wellington Cable Car Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Wellington', suvenir: 'Lord of the Rings Memorabilia', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'New Zealand (NZ)', oras: 'Wellington', suvenir: 'Whittaker\'s Chocolate', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Christchurch
{ tara: 'New Zealand (NZ)', oras: 'Christchurch', suvenir: 'Christchurch Cathedral Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Christchurch', suvenir: 'Pounamu (Greenstone) Pendant', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'New Zealand (NZ)', oras: 'Christchurch', suvenir: 'New Zealand Wine', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Queenstown
{ tara: 'New Zealand (NZ)', oras: 'Queenstown', suvenir: 'Queenstown Adventure Photo Book', categorie: 'Books', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Queenstown', suvenir: 'New Zealand Merino Wool Sweater', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'New Zealand (NZ)', oras: 'Queenstown', suvenir: 'Kiwi Fruit Jam', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Rotorua
{ tara: 'New Zealand (NZ)', oras: 'Rotorua', suvenir: 'Rotorua Thermal Mud Mask', categorie: 'Beauty', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Rotorua', suvenir: 'Maori Greenstone Necklace', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'New Zealand (NZ)', oras: 'Rotorua', suvenir: 'Rotorua Manuka Honey Soap', categorie: 'Beauty', destinatari: ['acquaintance', 'relative'] },

// Dunedin
{ tara: 'New Zealand (NZ)', oras: 'Dunedin', suvenir: 'Dunedin Scottish Tartan Scarf', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Dunedin', suvenir: 'Otago Peninsula Wildlife Calendar', categorie: 'Books', destinatari: ['lover', 'co-worker'] },
{ tara: 'New Zealand (NZ)', oras: 'Dunedin', suvenir: 'Dunedin Craft Beer', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Tauranga
{ tara: 'New Zealand (NZ)', oras: 'Tauranga', suvenir: 'Tauranga Beach Hat', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Tauranga', suvenir: 'Tauranga Avocado Oil', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'New Zealand (NZ)', oras: 'Tauranga', suvenir: 'Tauranga Arts & Crafts Book', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Hamilton
{ tara: 'New Zealand (NZ)', oras: 'Hamilton', suvenir: 'Hamilton Gardens Photo Album', categorie: 'Books', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Hamilton', suvenir: 'Waikato River Cruise Ticket', categorie: 'Experience', destinatari: ['lover', 'co-worker'] },
{ tara: 'New Zealand (NZ)', oras: 'Hamilton', suvenir: 'Hamilton Honey', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Napier
{ tara: 'New Zealand (NZ)', oras: 'Napier', suvenir: 'Art Deco Napier Postcards', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Napier', suvenir: 'Hawke s Bay Wine Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'New Zealand (NZ)', oras: 'Napier', suvenir: 'Napier Marine Life Calendar', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Nelson
{ tara: 'New Zealand (NZ)', oras: 'Nelson', suvenir: 'Nelson Biking Trail Map', categorie: 'Books', destinatari: ['family', 'friend'] },
{ tara: 'New Zealand (NZ)', oras: 'Nelson', suvenir: 'Nelson Lavender Soap', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'New Zealand (NZ)', oras: 'Nelson', suvenir: 'Nelson Artisan Cheese', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Bogotá
{ tara: 'Colombia (CO)', oras: 'Bogotá', suvenir: 'Bogotá Coffee Beans', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Bogotá', suvenir: 'Botero Museum Poster', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Colombia (CO)', oras: 'Bogotá', suvenir: 'Emerald Jewelry', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Medellín
{ tara: 'Colombia (CO)', oras: 'Medellín', suvenir: 'Medellín Orchid Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Medellín', suvenir: 'Paisa Hat', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Colombia (CO)', oras: 'Medellín', suvenir: 'Coffee Tour Experience', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Cartagena
{ tara: 'Colombia (CO)', oras: 'Cartagena', suvenir: 'Cartagena Handcrafted Hammock', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Cartagena', suvenir: 'Colombian Rum', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Colombia (CO)', oras: 'Cartagena', suvenir: 'Colonial Architecture Photo Book', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Cali
{ tara: 'Colombia (CO)', oras: 'Cali', suvenir: 'Cali Salsa Music CD', categorie: 'Music', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Cali', suvenir: 'Handcrafted Leather Wallet', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Colombia (CO)', oras: 'Cali', suvenir: 'Cali Carnival Mask', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Barranquilla
{ tara: 'Colombia (CO)', oras: 'Barranquilla', suvenir: 'Barranquilla Carnival Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Barranquilla', suvenir: 'Tayrona Beach Sand Bottle', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Colombia (CO)', oras: 'Barranquilla', suvenir: 'Barranquilla Tropical Fruit Basket', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Santa Marta
{ tara: 'Colombia (CO)', oras: 'Santa Marta', suvenir: 'Santa Marta Beach Towel', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Santa Marta', suvenir: 'Tayrona National Park Photo Book', categorie: 'Books', destinatari: ['lover', 'co-worker'] },
{ tara: 'Colombia (CO)', oras: 'Santa Marta', suvenir: 'Colombian Coffee Sampler', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// San Andrés
{ tara: 'Colombia (CO)', oras: 'San Andrés', suvenir: 'San Andrés Coral Necklace', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'San Andrés', suvenir: 'San Andrés Sea Shell Art', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Colombia (CO)', oras: 'San Andrés', suvenir: 'San Andrés Rum Cake', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Bucaramanga
{ tara: 'Colombia (CO)', oras: 'Bucaramanga', suvenir: 'Bucaramanga Coffee Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Bucaramanga', suvenir: 'Bucaramanga Handmade Shawl', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Colombia (CO)', oras: 'Bucaramanga', suvenir: 'Santander Cheese Assortment', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Pereira
{ tara: 'Colombia (CO)', oras: 'Pereira', suvenir: 'Pereira Botanical Garden Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Pereira', suvenir: 'Coffee Region Sampler', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Colombia (CO)', oras: 'Pereira', suvenir: 'Pereira Traditional Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Manizales
{ tara: 'Colombia (CO)', oras: 'Manizales', suvenir: 'Manizales Coffee Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Colombia (CO)', oras: 'Manizales', suvenir: 'Manizales Mountain Landscape Photo', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Colombia (CO)', oras: 'Manizales', suvenir: 'Coffee Aroma Candle', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Sofia
{ tara: 'Bulgaria (BG)', oras: 'Sofia', suvenir: 'Sofia Alexander Nevsky Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Sofia', suvenir: 'Bulgarian Rose Oil', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bulgaria (BG)', oras: 'Sofia', suvenir: 'Sofia Street Map Poster', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Plovdiv
{ tara: 'Bulgaria (BG)', oras: 'Plovdiv', suvenir: 'Plovdiv Ancient Theatre Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Plovdiv', suvenir: 'Plovdiv Rose Perfume', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bulgaria (BG)', oras: 'Plovdiv', suvenir: 'Thracian Wine Selection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Varna
{ tara: 'Bulgaria (BG)', oras: 'Varna', suvenir: 'Varna Sea Garden Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Varna', suvenir: 'Black Sea Pearl Necklace', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bulgaria (BG)', oras: 'Varna', suvenir: 'Bulgarian Rakia Assortment', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Burgas
{ tara: 'Bulgaria (BG)', oras: 'Burgas', suvenir: 'Burgas Beach Sand Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Burgas', suvenir: 'Bulgarian Lavender Soap', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bulgaria (BG)', oras: 'Burgas', suvenir: 'Burgas Fishermen s Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Ruse
{ tara: 'Bulgaria (BG)', oras: 'Ruse', suvenir: 'Ruse Danube River Cruise Ticket', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Ruse', suvenir: 'Ruse Antique Architecture Print', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bulgaria (BG)', oras: 'Ruse', suvenir: 'Bulgarian Wine Selection', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Stara Zagora
{ tara: 'Bulgaria (BG)', oras: 'Stara Zagora', suvenir: 'Stara Zagora Roman Mosaics Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Stara Zagora', suvenir: 'Thracian Wine Flask', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bulgaria (BG)', oras: 'Stara Zagora', suvenir: 'Bulgarian Rose Beauty Set', categorie: 'Beauty', destinatari: ['acquaintance', 'relative'] },

// Pleven
{ tara: 'Bulgaria (BG)', oras: 'Pleven', suvenir: 'Pleven Military Museum Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Pleven', suvenir: 'Bulgarian Wine Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bulgaria (BG)', oras: 'Pleven', suvenir: 'Pleven Rose Garden Seeds', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Veliko Tarnovo
{ tara: 'Bulgaria (BG)', oras: 'Veliko Tarnovo', suvenir: 'Veliko Tarnovo Tsarevets Fortress Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Veliko Tarnovo', suvenir: 'Bulgarian Traditional Embroidery', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bulgaria (BG)', oras: 'Veliko Tarnovo', suvenir: 'Veliko Tarnovo Craft Beer Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Blagoevgrad
{ tara: 'Bulgaria (BG)', oras: 'Blagoevgrad', suvenir: 'Blagoevgrad Pirin Mountain Hiking Map', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Blagoevgrad', suvenir: 'Bulgarian Yogurt Culture Kit', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bulgaria (BG)', oras: 'Blagoevgrad', suvenir: 'Rhodope Mountain Honey', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Bansko
{ tara: 'Bulgaria (BG)', oras: 'Bansko', suvenir: 'Bansko Ski Resort Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bulgaria (BG)', oras: 'Bansko', suvenir: 'Bulgarian Herbal Tea Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bulgaria (BG)', oras: 'Bansko', suvenir: 'Bansko Snow Globe', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Riyadh
{ tara: 'Saudi Arabia (SA)', oras: 'Riyadh', suvenir: 'Riyadh Skyline Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Riyadh', suvenir: 'Traditional Saudi Arabian Dates', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Riyadh', suvenir: 'Camel Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Jeddah
{ tara: 'Saudi Arabia (SA)', oras: 'Jeddah', suvenir: 'Jeddah Old Town Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Jeddah', suvenir: 'Arabian Coffee Blend', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Jeddah', suvenir: 'Gold-Plated Arabic Calligraphy Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Mecca
{ tara: 'Saudi Arabia (SA)', oras: 'Mecca', suvenir: 'Mecca Prayer Mat', categorie: 'Religious', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Mecca', suvenir: 'Dates from Mecca Region', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Mecca', suvenir: 'Mecca Tower Souvenir Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Medina
{ tara: 'Saudi Arabia (SA)', oras: 'Medina', suvenir: 'Medina Mosque Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Medina', suvenir: 'Medina Ajwa Dates', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Medina', suvenir: 'Medina Sandalwood Perfume', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Dammam
{ tara: 'Saudi Arabia (SA)', oras: 'Dammam', suvenir: 'Dammam Oil Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Dammam', suvenir: 'Dammam Spices Mix', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Dammam', suvenir: 'Pearl Diving Handcrafted Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Al Khobar
{ tara: 'Saudi Arabia (SA)', oras: 'Al Khobar', suvenir: 'Al Khobar Cityscape Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Al Khobar', suvenir: 'Eastern Province Dates', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Al Khobar', suvenir: 'Handcrafted Pearl Bracelet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Abha
{ tara: 'Saudi Arabia (SA)', oras: 'Abha', suvenir: 'Abha Mountain Landscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Abha', suvenir: 'Abha Mountain Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Abha', suvenir: 'Traditional Abha Shawl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Taif
{ tara: 'Saudi Arabia (SA)', oras: 'Taif', suvenir: 'Taif Rose Oil', categorie: 'Beauty', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Taif', suvenir: 'Taif Dates with Almonds', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Taif', suvenir: 'Handcrafted Taif Ceramic Vase', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Jubail
{ tara: 'Saudi Arabia (SA)', oras: 'Jubail', suvenir: 'Jubail Industrial City Photo Frame', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Jubail', suvenir: 'Jubail Dates Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Jubail', suvenir: 'Jubail Oil Refinery Model', categorie: 'Science', destinatari: ['acquaintance', 'relative'] },

// Yanbu
{ tara: 'Saudi Arabia (SA)', oras: 'Yanbu', suvenir: 'Yanbu Red Sea Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Yanbu', suvenir: 'Yanbu Dried Dates', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Saudi Arabia (SA)', oras: 'Yanbu', suvenir: 'Handcrafted Yanbu Pearl Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Budapest
{ tara: 'Hungary (HU)', oras: 'Budapest', suvenir: 'Budapest Chain Bridge Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Budapest', suvenir: 'Hungarian Paprika Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Hungary (HU)', oras: 'Budapest', suvenir: 'Budapest Danube River Cruise Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Debrecen
{ tara: 'Hungary (HU)', oras: 'Debrecen', suvenir: 'Debrecen Reformed Great Church Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Debrecen', suvenir: 'Hungarian Tokaji Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Hungary (HU)', oras: 'Debrecen', suvenir: 'Debrecen Hortobágy National Park Painting', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Szeged
{ tara: 'Hungary (HU)', oras: 'Szeged', suvenir: 'Szeged Votive Church Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Szeged', suvenir: 'Hungarian Paprika String', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Hungary (HU)', oras: 'Szeged', suvenir: 'Szeged Open-Air Festival Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Miskolc
{ tara: 'Hungary (HU)', oras: 'Miskolc', suvenir: 'Miskolc Avas Lookout Tower Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Miskolc', suvenir: 'Hungarian Tokaji Aszú Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Hungary (HU)', oras: 'Miskolc', suvenir: 'Miskolc National Theatre Painting', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Pécs
{ tara: 'Hungary (HU)', oras: 'Pécs', suvenir: 'Pécs Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Pécs', suvenir: 'Hungarian Folk Art Embroidery', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Hungary (HU)', oras: 'Pécs', suvenir: 'Pécs Zsolnay Porcelain', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Győr
{ tara: 'Hungary (HU)', oras: 'Győr', suvenir: 'Győr Bishop s Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Győr', suvenir: 'Hungarian Salami Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Hungary (HU)', oras: 'Győr', suvenir: 'Győr Rába Quelle Thermal Bath Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Nyíregyháza
{ tara: 'Hungary (HU)', oras: 'Nyíregyháza', suvenir: 'Nyíregyháza Zoo Souvenir', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Nyíregyháza', suvenir: 'Hungarian Tokaji Essencia Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Hungary (HU)', oras: 'Nyíregyháza', suvenir: 'Nyíregyháza Aquarius Water Park Pass', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Kecskemét
{ tara: 'Hungary (HU)', oras: 'Kecskemét', suvenir: 'Kecskemét Mercedes-Benz Factory Tour Pass', categorie: 'Experience', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Kecskemét', suvenir: 'Hungarian Apricot Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Hungary (HU)', oras: 'Kecskemét', suvenir: 'Kecskemét Folk Art Pottery', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Székesfehérvár
{ tara: 'Hungary (HU)', oras: 'Székesfehérvár', suvenir: 'Székesfehérvár Royal Palace Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Székesfehérvár', suvenir: 'Hungarian Pick Salami', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Hungary (HU)', oras: 'Székesfehérvár', suvenir: 'Székesfehérvár Bory Castle Ticket', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Eger
{ tara: 'Hungary (HU)', oras: 'Eger', suvenir: 'Eger Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Hungary (HU)', oras: 'Eger', suvenir: 'Hungarian Bull s Blood Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Hungary (HU)', oras: 'Eger', suvenir: 'Eger Thermal Bath Pass', categorie: 'Experience', destinatari: ['acquaintance', 'relative'] },

// Tunis
{ tara: 'Tunisia (TN)', oras: 'Tunis', suvenir: 'Tunisian Ceramic Plate', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Tunis', suvenir: 'Traditional Tunisian Carpet', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tunisia (TN)', oras: 'Tunis', suvenir: 'Dates from Medjool Oasis', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Sousse
{ tara: 'Tunisia (TN)', oras: 'Sousse', suvenir: 'Sousse Beach Towel', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Sousse', suvenir: 'Spices and Herbs Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tunisia (TN)', oras: 'Sousse', suvenir: 'Sousse Medina Lantern', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Hammamet
{ tara: 'Tunisia (TN)', oras: 'Hammamet', suvenir: 'Hammamet Ceramic Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Hammamet', suvenir: 'Olive Oil Soap Set', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tunisia (TN)', oras: 'Hammamet', suvenir: 'Hammamet Beach Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Monastir
{ tara: 'Tunisia (TN)', oras: 'Monastir', suvenir: 'Monastir Embroidered Scarf', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Monastir', suvenir: 'Traditional Pottery from Monastir', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tunisia (TN)', oras: 'Monastir', suvenir: 'Monastir Olive Wood Kitchen Utensils', categorie: 'Household', destinatari: ['acquaintance', 'relative'] },

// Djerba
{ tara: 'Tunisia (TN)', oras: 'Djerba', suvenir: 'Djerba Ceramic Wall Tile', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Djerba', suvenir: 'Saffron Threads from Djerba', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tunisia (TN)', oras: 'Djerba', suvenir: 'Djerba Handwoven Basket', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Carthage
{ tara: 'Tunisia (TN)', oras: 'Carthage', suvenir: 'Carthage Ancient Coin Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Carthage', suvenir: 'Carthage Punic Jug', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tunisia (TN)', oras: 'Carthage', suvenir: 'Carthage History Book', categorie: 'Books', destinatari: ['acquaintance', 'relative'] },

// Tozeur
{ tara: 'Tunisia (TN)', oras: 'Tozeur', suvenir: 'Tozeur Desert Sand Art Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Tozeur', suvenir: 'Tozeur Dates and Nuts Mix', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tunisia (TN)', oras: 'Tozeur', suvenir: 'Tozeur Camel Leather Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Mahdia
{ tara: 'Tunisia (TN)', oras: 'Mahdia', suvenir: 'Mahdia Pottery Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Mahdia', suvenir: 'Mahdia Silver Filigree Jewelry', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tunisia (TN)', oras: 'Mahdia', suvenir: 'Mahdia Beach Towel', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Bizerte
{ tara: 'Tunisia (TN)', oras: 'Bizerte', suvenir: 'Bizerte Seashell Collection', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Bizerte', suvenir: 'Bizerte Ceramic Plate', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tunisia (TN)', oras: 'Bizerte', suvenir: 'Bizerte Olive Oil Soap Set', categorie: 'Beauty', destinatari: ['acquaintance', 'relative'] },

// Douz
{ tara: 'Tunisia (TN)', oras: 'Douz', suvenir: 'Douz Desert Sand Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tunisia (TN)', oras: 'Douz', suvenir: 'Traditional Douz Bedouin Rug', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tunisia (TN)', oras: 'Douz', suvenir: 'Douz Camel Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

////
//
//
//
// Santo Domingo
{ tara: 'Dominican Republic (DO)', oras: 'Santo Domingo', suvenir: 'Amber Jewelry', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Dominican Republic (DO)', oras: 'Santo Domingo', suvenir: 'Dominican Coffee', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Dominican Republic (DO)', oras: 'Santo Domingo', suvenir: 'Larimar Stone', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Punta Cana
{ tara: 'Dominican Republic (DO)', oras: 'Punta Cana', suvenir: 'Beach Sand Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Dominican Republic (DO)', oras: 'Punta Cana', suvenir: 'Coconut Oil', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Dominican Republic (DO)', oras: 'Punta Cana', suvenir: 'Punta Cana T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Puerto Plata
{ tara: 'Dominican Republic (DO)', oras: 'Puerto Plata', suvenir: 'Rum Bottle', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'Dominican Republic (DO)', oras: 'Puerto Plata', suvenir: 'Puerto Plata Lighthouse Model', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Dominican Republic (DO)', oras: 'Puerto Plata', suvenir: 'Handmade Leather Goods', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// La Romana
{ tara: 'Dominican Republic (DO)', oras: 'La Romana', suvenir: 'Altos de Chavón Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Dominican Republic (DO)', oras: 'La Romana', suvenir: 'La Romana Coffee Mug', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Dominican Republic (DO)', oras: 'La Romana', suvenir: 'Dominican Rum Cake', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Santiago de los Caballeros
{ tara: 'Dominican Republic (DO)', oras: 'Santiago de los Caballeros', suvenir: 'Cigar Box', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Dominican Republic (DO)', oras: 'Santiago de los Caballeros', suvenir: 'Merengue Music CD', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Dominican Republic (DO)', oras: 'Santiago de los Caballeros', suvenir: 'Handcrafted Woodwork', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Boca Chica
{ tara: 'Dominican Republic (DO)', oras: 'Boca Chica', suvenir: 'Seashell Jewelry', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Dominican Republic (DO)', oras: 'Boca Chica', suvenir: 'Boca Chica Beach Towel', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Dominican Republic (DO)', oras: 'Boca Chica', suvenir: 'Local Spices Set', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Juan Dolio
{ tara: 'Dominican Republic (DO)', oras: 'Juan Dolio', suvenir: 'Handwoven Basket', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Dominican Republic (DO)', oras: 'Juan Dolio', suvenir: 'Dominican Craft Beer', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Dominican Republic (DO)', oras: 'Juan Dolio', suvenir: 'Beach Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Samana
{ tara: 'Dominican Republic (DO)', oras: 'Samana', suvenir: 'Whale Watching Souvenir', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Dominican Republic (DO)', oras: 'Samana', suvenir: 'Samana Bay Picture Frame', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Dominican Republic (DO)', oras: 'Samana', suvenir: 'Tropical Fruit Jam', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Cabarete
{ tara: 'Dominican Republic (DO)', oras: 'Cabarete', suvenir: 'Kite Surfing T-shirt', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Dominican Republic (DO)', oras: 'Cabarete', suvenir: 'Cabarete Beach Poster', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Dominican Republic (DO)', oras: 'Cabarete', suvenir: 'Dominican Honey', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Jarabacoa
{ tara: 'Dominican Republic (DO)', oras: 'Jarabacoa', suvenir: 'Jarabacoa Mountain Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Dominican Republic (DO)', oras: 'Jarabacoa', suvenir: 'Handmade Ceramics', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Dominican Republic (DO)', oras: 'Jarabacoa', suvenir: 'Jarabacoa Coffee', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Doha
{ tara: 'Qatar (QA)', oras: 'Doha', suvenir: 'Pearl Jewelry', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Qatar (QA)', oras: 'Doha', suvenir: 'Qatari Dates', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Qatar (QA)', oras: 'Doha', suvenir: 'Desert Safari Photo Frame', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Al Wakrah
{ tara: 'Qatar (QA)', oras: 'Al Wakrah', suvenir: 'Handwoven Baskets', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Qatar (QA)', oras: 'Al Wakrah', suvenir: 'Traditional Spices', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Qatar (QA)', oras: 'Al Wakrah', suvenir: 'Al Wakrah Beach T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Al Khor
{ tara: 'Qatar (QA)', oras: 'Al Khor', suvenir: 'Dhow Boat Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Qatar (QA)', oras: 'Al Khor', suvenir: 'Qatari Sweets', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Qatar (QA)', oras: 'Al Khor', suvenir: 'Al Khor Souvenir Mug', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Al Rayyan
{ tara: 'Qatar (QA)', oras: 'Al Rayyan', suvenir: 'Al Rayyan Sports Jersey', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Qatar (QA)', oras: 'Al Rayyan', suvenir: 'Arabic Coffee Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Qatar (QA)', oras: 'Al Rayyan', suvenir: 'Handmade Pottery', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Al Shamal
{ tara: 'Qatar (QA)', oras: 'Al Shamal', suvenir: 'Beach Shell Decor', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Qatar (QA)', oras: 'Al Shamal', suvenir: 'Local Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Qatar (QA)', oras: 'Al Shamal', suvenir: 'Al Shamal Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Mesaieed
{ tara: 'Qatar (QA)', oras: 'Mesaieed', suvenir: 'Sand Art Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Qatar (QA)', oras: 'Mesaieed', suvenir: 'Desert Rose', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Qatar (QA)', oras: 'Mesaieed', suvenir: 'Mesaieed T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Dukhan
{ tara: 'Qatar (QA)', oras: 'Dukhan', suvenir: 'Seashell Jewelry', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Qatar (QA)', oras: 'Dukhan', suvenir: 'Qatari Pastries', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Qatar (QA)', oras: 'Dukhan', suvenir: 'Dukhan Beach Poster', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Madinat ash Shamal
{ tara: 'Qatar (QA)', oras: 'Madinat ash Shamal', suvenir: 'Handcrafted Carpets', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Qatar (QA)', oras: 'Madinat ash Shamal', suvenir: 'Local Olives', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Qatar (QA)', oras: 'Madinat ash Shamal', suvenir: 'Madinat ash Shamal T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Ras Laffan
{ tara: 'Qatar (QA)', oras: 'Ras Laffan', suvenir: 'Oil Rig Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Qatar (QA)', oras: 'Ras Laffan', suvenir: 'Ras Laffan Dates', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Qatar (QA)', oras: 'Ras Laffan', suvenir: 'Ras Laffan Cap', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Umm Salal
{ tara: 'Qatar (QA)', oras: 'Umm Salal', suvenir: 'Handmade Cushions', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Qatar (QA)', oras: 'Umm Salal', suvenir: 'Qatari Tea', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Qatar (QA)', oras: 'Umm Salal', suvenir: 'Umm Salal T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Santiago
{ tara: 'Chile (CL)', oras: 'Santiago', suvenir: 'Lapis Lazuli Jewelry', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Chile (CL)', oras: 'Santiago', suvenir: 'Chilean Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chile (CL)', oras: 'Santiago', suvenir: 'Andean Art Print', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Valparaíso
{ tara: 'Chile (CL)', oras: 'Valparaíso', suvenir: 'Valparaíso Street Art Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Chile (CL)', oras: 'Valparaíso', suvenir: 'Chilean Empanadas', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chile (CL)', oras: 'Valparaíso', suvenir: 'Valparaíso Magnet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Viña del Mar
{ tara: 'Chile (CL)', oras: 'Viña del Mar', suvenir: 'Beach Shell Jewelry', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Chile (CL)', oras: 'Viña del Mar', suvenir: 'Chilean Chocolates', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chile (CL)', oras: 'Viña del Mar', suvenir: 'Viña del Mar Postcard', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// San Pedro de Atacama
{ tara: 'Chile (CL)', oras: 'San Pedro de Atacama', suvenir: 'Atacama Desert Photo Book', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Chile (CL)', oras: 'San Pedro de Atacama', suvenir: 'Chilean Desert Herbs', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chile (CL)', oras: 'San Pedro de Atacama', suvenir: 'Atacama Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Puerto Varas
{ tara: 'Chile (CL)', oras: 'Puerto Varas', suvenir: 'Handmade Woolen Scarf', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Chile (CL)', oras: 'Puerto Varas', suvenir: 'Chilean Smoked Salmon', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chile (CL)', oras: 'Puerto Varas', suvenir: 'Lake Llanquihue Print', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Punta Arenas
{ tara: 'Chile (CL)', oras: 'Punta Arenas', suvenir: 'Penguin Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Chile (CL)', oras: 'Punta Arenas', suvenir: 'Patagonian Lamb', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chile (CL)', oras: 'Punta Arenas', suvenir: 'Patagonia T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Puerto Montt
{ tara: 'Chile (CL)', oras: 'Puerto Montt', suvenir: 'Chilean Wood Carving', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Chile (CL)', oras: 'Puerto Montt', suvenir: 'Chilean Sea Salt', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chile (CL)', oras: 'Puerto Montt', suvenir: 'Puerto Montt Cap', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// La Serena
{ tara: 'Chile (CL)', oras: 'La Serena', suvenir: 'Handcrafted Jewelry', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Chile (CL)', oras: 'La Serena', suvenir: 'Chilean Pisco', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chile (CL)', oras: 'La Serena', suvenir: 'La Serena Lighthouse Magnet', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Iquique
{ tara: 'Chile (CL)', oras: 'Iquique', suvenir: 'Handwoven Blanket', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Chile (CL)', oras: 'Iquique', suvenir: 'Chilean Olive Oil', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chile (CL)', oras: 'Iquique', suvenir: 'Iquique Surfing T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Pucón
{ tara: 'Chile (CL)', oras: 'Pucón', suvenir: 'Volcano Villarrica Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Chile (CL)', oras: 'Pucón', suvenir: 'Chilean Artisan Cheese', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chile (CL)', oras: 'Pucón', suvenir: 'Pucón Adventure T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Bratislava
{ tara: 'Slovakia (SK)', oras: 'Bratislava', suvenir: 'Bratislava Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Slovakia (SK)', oras: 'Bratislava', suvenir: 'Slovak Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Slovakia (SK)', oras: 'Bratislava', suvenir: 'Hand-painted Slovak Pottery', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Košice
{ tara: 'Slovakia (SK)', oras: 'Košice', suvenir: 'Košice Souvenir Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Slovakia (SK)', oras: 'Košice', suvenir: 'Traditional Slovak Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Slovakia (SK)', oras: 'Košice', suvenir: 'Košice T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Prešov
{ tara: 'Slovakia (SK)', oras: 'Prešov', suvenir: 'Prešov Postcard Set', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Slovakia (SK)', oras: 'Prešov', suvenir: 'Slovak Cheese', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Slovakia (SK)', oras: 'Prešov', suvenir: 'Prešov Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Žilina
{ tara: 'Slovakia (SK)', oras: 'Žilina', suvenir: 'Handmade Žilina Ceramics', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Slovakia (SK)', oras: 'Žilina', suvenir: 'Slovak Salami', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Slovakia (SK)', oras: 'Žilina', suvenir: 'Žilina Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Nitra
{ tara: 'Slovakia (SK)', oras: 'Nitra', suvenir: 'Nitra Castle Magnet', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Slovakia (SK)', oras: 'Nitra', suvenir: 'Slovak Beer', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Slovakia (SK)', oras: 'Nitra', suvenir: 'Nitra Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Banská Bystrica
{ tara: 'Slovakia (SK)', oras: 'Banská Bystrica', suvenir: 'Banská Bystrica Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Slovakia (SK)', oras: 'Banská Bystrica', suvenir: 'Slovak Honey Cake', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Slovakia (SK)', oras: 'Banská Bystrica', suvenir: 'Banská Bystrica Hoodie', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Trnava
{ tara: 'Slovakia (SK)', oras: 'Trnava', suvenir: 'Trnava Cathedral Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Slovakia (SK)', oras: 'Trnava', suvenir: 'Slovak Pastries', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Slovakia (SK)', oras: 'Trnava', suvenir: 'Trnava T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Trenčín
{ tara: 'Slovakia (SK)', oras: 'Trenčín', suvenir: 'Trenčín Castle Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Slovakia (SK)', oras: 'Trenčín', suvenir: 'Slovak Spirits', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Slovakia (SK)', oras: 'Trenčín', suvenir: 'Trenčín Cap', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Martin
{ tara: 'Slovakia (SK)', oras: 'Martin', suvenir: 'Martin Folk Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Slovakia (SK)', oras: 'Martin', suvenir: 'Slovak Sausage', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Slovakia (SK)', oras: 'Martin', suvenir: 'Martin Beanie', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Poprad
{ tara: 'Slovakia (SK)', oras: 'Poprad', suvenir: 'High Tatras Souvenir', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Slovakia (SK)', oras: 'Poprad', suvenir: 'Poprad Coffee', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Slovakia (SK)', oras: 'Poprad', suvenir: 'Poprad Backpack', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Muscat
{ tara: 'Oman (OM)', oras: 'Muscat', suvenir: 'Frankincense Burner', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Oman (OM)', oras: 'Muscat', suvenir: 'Omani Dates', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Oman (OM)', oras: 'Muscat', suvenir: 'Muscat Souvenir Plate', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Salalah
{ tara: 'Oman (OM)', oras: 'Salalah', suvenir: 'Salalah Frankincense', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Oman (OM)', oras: 'Salalah', suvenir: 'Omani Halwa', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Oman (OM)', oras: 'Salalah', suvenir: 'Salalah Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Nizwa
{ tara: 'Oman (OM)', oras: 'Nizwa', suvenir: 'Nizwa Fort Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Oman (OM)', oras: 'Nizwa', suvenir: 'Omani Spices', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Oman (OM)', oras: 'Nizwa', suvenir: 'Nizwa Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Sohar
{ tara: 'Oman (OM)', oras: 'Sohar', suvenir: 'Sohar Castle Magnet', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Oman (OM)', oras: 'Sohar', suvenir: 'Omani Coffee', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Oman (OM)', oras: 'Sohar', suvenir: 'Sohar Cap', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Sur
{ tara: 'Oman (OM)', oras: 'Sur', suvenir: 'Sur Dhow Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Oman (OM)', oras: 'Sur', suvenir: 'Omani Sweets', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Oman (OM)', oras: 'Sur', suvenir: 'Sur T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Barka
{ tara: 'Oman (OM)', oras: 'Barka', suvenir: 'Barka Handicrafts', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Oman (OM)', oras: 'Barka', suvenir: 'Omani Fish Sauce', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Oman (OM)', oras: 'Barka', suvenir: 'Barka Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Al Rustaq
{ tara: 'Oman (OM)', oras: 'Al Rustaq', suvenir: 'Al Rustaq Fort Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Oman (OM)', oras: 'Al Rustaq', suvenir: 'Omani Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Oman (OM)', oras: 'Al Rustaq', suvenir: 'Al Rustaq Mug', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Khasab
{ tara: 'Oman (OM)', oras: 'Khasab', suvenir: 'Khasab Dhow Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Oman (OM)', oras: 'Khasab', suvenir: 'Omani Dried Fish', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Oman (OM)', oras: 'Khasab', suvenir: 'Khasab Souvenir Coin', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Ibra
{ tara: 'Oman (OM)', oras: 'Ibra', suvenir: 'Ibra Silver Jewelry', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Oman (OM)', oras: 'Ibra', suvenir: 'Omani Bread', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Oman (OM)', oras: 'Ibra', suvenir: 'Ibra Bracelet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Bahla
{ tara: 'Oman (OM)', oras: 'Bahla', suvenir: 'Bahla Pottery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Oman (OM)', oras: 'Bahla', suvenir: 'Omani Dates Syrup', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Oman (OM)', oras: 'Bahla', suvenir: 'Bahla Souvenir Book', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Minsk
{ tara: 'Belarus (BY)', oras: 'Minsk', suvenir: 'Minsk Skyline Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belarus (BY)', oras: 'Minsk', suvenir: 'Belarusian Chocolates', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belarus (BY)', oras: 'Minsk', suvenir: 'Minsk Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Brest
{ tara: 'Belarus (BY)', oras: 'Brest', suvenir: 'Brest Fortress Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belarus (BY)', oras: 'Brest', suvenir: 'Belarusian Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belarus (BY)', oras: 'Brest', suvenir: 'Brest Souvenir Mug', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Hrodna
{ tara: 'Belarus (BY)', oras: 'Hrodna', suvenir: 'Hrodna Castle Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belarus (BY)', oras: 'Hrodna', suvenir: 'Belarusian Cheese', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belarus (BY)', oras: 'Hrodna', suvenir: 'Hrodna Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Gomel
{ tara: 'Belarus (BY)', oras: 'Gomel', suvenir: 'Gomel Palace Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belarus (BY)', oras: 'Gomel', suvenir: 'Belarusian Mead', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belarus (BY)', oras: 'Gomel', suvenir: 'Gomel T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Vitebsk
{ tara: 'Belarus (BY)', oras: 'Vitebsk', suvenir: 'Vitebsk Landscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belarus (BY)', oras: 'Vitebsk', suvenir: 'Belarusian Bread', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belarus (BY)', oras: 'Vitebsk', suvenir: 'Vitebsk Cap', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Mogilev
{ tara: 'Belarus (BY)', oras: 'Mogilev', suvenir: 'Mogilev Clock Tower Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belarus (BY)', oras: 'Mogilev', suvenir: 'Belarusian Tea', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belarus (BY)', oras: 'Mogilev', suvenir: 'Mogilev Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Pinsk
{ tara: 'Belarus (BY)', oras: 'Pinsk', suvenir: 'Pinsk Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belarus (BY)', oras: 'Pinsk', suvenir: 'Belarusian Cookies', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belarus (BY)', oras: 'Pinsk', suvenir: 'Pinsk Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Baranovichi
{ tara: 'Belarus (BY)', oras: 'Baranovichi', suvenir: 'Baranovichi Train Station Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belarus (BY)', oras: 'Baranovichi', suvenir: 'Belarusian Pickles', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belarus (BY)', oras: 'Baranovichi', suvenir: 'Baranovichi Souvenir Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Orsha
{ tara: 'Belarus (BY)', oras: 'Orsha', suvenir: 'Orsha Battle Monument Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belarus (BY)', oras: 'Orsha', suvenir: 'Belarusian Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belarus (BY)', oras: 'Orsha', suvenir: 'Orsha Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Babruysk
{ tara: 'Belarus (BY)', oras: 'Babruysk', suvenir: 'Babruysk Fortress Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Belarus (BY)', oras: 'Babruysk', suvenir: 'Belarusian Sausage', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Belarus (BY)', oras: 'Babruysk', suvenir: 'Babruysk Souvenir Pen', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Almaty
{ tara: 'Kazakhstan (KZ)', oras: 'Almaty', suvenir: 'Almaty Apple Statue', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Almaty', suvenir: 'Kazakh Chocolates', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Almaty', suvenir: 'Almaty Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Nur-Sultan (Astana)
{ tara: 'Kazakhstan (KZ)', oras: 'Nur-Sultan (Astana)', suvenir: 'Baiterek Tower Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Nur-Sultan (Astana)', suvenir: 'Kazakh Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Nur-Sultan (Astana)', suvenir: 'Astana Souvenir Mug', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Shymkent
{ tara: 'Kazakhstan (KZ)', oras: 'Shymkent', suvenir: 'Shymkent Silk Scarf', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Shymkent', suvenir: 'Kazakh Dried Fruits', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Shymkent', suvenir: 'Shymkent Souvenir Plate', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Aktobe
{ tara: 'Kazakhstan (KZ)', oras: 'Aktobe', suvenir: 'Aktobe Fortress Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Aktobe', suvenir: 'Kazakh Biscuits', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Aktobe', suvenir: 'Aktobe Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Karaganda
{ tara: 'Kazakhstan (KZ)', oras: 'Karaganda', suvenir: 'Karaganda Coal Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Karaganda', suvenir: 'Kazakh Cheese', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Karaganda', suvenir: 'Karaganda T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Taraz
{ tara: 'Kazakhstan (KZ)', oras: 'Taraz', suvenir: 'Taraz Historic Site Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Taraz', suvenir: 'Kazakh Tea', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Taraz', suvenir: 'Taraz Souvenir Mug', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Pavlodar
{ tara: 'Kazakhstan (KZ)', oras: 'Pavlodar', suvenir: 'Pavlodar Mosque Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Pavlodar', suvenir: 'Kazakh Sweets', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Pavlodar', suvenir: 'Pavlodar Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Ust-Kamenogorsk
{ tara: 'Kazakhstan (KZ)', oras: 'Ust-Kamenogorsk', suvenir: 'Ust-Kamenogorsk Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Ust-Kamenogorsk', suvenir: 'Kazakh Spices', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Ust-Kamenogorsk', suvenir: 'Ust-Kamenogorsk Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kyzylorda
{ tara: 'Kazakhstan (KZ)', oras: 'Kyzylorda', suvenir: 'Kyzylorda Embroidery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Kyzylorda', suvenir: 'Kazakh Bread', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Kyzylorda', suvenir: 'Kyzylorda Souvenir Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kostanay
{ tara: 'Kazakhstan (KZ)', oras: 'Kostanay', suvenir: 'Kostanay Tower Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Kostanay', suvenir: 'Kazakh Nuts', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Kazakhstan (KZ)', oras: 'Kostanay', suvenir: 'Kostanay Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Riga
{ tara: 'Latvia (LV)', oras: 'Riga', suvenir: 'Riga Black Balsam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Latvia (LV)', oras: 'Riga', suvenir: 'Riga Dome Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Latvia (LV)', oras: 'Riga', suvenir: 'Riga Souvenir Mug', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Jurmala
{ tara: 'Latvia (LV)', oras: 'Jurmala', suvenir: 'Jurmala Beach Sand Jar', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Latvia (LV)', oras: 'Jurmala', suvenir: 'Latvian Amber Jewelry', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Latvia (LV)', oras: 'Jurmala', suvenir: 'Jurmala Souvenir T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Liepaja
{ tara: 'Latvia (LV)', oras: 'Liepaja', suvenir: 'Liepaja Musical Notes', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Latvia (LV)', oras: 'Liepaja', suvenir: 'Latvian Rye Bread', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Latvia (LV)', oras: 'Liepaja', suvenir: 'Liepaja Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Daugavpils
{ tara: 'Latvia (LV)', oras: 'Daugavpils', suvenir: 'Daugavpils Fortress Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Latvia (LV)', oras: 'Daugavpils', suvenir: 'Latvian Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Latvia (LV)', oras: 'Daugavpils', suvenir: 'Daugavpils Souvenir Plate', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Ventspils
{ tara: 'Latvia (LV)', oras: 'Ventspils', suvenir: 'Ventspils Lighthouse Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Latvia (LV)', oras: 'Ventspils', suvenir: 'Latvian Sausages', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Latvia (LV)', oras: 'Ventspils', suvenir: 'Ventspils Souvenir Mug', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Sigulda
{ tara: 'Latvia (LV)', oras: 'Sigulda', suvenir: 'Sigulda Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Latvia (LV)', oras: 'Sigulda', suvenir: 'Latvian Berries', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Latvia (LV)', oras: 'Sigulda', suvenir: 'Sigulda Souvenir Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Cesis
{ tara: 'Latvia (LV)', oras: 'Cesis', suvenir: 'Cesis Medieval Sword Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Latvia (LV)', oras: 'Cesis', suvenir: 'Latvian Cheese', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Latvia (LV)', oras: 'Cesis', suvenir: 'Cesis Souvenir Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Valmiera
{ tara: 'Latvia (LV)', oras: 'Valmiera', suvenir: 'Valmiera Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Latvia (LV)', oras: 'Valmiera', suvenir: 'Latvian Chocolate', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Latvia (LV)', oras: 'Valmiera', suvenir: 'Valmiera Souvenir T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Rezekne
{ tara: 'Latvia (LV)', oras: 'Rezekne', suvenir: 'Rezekne Cultural Monument Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Latvia (LV)', oras: 'Rezekne', suvenir: 'Latvian Smoked Fish', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Latvia (LV)', oras: 'Rezekne', suvenir: 'Rezekne Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Jelgava
{ tara: 'Latvia (LV)', oras: 'Jelgava', suvenir: 'Jelgava Palace Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Latvia (LV)', oras: 'Jelgava', suvenir: 'Latvian Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Latvia (LV)', oras: 'Jelgava', suvenir: 'Jelgava Souvenir Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Vilnius
{ tara: 'Lithuania (LT)', oras: 'Vilnius', suvenir: 'Vilnius Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lithuania (LT)', oras: 'Vilnius', suvenir: 'Lithuanian Amber Jewelry', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lithuania (LT)', oras: 'Vilnius', suvenir: 'Vilnius Souvenir Magnet', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Kaunas
{ tara: 'Lithuania (LT)', oras: 'Kaunas', suvenir: 'Kaunas Old Town Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lithuania (LT)', oras: 'Kaunas', suvenir: 'Lithuanian Linen Towel', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lithuania (LT)', oras: 'Kaunas', suvenir: 'Kaunas Souvenir Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Klaipeda
{ tara: 'Lithuania (LT)', oras: 'Klaipeda', suvenir: 'Klaipeda Sailboat Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lithuania (LT)', oras: 'Klaipeda', suvenir: 'Lithuanian Beer Sampler', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lithuania (LT)', oras: 'Klaipeda', suvenir: 'Klaipeda Souvenir Seashell', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Šiauliai
{ tara: 'Lithuania (LT)', oras: 'Šiauliai', suvenir: 'Šiauliai Sun Sculpture', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lithuania (LT)', oras: 'Šiauliai', suvenir: 'Lithuanian Cheese', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lithuania (LT)', oras: 'Šiauliai', suvenir: 'Šiauliai Souvenir Mug', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Panevėžys
{ tara: 'Lithuania (LT)', oras: 'Panevėžys', suvenir: 'Panevėžys Clock Tower Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lithuania (LT)', oras: 'Panevėžys', suvenir: 'Lithuanian Chocolate', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lithuania (LT)', oras: 'Panevėžys', suvenir: 'Panevėžys Souvenir Pen', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Palanga
{ tara: 'Lithuania (LT)', oras: 'Palanga', suvenir: 'Palanga Amber Sun Necklace', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Lithuania (LT)', oras: 'Palanga', suvenir: 'Lithuanian Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lithuania (LT)', oras: 'Palanga', suvenir: 'Palanga Souvenir Postcard', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Druskininkai
{ tara: 'Lithuania (LT)', oras: 'Druskininkai', suvenir: 'Druskininkai Spa Soap Set', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Lithuania (LT)', oras: 'Druskininkai', suvenir: 'Lithuanian Herbal Tea', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lithuania (LT)', oras: 'Druskininkai', suvenir: 'Druskininkai Souvenir Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Trakai
{ tara: 'Lithuania (LT)', oras: 'Trakai', suvenir: 'Trakai Island Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lithuania (LT)', oras: 'Trakai', suvenir: 'Lithuanian Black Bread', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lithuania (LT)', oras: 'Trakai', suvenir: 'Trakai Souvenir Magnet', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Alytus
{ tara: 'Lithuania (LT)', oras: 'Alytus', suvenir: 'Alytus Stained Glass Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lithuania (LT)', oras: 'Alytus', suvenir: 'Lithuanian Liqueur', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lithuania (LT)', oras: 'Alytus', suvenir: 'Alytus Souvenir Bracelet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Marijampolė
{ tara: 'Lithuania (LT)', oras: 'Marijampolė', suvenir: 'Marijampolė Traditional Ceramics', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lithuania (LT)', oras: 'Marijampolė', suvenir: 'Lithuanian Birch Sap', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lithuania (LT)', oras: 'Marijampolė', suvenir: 'Marijampolė Souvenir Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Baku
{ tara: 'Azerbaijan (AZ)', oras: 'Baku', suvenir: 'Baku Miniature Carpet', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Baku', suvenir: 'Azerbaijani Silk Scarf', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Baku', suvenir: 'Baku Cityscape Magnet', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Ganja
{ tara: 'Azerbaijan (AZ)', oras: 'Ganja', suvenir: 'Ganja Traditional Pottery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Ganja', suvenir: 'Azerbaijani Fruit Preserves', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Ganja', suvenir: 'Ganja Souvenir Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Sumqayit
{ tara: 'Azerbaijan (AZ)', oras: 'Sumqayit', suvenir: 'Sumqayit Embroidered Textile', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Sumqayit', suvenir: 'Azerbaijani Tea Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Sumqayit', suvenir: 'Sumqayit Souvenir T-Shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Quba
{ tara: 'Azerbaijan (AZ)', oras: 'Quba', suvenir: 'Quba Handcrafted Rug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Quba', suvenir: 'Azerbaijani Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Quba', suvenir: 'Quba Souvenir Ceramic Plate', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Sheki
{ tara: 'Azerbaijan (AZ)', oras: 'Sheki', suvenir: 'Sheki Stained Glass Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Sheki', suvenir: 'Azerbaijani Baklava', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Sheki', suvenir: 'Sheki Souvenir Ceramic Vase', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Gabala
{ tara: 'Azerbaijan (AZ)', oras: 'Gabala', suvenir: 'Gabala Traditional Carpet', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Gabala', suvenir: 'Azerbaijani Sweets Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Gabala', suvenir: 'Gabala Souvenir Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Lankaran
{ tara: 'Azerbaijan (AZ)', oras: 'Lankaran', suvenir: 'Lankaran Traditional Ceramics', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Lankaran', suvenir: 'Azerbaijani Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Lankaran', suvenir: 'Lankaran Souvenir Magnet', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Nakhchivan
{ tara: 'Azerbaijan (AZ)', oras: 'Nakhchivan', suvenir: 'Nakhchivan Miniature Carpet', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Nakhchivan', suvenir: 'Azerbaijani Herbal Tea', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Nakhchivan', suvenir: 'Nakhchivan Souvenir Ceramic Mug', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Shamakhi
{ tara: 'Azerbaijan (AZ)', oras: 'Shamakhi', suvenir: 'Shamakhi Traditional Embroidery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Shamakhi', suvenir: 'Azerbaijani Dried Fruits', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Shamakhi', suvenir: 'Shamakhi Souvenir Bookmark', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Mingachevir
{ tara: 'Azerbaijan (AZ)', oras: 'Mingachevir', suvenir: 'Mingachevir Miniature Oil Rig', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Mingachevir', suvenir: 'Azerbaijani Pomegranate Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Azerbaijan (AZ)', oras: 'Mingachevir', suvenir: 'Mingachevir Souvenir Fridge Magnet', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Tallinn
{ tara: 'Estonia (EE)', oras: 'Tallinn', suvenir: 'Tallinn Old Town Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Estonia (EE)', oras: 'Tallinn', suvenir: 'Estonian Chocolate Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Estonia (EE)', oras: 'Tallinn', suvenir: 'Tallinn Skyline Postcard', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Tartu
{ tara: 'Estonia (EE)', oras: 'Tartu', suvenir: 'Tartu University Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Estonia (EE)', oras: 'Tartu', suvenir: 'Estonian Berry Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Estonia (EE)', oras: 'Tartu', suvenir: 'Tartu Souvenir T-Shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Pärnu
{ tara: 'Estonia (EE)', oras: 'Pärnu', suvenir: 'Pärnu Beach Sand Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Estonia (EE)', oras: 'Pärnu', suvenir: 'Estonian Marzipan', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Estonia (EE)', oras: 'Pärnu', suvenir: 'Pärnu Souvenir Seashell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Narva
{ tara: 'Estonia (EE)', oras: 'Narva', suvenir: 'Narva Castle Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Estonia (EE)', oras: 'Narva', suvenir: 'Estonian Black Bread', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Estonia (EE)', oras: 'Narva', suvenir: 'Narva Souvenir Wooden Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kuressaare
{ tara: 'Estonia (EE)', oras: 'Kuressaare', suvenir: 'Kuressaare Castle Magnet', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Estonia (EE)', oras: 'Kuressaare', suvenir: 'Estonian Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Estonia (EE)', oras: 'Kuressaare', suvenir: 'Kuressaare Souvenir Ceramic Plate', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Haapsalu
{ tara: 'Estonia (EE)', oras: 'Haapsalu', suvenir: 'Haapsalu Shawl', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Estonia (EE)', oras: 'Haapsalu', suvenir: 'Estonian Kalev Chocolate', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Estonia (EE)', oras: 'Haapsalu', suvenir: 'Haapsalu Souvenir Postcard', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Viljandi
{ tara: 'Estonia (EE)', oras: 'Viljandi', suvenir: 'Viljandi Folk Music CD', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Estonia (EE)', oras: 'Viljandi', suvenir: 'Estonian Beer Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Estonia (EE)', oras: 'Viljandi', suvenir: 'Viljandi Souvenir Wooden Spoon', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Rakvere
{ tara: 'Estonia (EE)', oras: 'Rakvere', suvenir: 'Rakvere Castle Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Estonia (EE)', oras: 'Rakvere', suvenir: 'Estonian Rye Bread', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Estonia (EE)', oras: 'Rakvere', suvenir: 'Rakvere Souvenir Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Võru
{ tara: 'Estonia (EE)', oras: 'Võru', suvenir: 'Võru Traditional Knitted Socks', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Estonia (EE)', oras: 'Võru', suvenir: 'Estonian Berry Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Estonia (EE)', oras: 'Võru', suvenir: 'Võru Souvenir Wooden Spoon', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Jõhvi
{ tara: 'Estonia (EE)', oras: 'Jõhvi', suvenir: 'Jõhvi Souvenir Fridge Magnet', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Estonia (EE)', oras: 'Jõhvi', suvenir: 'Estonian Craft Beer', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Estonia (EE)', oras: 'Jõhvi', suvenir: 'Jõhvi Souvenir T-Shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Tashkent
{ tara: 'Uzbekistan (UZ)', oras: 'Tashkent', suvenir: 'Tashkent Ceramic Plate', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Tashkent', suvenir: 'Uzbekistan Dried Fruits Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Tashkent', suvenir: 'Tashkent Souvenir Embroidered Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Samarkand
{ tara: 'Uzbekistan (UZ)', oras: 'Samarkand', suvenir: 'Samarkand Ceramic Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Samarkand', suvenir: 'Uzbekistan Spices Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Samarkand', suvenir: 'Samarkand Souvenir Silk Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Bukhara
{ tara: 'Uzbekistan (UZ)', oras: 'Bukhara', suvenir: 'Bukhara Miniature Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Bukhara', suvenir: 'Uzbekistan Nuts and Sweets Box', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Bukhara', suvenir: 'Bukhara Souvenir Handcrafted Pottery', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Khiva
{ tara: 'Uzbekistan (UZ)', oras: 'Khiva', suvenir: 'Khiva Miniature Camel', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Khiva', suvenir: 'Uzbekistan Traditional Tea Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Khiva', suvenir: 'Khiva Souvenir Embroidered Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Nukus
{ tara: 'Uzbekistan (UZ)', oras: 'Nukus', suvenir: 'Nukus Art Book', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Nukus', suvenir: 'Uzbekistan Cotton Scarf', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Nukus', suvenir: 'Nukus Souvenir Traditional Music CD', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Andijan
{ tara: 'Uzbekistan (UZ)', oras: 'Andijan', suvenir: 'Andijan Souvenir Embroidered Pillow', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Andijan', suvenir: 'Uzbekistan Herbal Tea Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Andijan', suvenir: 'Andijan Souvenir Wooden Bowl', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Fergana
{ tara: 'Uzbekistan (UZ)', oras: 'Fergana', suvenir: 'Fergana Handwoven Rug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Fergana', suvenir: 'Uzbekistan Dried Fruit Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Fergana', suvenir: 'Fergana Souvenir Pottery Set', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Namangan
{ tara: 'Uzbekistan (UZ)', oras: 'Namangan', suvenir: 'Namangan Souvenir Silk Scarf', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Namangan', suvenir: 'Uzbekistan Nuts Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Namangan', suvenir: 'Namangan Souvenir Embroidered Tablecloth', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Urgench
{ tara: 'Uzbekistan (UZ)', oras: 'Urgench', suvenir: 'Urgench Miniature Architecture', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Urgench', suvenir: 'Uzbekistan Sweets Box', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Urgench', suvenir: 'Urgench Souvenir Embroidered Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Termez
{ tara: 'Uzbekistan (UZ)', oras: 'Termez', suvenir: 'Termez Ceramic Vase', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Termez', suvenir: 'Uzbekistan Spiced Nuts', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Uzbekistan (UZ)', oras: 'Termez', suvenir: 'Termez Souvenir Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Beirut
{ tara: 'Lebanon (LB)', oras: 'Beirut', suvenir: 'Beirut Skyline Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lebanon (LB)', oras: 'Beirut', suvenir: 'Lebanese Baklava Box', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lebanon (LB)', oras: 'Beirut', suvenir: 'Beirut Souvenir T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Byblos
{ tara: 'Lebanon (LB)', oras: 'Byblos', suvenir: 'Byblos Ceramic Plate', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lebanon (LB)', oras: 'Byblos', suvenir: 'Lebanese Olive Oil Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lebanon (LB)', oras: 'Byblos', suvenir: 'Byblos Souvenir Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Baalbek
{ tara: 'Lebanon (LB)', oras: 'Baalbek', suvenir: 'Baalbek Miniature Temple Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lebanon (LB)', oras: 'Baalbek', suvenir: 'Lebanese Wine Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lebanon (LB)', oras: 'Baalbek', suvenir: 'Baalbek Souvenir Magnet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Tripoli
{ tara: 'Lebanon (LB)', oras: 'Tripoli', suvenir: 'Tripoli Handcrafted Soap Set', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lebanon (LB)', oras: 'Tripoli', suvenir: 'Lebanese Sweets Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lebanon (LB)', oras: 'Tripoli', suvenir: 'Tripoli Souvenir Ceramic Bowl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Sidon
{ tara: 'Lebanon (LB)', oras: 'Sidon', suvenir: 'Sidon Embroidered Pillow', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lebanon (LB)', oras: 'Sidon', suvenir: 'Lebanese Spices Kit', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lebanon (LB)', oras: 'Sidon', suvenir: 'Sidon Souvenir Handwoven Shawl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Tyre
{ tara: 'Lebanon (LB)', oras: 'Tyre', suvenir: 'Tyre Miniature Phoenician Boat', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lebanon (LB)', oras: 'Tyre', suvenir: 'Lebanese Dates Box', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lebanon (LB)', oras: 'Tyre', suvenir: 'Tyre Souvenir Embroidered Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Zahle
{ tara: 'Lebanon (LB)', oras: 'Zahle', suvenir: 'Zahle Ceramic Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lebanon (LB)', oras: 'Zahle', suvenir: 'Lebanese Honey Jar', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lebanon (LB)', oras: 'Zahle', suvenir: 'Zahle Souvenir Embroidered Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Harissa
{ tara: 'Lebanon (LB)', oras: 'Harissa', suvenir: 'Harissa Statue Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lebanon (LB)', oras: 'Harissa', suvenir: 'Lebanese Olive Wood Kitchen Utensils', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lebanon (LB)', oras: 'Harissa', suvenir: 'Harissa Souvenir Candle Holder', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Jounieh
{ tara: 'Lebanon (LB)', oras: 'Jounieh', suvenir: 'Jounieh Beach Towel', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lebanon (LB)', oras: 'Jounieh', suvenir: 'Lebanese Coffee Blend', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lebanon (LB)', oras: 'Jounieh', suvenir: 'Jounieh Souvenir Postcards Set', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Batroun
{ tara: 'Lebanon (LB)', oras: 'Batroun', suvenir: 'Batroun Hand-painted Ceramic Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Lebanon (LB)', oras: 'Batroun', suvenir: 'Lebanese Wine Bottle', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Lebanon (LB)', oras: 'Batroun', suvenir: 'Batroun Souvenir Seashell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Tbilisi
{ tara: 'Georgia (GE)', oras: 'Tbilisi', suvenir: 'Tbilisi Skyline Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Georgia (GE)', oras: 'Tbilisi', suvenir: 'Georgian Wine Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Georgia (GE)', oras: 'Tbilisi', suvenir: 'Tbilisi Souvenir Magnet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Batumi
{ tara: 'Georgia (GE)', oras: 'Batumi', suvenir: 'Batumi Lighthouse Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Georgia (GE)', oras: 'Batumi', suvenir: 'Adjarian Honey Jar', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Georgia (GE)', oras: 'Batumi', suvenir: 'Batumi Souvenir T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kutaisi
{ tara: 'Georgia (GE)', oras: 'Kutaisi', suvenir: 'Kutaisi Bagrati Cathedral Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Georgia (GE)', oras: 'Kutaisi', suvenir: 'Imeretian Wine Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Georgia (GE)', oras: 'Kutaisi', suvenir: 'Kutaisi Souvenir Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Mtskheta
{ tara: 'Georgia (GE)', oras: 'Mtskheta', suvenir: 'Mtskheta Cross Stitch Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Georgia (GE)', oras: 'Mtskheta', suvenir: 'Mtskheta Churchkhela', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Georgia (GE)', oras: 'Mtskheta', suvenir: 'Mtskheta Souvenir Ceramic Plate', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Zugdidi
{ tara: 'Georgia (GE)', oras: 'Zugdidi', suvenir: 'Zugdidi Dadiani Palace Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Georgia (GE)', oras: 'Zugdidi', suvenir: 'Zugdidi Megrelian Cheese Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Georgia (GE)', oras: 'Zugdidi', suvenir: 'Zugdidi Souvenir Embroidered Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Sighnaghi
{ tara: 'Georgia (GE)', oras: 'Sighnaghi', suvenir: 'Sighnaghi Miniature Alazani Valley Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Georgia (GE)', oras: 'Sighnaghi', suvenir: 'Kakhetian Wine Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Georgia (GE)', oras: 'Sighnaghi', suvenir: 'Sighnaghi Souvenir Handmade Jewelry', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Borjomi
{ tara: 'Georgia (GE)', oras: 'Borjomi', suvenir: 'Borjomi Mineral Water Bottle', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Georgia (GE)', oras: 'Borjomi', suvenir: 'Borjomi Baklava Box', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Georgia (GE)', oras: 'Borjomi', suvenir: 'Borjomi Souvenir Wooden Bowl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Gori
{ tara: 'Georgia (GE)', oras: 'Gori', suvenir: 'Gori Stalin Museum Magnet', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Georgia (GE)', oras: 'Gori', suvenir: 'Kartlian Wine Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Georgia (GE)', oras: 'Gori', suvenir: 'Gori Souvenir Embroidered Cap', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Telavi
{ tara: 'Georgia (GE)', oras: 'Telavi', suvenir: 'Telavi Vineyard Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Georgia (GE)', oras: 'Telavi', suvenir: 'Kakhetian Wine Barrel', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Georgia (GE)', oras: 'Telavi', suvenir: 'Telavi Souvenir Embroidered Pillow', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Poti
{ tara: 'Georgia (GE)', oras: 'Poti', suvenir: 'Poti Seascape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Georgia (GE)', oras: 'Poti', suvenir: 'Adjarian Wine Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Georgia (GE)', oras: 'Poti', suvenir: 'Poti Souvenir Seashell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Reykjavik
{ tara: 'Iceland (IS)', oras: 'Reykjavik', suvenir: 'Reykjavik Cityscape Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Iceland (IS)', oras: 'Reykjavik', suvenir: 'Icelandic Wool Sweater', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Iceland (IS)', oras: 'Reykjavik', suvenir: 'Reykjavik Geothermal Spa Kit', categorie: 'Beauty', destinatari: ['acquaintance', 'relative'] },

// Akureyri
{ tara: 'Iceland (IS)', oras: 'Akureyri', suvenir: 'Akureyri Northern Lights Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Iceland (IS)', oras: 'Akureyri', suvenir: 'Akureyri Handcrafted Soap Set', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Iceland (IS)', oras: 'Akureyri', suvenir: 'Akureyri Souvenir Ceramic Mug', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Selfoss
{ tara: 'Iceland (IS)', oras: 'Selfoss', suvenir: 'Selfoss Waterfall Canvas Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Iceland (IS)', oras: 'Selfoss', suvenir: 'Icelandic Chocolate Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Iceland (IS)', oras: 'Selfoss', suvenir: 'Selfoss Souvenir Fridge Magnet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Keflavik
{ tara: 'Iceland (IS)', oras: 'Keflavik', suvenir: 'Keflavik Geothermal Bath Set', categorie: 'Beauty', destinatari: ['family', 'friend'] },
{ tara: 'Iceland (IS)', oras: 'Keflavik', suvenir: 'Icelandic Lava Rock Necklace', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Iceland (IS)', oras: 'Keflavik', suvenir: 'Keflavik Souvenir Shot Glass', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Vik
{ tara: 'Iceland (IS)', oras: 'Vik', suvenir: 'Vik Black Sand Beach Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Iceland (IS)', oras: 'Vik', suvenir: 'Vik Icelandic Wool Blanket', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Iceland (IS)', oras: 'Vik', suvenir: 'Vik Sea Salt Sampler', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Húsavík
{ tara: 'Iceland (IS)', oras: 'Húsavík', suvenir: 'Húsavík Whale Watching Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Iceland (IS)', oras: 'Húsavík', suvenir: 'Icelandic Fisherman s Sweater', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Iceland (IS)', oras: 'Húsavík', suvenir: 'Húsavík Souvenir Whale Figurine', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Egilsstaðir
{ tara: 'Iceland (IS)', oras: 'Egilsstaðir', suvenir: 'Egilsstaðir Northern Lights Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Iceland (IS)', oras: 'Egilsstaðir', suvenir: 'Icelandic Herbal Tea Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Iceland (IS)', oras: 'Egilsstaðir', suvenir: 'Egilsstaðir Souvenir Wool Socks', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Ísafjörður
{ tara: 'Iceland (IS)', oras: 'Ísafjörður', suvenir: 'Ísafjörður Fjord Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Iceland (IS)', oras: 'Ísafjörður', suvenir: 'Ísafjörður Viking Helmet Replica', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Iceland (IS)', oras: 'Ísafjörður', suvenir: 'Ísafjörður Souvenir Glacier Soap', categorie: 'Beauty', destinatari: ['acquaintance', 'relative'] },

// Seyðisfjörður
{ tara: 'Iceland (IS)', oras: 'Seyðisfjörður', suvenir: 'Seyðisfjörður Fjord Watercolor Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Iceland (IS)', oras: 'Seyðisfjörður', suvenir: 'Icelandic Licorice Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Iceland (IS)', oras: 'Seyðisfjörður', suvenir: 'Seyðisfjörður Souvenir Knitted Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Grindavík
{ tara: 'Iceland (IS)', oras: 'Grindavík', suvenir: 'Grindavík Blue Lagoon Bath Set', categorie: 'Beauty', destinatari: ['family', 'friend'] },
{ tara: 'Iceland (IS)', oras: 'Grindavík', suvenir: 'Icelandic Sea Salt Scrub', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Iceland (IS)', oras: 'Grindavík', suvenir: 'Grindavík Souvenir Lava Rock Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Amman
{ tara: 'Jordan (JO)', oras: 'Amman', suvenir: 'Amman Skyline Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Jordan (JO)', oras: 'Amman', suvenir: 'Jordanian Olive Oil Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Jordan (JO)', oras: 'Amman', suvenir: 'Amman Souvenir Ceramic Plate', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Petra
{ tara: 'Jordan (JO)', oras: 'Petra', suvenir: 'Petra Ancient City Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Jordan (JO)', oras: 'Petra', suvenir: 'Handcrafted Petra Camel Figurine', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Jordan (JO)', oras: 'Petra', suvenir: 'Petra Sandstone Jewelry Set', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Aqaba
{ tara: 'Jordan (JO)', oras: 'Aqaba', suvenir: 'Aqaba Red Sea Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Jordan (JO)', oras: 'Aqaba', suvenir: 'Jordanian Dates Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Jordan (JO)', oras: 'Aqaba', suvenir: 'Aqaba Souvenir Coral Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Jerash
{ tara: 'Jordan (JO)', oras: 'Jerash', suvenir: 'Jerash Ancient Ruins Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Jordan (JO)', oras: 'Jerash', suvenir: 'Jerash Olive Wood Carving', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Jordan (JO)', oras: 'Jerash', suvenir: 'Jerash Souvenir Mosaic Tile', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Madaba
{ tara: 'Jordan (JO)', oras: 'Madaba', suvenir: 'Madaba Map Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Jordan (JO)', oras: 'Madaba', suvenir: 'Jordanian Spices Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Jordan (JO)', oras: 'Madaba', suvenir: 'Madaba Souvenir Pottery Bowl', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Irbid
{ tara: 'Jordan (JO)', oras: 'Irbid', suvenir: 'Irbid University T-shirt', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Jordan (JO)', oras: 'Irbid', suvenir: 'Irbid Handcrafted Soap Set', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Jordan (JO)', oras: 'Irbid', suvenir: 'Irbid Souvenir Bookmark', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Ajloun
{ tara: 'Jordan (JO)', oras: 'Ajloun', suvenir: 'Ajloun Castle Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Jordan (JO)', oras: 'Ajloun', suvenir: 'Ajloun Olive Oil Soap Set', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Jordan (JO)', oras: 'Ajloun', suvenir: 'Ajloun Souvenir Wooden Spoon', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Salt
{ tara: 'Jordan (JO)', oras: 'Salt', suvenir: 'Salt Old City Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Jordan (JO)', oras: 'Salt', suvenir: 'Jordanian Za atar Spice Blend', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Jordan (JO)', oras: 'Salt', suvenir: 'Salt Souvenir Pottery Mug', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Karak
{ tara: 'Jordan (JO)', oras: 'Karak', suvenir: 'Karak Castle Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Jordan (JO)', oras: 'Karak', suvenir: 'Karak Handmade Soap Set', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Jordan (JO)', oras: 'Karak', suvenir: 'Karak Souvenir Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Wadi Rum
{ tara: 'Jordan (JO)', oras: 'Wadi Rum', suvenir: 'Wadi Rum Desert Landscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Jordan (JO)', oras: 'Wadi Rum', suvenir: 'Wadi Rum Sand Bottle', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Jordan (JO)', oras: 'Wadi Rum', suvenir: 'Wadi Rum Souvenir Camel Figurine', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Skopje
{ tara: 'North Macedonia (MK)', oras: 'Skopje', suvenir: 'Skopje Kale Fortress Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'North Macedonia (MK)', oras: 'Skopje', suvenir: 'Macedonian Honey Jar', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'North Macedonia (MK)', oras: 'Skopje', suvenir: 'Skopje Souvenir Magnet', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Ohrid
{ tara: 'North Macedonia (MK)', oras: 'Ohrid', suvenir: 'Ohrid Lake Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'North Macedonia (MK)', oras: 'Ohrid', suvenir: 'Ohrid Pearls Jewelry Set', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'North Macedonia (MK)', oras: 'Ohrid', suvenir: 'Ohrid Souvenir Ceramic Plate', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Bitola
{ tara: 'North Macedonia (MK)', oras: 'Bitola', suvenir: 'Bitola Clock Tower Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'North Macedonia (MK)', oras: 'Bitola', suvenir: 'Bitola Tobacco Tin', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'North Macedonia (MK)', oras: 'Bitola', suvenir: 'Bitola Souvenir Embroidered Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Tetovo
{ tara: 'North Macedonia (MK)', oras: 'Tetovo', suvenir: 'Tetovo Painted Mosque Tile', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'North Macedonia (MK)', oras: 'Tetovo', suvenir: 'Tetovo Handcrafted Soap Set', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'North Macedonia (MK)', oras: 'Tetovo', suvenir: 'Tetovo Souvenir Fridge Magnet', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Prilep
{ tara: 'North Macedonia (MK)', oras: 'Prilep', suvenir: 'Prilep Marble Sculpture', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'North Macedonia (MK)', oras: 'Prilep', suvenir: 'Prilep Peppers and Ajvar Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'North Macedonia (MK)', oras: 'Prilep', suvenir: 'Prilep Souvenir Handicraft Doll', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Kumanovo
{ tara: 'North Macedonia (MK)', oras: 'Kumanovo', suvenir: 'Kumanovo Old Bazaar Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'North Macedonia (MK)', oras: 'Kumanovo', suvenir: 'Kumanovo Cheese and Wine Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'North Macedonia (MK)', oras: 'Kumanovo', suvenir: 'Kumanovo Souvenir Candle Holder', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Veles
{ tara: 'North Macedonia (MK)', oras: 'Veles', suvenir: 'Veles Handpainted Ceramic Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'North Macedonia (MK)', oras: 'Veles', suvenir: 'Veles Honey and Jam Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'North Macedonia (MK)', oras: 'Veles', suvenir: 'Veles Souvenir Wooden Spoon', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Strumica
{ tara: 'North Macedonia (MK)', oras: 'Strumica', suvenir: 'Strumica Carnival Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'North Macedonia (MK)', oras: 'Strumica', suvenir: 'Strumica Wine and Chocolate Box', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'North Macedonia (MK)', oras: 'Strumica', suvenir: 'Strumica Souvenir Embroidered Handkerchief', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Struga
{ tara: 'North Macedonia (MK)', oras: 'Struga', suvenir: 'Struga Poetry Anthology', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'North Macedonia (MK)', oras: 'Struga', suvenir: 'Struga Pearls Necklace', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'North Macedonia (MK)', oras: 'Struga', suvenir: 'Struga Souvenir Wooden Tray', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Kavadarci
{ tara: 'North Macedonia (MK)', oras: 'Kavadarci', suvenir: 'Kavadarci Vineyard Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'North Macedonia (MK)', oras: 'Kavadarci', suvenir: 'Kavadarci Wine and Cheese Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'North Macedonia (MK)', oras: 'Kavadarci', suvenir: 'Kavadarci Souvenir Olive Wood Bowl', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Sarajevo
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Sarajevo', suvenir: 'Sarajevo Handcrafted Copper Coffee Set', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Sarajevo', suvenir: 'Bosnian Delight Baklava Box', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Sarajevo', suvenir: 'Sarajevo Souvenir Handwoven Rug', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Mostar
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Mostar', suvenir: 'Mostar Bridge Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Mostar', suvenir: 'Mostar Handmade Copper Jewelry', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Mostar', suvenir: 'Mostar Souvenir Turkish Coffee Set', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Banja Luka
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Banja Luka', suvenir: 'Banja Luka Castle Sketch', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Banja Luka', suvenir: 'Banja Luka Craft Beer Collection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Banja Luka', suvenir: 'Banja Luka Souvenir Wine Glass', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Tuzla
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Tuzla', suvenir: 'Tuzla Salt Spa Set', categorie: 'Beauty', destinatari: ['family', 'friend'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Tuzla', suvenir: 'Tuzla Salt Crystal Lamp', categorie: 'Home', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Tuzla', suvenir: 'Tuzla Souvenir Handicraft Bowl', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Zenica
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Zenica', suvenir: 'Zenica Ironworks Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Zenica', suvenir: 'Zenica Traditional Woodcarving', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Zenica', suvenir: 'Zenica Souvenir Ceramic Vase', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Trebinje
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Trebinje', suvenir: 'Trebinje Olive Oil Set', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Trebinje', suvenir: 'Trebinje Handcrafted Soap', categorie: 'Beauty', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Trebinje', suvenir: 'Trebinje Souvenir Ceramic Plate', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Bijeljina
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Bijeljina', suvenir: 'Bijeljina Folklore Costume Doll', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Bijeljina', suvenir: 'Bijeljina River Fish Platter', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Bijeljina', suvenir: 'Bijeljina Souvenir Embroidered Tablecloth', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Jajce
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Jajce', suvenir: 'Jajce Waterfall Photo Frame', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Jajce', suvenir: 'Jajce Traditional Bosnian Coffee', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Jajce', suvenir: 'Jajce Souvenir Handmade Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Neum
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Neum', suvenir: 'Neum Seaside Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Neum', suvenir: 'Neum Sea Salt Collection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Neum', suvenir: 'Neum Souvenir Beach Towel', categorie: 'Home', destinatari: ['acquaintance', 'relative'] },

// Travnik
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Travnik', suvenir: 'Travnik Ottoman Tea Set', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Travnik', suvenir: 'Travnik Bosnian Coffee Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Bosnia and Herzegovina (BA)', oras: 'Travnik', suvenir: 'Travnik Souvenir Woolen Shawl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Port Louis
{ tara: 'Mauritius (MU)', oras: 'Port Louis', suvenir: 'Port Louis Waterfront Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mauritius (MU)', oras: 'Port Louis', suvenir: 'Mauritian Vanilla Tea', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mauritius (MU)', oras: 'Port Louis', suvenir: 'Port Louis Souvenir Magnet', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Grand Baie
{ tara: 'Mauritius (MU)', oras: 'Grand Baie', suvenir: 'Grand Baie Beach Towel', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Mauritius (MU)', oras: 'Grand Baie', suvenir: 'Mauritian Rum Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mauritius (MU)', oras: 'Grand Baie', suvenir: 'Grand Baie Handcrafted Necklace', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Flic en Flac
{ tara: 'Mauritius (MU)', oras: 'Flic en Flac', suvenir: 'Flic en Flac Sunset Canvas', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mauritius (MU)', oras: 'Flic en Flac', suvenir: 'Mauritian Vanilla Extract', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mauritius (MU)', oras: 'Flic en Flac', suvenir: 'Flic en Flac Shell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Belle Mare
{ tara: 'Mauritius (MU)', oras: 'Belle Mare', suvenir: 'Belle Mare Beach Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mauritius (MU)', oras: 'Belle Mare', suvenir: 'Mauritian Pineapple Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mauritius (MU)', oras: 'Belle Mare', suvenir: 'Belle Mare Seashell Earrings', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Mahebourg
{ tara: 'Mauritius (MU)', oras: 'Mahebourg', suvenir: 'Mahebourg Harbour Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mauritius (MU)', oras: 'Mahebourg', suvenir: 'Mauritian Spices Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mauritius (MU)', oras: 'Mahebourg', suvenir: 'Mahebourg Handcrafted Basket', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Le Morne
{ tara: 'Mauritius (MU)', oras: 'Le Morne', suvenir: 'Le Morne Mountain Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mauritius (MU)', oras: 'Le Morne', suvenir: 'Mauritian Coconut Oil Soap', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mauritius (MU)', oras: 'Le Morne', suvenir: 'Le Morne Sunset Print', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Trou-aux-Biches
{ tara: 'Mauritius (MU)', oras: 'Trou-aux-Biches', suvenir: 'Trou-aux-Biches Coral Necklace', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Mauritius (MU)', oras: 'Trou-aux-Biches', suvenir: 'Mauritian Rum Cake', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mauritius (MU)', oras: 'Trou-aux-Biches', suvenir: 'Trou-aux-Biches Beach Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Tamarin
{ tara: 'Mauritius (MU)', oras: 'Tamarin', suvenir: 'Tamarin Dolphin Figurine', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mauritius (MU)', oras: 'Tamarin', suvenir: 'Mauritian Tea Sampler', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mauritius (MU)', oras: 'Tamarin', suvenir: 'Tamarin Beach Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Blue Bay
{ tara: 'Mauritius (MU)', oras: 'Blue Bay', suvenir: 'Blue Bay Marine Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mauritius (MU)', oras: 'Blue Bay', suvenir: 'Mauritian Vanilla Rum', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mauritius (MU)', oras: 'Blue Bay', suvenir: 'Blue Bay Shell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Curepipe
{ tara: 'Mauritius (MU)', oras: 'Curepipe', suvenir: 'Curepipe Floral Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Mauritius (MU)', oras: 'Curepipe', suvenir: 'Mauritian Tea Towel Set', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Mauritius (MU)', oras: 'Curepipe', suvenir: 'Curepipe Volcano Model', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Yerevan
{ tara: 'Armenia (AM)', oras: 'Yerevan', suvenir: 'Yerevan Cityscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Armenia (AM)', oras: 'Yerevan', suvenir: 'Armenian Apricot Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Armenia (AM)', oras: 'Yerevan', suvenir: 'Yerevan Brandy', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Gyumri
{ tara: 'Armenia (AM)', oras: 'Gyumri', suvenir: 'Gyumri Rug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Armenia (AM)', oras: 'Gyumri', suvenir: 'Armenian Lavash Bread', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Armenia (AM)', oras: 'Gyumri', suvenir: 'Gyumri Ceramic Mug', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Vanadzor
{ tara: 'Armenia (AM)', oras: 'Vanadzor', suvenir: 'Vanadzor Handcrafted Jewelry', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Armenia (AM)', oras: 'Vanadzor', suvenir: 'Armenian Dried Fruits', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Armenia (AM)', oras: 'Vanadzor', suvenir: 'Vanadzor Mountain Print', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Dilijan
{ tara: 'Armenia (AM)', oras: 'Dilijan', suvenir: 'Dilijan Forest Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Armenia (AM)', oras: 'Dilijan', suvenir: 'Armenian Herbal Tea Blend', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Armenia (AM)', oras: 'Dilijan', suvenir: 'Dilijan Ceramic Vase', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Jermuk
{ tara: 'Armenia (AM)', oras: 'Jermuk', suvenir: 'Jermuk Mineral Water', categorie: 'Food', destinatari: ['family', 'friend'] },
{ tara: 'Armenia (AM)', oras: 'Jermuk', suvenir: 'Jermuk Landscape Painting', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Armenia (AM)', oras: 'Jermuk', suvenir: 'Armenian Handmade Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Tsaghkadzor
{ tara: 'Armenia (AM)', oras: 'Tsaghkadzor', suvenir: 'Tsaghkadzor Ski Resort Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Armenia (AM)', oras: 'Tsaghkadzor', suvenir: 'Armenian Cognac', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Armenia (AM)', oras: 'Tsaghkadzor', suvenir: 'Tsaghkadzor Snow Globe', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Goris
{ tara: 'Armenia (AM)', oras: 'Goris', suvenir: 'Goris Cave Dwellings Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Armenia (AM)', oras: 'Goris', suvenir: 'Armenian Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Armenia (AM)', oras: 'Goris', suvenir: 'Goris Handcrafted Shawl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Sevan
{ tara: 'Armenia (AM)', oras: 'Sevan', suvenir: 'Sevan Lake Photo Album', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Armenia (AM)', oras: 'Sevan', suvenir: 'Armenian Lavash Bread', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Armenia (AM)', oras: 'Sevan', suvenir: 'Sevan Pearl Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Hrazdan
{ tara: 'Armenia (AM)', oras: 'Hrazdan', suvenir: 'Hrazdan Valley Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Armenia (AM)', oras: 'Hrazdan', suvenir: 'Armenian Dried Fruits', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Armenia (AM)', oras: 'Hrazdan', suvenir: 'Hrazdan Handcrafted Pottery', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Alaverdi
{ tara: 'Armenia (AM)', oras: 'Alaverdi', suvenir: 'Alaverdi Monastery Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Armenia (AM)', oras: 'Alaverdi', suvenir: 'Armenian Lavender Sachets', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Armenia (AM)', oras: 'Alaverdi', suvenir: 'Alaverdi Copper Vase', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Yangon
{ tara: 'Myanmar (MM)', oras: 'Yangon', suvenir: 'Yangon Cityscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Myanmar (MM)', oras: 'Yangon', suvenir: 'Myanmar Tea Sampler', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Myanmar (MM)', oras: 'Yangon', suvenir: 'Yangon Traditional Puppet', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Mandalay
{ tara: 'Myanmar (MM)', oras: 'Mandalay', suvenir: 'Mandalay Pagoda Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Myanmar (MM)', oras: 'Mandalay', suvenir: 'Myanmar Mandalay Rum', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Myanmar (MM)', oras: 'Mandalay', suvenir: 'Mandalay Silk Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Bagan
{ tara: 'Myanmar (MM)', oras: 'Bagan', suvenir: 'Bagan Temples Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Myanmar (MM)', oras: 'Bagan', suvenir: 'Myanmar Bagan Coffee', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Myanmar (MM)', oras: 'Bagan', suvenir: 'Bagan Lacquerware Bowl', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Naypyidaw
{ tara: 'Myanmar (MM)', oras: 'Naypyidaw', suvenir: 'Naypyidaw Government Complex Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Myanmar (MM)', oras: 'Naypyidaw', suvenir: 'Myanmar Naypyidaw Tea', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Myanmar (MM)', oras: 'Naypyidaw', suvenir: 'Naypyidaw Souvenir Magnet', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Inle Lake
{ tara: 'Myanmar (MM)', oras: 'Inle Lake', suvenir: 'Inle Lake Floating Gardens Photo', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Myanmar (MM)', oras: 'Inle Lake', suvenir: 'Myanmar Inle Lake Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Myanmar (MM)', oras: 'Inle Lake', suvenir: 'Inle Lake Handwoven Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Ngapali
{ tara: 'Myanmar (MM)', oras: 'Ngapali', suvenir: 'Ngapali Beach Sunset Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Myanmar (MM)', oras: 'Ngapali', suvenir: 'Myanmar Ngapali Beach Sand', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Myanmar (MM)', oras: 'Ngapali', suvenir: 'Ngapali Shell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Taunggyi
{ tara: 'Myanmar (MM)', oras: 'Taunggyi', suvenir: 'Taunggyi Hot Air Balloon Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Myanmar (MM)', oras: 'Taunggyi', suvenir: 'Myanmar Taunggyi Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Myanmar (MM)', oras: 'Taunggyi', suvenir: 'Taunggyi Umbrella', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Pyin Oo Lwin
{ tara: 'Myanmar (MM)', oras: 'Pyin Oo Lwin', suvenir: 'Pyin Oo Lwin Botanical Garden Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Myanmar (MM)', oras: 'Pyin Oo Lwin', suvenir: 'Myanmar Pyin Oo Lwin Coffee', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Myanmar (MM)', oras: 'Pyin Oo Lwin', suvenir: 'Pyin Oo Lwin Woolen Shawl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Mawlamyine
{ tara: 'Myanmar (MM)', oras: 'Mawlamyine', suvenir: 'Mawlamyine Pagoda Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Myanmar (MM)', oras: 'Mawlamyine', suvenir: 'Myanmar Mawlamyine Tea', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Myanmar (MM)', oras: 'Mawlamyine', suvenir: 'Mawlamyine Silk Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Hpa-An
{ tara: 'Myanmar (MM)', oras: 'Hpa-An', suvenir: 'Hpa-An Cave Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Myanmar (MM)', oras: 'Hpa-An', suvenir: 'Myanmar Hpa-An Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Myanmar (MM)', oras: 'Hpa-An', suvenir: 'Hpa-An Traditional Shawl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Panama City
{ tara: 'Panama (PA)', oras: 'Panama City', suvenir: 'Panama City Skyline Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Panama (PA)', oras: 'Panama City', suvenir: 'Panamanian Coffee Sampler', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Panama (PA)', oras: 'Panama City', suvenir: 'Panama City Souvenir T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Boquete
{ tara: 'Panama (PA)', oras: 'Boquete', suvenir: 'Boquete Coffee Plantation Photo', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Panama (PA)', oras: 'Boquete', suvenir: 'Panamanian Chocolates Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Panama (PA)', oras: 'Boquete', suvenir: 'Boquete Handcrafted Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Bocas del Toro
{ tara: 'Panama (PA)', oras: 'Bocas del Toro', suvenir: 'Bocas del Toro Beach Scene Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Panama (PA)', oras: 'Bocas del Toro', suvenir: 'Panamanian Rum Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Panama (PA)', oras: 'Bocas del Toro', suvenir: 'Bocas del Toro Shell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Colón
{ tara: 'Panama (PA)', oras: 'Colón', suvenir: 'Colón Canal Zone Photo', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Panama (PA)', oras: 'Colón', suvenir: 'Panamanian Cigars Box', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Panama (PA)', oras: 'Colón', suvenir: 'Colón Souvenir Magnet', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// David
{ tara: 'Panama (PA)', oras: 'David', suvenir: 'David Central Park Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Panama (PA)', oras: 'David', suvenir: 'Panamanian Pineapple Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Panama (PA)', oras: 'David', suvenir: 'David Handwoven Basket', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Gamboa
{ tara: 'Panama (PA)', oras: 'Gamboa', suvenir: 'Gamboa Rainforest Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Panama (PA)', oras: 'Gamboa', suvenir: 'Panamanian Vanilla Extract', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Panama (PA)', oras: 'Gamboa', suvenir: 'Gamboa Wildlife Figurine', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// El Valle de Anton
{ tara: 'Panama (PA)', oras: 'El Valle de Anton', suvenir: 'El Valle de Anton Hot Springs Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Panama (PA)', oras: 'El Valle de Anton', suvenir: 'Panamanian Honey Jar', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Panama (PA)', oras: 'El Valle de Anton', suvenir: 'El Valle de Anton Pottery', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Portobelo
{ tara: 'Panama (PA)', oras: 'Portobelo', suvenir: 'Portobelo Historical Site Photo', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Panama (PA)', oras: 'Portobelo', suvenir: 'Panamanian Spices Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Panama (PA)', oras: 'Portobelo', suvenir: 'Portobelo Handcrafted Jewelry', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Santa Catalina
{ tara: 'Panama (PA)', oras: 'Santa Catalina', suvenir: 'Santa Catalina Surf Beach Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Panama (PA)', oras: 'Santa Catalina', suvenir: 'Panamanian Coffee Liqueur', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Panama (PA)', oras: 'Santa Catalina', suvenir: 'Santa Catalina Seashell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Santiago
{ tara: 'Panama (PA)', oras: 'Santiago', suvenir: 'Santiago Central Square Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Panama (PA)', oras: 'Santiago', suvenir: 'Panamanian Chorizo Sausages', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Panama (PA)', oras: 'Santiago', suvenir: 'Santiago Handcrafted Pottery', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// San Jose
{ tara: 'Costa Rica (CR)', oras: 'San Jose', suvenir: 'San Jose Cityscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Costa Rica (CR)', oras: 'San Jose', suvenir: 'Costa Rican Coffee Beans', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Costa Rica (CR)', oras: 'San Jose', suvenir: 'San Jose Handcrafted Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Arenal
{ tara: 'Costa Rica (CR)', oras: 'Arenal', suvenir: 'Arenal Volcano Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Costa Rica (CR)', oras: 'Arenal', suvenir: 'Costa Rican Chocolate Sampler', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Costa Rica (CR)', oras: 'Arenal', suvenir: 'Arenal Volcano Souvenir T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Manuel Antonio
{ tara: 'Costa Rica (CR)', oras: 'Manuel Antonio', suvenir: 'Manuel Antonio Beach Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Costa Rica (CR)', oras: 'Manuel Antonio', suvenir: 'Costa Rican Pineapple Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Costa Rica (CR)', oras: 'Manuel Antonio', suvenir: 'Manuel Antonio Shell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Monteverde
{ tara: 'Costa Rica (CR)', oras: 'Monteverde', suvenir: 'Monteverde Cloud Forest Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Costa Rica (CR)', oras: 'Monteverde', suvenir: 'Costa Rican Vanilla Extract', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Costa Rica (CR)', oras: 'Monteverde', suvenir: 'Monteverde Handcrafted Mask', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Tamarindo
{ tara: 'Costa Rica (CR)', oras: 'Tamarindo', suvenir: 'Tamarindo Beach Sunset Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Costa Rica (CR)', oras: 'Tamarindo', suvenir: 'Costa Rican Rum Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Costa Rica (CR)', oras: 'Tamarindo', suvenir: 'Tamarindo Surfboard Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Jaco
{ tara: 'Costa Rica (CR)', oras: 'Jaco', suvenir: 'Jaco Beach Scene Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Costa Rica (CR)', oras: 'Jaco', suvenir: 'Costa Rican Craft Beer Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Costa Rica (CR)', oras: 'Jaco', suvenir: 'Jaco Handcrafted Bracelet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Puerto Viejo
{ tara: 'Costa Rica (CR)', oras: 'Puerto Viejo', suvenir: 'Puerto Viejo Jungle Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Costa Rica (CR)', oras: 'Puerto Viejo', suvenir: 'Costa Rican Hot Sauce Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Costa Rica (CR)', oras: 'Puerto Viejo', suvenir: 'Puerto Viejo Handwoven Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Liberia
{ tara: 'Costa Rica (CR)', oras: 'Liberia', suvenir: 'Liberia Colonial Architecture Photo', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Costa Rica (CR)', oras: 'Liberia', suvenir: 'Costa Rican Salsa Sampler', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Costa Rica (CR)', oras: 'Liberia', suvenir: 'Liberia Souvenir Magnet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// La Fortuna
{ tara: 'Costa Rica (CR)', oras: 'La Fortuna', suvenir: 'La Fortuna Waterfall Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Costa Rica (CR)', oras: 'La Fortuna', suvenir: 'Costa Rican Handmade Chocolate', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Costa Rica (CR)', oras: 'La Fortuna', suvenir: 'La Fortuna Handcrafted Jewelry', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Tortuguero
{ tara: 'Costa Rica (CR)', oras: 'Tortuguero', suvenir: 'Tortuguero Sea Turtle Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Costa Rica (CR)', oras: 'Tortuguero', suvenir: 'Costa Rican Tropical Fruit Basket', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Costa Rica (CR)', oras: 'Tortuguero', suvenir: 'Tortuguero Souvenir Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Accra
{ tara: 'Ghana (GH)', oras: 'Accra', suvenir: 'Accra Skyline Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ghana (GH)', oras: 'Accra', suvenir: 'Ghanaian Cocoa Beans', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ghana (GH)', oras: 'Accra', suvenir: 'Accra Handcrafted Bead Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kumasi
{ tara: 'Ghana (GH)', oras: 'Kumasi', suvenir: 'Kumasi Traditional Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ghana (GH)', oras: 'Kumasi', suvenir: 'Ghanaian Shea Butter Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ghana (GH)', oras: 'Kumasi', suvenir: 'Kumasi Batik Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Cape Coast
{ tara: 'Ghana (GH)', oras: 'Cape Coast', suvenir: 'Cape Coast Castle Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ghana (GH)', oras: 'Cape Coast', suvenir: 'Ghanaian Fufu Pounder', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ghana (GH)', oras: 'Cape Coast', suvenir: 'Cape Coast Souvenir Magnet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Takoradi
{ tara: 'Ghana (GH)', oras: 'Takoradi', suvenir: 'Takoradi Beach Sunset Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ghana (GH)', oras: 'Takoradi', suvenir: 'Ghanaian Palm Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ghana (GH)', oras: 'Takoradi', suvenir: 'Takoradi Handcrafted Shell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Tamale
{ tara: 'Ghana (GH)', oras: 'Tamale', suvenir: 'Tamale Market Scene Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ghana (GH)', oras: 'Tamale', suvenir: 'Ghanaian Spicy Peanut Butter', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ghana (GH)', oras: 'Tamale', suvenir: 'Tamale Handwoven Basket', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Elmina
{ tara: 'Ghana (GH)', oras: 'Elmina', suvenir: 'Elmina Castle Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ghana (GH)', oras: 'Elmina', suvenir: 'Ghanaian Kente Cloth', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ghana (GH)', oras: 'Elmina', suvenir: 'Elmina Fisherman Sculpture', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Tema
{ tara: 'Ghana (GH)', oras: 'Tema', suvenir: 'Tema Port Canvas Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ghana (GH)', oras: 'Tema', suvenir: 'Ghanaian Black Soap Set', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ghana (GH)', oras: 'Tema', suvenir: 'Tema Handcrafted Wooden Bowl', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Koforidua
{ tara: 'Ghana (GH)', oras: 'Koforidua', suvenir: 'Koforidua Bead Necklace', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Ghana (GH)', oras: 'Koforidua', suvenir: 'Ghanaian Herbal Tea Sampler', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ghana (GH)', oras: 'Koforidua', suvenir: 'Koforidua Handcrafted Doll', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Ho
{ tara: 'Ghana (GH)', oras: 'Ho', suvenir: 'Ho Cityscape Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ghana (GH)', oras: 'Ho', suvenir: 'Ghanaian Palm Wine Gourd', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ghana (GH)', oras: 'Ho', suvenir: 'Ho Handwoven Basket', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Sunyani
{ tara: 'Ghana (GH)', oras: 'Sunyani', suvenir: 'Sunyani Market Scene Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Ghana (GH)', oras: 'Sunyani', suvenir: 'Ghanaian Cocoa Butter Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Ghana (GH)', oras: 'Sunyani', suvenir: 'Sunyani Handcrafted Wooden Mask', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Dakar
{ tara: 'Senegal (SN)', oras: 'Dakar', suvenir: 'Dakar Cityscape Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Senegal (SN)', oras: 'Dakar', suvenir: 'Senegalese Baobab Tea Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Senegal (SN)', oras: 'Dakar', suvenir: 'Dakar Handcrafted Wooden Mask', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Saint-Louis
{ tara: 'Senegal (SN)', oras: 'Saint-Louis', suvenir: 'Saint-Louis Sunset Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Senegal (SN)', oras: 'Saint-Louis', suvenir: 'Senegalese Thieboudienne Spice Kit', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Senegal (SN)', oras: 'Saint-Louis', suvenir: 'Saint-Louis Handwoven Basket', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Ziguinchor
{ tara: 'Senegal (SN)', oras: 'Ziguinchor', suvenir: 'Ziguinchor Landscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Senegal (SN)', oras: 'Ziguinchor', suvenir: 'Senegalese Peanut Butter', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Senegal (SN)', oras: 'Ziguinchor', suvenir: 'Ziguinchor Traditional Mask', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Saly
{ tara: 'Senegal (SN)', oras: 'Saly', suvenir: 'Saly Beach Scene Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Senegal (SN)', oras: 'Saly', suvenir: 'Senegalese Coffee Sampler', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Senegal (SN)', oras: 'Saly', suvenir: 'Saly Handcrafted Seashell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Touba
{ tara: 'Senegal (SN)', oras: 'Touba', suvenir: 'Touba Mosque Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Senegal (SN)', oras: 'Touba', suvenir: 'Senegalese Incense Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Senegal (SN)', oras: 'Touba', suvenir: 'Touba Handcrafted Prayer Beads', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kaolack
{ tara: 'Senegal (SN)', oras: 'Kaolack', suvenir: 'Kaolack Market Scene Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Senegal (SN)', oras: 'Kaolack', suvenir: 'Senegalese Baobab Fruit Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Senegal (SN)', oras: 'Kaolack', suvenir: 'Kaolack Handcrafted Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Toubab Dialao
{ tara: 'Senegal (SN)', oras: 'Toubab Dialao', suvenir: 'Toubab Dialao Seascape Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Senegal (SN)', oras: 'Toubab Dialao', suvenir: 'Senegalese Honey Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Senegal (SN)', oras: 'Toubab Dialao', suvenir: 'Toubab Dialao Handwoven Hammock', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Popenguine
{ tara: 'Senegal (SN)', oras: 'Popenguine', suvenir: 'Popenguine Coastal Scene Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Senegal (SN)', oras: 'Popenguine', suvenir: 'Senegalese Sea Salt', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Senegal (SN)', oras: 'Popenguine', suvenir: 'Popenguine Handcrafted Beaded Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kedougou
{ tara: 'Senegal (SN)', oras: 'Kedougou', suvenir: 'Kedougou Waterfall Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Senegal (SN)', oras: 'Kedougou', suvenir: 'Senegalese Baobab Fruit Tea', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Senegal (SN)', oras: 'Kedougou', suvenir: 'Kedougou Handcrafted Wooden Bowl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Cap Skirring
{ tara: 'Senegal (SN)', oras: 'Cap Skirring', suvenir: 'Cap Skirring Beach Scene Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Senegal (SN)', oras: 'Cap Skirring', suvenir: 'Senegalese Cashew Nuts', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Senegal (SN)', oras: 'Cap Skirring', suvenir: 'Cap Skirring Handcrafted Seashell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Khartoum
{ tara: 'Sudan (SD)', oras: 'Khartoum', suvenir: 'Khartoum Nile River Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sudan (SD)', oras: 'Khartoum', suvenir: 'Sudanese Coffee Beans', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sudan (SD)', oras: 'Khartoum', suvenir: 'Khartoum Camel Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Omdurman
{ tara: 'Sudan (SD)', oras: 'Omdurman', suvenir: 'Omdurman Mosque Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sudan (SD)', oras: 'Omdurman', suvenir: 'Sudanese Spices Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sudan (SD)', oras: 'Omdurman', suvenir: 'Omdurman Traditional Shawl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Port Sudan
{ tara: 'Sudan (SD)', oras: 'Port Sudan', suvenir: 'Port Sudan Red Sea Coral Necklace', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Sudan (SD)', oras: 'Port Sudan', suvenir: 'Sudanese Red Sea Salt', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sudan (SD)', oras: 'Port Sudan', suvenir: 'Port Sudan Sunset Print', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Kassala
{ tara: 'Sudan (SD)', oras: 'Kassala', suvenir: 'Kassala Traditional Basket', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sudan (SD)', oras: 'Kassala', suvenir: 'Sudanese Honeycomb', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sudan (SD)', oras: 'Kassala', suvenir: 'Kassala Beaded Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// El Obeid
{ tara: 'Sudan (SD)', oras: 'El Obeid', suvenir: 'El Obeid Traditional Pottery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sudan (SD)', oras: 'El Obeid', suvenir: 'Sudanese Dates Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sudan (SD)', oras: 'El Obeid', suvenir: 'El Obeid Handcrafted Bracelet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Nyala
{ tara: 'Sudan (SD)', oras: 'Nyala', suvenir: 'Nyala Wildlife Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sudan (SD)', oras: 'Nyala', suvenir: 'Sudanese Shea Butter Soap', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sudan (SD)', oras: 'Nyala', suvenir: 'Nyala Leather Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Wad Madani
{ tara: 'Sudan (SD)', oras: 'Wad Madani', suvenir: 'Wad Madani Handwoven Rug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sudan (SD)', oras: 'Wad Madani', suvenir: 'Sudanese Hibiscus Tea', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sudan (SD)', oras: 'Wad Madani', suvenir: 'Wad Madani Pottery Bowl', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Atbara
{ tara: 'Sudan (SD)', oras: 'Atbara', suvenir: 'Atbara River Scene Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sudan (SD)', oras: 'Atbara', suvenir: 'Sudanese Almond Delight', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sudan (SD)', oras: 'Atbara', suvenir: 'Atbara Handcrafted Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Dongola
{ tara: 'Sudan (SD)', oras: 'Dongola', suvenir: 'Dongola Desert Art Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sudan (SD)', oras: 'Dongola', suvenir: 'Sudanese Desert Sand Bottle', categorie: 'Art', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sudan (SD)', oras: 'Dongola', suvenir: 'Dongola Camel Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Merowe
{ tara: 'Sudan (SD)', oras: 'Merowe', suvenir: 'Merowe Pyramids Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sudan (SD)', oras: 'Merowe', suvenir: 'Sudanese Nile River Soap', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sudan (SD)', oras: 'Merowe', suvenir: 'Merowe Sandalwood Incense', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Guinea (GN)
// Conakry
{ tara: 'Guinea (GN)', oras: 'Conakry', suvenir: 'Traditional Guinean Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Guinea (GN)', oras: 'Conakry', suvenir: 'Guinean Coffee Beans', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Guinea (GN)', oras: 'Conakry', suvenir: 'Conakry Cityscape Painting', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Kankan
{ tara: 'Guinea (GN)', oras: 'Kankan', suvenir: 'Kankan Traditional Cloth', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Guinea (GN)', oras: 'Kankan', suvenir: 'Guinean Spices Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Guinea (GN)', oras: 'Kankan', suvenir: 'Kankan Handcrafted Jewelry', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Labé
{ tara: 'Guinea (GN)', oras: 'Labé', suvenir: 'Labé Pottery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Guinea (GN)', oras: 'Labé', suvenir: 'Guinean Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Guinea (GN)', oras: 'Labé', suvenir: 'Traditional Guinean Textile', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kindia
{ tara: 'Guinea (GN)', oras: 'Kindia', suvenir: 'Kindia Wood Carving', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Guinea (GN)', oras: 'Kindia', suvenir: 'Guinean Pineapples', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Guinea (GN)', oras: 'Kindia', suvenir: 'Kindia Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Mamou
{ tara: 'Guinea (GN)', oras: 'Mamou', suvenir: 'Mamou Ceramic Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Guinea (GN)', oras: 'Mamou', suvenir: 'Guinean Nuts Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Guinea (GN)', oras: 'Mamou', suvenir: 'Mamou Traditional Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Boké
{ tara: 'Guinea (GN)', oras: 'Boké', suvenir: 'Boké Copper Jewelry', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Guinea (GN)', oras: 'Boké', suvenir: 'Guinean Chocolate Bars', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Guinea (GN)', oras: 'Boké', suvenir: 'Boké Fabric Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Siguiri
{ tara: 'Guinea (GN)', oras: 'Siguiri', suvenir: 'Siguiri Gold-Plated Necklace', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Guinea (GN)', oras: 'Siguiri', suvenir: 'Guinean Tea Blend', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Guinea (GN)', oras: 'Siguiri', suvenir: 'Siguiri Embroidered Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Nzérékoré
{ tara: 'Guinea (GN)', oras: 'Nzérékoré', suvenir: 'Nzérékoré Batik Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Guinea (GN)', oras: 'Nzérékoré', suvenir: 'Guinean Cassava Chips', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Guinea (GN)', oras: 'Nzérékoré', suvenir: 'Nzérékoré Beaded Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kamsar
{ tara: 'Guinea (GN)', oras: 'Kamsar', suvenir: 'Kamsar Seashell Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Guinea (GN)', oras: 'Kamsar', suvenir: 'Guinean Palm Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Guinea (GN)', oras: 'Kamsar', suvenir: 'Kamsar Shell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kissidougou
{ tara: 'Guinea (GN)', oras: 'Kissidougou', suvenir: 'Kissidougou Woven Basket', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Guinea (GN)', oras: 'Kissidougou', suvenir: 'Guinean Date Paste', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Guinea (GN)', oras: 'Kissidougou', suvenir: 'Kissidougou Embroidered Shawl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Rwanda (RW)
// Kigali
{ tara: 'Rwanda (RW)', oras: 'Kigali', suvenir: 'Rwandan Basketry', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Rwanda (RW)', oras: 'Kigali', suvenir: 'Rwandan Coffee', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Rwanda (RW)', oras: 'Kigali', suvenir: 'Kigali Cityscape Painting', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Huye (Butare)
{ tara: 'Rwanda (RW)', oras: 'Huye (Butare)', suvenir: 'Huye Handcrafted Pottery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Rwanda (RW)', oras: 'Huye (Butare)', suvenir: 'Rwandan Tea Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Rwanda (RW)', oras: 'Huye (Butare)', suvenir: 'Butare Traditional Cloth', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Musanze
{ tara: 'Rwanda (RW)', oras: 'Musanze', suvenir: 'Musanze Gorilla Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Rwanda (RW)', oras: 'Musanze', suvenir: 'Rwandan Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Rwanda (RW)', oras: 'Musanze', suvenir: 'Musanze Handwoven Basket', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Rubavu (Gisenyi)
{ tara: 'Rwanda (RW)', oras: 'Rubavu (Gisenyi)', suvenir: 'Gisenyi Lake Shore Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Rwanda (RW)', oras: 'Rubavu (Gisenyi)', suvenir: 'Rwandan Beer Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Rwanda (RW)', oras: 'Rubavu (Gisenyi)', suvenir: 'Gisenyi Beach Sandals', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Nyagatare
{ tara: 'Rwanda (RW)', oras: 'Nyagatare', suvenir: 'Nyagatare Agricultural Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Rwanda (RW)', oras: 'Nyagatare', suvenir: 'Rwandan Wine Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Rwanda (RW)', oras: 'Nyagatare', suvenir: 'Nyagatare Traditional Shawl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Muhanga
{ tara: 'Rwanda (RW)', oras: 'Muhanga', suvenir: 'Muhanga Pottery Sculpture', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Rwanda (RW)', oras: 'Muhanga', suvenir: 'Rwandan Chocolate Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Rwanda (RW)', oras: 'Muhanga', suvenir: 'Muhanga Fabric Wall Hanging', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Ruhengeri
{ tara: 'Rwanda (RW)', oras: 'Ruhengeri', suvenir: 'Ruhengeri Mountain Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Rwanda (RW)', oras: 'Ruhengeri', suvenir: 'Rwandan Cheese Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Rwanda (RW)', oras: 'Ruhengeri', suvenir: 'Ruhengeri Handcrafted Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Byumba
{ tara: 'Rwanda (RW)', oras: 'Byumba', suvenir: 'Byumba Traditional Artisan Hat', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Rwanda (RW)', oras: 'Byumba', suvenir: 'Byumba Local Snack Pack', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Rwanda (RW)', oras: 'Byumba', suvenir: 'Byumba Embroidered Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kibuye
{ tara: 'Rwanda (RW)', oras: 'Kibuye', suvenir: 'Kibuye Lake Sunset Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Rwanda (RW)', oras: 'Kibuye', suvenir: 'Rwandan Tea Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Rwanda (RW)', oras: 'Kibuye', suvenir: 'Kibuye Handcrafted Jewelry', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Nyamata
{ tara: 'Rwanda (RW)', oras: 'Nyamata', suvenir: 'Nyamata Genocide Memorial Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Rwanda (RW)', oras: 'Nyamata', suvenir: 'Rwandan Fruit Jam Selection', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Rwanda (RW)', oras: 'Nyamata', suvenir: 'Nyamata Handwoven Rug', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Benin (BJ)
// Cotonou
{ tara: 'Benin (BJ)', oras: 'Cotonou', suvenir: 'Cotonou Handcrafted Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Benin (BJ)', oras: 'Cotonou', suvenir: 'Beninese Coffee Beans', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Benin (BJ)', oras: 'Cotonou', suvenir: 'Cotonou Beach Wrap', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Porto-Novo
{ tara: 'Benin (BJ)', oras: 'Porto-Novo', suvenir: 'Porto-Novo Pottery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Benin (BJ)', oras: 'Porto-Novo', suvenir: 'Beninese Spices Set', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Benin (BJ)', oras: 'Porto-Novo', suvenir: 'Porto-Novo Traditional Cloth', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Parakou
{ tara: 'Benin (BJ)', oras: 'Parakou', suvenir: 'Parakou Wood Carving', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Benin (BJ)', oras: 'Parakou', suvenir: 'Beninese Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Benin (BJ)', oras: 'Parakou', suvenir: 'Parakou Leather Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Abomey
{ tara: 'Benin (BJ)', oras: 'Abomey', suvenir: 'Abomey Royal Tapestry', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Benin (BJ)', oras: 'Abomey', suvenir: 'Beninese Palm Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Benin (BJ)', oras: 'Abomey', suvenir: 'Abomey Beaded Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Bohicon
{ tara: 'Benin (BJ)', oras: 'Bohicon', suvenir: 'Bohicon Wood Sculpture', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Benin (BJ)', oras: 'Bohicon', suvenir: 'Beninese Cassava Chips', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Benin (BJ)', oras: 'Bohicon', suvenir: 'Bohicon Embroidered Fabric', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Natitingou
{ tara: 'Benin (BJ)', oras: 'Natitingou', suvenir: 'Natitingou Ceramic Pot', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Benin (BJ)', oras: 'Natitingou', suvenir: 'Beninese Tea Blend', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Benin (BJ)', oras: 'Natitingou', suvenir: 'Natitingou Leather Sandals', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Ouidah
{ tara: 'Benin (BJ)', oras: 'Ouidah', suvenir: 'Ouidah Voodoo Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Benin (BJ)', oras: 'Ouidah', suvenir: 'Beninese Palm Oil Soap', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Benin (BJ)', oras: 'Ouidah', suvenir: 'Ouidah Tie-Dye T-shirt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Djougou
{ tara: 'Benin (BJ)', oras: 'Djougou', suvenir: 'Djougou Metal Artwork', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Benin (BJ)', oras: 'Djougou', suvenir: 'Beninese Peanut Butter', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Benin (BJ)', oras: 'Djougou', suvenir: 'Djougou Woven Basket', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Lokossa
{ tara: 'Benin (BJ)', oras: 'Lokossa', suvenir: 'Lokossa Shell Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Benin (BJ)', oras: 'Lokossa', suvenir: 'Beninese Chocolate Bars', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Benin (BJ)', oras: 'Lokossa', suvenir: 'Lokossa Handwoven Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kandi
{ tara: 'Benin (BJ)', oras: 'Kandi', suvenir: 'Kandi Pottery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Benin (BJ)', oras: 'Kandi', suvenir: 'Beninese Cotton Fabric', categorie: 'Fashion', destinatari: ['lover', 'co-worker'] },
{ tara: 'Benin (BJ)', oras: 'Kandi', suvenir: 'Kandi Herbal Tea Blend', categorie: 'Food', destinatari: ['acquaintance', 'relative'] },

// Niger (NE)
// Niamey
{ tara: 'Niger (NE)', oras: 'Niamey', suvenir: 'Niamey Leather Bag', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Niger (NE)', oras: 'Niamey', suvenir: 'Nigerien Dates', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Niger (NE)', oras: 'Niamey', suvenir: 'Niamey Pottery', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Zinder
{ tara: 'Niger (NE)', oras: 'Zinder', suvenir: 'Zinder Silver Jewelry', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Niger (NE)', oras: 'Zinder', suvenir: 'Nigerien Spices Mix', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Niger (NE)', oras: 'Zinder', suvenir: 'Zinder Camel Carving', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Maradi
{ tara: 'Niger (NE)', oras: 'Maradi', suvenir: 'Maradi Beaded Necklace', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Niger (NE)', oras: 'Maradi', suvenir: 'Nigerien Millet Porridge', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Niger (NE)', oras: 'Maradi', suvenir: 'Maradi Leather Wallet', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Agadez
{ tara: 'Niger (NE)', oras: 'Agadez', suvenir: 'Agadez Tuareg Rug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Niger (NE)', oras: 'Agadez', suvenir: 'Nigerien Date Syrup', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Niger (NE)', oras: 'Agadez', suvenir: 'Agadez Silver Bracelet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Tahoua
{ tara: 'Niger (NE)', oras: 'Tahoua', suvenir: 'Tahoua Pottery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Niger (NE)', oras: 'Tahoua', suvenir: 'Nigerien Peanut Butter', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Niger (NE)', oras: 'Tahoua', suvenir: 'Tahoua Leather Sandals', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Dosso
{ tara: 'Niger (NE)', oras: 'Dosso', suvenir: 'Dosso Textile Print', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Niger (NE)', oras: 'Dosso', suvenir: 'Nigerien Baobab Oil', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Niger (NE)', oras: 'Dosso', suvenir: 'Dosso Handwoven Basket', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Diffa
{ tara: 'Niger (NE)', oras: 'Diffa', suvenir: 'Diffa Leather Journal', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Niger (NE)', oras: 'Diffa', suvenir: 'Nigerien Sesame Seeds', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Niger (NE)', oras: 'Diffa', suvenir: 'Diffa Embroidered Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Tillabéri
{ tara: 'Niger (NE)', oras: 'Tillabéri', suvenir: 'Tillabéri Tuareg Silver Ring', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Niger (NE)', oras: 'Tillabéri', suvenir: 'Nigerien Hibiscus Tea', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Niger (NE)', oras: 'Tillabéri', suvenir: 'Tillabéri Landscape Painting', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Birni-N'Konni
{ tara: 'Niger (NE)', oras: 'Birni-N\'Konni', suvenir: 'Birni-N\'Konni Pottery Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Niger (NE)', oras: 'Birni-N\'Konni', suvenir: 'Nigerien Baobab Fruit', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Niger (NE)', oras: 'Birni-N\'Konni', suvenir: 'Birni-N\'Konni Leather Belt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Arlit
{ tara: 'Niger (NE)', oras: 'Arlit', suvenir: 'Arlit Agate Stone', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Niger (NE)', oras: 'Arlit', suvenir: 'Nigerien Millet Beer', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Niger (NE)', oras: 'Arlit', suvenir: 'Arlit Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Haiti (HT)
// Port-au-Prince
{ tara: 'Haiti (HT)', oras: 'Port-au-Prince', suvenir: 'Haitian Metal Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Haiti (HT)', oras: 'Port-au-Prince', suvenir: 'Haitian Rum', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Haiti (HT)', oras: 'Port-au-Prince', suvenir: 'Handcrafted Haitian Jewelry', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Cap-Haïtien
{ tara: 'Haiti (HT)', oras: 'Cap-Haïtien', suvenir: 'Cap-Haïtien Seashell Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Haiti (HT)', oras: 'Cap-Haïtien', suvenir: 'Haitian Coffee Beans', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Haiti (HT)', oras: 'Cap-Haïtien', suvenir: 'Cap-Haïtien Straw Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Jacmel
{ tara: 'Haiti (HT)', oras: 'Jacmel', suvenir: 'Jacmel Papier-Mâché Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Haiti (HT)', oras: 'Jacmel', suvenir: 'Haitian Chocolate', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Haiti (HT)', oras: 'Jacmel', suvenir: 'Jacmel Handcrafted Sandals', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Les Cayes
{ tara: 'Haiti (HT)', oras: 'Les Cayes', suvenir: 'Les Cayes Coral Jewelry', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Haiti (HT)', oras: 'Les Cayes', suvenir: 'Haitian Vanilla Beans', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Haiti (HT)', oras: 'Les Cayes', suvenir: 'Les Cayes Ceramic Bowl', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Gonaïves
{ tara: 'Haiti (HT)', oras: 'Gonaïves', suvenir: 'Gonaïves Voodoo Doll', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Haiti (HT)', oras: 'Gonaïves', suvenir: 'Haitian Hot Sauce', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Haiti (HT)', oras: 'Gonaïves', suvenir: 'Gonaïves Straw Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Hinche
{ tara: 'Haiti (HT)', oras: 'Hinche', suvenir: 'Hinche Haitian Drum', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Haiti (HT)', oras: 'Hinche', suvenir: 'Haitian Pineapple', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Haiti (HT)', oras: 'Hinche', suvenir: 'Hinche Straw Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Port-de-Paix
{ tara: 'Haiti (HT)', oras: 'Port-de-Paix', suvenir: 'Port-de-Paix Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Haiti (HT)', oras: 'Port-de-Paix', suvenir: 'Haitian Pine Nuts', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Haiti (HT)', oras: 'Port-de-Paix', suvenir: 'Port-de-Paix Embroidered Shawl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Saint-Marc
{ tara: 'Haiti (HT)', oras: 'Saint-Marc', suvenir: 'Saint-Marc Basket Weaving', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Haiti (HT)', oras: 'Saint-Marc', suvenir: 'Haitian Cacao Beans', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Haiti (HT)', oras: 'Saint-Marc', suvenir: 'Saint-Marc Straw Mat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Jérémie
{ tara: 'Haiti (HT)', oras: 'Jérémie', suvenir: 'Jérémie Clay Pottery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Haiti (HT)', oras: 'Jérémie', suvenir: 'Haitian Cassava Bread', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Haiti (HT)', oras: 'Jérémie', suvenir: 'Jérémie Straw Basket', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Miragoâne
{ tara: 'Haiti (HT)', oras: 'Miragoâne', suvenir: 'Miragoâne Shell Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Haiti (HT)', oras: 'Miragoâne', suvenir: 'Haitian Spicy Pickles', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Haiti (HT)', oras: 'Miragoâne', suvenir: 'Miragoâne Straw Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Tajikistan (TJ)
// Dushanbe
{ tara: 'Tajikistan (TJ)', oras: 'Dushanbe', suvenir: 'Dushanbe Embroidered Textile', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tajikistan (TJ)', oras: 'Dushanbe', suvenir: 'Tajikistan Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tajikistan (TJ)', oras: 'Dushanbe', suvenir: 'Dushanbe Silk Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Khujand
{ tara: 'Tajikistan (TJ)', oras: 'Khujand', suvenir: 'Khujand Ceramic Plate', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tajikistan (TJ)', oras: 'Khujand', suvenir: 'Tajikistan Nuts Mix', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tajikistan (TJ)', oras: 'Khujand', suvenir: 'Khujand Woolen Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Bokhtar
{ tara: 'Tajikistan (TJ)', oras: 'Bokhtar', suvenir: 'Bokhtar Embroidered Pillow', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tajikistan (TJ)', oras: 'Bokhtar', suvenir: 'Tajikistan Dried Fruits', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tajikistan (TJ)', oras: 'Bokhtar', suvenir: 'Bokhtar Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kulob
{ tara: 'Tajikistan (TJ)', oras: 'Kulob', suvenir: 'Kulob Pottery Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tajikistan (TJ)', oras: 'Kulob', suvenir: 'Tajikistan Saffron', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tajikistan (TJ)', oras: 'Kulob', suvenir: 'Kulob Woolen Shawl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Tursunzoda
{ tara: 'Tajikistan (TJ)', oras: 'Tursunzoda', suvenir: 'Tursunzoda Embroidered Bag', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tajikistan (TJ)', oras: 'Tursunzoda', suvenir: 'Tajikistan Green Tea', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tajikistan (TJ)', oras: 'Tursunzoda', suvenir: 'Tursunzoda Leather Belt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Isfara
{ tara: 'Tajikistan (TJ)', oras: 'Isfara', suvenir: 'Isfara Ceramic Vase', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tajikistan (TJ)', oras: 'Isfara', suvenir: 'Tajikistan Herbal Tea', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tajikistan (TJ)', oras: 'Isfara', suvenir: 'Isfara Woolen Gloves', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Panjakent
{ tara: 'Tajikistan (TJ)', oras: 'Panjakent', suvenir: 'Panjakent Miniature Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tajikistan (TJ)', oras: 'Panjakent', suvenir: 'Tajikistan Apricot Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tajikistan (TJ)', oras: 'Panjakent', suvenir: 'Panjakent Silk Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Istaravshan
{ tara: 'Tajikistan (TJ)', oras: 'Istaravshan', suvenir: 'Istaravshan Handcrafted Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tajikistan (TJ)', oras: 'Istaravshan', suvenir: 'Tajikistan Mountain Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tajikistan (TJ)', oras: 'Istaravshan', suvenir: 'Istaravshan Woolen Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Konibodom
{ tara: 'Tajikistan (TJ)', oras: 'Konibodom', suvenir: 'Konibodom Wood Carving', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tajikistan (TJ)', oras: 'Konibodom', suvenir: 'Tajikistan Dried Apricots', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tajikistan (TJ)', oras: 'Konibodom', suvenir: 'Konibodom Embroidered Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Danghara
{ tara: 'Tajikistan (TJ)', oras: 'Danghara', suvenir: 'Danghara Ceramic Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Tajikistan (TJ)', oras: 'Danghara', suvenir: 'Tajikistan Almonds', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Tajikistan (TJ)', oras: 'Danghara', suvenir: 'Danghara Woolen Socks', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Chad (TD)
// N'Djamena
{ tara: 'Chad (TD)', oras: "N'Djamena", suvenir: 'N\'Djamena Leather Wallet', categorie: 'Fashion', destinatari: ['family', 'friend'] },
{ tara: 'Chad (TD)', oras: "N'Djamena", suvenir: 'Chadian Spices', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chad (TD)', oras: "N'Djamena", suvenir: 'N\'Djamena Handcrafted Basket', categorie: 'Art', destinatari: ['acquaintance', 'relative'] },

// Moundou
{ tara: 'Chad (TD)', oras: 'Moundou', suvenir: 'Moundou Wooden Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Chad (TD)', oras: 'Moundou', suvenir: 'Chadian Coffee Beans', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chad (TD)', oras: 'Moundou', suvenir: 'Moundou Beaded Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Sarh
{ tara: 'Chad (TD)', oras: 'Sarh', suvenir: 'Sarh Woven Basket', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Chad (TD)', oras: 'Sarh', suvenir: 'Chadian Dates', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chad (TD)', oras: 'Sarh', suvenir: 'Sarh Leather Sandals', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Abéché
{ tara: 'Chad (TD)', oras: 'Abéché', suvenir: 'Abéché Ceramic Plate', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Chad (TD)', oras: 'Abéché', suvenir: 'Chadian Tea Blend', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chad (TD)', oras: 'Abéché', suvenir: 'Abéché Embroidered Shawl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kélo
{ tara: 'Chad (TD)', oras: 'Kélo', suvenir: 'Kélo Clay Pot', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Chad (TD)', oras: 'Kélo', suvenir: 'Chadian Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chad (TD)', oras: 'Kélo', suvenir: 'Kélo Straw Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Koumra
{ tara: 'Chad (TD)', oras: 'Koumra', suvenir: 'Koumra Wooden Sculpture', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Chad (TD)', oras: 'Koumra', suvenir: 'Chadian Peanut Butter', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chad (TD)', oras: 'Koumra', suvenir: 'Koumra Embroidered Pillow', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Pala
{ tara: 'Chad (TD)', oras: 'Pala', suvenir: 'Pala Pottery Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Chad (TD)', oras: 'Pala', suvenir: 'Chadian Dried Fruits', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chad (TD)', oras: 'Pala', suvenir: 'Pala Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Am Timan
{ tara: 'Chad (TD)', oras: 'Am Timan', suvenir: 'Am Timan Beaded Jewelry', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Chad (TD)', oras: 'Am Timan', suvenir: 'Chadian Spicy Sauce', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chad (TD)', oras: 'Am Timan', suvenir: 'Am Timan Handcrafted Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Bongor
{ tara: 'Chad (TD)', oras: 'Bongor', suvenir: 'Bongor Wooden Carving', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Chad (TD)', oras: 'Bongor', suvenir: 'Chadian Cinnamon', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chad (TD)', oras: 'Bongor', suvenir: 'Bongor Woolen Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Mongo
{ tara: 'Chad (TD)', oras: 'Mongo', suvenir: 'Mongo Pottery Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Chad (TD)', oras: 'Mongo', suvenir: 'Chadian Baobab Oil', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Chad (TD)', oras: 'Mongo', suvenir: 'Mongo Embroidered Tablecloth', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Moldova (MD)
// Chișinău
{ tara: 'Moldova (MD)', oras: 'Chișinău', suvenir: 'Chișinău Cityscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Moldova (MD)', oras: 'Chișinău', suvenir: 'Moldovan Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Moldova (MD)', oras: 'Chișinău', suvenir: 'Chișinău Embroidered Table Runner', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Tiraspol
{ tara: 'Moldova (MD)', oras: 'Tiraspol', suvenir: 'Tiraspol Soviet-Era Poster', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Moldova (MD)', oras: 'Tiraspol', suvenir: 'Transnistrian Brandy', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Moldova (MD)', oras: 'Tiraspol', suvenir: 'Tiraspol Matryoshka Dolls', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Bălți
{ tara: 'Moldova (MD)', oras: 'Bălți', suvenir: 'Bălți Handcrafted Ceramic Plate', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Moldova (MD)', oras: 'Bălți', suvenir: 'Moldovan Sunflower Seeds', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Moldova (MD)', oras: 'Bălți', suvenir: 'Bălți Woolen Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Bender (Tighina)
{ tara: 'Moldova (MD)', oras: 'Bender (Tighina)', suvenir: 'Bender Fortress Replica', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Moldova (MD)', oras: 'Bender (Tighina)', suvenir: 'Moldovan Chocolate', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Moldova (MD)', oras: 'Bender (Tighina)', suvenir: 'Bender Handcrafted Leather Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Cahul
{ tara: 'Moldova (MD)', oras: 'Cahul', suvenir: 'Cahul Wood Carving', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Moldova (MD)', oras: 'Cahul', suvenir: 'Moldovan Apple Chips', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Moldova (MD)', oras: 'Cahul', suvenir: 'Cahul Embroidered Pillow', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Ungheni
{ tara: 'Moldova (MD)', oras: 'Ungheni', suvenir: 'Ungheni Pottery Vase', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Moldova (MD)', oras: 'Ungheni', suvenir: 'Moldovan Plum Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Moldova (MD)', oras: 'Ungheni', suvenir: 'Ungheni Handwoven Rug', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Soroca
{ tara: 'Moldova (MD)', oras: 'Soroca', suvenir: 'Soroca Miniature Fortress', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Moldova (MD)', oras: 'Soroca', suvenir: 'Moldovan Cheese Wheel', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Moldova (MD)', oras: 'Soroca', suvenir: 'Soroca Embroidered Shawl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Orhei
{ tara: 'Moldova (MD)', oras: 'Orhei', suvenir: 'Orhei Ceramic Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Moldova (MD)', oras: 'Orhei', suvenir: 'Moldovan Wine Vinegar', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Moldova (MD)', oras: 'Orhei', suvenir: 'Orhei Handcrafted Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Rîbnița
{ tara: 'Moldova (MD)', oras: 'Rîbnița', suvenir: 'Rîbnița Wood Carved Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Moldova (MD)', oras: 'Rîbnița', suvenir: 'Moldovan Sunflower Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Moldova (MD)', oras: 'Rîbnița', suvenir: 'Rîbnița Embroidered Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Comrat
{ tara: 'Moldova (MD)', oras: 'Comrat', suvenir: 'Comrat Pottery Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Moldova (MD)', oras: 'Comrat', suvenir: 'Moldovan Walnut Liqueur', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Moldova (MD)', oras: 'Comrat', suvenir: 'Comrat Handcrafted Woolen Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Eswatini (SZ)
// Mbabane
{ tara: 'Eswatini (SZ)', oras: 'Mbabane', suvenir: 'Mbabane Handwoven Basket', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Eswatini (SZ)', oras: 'Mbabane', suvenir: 'Eswatini Coffee Beans', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Eswatini (SZ)', oras: 'Mbabane', suvenir: 'Mbabane Beaded Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Manzini
{ tara: 'Eswatini (SZ)', oras: 'Manzini', suvenir: 'Manzini Handcrafted Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Eswatini (SZ)', oras: 'Manzini', suvenir: 'Eswatini Spices', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Eswatini (SZ)', oras: 'Manzini', suvenir: 'Manzini Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Lobamba
{ tara: 'Eswatini (SZ)', oras: 'Lobamba', suvenir: 'Lobamba Miniature Shield', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Eswatini (SZ)', oras: 'Lobamba', suvenir: 'Eswatini Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Eswatini (SZ)', oras: 'Lobamba', suvenir: 'Lobamba Handwoven Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Siteki
{ tara: 'Eswatini (SZ)', oras: 'Siteki', suvenir: 'Siteki Wood Carving', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Eswatini (SZ)', oras: 'Siteki', suvenir: 'Eswatini Mango Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Eswatini (SZ)', oras: 'Siteki', suvenir: 'Siteki Beaded Bracelet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Piggs Peak
{ tara: 'Eswatini (SZ)', oras: 'Piggs Peak', suvenir: 'Piggs Peak Pottery Mug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Eswatini (SZ)', oras: 'Piggs Peak', suvenir: 'Eswatini Game Jerky', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Eswatini (SZ)', oras: 'Piggs Peak', suvenir: 'Piggs Peak Handcrafted Basket', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Nhlangano
{ tara: 'Eswatini (SZ)', oras: 'Nhlangano', suvenir: 'Nhlangano Batik Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Eswatini (SZ)', oras: 'Nhlangano', suvenir: 'Eswatini Macadamia Nuts', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Eswatini (SZ)', oras: 'Nhlangano', suvenir: 'Nhlangano Handwoven Rug', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Hlatikulu
{ tara: 'Eswatini (SZ)', oras: 'Hlatikulu', suvenir: 'Hlatikulu Beaded Necklace', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Eswatini (SZ)', oras: 'Hlatikulu', suvenir: 'Eswatini Herbal Tea', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Eswatini (SZ)', oras: 'Hlatikulu', suvenir: 'Hlatikulu Leather Belt', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Mhlume
{ tara: 'Eswatini (SZ)', oras: 'Mhlume', suvenir: 'Mhlume Wooden Sculpture', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Eswatini (SZ)', oras: 'Mhlume', suvenir: 'Eswatini Avocado Oil', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Eswatini (SZ)', oras: 'Mhlume', suvenir: 'Mhlume Handcrafted Earrings', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Hluthi
{ tara: 'Eswatini (SZ)', oras: 'Hluthi', suvenir: 'Hluthi Pottery Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Eswatini (SZ)', oras: 'Hluthi', suvenir: 'Eswatini Pineapple Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Eswatini (SZ)', oras: 'Hluthi', suvenir: 'Hluthi Beaded Keychain', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Matata
{ tara: 'Eswatini (SZ)', oras: 'Matata', suvenir: 'Matata Tribal Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Eswatini (SZ)', oras: 'Matata', suvenir: 'Eswatini Coffee Soap', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Eswatini (SZ)', oras: 'Matata', suvenir: 'Matata Handwoven Basket', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Timor-Leste (TL)
// Dili
{ tara: 'Timor-Leste (TL)', oras: 'Dili', suvenir: 'Dili Handwoven Tais Fabric', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Timor-Leste (TL)', oras: 'Dili', suvenir: 'Timorese Coffee Beans', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Timor-Leste (TL)', oras: 'Dili', suvenir: 'Dili Carved Sandalwood Figurine', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Baucau
{ tara: 'Timor-Leste (TL)', oras: 'Baucau', suvenir: 'Baucau Pottery Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Timor-Leste (TL)', oras: 'Baucau', suvenir: 'Timorese Vanilla Beans', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Timor-Leste (TL)', oras: 'Baucau', suvenir: 'Baucau Shell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Lospalos
{ tara: 'Timor-Leste (TL)', oras: 'Lospalos', suvenir: 'Lospalos Traditional Weaving', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Timor-Leste (TL)', oras: 'Lospalos', suvenir: 'Timorese Chocolate', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Timor-Leste (TL)', oras: 'Lospalos', suvenir: 'Lospalos Beaded Bracelet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Maliana
{ tara: 'Timor-Leste (TL)', oras: 'Maliana', suvenir: 'Maliana Wood Carved Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Timor-Leste (TL)', oras: 'Maliana', suvenir: 'Timorese Honey', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Timor-Leste (TL)', oras: 'Maliana', suvenir: 'Maliana Handwoven Bag', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Suai
{ tara: 'Timor-Leste (TL)', oras: 'Suai', suvenir: 'Suai Traditional Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Timor-Leste (TL)', oras: 'Suai', suvenir: 'Timorese Spices', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Timor-Leste (TL)', oras: 'Suai', suvenir: 'Suai Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Aileu
{ tara: 'Timor-Leste (TL)', oras: 'Aileu', suvenir: 'Aileu Ceramics', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Timor-Leste (TL)', oras: 'Aileu', suvenir: 'Timorese Tea Leaves', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Timor-Leste (TL)', oras: 'Aileu', suvenir: 'Aileu Embroidered Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Same
{ tara: 'Timor-Leste (TL)', oras: 'Same', suvenir: 'Same Bamboo Basket', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Timor-Leste (TL)', oras: 'Same', suvenir: 'Timorese Coconut Oil', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Timor-Leste (TL)', oras: 'Same', suvenir: 'Same Beaded Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Viqueque
{ tara: 'Timor-Leste (TL)', oras: 'Viqueque', suvenir: 'Viqueque Wood Carved Statue', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Timor-Leste (TL)', oras: 'Viqueque', suvenir: 'Timorese Seaweed Snacks', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Timor-Leste (TL)', oras: 'Viqueque', suvenir: 'Viqueque Handwoven Shawl', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Ermera
{ tara: 'Timor-Leste (TL)', oras: 'Ermera', suvenir: 'Ermera Wood Carved Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Timor-Leste (TL)', oras: 'Ermera', suvenir: 'Timorese Fruit Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Timor-Leste (TL)', oras: 'Ermera', suvenir: 'Ermera Handcrafted Bracelet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Liquiçá
{ tara: 'Timor-Leste (TL)', oras: 'Liquiçá', suvenir: 'Liquiçá Traditional Pottery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Timor-Leste (TL)', oras: 'Liquiçá', suvenir: 'Timorese Rice Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Timor-Leste (TL)', oras: 'Liquiçá', suvenir: 'Liquiçá Beaded Earrings', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Brunei (BN)
// Bandar Seri Begawan
{ tara: 'Brunei (BN)', oras: 'Bandar Seri Begawan', suvenir: 'Bandar Seri Begawan Silver Filigree', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Brunei (BN)', oras: 'Bandar Seri Begawan', suvenir: 'Bruneian Durian Chocolate', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Brunei (BN)', oras: 'Bandar Seri Begawan', suvenir: 'Bandar Seri Begawan Batik Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kuala Belait
{ tara: 'Brunei (BN)', oras: 'Kuala Belait', suvenir: 'Kuala Belait Shell Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Brunei (BN)', oras: 'Kuala Belait', suvenir: 'Bruneian Coffee Beans', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Brunei (BN)', oras: 'Kuala Belait', suvenir: 'Kuala Belait Traditional Hat', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Seria
{ tara: 'Brunei (BN)', oras: 'Seria', suvenir: 'Seria Oil Rig Model', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Brunei (BN)', oras: 'Seria', suvenir: 'Bruneian Pineapple Tart', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Brunei (BN)', oras: 'Seria', suvenir: 'Seria Handcrafted Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Tutong
{ tara: 'Brunei (BN)', oras: 'Tutong', suvenir: 'Tutong Ceramic Vase', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Brunei (BN)', oras: 'Tutong', suvenir: 'Bruneian Coconut Candy', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Brunei (BN)', oras: 'Tutong', suvenir: 'Tutong Handwoven Basket', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Bangar
{ tara: 'Brunei (BN)', oras: 'Bangar', suvenir: 'Bangar Traditional Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Brunei (BN)', oras: 'Bangar', suvenir: 'Bruneian Kueh Lapis', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Brunei (BN)', oras: 'Bangar', suvenir: 'Bangar Beaded Bracelet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Muara
{ tara: 'Brunei (BN)', oras: 'Muara', suvenir: 'Muara Seashell Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Brunei (BN)', oras: 'Muara', suvenir: 'Bruneian Salted Fish', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Brunei (BN)', oras: 'Muara', suvenir: 'Muara Pearl Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Jerudong
{ tara: 'Brunei (BN)', oras: 'Jerudong', suvenir: 'Jerudong Wooden Carving', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Brunei (BN)', oras: 'Jerudong', suvenir: 'Bruneian Sambal Belacan', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Brunei (BN)', oras: 'Jerudong', suvenir: 'Jerudong Silk Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Temburong
{ tara: 'Brunei (BN)', oras: 'Temburong', suvenir: 'Temburong Rainforest Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Brunei (BN)', oras: 'Temburong', suvenir: 'Bruneian Pineapple Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Brunei (BN)', oras: 'Temburong', suvenir: 'Temburong Handcrafted Pottery', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Lumut
{ tara: 'Brunei (BN)', oras: 'Lumut', suvenir: 'Lumut Shell Sculpture', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Brunei (BN)', oras: 'Lumut', suvenir: 'Bruneian Prawn Crackers', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Brunei (BN)', oras: 'Lumut', suvenir: 'Lumut Beaded Anklet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Sukang
{ tara: 'Brunei (BN)', oras: 'Sukang', suvenir: 'Sukang Traditional Basket', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Brunei (BN)', oras: 'Sukang', suvenir: 'Bruneian Dried Fruits', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Brunei (BN)', oras: 'Sukang', suvenir: 'Sukang Beaded Headband', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Gambia (GM)
// Banjul
{ tara: 'Gambia (GM)', oras: 'Banjul', suvenir: 'Banjul Wood Carving', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Gambia (GM)', oras: 'Banjul', suvenir: 'Gambian Peanut Butter', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Gambia (GM)', oras: 'Banjul', suvenir: 'Banjul Beaded Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Serrekunda
{ tara: 'Gambia (GM)', oras: 'Serrekunda', suvenir: 'Serrekunda Batik Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Gambia (GM)', oras: 'Serrekunda', suvenir: 'Gambian Cassava Cake', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Gambia (GM)', oras: 'Serrekunda', suvenir: 'Serrekunda Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Brikama
{ tara: 'Gambia (GM)', oras: 'Brikama', suvenir: 'Brikama Pottery Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Gambia (GM)', oras: 'Brikama', suvenir: 'Gambian Ginger Juice', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Gambia (GM)', oras: 'Brikama', suvenir: 'Brikama Beaded Bracelet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Bakau
{ tara: 'Gambia (GM)', oras: 'Bakau', suvenir: 'Bakau Sand Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Gambia (GM)', oras: 'Bakau', suvenir: 'Gambian Spiced Coffee', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Gambia (GM)', oras: 'Bakau', suvenir: 'Bakau Shell Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Farafenni
{ tara: 'Gambia (GM)', oras: 'Farafenni', suvenir: 'Farafenni Traditional Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Gambia (GM)', oras: 'Farafenni', suvenir: 'Gambian Baobab Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Gambia (GM)', oras: 'Farafenni', suvenir: 'Farafenni Handwoven Basket', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Lamin
{ tara: 'Gambia (GM)', oras: 'Lamin', suvenir: 'Lamin Carved Wooden Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Gambia (GM)', oras: 'Lamin', suvenir: 'Gambian Hibiscus Tea', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Gambia (GM)', oras: 'Lamin', suvenir: 'Lamin Beaded Anklet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Gunjur
{ tara: 'Gambia (GM)', oras: 'Gunjur', suvenir: 'Gunjur Handwoven Rug', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Gambia (GM)', oras: 'Gunjur', suvenir: 'Gambian Palm Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Gambia (GM)', oras: 'Gunjur', suvenir: 'Gunjur Beaded Bracelet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Soma
{ tara: 'Gambia (GM)', oras: 'Soma', suvenir: 'Soma Clay Pottery', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Gambia (GM)', oras: 'Soma', suvenir: 'Gambian Groundnut Cake', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Gambia (GM)', oras: 'Soma', suvenir: 'Soma Handcrafted Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Basse Santa Su
{ tara: 'Gambia (GM)', oras: 'Basse Santa Su', suvenir: 'Basse Santa Su Fabric Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Gambia (GM)', oras: 'Basse Santa Su', suvenir: 'Gambian Mango Chutney', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Gambia (GM)', oras: 'Basse Santa Su', suvenir: 'Basse Santa Su Leather Journal', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Sukuta
{ tara: 'Gambia (GM)', oras: 'Sukuta', suvenir: 'Sukuta Beaded Wall Hanging', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Gambia (GM)', oras: 'Sukuta', suvenir: 'Gambian Hot Pepper Sauce', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Gambia (GM)', oras: 'Sukuta', suvenir: 'Sukuta Handwoven Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Sierra Leone (SL)
// Freetown
{ tara: 'Sierra Leone (SL)', oras: 'Freetown', suvenir: 'Freetown Hand-carved Mask', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sierra Leone (SL)', oras: 'Freetown', suvenir: 'Sierra Leonean Coffee Beans', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sierra Leone (SL)', oras: 'Freetown', suvenir: 'Freetown Batik Clothing', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Bo
{ tara: 'Sierra Leone (SL)', oras: 'Bo', suvenir: 'Bo Handwoven Basket', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sierra Leone (SL)', oras: 'Bo', suvenir: 'Sierra Leonean Cassava Cake', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sierra Leone (SL)', oras: 'Bo', suvenir: 'Bo Beaded Necklace', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kenema
{ tara: 'Sierra Leone (SL)', oras: 'Kenema', suvenir: 'Kenema Wood Carving', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sierra Leone (SL)', oras: 'Kenema', suvenir: 'Sierra Leonean Ginger Cake', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sierra Leone (SL)', oras: 'Kenema', suvenir: 'Kenema Leather Wallet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Makeni
{ tara: 'Sierra Leone (SL)', oras: 'Makeni', suvenir: 'Makeni Fabric Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sierra Leone (SL)', oras: 'Makeni', suvenir: 'Sierra Leonean Palm Wine', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sierra Leone (SL)', oras: 'Makeni', suvenir: 'Makeni Beaded Bracelet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Koidu
{ tara: 'Sierra Leone (SL)', oras: 'Koidu', suvenir: 'Koidu Diamond-shaped Pendant', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sierra Leone (SL)', oras: 'Koidu', suvenir: 'Sierra Leonean Groundnut Cake', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sierra Leone (SL)', oras: 'Koidu', suvenir: 'Koidu Beaded Anklet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Lunsar
{ tara: 'Sierra Leone (SL)', oras: 'Lunsar', suvenir: 'Lunsar Pottery Bowl', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sierra Leone (SL)', oras: 'Lunsar', suvenir: 'Sierra Leonean Baobab Jam', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sierra Leone (SL)', oras: 'Lunsar', suvenir: 'Lunsar Handwoven Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Port Loko
{ tara: 'Sierra Leone (SL)', oras: 'Port Loko', suvenir: 'Port Loko Ceramic Vase', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sierra Leone (SL)', oras: 'Port Loko', suvenir: 'Sierra Leonean Red Palm Oil', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sierra Leone (SL)', oras: 'Port Loko', suvenir: 'Port Loko Beaded Earrings', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Kabala
{ tara: 'Sierra Leone (SL)', oras: 'Kabala', suvenir: 'Kabala Wooden Sculpture', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sierra Leone (SL)', oras: 'Kabala', suvenir: 'Sierra Leonean Fried Cassava', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sierra Leone (SL)', oras: 'Kabala', suvenir: 'Kabala Beaded Bracelet', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Waterloo
{ tara: 'Sierra Leone (SL)', oras: 'Waterloo', suvenir: 'Waterloo Fabric Art', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sierra Leone (SL)', oras: 'Waterloo', suvenir: 'Sierra Leonean Ginger Beer', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sierra Leone (SL)', oras: 'Waterloo', suvenir: 'Waterloo Leather Journal', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

// Magburaka
{ tara: 'Sierra Leone (SL)', oras: 'Magburaka', suvenir: 'Magburaka Beaded Necklace', categorie: 'Art', destinatari: ['family', 'friend'] },
{ tara: 'Sierra Leone (SL)', oras: 'Magburaka', suvenir: 'Sierra Leonean Plantain Chips', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
{ tara: 'Sierra Leone (SL)', oras: 'Magburaka', suvenir: 'Magburaka Batik Scarf', categorie: 'Fashion', destinatari: ['acquaintance', 'relative'] },

    ];

    // Add documents to the collection
    for (const suvenir of testSuveniruri) {
      await addDoc(suveniruriCollection, suvenir);
    }

    console.log('Data added successfully.');
  } catch (error) {
    console.error("Error adding data: ", error);
    throw error;
  }
}

// Call the function to add test data
addTestData();
