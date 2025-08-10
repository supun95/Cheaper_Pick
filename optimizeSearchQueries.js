/**
 * Converts a product name into 3 optimized marketplace search queries
 * @param {string} productName - The original product name
 * @returns {string[]} Array of 3 optimized search queries
 */
function optimizeSearchQueries(productName) {
    if (!productName || typeof productName !== 'string') {
        return ['', '', ''];
    }

    // Clean the product name first (remove brand suffixes, etc.)
    let cleanedName = cleanProductName(productName);
    
    // Generate 3 different search strategies
    const queries = [];
    
    // Strategy 1: Keep main product features and category
    queries.push(generateMainQuery(cleanedName));
    
    // Strategy 2: Focus on core product type and key feature
    queries.push(generateCoreQuery(cleanedName));
    
    // Strategy 3: Simplify to basic category and type
    queries.push(generateSimpleQuery(cleanedName));
    
    return queries;
}

/**
 * Cleans product name by removing brand suffixes and extra text
 * @param {string} name - Product name to clean
 * @returns {string} Cleaned product name
 */
function cleanProductName(name) {
    if (!name) return '';
    
    // Remove common brand suffixes and marketing text
    const suffixesToRemove = [
        /\s*\|\s*buy\s+now\s*$/i,
        /\s*\|\s*free\s+shipping\s*$/i,
        /\s*\|\s*fast\s+shipping\s*$/i,
        /\s*\|\s*next\s+day\s+delivery\s*$/i,
        /\s*\|\s*amazon\s*$/i,
        /\s*\|\s*ebay\s*$/i,
        /\s*\|\s*walmart\s*$/i,
        /\s*\|\s*target\s*$/i,
        /\s*\|\s*shop\s*$/i,
        /\s*\|\s*store\s*$/i,
        /\s*\|\s*online\s*$/i,
        /\s*\|\s*official\s+store\s*$/i,
        /\s*\|\s*official\s+site\s*$/i,
        /\s*-\s*buy\s+now\s*$/i,
        /\s*-\s*free\s+shipping\s*$/i,
        /\s*-\s*fast\s+shipping\s*$/i,
        /\s*-\s*amazon\s*$/i,
        /\s*-\s*ebay\s*$/i,
        /\s*-\s*walmart\s*$/i,
        /\s*-\s*target\s*$/i,
        /\s*-\s*shop\s*$/i,
        /\s*-\s*store\s*$/i,
        /\s*-\s*online\s*$/i,
        /\s*-\s*official\s+store\s*$/i,
        /\s*-\s*official\s+site\s*$/i,
        /\s*•\s*buy\s+now\s*$/i,
        /\s*•\s*free\s+shipping\s*$/i,
        /\s*•\s*fast\s+shipping\s*$/i,
        /\s*•\s*amazon\s*$/i,
        /\s*•\s*ebay\s*$/i,
        /\s*•\s*walmart\s*$/i,
        /\s*•\s*target\s*$/i,
        /\s*•\s*shop\s*$/i,
        /\s*•\s*store\s*$/i,
        /\s*•\s*online\s*$/i,
        /\s*•\s*official\s+store\s*$/i,
        /\s*•\s*official\s+site\s*$/i
    ];
    
    let cleaned = name;
    for (const suffix of suffixesToRemove) {
        cleaned = cleaned.replace(suffix, '');
    }
    
    return cleaned.replace(/\s+/g, ' ').trim();
}

/**
 * Generates main query with key features
 * @param {string} name - Cleaned product name
 * @returns {string} Main search query
 */
function generateMainQuery(name) {
    const words = name.toLowerCase().split(/\s+/);
    const filteredWords = words.filter(word => {
        // Remove common adjectives and marketing words
        const skipWords = [
            'new', 'best', 'hot', 'premium', 'professional', 'advanced',
            'super', 'ultra', 'mega', 'pro', 'deluxe', 'luxury', 'high',
            'quality', 'top', 'leading', 'famous', 'popular', 'trending',
            'amazing', 'incredible', 'fantastic', 'excellent', 'perfect',
            'great', 'good', 'nice', 'beautiful', 'stylish', 'modern',
            'classic', 'traditional', 'vintage', 'antique', 'unique',
            'special', 'exclusive', 'limited', 'edition', 'version'
        ];
        return !skipWords.includes(word) && word.length > 1;
    });
    
    return filteredWords.slice(0, 6).join(' '); // Limit to 6 words
}

/**
 * Generates core query focusing on main product type and key feature
 * @param {string} name - Cleaned product name
 * @returns {string} Core search query
 */
function generateCoreQuery(name) {
    const words = name.toLowerCase().split(/\s+/);
    
    // Identify key product categories and features
    const categories = ['camera', 'phone', 'laptop', 'headphones', 'speaker', 'tablet', 'watch', 'shoes', 'bag', 'dress', 'shirt', 'pants', 'jacket', 'coat', 'sweater', 'jeans', 'skirt', 'blouse', 't-shirt', 'hoodie', 'sneakers', 'boots', 'sandals', 'heels', 'flats', 'loafers', 'slippers', 'backpack', 'purse', 'wallet', 'belt', 'scarf', 'hat', 'gloves', 'socks', 'underwear', 'bra', 'pajamas', 'robe', 'bathrobe', 'towel', 'bedding', 'pillow', 'blanket', 'curtain', 'rug', 'lamp', 'chair', 'table', 'desk', 'bed', 'sofa', 'couch', 'tv', 'monitor', 'keyboard', 'mouse', 'printer', 'scanner', 'router', 'modem', 'cable', 'charger', 'battery', 'power', 'adapter', 'usb', 'hdmi', 'bluetooth', 'wifi', 'wireless', 'smart', 'digital', 'electronic', 'gaming', 'sports', 'fitness', 'kitchen', 'bathroom', 'bedroom', 'living', 'dining', 'office', 'garden', 'outdoor', 'indoor', 'baby', 'kids', 'children', 'men', 'women', 'unisex', 'pet', 'dog', 'cat', 'bird', 'fish', 'car', 'bike', 'motorcycle', 'truck', 'van', 'suv', 'sedan', 'hatchback', 'convertible', 'electric', 'hybrid', 'gas', 'diesel', 'manual', 'automatic', 'manual', 'automatic', 'manual', 'automatic'];
    
    const features = ['panoramic', '360', 'night', 'vision', 'security', 'surveillance', 'motion', 'detection', 'recording', 'playback', 'streaming', 'live', 'remote', 'access', 'mobile', 'app', 'cloud', 'storage', 'sd', 'card', 'memory', 'battery', 'powered', 'solar', 'wired', 'wireless', 'bluetooth', 'wifi', 'cellular', '4g', '5g', 'lte', 'gps', 'touch', 'screen', 'display', 'oled', 'lcd', 'led', 'retina', 'hd', '4k', '8k', 'ultra', 'high', 'definition', 'resolution', 'pixel', 'megapixel', 'zoom', 'optical', 'digital', 'autofocus', 'manual', 'focus', 'aperture', 'shutter', 'speed', 'iso', 'exposure', 'white', 'balance', 'flash', 'stabilization', 'waterproof', 'water', 'resistant', 'dust', 'proof', 'shock', 'proof', 'impact', 'resistant', 'rugged', 'durable', 'lightweight', 'compact', 'portable', 'foldable', 'collapsible', 'adjustable', 'ergonomic', 'comfortable', 'breathable', 'moisture', 'wicking', 'quick', 'dry', 'stain', 'resistant', 'wrinkle', 'free', 'iron', 'free', 'machine', 'washable', 'hand', 'wash', 'dry', 'clean', 'only', 'steam', 'iron', 'low', 'heat', 'bleach', 'free', 'fragrance', 'free', 'hypoallergenic', 'organic', 'natural', 'synthetic', 'cotton', 'polyester', 'nylon', 'spandex', 'elastane', 'wool', 'silk', 'leather', 'suede', 'canvas', 'denim', 'linen', 'cashmere', 'angora', 'mohair', 'alpaca', 'merino', 'pima', 'egyptian', 'cotton', 'bamboo', 'hemp', 'jute', 'sisal', 'cork', 'wood', 'metal', 'plastic', 'glass', 'ceramic', 'stone', 'marble', 'granite', 'quartz', 'crystal', 'diamond', 'gold', 'silver', 'platinum', 'titanium', 'stainless', 'steel', 'aluminum', 'copper', 'brass', 'bronze', 'chrome', 'nickel', 'zinc', 'iron', 'cast', 'wrought', 'forged', 'milled', 'machined', 'welded', 'soldered', 'brazed', 'riveted', 'screwed', 'bolted', 'glued', 'adhered', 'bonded', 'sewn', 'stitched', 'embroidered', 'printed', 'painted', 'coated', 'plated', 'anodized', 'powder', 'coated', 'galvanized', 'zinc', 'plated', 'chrome', 'plated', 'nickel', 'plated', 'gold', 'plated', 'silver', 'plated', 'rhodium', 'plated', 'palladium', 'plated', 'titanium', 'nitride', 'coated', 'diamond', 'like', 'carbon', 'coated', 'ceramic', 'coated', 'polymer', 'coated', 'epoxy', 'coated', 'urethane', 'coated', 'acrylic', 'coated', 'vinyl', 'coated', 'rubber', 'coated', 'silicone', 'coated', 'teflon', 'coated', 'non', 'stick', 'coated', 'anti', 'reflective', 'coated', 'anti', 'glare', 'coated', 'anti', 'scratch', 'coated', 'anti', 'fingerprint', 'coated', 'anti', 'bacterial', 'coated', 'anti', 'microbial', 'coated', 'anti', 'fungal', 'coated', 'anti', 'viral', 'coated', 'anti', 'odor', 'coated', 'anti', 'stain', 'coated', 'anti', 'wrinkle', 'coated', 'anti', 'static', 'coated', 'anti', 'uv', 'coated', 'anti', 'radiation', 'coated', 'anti', 'magnetic', 'coated', 'anti', 'corrosive', 'coated', 'anti', 'rust', 'coated', 'anti', 'oxidation', 'coated', 'anti', 'aging', 'coated', 'anti', 'aging', 'coated', 'anti', 'aging', 'coated'];
    
    let category = '';
    let feature = '';
    
    // Find category
    for (const word of words) {
        if (categories.includes(word)) {
            category = word;
            break;
        }
    }
    
    // Find key feature
    for (const word of words) {
        if (features.includes(word)) {
            feature = word;
            break;
        }
    }
    
    if (category && feature) {
        return `${feature} ${category}`;
    } else if (category) {
        return category;
    } else if (feature) {
        return feature;
    } else {
        return words.slice(0, 3).join(' ');
    }
}

/**
 * Generates simple query with basic category and type
 * @param {string} name - Cleaned product name
 * @returns {string} Simple search query
 */
function generateSimpleQuery(name) {
    const words = name.toLowerCase().split(/\s+/);
    
    // Common product type mappings
    const typeMappings = {
        'camera': 'camera',
        'smartphone': 'phone',
        'mobile': 'phone',
        'cell': 'phone',
        'laptop': 'laptop',
        'computer': 'laptop',
        'notebook': 'laptop',
        'headphones': 'headphones',
        'earbuds': 'headphones',
        'earphones': 'headphones',
        'speaker': 'speaker',
        'bluetooth': 'speaker',
        'tablet': 'tablet',
        'ipad': 'tablet',
        'watch': 'watch',
        'smartwatch': 'watch',
        'fitness': 'watch',
        'activity': 'watch',
        'shoes': 'shoes',
        'sneakers': 'shoes',
        'boots': 'shoes',
        'sandals': 'shoes',
        'heels': 'shoes',
        'flats': 'shoes',
        'loafers': 'shoes',
        'slippers': 'shoes',
        'bag': 'bag',
        'backpack': 'bag',
        'purse': 'bag',
        'handbag': 'bag',
        'tote': 'bag',
        'wallet': 'wallet',
        'belt': 'belt',
        'scarf': 'scarf',
        'hat': 'hat',
        'cap': 'hat',
        'beanie': 'hat',
        'gloves': 'gloves',
        'socks': 'socks',
        'underwear': 'underwear',
        'bra': 'bra',
        'pajamas': 'pajamas',
        'robe': 'robe',
        'bathrobe': 'robe',
        'towel': 'towel',
        'bedding': 'bedding',
        'pillow': 'pillow',
        'blanket': 'blanket',
        'curtain': 'curtain',
        'rug': 'rug',
        'carpet': 'rug',
        'lamp': 'lamp',
        'light': 'lamp',
        'chair': 'chair',
        'table': 'table',
        'desk': 'desk',
        'bed': 'bed',
        'sofa': 'sofa',
        'couch': 'sofa',
        'tv': 'tv',
        'television': 'tv',
        'monitor': 'monitor',
        'keyboard': 'keyboard',
        'mouse': 'mouse',
        'printer': 'printer',
        'scanner': 'scanner',
        'router': 'router',
        'modem': 'modem',
        'cable': 'cable',
        'charger': 'charger',
        'battery': 'battery',
        'power': 'power',
        'adapter': 'adapter',
        'usb': 'usb',
        'hdmi': 'hdmi',
        'bluetooth': 'bluetooth',
        'wifi': 'wifi',
        'wireless': 'wireless',
        'smart': 'smart',
        'digital': 'digital',
        'electronic': 'electronic',
        'gaming': 'gaming',
        'sports': 'sports',
        'fitness': 'fitness',
        'kitchen': 'kitchen',
        'bathroom': 'bathroom',
        'bedroom': 'bedroom',
        'living': 'living',
        'dining': 'dining',
        'office': 'office',
        'garden': 'garden',
        'outdoor': 'outdoor',
        'indoor': 'indoor',
        'baby': 'baby',
        'kids': 'kids',
        'children': 'kids',
        'men': 'men',
        'women': 'women',
        'unisex': 'unisex',
        'pet': 'pet',
        'dog': 'pet',
        'cat': 'pet',
        'bird': 'pet',
        'fish': 'pet',
        'car': 'car',
        'bike': 'bike',
        'motorcycle': 'bike',
        'truck': 'truck',
        'van': 'van',
        'suv': 'suv',
        'sedan': 'sedan',
        'hatchback': 'hatchback',
        'convertible': 'convertible',
        'electric': 'electric',
        'hybrid': 'hybrid',
        'gas': 'gas',
        'diesel': 'diesel',
        'manual': 'manual',
        'automatic': 'automatic'
    };
    
    // Find the main product type
    let productType = '';
    for (const word of words) {
        if (typeMappings[word]) {
            productType = typeMappings[word];
            break;
        }
    }
    
    // If no specific type found, use first meaningful word
    if (!productType && words.length > 0) {
        productType = words[0];
    }
    
    return productType;
}

// Example usage and testing
function testOptimizeSearchQueries() {
    const testCases = [
        "360° Panoramic Smart Camera with Night Vision | Free Shipping",
        "Premium Wireless Bluetooth Headphones with Noise Cancellation",
        "New Best Hot Gaming Laptop with RGB Keyboard",
        "Professional DSLR Camera Kit with Multiple Lenses",
        "Stylish Women's Summer Dress | Fast Shipping",
        "Ultra Lightweight Running Shoes for Men",
        "Smart Home Security System with Mobile App"
    ];
    
    console.log("Testing optimizeSearchQueries function:\n");
    
    testCases.forEach((testCase, index) => {
        console.log(`Test ${index + 1}: "${testCase}"`);
        const queries = optimizeSearchQueries(testCase);
        queries.forEach((query, i) => {
            console.log(`  ${i + 1}. "${query}"`);
        });
        console.log('');
    });
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { optimizeSearchQueries, testOptimizeSearchQueries };
}

// Run test if in browser
if (typeof window !== 'undefined') {
    // Uncomment the line below to run tests in browser console
    // testOptimizeSearchQueries();
} 