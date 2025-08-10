/**
 * Generates direct search URLs for major marketplaces
 * @param {string} searchQuery - The search query to encode
 * @returns {Object} Object containing URLs for each marketplace
 */
function generateSearchUrls(searchQuery) {
    if (!searchQuery || typeof searchQuery !== 'string') {
        return {
            amazon: '',
            ebay: '',
            aliexpress: ''
        };
    }

    // URI encode the search query
    const encodedQuery = encodeURIComponent(searchQuery.trim());
    
    // Generate URLs for each marketplace
    const urls = {
        amazon: `https://www.amazon.com/s?k=${encodedQuery}`,
        ebay: `https://www.ebay.com/sch/i.html?_nkw=${encodedQuery}`,
        aliexpress: `https://www.aliexpress.com/wholesale?SearchText=${encodedQuery}`
    };
    
    return urls;
}

/**
 * Opens search results in new tabs for all marketplaces
 * @param {string} searchQuery - The search query
 */
function openAllMarketplaceSearches(searchQuery) {
    const urls = generateSearchUrls(searchQuery);
    
    // Open each URL in a new tab
    Object.values(urls).forEach(url => {
        if (url) {
            window.open(url, '_blank');
        }
    });
}

/**
 * Opens search results for a specific marketplace
 * @param {string} marketplace - The marketplace name ('amazon', 'ebay', 'aliexpress')
 * @param {string} searchQuery - The search query
 */
function openMarketplaceSearch(marketplace, searchQuery) {
    const urls = generateSearchUrls(searchQuery);
    const url = urls[marketplace.toLowerCase()];
    
    if (url) {
        window.open(url, '_blank');
    } else {
        console.error(`Invalid marketplace: ${marketplace}`);
    }
}

// Example usage and testing
function testGenerateSearchUrls() {
    const testQueries = [
        "panoramic smart camera night vision",
        "wireless bluetooth headphones",
        "gaming laptop rgb keyboard",
        "women summer dress",
        "running shoes men"
    ];
    
    console.log("Testing generateSearchUrls function:\n");
    
    testQueries.forEach((query, index) => {
        console.log(`Test ${index + 1}: "${query}"`);
        const urls = generateSearchUrls(query);
        
        console.log(`  Amazon: ${urls.amazon}`);
        console.log(`  eBay: ${urls.ebay}`);
        console.log(`  AliExpress: ${urls.aliexpress}`);
        console.log('');
    });
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        generateSearchUrls, 
        openAllMarketplaceSearches, 
        openMarketplaceSearch 
    };
}

// Run test if in browser
if (typeof window !== 'undefined') {
    // Uncomment the line below to run tests in browser console
    // testGenerateSearchUrls();
} 